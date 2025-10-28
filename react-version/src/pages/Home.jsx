import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />

      {/* Features / Boxes */}
      <section className="max-w-[1200px] mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
          Powerful features
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-2 max-w-2xl mx-auto">
          Everything your support team needs to stay productive and responsive.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <article className="bg-gradient-to-tr from-white to-indigo-50 dark:from-slate-800 dark:to-slate-700 shadow-lg rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Triage
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
              Label, prioritize and assign tickets instantly with one click.
            </p>
          </article>

          <article className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Collaboration
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
              Comment, mention teammates and keep everyone in the loop.
            </p>
          </article>

          <article className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Reporting
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
              Insights and metrics to help you improve response times and
              throughput.
            </p>
          </article>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 py-12">
        <div className="max-w-[1000px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-indigo-600 dark:text-indigo-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
              1k+
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Tickets handled monthly
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-pink-600 dark:text-pink-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h4 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
              Teams
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Collaboration across departments
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h4 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
              99%
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              SLA compliance
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold">
              Ready to streamline your support?
            </h3>
            <p className="mt-2 opacity-90">
              Start a free trial or create your team workspace now.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <a
                href="/auth/signup"
                className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg"
              >
                Get Started
              </a>
              <a
                href="/auth/login"
                className="border border-white/30 px-6 py-3 rounded-lg"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
