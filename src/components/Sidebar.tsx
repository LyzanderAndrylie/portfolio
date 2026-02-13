import Carousel from "@/components/Carousel";
import SocialLinks from "@/components/SocialLinks";
import { CAROUSEL_DATA } from "@/data/carousel";

export default function Sidebar() {
  return (
    <header className="no-scrollbar gap-8 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-start lg:overflow-y-auto lg:pt-24">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            <a href="/portfolio/">Lyzander Marciano Andrylie</a>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-900 sm:text-xl">
            Software Engineer
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Computer Science graduate and lifelong learner passionate about
            technology and continuous growth.
          </p>
        </div>

        <Carousel items={CAROUSEL_DATA} />
      </div>
      <SocialLinks />
    </header>
  );
}
