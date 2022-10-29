import React from "react";
import "./index.css";

import IMG1 from "../../assets/imgs/my-validation-pass.gif";
import IMG2 from "../../assets/imgs/my-social-dash.png";
import IMG3 from "../../assets/imgs/pomodoro.png";
import IMG4 from "../../assets/imgs/crdu-users.png";
import IMG5 from "../../assets/imgs/api-vendas.png";
import IMG6 from "../../assets/imgs/doe.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Tela animada de validação e força de senha.",
    tecnologias: ["Angular", "TypeScript", "Bootstrap"],
    github: "https://github.com/araujoleonardo310/My-Validation-Pass",
    demo: "",
  },
  {
    id: 2,
    image: IMG2,
    title:
      "Web page Dashboard com redirecionamento e restrições de usuários: administrador e/ou usuário.",
    tecnologias: ["React"],
    github: "https://github.com/araujoleonardo310/MySocial-Dash",
    demo: "",
  },
  {
    id: 3,
    image: IMG3,
    title:
      "Projeto Pomodoro que permite ao usuário personalisar times (ação, pausa curta e longa).",
    tecnologias: ["React", "Firebase"],
    github: "https://github.com",
    demo: "https://live.demo.link.com/demo-3",
  },
  {
    id: 4,
    image: IMG4,
    title: "Web page CRUD de Usuários.",
    github: "https://github.com",
    tecnologias: ["React"],
    demo: "https://live.demo.link.com/demo-4",
  },
  {
    id: 5,
    image: IMG5,
    title: "API REST de vendas utilizando .Net e C-Sharp.",
    tecnologias: ["C-Sharp", ".NET"],
    github: "https://github.com/araujoleonardo310/tech-test-payment-api",
    demo: "",
  },
  {
    id: 6,
    image: IMG6,
    title: "Web page de doação de sangue",
    tecnologias: ["React", "SASS"],
    github: "https://github.com/araujoleonardo310/ajax-academy-doe",
    demo: "",
  },
];

const Portifolio = () => {
  return (
    <section id="portifolio">
      <h5>Últimos projetos publicados</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, tecnologias }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                {tecnologias.map((item, index) => {
                  if (index === tecnologias.length - 1) {
                    return <span>{item}</span>;
                  }
                  return <span>{item} + </span>;
                })}
              </div>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  style={demo !== "" ? {} : { display: "none" }}
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portifolio;
