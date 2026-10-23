import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Send,
  CheckCircle2,
} from "lucide-react";

const API = import.meta.env.VITE_API_URL || "";

const ME = {
  name: "Virendra Kumar",
  title: "MERN Full Stack Developer",
  email: "virendrajangir563@gmail.com",
  phone: "+91 8239641937",
  location: "Jaipur, Rajasthan, India",
  github: "https://github.com/virendrajangir563",
  linkedin: "https://www.linkedin.com/in/virendra-kumar-647b96251",
  summary:
    "MERN Full Stack Developer focused on building responsive React interfaces, integrating REST APIs, and developing Node.js and Express backends with MongoDB. I enjoy turning ideas into useful, accessible web experiences and continuously improving my skills through hands-on projects.",
};

const ROLES = [
  "MERN Stack Developer",
  "React.js Developer",
  "Node.js Backend Engineer",
  "Full Stack Developer",
  "JavaScript Developer",
];

const NAV = ["About", "Experience", "Skills", "Projects", "Contact"];

const btn =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-300";
const input =
  "w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10";

const Section = ({ id, label, title, children }) => (
  <section id={id} className="scroll-mt-20 border-t border-slate-800/80 px-6 py-20 sm:py-24">
    <div className="mx-auto max-w-6xl">
      <p className="mb-3 font-mono text-sm text-cyan-400">// {label}</p>
      <h2 className="mb-10 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const Card = ({ className = "", ...props }) => (
  <div
    className={`rounded-2xl border border-slate-800 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white/[0.05] ${className}`}
    {...props}
  />
);

