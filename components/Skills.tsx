export default function Skills() {
  const skills = [
    "Python",
    "Java",
    "C",
    "C#",

    "Machine Learning",
    "Deep Learning",
    "Image Processing",
    "Computer Vision",

    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",

    "React.js",
    "Node.js",
    "HTML",
    "CSS",
    "JavaScript",

    "MongoDB",
    "SQL",

    "TensorFlow",
    "Keras",
    "MATLAB",
    "Git",
  ];

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="border border-gray-700 px-5 py-3 rounded-xl"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}