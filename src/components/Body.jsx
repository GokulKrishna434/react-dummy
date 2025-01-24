import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log('list updated ', listOfRestaurants);
  }, [listOfRestaurants]);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.495049923726176&lng=76.94725647568703&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
    );

    const json = await data.json();
    const newData = await json?.data?.cards.find(
      (item) => item?.card?.card?.id === 'restaurant_grid_listing',
    ).card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(newData);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRes = listOfRestaurants.filter(
              (res) => res?.info.avgRating > 4.2,
            );
            setListOfRestaurants(filteredRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
