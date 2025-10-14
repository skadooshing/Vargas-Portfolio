import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Patrick Vargas",
  initials: "PV",
  url: "https://vargas-portfolio.vercel.app/",
  location: "Tuguegarao City, Carig Sur",
  locationLink: "https://maps.app.goo.gl/LWsNuX4SZBTPpobdA",
  description:
    "Aspiring Software Developer based in Tuguegarao City. Passionate about building innovative solutions and making a positive impact. Actively sharing ideas and connecting with others on LinkedIn.",
  summary:
    "At the end of college, I decided to fully pursue my passion for technology and innovation—venturing into both Virtual Assistance and Software Development. Along the way, I earned Best Capstone, Academic Distinction, and Scholastic Award, became a DICT Hackathon Finalist, and discovered my love for solving real-world problems through code. Today, I’m building a career that blends creativity, technical skill, and a drive to deliver impactful solutions.",
  avatarUrl: "/try.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Vue.js",
    "PHP",
    "Laravel Framework",
    "Flutter",
    "Node.js",
    "Python",
    "JavaScript",
    "MySql",
    "Docker",
    "C#",
    "Java",
    "Vb.Net",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  
  contact: {
    email: "vargas.patrickc@gmail.com",
    tel: "+63977161024",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/skadooshing",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/patrick-v1/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/patrikitiks_",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Department of Trade and Industry",
      href: "https://www.dti.gov.ph/",
      badges: [],
      location: "Regional Government Center, Carig Sur 3500 Tuguegarao City, Philippines",
      title: "IT Officer & PBIDC Admin",
      logoUrl: "/dti-new.png",
      start: "October 1, 2025",
      end: "Currently Working",
      description:
        "Managed and maintained administrative systems, ensuring smooth daily operations through efficient scheduling, documentation, and correspondence handling. Oversaw database management and record-keeping for accuracy and compliance, streamlined reporting processes for quick decision-making, and coordinated with teams to support organizational goals and improve overall productivity",
    },
    {
      company: "Codebility",
      href: "Codebility.tech",
      badges: [],
      location: "Remote",
      title: "Admin",
      logoUrl: "/codebility logo.jpg",
      start: "August 2025",
      end: "Currently An Intern",
      description:
        "Managed and maintained administrative systems, ensuring smooth daily operations through efficient scheduling, documentation, and correspondence handling. Oversaw database management and record-keeping for accuracy and compliance, streamlined reporting processes for quick decision-making, and coordinated with teams to support organizational goals and improve overall productivity",
    },
    {
      company: "Philippine National Police PRO 2",
      href: "https://www.facebook.com/pro2rpio/",
      badges: [],
      location: "Onsite",
      title: "Full Stack Developer",
      logoUrl: "/pnp.png",
      start: "February 2025",
      end: "June 2025",
      description:
        "Implemented and designed a mobile application and implemented an admin dashboard for real-time monitoring of reports, with functionality for generating and printing summaries and managed comprehensive database operations, ensuring data integrity and efficient information retrieval.",
    },
    {
      company: "Wix",
      badges: [],
      href: "https://wix.com",
      location: "Remote",
      title: "Wix Specialist",
      logoUrl: "/wix.png",
      start: "November 2024",
      end: "December 2024",
      description:
        "Designed and developed responsive, visually appealing websites using Wix Editor and Editor X. Implemented Wix Velo (Corvid) for dynamic functionality, including databases, custom forms, and interactive features.",
    },
    {
      company: "RareJob Philippines",
      href: "https://www.rarejob.com.ph/",
      badges: [],
      location: "Tokyo, Japan",
      title: "English as Secondary Langugae Tutor",
      logoUrl: "/rj.png",
      start: "April 2023",
      end: "October 2023",
      description:
        "Developed and delivered customized lesson plans tailored to each student’s proficiency level and learning needs. Ensured a balanced mix of speaking, listening, reading, and writing activities. Utilized various online platforms and interactive teaching tools to enhance engagement and learning effectiveness",
    },
  ],
  education: [
    {
      school: "Cagayan State University",
      href: "https://csu.edu.ph/",
      degree: "Bachelor of Science in Information Technology Major in Programming",
      logoUrl: "/csu.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "University of Saint Louis Tuguegarao",
      href: "https://usl.edu.ph/",
      degree: "Humanities and Social Sciences",
      logoUrl: "/uslt.png",
      start: "2019",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "DEVELOPMENT OF ASSET TRACKING AND MANAGEMENT FOR PROPERTY PLANT AND EQUIPMENT",
      href: "https://chatcollect.com",
      dates: "November 2024 - Jan 2025",
      active: true,
      description:
        "This project is a VB.NET-based asset tracking and management system designed to help organizations efficiently monitor, record, and maintain their Property, Plant, and Equipment (PPE). It enables accurate tracking of assets across departments, improves accountability, and minimizes asset misplacement or loss.",
      technologies: [
        "Vb.Net",
        "MVC Architecture",
        "MySQL",
        ".Net Framework",
      ],
      links: [
        {
          type: "",
          href: "https://github.com/skadooshing/Development-of-Asset-Tracking-Management-of-Property-Plant-and-Equipment",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ppe2.png",
      video:
        "",
    },
    {
      title: "E-Sumbong – Digital Complaint and Incident Reporting System",
      href: "https://github.com/skadooshing/E-sumbong",
      dates: "February 2025 - June 2025",
      active: true,
      description:
        "E-Sumbong is a web-based complaint and incident reporting platform that allows citizens to securely report concerns, violations, or incidents to the appropriate authorities. It aims to streamline the reporting process, ensure faster response times, and promote transparency between the public and governing bodies.",
      technologies: [
        "Next.js",
        "Ionic Angular",
        "MySQL",
        "Javascript",
        "Bootsrap",
        "PHP",
        "Laravel",
        "Api Integration",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/skadooshing/E-sumbong",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/skadooshing/E-sumbong",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/e-sumbong.png",
      video: "",
    },
    {
      title: "Chatbot Integration",
      href: "https://www.facebook.com/profile.php?id=61573191396209",
      dates: "Febuary 2025 - June 2025",
      active: true,
      description:
        "The E-Sumbong Chatbot enables real-time, automated assistance for users, guiding them through the complaint submission process, answering frequently asked questions, and providing status updates on reported cases. This feature enhances accessibility, responsiveness, and user engagement by allowing citizens to interact with the system through a conversational interface—available 24/7",
      technologies: [
        "Api Integration",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.facebook.com/profile.php?id=61573191396209",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chatbot.png",
      video: "",
    },
    {
      title: "E-Commerce Mobile App",
      href: "https://github.com/skadooshing/E-Commerce-Mobile-App",
      dates: "March 2023 - April 2023",
      active: true,
      description:
        "Developed a modern, user-friendly mobile application that delivers a seamless online shopping experience. This app enables customers to browse products, add items to their cart, make secure payments, and track orders directly from their smartphones. With personalized recommendations, real-time notifications, and an intuitive interface, it boosts convenience, accessibility, and customer engagement for online businesses.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/skadooshing/E-Commerce-Mobile-App",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/bytewave2.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "DICT Regional Pitching Competition",
      dates: "December 12, 2025",
      location: "Tuguegarao City, Cagayan",
      description:
        "DERMAI is a proposed skincare platform concept that would use 3D modeling and AI image analysis to help detect persistent skin conditions from user-submitted images. It would also include a feature to verify skincare product legitimacy and FDA approval, aiming to promote safe product use. Potential beneficiaries include the Department of Trade and Industry (DTI) and Local Government Units (LGUs), supporting public health and consumer protection efforts.",
      image:
        "/DICT.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "JavaScript Essentials",
      dates: "August 04, 2025",
      location: "Tuguegarao City, Cagayan",
      description:
        "Earned a Certificate in JavaScript Essentials, demonstrating proficiency in core programming concepts, syntax, and problem-solving techniques essential for building dynamic and interactive web applications.",
      image:
        "/cisco.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Internship",
      dates: "February 2025 - June 2025",
      location: "Caggay, Tuguegarao City, Cagayan",
      description:
        "Completed an internship at PNP Police Regional Office 2 (PRO2), where I contributed to the design and development of E-Sumbong, a web-based public reporting platform. The system streamlines the submission, tracking, and resolution of citizen complaints, enhancing accessibility, operational efficiency, and transparency within the organization.",
      icon: "public",
      image:
        "/pnp.png",
      links: [],
    },
    {
      title: "International Convocation Series on Applied Science and Technology",
      dates: "December 12th-13th, 2024",
      location: "Carig Sur, Tuguegarao City",
      description:
        "Presented DERMAI at the International Convocation Series (ICAST), showcasing its concept as an AI-powered dermatological analysis and product verification platform. The presentation highlighted its potential to assist users in detecting skin conditions through 3D modeling and verifying product authenticity, aligning with global trends in health technology innovation",
      image:
        "/images.jpg",
      links: [
        {
          title: "",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
      ],
    },
    {
      title: "What the Heck is Cloud?",
      dates: "January 16th, 2024",
      location: "Carig Sur, Tuguegarao City",
      description:
        "Attended the “What the Heck is Cloud?” seminar, which provided an introductory overview of Microsoft Azure and its core services. The session covered fundamental cloud computing concepts, deployment models, and practical applications, offering insights into leveraging Azure for scalable and efficient solutions.",
      image:
        "/csu.png",
      win: "Best Data Hack",
      mlh: "",
      links: [
        {
          title: "",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
      ],
    },
  ],
} as const;