function DeveloperEditor({ role }) {
  const stack = ["MongoDB", "Express.js", "React.js", "Node.js"];

  return (
    <div className="group relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-emerald-500/20 opacity-60 blur-xl transition duration-500 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-[#080d1a] shadow-2xl shadow-black/30">
        <div className="flex items-center justify-between gap-3 border-b border-slate-700/70 bg-slate-900/85 px-5 py-4">
          <div className="flex shrink-0 items-center gap-2" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <span className="truncate font-mono text-sm text-slate-400">developer.js</span>
          <span className="rounded-md border border-cyan-400/20 bg-cyan-400/10 px-2 py-1 font-mono text-[10px] text-cyan-300">
            JS
          </span>
        </div>

        <div className="overflow-x-auto p-5 font-mono text-xs leading-7 sm:p-7 sm:text-sm sm:leading-8">
          <div>
            <span className="text-violet-400">const</span>{" "}
            <span className="text-sky-300">developer</span>{" "}
            <span className="text-slate-300">= {"{"}</span>
          </div>

          <div className="pl-4 sm:pl-6">
            <span className="text-sky-300">name</span>
            <span className="text-slate-400">: </span>
            <span className="text-emerald-400">"{ME.name}"</span>
            <span className="text-slate-300">,</span>
          </div>

          <div className="pl-4 sm:pl-6">
            <span className="text-sky-300">role</span>
            <span className="text-slate-400">: </span>
            <span key={role} className="inline-block text-emerald-400 animate-role">
              "{role}"
            </span>
            <span className="text-slate-300">,</span>
          </div>

          <div className="pl-4 sm:pl-6">
            <span className="text-sky-300">stack</span>
            <span className="text-slate-400">: [</span>
            {stack.map((tech, index) => (
              <span key={tech}>
                <span className="text-emerald-400">"{tech}"</span>
                {index < stack.length - 1 && <span className="text-slate-400">, </span>}
              </span>
            ))}
            <span className="text-slate-400">],</span>
          </div>

          <div className="pl-4 sm:pl-6">
            <span className="text-sky-300">location</span>
            <span className="text-slate-400">: </span>
            <span className="text-emerald-400">"{ME.location}"</span>
            <span className="text-slate-300">,</span>
          </div>

          <div className="pl-4 sm:pl-6">
            <span className="text-sky-300">focus</span>
            <span className="text-slate-400">: [</span>
            <span className="text-emerald-400">"REST APIs"</span>
            <span className="text-slate-400">, </span>
            <span className="text-emerald-400">"Web Development"</span>
            <span className="text-slate-400">],</span>
          </div>

          <div className="pl-4 sm:pl-6">
            <span className="text-sky-300">available</span>
            <span className="text-slate-400">: </span>
            <span className="text-orange-300">true</span>
            <span className="text-slate-300">,</span>
          </div>

          <div className="text-slate-300">{"};"}</div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-700/70 bg-slate-900/70 px-5 py-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Open to opportunities
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-400/10 px-3 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Let's Connect <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [menu, setMenu] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const empty = { name: "", email: "", message: "" };
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ s: "idle", msg: "" });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % ROLES.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let cancelled = false;

    fetch(`${API}/api/portfolio`)
      .then((response) => {
        if (!response.ok) throw new Error("Could not load portfolio data.");
        return response.json();
      })
      .then((result) => {
        if (!cancelled) setData(result);
      })
      .catch(() => {
        if (!cancelled) {
          setError("Could not load portfolio data. Make sure the backend server is running.");
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const field = (key) => ({
    id: key,
    name: key,
    value: form[key],
    onChange: (event) =>
      setForm((current) => ({ ...current, [key]: event.target.value })),
    className: input,
  });

  async function submit(event) {
    event.preventDefault();
    setStatus({ s: "sending", msg: "" });

    try {
      const response = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.error || result.message || "Something went wrong. Please try again.");
      }

      setStatus({ s: "sent", msg: "" });
      setForm(empty);
    } catch (err) {
      setStatus({
        s: "error",
        msg:
          err.message === "Failed to fetch"
            ? "Cannot reach the server. Please try again later."
            : err.message,
      });
    }
  }

  const wait = (
    <p className="text-sm text-slate-400">
      {error || "Loading portfolio data…"}
    </p>
  );

  const socials = [
    [Github, ME.github, "GitHub"],
    [Linkedin, ME.linkedin, "LinkedIn"],
    [Mail, `mailto:${ME.email}`, "Email"],
    [Phone, `tel:${ME.phone.replace(/\s/g, "")}`, "Phone"],
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-slate-100 selection:bg-cyan-400/30">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#hero" className="font-mono text-lg font-bold tracking-tight">
            <span className="text-cyan-400">&lt;</span>VK
            <span className="text-cyan-400"> /&gt;</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-300 transition hover:text-cyan-300"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className={`${btn} !rounded-lg !px-4 !py-2.5 bg-cyan-400 text-slate-950 hover:bg-cyan-300`}
            >
              Let's Talk
            </a>
          </div>

          <button
            type="button"
            className="rounded-lg border border-slate-700 p-2 text-slate-200 md:hidden"
            onClick={() => setMenu((current) => !current)}
            aria-label={menu ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menu}
          >
            {menu ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>

        {menu && (
          <div className="flex flex-col gap-4 border-t border-slate-800 bg-slate-950 px-6 py-5 md:hidden">
            {NAV.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenu(false)}
                className="text-sm text-slate-300 hover:text-cyan-300"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenu(false)}
              className="text-sm font-semibold text-cyan-300"
            >
              Let's Talk →
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="relative flex min-h-screen items-center px-6 pb-16 pt-28">
        <div className="pointer-events-none absolute -left-40 top-36 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-16 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="mb-5 font-mono text-sm text-cyan-400">
              <span className="text-emerald-400">●</span> Hello, I'm
            </p>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
              Virendra
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                Kumar.
              </span>
            </h1>

            <div className="mt-5 min-h-9">
              <p
                key={roleIndex}
                aria-live="polite"
                className="animate-role font-mono text-base font-semibold text-cyan-300 sm:text-lg"
              >
                <span className="mr-2 text-emerald-400">&gt;</span>
                {ROLES[roleIndex]}
                <span className="ml-1 animate-pulse text-sky-400">_</span>
              </p>
            </div>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
              {ME.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                download="Virendra_Kumar_Resume.pdf"
                className={`${btn} bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-950/30 hover:-translate-y-0.5 hover:bg-cyan-300`}
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href="#contact"
                className={`${btn} border border-slate-700 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-300`}
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className={`${btn} px-2 text-slate-300 hover:text-cyan-300`}
              >
                View Projects <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map(([Icon, href, label]) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(href.startsWith("http") && {
                    target: "_blank",
                    rel: "noreferrer",
                  })}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-white/[0.03] text-slate-400 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
              <MapPin size={15} className="text-cyan-400" />
              {ME.location}
            </div>
          </div>

          <DeveloperEditor role={ROLES[roleIndex]} />
        </div>
      </section>

      {/* About */}
      <Section id="about" label="about-me" title="Learning deeply, building constantly.">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="max-w-3xl leading-8 text-slate-400">{ME.summary}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Problem Solving", "Responsive UI", "REST APIs", "Continuous Learning"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <Card>
            <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold">
              <GraduationCap size={20} className="text-cyan-400" />
              Education & Certifications
            </h3>
            {!data ? (
              wait
            ) : data.education?.length ? (
              <div className="space-y-5">
                {data.education.map((item) => (
                  <div key={item._id || `${item.title}-${item.org}`} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-slate-200">{item.title}</p>
                      <p className="mt-1 text-sm text-slate-500">{item.org}</p>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-cyan-400">{item.period}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-400">Add education records through your portfolio API.</p>
            )}
          </Card>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" label="experience" title="Where I've applied what I've learned.">
        {!data ? (
          wait
        ) : data.experience?.length ? (
          <div className="flex flex-col gap-5">
            {data.experience.map((item) => (
              <Card key={item._id || `${item.role}-${item.company}`} className="sm:p-8">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-slate-100">{item.role}</h3>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 font-mono text-xs text-cyan-300">
                    {item.period}
                  </span>
                </div>
                <p className="mb-5 text-sm text-slate-500">
                  {item.company} {item.location ? `· ${item.location}` : ""}
                </p>
                <ul className="space-y-3">
                  {(item.bullets || []).map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-400">Add experience records through your portfolio API.</p>
        )}
      </Section>

      {/* Skills */}
      <Section id="skills" label="skills" title="Tools & technologies I work with.">
        {!data ? (
          wait
        ) : data.skills?.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {data.skills.map((group) => (
              <Card key={group._id || group.title}>
                <h3 className="mb-4 font-semibold text-slate-100">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {(group.items || []).map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-slate-700/80 bg-slate-800/70 px-2.5 py-1.5 font-mono text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-400">Add skills through your portfolio API.</p>
        )}
      </Section>

      {/* Projects */}
      <Section id="projects" label="projects" title="Things I've built.">
        {!data ? (
          wait
        ) : data.projects?.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.projects.map((project) => (
              <Card key={project._id || project.title} className="flex flex-col">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 font-mono text-lg font-bold text-cyan-300">
                  {"</>"}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-slate-100">{project.title}</h3>
                <p className="flex-1 text-sm leading-7 text-slate-400">{project.description}</p>

                {project.tags?.length > 0 && (
                  <div className="my-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-cyan-400/10 px-2 py-1 font-mono text-xs text-cyan-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {(project.githubUrl || project.liveUrl) && (
                  <div className="mt-2 flex gap-4 border-t border-slate-800 pt-4">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-slate-300 transition hover:text-cyan-300">
                        <Github size={15} /> Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-slate-300 transition hover:text-cyan-300">
                        <ExternalLink size={15} /> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-400">Add project records through your portfolio API.</p>
        )}
      </Section>

      {/* Contact */}
      <Section id="contact" label="contact" title="Let's build something together.">
        <div className="grid gap-7 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-2">
            {[
              [Mail, "Email", ME.email, `mailto:${ME.email}`],
              [Phone, "Phone", ME.phone, `tel:${ME.phone.replace(/\s/g, "")}`],
              [MapPin, "Location", ME.location, null],
            ].map(([Icon, label, value, href]) => (
              <Card key={label} className="flex items-center gap-4 !p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <Icon size={19} />
                </div>
                <div className="min-w-0">
                  <p className="mb-1 text-xs uppercase tracking-wider text-slate-500">{label}</p>
                  {href ? (
                    <a href={href} className="break-all text-sm text-slate-200 hover:text-cyan-300">{value}</a>
                  ) : (
                    <p className="text-sm text-slate-200">{value}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <Card className="lg:col-span-3 sm:p-8">
            {status.s === "sent" ? (
              <div className="flex min-h-[280px] flex-col items-center justify-center gap-3 text-center">
                <CheckCircle2 size={42} className="text-emerald-400" />
                <p className="text-lg font-semibold">Message sent!</p>
                <p className="max-w-xs text-sm leading-6 text-slate-400">
                  Thank you for reaching out. I will reply to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus({ s: "idle", msg: "" })}
                  className="text-sm font-medium text-cyan-300 hover:text-cyan-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-wider text-slate-500">Name</label>
                    <input {...field("name")} type="text" placeholder="Your name" required maxLength={150} autoComplete="name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-wider text-slate-500">Email</label>
                    <input {...field("email")} type="email" placeholder="you@example.com" required maxLength={150} autoComplete="email" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-wider text-slate-500">Message</label>
                  <textarea
                    {...field("message")}
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    minLength={10}
                    maxLength={2000}
                    className={`${input} resize-y`}
                  />
                </div>

                {status.s === "error" && (
                  <p role="alert" className="text-sm text-red-400">{status.msg}</p>
                )}

                <button
                  type="submit"
                  disabled={status.s === "sending"}
                  className={`${btn} bg-cyan-400 text-slate-950 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60`}
                >
                  <Send size={16} />
                  {status.s === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-xs text-slate-500 sm:text-left">
            © {new Date().getFullYear()} {ME.name} · {ROLES[roleIndex]} · {ME.location}
          </p>
          <div className="flex gap-4">
            {socials.slice(0, 3).map(([Icon, href, label]) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
                className="text-slate-500 transition hover:text-cyan-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
