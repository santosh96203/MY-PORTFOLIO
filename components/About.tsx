import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side - Profile + Floating Icons */}
        <div className="relative flex justify-center">

          {/* AI */}
          <Image
            src="/icons/ai-icon.png"
            alt="AI"
            width={80}
            height={80}
            className="absolute -top-8 left-8 float"
          />

          {/* Code */}
          <Image
            src="/icons/computer.png"
            alt="Code"
            width={80}
            height={80}
            className="absolute top-24 -left-8 float"
          />

          {/* Data */}
          <Image
            src="/icons/deep.png"
            alt="Data"
            width={80}
            height={80}
            className="absolute bottom-24 -left-8 float"
          />

          {/* Mobile */}
          <Image
            src="/icons/develop.png"
            alt="Mobile"
            width={80}
            height={80}
            className="absolute top-24 -right-8 float"
          />

          {/* Healthcare */}
          <Image
            src="/icons/health-icon.png"
            alt="Healthcare"
            width={80}
            height={80}
            className="absolute bottom-24 -right-8 float"
          />
          <Image
            src="/icons/reseach.png"
            alt="Research & Publications"
            width={65}
            height={65}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 float delay-1200"
          />

          {/* Main Profile Image */}
          <Image
            src="/images/profile2.jpg"
            alt="Santosh"
            width={420}
            height={520}
            className="
              rounded-3xl
              border
              border-blue-500/30
              shadow-[0_0_40px_rgba(59,130,246,0.3)]
            "
          />
        </div>

        {/* Right Side */}
        <div
          className="
          bg-slate-900/60
          backdrop-blur-lg
          border border-slate-700
          rounded-3xl
          p-8
          hover:border-blue-500
          hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
          transition-all duration-300
          "
        >
          <p className="text-blue-400 font-medium mb-3">
            ABOUT ME
          </p>

          <h2 className="text-5xl font-bold mb-8">
            AI Engineer & Researcher
          </h2>

          <p className="text-gray-400 leading-8 text-lg">
            Motivated M.Tech Computer Engineering student with
            expertise in Machine Learning, Deep Learning,
            Computer Vision, Full Stack Development,
            Data Science, and Artificial Intelligence.
          </p>

          <p className="text-gray-400 leading-8 text-lg mt-6">
            Passionate about building innovative AI-powered
            healthcare systems, intelligent software solutions,
            and research-driven applications that solve
            real-world problems.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10">

            <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-4">
              <h3 className="font-bold text-xl text-blue-400">
                7.41
              </h3>
              <p className="text-gray-400">
                M.Tech CGPA
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-4">
              <h3 className="font-bold text-xl text-blue-400">
                AI & ML
              </h3>
              <p className="text-gray-400">
                Specialization
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-4">
              <h3 className="font-bold text-xl text-blue-400">
                4+
              </h3>
              <p className="text-gray-400">
                Major Projects
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-4">
              <h3 className="font-bold text-xl text-blue-400">
                2026
              </h3>
              <p className="text-gray-400">
                Graduation
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}