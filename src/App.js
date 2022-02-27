import React from "react";
import Navbar from "./Component/navbar/Navbar";
import Home from "./Component/Home/Home";
import Rooms from "./Component/Room/Rooms";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
