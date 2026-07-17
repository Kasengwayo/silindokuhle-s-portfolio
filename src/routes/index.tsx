import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Linkedin, Code2, Rocket, Users, Sparkles, Github, Award } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const skills = [
  "Web Development", "Application Development", "HTML / CSS / JavaScript",
  "React", "Agile Collaboration", "Software Development",
  "Version Control (Git)", "Problem Solving", "UI Implementation",
];

const experience = [
  {
    role: "Founder",
    company: "Kasengwayo Tech Hub",
    period: "Present",
    body: "Founded a tech hub helping individuals and small businesses build a strong digital presence — websites, digital tooling, and hands-on tech guidance rooted in the community.",
  },
  {
    role: "Junior Web Developer",
    company: "Awali Business Solutions",
    period: "Sep – Dec",
    body: "Contributed to client web projects — building responsive interfaces, collaborating in an Agile team, and shipping features from design to deployment.",
  },
];

const projects = [
  {
    name: "Fintex Solutions",
    description:
      "Business-oriented website for a modern B2B trading and supply company in KwaZulu-Natal — built with WordPress and the Divi theme to communicate services, products, and value proposition.",
    tech: "WordPress · Divi",
    url: "https://github.com/Kasengwayo/Fintex-Solution",
  },
  {
    name: "Invoice AI System",
    description:
      "Python-based system that streamlines invoice handling with AI — automating extraction and processing to reduce manual admin work.",
    tech: "Python · AI",
    url: "https://github.com/Kasengwayo/Invoice_ai_system",
  },
  {
    name: "Personal Finance Tracker",
    description:
      "Java Swing desktop app for tracking income and expenses with a clean summary view — a focused tool for personal budgeting.",
    tech: "Java · Swing",
    url: "https://github.com/Kasengwayo/Personal-Finance-Tracker",
  },
  {
    name: "Servlet API",
    description:
      "Java Servlet project exploring backend fundamentals — request/response handling, routing, and server-side rendering patterns.",
    tech: "Java · Servlets",
    url: "https://github.com/Kasengwayo/Servlet-API",
  },
];

const certifications = [
  {
    name: "Full-Stack Development",
    issuer: "FNB App Academy",
    date: "Issued Jul 2025",
  },
  {
    name: "Artificial Intelligence Fundamentals with Capstone",
    issuer: "IBM",
    date: "Issued Mar 2025",
  },
  {
    name: "Cybersecurity Fundamentals",
    issuer: "IBM",
    date: "Issued Feb 2025",
  },
  {
    name: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    date: "Issued Jan 2025",
  },
];

const education = [
  {
    school: "Richfield Graduate Institute of Technology",
    degree: "Diploma in Information Technology — Software Development",
    period: "Graduated",
  },
];

