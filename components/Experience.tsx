export default function Experience() {
  const experiences = [
    {
      company: "Yoshops",
      role: "AI Chatbot Development Intern",
      period: "2023",
      description:
        "Developed an End-to-End AI Chatbot using Python, NLP, Streamlit, and web technologies to automate user interactions and query handling.",
      tech: [
        "Python",
        "NLP",
        "Streamlit",
        "Pandas",
      ],
    },

    {
      company: "Indian Servers",
      role: "Machine Learning Intern",
      period: "2022",
      description:
        "Built a Face Mask Detection system using Deep Learning, TensorFlow, Keras, and OpenCV for real-time image classification.",
      tech: [
        "Python",
        "TensorFlow",
        "Keras",
        "OpenCV",
      ],
    },

    {
      company: "Research & Development",
      role: "AI Research Intern",
      period: "2024–2026",
      description:
        "Worked on healthcare AI systems, smartphone sensing applications, signal processing, and computer vision research for M.Tech projects and publications.",
      tech: [
        "Machine Learning",
        "Computer Vision",
        "Healthcare AI",
        "Signal Processing",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <div className="text-center mb-16">
        <p className="text-blue-400 mb-3 font-medium">
          PROFESSIONAL EXPERIENCE
        </p>

        <h2 className="text-5xl font-bold">
          Internships & Experience
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Industry exposure through internships,
          research activities, and practical software
          development experience.
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="
              bg-slate-900/60
              backdrop-blur-lg
              border
              border-slate-700
              rounded-3xl
              p-8
              hover:border-blue-500
              hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
              transition-all
              duration-300
            "
          >
            <div className="flex flex-col md:flex-row md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold">
                  {exp.role}
                </h3>

                <p className="text-blue-400">
                  {exp.company}
                </p>
              </div>

              <div className="text-gray-400">
                {exp.period}
              </div>
            </div>

            <p className="text-gray-300 mb-5">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech, i) => (
                <span
                  key={i}
                  className="
                    bg-blue-500/10
                    text-blue-400
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    border
                    border-blue-500/20
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}