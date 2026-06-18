export default function Projects() {
  const projects = [
    {
      title:
        "Real-Time Non-Contact Pulse Rate and SpO₂ Monitoring Using Mobile Cameras",
      description:
        "Developed an AI-powered healthcare monitoring system using Video Photoplethysmography (VPG) and Remote Photoplethysmography (rPPG) techniques for contactless heart-rate and oxygen saturation estimation through smartphone cameras.",
      tech: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "FastAPI",
        "Healthcare AI",
      ],
      icon: "❤️",
    },

    {
      title:
        "A Review of Monitoring Heart Rate and Cardiac Rhythm by Video Photoplethysmography on Mobile Devices",
      description:
        "Comprehensive review paper covering smartphone-based VPG frameworks, machine learning models, signal processing pipelines, healthcare applications, challenges, and future research directions.",
      tech: [
        "Research",
        "Machine Learning",
        "Signal Processing",
        "Healthcare AI",
      ],
      icon: "📄",
      paper: "/papers/review-paper.pdf",
    },

    {
      title:
        "Face Mask Detection Using Deep Learning",
      description:
        "Developed a real-time computer vision system capable of detecting face masks using Convolutional Neural Networks (CNNs), TensorFlow, and OpenCV.",
      tech: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "Deep Learning",
      ],
      icon: "😷",
    },

    {
      title:
        "End-to-End AI Chatbot",
      description:
        "Built an intelligent AI chatbot using Generative AI, Natural Language Processing, and modern web technologies to provide contextual and interactive responses.",
      tech: [
        "Python",
        "NLP",
        "Gemini AI",
        "Next.js",
      ],
      icon: "🤖",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <div className="text-center mb-16">
        <p className="text-blue-400 mb-3 font-medium">
          MY WORK
        </p>

        <h2 className="text-5xl font-bold">
          Featured Projects
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          AI, Machine Learning, Healthcare Monitoring,
          Computer Vision, and Full Stack Development projects.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              bg-slate-900/60
              backdrop-blur-lg
              border
              border-slate-700
              rounded-3xl
              p-8
              hover:-translate-y-3
              hover:border-blue-500
              hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]
              transition-all
              duration-300
            "
          >
            <div className="text-5xl mb-5">
              {project.icon}
            </div>

            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech, i) => (
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

            {"paper" in project && (
              <a
                href={project.paper}
                target="_blank"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-blue-400
                  hover:text-blue-300
                  font-medium
                "
              >
                View Review Paper →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}