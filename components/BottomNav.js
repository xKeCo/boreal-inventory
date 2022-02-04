import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  Home as HomeIcon,
  Favorite as FavoriteIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, width: "100%" }}
      value={value}
      showLabels
      onChange={handleChange}
    >
      <BottomNavigationAction label="Inicio" icon={<HomeIcon />} />
      <BottomNavigationAction label="Inventario" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Perfil" icon={<PersonIcon />} />
    </BottomNavigation>
  );
}
