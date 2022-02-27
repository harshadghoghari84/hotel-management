import React from "react";
import { Link } from "react-router-dom";
import {
  FaHiking,
  FaGlassMartiniAlt,
  FaShuttleVan,
  FaBeer,
} from "react-icons/fa";
import "./Home.css";
import Card from "../Card/Card";

const Home = () => {
  const data = [
    {
      icon: <FaGlassMartiniAlt size={70} color="#5656f1" />,
      name: "Free Cocktil",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur",
    },
    {
      icon: <FaHiking size={70} color="#5656f1" />,
      name: "Endless Hiking",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur",
    },
    {
      icon: <FaShuttleVan size={70} color="#5656f1" />,
      name: "Free Shuttle",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur",
    },
    {
      icon: <FaBeer size={70} color="#5656f1" />,
      name: "Unlimited Beer",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur",
    },
  ];
  return (
    <>
      {/* first  */}
      <div className="home">
        <div className="bki">
          <div className="Home">
            <p>Luxurious Rooms</p>
            <hr />
            <text>Deluxe Rooms Starting At Rs. 5000/=</text>
            <div className="f1">
              <Link to="/rooms" className="but3">
                OUR ROOMS
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* second */}

      <div className="home1">
        <a>Services</a>
        <hr />
        <div className="cardCont">
          {data.map((item, index) => {
            return <Card icon={item.icon} name={item.name} text={item.text} />;
          })}
        </div>
      </div>
      {/* third */}
      <div className="home2">
        <p>Featured Rooms</p>
        <hr />
      </div>
    </>
  );
};

export default Home;
