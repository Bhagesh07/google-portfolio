export interface ProfileData {
  about: string;
  skills: {
    programmingLanguages: string[];
    frontend: string[];
    backend: string[];
    databases: string[];
    devopsCloud: string[];
    tools: string[];
    concepts: string[];
  };
  internship: {
    company: string;
    duration: string;
    title: string;
    description: string;
    achievements: string[];
    technologies: string[];
  };
  projects: {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    live?: string;
  }[];
  achievements: {
    certifications: string[];
    coding: string;
    hackathons: string[];
  };
  contact: {
    email: string;
    linkedin: string;
    github: string;
    leetcode: string;
  };
}

export const profileData: ProfileData = {
  about: "B.Tech CSE student skilled in MERN stack, REST APIs, SQL/NoSQL, Cloud, and DSA (228+ LeetCode problems). Passionate about impactful software.",
  
  skills: {
    programmingLanguages: ["Java", "JavaScript", "C++"],
    frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
    backend: ["Node.js", "Express.js", "GraphQL", "Hono Framework"],
    databases: ["MongoDB", "MySQL", "PostgreSQL", "Supabase"],
    devopsCloud: ["Docker", "Kubernetes", "AWS (EC2, S3)", "CI/CD", "Vercel", "Render"],
    tools: ["Git", "GitHub", "Postman", "Prisma ORM", "TurboRepo"],
    concepts: ["DSA", "OOP", "Sharding", "Load Balancing", "CAP Theorem", "JWT", "Zod Validation"]
  },

  internship: {
    company: "Jindal Steel",
    duration: "May–June 2024",
    title: "Software Development Intern",
    description: "Built a real-time Coil Detection & Counting System using YOLOv8 + OpenCV.",
    achievements: [
      "Achieved 95% detection accuracy and 96% counting accuracy at 25 fps",
      "Automated inventory management reducing manual work",
      "Improved operational efficiency through real-time monitoring"
    ],
    technologies: ["YOLOv8", "OpenCV", "Python", "Computer Vision", "Real-time Processing"]
  },

  projects: [
    {
      title: "Carpooling Web",
      description: "Full-stack carpooling platform with secure authentication and real-time matching",
      technologies: ["MERN Stack", "REST APIs", "Secure Authentication", "MongoDB"],
      github: "https://github.com/Bhagesh07/carpooling"
    },
    {
      title: "Medium Blog",
      description: "Modern blogging platform with serverless architecture and responsive design",
      technologies: ["React", "Express", "Tailwind CSS", "PostgreSQL", "Hono", "Cloudflare Workers"],
      github: "https://github.com/Bhagesh07/Medium-Blog",
      live: "https://medium-blog-git-main-medium-blogs-projects.vercel.app"
    },
    {
      title: "Payzo Wallet App",
      description: "Digital wallet application with secure transactions and user management",
      technologies: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "Docker", "JWT"],
      github: "https://github.com/Bhagesh07/Payzo",
      live: "https://payzo-user-app.vercel.app/login0"
    }
  ],

  achievements: {
    certifications: [
      "NPTEL – Theory of Computation (2024)",
      "NPTEL – Computer Networks (2024)"
    ],
    coding: "Solved 228+ DSA problems on LeetCode (Java)",
    hackathons: [
      "Hackathon 2024 – Built face-skin disease detection system (YOLOv8 + OpenCV)"
    ]
  },

  contact: {
    email: "bhageshchavan4304@gmail.com",
    linkedin: "https://linkedin.com/in/bhagesh-chavan-822a5824a",
    github: "https://github.com/Bhagesh07",
    leetcode: "https://leetcode.com/u/bhagesh07"
  }
};

// Search data for autocomplete and search functionality
export interface SearchItem {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  url: string;
  category: string;
}

export const searchData: SearchItem[] = [
  {
    id: "skills",
    title: "Skills & Technologies",
    description: "Programming languages, frameworks, databases, and technical concepts",
    keywords: ["skills", "technologies", "programming", "languages", "frameworks", "tech", "stack"],
    url: "/skills",
    category: "Skills"
  },
  {
    id: "projects",
    title: "Projects Portfolio",
    description: "Full-stack web applications including Carpooling Web, Medium Blog, and Payzo Wallet",
    keywords: ["projects", "portfolio", "applications", "web", "development", "carpooling", "medium", "payzo", "wallet"],
    url: "/projects",
    category: "Projects"
  },
  {
    id: "internship",
    title: "Jindal Steel Internship",
    description: "Software Development Intern - Real-time Coil Detection & Counting System",
    keywords: ["internship", "experience", "jindal", "steel", "work", "job", "yolo", "opencv", "detection"],
    url: "/internship",
    category: "Experience"
  },
  {
    id: "achievements",
    title: "Achievements & Certifications",
    description: "NPTEL certifications, LeetCode progress, and hackathon participation",
    keywords: ["achievements", "certifications", "nptel", "leetcode", "hackathon", "awards", "accomplishments"],
    url: "/achievements",
    category: "Achievements"
  },
  {
    id: "contact",
    title: "Contact Information",
    description: "Get in touch via email, LinkedIn, GitHub, or LeetCode",
    keywords: ["contact", "email", "linkedin", "github", "leetcode", "social", "connect", "reach"],
    url: "/contact",
    category: "Contact"
  },
  {
    id: "about",
    title: "About Bhagesh Chavan",
    description: "B.Tech CSE student passionate about MERN stack and impactful software development",
    keywords: ["about", "bhagesh", "chavan", "student", "cse", "mern", "developer", "bio", "profile"],
    url: "/",
    category: "About"
  }
];
