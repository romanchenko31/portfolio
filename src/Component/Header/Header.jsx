import img from "../../images/img.jpg";
import style from "./Header.module.css";
import Navigation from "../Navigation/Navigation.jsx";

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.ellipse_top}></div>
        <div className={style.ellipse_bottom}></div>
        <div className={style.rectangle}></div>
        <div className={style.wrapper}>
          <div className={style.img_wrapp}>
            <img
              className={style.imgPhoto}
              width="60"
              src={img}
              alt="Myphoto"
            />
          </div>
          <div>
            <h1 className={style.titleName}>Evgeniy Romanchenko</h1>
            <h2 className={style.description}>Front-End Developer</h2>
          </div>
        </div>
        <Navigation />
      </header>
    </>
  );
};

export default Header;
