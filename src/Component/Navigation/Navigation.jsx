import style from "../Navigation/Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const dataMenu = [
  {
    id: 1,
    label: "Main",
    path: "",
  },
  {
    id: 2,
    label: "Portfolio",
    path: "portfolio",
  },
  {
    id: 3,
    label: "About",
    path: "about",
  },
  {
    id: 4,
    label: "Contacts",
    path: "contacts",
  },
];

const Navigation = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const ul = useRef(null);
  useEffect(() => {
    console.log(x - y);
    ul.current.style.transform = `translate3d(${(x - y) * -1}px,0,0)`;
  }, [x, y]);

  return (
    <>
      <div className={style.list}>
        <ul
          ref={ul}
          onMouseEnter={(v) => {
            console.log(v);
          }}
          onTouchStart={({ changedTouches }) => {
            const { clientX } = changedTouches[0];
            setX(clientX);
          }}
          onTouchEnd={({ changedTouches }) => {
            const { clientX } = changedTouches[0];
            setY(clientX);
          }}
          className={style.l}
        >
          {dataMenu.map((v) => {
            return (
              <li key={v.id} className={style.item}>
                <NavLink className={`${style.link}`} to={v.path}>
                  {v.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
