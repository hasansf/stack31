import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";

const Navigation = () => {
  // const path = window.location.pathname;
  return (
    <div className={style.main}>
      <div className={style.container}>
        <nav className={style.nav}>
          <h2>Lecture31</h2>
          <ul>
            <NavLink to="/" activeClassName={style.active} >Home</NavLink>
            <NavLink to="/about" activeClassName={style.active}>About</NavLink>
            <NavLink to="/help" activeClassName={style.active}>Help</NavLink>
            <NavLink to="/contact" activeClassName={style.active}>Contact</NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
