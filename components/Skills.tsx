export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        "Python",
        "Java",
        "JavaScript",
        "Kotlin",
        "Swift",
        "C",
        "C++",
        "C#",
      ],
    },

    {
      title: "AI & Machine Learning",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "XGBoost",
        "Pandas",
        "NumPy",
      ],
    },

    {
      title: "Computer Vision & Signal Processing",
      skills: [
        "OpenCV",
        "Computer Vision",
        "rPPG",
        "VPG",
        "Digital Signal Processing",
        "Healthcare AI",
      ],
    },

    {
      title: "Web Development",
      skills: [
        "HTML5",
        "CSS3",
        "React.js",
        "Node.js",
        "Express.js",
        "FastAPI",
        "REST APIs",
      ],
    },

    {
      title: "Mobile Development",
      skills: [
        "Android Studio",
        "Kotlin",
        "CameraX",
        "ML Kit",
        "Swift",
        "Xcode",
        "AVFoundation",
        "Vision Framework",
      ],
    },

    {
      title: "Databases",
      skills: [
        "MongoDB",
        "SQL",
      ],
    },

    {
      title: "Tools & Technologies",
      skills: [
        "Git",
        "GitHub",
        "Linux",
        "MATLAB",
        "Streamlit",
        "VS Code",
      ],
    },

    {
      title: "Core Computer Science",
      skills: [
        "Data Structures & Algorithms",
        "OOP",
        "Operating Systems",
        "Computer Networks",
        "DBMS",
        "Software Engineering",
        "SDLC",
      ],
    },

    {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Communication",
        "Team Collaboration",
        "Time Management",
        "Work Ethic",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <div className="text-center mb-16">
        <p className="text-blue-400 mb-3 font-medium">
          MY EXPERTISE
        </p>

        <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
          Skills & Technologies
        </h2>

       <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
          Technical skills, development tools,
          research technologies, and professional
          competencies acquired through projects,
          internships, and academic research.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
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
  p-6

  shadow-[0_8px_30px_rgba(0,0,0,0.08)]

  hover:border-blue-500
  hover:-translate-y-1
  hover:shadow-[0_12px_40px_rgba(59,130,246,0.15)]

  transition-all
  duration-300
">
           <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
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
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}