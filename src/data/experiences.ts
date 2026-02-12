import type { Experience } from "@/types";

export const EXPERIENCES: Experience[] = [
  {
    date: "Aug 2025 - Jan 2026",
    title: "AI Engineer",
    company: "Meeting.ai",
    location: "Jakarta, Indonesia",
    desc: "Improved a real-time transcription system by integrating streaming ASR (reducing latency by 1.5–2× and GPU costs by 5×), building multilingual evaluation tools, developing an LLM-powered typo correction system, engineering a server-side PDF generation pipeline, and collaborating on calendar integration features.",
    skills: ["PyTorch", "Python", "TypeScript", "Go"],
    companyImageLabel: "Meeting.ai Logo",
    link: "https://meeting.ai/",
    imgUrl: `${import.meta.env.BASE_URL}companies/meetingai.png`,
  },
  {
    date: "Nov 2024 - Jul 2025",
    title: "Student Researcher",
    company: "Faculty of Computer Science, Universitas Indonesia",
    location: "Depok, Indonesia",
    desc: "Conducted AI interpretability research under joint supervision from Universitas Indonesia and MBZUAI, proposing a novel method to detect language-specific features in multilingual LLMs.",
    skills: ["Research Writing", "LLM", "AI Interpretability"],
    companyImageLabel:
      "Faculty of Computer Science, Universitas Indonesia Logo",
    link: "https://arxiv.org/abs/2507.11230",
    imgUrl: `${import.meta.env.BASE_URL}companies/csui.png`,
  },
  {
    date: "Aug 2022 - Jun 2025",
    title: "Teaching Assistant",
    company: "Faculty of Computer Science, Universitas Indonesia",
    location: "Depok, Indonesia",
    desc: "Served as a Teaching Assistant for multiple Computer Science courses (Information Retrieval, Software Engineering, Database, Data Structures & Algorithms, and Programming) at Universitas Indonesia, leading tutorials, designing hands-on assignments, mentoring agile teams, and providing structured feedback to strengthen students' technical and problem-solving skills.",
    skills: [
      "PyTorch",
      "Scrum",
      "SQL",
      "Data Structures",
      "Algorithms",
      "Java",
      "Python",
    ],
    companyImageLabel:
      "Faculty of Computer Science, Universitas Indonesia Logo",
    link: "https://cs.ui.ac.id/",
    imgUrl: `${import.meta.env.BASE_URL}companies/csui.png`,
  },
];
