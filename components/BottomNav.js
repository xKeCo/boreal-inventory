import { useState } from "react";
import Link from "next/link";

// Material UI - Components
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

// Icons
import {
  Home as HomeIcon,
  History as HistoryIcon,
  Person as PersonIcon,
  Add,
} from "@mui/icons-material";
import useAuth from "../hooks/useAuth";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const { userData } = useAuth();

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
      {userData.role === "admin" && (
        <Link href="/home" passHref>
          <BottomNavigationAction
            label="Inicio"
            value="/home"
            icon={<HomeIcon />}
          />
        </Link>
      )}

      {userData.role === "admin" && (
        <Link href="/history" passHref>
          <BottomNavigationAction
            label="Historial"
            value="/history"
            icon={<HistoryIcon />}
          />
        </Link>
      )}

      <Link href="/add" passHref>
        <BottomNavigationAction label="Add" value="/add" icon={<Add />} />
      </Link>

      <Link href="/profile" passHref>
        <BottomNavigationAction
          label="Perfil"
          value="/profile"
          icon={<PersonIcon />}
        />
      </Link>
    </BottomNavigation>
  );
}
