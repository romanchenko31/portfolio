import style from "../Navigation/Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className={style.list}>
      <li className={style.item}>
        <NavLink className={`${style.link} ${style.main}`} to="">
          Main
        </NavLink>
      </li>
      <li className={style.item}>
        <NavLink className={`${style.link} ${style.portfolio}`} to="portfolio">
          Portfolio
        </NavLink>
      </li>
      <li className={style.item}>
        <NavLink className={`${style.link} ${style.about}`} to="about">
          About
        </NavLink>
      </li>
      <li className={style.item}>
        <NavLink className={`${style.link} ${style.contacts}`} to="contacts">
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
