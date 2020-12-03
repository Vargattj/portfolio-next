export const projects = [
  {
    id: 1,
    name: "Fogo & Lenha",
    query: "fogo-e-lenha",
    link: "https://vargattj.github.io/fogo-e-lenha/",
    code: "https://github.com/Vargattj/portfolio-next",
    details: {
      about:
        "Projeto desenvolvido para um restaurante regional. Além da criação do HTML, CSS e JS, também fui responsável pelo design.",
      images: [
        "../../../images/fogo-e-lenha.png",
        "../../images/fogo-e-lenha-ingredientes.png",
        "../../images/fogo-e-lenha-cardapio.png",
        "../../images/fogo-e-lenha-footer.png",
        "../../images/fogo-e-lenha-contato.png",
      ],
      tecnologies: ["UI/UX Design", "HTML", "SCSS", "JAVASCRIPT", "JQUERY"],
    },
  },
  {
    id: 2,
    name: "portfolio",
    query: "portfolio",
    link: "https://vargattj.vercel.app/",
    code: "https://github.com/Vargattj/fogo-e-lenha",
    details: {
      about:
        "Construído com Next JS, esse website é uma vitrine para meus projetos como Frontend Developer. Foi escolhido a tecnologia Next js com a intenção de usar React, mas simultaneamente ter a possibilidade de utilizar uma estratégia SSR (Server Side Rendering).",
      images: [
        "../../images/portfolio-home.png",
        "../../images/portfolio-services.png",
        "../../images/portfolio-contato.png",
        "../../images/portfolio-home-content.png",
      ],
      tecnologies: [
        "UI/UX Design",
        "Next JS",
        "Styled Components",
        "React Spring",
      ],
    },
  },
];
