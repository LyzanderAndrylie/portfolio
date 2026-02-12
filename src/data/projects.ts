import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    title: "Language-Specific Features",
    desc: 'Implemented the proposed method and all experiments using PyTorch for the paper "Sparse Autoencoders Can Capture Language-Specific Concepts Across Diverse Languages"',
    imageUrl: `${import.meta.env.BASE_URL}projects/lsf.png`,
    skills: ["PyTorch"],
    link: "https://github.com/LyzanderAndrylie/language-specific-features",
  },
  {
    title: "TempFileLink",
    desc: "A temporary storage web application using Nuxt and Fiber for the Cloud Computing course final project.",
    imageUrl: `${import.meta.env.BASE_URL}projects/tempfilelink.png`,
    skills: ["Nuxt.js", "Go Fiber", "AWS", "Terraform", "Docker"],
    link: "https://github.com/TempFileLink/TempFileLink-IaC",
  },
  {
    title: "Questify",
    desc: "Questify is a website designed for creating and participating in prize-based questionnaires, setting itself apart from competitors by offering transparent winning chances for respondents.",
    imageUrl: `${import.meta.env.BASE_URL}projects/questify.png`,
    skills: ["Next.js", "NestJS", "GCP"],
    link: "https://github.com/Questify-PPL/frontend",
  },
  {
    title: "3GUN",
    desc: "3GUN is a desktop based game, where you as the player are tasked with navigating through various levels filled with challenges and enemies. Your mission is to defeat the final boss and save the virtual world from impending doom.",
    imageUrl: `${import.meta.env.BASE_URL}projects/3gun.png`,
    skills: ["Godot"],
    link: "https://halustudio.itch.io/3gun",
  },
  {
    title: "Upside Down Noir",
    desc: "A platformer game that combines gravity-shifting mechanics, color-based transformations, and intense boss battles to deliver a strategic and thrilling gameplay experience.",
    imageUrl: `${import.meta.env.BASE_URL}projects/upside-down-noir.png`,
    skills: ["Godot"],
    link: "https://lyzanderandrylie.itch.io/upside-down-noir",
  },
  {
    title: "Co-Bersih",
    desc: "A community clean-up coordination platform built using Django REST Framework as part of the GEMASTIK XVI 2023 Software Development Project.",
    imageUrl: `${import.meta.env.BASE_URL}projects/co-bersih.png`,
    skills: ["Next.js", "Django"],
    link: "https://github.com/co-bersih",
  },
  {
    title: "Odin CV Application",
    desc: "Simple Tech CV generator created with React, Vite, React Router, and shadcn/ui.",
    imageUrl: `${import.meta.env.BASE_URL}projects/odin-cv-app.png`,
    skills: ["React.js", "Vite"],
    link: "https://lyzanderandrylie.github.io/odin-cv-application/",
  },
  {
    title: "Odin Restaurant Page",
    desc: "An imaginary restaurant landing page implemented from scratch using Webpack. The entire user interface is dynamically rendered with JavaScript by utilizing the DOM API and the Model-View-Controller (MVC) pattern.",
    imageUrl: `${import.meta.env.BASE_URL}projects/odin-restaurant.png`,
    skills: ["HTML", "CSS", "TypeScript", "Webpack"],
    link: "https://lyzanderandrylie.github.io/odin-restaurant-page/index.html",
  },
];
