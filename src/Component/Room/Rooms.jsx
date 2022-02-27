import React from "react";
import { Link } from "react-router-dom";
import "./Rooms.css";

const Rooms = () => {
  return (
    <>
      <div className="room">
        <div className="bki1">
          <div className="r1">
            <p>Available Rooms</p>
            <hr />
            <text>Best In Class Rooms</text>
            <div className="return">
              <Link to="/" className="but4">
                RETURN HOME
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bki2">
        <p>Search Rooms</p>
        <hr style={{ color: "#5656f1" }} />
        <div className="last">
          <div className="main-room">
            <label>Room Type</label>
            <select name="type" id="type" className="group">
              <option value="all">All</option>
              <option value="double - basic">Double-Basic</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
            </select>
            <br />
            <div className="room-gr1">
              <label> Guests</label>
              <select name="type" id="type" className="group">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <br />
            <div className="room-gr2">
              <label>
                Room Price Rs. 50000
                <br />
              </label>
              <input
                type="range"
                min={0}
                max={50000}
                minValue={0}
                maxValue={50000}
                className="group"
              />
            </div>
            <br />
          </div>
          <div className="last-room">
            <div className="room-gr3">
              <input
                type="checkbox"
                id="check"
                className="g1"
                style={{ width: "40px", height: "20px" }}
              />
              <label>BreakFast</label>
              <br />
              <input
                type="checkbox"
                id="check"
                className="g1"
                style={{ width: "40px", height: "20px" }}
              />
              <label>Pets</label>
              <div className="last1">
                <label>Room Size</label>

                <input type="number" id="size" value="0" className="g2" />
                <input type="number" id="size" value="500" className="g2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
