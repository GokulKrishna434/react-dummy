import { useContext, useEffect, useState } from 'react';
import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router';
import { RESTAURANTS_API_URL } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
  const isOnline = useOnlineStatus();

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    [],
  );
  const [keyword, setKeyword] = useState('');

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_API_URL);

    const json = await data.json();
    const newData = await json?.data?.cards.find(
      (item) => item?.card?.card?.id === 'top_brands_for_you',
    ).card?.card?.gridElements?.infoWithStyle?.restaurants;
    newData.map(
      (item, index) => (item.info.promoted = index % 3 === 0 ? true : false),
    );
    setListOfRestaurants(newData);
    setFilteredListOfRestaurants(newData);
  };

  if (!isOnline) {
    return (
      <h1>Looks like you're offline. Please check your internet connection.</h1>
    );
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            data-testid="search"
            className="border border-solid border-gray-400 outline-0 p-1 px-2 rounded-md"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg "
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  ?.includes(keyword?.toLowerCase()),
              );
              setFilteredListOfRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center ">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredRes = listOfRestaurants?.filter(
                (res) => res?.info.avgRating > 4.2,
              );
              setFilteredListOfRestaurants(filteredRes);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center ">
          <input
            className="border border-solid border-gray-400 outline-0 p-1 px-2 rounded-md"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mb-3 pb-3">
        {filteredListOfRestaurants.map((restaurant) => (
          <Link
            className="h-auto"
            key={restaurant?.info?.id}
            to={`/restaurants/${restaurant?.info?.id}`}
          >
            {restaurant.info.promoted ? (
              <PromotedRestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
