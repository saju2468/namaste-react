import RestaurantCard from "../components/RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (restaurant) => restaurant.info,
      ),
    );

    setfilteredRestaurant(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (restaurant) => restaurant.info,
      ),
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body_wrapper">
      <div className="container ">
        <div className="filtering_wrap">
          <div className="search_barwrapper">
            <input
              type="text"
              placeholder="Search restaurants..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                console.log(searchText);

                const filteredSearch = listOfRestaurants.filter((res) =>
                  res.name.toLowerCase().includes(searchText.toLowerCase()),
                );

                setfilteredRestaurant(filteredSearch);
              }}
            >
              search
            </button>
          </div>

          <button
            className="top_ratedbtn"
            onClick={() => {
              const filteredList = listOfRestaurants
                .filter((res) => res.avgRating >= 4.3)
                .sort((a, b) => b.avgRating - a.avgRating);
              setListOfRestaurant(filteredList);
            }}
          >
            Top Rated Hotels
          </button>
        </div>
        <div className="restaurant_wrapper">
          {filteredRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.name} RestaurantData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
