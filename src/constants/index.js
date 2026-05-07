export const myProjects = [
  {
  id: 1,
  title: "MUET FM 92.6",
  description:
    "MUET FM 92.6 is the official radio station of Mehran University of Engineering & Technology, broadcasting quality content since its inception. This web app serves as the digital platform for MUET FM, providing details about programs, events, news, and much more.",
  subDescription: [
    "Built with Next.js 13+ (App Router) and React, styled using Tailwind CSS for a clean, responsive UI.",
    "Integrated Supabase for database management and authentication, ensuring secure and efficient data handling.",
    "Framer Motion used for smooth and interactive animations across the site.",
    "Deployed on Vercel for frontend and Cloudflare Workers for serverless backend functions.",
    "Includes an Admin Dashboard for managing programs, events, and team content."
  ],
  href: "https://muet-fm.vercel.app/social",
  logo: "",
  image: "/assets/projects/muetFM.png",
  tags: [
    {
      id: 1,
      name: "Next.js",
      path: "/assets/logos/Next.js.svg",
    },
    {
      id: 2,
      name: "React",
      path: "/assets/logos/react.svg",
    },
    {
      id: 3,
      name: "Tailwind CSS",
      path: "/assets/logos/tailwindcss.svg",
    }
  ],
}


,
{
  id: 2,
  title: "HealthMate",
  description:
    "HealthMate is an AI-powered health assistant that analyzes medical reports and provides easy-to-understand bilingual summaries (English + Roman Urdu). It helps users manage their health data, track vitals, and organize medical reports securely.",
  subDescription: [
    "AI Report Analysis using Google Gemini 2.5 Flash for instant insights from PDFs and images.",
    "Bilingual Summaries in English and Roman Urdu for easy understanding.",
    "Secure authentication powered by Clerk (Email, Google, Apple).",
    "Health Dashboard to monitor vitals like BP, Sugar, BMI, and Heart Rate.",
    "Modern dark-mode glassmorphic UI, fully responsive on all devices.",
  ],
  href: "https://healthmate-snowy.vercel.app/",
  logo: "",
  image: "/assets/projects/healthmate.png",
  tags: [
    {
      id: 1,
      name: "Next.js",
      path: "/assets/logos/Next.js.svg",
    },
    {
      id: 3,
      name: "Tailwind CSS",
      path: "/assets/logos/tailwindcss.svg",
    },  
    {
      id: 5,
      name: "Supabase",
      path: "/assets/logos/supabase.svg",
    },
    {
      id: 7,
      name: "Google Gemini",
      path: "/assets/logos/google-gemini-logo.svg",
    }
  ],
  live: "https://healthmate-snowy.vercel.app/",
},

  {
    id: 3,
    title: "Muet Food",
    description:
      "This project is a responsive and dynamic food ordering website developed for MUET. The platform allows students and staff to browse available food items, place orders, and track their status in real-time",
    subDescription: [
      "Secure login and registration system powered by Firebase Authentication.",
      " Clean and intuitive user interface designed with HTML, CSS, and JavaScript, optimized for both desktop and mobile devices.",
      "Uses Tostify for notifications to enhance user experience."
    ],
    href: "https://tayyabxtreme.github.io/MUETFOOD/",
    logo: "",
    image: "/assets/projects/muetFood.png",
    tags: [
      {
        id: 1,
        name: "Firebase",
        path: "/assets/logos/Firebase.svg",
      },
      {
        id: 2,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Instagram Clone",
    description:
      "A full-featured Instagram clone built using React, Firebase, Chakra UI, and Zustand. The application includes core social features such as posting, profile management, real-time chat, and responsive UI, all powered by Firebase's backend services.",
    subDescription: [
      "Secure sign-up, login, and logout functionality using Firebase Authentication.",
      "Users can upload images with captions to create posts, saved in Firestore and Firebase Storage.",
      "Users can delete their own posts, removing both data and images from Firebase.",
      "Edit username and profile picture with changes saved in Firestore.",
      "Search for users and posts using real-time Firestore queries.",
      "Chat with other users instantly using Firebase Firestore.",
      "Mobile-first, fully responsive UI built with Chakra UI.",
      "Lightweight global state management for auth and posts using Zustand."
    ],
    href: "https://superlative-chebakia-bebb4f.netlify.app/",
    logo: "",
    image: "/assets/projects/instaclone.png",
    tags: [
      {
        id: 1,
        name: "Firebase",
        path: "/assets/logos/Firebase.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Chakra UI",
        path: "/assets/logos/icons8-chakra-ui.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Dua General Store",
    description:
      "A fully responsive e-commerce website built with Next.js and Supabase, featuring user authentication, product listings, blogging, and a complete admin dashboard.",
    subDescription: [
      "User sign-up/login/logout handled via Supabase Auth with session management.",
      "Fully functional admin panel to manage products, orders, users, and blog posts.",
      "Built with ShadCN UI for modern components and responsive design across all devices.",
      "Store user info, products, orders, and blog content, Manage and serve product and profile images",
    ],
    href: "https://www.duageneralstore.com/",
    logo: "",
    image: "/assets/projects/duageneralstore.png",
    tags: [
      {
        id: 1,
        name: "Nextjs",
        path: "/assets/logos/Next.js.svg",
      },
      {
        id: 2,
        name: "Tailwind",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Supabase",
        path: "/assets/logos/Firebase.svg",
      }
    ],
  },
  {
    id: 6,
    title: "Edu Track",
    description:
      "Student Data Management: Admins can easily manage student details and academic records",
    subDescription: [
      "Automates grade entry and eligibility checks based on preset criteria (no more manual calculations—thank you, automation!.",
      "We added logic to automatically evaluate whether students meet certain eligibility requirements",
      "Built with JavaFX & MySQL: Designed with a sleek JavaFX interface and backed by MySQL for robust data storage and management."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/edutrack.jpeg",
    tags: [
      {
        id: 1,
        name: "JavaFX",
        path: "/assets/logos/Java.svg",
      }
      
    ],
  }
];

export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/TayyabXtreme",
    icon: "/assets/socials/githubs.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/muhammad-tayyab-xtreme/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/xtreme458/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
  title: "Chief Technology Officer (CTO)",
  job: "FITRO – AI-Powered Fitness App",
  date: "2025-Present",
  contents: [
    "Led the technical development of FITRO, an AI-powered fitness application designed to simplify calorie tracking and personalized fitness guidance.",
    "Built a computer vision-based food recognition system capable of estimating calories from meal images in real time.",
    "Integrated LLM-powered fitness assistance to provide personalized diet and workout recommendations for users.",
    "Designed and managed the app’s scalable API-first architecture, ensuring affordability, performance, and cross-device compatibility.",
    "Collaborated with the startup team on product strategy, UI/UX improvements, and deployment workflows during NIC Hyderabad Cohort 7.",
  ],
},
  {
    title: "Web Development Intern",
    job: "MUET FM 92.6",
    date: "June – July 2025",
    contents: [
      "Developed and deployed the official full-stack website for MUET FM 92.6, enhancing the digital presence of Mehran University’s radio station.",
      "Worked on both frontend and backend — from UI/UX design to Supabase database integration and user authentication.",
      "Built a dynamic content management system with admin dashboard for managing programs, events, and radio team profiles.",
      "Optimized website performance for faster load times and smoother user interaction using Next.js and Framer Motion.",
      "Deployed and tested the live site on Vercel with Cloudflare Workers for serverless functions and real-time content delivery.",
    ],
  },
  {
  title: "Full-Stack Web Developer",
  job: "Dua General Store (Freelance Project)",
  date: "2025",
  contents: [
    "Built a complete e-commerce web application using Next.js (App Router), Supabase, and ShadCN UI.",
    "Designed and developed both the customer-facing storefront and the admin dashboard for product management and order tracking.",
    "Integrated Supabase for authentication, product database, and real-time cart and order updates.",
    "Implemented responsive UI with ShadCN components, ensuring a seamless experience across devices.",
    "Handled checkout process, cart logic, and user profile features using modern front-end and back-end practices.",
  ],
},
  {
    title: "Web Director",
    job: "AIC Society",
    date: "2024-2025",
    contents: [
      "Led the development of a full-stack web application using Next.js and Supabase.",
      "Designed and implemented both admin and frontend panels to streamline society operations and digital presence.",
      "Integrated Supabase for authentication, real-time database operations, and user management.",
      "Collaborated with team members to ensure responsive UI and scalable back-end features.",
    ],
  },
  {
    title: "DIT (Diploma in Information Technology)",
    job: "Computer Man Center",
    date: "2021-2022",
    contents: [
      "Completed coursework in web development, UI/UX design, Microsoft 365 tools, and basic computer networking.",
      "Built foundational skills in HTML, CSS, and JavaScript through hands-on projects.",
      "Gained proficiency in office applications and collaborative tools under Microsoft 365.",
      "Developed an understanding of computer hardware, networking concepts, and troubleshooting techniques.",
    ],
  }
];
