import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
      console.log("you are offline now");
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
      console.log("you are now online");
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
