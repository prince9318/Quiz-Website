import type { QuizCategory, CategoryInfo } from "../types/quiz";

export const categoryInfo: Record<QuizCategory, CategoryInfo> = {
  dsa: {
    name: "Data Structures & Algorithms",
    color: "text-purple-600",
    gradient: "from-purple-500 to-indigo-600",
    icon: "Zap",
    description:
      "Test your knowledge of algorithms, data structures, and computational complexity",
  },
  html: {
    name: "HTML",
    color: "text-orange-600",
    gradient: "from-orange-500 to-red-600",
    icon: "Code",
    description:
      "Master HTML fundamentals, semantic markup, and modern web standards",
  },
  css: {
    name: "CSS",
    color: "text-blue-600",
    gradient: "from-blue-500 to-cyan-600",
    icon: "Palette",
    description:
      "Explore CSS styling, layouts, animations, and responsive design",
  },
  javascript: {
    name: "JavaScript",
    color: "text-yellow-600",
    gradient: "from-yellow-500 to-orange-600",
    icon: "Cpu",
    description:
      "Deep dive into JavaScript concepts, ES6+, and modern programming patterns",
  },
  reactjs: {
    name: "reactjs",
    color: "text-purple-600",
    gradient: "from-purple-500 to-indigo-600",
    icon: "Zap",
    description:
      "React.js fundamentals, component-based architecture, and state management",
  },
  typescript: {
    name: "TypeScript",
    color: "text-slate-600",
    gradient: "from-slate-500 to-gray-600",
    icon: "Terminal",
    description:
      "TypeScript for static typing, interfaces, and advanced JavaScript features",
  },
  nodejs: {
    name: "Node.js",
    color: "text-green-600",
    gradient: "from-green-500 to-emerald-600",
    icon: "Server",
    description:
      "Backend development with Node.js, Express, and server-side JavaScript",
  },
  mongodb: {
    name: "MongoDB",
    color: "text-emerald-600",
    gradient: "from-emerald-500 to-teal-600",
    icon: "Database",
    description:
      "NoSQL database concepts, document-oriented data, and MongoDB operations",
  },
  git: {
    name: "Git",
    color: "text-red-600",
    gradient: "from-red-500 to-pink-600",
    icon: "GitBranch",
    description:
      "Version control mastery with Git commands, branching, and collaboration",
  },
  linux: {
    name: "Linux",
    color: "text-slate-600",
    gradient: "from-slate-500 to-gray-600",
    icon: "Terminal",
    description:
      "Command line proficiency, system administration, and Linux fundamentals",
  },
};
