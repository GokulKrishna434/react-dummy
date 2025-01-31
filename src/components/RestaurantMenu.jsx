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
    <div>
      <h1>{name}</h1>
      <h3>
        {avgRating} - {costForTwoMessage}
      </h3>
      <p>{cuisines?.join(', ')}</p>
      <h2>Menu</h2>
      <ul>
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
