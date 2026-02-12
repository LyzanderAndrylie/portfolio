import type { JSX } from "react";

export interface CarouselItem {
  id: number;
  label: string;
  content: string | JSX.Element;
  imgUrl: string;
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  location: string;
  desc: string;
  skills: string[];
  companyImageLabel: string;
  link: string;
  imgUrl: string;
}

export interface Certification {
  date: string;
  title: string;
  issuer: string;
  link: string;
  skills: string[];
}

export interface Project {
  title: string;
  desc: string;
  imageUrl: string;
  skills: string[];
  link: string;
}
