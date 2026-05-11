const apps = [
  {
    name: "Reson",
    description:
      "A dating app in development, focused on deeper compatibility instead of endless swiping.",
    status: "In Development",
    accent: "from-purple-500 to-violet-300",
  },
  {
    name: "Elixa",
    description:
      "A social drinking game app in development, built for clean party experiences.",
    status: "In Development",
    accent: "from-emerald-400 to-green-300",
  },
  {
    name: "Noxa",
    description:
      "A social community concept in development, designed around real-world moments.",
    status: "Concept Phase",
    accent: "from-blue-500 to-cyan-300",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.4em] text-white/40">
          Independent App Studio
        </p>

        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
          Klex Labs
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
          Klex Labs is an independent development studio building digital
          products with a focus on design, usability and meaningful user
          experiences.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {apps.map((app) => (
            <article
              key={app.name}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]"
            >
              <div
                className={`mb-8 h-1.5 w-16 rounded-full bg-gradient-to-r ${app.accent}`}
              />

              <h2 className="text-2xl font-semibold">{app.name}</h2>

              <p className="mt-4 min-h-24 text-sm leading-6 text-white/55">
                {app.description}
              </p>

              <span className="mt-6 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">
                {app.status}
              </span>
            </article>
          ))}
        </div>

        <p className="mt-16 text-sm text-white/35">
          © {new Date().getFullYear()} Klex Labs. All projects are currently in
          development.
        </p>
      </section>
    </main>
  );
}