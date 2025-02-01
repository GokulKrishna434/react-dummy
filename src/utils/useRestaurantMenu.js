import { useEffect, useState } from 'react';
import { MENU_API_URL } from './constants';

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(`${MENU_API_URL}${resId}`);
      const json = await data.json();
      setResInfo(json.data);
    } catch (e) {
      console.log(e);
      setResInfo(null);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
