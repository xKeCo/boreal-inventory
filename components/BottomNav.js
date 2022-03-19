import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

//hooks
import useAuth from "../hooks/useAuth";

//styles
import s from "./styles/BottomNav.module.css";

//Svgs
import home from "../public/home.svg";
import homeFilled from "../public/homeFilled.svg";
import history from "../public/history.svg";
import historyFilled from "../public/historyFilled.svg";
import user from "../public/user.svg";
import userFilled from "../public/userFilled.svg";
import add from "../public/add.svg";
import addFilled from "../public/addFilled.svg";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const { userData } = useAuth();
  const router = useRouter();

  const path = router.pathname;

  return (
    <>
      <div className={s.bottomNav}>
        {userData.role === "admin" && (
          <>
            <Link href="/">
              <div className={s.bottomNav__iconContainer}>
                <a>
                  {path === "/home" ? (
                    <Image
                      src={homeFilled}
                      alt="Logo"
                      className={s.logo}
                      width={25}
                      height={25}
                    />
                  ) : (
                    <Image
                      src={home}
                      alt="Logo"
                      className={s.logo}
                      width={25}
                      height={25}
                    />
                  )}
                </a>
              </div>
            </Link>

            <Link href="/history">
              <div className={s.bottomNav__iconContainer}>
                <a>
                  {path === "/history" ? (
                    <Image
                      src={historyFilled}
                      alt="Logo"
                      className={s.logo}
                      width={25}
                      height={25}
                    />
                  ) : (
                    <Image
                      src={history}
                      alt="Logo"
                      className={s.logo}
                      width={25}
                      height={25}
                    />
                  )}
                </a>
              </div>
            </Link>
          </>
        )}

        <Link href="/add">
          <div className={s.bottomNav__iconContainer}>
            <a>
              {path === "/add" ? (
                <Image
                  src={addFilled}
                  alt="Logo"
                  className={s.logo}
                  width={25}
                  height={25}
                />
              ) : (
                <Image
                  src={add}
                  alt="Logo"
                  className={s.logo}
                  width={25}
                  height={25}
                />
              )}
            </a>
          </div>
        </Link>
        <Link href="/profile">
          <div className={s.bottomNav__iconContainer}>
            <a>
              {path === "/profile" ? (
                <Image
                  src={userFilled}
                  alt="Logo"
                  className={s.logo}
                  width={25}
                  height={25}
                />
              ) : (
                <Image
                  src={user}
                  alt="Logo"
                  className={s.logo}
                  width={25}
                  height={25}
                />
              )}
            </a>
          </div>
        </Link>
      </div>
    </>
  );
}
