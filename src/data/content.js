import coliving1 from '../assets/Coliving/coliving1.png'
import coliving2 from '../assets/Coliving/coliving2.png'
import coliving3 from '../assets/Coliving/coliving3.png'
import coliving4 from '../assets/Coliving/coliving4.png'
import coliving5 from '../assets/Coliving/coliving5.png'
import coliving6 from '../assets/Coliving/coliving6.png'

import cellzone1 from '../assets/cellzone/cellzone1.png'
import cellzone2 from '../assets/cellzone/cellzone2.png'
import cellzone3 from '../assets/cellzone/cellzone3.png'
import cellzone4 from '../assets/cellzone/cellzone4.png'
import cellzone5 from '../assets/cellzone/cellzone5.png'

import olympics1 from '../assets/Olympics/olympics1.png'
import olympics2 from '../assets/Olympics/olympics2.png'
import olympics3 from '../assets/Olympics/olympics3.png'
import olympics4 from '../assets/Olympics/olympics4.png'
import olympics5 from '../assets/Olympics/olympics5.png'
import olympics6 from '../assets/Olympics/olympics6.png'
import olympics7 from '../assets/Olympics/olympics7.png'

import Mac1 from '../assets/MAC/mac1 (2).png'
import Mac2 from '../assets/MAC/mac2.png'
import Mac3 from '../assets/MAC/mac3.png'
import Mac4 from '../assets/MAC/mac4.png'
import Mac5 from '../assets/MAC/mac5.png'
import Mac6 from '../assets/MAC/mac6.png'

import ytclone1 from '../assets/youtubeclone/Youtube1.png'
import ytclone2 from '../assets/youtubeclone/Youtube2.png'
import ytclone3 from '../assets/youtubeclone/Youtube3.png'
import ytclone4 from '../assets/youtubeclone/Youtube4.png'
import ytclone5 from '../assets/youtubeclone/Youtube5.png'

import portofolio1 from '../assets/Portofolio/portofolio1.png'
import portofolio2 from '../assets/Portofolio/portofolio2.png'
import portofolio3 from '../assets/Portofolio/portofolio3.png'
import portofolio4 from '../assets/Portofolio/portofolio4.png'
import portofolio5 from '../assets/Portofolio/portofolio5.png'


export const profile = {
  name: 'Numan',
  initials: 'CN',
  role: 'Full-Stack Developer',
  location: 'Tiptur, India',
  email: 'mdnuman2611@gmail.com',
  github: 'https://github.com/captainuman',
  linkedin: 'https://www.linkedin.com/in/numan2211/',
  tagline:
    'I design and build interfaces that feel fast, and the systems underneath that keep them that way.',
  bio:
    "I'm a full-stack engineer who spends equal time in the terminal and in the design file. Over the last few years I've shipped dashboards, internal tools, and a handful of side projects that taught me more than any course could.",
  bio2:
    'I care about the details most people scroll past — the 200ms that makes an interaction feel instant, the empty state that actually helps. Currently exploring real-time systems and 3D on the web.',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const roles = [
  'Full-Stack Engineer',
  'Creative Developer',
  'UI Engineer',
  'Open-Source Contributor',
]

export const stats = [
  { label: 'Projects', value: '3+' },
  { label: 'Years', value: '0' },
  { label: 'Clients', value: '0' },
]

export const skillGroups = [
  {
    category: 'Frontend',
    items: [
      { name: 'React / Next.js', level: 92 },
      { name: 'JavaScript', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Three.js / WebGL', level: 60 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js / Express', level: 75 },
      { name: 'MangoDb', level: 70 },
      { name: 'REST / GraphQL', level: 85 },
      { name: 'Python', level: 75 },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 70 },
      { name: 'Git / CI-CD', level: 90 },
      { name: 'Figma', level: 70 },
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Coliving-Platform',
    description:
      'Built a modern co-living accommodation platform that connects users with shared housing opportunities through streamlined property discovery and management tools. Focused on creating a user-friendly experience with responsive design and efficient data handling',
    tags: ['React','Tailwind','Javascript','Socket.Io', 'JWT', 'Node','MangoDB','REST APIs'],
    images: [
      coliving1,coliving2,coliving3,coliving4,coliving5,coliving6
    ],
    github: 'https://github.com/captainuman/coliving-platform',
    live: 'https://the-starks.vercel.app/',
    featured: true,
  },
  {
    id: 2,
    title: 'Olympics-Data Analysis & Prediction',
    description:
      'Designed and developed an interactive Olympics analysis dashboard that processes and visualizes historical Olympic data. Provided actionable insights through dynamic charts, statistical analysis, and country-wise performance tracking',
    tags: ['Python', 'ML', 'Streamlit' ,'Pandas','Matplotlib' ,'XGBoost'],
     images: [
       olympics1,olympics2,olympics3,olympics4,olympics5,olympics6,olympics7
     ] ,
    github: 'https://github.com/captainuman/OlympicsAnalysiser',
    live: ' https://olympicsanalysiser.streamlit.app',
  },
  {
    id: 3,
    title: 'Gsap Macbook Landing',
    description:
      'Built an Apple-inspired product showcase website featuring cinematic animations, interactive scrolling effects, and responsive layouts. Designed to deliver a visually compelling experience while maintaining performance and accessibility',
    tags: ['React', 'Three js', 'Gsap','Javascript','CSS3'],
    images: [ Mac1,Mac2,Mac3,Mac4,Mac5,Mac6],
    github: 'https://github.com/captainuman/gasp_macbook_landing',
    live: 'https://gasp-macbook2211.vercel.app/',
  },
  {
    id: 4,
    title: 'Youtube-Clone',
    description:
      'Developed a responsive YouTube-inspired front-end application that replicates the core user interface and browsing experience of the platform. Implemented dynamic video listings, search functionality, and modern UI components to deliver an engaging and intuitive user experience',
    tags: ['HTML', 'CSS/Tailwind', 'JAVASCRIPT', 'REACT' ,'React Router','Redux Toolkit'],
    images: [ytclone1,ytclone2,ytclone3,ytclone4,ytclone5],
    github: 'https://github.com/captainuman/E-Commerce-app',
    live: 'https://youtubeclone2211.vercel.app/',
    featured: true,
  },
  {
    id: 5,
    title: 'Simple E-commerce Web Application',
    description:
      'Built a responsive e-commerce platform featuring user authentication, product management, cart functionality, and secure checkout workflows. Focused on delivering a seamless shopping experience through a modern full-stack architecture',
    tags: ['HTML','JAVASCRIPT','REACT','Node','Express','JWT','REST APIs'],
    images : [cellzone1,cellzone2,cellzone3,cellzone4,cellzone5],
    github: 'https://github.com/captainuman/E-Commerce-app',
    live: 'https://cellzone-phi.vercel.app/',
  },
  {
    id: 6,
    title: 'Simple Portofolio for Frontend beginners',
    description:
      'Built a personal portfolio website to highlight projects, skills, and achievements through a responsive and visually appealing interface. Implemented modern frontend technologies and interactive animations to deliver a seamless user experience',
    tags: ['React', 'React-Routes','Tailwind', 'Tailwind','GSAP / Framer Motion'],
    images: [portofolio1,portofolio2,portofolio3,portofolio4,portofolio5],
    github: 'https://github.com/captainuman/portofolio',
    live: '#',
  },
]