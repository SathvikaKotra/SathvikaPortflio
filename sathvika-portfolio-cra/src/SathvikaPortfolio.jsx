import React from "react";
import { motion } from "framer-motion";

export default function SathvikaPortfolio() {
  const projects = [
    {
      title: "VFX Summit 2025 (Hyderabad)",
      desc: "Influencer coordination and creator engagement to amplify event visibility.",
    },
    {
      title: "IndiaJoy 2025",
      desc: "Event promotions and digital outreach, connecting creators and audiences.",
    },
    {
      title: "The Neighborhood Minds",
      desc: "Member of a creative community initiative focused on connection and wellbeing.",
    },
    {
      title: "The neighborhood Fest 2025 (October, Hyderabad)",
      desc: "Organized marketing outreach for a wellness and creativity festival.",
    },
  ];

  const sectionFade = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-b from-white via-rose-50 to-pink-50 text-slate-900
                 overflow-y-auto snap-y snap-mandatory scroll-smooth"
      style={{ fontFamily: "'Baloo 2', ui-sans-serif, system-ui" }}
    >
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl rounded-xl bg-white/70 backdrop-blur-md border border-rose-100 shadow-sm px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center border border-rose-200">
            <span className="text-2xl font-extrabold text-rose-600">SK</span>
          </div>
          <div className="text-sm">
            <div className="text-rose-600 font-semibold tracking-wide">
              Sathvika
            </div>
            <div className="text-xs text-slate-600 -mt-1">
              Creative Marketer • Community Builder
            </div>
          </div>
        </div>

        <ul className="hidden sm:flex gap-6 text-sm font-medium text-slate-700">
          <li>
            <a href="#hero" className="hover:text-rose-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-rose-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-rose-600 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-rose-600 transition">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/dumbdump.jsx"
            target="_blank"
            rel="noreferrer"
            className="text-xs px-3 py-1 rounded-full border border-rose-100 bg-white text-rose-600 shadow-sm"
          >
            @maybesathvika
          </a>
        </div>
      </nav>

      <section
        id="hero"
        className="snap-start h-screen flex items-center justify-center px-6"
      >
        <motion.div
          className="max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
        >
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-4"
            style={{ lineHeight: 1.03 }}
          >
            Creative Marketer &{" "}
            <span className="text-rose-600">Community Builder</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
            I bring people, creators, and brands together — with authentic
            storytelling, conferences that hum with energy, and digital
            experiences that feel human.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#about"
              className="px-6 py-3 rounded-full bg-rose-600 text-white font-semibold shadow hover:bg-rose-500 transition"
            >
              Explore ↓
            </a>
            <a
              href="mailto:sathvikakotra@email.com"
              className="px-6 py-3 rounded-full border border-slate-200 bg-white text-slate-700 font-medium hover:shadow-sm transition"
            >
              Say Hello
            </a>
          </div>

          <div className="mt-10 flex justify-center gap-3 text-sm text-slate-500">
            <span>Made with curiosity ☕</span>
            <span className="opacity-30">•</span>
            <span>Events • UGC • Collabs</span>
          </div>
        </motion.div>
      </section>

      <section
        id="about"
        className="snap-start h-screen flex items-center justify-center px-8 bg-white"
      >
        <motion.div
          className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
        >
          <div>
            <h2 className="text-4xl font-bold text-rose-600 mb-4">What I do</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm a passionate community builder and creative marketer with
              hands-on experience in event marketing, influencer coordination,
              and social media storytelling. I thrive in connecting people,
              ideas, and brands through purposeful, creative collaborations.
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-3">
              <li className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                Event & Community Marketing
              </li>
              <li className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                Influencer Relations
              </li>
              <li className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                Public Speaking & Hosting
              </li>
              <li className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                Content Strategy
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-72 h-72 rounded-3xl bg-gradient-to-tr from-rose-100 to-white border border-rose-100 shadow-lg flex items-center justify-center">
              <div className="text-center px-6">
                <div className="text-2xl font-bold text-rose-600 mb-2">
                  The Neighborhood Minds
                </div>
                <div className="text-sm text-slate-600">Member</div>
                <p className="mt-3 text-xs text-slate-500">
                  A hyd.communitie space for creatives and wellbeing-focused
                  local collabs.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="projects"
        className="snap-start h-screen flex items-center justify-center px-8 bg-gradient-to-b from-white to-rose-50"
      >
        <motion.div
          className="max-w-6xl w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-rose-600 mb-8 text-center">
            Selected Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, idx) => (
              <motion.article
                key={p.title}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-6 rounded-2xl bg-white border border-rose-100 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">
                      {p.title}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                  </div>
                  <div className="text-3xl text-rose-100 font-bold select-none">
                    {(idx + 1).toString().padStart(2, "0")}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section
        id="contact"
        className="snap-start h-screen flex items-center justify-center px-8 bg-white"
      >
        <motion.div
          className="max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
        >
          <h4 className="text-3xl font-bold text-rose-600 mb-4">
            Let’s collaborate
          </h4>
          <p className="text-slate-700 mb-6">
            I'm open to brand partnerships, UGC briefs, event marketing, and
            full-time roles that value community, creativity, and honest
            storytelling.
          </p>

          <a
            href="mailto:sathvikakotra@email.com"
            className="inline-block px-8 py-3 rounded-full bg-rose-600 text-white font-semibold shadow hover:bg-rose-500 transition"
          >
            Email Me ✨
          </a>

          <div className="mt-8 text-sm text-slate-500">
            <div>
              Made with curiosity, coffee, and a dash of chaos — always up for a
              chat.
            </div>
          </div>
        </motion.div>
      </section>

      <div className="fixed right-6 bottom-6 z-40">
        <a
          href="https://instagram.com/yourhandle"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-rose-100 shadow"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="stroke-rose-600"
          >
            <path
              d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 11.37A4 4 0 1112.63 8"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-rose-600 text-sm font-medium">@yourhandle</span>
        </a>
      </div>
    </div>
  );
}
