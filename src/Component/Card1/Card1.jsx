import React from "react";
import "./Card1.css";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Card1 = (props) => {
  return (
    <>
      <div className="row">
        <div className="column">
          <div className="card1">
            <p className="icon">{props.icon}</p>
            <h6>{props.name}</h6>
            <div className="abc">
              <p className="para">{props.para}</p>
              <p className="year">{props.year}</p>
            </div>
            <p className="text">
              <b>{props.text}</b>
            </p>
            <div className="social-media">
              <ul className="social-media-desktop">
                <li>
                  <FaYoutube className="Youtube" size={30} color="red" />
                </li>
                <li>
                  <FaInstagram
                    className="Instagram"
                    size={30}
                    color="rgb(166, 11, 255)"
                  />
                </li>
                <li>
                  <FaFacebook className="Facebook" size={30} color="blue" />
                </li>
                <li>
                  <BsLinkedin className="Linkdin" size={30} color="blue" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
