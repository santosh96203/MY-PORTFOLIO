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

        <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
          Publications
        </h2>

        <p className="text-slate-600 dark:text-slate-400 mt-4">
          Published research contributions in AI,
          Healthcare Monitoring, and Signal Processing.
        </p>
      </div>

      <div
        className="
bg-white/95
dark:bg-slate-900/60

backdrop-blur-lg

border
border-slate-200
dark:border-slate-700

rounded-3xl
p-8

shadow-[0_8px_30px_rgba(0,0,0,0.08)]

hover:border-blue-500
hover:-translate-y-1
hover:shadow-[0_12px_40px_rgba(59,130,246,0.15)]

transition-all
duration-300
"
      >
        <div className="text-5xl mb-5">
            🔬
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
          A Review of Monitoring Heart Rate and Cardiac Rhythm by
          Video Photoplethysmography on Mobile Devices
        </h3>

        <p className="text-blue-600 dark:text-blue-400 mb-4">
          RAMSITA 2026 • Atlantis Press
        </p>
        <a
  href="https://www.atlantis-press.com/proceedings/ramsita-26/126024614 "
  target="_blank"
  rel="noopener noreferrer"
  className="
text-cyan-600
dark:text-cyan-400

hover:text-cyan-700
dark:hover:text-cyan-300
">
  DOI: 10.2991/978-94-6239-678-4_17 ↗
</a>

       <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
          Published review paper covering smartphone-based
          Video Photoplethysmography (VPG), Remote
          Photoplethysmography (rPPG), signal processing
          techniques, machine learning models, healthcare
          applications, challenges, and future research directions.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          <span className="
  bg-blue-50
  dark:bg-blue-500/10

  text-blue-700
  dark:text-blue-400

  px-3
  py-1

  rounded-full
  text-sm

  border
  border-blue-100
  dark:border-blue-500/20
">Research</span>
          <span className="
  bg-blue-50
  dark:bg-blue-500/10

  text-blue-700
  dark:text-blue-400

  px-3
  py-1

  rounded-full
  text-sm

  border
  border-blue-100
  dark:border-blue-500/20
">Healthcare AI</span>
          <span className="
  bg-blue-50
  dark:bg-blue-500/10

  text-blue-700
  dark:text-blue-400

  px-3
  py-1

  rounded-full
  text-sm

  border
  border-blue-100
  dark:border-blue-500/20
">Signal Processing</span>
          <span className="
  bg-blue-50
  dark:bg-blue-500/10

  text-blue-700
  dark:text-blue-400

  px-3
  py-1

  rounded-full
  text-sm

  border
  border-blue-100
  dark:border-blue-500/20
">Machine Learning</span>
        </div>

        <a
          href="/papers/review-paper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
inline-flex
items-center
gap-2

text-blue-600
dark:text-blue-400

hover:text-blue-700
dark:hover:text-blue-300

font-medium
"
        >
          View Paper →
        </a>
      </div>
    </section>
  );
}