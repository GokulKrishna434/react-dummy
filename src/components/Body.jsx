import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router';
import { RESTAURANTS_API_URL } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const isOnline = useOnlineStatus();

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    [],
  );
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_API_URL);

    const json = await data.json();
    const newData = await json?.data?.cards.find(
      (item) => item?.card?.card?.id === 'restaurant_grid_listing',
    ).card?.card?.gridElements?.infoWithStyle?.restaurants;
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
      <div className="filter">
        <div className="search-container">
          <input
            className="search-box"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
          <button
            className="search-btn"
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
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredListOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={`/restaurants/${restaurant?.info?.id}`}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
