import React from "react";
import errorImg from "../../Images/errorImg.png";
import "../../Styles/ErrorComponent.css";

const ErrorComponent = ({ error }) => {
  return (
    <div className="page_container">
      <div className="error_container">
        <span className="error-text">
          Oops! we got a {error.status} {error.statusText}
        </span>
        <div className="image-container">
          <img src={errorImg} alt="Error" className="error_img" />
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
