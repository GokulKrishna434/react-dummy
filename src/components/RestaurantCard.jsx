import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } =
    resData?.info;

  return (
    <div className="m-4 p-4 h-full w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        alt="Restaurant Logo"
        className="rounded-lg"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <h3 className="font-bold py-5 text-lg">{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} mins</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute px-3 mx-4 rounded bg-black text-white">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
