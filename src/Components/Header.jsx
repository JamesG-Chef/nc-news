import React, { useContext } from "react";
import "../Styles/Header.css";
import { FiHome } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import UserContext from "./LoggedInUser";

const Header = () => {
  const { loggedInUser } = useContext(UserContext)
  return (
    <>
      <header className="hello">
      
        <h1>Welcome to the NC news App</h1>
        <span className="username">User: {loggedInUser.username}</span>
      <img className="user_avatar" src={loggedInUser.avatar_url} alt={loggedInUser.username}></img>
        <span className="username">kudos: {loggedInUser.kudos}</span>
        <div className="back_to_articles_button">
        <button className="home-button">
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
