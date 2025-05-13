export const myProjects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
  },
  {
    id: 5,
    title: "Medical Recommendation System",
    description:
      "The Medical Recommendation System is a Flask-based AI web app that serves as a virtual health assistant. Users input their symptoms, and the system predicts the likely disease while also recommending appropriate medications, diets, workouts, and precautions. By integrating a machine learning model trained on medical datasets, it provides a preliminary diagnosis and basic treatment suggestions. This system is especially useful in areas with limited healthcare access, helping bridge the gap between patients and professional medical support.",
    subDescription: [
      "Quickly interprets user-inputted symptoms using trained machine learning models.",
      "Provides customized medicine, diet, workout, and precaution recommendations.",
      "User-friendly UI with searchable, clickable symptom tags and instant feedback.",
      "Aids in early diagnosis, especially in areas lacking medical professionals.",
    ],
    href: "https://github.com/TayyabXtreme/AI_Project_Medecine_Recommendation_System",
    logo: "",
    image: "/assets/projects/muetFood.png",
    tags: [
      {
        id: 1,
        name: "Scikit Learn",
        path: "/assets/logos/scikit-learn.svg",
      },
      {
        id: 2,
        name: "Flask",
        path: "/assets/logos/Flask.svg",
      },
      {
        id: 3,
        name: "Pandas",
        path: "/assets/logos/Pandas.svg",
      },
      {
        id: 4,
        name: "Html5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 5,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 6,
        name: "Javascript",
        path: "/assets/logos/javascript.svg",
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
