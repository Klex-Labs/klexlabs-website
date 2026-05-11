const apps = [
  {
    name: "Reson",
    label: "Dating",
    description:
      "A dating app in development, focused on deeper compatibility, intention and better choices.",
    status: "In Development",
    accent: "from-violet-500 via-purple-400 to-fuchsia-300",
  },
  {
    name: "Elixa",
    label: "Party",
    description:
      "A clean social drinking game app built for parties, groups and memorable nights.",
    status: "In Development",
    accent: "from-emerald-400 via-green-300 to-lime-200",
  },
  {
    name: "Noxa",
    label: "Social",
    description:
      "A social community concept designed around real-world moments and local connection.",
    status: "Concept Phase",
    accent: "from-blue-500 via-cyan-300 to-sky-200",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-20rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-[-10rem] top-40 h-[28rem] w-[28rem] rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[-10rem] h-[30rem] w-[30rem] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-white text-black flex items-center justify-center text-sm font-black">
            K
          </div>
          <span className="text-sm font-semibold tracking-wide">
            Klex Labs
          </span>
        </div>

        <nav className="hidden items-center gap-7 text-sm text-white/45 md:flex">
          <a className="transition hover:text-white" href="#apps">
            Apps
          </a>
          <a className="transition hover:text-white" href="#about">
            About
          </a>
          <a className="transition hover:text-white" href="#status">
            Status
          </a>
        </nav>
      </header>

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-92px)] max-w-6xl flex-col justify-center px-6 pb-20 pt-10">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-white/45">
            Independent App Studio
          </div>

          <h1 className="text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">
            Digital products with a sharper edge.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
            Klex Labs is an independent development studio building Reson,
            Elixa and Noxa — apps designed with clean interfaces, strong
            identity and meaningful user experiences.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#apps"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-black transition hover:bg-white/85"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-center text-sm font-semibold text-white/70 transition hover:bg-white/[0.07] hover:text-white"
            >
              About Klex Labs
            </a>
          </div>
        </div>

        <div id="apps" className="mt-20 grid gap-5 md:grid-cols-3">
          {apps.map((app) => (
            <article
              key={app.name}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.065]"
            >
              <div className="mb-8 flex items-center justify-between">
                <div
                  className={`h-2 w-20 rounded-full bg-gradient-to-r ${app.accent}`}
                />
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40">
                  {app.label}
                </span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight">
                {app.name}
              </h2>

              <p className="mt-4 min-h-28 text-sm leading-6 text-white/50">
                {app.description}
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-xs text-white/35">{app.status}</span>
                <span className="text-sm text-white/35 transition group-hover:text-white">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

        <section
          id="about"
          className="mt-24 grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 md:grid-cols-[1fr_1.4fr] md:p-10"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/35">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Built from ideas into real products.
            </h2>
          </div>

          <p className="text-sm leading-7 text-white/55 md:text-base">
            Klex Labs manages and develops early-stage app concepts with a focus
            on product design, usability and modern software development. All
            current projects are in active development or concept phase.
          </p>
        </section>

        <footer
          id="status"
          className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/35 md:flex-row"
        >
          <p>© {new Date().getFullYear()} Klex Labs. All rights reserved.</p>
          <p>Reson · Elixa · Noxa</p>
        </footer>
      </section>
    </main>
  );
}