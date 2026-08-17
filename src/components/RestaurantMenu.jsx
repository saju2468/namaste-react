import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();

  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId + "/info&location=&isMobile=0");

    console.log(data);  

    const json = await data.json();

    setResMenu(json);
  };

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
