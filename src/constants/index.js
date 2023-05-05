import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  postgresql,
  meta,
  henry,
  footloose,
  biodiserly,
  mangaCoffee,
  countryAcademy,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: postgresql,
  },
];

const experiences = [
  {
    title: "Full-Stack Teaching Assistant",
    company_name: "Henry Bootcamp",
    icon: henry,
    iconBg: "#FFFF00",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Coordinate a group of students to achieve integration to the study group.",
      "Guide students in the first steps of the course.",
      "Assist to solve exercises and promote group collaboration (Pair Programming)",
      "Propose ideas to improve the Bootcamp processes.",
    ],
  },
  {
    title: "Junior Programmer",
    company_name: "Footloose Perú",
    icon: footloose,
    iconBg: "#fff",
    date: "Sep 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Biodiserly",
    icon: biodiserly,
    iconBg: "#383E56",
    date: "April 2023",
    points: [
      "Design and develop the e-commerce and other web applications",
      "Create and maintain the database to store and manage the information of the website.",
      "Research and apply new technologies and trends in web development to improve products and services.",
      "Resolve technical and compatibility issues.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've worked with Antoni on the Manga Coffee project and it has been an amazing experience working with him, he's super analytical, excellent problem solver and very self-taught, he's always learning new things, he's also super creative and great professional. He's incredibly capable of doing anything he sets his mind to. By hiring Antoni you'll not only gain a super professional in your team but an amazing person who will contribute in every way to the company.",
    name: "Andrea Carvajal Osorio",
    designation: "Full Stack Developer",
    company: "",
    image: "https://ca.slack-edge.com/TPRS7H4PN-U0368FERG85-6c67e2a7ec1b-512",
  },
  {
    testimonial:
      "Trabajé con Antoni en el desarrollo de una aplicación, lo cual representó un gran desafío para todo el grupo, ya que se implementaron nuevas tecnologías y se debió lidiar con la precisión. Antoni se mantuvo siempre calmado y creó un ambiente jovial y amigable, lo cual favoreció el desarrollo personal y grupal. Él se encargó del diseño y la temática de la página.",
    name: "Ronaldo Jara",
    designation: "Frontend Developer",
    company: "LearnAla",
    image: "https://media.licdn.com/dms/image/D4E03AQG6y7JxPrdXVw/profile-displayphoto-shrink_800_800/0/1669516316274?e=1688601600&v=beta&t=oxUcEOHFRru1lnMsqanT7nTpadN8ACXU5jKojgUwWds",
  },
  {
    testimonial:
      "Es realmente una persona increíble, con un impresionante dominio técnico y facilidad para implementar nuevas tecnologías. Aquellos que tengan la oportunidad de trabajar con él encontrarán a una persona sociable, dispuesta a apoyar y transmitir todos sus conocimientos. Tuve la posibilidad de programar con él en el proyecto final 'Manga Coffee' del Bootcamp de Henry, donde pude apreciar cada una de sus habilidades. Se encontrarán con una gran persona y un excelente profesional.",
    name: "Gabriel valencia morales",
    designation: "Full Stack Developer",
    company: "",
    image: "https://media.licdn.com/dms/image/C5603AQFHEl85YALsJw/profile-displayphoto-shrink_800_800/0/1652916282057?e=1688601600&v=beta&t=ipjhQ4l4gLARtQwQRDFbcg5z238xn4Jq-_6vtH9WOdo",
  },
];

const projects = [
  {
    name: "Manga Coffee",
    description:
      "Web-based platform that allows users to search and read mangas. Additionally, you can interact with other manga fans through our online chat feature.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: mangaCoffee,
    source_code_link: "https://github.com/NosliwKuns/MANGA-COFFEE",
  },
  {
    name: "Country Academy",
    description:
      "Online course platform that allows access to a variety of courses covering different topics and skill levels. Enjoy a dynamic and effective learning experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: countryAcademy,
    source_code_link: "https://github.com/",
  },
  {
    name: "Biodiserly",
    description:
      "Biodiserly is an online store for natural products that I built from scratch. The platform is intuitive, easy to navigate for customers, and visually appealing.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };