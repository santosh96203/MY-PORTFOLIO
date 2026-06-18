export default function Publications() {
  return (
    <section
      id="publications"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Publications
      </h2>

      <div className="border border-gray-700 rounded-2xl p-6">
        <h3 className="text-2xl font-bold">
          A Review of Monitoring Heart Rate and Cardiac Rhythm by Video Photoplethysmography on Mobile Devices
        </h3>

        <p className="text-gray-400 mt-3">
          RAMSITA 2026 Conference Publication
        </p>

        <a
          href="/papers/review-paper.pdf"
          target="_blank"
          className="inline-block mt-4 text-blue-400"
        >
          View Paper →
        </a>
      </div>
    </section>
  );
}