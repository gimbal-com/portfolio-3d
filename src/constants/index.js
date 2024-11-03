import {
    mobile,
    backend,
    creator,
    web,
    AI,
    keras,
    pytorch,
    tensorflow,
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
    summarizer,
    tiktok,
    lyriks,
    zombie,
    threejs,codechef,Portfolio,te,
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
      title: "AI Developer",
      icon: AI,
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
      title: "Frontend Developer",
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
      name: "PyTorch",
      icon: pytorch,
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
  ];
  
  const experiences = [
    {
      title: "Senior Software Engineer",
      company_name: "Ingram Micro",
      icon: "/ingram.png",
      iconBg: "rgb(230, 222, 221)",
      date: "May 2023 - Present",
      points: [
        "	Constructed a vendor command center, driving $30 million in measurable outcomes.",
        "Orchestrated regular code review sessions and knowledge-sharing workshops, resulting in a 40% improvement in team members' coding standards and a 50% reduction in onboarding time for new developers.",
      ],
    },
    {
      title: "Senior Frontend Engineer",
      company_name: "Dapper Labs",
      icon: "/dapper.png",
      iconBg: "rgb(230, 222, 221)",
      date: "May 2022 - Apr 2023",
      points: [
        "	Architected and implemented innovative NFT marketplace solutions for industry-leading platforms Genius and NBATopShot, resulting in a 3x boost in revenue and a 40% increase in active user base.",
        "Championed the creation of modular design system with 30+ reusable components, leading to a 25% increase in design consistency and a 20% boost in development efficiency.",
      ],
    },
    {
      title: "Senior Frontend Engineer",
      company_name: "Binance",
      icon: "/binance.png",
      iconBg: "rgb(56, 62, 86)",
      date: "Mar 2021 - Apr 2022",
      points: [
        " Established the implementation of automated data refresh processes, decreasing data staleness by 50% and enabling the team to react swiftly to market shifts, leading to a 25% increase in market share.",
        "Executed the deployment of unit and end-to-end tests for a robust codebase, which led to a 50% decrease in post-release.",
      ],
    },
      
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
      name: "Tiktik",
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
      image: tiktok,
      site_link: "https://tiktok-mimic.vercel.app",
      source_code_link: "https://github.com/crveskig/tiktok-mimic.git",
    },
    {
      name: "Lyriks",
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
      image: lyriks,
      site_link: "https://lyriks-mimic.netlify.app",
      source_code_link: "https://github.com/crveskig/lyriks.git",
    },
    {
      name: "Summarizer",
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
      image: summarizer,
      site_link: "https://ai-summarizer-zeta.vercel.app",
      source_code_link: "https://github.com/crveskig/ai-summarizer.git",
    },
    {
      name: "Maxfood",
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
      image: "https://res.cloudinary.com/dddvtrxcz/image/upload/v1679495725/samples/ecommerce/Screen_Shot_2023-03-22_at_17.35.01_zgh1fa.png",
      site_link: "https://www.max-food.pl/",
      source_code_link: "https://github.com/crveskig/max-food.git",
    },
    {
      name: "YelpCamp",
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
      image: "https://res.cloudinary.com/dddvtrxcz/image/upload/v1681036206/samples/ecommerce/Screen_Shot_2023-04-09_at_1.28.45_PM_p8dtn5.png",
      site_link: "https://yelpcamps.vercel.app/",
      source_code_link: "https://github.com/crveskig/yelpcampV3.git",
    },
    {
      name: "Kanban",
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
      image: "https://res.cloudinary.com/dddvtrxcz/image/upload/v1679498944/samples/ecommerce/Screen_Shot_2023-03-22_at_18.29.00_nxhmmd.png",
      site_link: "https://kanbans.vercel.app/",
      source_code_link: "https://github.com/crveskig/kanban.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };