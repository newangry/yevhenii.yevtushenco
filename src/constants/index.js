import {
    reactjs,tailwind,nodejs,mongodb,git,threejs,
    hf,bny,holopin,
    clg,school,
    oop,yml,crud,dwld,onetomany,
    trie,ds,cg,
    port_3d, jsp, chitchat, notes, react1,
    be,sql, mini, snl,
    markprompt,
    wafi
  } from "../assets";

  const profiles = [
    {
      link: "https://",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
    },
    {
      link: "https://",
      icon: "https://img.icons8.com/fluency/344/google-cloud.png",
    },
    {
      link: "",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-qwiklabs-provides-real-cloud-environments-that-help-developers-logo-color-tal-revivo.png",
    },
    {
      link: "",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
    },
    {
      link:"https://dev.to/",
      icon: hf,
    },
    {
      link:"https://www.holopin.io/",
      icon: holopin,
    },
  ];

  const achievements = [
    {
      title: "8th Position : Selected for the final round of 12th CSI InApp International Student Project awards 2023.",
    },
    {
      title: "Twice State level Table-Tennis Winner (2021 and 2022)",
    },
    {
      title: "1st Position : Consecutive four times Winner of UdChalo Scholarship (2019 - 2023)",
    },
    {
      title: "Branch Head of Information Technology Department (2021 - 2022)",
    },
    {
      title: "Selected in top 100 candidates for Google Cloud Training among 20k Students.",
    },
    {
      title: "Got Education Scholarship Scheme for Army Personnel(ESSA) Scholarship (2015 - 2023)",
    },
    {
      title: "Played Nationals in Throwball for U-14 category. (2015)",
    },
  ]
  
  const technologies = [
   
    {
      name: "React JS",
      icon: reactjs,
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
      name:"MySql",
      icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
    },
  ];

  const list = [
    {
      id: "java",
      title: "Chatbots",
    },
    {
      id: "c++",
      title: "Blockchain",
    },
    {
      id: "web",
      title: "Gis",
    },
    {
      id: "other",
      title: "Other",
    },
  ];

  export const javaProject = [
    {
      name: "chatjet.co",
      description:
        " Built a responsive and user-friendly Frontend for Playground pages that enabled user to train data such as Pdf, Txt, Web Scraping and Git and chat with generated the chatbots that can be integrated other Frameworks such as React, Vue, Angular, Vanila, etc on FrondEnd.",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "Supabsae",
          color: "green-text-gradient",
        },
        {
          name: "Embedding",
          color: "pink-text-gradient",
        },
      ],
      image: markprompt,
      source_link: "https://markprompt.com/",
      source_code_link: "/",
    },
    {
      name: "Wafi",
      description:
        "Generative AI, Natural Language Process, Large Language Model, TTS, STT and Vector DB, I designed the Schema for Vector data and implemented LLM, NLP by Langchain for AI frameworks and used Supabase and Pinecone for Vector DB on Backend.",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "Pinecone",
          color: "green-text-gradient",
        },
        {
          name: "FastAPI",
          color: "pink-text-gradient",
        },
        {
          name: "Embedding",
          color: "pink-text-gradient",
        },
        {
          name: "AWS",
          color: "blue-text-gradient",
        },
      ],
      image: wafi,
      source_link: "https://wafi-six.vercel.app/login/admin",
      source_code_link: "/",
    },
  ];
  
  export const cProject = [
    {
      name: "Spell Checker",
      description:
        "Trie data structure implementation used as a dictionary, where customer details are checked, searched, inserted and removed. Using Trie, search complexities can be brought to optimal limit (key length)",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "trie",
          color: "green-text-gradient",
        },
        {
          name: "dictionary",
          color: "pink-text-gradient",
        },
      ],
      image: trie,
      source_link: "https://github.com/",
      source_code_link: "https://github.com/",
    },
    {
      name: "DSA Lab",
      description:
        "These projects contain data structure and algorithms primary concepts and its code in C++ language. Topics like : Linked List, Stack, Queue, Circular Queue, Binary Tree, Binary Search Tree, Expression Tree, Threaded Binary Tree, and Heap Sort etc.",
      tags: [
        {
          name: "DSA",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: ds,
      source_link: "https://github.com/",
      source_code_link: "https://github.com/",
    },
    {
      name: "Computer Graphics Lab",
      description:
        "These projects contain computer graphics topics like : Line Drawing Algorithm (DDA and Bresenham), Bresenham circle drawing, Polygon filling, 2D transformation, Cohen Sutherland polygon clipping and Bezier curve.",
      tags: [
        {
          name: "computergraphics",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: cg,
      source_link: "https://github.com/",
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export const webProject = [
    {
      name: "3D React Portfolio",
      description:
        "Created an impressive website made using React with 3D graphics and animations to bring their content to life. Responsive webpage is made with user friendly interface",
      tags: [
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "3d_react",
          color: "pink-text-gradient",
        },
      ],
      image: port_3d,
      source_link: "https://",
      source_code_link: "https://",
    },
    {
      name: "React portfolio",
      description:
        "Website made using React in the FrontEnd, Nodejs and Express in the BackEnd. Responsive webpage is made with user friendly interface",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "html css",
          color: "pink-text-gradient",
        },
      ],
      image: react1,
      source_link: "https://",
      source_code_link: "https://",
    },
    {
      name: "30 Days of JavaScript",
      description:
        "Website made using Nodejs and Express in the BackEnd. A 30 Days Of JavaScript challenge to learn JavaScript by making 30 different projects using some famous JavaScript libraries.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "30dayschallenge",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jsp,
      source_link: "https://",
      source_code_link: "https://",
    },
    {
      name: "Chit Chat Application",
      description:
        "Real-Time, event based communication in Nodejs and browser-based Chat application. Uses Socket.io for implementation for WebSockets protocol. This application built using Node.js, Express, Socket.io and Render (Hosting)",
      tags: [
        {
          name: "Chatting",
          color: "blue-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: chitchat,
      source_link: "https://",
      source_code_link: "https://",
    },
    {
      name: "Notes Application",
      description:
        "A web-based notes app made by using javaScript, This web-based notes app having functionalities like Drag and drop, Search notes etc.",
      tags: [
        {
          name: "notes",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: notes,
      source_link: "https://",
      source_code_link: "https://",
    },
  ];
  
  export const otherProject = [
    {
      name: "Multilingual Multiple Choice Question Generation",
      description:
        "Final Year Project : Its a low level and high level model where we automate the process of creating objective question assessment using LSTM(at low level) and Transformer(at high level) models for multiple languages.",
      tags: [
        {
          name: "machine learning",
          color: "blue-text-gradient",
        },
        {
          name: "multilingual",
          color: "green-text-gradient",
        },
        {
          name: "BE_Project",
          color: "pink-text-gradient",
        },
      ],
      image: be,
      source_link: "https://",
      source_code_link: "https://",
    },

    {
      name: "DBMS Lab",
      description:
        "Semester 4 : DBMS Lab. Topics included: ER/EER Diagram, DDL statements, primary key and foreign key constraint., SQL queries with different functions, Views, PL/SQL, Trigger (Row level and statement level) and cursor.",
      tags: [
        {
          name: "MySql",
          color: "blue-text-gradient",
        },
        {
          name: "dbms",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: sql,
      source_link: "https://",
      source_code_link: "https://",
    },
    {
      name: "SQL : Library Management System",
      description:
        "Semester 4 : DBMS Mini Project. Created a library management system using SQL and different functionalities.",
      tags: [
        {
          name: "sql",
          color: "blue-text-gradient",
        },
        {
          name: "management",
          color: "green-text-gradient",
        },
        {
          name: "miniproject",
          color: "pink-text-gradient",
        },
      ],
      image: mini,
      source_link: "https://",
      source_code_link: "https://",
    },
    {
      name: "Pyhton : Snake and Ladder",
      description:
        "Snake and Ladder game using python language. A simple command line interface snake and ladder game",
      tags: [
        {
          name: "snake and ladder",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "CLI",
          color: "pink-text-gradient",
        },
      ],
      image: snl,
      source_link: "https://",
      source_code_link: "https://",
    },
    
  ];
  
  const experiences = [
    {
      title: "Senior Developer",
      company_name: "MarkPrompt in US",
      icon: "https://markprompt.com/static/favicons/favicon.ico",
      iconBg: "#383E56",
      date: "July 2022 - Aug 2023",
      link: "",
      points: [
        "Worked as Full Stack Developer and Generative AI, NLP, LLM Engineer.",
        "Scraper for websites using API on Backend(Typescript)",
        "Optimized Supabase database to store Vector DB and train data.",
        "Built web application with Next JS(SSR) using Shadns UI for Front End",
        "Implement Stripe for subscriptions and membership for users.",
        "Contributed to CI/CD pipeline automation, and single handedly carried out all DevOps responsibilities for the team.",
        "Deployed the project to AWS server"
      ],
      link: "https://markprompt.com/static/favicons/favicon.ico",
    },
    {
      title: "Software Engineer",
      company_name: "Sparrow Charts in US",
      icon: "https://uploads-ssl.webflow.com/5fc9939e7a516514c66a2046/609b4b5b1484fbeb543c5e77_256px.png",
      iconBg: "#383E56",
      date: "Mar 201 - Aug 2022",
      link: "",
      points: [
        "Used machine learning(ML) to help clients understand the demographics of their Twitter followers. Created microservice to estimate user’s age from their Twitter profile using machine learning models(LLM).",
        "Designed and implemented a Node.js microservice that helps clients in task management and a goals dashboard to track monthly progress.",
        "Implemented multiple features in their Angular-based customer-facing application, including UI components, supporting query parameters to restore app state, pagination, and caching.",
        "Contributed to CI/CD pipeline automation, and single handedly carried out all DevOps responsibilities for team",
        "Junior developers were trained to independently design and lead projects."
      ],
      link: "",
    },
    {
      title: "Junior developer, Full-stack",
      company_name: "Fulcurm in Ukrain",
      icon: "https://fulcrum.rocks/wp-content/uploads/2023/01/favicon.svg",
      iconBg: "#E6DEDD",
      date: "Apr 2020 - Apr 2021",
      link: "https://fulcrum.rocks/wp-content/uploads/2023/01/favicon.svg",
      points: [
        "Developed scalable financial web applications:  Leveraged Vue and React frameworks along with Laravel, Node Js, Postgresql, Elasticsearch, and MongoDB to build to robust financial web applications. Implement various features such as real-time data updates, user authentication, and secure transaction processing.",
        "Collaborated on full stack e-commerce solutions: Worked with a cross-functional team to develop e-commerce platforms using ASP.NET, Vue js, PostgreSQL, and AWS",
        "Developed AI applications: Involved in several AI applications including Robot controlling system utilizing Python and its libraries.",
        "Automated deployment processes: Implemented CI/CD pipelines utilizing Docker, Jenkins, and AWS to automate the deployment and delivery of applications."
      ],
      link: "",
    },
    {
      title: "Back-end and Front-end developer",
      company_name: "WESOFTYOU in Ukrain",
      icon: "https://wesoftyou.com/wp-content/uploads/2023/02/cropped-favicon-new-192x192.png",
      iconBg: "#383E56",
      date: "March 2019 - Feb 2020",
      link: "",
      points: [
        "Designed and developed robust back-end systems using Python and Java.",
        "Collaborated with cross-functional teams to create efficient and scalable software solutions.",
        "Developed inventory management systems, and optimized database queries for seamless user experiences.",
        "Implemented RESTful APIs and integrating third-party APIs for seamless data exchange between systems.",
        "Pioneered a new field in the front-end sector by improving the UI in line with changing trends and researching and introducing a system that can achieve maximum performance in the front-end in line with improved backend functions."
      ],
    },
  ];
  
  const educations = [
    {
      degree: "Bachelor of Engineering",
      branch:
        "Master of Computer Science (MSCS), Computer science",
      marks:
        "",
      name: "Kyiv National University",
      year: "(2017 - 2019)",
      image: clg,
    },
    {
      degree:
        "Student",
      branch : "Science",
      marks:
        "",
      name: "Kyiv National University",
      year: "(2013 - 2017)",
      image: school,
    },
  ];
  
  export { list, profiles, technologies, experiences, educations, achievements };
