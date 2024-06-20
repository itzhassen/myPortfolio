/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hassen's Portfolio",
  description:
    "Passionné par le développement web et mobile, je suis impatient de perfectionner mes compétences et de contribuer à des projets innovants.",
  og: {
    title: "Hassen Ben Daadouch Portfolio",
    type: "website",
    url: "https://www.linkedin.com/in/hassendaadouch/",
  },
};

//Home Page
const greeting = {
  title: "Hassen Ben Daadouch",
  logo_name: "Hassen Ben Daadouch",
  nickname: "Développeur Web & Mobile ",
  subTitle:
    "Passionné par le développement web et mobile, je suis impatient de perfectionner mes compétences et de contribuer à des projets innovants.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/itzhassen",
  githubProfile: "https://github.com/itzhassen",
};

const socialMediaLinks = [


  {
    name: "Github",
    link: "https://github.com/itzhassen",
    fontAwesomeIcon: "fa-github", 
    backgroundColor: "#181717", 
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hassendaadouch/",
    fontAwesomeIcon: "fa-linkedin-in", 
    backgroundColor: "#0077B5", 
  },
  {
    name: "Gmail",
    link: "mailto:hassendaadouch@gmail.com",
    fontAwesomeIcon: "fa-google", 
    backgroundColor: "#D14836", 
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/mr.daadouch",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/itzhassen/",
    fontAwesomeIcon: "fa-instagram", 
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    
    {
      title: "Développement FullStack MERN / PHP",
      fileName: "FullStackImg",
      skills: [
        "⚡ Création des sites web dynamiques avec une meilleure expérience utilisateur",
        "⚡ Conception et développement des Interfaces web attractives & Responsives",
        "⚡ Création et développement des APIs REST.",
        "⚡ Maintenance et amélioration des sites web à long terme.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
  
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "blue",
          },
        },
      ],
    },
    {
      title: "Développement & Gestion des sites web eCommerce",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Création et développement des sites web e-Commerce et Online stores",
        "⚡ Gestion des produits et service confirmation de client",
        "⚡ Administration du boutique & Statistiques de vente.",
      ],
      softwareSkills: [
        {
          skillName: "WordPress",
          fontAwesomeClassname: "logos-wordpress",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "WooCommerce",
          fontAwesomeClassname: "simple-icons:woocommerce",
          style: {
            backgroundColor: "transparent",
            color: "purple",
          },
        },
        {
          skillName: "Elementor",
          fontAwesomeClassname: "simple-icons:elementor",
          style: {
            backgroundColor: "transparent",
            color:"red",
          },
        },
      ],
    },
    {
      title: "Développement des Applications Mobiles",
      fileName: "FullStackImg",
      skills: [
        "⚡ Création des applications mobiles dynamiques avec une meilleure expérience utilisateur",
        "⚡ Maintenance et amélioration des applications mobiles à long terme.",
      ],
      softwareSkills: [
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "lightblue",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "blue",
          },
        },
  
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
            color: "transparent",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "logos-android",
          style: {
            backgroundColor: "transparent",
            color: "green",
          },
        },
        {
          skillName: "IOS",
          fontAwesomeClassname: "logos-apple",
          style: {
            backgroundColor: "transparent",
            color: "transparent",
          },
        },
        
      ],
    },
   
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/Hassen_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@Hassen391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Lycée secondaire Ibn Rochd Midoun, Djerba",
      subtitle: "Baccalauréat en sciences informatique",
      logo_path: "school.png",
      alt_name: "Lycee Ibn Rochd Djerba",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ J'ai découvert les bases de HTML, CSS, JavaScript et PHP, ce qui a éveillé mon intérêt pour le développement web.",
        "⚡ J'ai commencé à créer des sites web simples, statiques et dynamiques, ce qui m'a permis d'acquérir une expérience pratique et de renforcer ma compréhension des technologies web.",
        "⚡ Cette période m'a également permis d'apprendre les bases de l'informatique, établissant une base solide pour mes futures études et projets dans ce domaine.",
      ],
    },
    {
      title: "Institut Supérieur des Etudes Technologique de Djerba",
      subtitle: "Licence en Technologies de l'Informatique",
      logo_path: "isetjb.png",
      alt_name: "ISET Djerba",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ J'ai développé mes compétences en informatique au cours de ma formation universitaire, ce qui m'a permis d'acquérir une solide expertise dans ce domaine.",
        "⚡ J'ai effectué trois stages dans des entreprises informatiques, où j'ai pu appliquer mes connaissances et acquérir une expérience précieuse en milieu professionnel.",
        "⚡ J'ai également exploré davantage le développement web et mobile, en travaillant sur divers projets qui ont renforcé mes compétences pratiques et théoriques.",
        "⚡ Ma participation aux clubs universitaires comme IEEE et 4C m'a permis d'améliorer mes compétences en réseautage et de découvrir la vie professionnelle ainsi que la dynamique des activités de club."
      ],
      website_link: "http://www.isetjb.rnu.tn/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Microsoft AZ-900",
      subtitle: "Cloud computing & virtualisation",
      logo_path: "microsoft_logo.png",
      alt_name: "ISET Djerba",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experiences Professionnelles",
  subtitle: "Stages effectuées",
  description:
    "Ayant passé trois expériences en tant que stagiaire dans le domaine de technologies de l'informatique, je me suis spécialisé en développement web et mobile, ce qui m'a permis d'acquérir des compétences approfondies et variées.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Emplois",
      work: true,
      experiences: [
        {
          title: "Pas d'éxperience d'emploi pour le moment...",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "graduated.png",
          color: "#000000",
        },
      ],
    },
    {
      title: "Stages",
      experiences: [
        {
          title: "Stage d'Initiation : Développeur e-Commerce",
          company: "T&M Consulting",
          company_url: "https://t-and-m.fr/",
          logo_path: "tm.png",
          duration: "[1 Moi] Janvier 2022 - Fevrier 2022",
          location: "Houmt Souk, Djerba",
          description:
            "Création d'un site web eCommerce pour la vente des produits Electroniques & Marque des vetements, en incluant le Gateway de paiement en ligne avec Clic2Pay. Développée en Wordpress, wooCommerce et Elementor",
          color: "#000000",
        },
        {
          title: "Stage de Perfectionnement : Développeur Fullstack PHP",
          company: "CyberParc Djerba",
          company_url: "https://einfo.tn/cyberparcdjerba/",
          logo_path: "cyber.jpg",
          duration: "[1 Moi] Janvier 2023 - Fevrier 2023",
          location: "Houmt Souk, Djerba",
          description:
            "Développement d'une application web dynamique pour la gestion des cours et formations au sein de centre des formations de CyberParc Djerba. Dédiée pour des étudiants et formateurs avec des interfaces utilisateurs attractives.",
          color: "#ee3c26",
        },
        {
          title: "Stage de Fin d'études : Développeur Fullstack JS ( React.js & Node.js )",
          company: "Amitech Smart Solutions",
          company_url:
            "https://www.linkedin.com/company/amitech-group/posts/?feedView=all",
          logo_path: "amitech.png",
          duration: "[4 Mois] Fevrier 2024 - Juin 2024",
          location: "à Distance",
          description:
            "Conception et développement d'une application web dynamique de réseau social éducatif dédiée pour les étudiants,enseignants et entreprises, avec une interface de messagerie en temps réel et dashboard admin, développée en MERN Stack (MongoDB,ExpressJS,ReactJS,NodeJS).",
          color: "#0071C5",
        },
      ],
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Mes projets utilisent une grande variété des outils technologiques les plus récents. Mon expérience la plus enrichissante est de créer des applications web et de les déployer.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Boutique en ligne : Vente des produits Electroniques",
      createdAt: "2022-01-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_Hassen.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.HassenBen Daadouch.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
