import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, projects, type Project } from "@/data/projects";
import { Blob, Heart, Reveal, Sparkle, WireframeSketch } from "@/components/cute";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }): { project: Project } => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Case study not found — Your Name" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Case Study | Your Name`;
    return {
      meta: [
        { title },
        { name: "description", content: project.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: project.tagline },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: CaseStudyNotFound,
  component: CaseStudy,
});

function CaseStudyNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <div className="animate-wiggle text-6xl">🧁</div>
      <h1 className="font-display text-3xl font-bold text-chocolate">
        This case study wandered off
      </h1>
      <p className="text-chocolate/70">Let’s get you back to the sweet stuff.</p>
      <Link
        to="/"
        className="mt-2 rounded-full bg-chocolate px-8 py-4 font-semibold text-cream transition-all hover:scale-105"
      >
        Back home
      </Link>
    </div>
  );
}

const stepAccents = [
  "bg-candy-pink/40",
  "bg-mint/40",
  "bg-butter/60",
  "bg-candy-pink-soft",
  "bg-mint/40",
  "bg-candy-pink/40",
  "bg-butter/60",
];

function CaseStudy() {
  const { project } = Route.useLoaderData() as { project: Project };
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length]!;

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <Blob className="-top-40 -left-40 h-96 w-96" color="bg-candy-pink" />
      <Blob className="top-1/3 -right-40 h-80 w-80" color="bg-mint" />
      <Blob className="bottom-1/4 left-1/4 h-72 w-72" color="bg-butter" />
      <Blob className="-bottom-40 right-1/3 h-96 w-96" color="bg-lavender" />

      {/* Nav */}
      <nav className="fixed left-0 right-0 top-0 z-40 px-6 py-4">
        <div className="glass-card mx-auto flex max-w-6xl items-center justify-between rounded-full px-6 py-3">
          <Link
            to="/"
            className="font-display text-xl font-bold text-chocolate transition-transform hover:scale-105"
          >
            ✿ Portfolio
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              hash="work"
              className="hidden text-sm font-medium text-chocolate/80 transition-colors hover:text-chocolate sm:block"
            >
              ← All work
            </Link>
            <a
              href="/resume.pdf"
              download
              className="rounded-full bg-chocolate px-5 py-2 text-sm font-semibold text-cream transition-all hover:scale-105 hover:bg-chocolate/90"
            >
              Resume ⬇
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative px-6 pb-12 pt-32 md:pt-40">
        <Heart className="left-[8%] top-[35%] hidden lg:block" delay="0s" />
        <Sparkle className="right-[12%] top-[30%] hidden lg:block" delay="0.6s" />
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-bounce-in">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-candy-pink/40 px-5 py-2 text-sm font-medium text-chocolate backdrop-blur-sm">
              <span className="animate-wiggle inline-block">📖</span> Case Study ·{" "}
              {project.category}
            </span>
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-chocolate md:text-6xl">
              <span className="text-gradient-candy">{project.title}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-chocolate/80">
              {project.tagline}
            </p>
          </div>

          <div
            className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3"
            style={{ animation: "slide-up 0.7s ease-out 0.3s forwards", opacity: 0 }}
          >
            <div className="rounded-3xl bg-candy-pink/30 p-5 shadow-sm backdrop-blur-sm transition-all hover:scale-105">
              <div className="text-xs font-semibold uppercase tracking-wider text-chocolate/60">
                Role
              </div>
              <div className="mt-1 font-semibold text-chocolate">{project.role}</div>
            </div>
            <div className="rounded-3xl bg-mint/40 p-5 shadow-sm backdrop-blur-sm transition-all hover:scale-105">
              <div className="text-xs font-semibold uppercase tracking-wider text-chocolate/60">
                Timeline
              </div>
              <div className="mt-1 font-semibold text-chocolate">{project.timeline}</div>
            </div>
            <div className="rounded-3xl bg-butter/60 p-5 shadow-sm backdrop-blur-sm transition-all hover:scale-105">
              <div className="text-xs font-semibold uppercase tracking-wider text-chocolate/60">
                Tools
              </div>
              <div className="mt-1 font-semibold text-chocolate">
                {project.tools.join(", ")}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Cover image */}
      <div className="relative px-6">
        <Reveal className="mx-auto max-w-5xl">
          <div className={`rounded-[2.5rem] ${project.color} p-4 shadow-xl`}>
            <div className="overflow-hidden rounded-[2rem] bg-white">
              <img
                src={project.image}
                alt={`${project.title} — project cover`}
                loading="lazy"
                width={1280}
                height={1024}
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Steps */}
      <section className="relative px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          {project.steps.map((step, i) => (
            <Reveal key={step.number} className="relative mb-8" delay={0.05}>
              <article
                className={`relative overflow-hidden rounded-[2rem] border-2 border-white/60 ${stepAccents[i % stepAccents.length]} p-7 shadow-lg backdrop-blur-sm transition-all duration-500 hover-bounce md:p-10`}
              >
                <span className="pointer-events-none absolute -right-2 -top-6 font-display text-[6rem] font-bold text-white/50 md:text-[8rem]">
                  {step.number}
                </span>
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="animate-wiggle inline-block text-3xl">{step.emoji}</span>
                    <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-chocolate/70">
                      {step.number}
                    </span>
                    <h2 className="font-display text-2xl font-bold text-chocolate md:text-3xl">
                      {step.title}
                    </h2>
                  </div>

                  <p className="mt-5 text-lg leading-relaxed text-chocolate/80">{step.body}</p>

                  {step.bullets ? (
                    <ul className="mt-5 space-y-3">
                      {step.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 rounded-2xl bg-white/60 p-4 text-chocolate/80 transition-transform hover:translate-x-1"
                        >
                          <span aria-hidden="true">🌸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {step.number === "04" ? (
                    <div className="mt-6 rounded-2xl bg-white/60 p-5">
                      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-chocolate/50">
                        Early low-fidelity thinking
                      </p>
                      <WireframeSketch
                        variant={
                          project.category.includes("Mobile") ||
                          project.category.includes("Social")
                            ? "mobile"
                            : project.category.includes("Brand")
                              ? "grid"
                              : "desktop"
                        }
                      />
                    </div>
                  ) : null}

                  {step.number === "06" ? (
                    <div className="mt-6 overflow-hidden rounded-2xl bg-white p-2 shadow-inner">
                      <img
                        src={project.image}
                        alt={`${project.title} final polished design`}
                        loading="lazy"
                        width={1280}
                        height={1024}
                        className="w-full rounded-xl object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  ) : null}

                  {step.number === "07" ? (
                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                      {project.results.map((result) => (
                        <div
                          key={result.label}
                          className="rounded-2xl bg-white/80 p-5 text-center shadow-sm transition-all hover:scale-105"
                        >
                          <div className="font-display text-2xl font-bold text-chocolate">
                            {result.value}
                          </div>
                          <div className="mt-1 text-xs font-medium uppercase tracking-wider text-chocolate/60">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Next + CTA */}
      <section className="relative px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-candy-pink via-candy-pink-soft to-mint p-10 text-center shadow-2xl md:p-14">
              <Sparkle className="left-8 top-8" delay="0s" />
              <Sparkle className="right-12 top-12" delay="0.7s" />
              <Sparkle className="bottom-10 left-16" delay="1.2s" />
              <h2 className="font-display text-3xl font-bold text-chocolate md:text-5xl">
                Up next: {next.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-chocolate/80">{next.tagline}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/work/$slug"
                  params={{ slug: next.slug }}
                  className="group inline-flex items-center gap-2 rounded-full bg-chocolate px-8 py-4 font-semibold text-cream shadow-lg transition-all hover:-translate-y-1 hover:scale-105"
                >
                  Read the case study
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  to="/"
                  hash="work"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-chocolate/20 bg-white/70 px-8 py-4 font-semibold text-chocolate backdrop-blur-sm transition-all hover:-translate-y-1 hover:scale-105"
                >
                  All projects
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="relative px-6 pb-12 text-center">
        <p className="text-sm text-chocolate/60">
          Made with love, sparkles, and lots of pink — © {new Date().getFullYear()} Your Name
        </p>
      </footer>
    </div>
  );
}
