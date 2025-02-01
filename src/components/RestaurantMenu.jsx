import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import useRestaurantMenu from '../utils/useRestaurantMenu';

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
  const { itemCards } = cards[index]?.card?.card;

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl">{name}</h1>
      <h3 className="font-semibold">
        {avgRating} - {costForTwoMessage}
      </h3>
      <p className="font-semibold mb-5">{cuisines?.join(', ')}</p>
      <h2 className="font-bold text-xl">Menu</h2>
      <ul className="list-disc px-6">
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs{' '}
            {(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
