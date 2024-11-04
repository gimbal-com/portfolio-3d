import {
  mobile,
  backend,
  creator,
  web,
  // AI,
  // keras,
  // pytorch,
  // tensorflow,
  // javascript,
  // typescript,
  // html,
  // css,
  reactjs,
  // redux,
  // tailwind,
  // nodejs,
  mongodb,
  git,
  // figma,


  summarizer,
  tiktok,
  lyriks,



  // zombie,
  threejs,
  // codechef,
  // Portfolio,
  // te,
  vue,
  // angular,
  // gatsby,
  next,
  mysql,
  // qt,
  // python,
  express,
  nest,
  docker,
  cogmento,
  goons,
  humming,
  proper,
  diyar,
  travel,
  vikid,
  rent,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
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
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next",
    icon: next,
  },
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Nest",
    icon: nest,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Engineer",
    company_name: "InsureCert Systems Inc",
    icon: "/company/insurecert.png",
    iconBg: "rgb(230, 222, 221)",
    date: "Nov 2022 - Present",
    points: [
      "Led a team to develop the AAMI Real Estate Website with React and Node.js boosting user engagement by 25%",
      "Created RESTful APIs for managing property data and enabling real-time updates",
      "Optimized MongoDB queries and indexing strategies to improve data retrieval speed resulting in a 40% reduction in page load time",
      "Integrated Stripe API for secure payment processing enhancing user trust and increasing conversion rates for property transactions",
      "Mentored junior developers on Agile practices and coding standards to improve team efficiency"
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Overture Law",
    icon: "/company/overture.png",
    iconBg: "rgb(230, 222, 221)",
    date: "Jan 2022 - Oct 2022",
    points: [
      "Developed the Cogmento CRM platform using React and Django enhancing user engagement by 30%",
      "Worked closely with team members to gather requirements from PM and UI/UX designers leading to a 20% decrease in development time",
      "Created RESTful APIs in Django improving data transfer efficiency and increasing application performance by 25%",
      "Guided 3 junior developers focusing on best coding practices which helped reduce code review revisions by 40%",
      "Facilitated weekly sync-ups with the team to track progress resulting in a 15% boost in overall productivity"
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Goons of Balatroon",
    icon: "/company/goons.png",
    iconBg: "rgb(56, 62, 86)",
    date: "Mar 2019 - Jan 2022",
    points: [
      "Enhanced the Goons of Balatroon NFT card game, leading to a 160% increase in daily active users through backend optimizations",
      "Developed an NFT management app using Node.js, streamlining operations and achieving a 25% increase in NFT transactions",
      "Implemented backend integrations for Highcharts to support an interactive player statistics visualization feature, enhancing player engagement duration by 30%",
      "Collaborated with cross-functional teams as a backend developer, participating in weekly technical reviews and sprint planning to align project goals"
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Humming Bot",
    icon: "/company/humming.png",
    iconBg: "rgb(56, 62, 86)",
    date: "Feb 2017 - Feb 2019",
    points: [
      "Developed and launched a website for an open-source software company leading 40% increase in website traffic",
      "Built a Hummingbot Miner app using React and Node.js streamlining the mining process and reducing manual task time by 40%",
      "Redesigned the frontend on-boarding process in collaboration with product and marketing teams enhancing user experience and retention by 30%",
      "Implemented analytics tools to track user engagement providing data-driven insights that informed further enhancements"
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Properstar",
    icon: "/company/proper.png",
    iconBg: "rgb(56, 62, 86)",
    date: "Mar 2021 - Apr 2022",
    points: [
      "Developed robust Andriod and iOS real estate applications using React Native and React Navigation optimizing performance to achieve a 40% reduction in loading times and 50% faster user interactions",
      "Created a real estate agent platform with React and Node.js enhancing user experience and driving a 20% increase in site traffic",
      "Revamped the platform by adding advanced search functionality and personalized user dashboards leading to a 50% decrease in property search time",
      "Utilized D3.js to develop innovative data visualizations improving insights and decision-making for users"
    ],
  }

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Alex proved me wrong.",
    name: "Rajesh Venugopal",
    designation: "Direct of Engineering",
    company: "Ingram Micro",
    image: "/CTOs/7.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Alex does.",
    name: "Chris Brown",
    designation: "Project Manager",
    company: "Dapper Labs",
    image: "/CTOs/5.jpg",
  },
  {
    testimonial:
      "After Alex optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Alexei Gura",
    designation: "CTO",
    company: "America's Frontline Doctors",
    image: "/CTOs/3.jpg",
  },
];


const projects = [
  {
    name: "Cogmento CRM",
    description:
      "Our TikTok Clone Application includes Google Auth, the ability to upload, publish, share, comment on, and like the videos; filtering by categories and advanced search functionalities, profile pages, suggested accounts, custom responsive design, and much more.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: cogmento,
    site_link: "https://tiktok-mimic.vercel.app",
    source_code_link: "https://github.com/crveskig/tiktok-mimic.git",
  },
  {
    name: "Goons of Balatroon",
    description:
      "Master modern web development by building an improved version of Spotify. With a modern homepage, fully-fledged music player, search, lyrics, song exploration features, search, popular music around you, worldwide top charts, and much more",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: goons,
    site_link: "https://lyriks-mimic.netlify.app",
    source_code_link: "https://github.com/crveskig/lyriks.git",
  },
  {
    name: "HummingBot.io",
    description:
      "Simplify your reading with Summize, an open-source article summarizer that transforms length articles into clear and concise sumaries",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "ChatGPT",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: humming,
    site_link: "https://ai-summarizer-zeta.vercel.app",
    source_code_link: "https://github.com/crveskig/ai-summarizer.git",
  },
  {
    name: "Properstar Estate",
    description:
      "This website has a user-friendly interface for customers to browse products and make purchases. It also has an admin portal for managing orders, inventory, and shipping,",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: proper,
    site_link: "https://www.max-food.pl/",
    source_code_link: "https://github.com/crveskig/max-food.git",
  },
  {
    name: "Diyar News",
    description:
      "Lets users share and rate campgrounds they have visited, with an interactive interface for easy navigation. It provides valuable insights and recommendations for other campers.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: diyar,
    site_link: "https://yelpcamps.vercel.app/",
    source_code_link: "https://github.com/crveskig/yelpcampV3.git",
  },
  {
    name: "Traveling Girls",
    description:
      "Simplify your reading with Summize, an open-source article summarizer that transforms length articles into clear and concise sumaries",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    site_link: "https://kanbans.vercel.app/",
    source_code_link: "https://github.com/crveskig/kanban.git",
  },
  {
    name: "Vikids Women",
    description:
      "Simplify your reading with Summize, an open-source article summarizer that transforms length articles into clear and concise sumaries",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: vikid,
    site_link: "https://kanbans.vercel.app/",
    source_code_link: "https://github.com/crveskig/kanban.git",
  },
  {
    name: "Rent Furnished",
    description:
      "Simplify your reading with Summize, an open-source article summarizer that transforms length articles into clear and concise sumaries",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: rent,
    site_link: "https://kanbans.vercel.app/",
    source_code_link: "https://github.com/crveskig/kanban.git",
  },
];

export { services, technologies, experiences, testimonials, projects };