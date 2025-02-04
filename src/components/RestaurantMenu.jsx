import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { avgRating, costForTwoMessage, cuisines, name } =
    resInfo?.cards[2]?.card?.card?.info;

  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  const index = cards.findIndex((card) =>
    card?.card?.card?.hasOwnProperty('itemCards'),
  );

  const categories = cards.filter(
    (card) =>
      card?.card?.card['@type'] ===
      'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
  );

  return (
    <div className="p-4">
      <div className="text-center">
        <h1 className="font-bold text-2xl">{name}</h1>
        <h3 className="font-semibold">
          {avgRating} - {costForTwoMessage}
        </h3>
        <p className="font-semibold mb-5">{cuisines?.join(', ')}</p>
      </div>

      {categories?.map((category) => (
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
