import { useEffect, useState } from "react";
import { MENU_API } from "./constants";


const useRestaurantmenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    setResMenu(json);
  };

  return resMenu;
};

export default useRestaurantmenu;
