export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="px-6 py-24 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Deterministic AI. Verifiable Decisions.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600">
          I help companies design reproducible, audit-ready AI systems
          built for high-trust and regulated environments.
        </p>
        <div className="mt-8">
          <a
            href="mailto:your@email.com"
            className="inline-block bg-black text-white px-8 py-4 rounded-2xl text-base"
          >
            Book Advisory Call
          </a>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">
            AI Capability Is Rising. Auditability Is Not.
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            Most AI systems today optimize for performance and autonomy,
            but lack deterministic reconstruction and governance integrity.
            When regulators or auditors ask “Why did this decision happen?”,
            most systems cannot provide a verifiable answer.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Advisory Focus Areas
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold text-lg">AI Governance Architecture</h3>
            <p className="text-gray-600 mt-3">
              Designing AI systems that remain compliant and regulator-ready.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Deterministic Replay</h3>
            <p className="text-gray-600 mt-3">
              Ensuring AI decisions can be reconstructed exactly across time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Agentic AI Systems</h3>
            <p className="text-gray-600 mt-3">
              Structuring autonomous workflows with verifiable state integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Deterministic Integrity Protocol
      </footer>
    </main>
  );
}