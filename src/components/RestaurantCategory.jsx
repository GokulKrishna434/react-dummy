import RestaurantItemCard from './RestaurantItemCard';

const RestaurantCategory = ({ data, isExpanded, setExpandedIndex }) => {
  const toggleExpand = () => {
    setExpandedIndex();
  };

  return (
    <div className=" bg-gray-100 w-8/12 mx-auto my-4 px-4 py-1 shadow rounded">
      <div
        className="flex justify-between cursor-pointer"
        onClick={toggleExpand}
      >
        <h4 className="text-lg font-semibold">{data?.title}</h4>
        <span>🔻</span>
      </div>

      {isExpanded && (
        <div>
          {data?.itemCards.map((item, index) => (
            <RestaurantItemCard
              key={`res-${item?.card?.info?.id}-${index}`}
              info={item?.card?.info}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
