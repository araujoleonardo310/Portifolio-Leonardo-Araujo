import React from "react";
import { FaAward, FaUniversity, FaGithubAlt } from "react-icons/fa";
import Me from "../../assets/imgs/ajaxti-worsshop.jpg";
import "./index.css";

const About = () => {
  return (
    <section id="about">
      <h5>Conheça Minha Jornada</h5>
      <h2>Um pouco sobre Leonardo</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="Workshop GitHub Corporativo" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiências</h5>
              <small>1+ Ano Desenvolvendo</small>
            </article>

            <article className="about__card">
              <FaGithubAlt className="about__icon" />
              <h5>Projetos</h5>
              <small>20+ Publicados</small>
            </article>

            <article className="about__card">
              <FaUniversity className="about__icon" />
              <h5>Formação</h5>
              <small>4° período, ADS</small>
            </article>
          </div>
          <p>
            Graduando em Análise e Desenvolvimento de Sistemas, 4 ° período,
            EAD, pela universidade Estácio. Além da graduação estuda com outras
            plataformas: HackerRank, Digital innovation One e Udemy.
          </p>

          <p>
            Em set/2021 a set/2021 trabalhou como estagiário de desenvolvimento
            na empresa <a
              href="https://www.ajaxti.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              <b>AJAXTI</b>
            </a>
            , uma empresa em crescimento e focada em proporcionar soluções com
            desenvolvimento de softwares, Outsourcing e Business Intelligence.
          </p>

          <p>
            Durante o estágio na AJAXTI, contribuí com projetos internos
            frontend com linguagens de desenvolvimento web (HTML, CSS E JS),
            Bootstrap e React. Depois com projetos externos frontend
            backend com programação C#, .NET 5, Angular13, SQL e banco de dados
            SQL Server.
          </p>

          <p>
            O estágio proporcionou experiência com versionamento de código,
            acompanhar ciclos de vida de projetos, trabalhar em time,
            compreender e interpretar documentações, regras de negócios, lidar
            com prazos, seguir metodologias ágeis de planejamento (Scrum), como
            por fim obter experiências nas tecnologias mencionadas
            anteriormente.
          </p>
          <a href="#contact" className="btn btn-primary">
            Vamos entrar em contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
