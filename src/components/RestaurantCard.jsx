import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { RestaurantData } = props;

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = RestaurantData;

  return (
    <div className="resturant_card">
      <img alt={name} src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
