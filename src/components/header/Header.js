import "./Header.css";
import msg from "../../images/msg.png";
import notification from "../../images/notification.png";
import crocodile from "../../images/crocodile.png";
import search from "../../images/header-search.png";

const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="header-toggle__btn">
        <span className="btn-explore">Explore</span>
        <span>Activity</span>
      </div>
      <div className="header-input__wrapper">
        <div className="input-search-icon">
          <img src={search} alt="" />
        </div>
        <input
          className="header__input--style"
          placeholder="Search by name, group, type and others "
        />
      </div>
      <div className="header__icons">
        <div style={{ position: "relative", paddingRight: "10px" }}>
          <img src={msg} alt="" />
          <div className="msg-notification">2</div>
        </div>
        <div style={{ position: "relative", paddingRight: "10px" }}>
          <img src={notification} alt="" />
          <div className="msg-notification">3</div>
        </div>
        <div>
          <img className="crocodile-icon" src={crocodile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
