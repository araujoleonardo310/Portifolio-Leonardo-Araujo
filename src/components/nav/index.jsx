import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { TbMessageCircle } from "react-icons/tb";
import { BiRocket } from "react-icons/bi";

import "./index.css";
import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState("#");
  const handleOnclick = (section) => {
    setActive(section);
  };
  return (
    <nav>
      <a
        href="#header"
        onClick={() => handleOnclick("#header")}
        className={active === "#header" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => handleOnclick("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <FaRegUser />
      </a>
      <a
        href="#experiences"
        onClick={() => handleOnclick("#experiences")}
        className={active === "#experiences" ? "active" : ""}
      >
        <MdWorkOutline />
      </a>
      <a
        href="#portifolio"
        onClick={() => handleOnclick("#portifolio")}
        className={active === "#portifolio" ? "active" : ""}
      >
        <BiRocket />
      </a>
      <a
        href="#contact"
        onClick={() => handleOnclick("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <TbMessageCircle />
      </a>
    </nav>
  );
};

export default Nav;
