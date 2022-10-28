/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { SiHackerrank } from "react-icons/si";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.hackerrank.com/araujoleonardo31?hr_r=1"
        target="_blank"
        rel="HackerRank"
      >
        <SiHackerrank />
      </a>
      <a
        href="https://www.linkedin.com/in/leonardoaraujo310/"
        target="_blank"
        rel="Linkedin"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/araujoleonardo310"
        target="_blank"
        rel="Github"
      >
        <BsGithub />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5585988511269&text=Ol%C3%A1%2C%20meu%20nome%20%C3%A9%20Leonardo.%20Como%20posso%20ajudar%3F"
        target="_blank"
        rel="Whatssap"
      >
        <BsWhatsapp />
      </a>
      <a
        href="mailto:%20%20%20%20%20%20%20araujoleonardo310@gmail.com"
        target="_blank"
        rel="E-mail"
      >
        <AiOutlineMail />
      </a>
    </div>
  );
};

export default HeaderSocial;
