import { SystemCalibration } from "@/components/system-calibration";

const modules = [
  { code: "01", label: "Boot Sequence", status: "NEXT" },
  { code: "02", label: "Cargo Manifest", status: "QUEUED" },
  { code: "03", label: "Chiral Network Nodes", status: "QUEUED" },
  { code: "04", label: "Mission Log", status: "QUEUED" },
  { code: "05", label: "Bridges Comms", status: "QUEUED" },
];

const telemetry = [
  ["FRAMEWORK", "NEXT.JS / APP ROUTER"],
  ["INTERFACE", "TAILWIND CSS 4"],
  ["MOTION", "GSAP / SCROLLTRIGGER"],
  ["TARGET", "VERCEL"],
];

export default function Home() {
  return (
    <main className="relative isolate flex min-h-dvh flex-1 overflow-hidden px-5 py-5 sm:px-8 sm:py-8 lg:px-12">
      <div className="hud-grid pointer-events-none absolute inset-0 -z-20" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 top-24 -z-10 size-72 rounded-full border border-holographic-cyan/10 blur-[1px] sm:size-[30rem]"
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-[1600px] flex-col">
        <header className="flex items-center justify-between border-b border-line pb-4 font-mono text-[0.625rem] tracking-[0.16em] text-muted sm:text-xs">
          <p className="flex items-center gap-2 text-foreground">
            <span className="size-1.5 bg-bridges-yellow shadow-[0_0_12px_var(--bridges-yellow)]" />
            STRAND.OS
          </p>
          <p className="hidden sm:block">PORTFOLIO NETWORK / BUILD 001</p>
          <p className="text-holographic-cyan">ONLINE</p>
        </header>

        <section className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.75fr)] lg:gap-20 lg:py-24">
          <div>
            <p className="telemetry-label mb-5 text-bridges-yellow">
              [ + ] Foundation initialized
            </p>
            <h1 className="max-w-5xl text-[clamp(3rem,10vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.075em] text-foreground">
              SYSTEM
              <span className="block text-muted/55">READY.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-muted sm:text-lg">
              The core interface, type system, motion runtime, and deployment
              target are calibrated. Identity data enters during the boot
              sequence build.
            </p>

            <SystemCalibration />
          </div>

          <aside className="hud-panel relative p-5 sm:p-7" aria-label="Build telemetry">
            <span className="absolute -left-px -top-px size-3 border-l border-t border-holographic-cyan" aria-hidden="true" />
            <span className="absolute -bottom-px -right-px size-3 border-b border-r border-chiral-gold" aria-hidden="true" />

            <div className="mb-8 flex items-center justify-between border-b border-line pb-3">
              <h2 className="telemetry-label text-foreground">
                {"// Build telemetry"}
              </h2>
              <span className="font-mono text-[0.625rem] text-holographic-cyan">04/04</span>
            </div>

            <dl className="space-y-5">
              {telemetry.map(([term, value]) => (
                <div className="grid grid-cols-[6.5rem_1fr] gap-3" key={term}>
                  <dt className="font-mono text-[0.625rem] tracking-wider text-muted">{term}</dt>
                  <dd className="font-mono text-xs text-foreground">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <p className="telemetry-label mb-3 text-muted">Module queue</p>
              <ol className="divide-y divide-line border-y border-line">
                {modules.map((module) => (
                  <li className="grid grid-cols-[2rem_1fr_auto] items-center gap-3 py-3 font-mono text-xs" key={module.code}>
                    <span className="text-muted">{module.code}</span>
                    <span>{module.label}</span>
                    <span className={module.status === "NEXT" ? "text-bridges-yellow" : "text-muted"}>
                      {module.status}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </section>

        <footer className="flex flex-col gap-2 border-t border-line pt-4 font-mono text-[0.625rem] tracking-[0.12em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>CORE SYSTEMS NOMINAL</p>
          <p>PHASE 01 / PROJECT FOUNDATION</p>
        </footer>
      </div>
    </main>
  );
}
