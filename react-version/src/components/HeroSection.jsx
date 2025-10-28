import { Link } from "react-router-dom";
// import wave from "../assets/svg/wave.svg";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -left-16 -top-16 w-64 h-64 bg-indigo-200 rounded-full opacity-30 blur-3xl mix-blend-screen"></div>
      <div className="absolute right-10 top-6 w-40 h-40 bg-pink-200 rounded-full opacity-25 blur-2xl mix-blend-screen"></div>

      <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white"
        >
          Manage Tickets Seamlessly with{" "}
          <span className="text-indigo-600 dark:text-indigo-400">TixHub</span>
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          Create, assign, update and track tickets with ease. Stay in control
          and productive.
        </p>

        <div className="flex justify-center mt-8 gap-4">
          <Link
            to="/auth/signup"
            data-testid="test-hero-register"
            className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            to="/auth/login"
            data-testid="test-hero-login"
            className="px-6 py-3 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Wave SVG at bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#eef2ff" />
            <stop offset="100%" stopColor="#e0f2fe" />
          </linearGradient>
        </defs>
        <path
          d="M0,80 C200,160 400,0 720,60 C1040,120 1200,40 1440,100 L1440,200 L0,200 Z"
          fill="url(#g1)"
          className="dark:fill-slate-800"
        />
      </svg>
    </section>
  );
}
