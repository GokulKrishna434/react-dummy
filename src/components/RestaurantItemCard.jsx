import { useDispatch } from 'react-redux';
import { CDN_URL } from '../utils/constants';
import { addItem } from '../utils/cartSlice';

const RestaurantItemCard = ({ info }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(info));
  };
  return (
    <div className="flex justify-between my-3 border-b-2 border-gray-300">
      <div className="w-8/12">
        <div className="font-semibold">{info?.name}</div>
        <div className="text-sm font-bold">
          ₹{(info?.price ?? info?.defaultPrice) / 100}
        </div>
        <p className="text-xs">{info?.description}</p>
      </div>
      <div className="w-3/12 mb-2 relative">
        <div className="absolute bottom-1 left-6">
          <button
            className="bg-black text-white mx-16 rounded px-3 cursor-pointer"
            onClick={handleAddItem}
          >
            Add +
          </button>
        </div>
        {info?.imageId && (
          <img className="rounded" src={`${CDN_URL}${info?.imageId}`} />
        )}
      </div>
    </div>
  );
};

export default RestaurantItemCard;
