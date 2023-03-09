import style from "../Navigation/Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

const dataMenu = [
  {
    id: 1,
    key: 11,
    label: "Main",
    path: "",
  },
  {
    id: 2,
    key: 12,
    label: "Portfolio",
    path: "portfolio",
  },
  {
    id: 3,
    key: 13,
    label: "About",
    path: "about",
  },
  {
    id: 4,
    key: 14,
    label: "Contacts",
    path: "contacts",
  },
];

const Navigation = () => {
  const li = useRef(null);

  // console.log(ul.current.pageYOffset);
  useEffect(() => {
    console.log(li.current);
  }, []);

  return (
    <>
      <ul className={style.list}>
        {dataMenu.map((v) => {
          return (
            <li id={v.key} ref={li} key={v.id} className={style.item}>
              <NavLink className={`${style.link}`} to={v.path}>
                {v.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Navigation;
