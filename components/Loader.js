import React from "react";
import s from "./styles/Loader.module.css";
import { CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <div className={s.loaderContainer}>
      <CircularProgress size={50} />
    </div>
  );
}
