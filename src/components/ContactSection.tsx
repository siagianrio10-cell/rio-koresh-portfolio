import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  FileDown,
  Send,
  CheckCircle2,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";
import { PROFILE } from "../data/portfolioData";

interface ContactSectionProps {
  onOpenCV: () => void;
}

// Paste your Formspree endpoint here, e.g. "https://formspree.io/f/abcdwxyz"
// Free signup at formspree.io -> New Form -> use your email -> copy the endpoint URL.
// While this is empty, the form falls back to opening the visitor's email app.
const FORM_ENDPOINT = "";

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCV }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    topic: "Talent Management / Succession",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSendError(false);

    // Honeypot: real visitors never see or fill this field; bots do.
    const honeypot = (e.currentTarget.elements.namedItem("website") as HTMLInputElement | null)?.value;
    if (honeypot) {
      setFormSubmitted(true);
      return;
    }

    // Fallback until a Formspree endpoint is set: open the visitor's email app, prefilled.
    if (!FORM_ENDPOINT) {
      const body = `${formData.message}\n\n— ${formData.name}${
        formData.organization ? `, ${formData.organization}` : ""
      }\n${formData.email}`;
      window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.topic}`
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setIsSending(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          topic: formData.topic,
          message: formData.message,
          _subject: `[Portfolio] ${formData.topic} — ${formData.name}`,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setFormSubmitted(true);
    } catch {
      setSendError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 border-b border-zinc-200/80 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Inquiries & Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
                <span>Contact</span>
                <span aria-hidden="true">·</span>
                <span>Get in Touch</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 leading-tight">
                People. Process. And the work in between.
              </h2>

              <div className="space-y-4">
                <p className="text-sm text-zinc-600 leading-relaxed">
                  HR, to me, is rarely just about having the right answer. It’s
                  about asking the right questions, understanding the people
                  involved, and figuring out how people, processes, and
                  decisions connect.
                </p>

                <p className="text-sm text-zinc-600 leading-relaxed">
                  That’s what keeps me curious — from talent and recruitment to
                  assessment, people development, HR operations, and the
                  everyday work that keeps HR moving. I enjoy finding ways to
                  make a structured process feel a little clearer, more useful,
                  and more human.
                </p>

                <p className="text-sm text-zinc-600 leading-relaxed">
                  Have an idea, a project, a question, or a different
                  perspective?
                </p>

                <p className="text-sm font-semibold text-zinc-900">
                  I’d love to hear from you.
                </p>
              </div>
            </div>

            {/* Contact Channels Cards */}
            <div className="space-y-3 pt-2">
              {/* Email Card */}
              <div className="p-4 bg-zinc-50 border border-zinc-200/90 rounded-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white border border-zinc-200 text-blue-600">
                    <Mail className="w-4 h-4" />
                  </div>

                  <div>
                    <div className="text-[11px] font-medium text-zinc-500">
                      Email Address
                    </div>

                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="text-xs sm:text-sm font-semibold text-zinc-900 hover:text-blue-600 transition-colors"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-zinc-500 hover:text-zinc-900 hover:bg-white rounded-lg transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="p-4 bg-zinc-50 border border-zinc-200/90 rounded-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white border border-zinc-200 text-blue-600">
                    <Linkedin className="w-4 h-4" />
                  </div>

                  <div>
                    <div className="text-[11px] font-medium text-zinc-500">
                      Professional Network
                    </div>

                    <div className="text-xs sm:text-sm font-semibold text-zinc-900">
                      LinkedIn Profile
                    </div>
                  </div>
                </div>

                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-100 transition-colors cursor-pointer"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Download CV Card */}
              <div className="p-4 bg-zinc-50 border border-zinc-200/90 rounded-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white border border-zinc-200 text-zinc-800">
                    <FileDown className="w-4 h-4" />
                  </div>

                  <div>
                    <div className="text-[11px] font-medium text-zinc-500">
                      Download CV
                    </div>

                    <div className="text-xs sm:text-sm font-semibold text-zinc-900">
                      Curriculum Vitae (PDF)
                    </div>
                  </div>
                </div>

                <a
                  href={PROFILE.cvUrl}
                  download="Rio_Koresh_Yeremia_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Professional Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-50 border border-zinc-200/90 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-zinc-200 pb-4">
                <h3 className="text-base sm:text-lg font-semibold text-zinc-900">
                  Send a Message
                </h3>

                <p className="text-xs text-zinc-500 mt-0.5">
                  Direct message to Rio Koresh Yeremia.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 bg-white border border-emerald-200 rounded-xl text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <h4 className="text-base font-semibold text-zinc-900">
                    Thank you for reaching out!
                  </h4>

                  <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                    Your message about <strong>{formData.topic}</strong> was sent.
                    Rio will reply to{" "}
                    <strong>
                      {formData.email || "your provided address"}
                    </strong>
                    .
                  </p>

                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        organization: "",
                        topic: "Talent Management / Succession",
                        message: "",
                      });
                    }}
                    className="text-xs text-blue-600 font-medium hover:underline pt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold text-zinc-700"
                      >
                        Your Name *
                      </label>

                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-zinc-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold text-zinc-700"
                      >
                        Email Address *
                      </label>

                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        placeholder="e.g. s.jenkins@company.com"
                        className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-zinc-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="org"
                        className="text-xs font-semibold text-zinc-700"
                      >
                        Company / Organization
                      </label>

                      <input
                        id="org"
                        type="text"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            organization: e.target.value,
                          })
                        }
                        placeholder="e.g. Retail Horizon Group"
                        className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-zinc-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="topic"
                        className="text-xs font-semibold text-zinc-700"
                      >
                        Topic
                      </label>

                      <select
                        id="topic"
                        value={formData.topic}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            topic: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-zinc-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      >
                        <option value="Talent Management / Succession">
                          Talent Management &amp; Succession
                        </option>

                        <option value="Recruitment & Assessment">
                          Recruitment &amp; Assessment
                        </option>

                        <option value="HR Operations & Administration">
                          HR Operations &amp; Administration
                        </option>

                        <option value="People Development (TNA/IDP)">
                          People Development (TNA/IDP)
                        </option>

                        <option value="Workforce Planning">
                          Workforce Planning
                        </option>

                        <option value="General Professional Discussion">
                          General Professional Discussion
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="msg"
                      className="text-xs font-semibold text-zinc-700"
                    >
                      Message *
                    </label>

                    <textarea
                      id="msg"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      placeholder="Share a brief message..."
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-zinc-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>

                  {sendError && (
                    <p role="alert" className="text-xs text-red-600">
                      Something went wrong and your message wasn't sent. Please try again, or email{" "}
                      <a href={`mailto:${PROFILE.email}`} className="underline font-medium">
                        {PROFILE.email}
                      </a>{" "}
                      directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs sm:text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors shadow-xs cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSending ? "Sending…" : "Send Message"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
