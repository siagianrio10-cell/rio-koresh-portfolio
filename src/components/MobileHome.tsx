import React, { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  FileDown,
  Mail,
  Linkedin,
  MapPin,
  Copy,
  Check,
  Send,
  CheckCircle2,
} from "lucide-react";
import {
  PROFILE,
  EXPERIENCES,
  PROJECTS,
  CAPABILITIES,
} from "../data/portfolioData";

// Same Formspree endpoint as the desktop contact form
const FORM_ENDPOINT = "https://formspree.io/f/xzedplnw";

interface MobileHomeProps {
  onNavigate: (sectionId: string) => void;
  onOpenCaseStudy: (projectId: string) => void;
}

const Kicker: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
    {children}
  </div>
);

const Heading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="mt-3 font-serif text-[2rem] font-medium leading-[1.1] tracking-tight text-zinc-900">
    {children}
  </h2>
);

export const MobileHome: React.FC<MobileHomeProps> = ({
  onNavigate,
  onOpenCaseStudy,
}) => {
  const [imgSrc, setImgSrc] = useState(PROFILE.avatar);
  const [imageError, setImageError] = useState(false);
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [openExperience, setOpenExperience] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSendError(false);

    // Honeypot: real visitors never fill this hidden field
    const honeypot = (e.currentTarget.elements.namedItem("website") as HTMLInputElement | null)?.value;
    if (honeypot) {
      setSent(true);
      return;
    }

    setIsSending(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `[Portfolio] Message from ${form.name}`,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSent(true);
    } catch {
      setSendError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* ================= 01. HERO ================= */}
      <section
        id="home"
        className="relative mt-16 h-[calc(100svh-4rem)] min-h-[34rem] max-h-[52rem] overflow-hidden bg-zinc-900"
      >
        {!imageError && (
          <img
            src={imgSrc}
            alt={`${PROFILE.name} - ${PROFILE.title}`}
            referrerPolicy="no-referrer"
            onError={() => {
              if (imgSrc !== PROFILE.fallbackAvatar) {
                setImgSrc(PROFILE.fallbackAvatar);
              } else {
                setImageError(true);
              }
            }}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        )}

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(9,9,11,0.92) 0%, rgba(9,9,11,0.55) 38%, rgba(9,9,11,0) 70%)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 px-5 pb-8">
          <div className="text-[11px] font-medium tracking-wide text-white/75">
            B.Psi. in Psychology · HR Professional · Bali
          </div>

          <h1 className="mt-3 font-serif text-[2.6rem] font-medium leading-[1.02] tracking-tight text-white">
            Rio Koresh
            <br />
            Yeremia
          </h1>

          <p className="mt-4 max-w-[17rem] text-sm leading-relaxed text-white/80">
            Curious about how things work, especially when people are involved.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={() => onNavigate("projects")}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-zinc-900 active:bg-zinc-200 cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>

            <button
              onClick={() => onNavigate("about")}
              className="inline-flex items-center gap-2 px-2 py-3 text-xs font-medium text-white/80 cursor-pointer"
            >
              <span>Scroll to explore</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= 02. ABOUT ================= */}
      <section id="about" className="bg-[#FAFAFA] px-5 py-14">
        <Kicker>About me</Kicker>
        <Heading>Hi, I’m Rio. I like figuring things out.</Heading>

        <div className="mt-5 space-y-4 text-[15px] leading-[1.75] text-zinc-600">
          <p>
            I’ve always been curious about how things work — especially when people are involved. That curiosity led me to Psychology, and eventually into HR, where I found a space that combines people, problem-solving, and the practical side of getting things done.
          </p>
          <p>
            I enjoy work that makes me think, ask questions, and occasionally go, “there has to be a better way to do this.” That mindset has followed me across different sides of HR — from assessment and training to HR operations and, now, talent management.
          </p>

          {showMoreAbout && (
            <>
              <p>
                Along the way, I’ve learned that working with people rarely comes with a simple formula. Sometimes the answer is in the data, sometimes it comes from understanding the person behind it, and often, it takes a bit of both. That’s probably what I enjoy most about HR — there’s always a real person, a real problem, and a practical side to figure out.
              </p>
              <p className="italic text-zinc-500">
                That’s only part of the story. The rest is probably easier to understand through the work itself — so, keep going.
              </p>
            </>
          )}
        </div>

        <button
          onClick={() => setShowMoreAbout(!showMoreAbout)}
          className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-zinc-900 cursor-pointer"
          aria-expanded={showMoreAbout}
        >
          <span>{showMoreAbout ? "Show less" : "More About Me"}</span>
          <ArrowRight
            className={`h-3.5 w-3.5 transition-transform ${showMoreAbout ? "-rotate-90" : ""}`}
          />
        </button>

        {/* Key numbers from the work experience entries */}
        <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200">
          {[
            { value: "43", label: "stores supported" },
            { value: "70+", label: "employees on payroll" },
            { value: "40%", label: "less manual processing" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white px-2 py-4 text-center">
              <div className="font-serif text-2xl font-medium tracking-tight text-zinc-900">
                {stat.value}
              </div>
              <div className="mt-1 text-[11px] leading-tight text-zinc-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 03. CASE STUDIES ================= */}
      <section id="projects" className="border-t border-zinc-200/80 bg-white px-5 py-14">
        <Kicker>Case studies</Kicker>
        <Heading>Selected Projects</Heading>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600">
          Six interactive case studies across talent, recruitment, operations, and workforce planning, built on illustrative data.
        </p>

        <ul className="mt-8 border-t border-zinc-200">
          {PROJECTS.map((project) => (
            <li key={project.id} className="border-b border-zinc-200">
              <button
                onClick={() => onOpenCaseStudy(project.id)}
                className="flex w-full items-center gap-4 py-5 text-left active:bg-zinc-50 cursor-pointer"
              >
                <span className="w-6 shrink-0 font-mono text-xs text-blue-600">
                  {project.number}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-serif text-[1.15rem] font-medium leading-snug text-zinc-900">
                    {project.title}
                  </span>
                  <span className="mt-1 block text-xs text-zinc-500">
                    {project.category}
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-zinc-400" />
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= 04. EXPERIENCE ================= */}
      <section id="experience" className="border-t border-zinc-200/80 bg-[#FAFAFA] px-5 py-14">
        <Kicker>Experience</Kicker>
        <Heading>Work Experience</Heading>

        <ol className="ml-1.5 mt-8 border-l border-zinc-300">
          {EXPERIENCES.map((exp, index) => {
            const isCurrent = index === 0;
            const isOpen = openExperience === exp.id;

            return (
              <li key={exp.id} className="relative pb-8 pl-6 last:pb-0">
                <span
                  className={`absolute -left-[6px] top-1.5 h-[11px] w-[11px] rounded-full ring-4 ring-[#FAFAFA] ${
                    isCurrent ? "bg-blue-600" : "bg-zinc-400"
                  }`}
                  aria-hidden="true"
                />

                <button
                  onClick={() => setOpenExperience(isOpen ? null : exp.id)}
                  className="flex w-full items-start gap-3 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                      {exp.period}
                    </div>
                    <div className="mt-1 text-base font-semibold leading-snug text-zinc-900">
                      {exp.role}
                    </div>
                    <div className="mt-0.5 text-xs leading-snug text-zinc-500">
                      {exp.company}
                    </div>
                    <div className="mt-2 text-[13px] leading-relaxed text-zinc-600">
                      {exp.tagline}
                    </div>
                  </div>
                  <ChevronDown
                    className={`mt-1 h-4 w-4 shrink-0 text-zinc-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-4 space-y-4 rounded-xl border border-zinc-200 bg-white p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={exp.logo}
                        alt=""
                        className="h-8 w-8 rounded-md border border-zinc-100 bg-white object-contain p-0.5"
                      />
                      <div className="flex items-center gap-1 text-xs text-zinc-500">
                        <MapPin className="h-3 w-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-[13px] leading-relaxed text-zinc-600">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.focus.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] text-zinc-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </section>

      {/* ================= 05. SKILLS & CV ================= */}
      <section id="capabilities" className="border-t border-zinc-200/80 bg-white px-5 py-14">
        <Kicker>Skills &amp; tools</Kicker>
        <Heading>Key Skills</Heading>

        <div className="mt-8 space-y-7">
          {CAPABILITIES.map((group) => (
            <div key={group.domain}>
              <div className="text-xs font-semibold text-zinc-900">
                {group.domain}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-xs text-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6">
          <Kicker>Education</Kicker>
          <div className="mt-3 text-sm font-semibold text-zinc-900">
            {PROFILE.degree}
          </div>
          <div className="text-sm text-zinc-600">{PROFILE.university}</div>
          <div className="mt-0.5 font-mono text-xs text-zinc-500">{PROFILE.gpa}</div>
        </div>

        <a
          href={PROFILE.cvUrl}
          download="Rio_Koresh_Yeremia_CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 py-3.5 text-sm font-medium text-white active:bg-zinc-800"
        >
          <FileDown className="h-4 w-4" />
          <span>Download CV</span>
        </a>
      </section>

      {/* ================= 06. CONTACT ================= */}
      <section id="contact" className="border-t border-zinc-200/80 bg-[#FAFAFA] px-5 py-14">
        <Kicker>Get in touch</Kicker>
        <Heading>Let’s Connect</Heading>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600">
          I’m always open to new opportunities, collaborations, or just a good chat.
        </p>

        <div className="mt-8 divide-y divide-zinc-200 border-y border-zinc-200">
          <div className="flex items-center gap-3 py-4">
            <Mail className="h-4 w-4 shrink-0 text-blue-600" />
            <div className="min-w-0 flex-1">
              <div className="text-[11px] text-zinc-500">Email</div>
              <a
                href={`mailto:${PROFILE.email}`}
                className="block truncate text-sm font-medium text-zinc-900"
              >
                {PROFILE.email}
              </a>
            </div>
            <button
              onClick={handleCopyEmail}
              aria-label="Copy email"
              className="rounded-lg p-2 text-zinc-500 active:bg-zinc-100 cursor-pointer"
            >
              {copiedEmail ? (
                <Check className="h-4 w-4 text-emerald-600" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 py-4"
          >
            <Linkedin className="h-4 w-4 shrink-0 text-blue-600" />
            <div className="min-w-0 flex-1">
              <div className="text-[11px] text-zinc-500">LinkedIn</div>
              <div className="truncate text-sm font-medium text-zinc-900">
                linkedin.com/in/riokoreshyeremia
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-zinc-400" />
          </a>

          <div className="flex items-center gap-3 py-4">
            <MapPin className="h-4 w-4 shrink-0 text-blue-600" />
            <div>
              <div className="text-[11px] text-zinc-500">Location</div>
              <div className="text-sm font-medium text-zinc-900">
                {PROFILE.location}
              </div>
            </div>
          </div>
        </div>

        {/* Message form */}
        <div className="mt-10">
          <div className="text-base font-semibold text-zinc-900">Send a message</div>

          {sent ? (
            <div className="mt-4 rounded-xl border border-emerald-200 bg-white p-5 text-center">
              <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-600" />
              <div className="mt-2 text-sm font-semibold text-zinc-900">
                Thank you for reaching out!
              </div>
              <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                Your message was sent. Rio will reply to{" "}
                <strong>{form.email || "your email"}</strong>.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", message: "" });
                }}
                className="mt-3 text-xs font-medium text-blue-600 cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <input
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                required
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                required
                rows={4}
                placeholder="Share a brief message..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
              />

              {sendError && (
                <p role="alert" className="text-xs text-red-600">
                  Something went wrong and your message wasn't sent. Please try again, or email{" "}
                  <a href={`mailto:${PROFILE.email}`} className="font-medium underline">
                    {PROFILE.email}
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 py-3.5 text-sm font-medium text-white active:bg-zinc-800 disabled:opacity-60 cursor-pointer"
              >
                <Send className="h-4 w-4" />
                <span>{isSending ? "Sending…" : "Send Message"}</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};
