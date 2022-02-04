import React from "react";
import s from "./styles/Layout.module.css";

export default function Layout({ children }) {
  return <div className={s.container}>{children}</div>;
}
