import AwsIcon from "@/assets/icons/AWS.svg?react";
import CssIcon from "@/assets/icons/CSS3.svg?react";
import DjangoIcon from "@/assets/icons/Django.svg?react";
import DockerIcon from "@/assets/icons/Docker.svg?react";
import GodotIcon from "@/assets/icons/Godot Engine.svg?react";
import GcpIcon from "@/assets/icons/Google Cloud.svg?react";
import HtmlIcon from "@/assets/icons/HTML5.svg?react";
import TerraformIcon from "@/assets/icons/HashiCorp Terraform.svg?react";
import NestjsIcon from "@/assets/icons/Nest.js.svg?react";
import NextjsIcon from "@/assets/icons/Next.js.svg?react";
import NuxtIcon from "@/assets/icons/Nuxt JS.svg?react";
import PytorchIcon from "@/assets/icons/PyTorch.svg?react";
import ReactIcon from "@/assets/icons/React.svg?react";
import TypescriptIcon from "@/assets/icons/TypeScript.svg?react";
import ViteIcon from "@/assets/icons/Vite.js.svg?react";
import WebpackIcon from "@/assets/icons/Webpack.svg?react";
import GoFiberIcon from "@/assets/icons/go-fiber.svg?react";
import type { ComponentType, SVGProps } from "react";

export type SkillIconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const SKILL_ICONS: Record<string, SkillIconComponent> = {
  PyTorch: PytorchIcon,
  "Nuxt.js": NuxtIcon,
  "Go Fiber": GoFiberIcon,
  AWS: AwsIcon,
  Terraform: TerraformIcon,
  Docker: DockerIcon,
  "Next.js": NextjsIcon,
  NestJS: NestjsIcon,
  GCP: GcpIcon,
  Godot: GodotIcon,
  Django: DjangoIcon,
  "React.js": ReactIcon,
  Vite: ViteIcon,
  HTML: HtmlIcon,
  CSS: CssIcon,
  TypeScript: TypescriptIcon,
  Webpack: WebpackIcon,
};
