import React from "react";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript, DiScrum, DiGitBranch } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { BsBootstrapFill } from "react-icons/bs";
import { SiTypescript, SiDotnet } from "react-icons/si";
import { FaNodeJs, FaAngular, FaGithubAlt } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { MdOutlineComputer } from "react-icons/md";
import "./index.css";

const Experiences = () => {
  return (
    <section id="experiences">
      <h5>Quais Skills Possuo</h5>
      <h2>Experiências</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <ImHtmlFive className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBootstrapFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTypescript className="experience__details-icon" />
              <div>
                <h4>TypeScrip</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
            <article className="experience__details">
              <DiJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="experience__details">
              <GrReactjs className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="experience__details">
              <FaAngular className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineConsoleSql className="experience__details-icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
            <article className="experience__details">
              <MdOutlineComputer className="experience__details-icon" />
              <div>
                <h4>C-Sharp</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="experience__details">
              <SiDotnet className="experience__details-icon" />
              <div>
                <h4>.NET</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__project">
          <h3>Tecnologias & Metodologias</h3>
          <div className="experience__content">
            <article className="experience__details">
              <DiGitBranch className="experience__details-icon" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="experience__details">
              <FaGithubAlt className="experience__details-icon" />
              <div>
                <h4>GitHub</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="experience__details">
              <DiScrum className="experience__details-icon" />
              <div>
                <h4>Scrum</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
