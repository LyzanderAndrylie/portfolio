import { ExternalLink } from "@/components/ExternalLink";
import type { CarouselItem } from "@/types";

export const CAROUSEL_DATA: CarouselItem[] = [
  {
    id: 1,
    label: "Present",
    content:
      "Software Engineer building scalable web apps with a strong interest in AI and machine learning.",
    imgUrl: `${import.meta.env.BASE_URL}carousel/present.jpg`,
  },
  {
    id: 2,
    label: "Graduation",
    content: (
      <>
        <em>Summa cum laude</em> graduate{" "}
        <span className="whitespace-nowrap">(GPA: 3.96/4.00)</span> from{" "}
        <ExternalLink href="https://www.ui.ac.id/">
          Universitas Indonesia
        </ExternalLink>{" "}
        with a thesis titled{" "}
        <ExternalLink
          href="https://arxiv.org/abs/2507.11230"
          aria-label="Read the research paper: Sparse Autoencoders Can Capture Language-Specific Concepts Across Diverse Languages"
        >
          "Sparse Autoencoders Can Capture Language-Specific Concepts Across
          Diverse Languages"
        </ExternalLink>
      </>
    ),
    imgUrl: `${import.meta.env.BASE_URL}carousel/graduation.jpg`,
  },
  {
    id: 3,
    label: "High School",
    content: "Top graduate in the Science Program.",
    imgUrl: `${import.meta.env.BASE_URL}carousel/highschool.jpg`,
  },
];
