import React from "react";
import "./index.css";
import CTA from "./CTA";
import ME from "../../assets/imgs/ajaxti-dia-do-estagiário.jpg";
import HeaderSocial from "./HeaderSocial";

const index = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou</h5>
        <h1>Leonardo Araújo</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="Dia do estagiário" />
        </div>

        <a href="#contact" className="scroll_down">
          Scrooll Down
        </a>
      </div>
    </header>
  );
};

export default index;