function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            Silindokuhle<span className="text-accent">.</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-foreground transition-colors">Certifications</a>
            <a href="#venture" className="hover:text-foreground transition-colors">Kasengwayo</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Hire me <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 0%, oklch(0.55 0.11 250 / 0.35), transparent 60%), radial-gradient(50% 40% at 10% 20%, oklch(0.78 0.13 85 / 0.18), transparent 60%)",
          }}
        />
        <div className="container-page relative grid gap-12 py-20 md:grid-cols-12 md:py-32">
          <div className="md:col-span-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Available for junior developer roles
            </div>
            <h1 className="text-balance font-display text-5xl font-medium leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
              Silindokuhle <span className="italic text-accent">Bongisipho</span> Zungu.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              IT graduate specialising in software development. Junior web developer, and founder of{" "}
              <span className="text-foreground">Kasengwayo Tech Hub</span> — building modern software
              that solves real problems.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-card"
              >
                View my work
              </a>
            </div>
          </div>
          <aside className="md:col-span-4 md:pt-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary font-display text-xl text-primary-foreground">
                  SZ
                </div>
                <div>
                  <p className="font-medium">Software Developer</p>
                  <p className="text-sm text-muted-foreground">Founder, Kasengwayo Tech Hub</p>
                </div>
              </div>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" /> Pretoria, South Africa
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Code2 className="h-4 w-4" /> Software Technology, Richfield
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Sparkles className="h-4 w-4" /> Web · Applications · Agile
                </div>
              </dl>
              <a
                href="https://www.linkedin.com/in/silindokuhle-bongisipho-zungu"
                target="_blank" rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border py-2.5 text-sm font-medium hover:bg-secondary"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn profile
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b border-border/60 py-24">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">About</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">A curious builder from Pretoria.</h2>
          </div>
          <div className="md:col-span-8 md:pt-2">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a recent Information Technology graduate from Richfield Graduate Institute of
              Technology, specialising in Software Technology. I love developing innovative software
              solutions — from web and application development to shipping features in an Agile team.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              As the founder of <span className="text-foreground">Kasengwayo Tech Hub</span>, I help
              individuals and businesses establish a strong digital presence through modern technology.
              Driven by curiosity and continuous learning, I'm dedicated to building impactful software
              and delivering technology that solves real-world problems.
            </p>

            <div className="mt-10">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Skills & tools
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li key={s} className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="border-b border-border/60 py-24">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Experience</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Where I've built.</h2>
          </div>
          <div className="md:col-span-8">
            <ol className="relative border-l border-border pl-6">
              {experience.map((e) => (
                <li key={e.role + e.company} className="mb-10 last:mb-0">
                  <span className="absolute -left-[7px] mt-2 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl">{e.role}</h3>
                    <span className="text-sm text-muted-foreground">{e.period}</span>
                  </div>
                  <p className="text-sm font-medium text-accent">{e.company}</p>
                  <p className="mt-3 text-muted-foreground">{e.body}</p>
                </li>
              ))}
            </ol>

            <div className="mt-14">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Education
              </p>
              {education.map((ed) => (
                <div key={ed.school} className="mt-4 rounded-2xl border border-border bg-card p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg">{ed.school}</h3>
                    <span className="text-sm text-muted-foreground">{ed.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{ed.degree}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-b border-border/60 py-24">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Projects</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Selected work from GitHub.</h2>
            <a
              href="https://github.com/Kasengwayo"
              target="_blank" rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Github className="h-4 w-4" /> github.com/Kasengwayo
            </a>
          </div>
          <div className="md:col-span-8 grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank" rel="noreferrer"
                className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/60"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg">{p.name}</h3>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.15em] text-accent">{p.tech}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="border-b border-border/60 py-24">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Certifications</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Credentials & continued learning.</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Certified through IBM and the FNB App Academy across AI, cybersecurity, and full-stack development.
            </p>
          </div>
          <div className="md:col-span-8 grid gap-4 sm:grid-cols-2">
            {certifications.map((c) => (
              <div key={c.name} className="rounded-2xl border border-border bg-card p-6">
                <Award className="h-5 w-5 text-gold" />
                <h3 className="mt-4 font-display text-lg leading-snug">{c.name}</h3>
                <p className="mt-2 text-sm font-medium text-accent">{c.issuer}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kasengwayo Tech Hub */}
      <section id="venture" className="border-b border-border/60 bg-primary text-primary-foreground">
        <div className="container-page grid gap-12 py-24 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Venture</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Kasengwayo Tech Hub.</h2>
            <p className="mt-6 text-lg text-primary-foreground/80">
              A tech hub bringing modern digital tools to individuals and businesses that need a real
              online presence — websites, applications, and technology guidance.
            </p>
          </div>
          <div className="md:col-span-7 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Rocket, title: "Digital presence", body: "Websites and applications built with modern, maintainable stacks." },
              { icon: Users, title: "Community-rooted", body: "Grounded in Kasengwayo, serving people who are often overlooked by tech." },
              { icon: Code2, title: "Modern engineering", body: "Agile delivery, clean interfaces, and code built to last." },
              { icon: Sparkles, title: "Real impact", body: "Technology that solves real problems, not just looks good on a slide." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.04] p-5">
                <Icon className="h-5 w-5 text-gold" />
                <h3 className="mt-4 font-display text-lg">{title}</h3>
                <p className="mt-1.5 text-sm text-primary-foreground/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Contact</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">Let's build something.</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Open to junior software and web developer roles, freelance projects, and collaborations
              through Kasengwayo Tech Hub.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/silindokuhle-bongisipho-zungu"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:-translate-y-0.5 transition-transform"
              >
                <Linkedin className="h-4 w-4" /> Connect on LinkedIn
              </a>
              <a
                href="mailto:"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-secondary"
              >
                <Mail className="h-4 w-4" /> Send an email
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-8">
        <div className="container-page flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Silindokuhle Bongisipho Zungu.</p>
          <p>Pretoria · South Africa</p>
        </div>
      </footer>
    </main>
  );
}
