export default function Publications() {
  return (
    <section
      id="publications"
      className="max-w-6xl mx-auto px-8 py-24"
    >
      <div className="text-center mb-16">
        <p className="text-blue-400 font-medium mb-3">
          RESEARCH OUTPUT
        </p>

        <h2 className="text-5xl font-bold">
          Publications
        </h2>

        <p className="text-gray-400 mt-4">
          Published research contributions in AI,
          Healthcare Monitoring, and Signal Processing.
        </p>
      </div>

      <div
        className="
        bg-slate-900/60
        backdrop-blur-lg
        border
        border-slate-700
        rounded-3xl
        p-8
        hover:border-blue-500
        hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]
        transition-all
        duration-300
      "
      >
        <div className="text-5xl mb-5">
          📄
        </div>

        <h3 className="text-2xl font-bold mb-3">
          A Review of Monitoring Heart Rate and Cardiac Rhythm by
          Video Photoplethysmography on Mobile Devices
        </h3>

        <p className="text-blue-400 mb-4">
          RAMSITA 2026 • Atlantis Press
        </p>
        <a
  href="https://www.atlantis-press.com/proceedings/ramsita-26/126024614"
  target="_blank"
  rel="noopener noreferrer"
  className="text-cyan-400 hover:text-cyan-300"
>
  DOI: 10.2991/978-94-6239-678-4_17 ↗
</a>

        <p className="text-gray-400 mb-6">
          Published review paper covering smartphone-based
          Video Photoplethysmography (VPG), Remote
          Photoplethysmography (rPPG), signal processing
          techniques, machine learning models, healthcare
          applications, challenges, and future research directions.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          <span className="tag">Research</span>
          <span className="tag">Healthcare AI</span>
          <span className="tag">Signal Processing</span>
          <span className="tag">Machine Learning</span>
        </div>

        <a
          href="/papers/review-paper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            text-blue-400
            hover:text-blue-300
            font-medium
          "
        >
          View Paper →
        </a>
      </div>
    </section>
  );
}