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
          <p className="text-blue-400 font-medium mb-3">
            ABOUT ME
          </p>

          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-8">
            AI Engineer & Researcher
          </h2>

          <p className="text-slate-700 dark:text-slate-300 leading-8 text-lg">
            Motivated M.Tech Computer Engineering student with
            expertise in Machine Learning, Deep Learning,
            Computer Vision, Full Stack Development,
            Data Science, and Artificial Intelligence.
          </p>

          <p className="text-slate-700 dark:text-slate-300 leading-8 text-lg mt-6">
            Passionate about building innovative AI-powered
            healthcare systems, intelligent software solutions,
            and research-driven applications that solve
            real-world problems.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10">

  <div className="
    bg-slate-50
    dark:bg-slate-900/60
    border
    border-slate-200
    dark:border-slate-700
    rounded-2xl
    p-4
  ">
    <h3 className="font-bold text-xl text-blue-600 dark:text-blue-400">
      🎓 2026
    </h3>
    <p className="text-slate-600 dark:text-slate-400">
      Graduated 
    </p>
  </div>

  <div className="
    bg-slate-50
    dark:bg-slate-900/60
    border
    border-slate-200
    dark:border-slate-700
    rounded-2xl
    p-4
  ">
    <h3 className="font-bold text-xl text-blue-600 dark:text-blue-400">
      📄 1
    </h3>
    <p className="text-slate-600 dark:text-slate-400">
      Publication
    </p>
  </div>

  <div className="
    bg-slate-50
    dark:bg-slate-900/60
    border
    border-slate-200
    dark:border-slate-700
    rounded-2xl
    p-4
  ">
    <h3 className="font-bold text-xl text-blue-600 dark:text-blue-400">
      💼 3
    </h3>
    <p className="text-slate-600 dark:text-slate-400">
      Internships
    </p>
  </div>

  <div className="
    bg-slate-50
    dark:bg-slate-900/60
    border
    border-slate-200
    dark:border-slate-700
    rounded-2xl
    p-4
  ">
    <h3 className="font-bold text-xl text-blue-600 dark:text-blue-400">
      🚀 4+
    </h3>
    <p className="text-slate-600 dark:text-slate-400">
      Projects
    </p>
  </div>

</div>
        </div>

      </div>
    </section>
  );
}