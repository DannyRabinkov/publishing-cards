import { Nav } from "react-bootstrap";
import { GoHome } from "react-icons/go";
import { MdAttachEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { FaRegGrinWink } from "react-icons/fa";
import React from "react";

const FooterComp = () => (
  <div className="footer">
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item style={{ color: "white" }}>
        All rights reserved to Daniel Rabinkov &copy;
      </Nav.Item>
    </Nav>
    <p className="text-center mt-4 mb-4" style={{ color: "white" }}>
      Some great minds gave some advices <FaRegGrinWink></FaRegGrinWink>
    </p>
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">
          Home <GoHome></GoHome>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link a href="mailto: rabinkovdanny@gmail.com">
          Email <MdAttachEmail></MdAttachEmail>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="https://www.facebook.com/danny.rabinkov"
          target="_blank"
        >
          FB <BsFacebook></BsFacebook>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </div>
);

export default FooterComp;
