import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Blob, Heart, Reveal, Sparkle } from "@/components/cute";
import { achievements, projects, testimonials } from "@/data/projects";

const skills = [
  "Figma",
  "UI Design",
  "UX Research",
  "Prototyping",
  "Web Design",
  "Design Systems",
  "Wireframing",
  "User Testing",
  "Branding",
  "Interaction Design",
];

const marqueeWords = [
  "✨ UI DESIGN",
  "🎀 UX RESEARCH",
  "🌸 WEB DESIGN",
  "🍬 BRANDING",
  "💗 PROTOTYPING",
  "🧁 INTERACTION",
  "🌷 DESIGN SYSTEMS",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Name — UI/UX & Web Designer" },
      {
        name: "description",
        content:
          "A cute, aesthetic portfolio showcasing web design, UI/UX, and brand identity work by a passionate designer.",
      },
      { property: "og:title", content: "Your Name — UI/UX & Web Designer" },
      {
        property: "og:description",
        content:
          "A cute, aesthetic portfolio showcasing web design, UI/UX, and brand identity work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background blobs */}
      <Blob className="-top-40 -left-40 h-96 w-96" color="bg-candy-pink" />
      <Blob className="top-1/4 -right-40 h-80 w-80" color="bg-mint" />
      <Blob className="bottom-1/4 left-1/4 h-72 w-72" color="bg-butter" />
      <Blob className="-bottom-40 right-1/3 h-96 w-96" color="bg-lavender" />

      {/* Floating cursor sparkle */}
      <div
        className="pointer-events-none fixed z-50 hidden lg:block"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <Sparkle className="relative" delay="0s" />
      </div>

      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-40 px-6 py-4">
        <div className="glass-card mx-auto flex max-w-6xl items-center justify-between rounded-full px-6 py-3">
          <a
            href="#"
            className="font-display text-xl font-bold text-chocolate hover:scale-105 transition-transform"
          >
            ✿ Portfolio
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#work"
              className="text-sm font-medium text-chocolate/80 hover:text-chocolate transition-colors"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-chocolate/80 hover:text-chocolate transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm font-medium text-chocolate/80 hover:text-chocolate transition-colors"
            >
              Skills
            </a>
            <a
              href="#achievements"
              className="text-sm font-medium text-chocolate/80 hover:text-chocolate transition-colors"
            >
              Achievements
            </a>
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-1.5 rounded-full border-2 border-chocolate/20 bg-white/60 px-4 py-2 text-sm font-semibold text-chocolate backdrop-blur-sm transition-all hover:scale-105 hover:border-chocolate/40"
            >
              Resume
              <span className="inline-block transition-transform group-hover:translate-y-0.5">
                ⬇
              </span>
            </a>
            <a
              href="#contact"
              className="rounded-full bg-chocolate px-5 py-2 text-sm font-semibold text-cream hover:bg-chocolate/90 transition-all hover:scale-105"
            >
              Say hi
            </a>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
        <Heart className="left-[10%] top-[25%]" delay="0s" />
        <Heart className="right-[15%] top-[30%]" delay="1s" />
        <Sparkle className="right-[20%] top-[20%]" delay="0.5s" />
        <Sparkle className="left-[20%] top-[40%]" delay="1.2s" />
        <Sparkle className="right-[10%] bottom-[30%]" delay="0.8s" />

        <div className="animate-bounce-in relative z-10 max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-candy-pink/40 px-5 py-2 backdrop-blur-sm">
            <span className="animate-wiggle inline-block">🌸</span>
            <span className="text-sm font-medium text-chocolate">
              UI/UX Designer & Web Creator
            </span>
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-chocolate md:text-7xl lg:text-8xl">
            Hi, I’m{" "}
            <span className="text-gradient-candy inline-block animate-wiggle hover:scale-110 transition-transform cursor-default">
              Your Name
            </span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-chocolate/80 md:text-xl"
            style={{ animation: "slide-up 0.7s ease-out 0.3s forwards", opacity: 0 }}
          >
            I craft cute, dreamy digital experiences that make people smile.
            From playful mobile apps to aesthetic websites — every pixel is
            designed with love 💗
          </p>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            style={{ animation: "slide-up 0.7s ease-out 0.5s forwards", opacity: 0 }}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-chocolate px-8 py-4 text-base font-semibold text-cream shadow-lg shadow-chocolate/20 transition-all hover:scale-105 hover:shadow-xl hover:-translate-y-1"
            >
              See my work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-chocolate/20 bg-white/60 px-8 py-4 text-base font-semibold text-chocolate backdrop-blur-sm transition-all hover:scale-105 hover:border-chocolate/40 hover:-translate-y-1"
            >
              Let’s chat
            </a>
          </div>
        </div>

        {/* Floating decorative cards */}
        <div className="pointer-events-none absolute bottom-20 left-10 hidden animate-float lg:block">
          <div className="rounded-2xl bg-candy-pink/60 p-4 shadow-xl backdrop-blur-sm">
            <span className="text-3xl">🎨</span>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-32 right-16 hidden animate-float-reverse lg:block">
          <div className="rounded-2xl bg-mint/60 p-4 shadow-xl backdrop-blur-sm">
            <span className="text-3xl">🌷</span>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="relative overflow-hidden border-y-2 border-candy-pink/30 bg-candy-pink/20 py-4">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
            <span
              key={i}
              className="mx-8 font-display text-2xl font-bold text-chocolate/70 md:text-3xl"
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Work Section */}
      <section id="work" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-rose">
              Selected Work
            </span>
            <h2 className="font-display text-4xl font-bold text-chocolate md:text-6xl">
              Things I’ve made with <span className="text-gradient-candy">love</span>
            </h2>
          </Reveal>

          <div className="masonry-1 sm:masonry-2 lg:masonry-3">
            {projects.map((project, index) => (
              <Reveal
                key={project.id}
                className="mb-6 break-inside-avoid"
                delay={index * 0.1}
                animation="animate-pop-in"
              >
                <Link
                  to="/work/$slug"
                  params={{ slug: project.slug }}
                  className={`group relative block overflow-hidden rounded-3xl ${project.color} p-3 shadow-lg transition-all duration-500 hover-bounce`}
                >
                  <div className="overflow-hidden rounded-2xl bg-white">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width={project.height === "tall" ? 1024 : 1280}
                      height={project.height === "tall" ? 1280 : 1024}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-4 px-3 pb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-chocolate/60">
                      {project.category}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold text-chocolate">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-chocolate/70">
                      {project.tagline}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-chocolate shadow-sm transition-all group-hover:gap-3 group-hover:bg-white">
                      Read case study
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                  <div className="absolute right-5 top-5 rounded-full bg-white/80 p-2 opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100 group-hover:rotate-12">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-chocolate"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="absolute inset-0 animate-blob rounded-3xl bg-gradient-to-br from-candy-pink via-mint to-butter opacity-60" />
                <div className="relative rounded-3xl border-2 border-white/50 bg-white/70 p-8 shadow-xl backdrop-blur-sm md:p-12">
                  <div className="mb-6 text-6xl">👋🏻</div>
                  <h2 className="font-display text-3xl font-bold text-chocolate md:text-5xl">
                    Nice to meet you!
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-chocolate/80">
                    I’m a UI/UX designer who believes the best interfaces feel
                    like a warm hug. I love combining soft colors, playful
                    interactions, and clean typography to create experiences
                    that feel personal and joyful.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-chocolate/80">
                    Whether it’s a mobile app, a website, or a full brand
                    identity, I bring a little extra sweetness to every
                    project. 🍰
                  </p>
                  <a
                    href="/resume.pdf"
                    download
                    className="group mt-8 inline-flex items-center gap-3 rounded-full bg-chocolate px-8 py-4 text-base font-semibold text-cream shadow-lg shadow-chocolate/20 transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
                  >
                    Download Resume
                    <span className="inline-block transition-transform group-hover:translate-y-1">
                      ⬇
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-candy-pink/40 p-6 text-center shadow-lg backdrop-blur-sm transition-all hover:scale-105">
                  <div className="font-display text-4xl font-bold text-chocolate">5+</div>
                  <div className="mt-2 text-sm font-medium text-chocolate/70">Years of experience</div>
                </div>
                <div className="rounded-3xl bg-mint/40 p-6 text-center shadow-lg backdrop-blur-sm transition-all hover:scale-105">
                  <div className="font-display text-4xl font-bold text-chocolate">50+</div>
                  <div className="mt-2 text-sm font-medium text-chocolate/70">Projects shipped</div>
                </div>
                <div className="rounded-3xl bg-butter/60 p-6 text-center shadow-lg backdrop-blur-sm transition-all hover:scale-105">
                  <div className="font-display text-4xl font-bold text-chocolate">30+</div>
                  <div className="mt-2 text-sm font-medium text-chocolate/70">Happy clients</div>
                </div>
                <div className="rounded-3xl bg-candy-pink/30 p-6 text-center shadow-lg backdrop-blur-sm transition-all hover:scale-105">
                  <div className="font-display text-4xl font-bold text-chocolate">∞</div>
                  <div className="mt-2 text-sm font-medium text-chocolate/70">Cups of bubble tea</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-rose">
              Toolkit
            </span>
            <h2 className="font-display text-4xl font-bold text-chocolate md:text-6xl">
              My superpowers
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Reveal
                key={skill}
                delay={index * 0.05}
                animation="animate-bounce-in"
              >
                <span className="inline-flex rounded-full border border-candy-pink/50 bg-white/70 px-6 py-3 text-base font-semibold text-chocolate shadow-sm transition-all hover:scale-110 hover:bg-candy-pink/30 hover:-translate-y-1 cursor-default">
                  {skill}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-14 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-rose">
              Certifications & Achievements
            </span>
            <h2 className="font-display text-4xl font-bold text-chocolate md:text-6xl">
              Little wins I’m <span className="text-gradient-candy">proud of</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-chocolate/70">
              Awards, certificates, competitions and the projects that taught me the most 🎀
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.08}
                animation="animate-pop-in"
                className="h-full"
              >
                <article
                  className={`group flex h-full flex-col rounded-3xl border-2 border-white/60 ${item.color} p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover-bounce`}
                >
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-2xl shadow-sm transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    {item.emoji}
                  </span>
                  <h3 className="font-display text-lg font-bold leading-snug text-chocolate">
                    {item.title}
                  </h3>
                  <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-chocolate/60">
                    {item.org}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-chocolate/75">{item.note}</p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Testimonials */}
          <Reveal className="mb-10 mt-24 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-rose">
              Kind Words
            </span>
            <h2 className="font-display text-3xl font-bold text-chocolate md:text-5xl">
              What clients say 💌
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.1} className="h-full">
                <figure className="relative flex h-full flex-col rounded-3xl border-2 border-white/60 bg-white/70 p-7 shadow-lg backdrop-blur-sm transition-all duration-500 hover-rotate">
                  <span className="absolute -top-5 left-6 flex h-11 w-11 items-center justify-center rounded-full bg-candy-pink/70 text-xl shadow-sm">
                    {item.emoji}
                  </span>
                  <span className="font-display text-4xl leading-none text-candy-pink" aria-hidden="true">
                    “
                  </span>
                  <blockquote className="-mt-3 text-base leading-relaxed text-chocolate/80">
                    {item.quote}
                  </blockquote>
                  <figcaption className="mt-5 border-t border-candy-pink/40 pt-4">
                    <span className="block font-display font-bold text-chocolate">
                      {item.name}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wider text-chocolate/60">
                      {item.role}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          {/* Resume strip */}
          <Reveal className="mt-20">
            <div className="flex flex-col items-center gap-6 rounded-[2.5rem] border-2 border-white/60 bg-gradient-to-br from-butter/70 via-candy-pink-soft to-mint/70 p-9 text-center shadow-xl md:flex-row md:justify-between md:p-11 md:text-left">
              <div>
                <h3 className="font-display text-2xl font-bold text-chocolate md:text-3xl">
                  Want the whole story on one page? 📄
                </h3>
                <p className="mt-2 text-chocolate/75">
                  Grab my resume — experience, education, tools and awards, all in one cute PDF.
                </p>
              </div>
              <a
                href="/resume.pdf"
                download
                className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-chocolate px-9 py-4 text-base font-semibold text-cream shadow-lg shadow-chocolate/20 transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
              >
                Download Resume
                <span className="inline-block transition-transform group-hover:translate-y-1">
                  ⬇
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-candy-pink via-candy-pink-soft to-mint p-10 text-center shadow-2xl md:p-16">
              <Sparkle className="left-8 top-8" delay="0s" />
              <Sparkle className="right-12 top-12" delay="0.7s" />
              <Sparkle className="bottom-10 left-16" delay="1.2s" />
              <Sparkle className="bottom-8 right-20" delay="0.4s" />

              <h2 className="font-display text-4xl font-bold text-chocolate md:text-6xl">
                Let’s make something cute
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-chocolate/80">
                Have a project in mind? I’d love to hear about it! Send me a
                message and let’s create something sweet together.
              </p>

              <a
                href="mailto:hello@yourname.com"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-chocolate px-10 py-5 text-lg font-semibold text-cream shadow-xl transition-all hover:scale-105 hover:shadow-2xl hover:-translate-y-1"
              >
                hello@yourname.com
                <span className="transition-transform group-hover:translate-x-1">✉</span>
              </a>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="#"
                  className="rounded-full bg-white/70 px-6 py-3 text-sm font-semibold text-chocolate shadow-sm transition-all hover:scale-110 hover:bg-white"
                >
                  Dribbble
                </a>
                <a
                  href="#"
                  className="rounded-full bg-white/70 px-6 py-3 text-sm font-semibold text-chocolate shadow-sm transition-all hover:scale-110 hover:bg-white"
                >
                  Behance
                </a>
                <a
                  href="#"
                  className="rounded-full bg-white/70 px-6 py-3 text-sm font-semibold text-chocolate shadow-sm transition-all hover:scale-110 hover:bg-white"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="rounded-full bg-white/70 px-6 py-3 text-sm font-semibold text-chocolate shadow-sm transition-all hover:scale-110 hover:bg-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 py-12 text-center">
        <p className="text-sm text-chocolate/60">
          Made with love, sparkles, and lots of pink — © {new Date().getFullYear()} Your Name
        </p>
        <div className="mt-3 flex justify-center gap-2 text-lg">
          <span className="animate-wiggle inline-block">🌸</span>
          <span className="animate-wiggle inline-block" style={{ animationDelay: "0.2s" }}>
            💗
          </span>
          <span className="animate-wiggle inline-block" style={{ animationDelay: "0.4s" }}>
            🍰
          </span>
        </div>
      </footer>
    </div>
  );
}
