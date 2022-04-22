import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Michael Vanhoutte | Front-End Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my personal website where you get to know me and my work.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, i'm ",
  name: 'Michael Vanhoutte',
  subtitle: "I'm the Front-end Developer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    "I'm a motivated Front-End Developer that likes to combine the art of design with programming. I can easily translate a UI/UX design to code that both implements  the design and the functionality. I like to actively think about which solutions fit a problem best and try to always keep future changes and best practices in mind.  Working in a team is no problem for me. I'm easygoing around other people, but can also work on an independent basis. I like to keep track of the newest  technologies to always stay up to date and know what's going on in my sector.",
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'React Portfolio Website',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/MichaelVanhoutte1', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/MichaelVanhoutte1', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/michael-vanhoutte/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/MichaelVanhoutte1',
    },
  ],
};
