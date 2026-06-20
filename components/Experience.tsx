export default function Experience() {
  const experiences = [
  {
    company: "SLASH MARK",
    role: "Full Stack Web Development Intern",
    period: "Jan 2024 - Apr 2024",
    description:
      "Developed responsive web applications using frontend and backend technologies. Integrated databases and APIs, collaborated on debugging, testing, deployment activities, and applied software development best practices to improve user experience and maintainability.",
    tech: [
      "React.js",
      "Node.js",
      "HTML",
      "CSS",
      "JavaScript",
      "APIs",
      "MongoDB",
    ],
  },

  {
    company: "YOSHOPS",
    role: "Data Science Intern",
    period: "May 2023 - Jul 2023",
    description:
      "Performed data preprocessing, analysis, and visualization on business datasets. Assisted in developing billing and reporting solutions, utilized Python-based tools for analytics, and generated insights supporting data-driven decision-making.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Analysis",
      "Data Visualization",
      "Business Analytics",
    ],
  },

  {
    company: "INDIAN SERVERS",
    role: "Software Trainee",
    period: "Apr 2022 - Jun 2022",
    description:
      "Built Python-based machine learning applications using industry-standard libraries. Implemented data preprocessing, feature engineering, supervised learning algorithms, and model evaluation methodologies through practical projects.",
    tech: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Data Preprocessing",
      "Feature Engineering",
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

        <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
          Internships & Experience
        </h2>

        <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
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
            <div className="flex flex-col md:flex-row md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {exp.role}
                </h3>

                <p className="text-blue-600 dark:text-blue-400">
                  {exp.company}
                </p>
              </div>

              <div className="text-slate-500 dark:text-slate-400">
                {exp.period}
              </div>
            </div>

            <p className="text-slate-700 dark:text-slate-300 mb-5 leading-relaxed">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech, i) => (
                <span
                  key={i}
                  className="
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