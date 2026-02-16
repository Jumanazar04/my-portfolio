export const projects = [
  {
    slug: "youtube-clone",
    title: "YouTube Clone",
    description: "React + MUI + RapidAPI",
    stack: ["React", "MUI", "API"],
    link: "https://github.com/Jumanazar04/jd-tube.git",
    demo: "https://jd-tube.netlify.app/",
    image: "/projects/youtube-clone.png",
    highlights: [
      "Built with React and styled with MUI components",
      "Integrates RapidAPI for fetching real-time YouTube data",
      "Responsive design for optimal viewing on all devices",
    ],
    status: "Live",
  },
    {
    slug: "crud-app",
    title: "CRUD, Login, Signup, Register",
    description: "React + ANTD + API",
    stack: ["React", "ANTD", "API"],
    link: "https://github.com/Jumanazar04/7-oy-imtihon.git",
    demo: "https://crud-jy.netlify.app/",
    image: "/projects/crud.png",
      highlights: [
        "CRUD operations with React and ANTD",
        "User authentication and registration",
        "Responsive design for all devices",
      ],
    status: "Live",
  },
    {
      slug: "weather-api",
    title: "Weather API",
    description: "Vue + CSS + API",
    stack: ["Vue", "CSS", "API"],
    link: "https://github.com/Jumanazar04/weather-pure.git",
    demo: "https://weather-pure.vercel.app/",
    image: "/projects/weather.png",
    highlights: [
      "Built with Vue.js and styled with pure CSS",
      "Integrates OpenWeatherMap API for real-time weather data",
      "Responsive design for optimal viewing on all devices",
    ],
    status: "Live",
  },
  {
    slug: "ecommerce-api",
    title: "E-commerce API",
    description: "CRUD + Auth + Prisma + PostgreSQL backend for e-commerce.",
    stack: ["Node.js", "Express", "Prisma", "PostgreSQL", "JWT"],
    image: "/projects/ecommerce-api.png", // public/projects/ ichiga
    status: "In progress", // "Live" | "In progress" | "Archived"
    link: "https://github.com/Jumanazar04/ecommerce-api",
    demo: "https://your-demo-link.com",
    highlights: [
      "JWT auth + role-based access",
      "Prisma migrations + relations",
      "Deployed on Render",
    ],
    problem:
      "Needed a scalable backend for products, categories, and authentication.",
    solution:
      "Built REST API with clean architecture, Prisma ORM, and secured endpoints.",
    features: [
      "Auth (register/login) + JWT",
      "CRUD: products & categories",
      "Validation + error handling",
      "Pagination / filtering (optional)",
    ],
    challenges: [
      {
        title: "Image URL handling",
        text: "Normalized imageUrl field and handled empty strings as null.",
      },
    ],
  },
  {
    slug: "telegram-pdfCraeter-bot",
    title: "Telegram PDF Creator Bot",
    description: "Node.js + PDF-lib",
    stack: ["Node.js", "Telegram Bot"],
    link: "https://github.com/Jumanazar04",
    demo: "https://t.me/my_food_loverbot",
    image: "/projects/pdf-bot.png",
    highlights: [
      "Generates PDF documents based on user input",
      "Deployed on Railway with auto-restart",
    ],
    status: "Live",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}