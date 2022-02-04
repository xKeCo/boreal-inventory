import { useState } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";

// Material UI - Components
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  Home as HomeIcon,
  Favorite as FavoriteIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  // const router = useRouter();

  // const onLink = (href) => {
  //   router.push(href);
  // };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        borderTop: "1px solid #e0e0e0",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
      }}
      value={value}
      showLabels
      onChange={handleChange}
    >
      <Link href="/home" passHref>
        <BottomNavigationAction
          label="Inicio"
          value="/home"
          // onClick={() => {
          //   onLink("/home");
          // }}
          icon={<HomeIcon />}
        />
      </Link>
      <Link href="/a" passHref>
        <BottomNavigationAction
          label="Inventario"
          value="/"
          // onClick={() => {
          //   onLink("/");
          // }}
          icon={<FavoriteIcon />}
        />
      </Link>
      <Link href="/profile" passHref>
        <BottomNavigationAction
          label="Perfil"
          value="/profile"
          // onClick={() => {
          //   onLink("/profile");
          // }}
          icon={<PersonIcon />}
        />
      </Link>
    </BottomNavigation>
  );
}
