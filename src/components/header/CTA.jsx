import React from "react";
import CV from "../../assets/docs/Desenvolvedor Jr - Leonardo Araújo .pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Entre em contato</a>
    </div>
  );
};

export default CTA;
