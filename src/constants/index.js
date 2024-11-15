import {
  mobile,
  backend,
  creator,
  web,
  reactjs,
  mongodb,
  git,

  threejs,
  vue,
  next,
  mysql,
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
    title: "Project Manager",
    company_name: "Cerebral Inc",
    icon: "/company/insurecert.png",
    iconBg: "rgb(230, 222, 221)",
    date: "Oct 2020 - June 2024",
    points: [
      "Led a team in the design and development of the AAMI Real Estate Website boosting user experience and functionality by 25%",
      "Optimized MongoDB queries reducing load times and improving overall performance by 40% through modified indexing strategies",
      "Integrated Stripe API to enable secure payment processing enhancing user trust and increasing transaction conversion rates by 15%",
      "Mentored junior developers fostering their growth and increasing team efficiency by 20% through Agile practices and coding standards",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Viderity Inc",
    icon: "/company/overture.png",
    iconBg: "rgb(230, 222, 221)",
    date: "Sep 2017 - May 2020",
    points: [
      "Created the Cogmento CRM platform driving a 30% increase in user engagement through innovated UI/UX features and performance",
      "Partnered with PMs and UI/UX designers to gather requirements resulting in a 20% decrease in development time by refining workflows",
      "Established and upgraded RESTful APIs improving data transfer efficiency and increasing overall application performance by 25%",
      "Supported 3 junior developers by sharing best coding conventions and examples which helped reduce code review revisions by 40%",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Safe Flight Corporation",
    icon: "/company/goons.png",
    iconBg: "rgb(56, 62, 86)",
    date: "June 2013 - June 2017",
    points: [
      "Streamlined the backend of the Goons of Balatroon NFT card game resulting in a 160% increase in the number of daily active users",
      "Built an NFT management app using Node.js streamlining backend processes and leading to a 25% rise in NFT transactions",
      "Implemented backend integrations with Highcharts to support interactive player statistics increasing user engagement by 30%",
      "Collaborated effectively with cross-functional teams leading to a 20% reduction in project delivery time"
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Redfin Inc",
    icon: "/company/humming.png",
    iconBg: "rgb(56, 62, 86)",
    date: "Sep 2009 - June 2013",
    points: [
      "Launched a website for crypto market makers for an open-source software company resulting in a 40% increase in website traffic",
      "Redesigned the frontend onboarding process in collaboration with QA and marketing teams improving user retention by 30%",
      "Implemented analytics tools on the frontend to trak user engagement leading to a 15% increase active users",
    ],
  },
  // {
  //   title: "Frontend Developer",
  //   company_name: "Properstar",
  //   icon: "/company/proper.png",
  //   iconBg: "rgb(56, 62, 86)",
  //   date: "Mar 2021 - Apr 2022",
  //   points: [
  //     // "Developed robust Andriod and iOS real estate applications using React Native and React Navigation optimizing performance to achieve a 40% reduction in loading times and 50% faster user interactions",
  //     // "Created a real estate agent platform with React and Node.js enhancing user experience and driving a 20% increase in site traffic",
  //     // "Revamped the platform by adding advanced search functionality and personalized user dashboards leading to a 50% decrease in property search time",
  //     // "Utilized D3.js to develop innovative data visualizations improving insights and decision-making for users"
  //   ],
  // }

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
      "This platform offers a comprehensive CRM solution that helps businesses manage customer relationships, sales, and marketing efforts through a user-friendly interface and various tools.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
    ],
    image: cogmento,
    site_link: "https://cogmento.com",
  },
  {
    name: "Goons of Balatroon",
    description:
      "This website showcases an NFT card game, featuring gameplay mechanics and community engagement through various interactive elements and events.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "Web3",
        color: "pink-text-gradient",
      },
      {
        name: "IMX",
        color: "green-text-gradient",
      },
    ],
    image: goons,
    site_link: "https://goonsofbalatroon.com",
  },
  {
    name: "HummingBot.io",
    description:
      "Hummingbot is an open-source platform that allows users to build and run cryptocurrency trading bots, providing tools for algorithmic trading and liquidity mining across different exchanges.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Gatsby",
        color: "green-text-gradient",
      },
      {
        name: "Web3",
        color: "pink-text-gradient",
      },
      {
        name: "PixiJS",
        color: "green-text-gradient",
      },
    ],
    image: humming,
    site_link: "https://hummingbot.io",
  },
  {
    name: "Properstar Estate",
    description:
      "Properstar is a property rental platform that connects users with real estate listings, offering a variety of properties for rent and sale in different locations, along with helpful search features.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Contentful",
        color: "pink-text-gradient",
      },
    ],
    image: proper,
    site_link: "https://www.properstar.com",
  },
  {
    name: "Diyar News",
    description:
      "This real estate development in Bahrain features a master-planned community with residential, commercial, and recreational spaces designed to promote a luxurious lifestyle.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Gatsby",
        color: "green-text-gradient",
      },
      {
        name: "Contentful",
        color: "pink-text-gradient",
      },
    ],
    image: diyar,
    site_link: "https://www.diyar.bh",
  },
  // {
  //   name: "Traveling Girls",
  //   description:
  //   "TravelGirls is a travel companion website that connects men with women looking for travel partners, focusing on romantic connections and shared travel experiences.",
  //     tags: [
  //       {
  //         name: "Angular",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "Node.js",
  //         color: "green-text-gradient",
  //       }
  //     ],
  //   image: travel,
  //   site_link: "https://www.travelgirls.com",
  // },
  {
    name: "Vikids Women",
    description:
    "This site offers parenting and child development resources, providing advice on topics like adolescent relationships and children's poetry to support parents and educators.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Ruby",
        color: "green-text-gradient",
      },
      {
        name: "Medium",
        color: "pink-text-gradient",
      },
    ],
    image: vikid,
    site_link: "https://www.vikids.ru",
  },
  {
    name: "Rent Furnished",
    description:
      "Wunderflats is an online platform for renting furnished apartments in Germany, designed to help tenants find temporary housing while offering landlords a way to connect with verified renters.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      }
    ],
    image: rent,
    site_link: "http://wunderflats.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
