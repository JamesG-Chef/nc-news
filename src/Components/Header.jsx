import React, { useContext } from "react";
import "../Styles/Header.css";
import { FiHome, FiCoffee } from "react-icons/fi";
import { Link } from "react-router-dom";
import UserContext from "./User/LoggedInUser";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <>
      <header className="header">
        <div className="user">
          <div className="loggedin_user_avatar_box">
            <img
              className="user_avatar"
              src={loggedInUser.avatar_url}
              alt={loggedInUser.username}
            ></img>
          </div>
          <span className="username">{loggedInUser.username}</span>
        </div>

        <div className="title_container">
          <h1 className="title">
            NC. News <FiCoffee id="coffee_icon" />
          </h1>
        </div>

        <div className="back_to_articles_button">
          <button aria-label="home-button" className="home-button">
            <Link className="home_link" to={"/"}>
              <p className="home-icon">
                <FiHome />
              </p>
            </Link>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
