import "./SideBar.css";
import logo from "../../images/logo.png";
import home from "../../images/home.png";
import search from "../../images/search.png";
import bag from "../../images/bag.png";
import shirt from "../../images/shirt.png";
import wool from "../../images/wool.png";
import cart from "../../images/cart.png";
import circle from "../../images/circle.png";

import setting from "../../images/setting.png";
import question from "../../images/question.png";
import logout from "../../images/logout.png";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <div className="sidebar__icon--top">
        <img src={logo} alt="" />
        <img src={home} alt="" />
        <img src={search} alt="" />
        <img src={bag} alt="" />
        <img src={shirt} alt="" />
        <img src={wool} alt="" />
        <img src={cart} alt="" />
        <img src={circle} alt="" />
      </div>
      <div className="sidebar__icon--bottom">
        <img src={setting} alt="" />
        <img src={question} alt="" />
        <img
          src={logout}
          alt=""
          onClick={() => {
            window.localStorage.removeItem("token");
            navigate("/");
          }}
        />
      </div>
    </div>
  );
};

export default SideBar;
