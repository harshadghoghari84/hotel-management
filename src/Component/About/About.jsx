import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Card1 from "../Card1/Card1";

const About = () => {
  const data = [
    {
      icon: <FaUserCircle size={90} color="black" />,
      name: "Director",
      text: "CONNECT",
      para: "CEO",
      year: "5 years",
    },
    {
      icon: <FaUserCircle size={90} color="black" />,
      name: "Team Member",
      text: "CONNECT",
      para: "Manager",
      year: "5 years",
    },
    {
      icon: <FaUserCircle size={90} color="black" />,
      name: "Team Member",
      text: "CONNECT",
      para: "Manager",
      year: "8 years",
    },
  ];
  return (
    <>
      {/*first*/}
      <div className="about">
        <div className="image" />
        <div className="head">
          <p>About Us hello</p>
          <text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br /> Voluptas officia eligendi dolorem molestias nesciunt <br />
            aliquam deserunt velit fuga quidem atque?
          </text>
          <div>
            <Link to="/Contact" className="but5">
              Contact us
            </Link>
          </div>
        </div>
      </div>
      {/* second */}
      <div className="about1">
        <p>About Company</p>
        <text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, illum
          delectus sequi necessitatibus cum laudantium incidunt minima,
          voluptatibus <br />
          voluptas repellat officia doloremque magnam quis, accusamus tenetur,
          quasi doloribus iusto quia distinctio labore optio reprehenderit
          aperiam <br />
          suscipit dignissimos aliquid! Odit distinctio quam, excepturi
          repellendus sunt magni adipisci sit architecto placeat tempore
          numquam, ipsam nobis
          <br /> vitae aperiam reprehenderit inventore ipsum facilis? Sapiente
          iure id explicabo. Omnis, architecto quaerat! Architecto error ducimus
          consequuntur,
          <br /> asperiores fugiat nostrum veniam eaque aspernatur ab quas
          aliquam ipsa! Odit expedita voluptate, mollitia tenetur eveniet
          quisquam a veritatis. In,
          <br /> odit. Enim aliquid voluptates vitae pariatur facilis beatae
          odio labore est, voluptatem officiis! Maiores, iure molestias aliquam
          suscipit rem impedit
          <br /> veritatis architecto delectus molestiae tempora inventore
          beatae consectetur facere voluptas dolores labore, laboriosam officiis
          non alias minima
          <br /> dolorum fuga corrupti blanditiis. Laudantium consequatur,
          aspernatur beatae dicta atque labore. Molestiae illum, possimus,
          officia sit nihil,
          <br /> cupiditate nesciunt, consequatur nulla deleniti veniam modi
          maxime impedit delectus iste totam earum vel repellendus doloribus in
          quae fuga.
          <br /> Dignissimos, unde eius voluptatem iusto est nesciunt quaerat
          temporibus velit doloribus a id laborum repellendus fugit nihil, animi
          facilis quisquam
          <br /> nemo tempora accusantium doloremque libero magnam dolorum
          veritatis vel aspernatur. Enim reiciendis laborum, expedita illum,
          aliquam eaque!
        </text>
      </div>
      {/* third */}
      <div className="about2">
        <p>What Our Clients says</p>
        <div class="column1">
          <div class="says">
            <div className="image2" />
            <div className="say1">
              <h6>Customer ABC</h6>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </div>
      </div>
      {/* fourth */}
      <div className="about3">
        <a>Our Team</a>
        <div className="a1">
          {data.map((item, index) => {
            return (
              <Card1
                icon={item.icon}
                name={item.name}
                text={item.text}
                para={item.para}
                year={item.year}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
