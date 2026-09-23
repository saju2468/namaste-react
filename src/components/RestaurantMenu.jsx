import Shimmer from "./Shimmer";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantmenu(resId);

  console.log(resId);

  if (resMenu === null) {
    return <Shimmer />;
  }

  const { pageTitle } = resMenu.page_info;

  const name = resMenu.page_data.sections.SECTION_BASIC_INFO.cuisine_string;

  const { title, highlights } =
    resMenu.page_data.sections.SECTION_RES_DETAILS.HIGHLIGHTS;

  return (
    <>
      <div>
        <h1>{pageTitle}</h1>
        <h3>{name}</h3>
        <div className="more_info">
          <h2>{title}</h2>
          <ul>
            {highlights.map((item) => (
              <li key={item.text}>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
