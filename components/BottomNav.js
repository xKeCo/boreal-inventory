import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  Home as HomeIcon,
  Favorite as FavoriteIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const router = useRouter();

  const onLink = (href) => {
    router.push(href);
  };

  return (
    <BottomNavigation
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, width: "100%" }}
      value={value}
      showLabels
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <Link href="/" passHref>
        <BottomNavigationAction
          label="Inicio"
          // onClick={() => {
          //   onLink("/");
          // }}
          showLabel
          icon={<HomeIcon />}
        />
      </Link>

      <Link href="/" passHref>
        <BottomNavigationAction
          label="Inventario"
          // onClick={() => {
          //   onLink("/a");
          // }}
          showLabel
          icon={<FavoriteIcon />}
        />
      </Link>
      <Link href="/profile" passHref>
        <BottomNavigationAction
          label="Perfil"
          // onClick={() => {
          //   onLink("/profile");
          // }}
          showLabel
          icon={<PersonIcon />}
        />
      </Link>
    </BottomNavigation>
  );
}
