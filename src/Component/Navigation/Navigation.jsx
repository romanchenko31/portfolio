import style from "../Navigation/Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import img1 from "../../images/link.svg";
import img2 from "../../images/livros.svg";
import img3 from "../../images/music.svg";
import img4 from "../../images/video.svg";

const dataMenu = [
  {
    id: 1,
    key: 11,
    label: "Main",
    path: "",
    img: img1,
  },
  {
    id: 2,
    key: 12,
    label: "Portfolio",
    path: "portfolio",
    img: img2,
  },
  {
    id: 3,
    key: 13,
    label: "About",
    path: "about",
    img: img3,
  },
  {
    id: 4,
    key: 14,
    label: "Contacts",
    path: "contacts",
    img: img4,
  },
];

const Navigation = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    rtl: false,
    slides: {
      perView: 3,
      spacing: 20,
    },
  });
  return (
    <ul ref={sliderRef} className={`${style.list} keen-slider`}>
      {dataMenu.map((value) => {
        return (
          <li
            className={`${style.item} keen-slider__slide number-slide1`}
            key={value.id}
          >
            <NavLink className={style.link} to={value.path}>
              <img className={style.img} src={value.img} alt="img" />
              {value.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
