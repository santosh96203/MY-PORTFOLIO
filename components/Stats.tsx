export default function Stats() {
  const stats = [
    {
      value: "7.41",
      label: "M.Tech CGPA",
    },
    {
      value: "4+",
      label: "Major Projects",
    },
    {
      value: "1",
      label: "Published Paper"
    },
    {
      value: "3",
      label: "Research Works",
    },
    {
      value: "10+",
      label: "Certifications",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="
              bg-slate-900/60
              backdrop-blur-lg
              border border-slate-700
              rounded-3xl
              p-6
              text-center
              hover:border-blue-500
              hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
              transition-all duration-300
            "
          >
            <h3 className="text-4xl font-bold text-blue-400">
              {stat.value}
            </h3>

            <p className="text-gray-400 mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}