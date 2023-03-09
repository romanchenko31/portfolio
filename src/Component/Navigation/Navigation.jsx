import style from "../Navigation/Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
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
  const [sliderRef] = useKeenSlider({
    loop: true,
    rtl: false,
    slides: {
      perView: 3,
      spacing: 10,
    },
  });
  return (
    <div
      style={{
        width: "350px",
        position: "absolute",
        right: "0",
        bottom: "0",
        display: "flex",

        overflow: "hidden",
      }}
    >
      <ul ref={sliderRef} className={`keen-slider`}>
        {dataMenu.map((v) => {
          return (
            <li
              style={{ boxShadow: "0px 15px 30px rgba(25, 31, 61, 0.1)" }}
              className="keen-slider__slide number-slide1"
              key={v.id}
            >
              <NavLink className={style.link} to={v.path}>
                {v.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
