"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* NAVBAR */}
      <nav className="fixed w-full flex justify-between px-6 md:px-16 py-4 bg-black/80 backdrop-blur z-50">
        <h1 className="font-bold text-lg">Chandu</h1>
        <div className="hidden md:flex gap-6">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-24">

        <div className="max-w-xl">
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm <span className="text-blue-500">Chandu</span>
          </h1>

          <h2 className="text-2xl mt-4 text-gray-300">
            Java Developer & Frontend Engineer
          </h2>

          <p className="mt-6 text-gray-400">
            Passionate about building scalable applications and modern web interfaces.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="/resume.pdf" download>
              <button className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700">
                Download CV
              </button>
            </a>

            <a href="#projects">
              <button className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800">
                View Work
              </button>
            </a>
          </div>
        </div>

        <Image
          src="/profile.png"
          alt="profile"
          width={280}
          height={280}
          className="rounded-full border border-gray-700 mt-10 md:mt-0"
        />
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 md:px-16 max-w-4xl mx-auto text-center">
  
  <h2 className="text-4xl font-bold mb-6">About Me</h2>

  <p className="text-gray-400 mb-8">
    I am a pre-final year Computer Science student with strong skills in Java,
    Data Structures, and frontend development. I enjoy building real-world applications
    and solving complex problems efficiently.
  </p>

  {/* SKILLS */}
  <div className="flex flex-wrap justify-center gap-4">

    {[
      "Java",
      "Python",
      "JavaScript",
      "SQL",
      "React",
      "HTML",
      "CSS",
      "Git",
      "Machine Learning"
    ].map((skill) => (
      <span
        key={skill}
        className="px-4 py-2 bg-gray-800 rounded-full text-sm hover:bg-blue-600 transition"
      >
        {skill}
      </span>
    ))}

  </div>
  <a
  href="https://github.com/ChanduPulluru"
  target="_blank"
  className="inline-block mt-6 px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
>
  GitHub Profile
</a>
</section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 md:px-16 text-center">
        <h2 className="text-4xl font-bold mb-12">What I Do</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold">Web Development</h3>
            <p className="text-gray-400 mt-3">
              Building responsive and high-performance web applications.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold">Machine Learning</h3>
            <p className="text-gray-400 mt-3">
              Creating intelligent models for data-driven solutions.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold">UI/UX Design</h3>
            <p className="text-gray-400 mt-3">
              Designing clean and user-friendly interfaces.
            </p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 md:px-16">
  <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

  <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

    {/* PROJECT 1 */}
    <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">

      <Image
        src="/project1.png"
        alt="Fraud Detection"
        width={500}
        height={300}
        className="rounded mb-4"
      />

      <h3 className="text-2xl font-bold">
        Online Payment Fraud Detection
      </h3>

      <p className="text-gray-400 mt-3">
        Developed a machine learning-based system to identify fraudulent financial transactions
        using real-world datasets. The model analyzes transaction patterns and flags suspicious
        activities with high accuracy.
      </p>

      {/* FEATURES */}
      <ul className="text-gray-400 mt-4 list-disc list-inside space-y-1">
        <li>Implemented Logistic Regression and Random Forest models</li>
        <li>Achieved high precision using optimized data preprocessing</li>
        <li>Evaluated performance using confusion matrix and ROC curve</li>
        <li>Visualized fraud patterns using Matplotlib</li>
      </ul>

      {/* TECH STACK */}
      <p className="mt-4 text-sm text-blue-400">
        Tech: Python, Pandas, NumPy, Machine Learning
      </p>

    </div>


    {/* PROJECT 2 */}
    <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">

      <Image
        src="/project2.png"
        alt="AgriDirect"
        width={500}
        height={300}
        className="rounded mb-4"
      />

      <h3 className="text-2xl font-bold">
        AgriDirect – Farm to Consumer Platform
      </h3>

      <p className="text-gray-400 mt-3">
        Built a responsive e-commerce platform that connects farmers directly with consumers,
        eliminating middlemen and ensuring fair pricing. Focused on delivering a seamless
        shopping experience across devices.
      </p>

      {/* FEATURES */}
      <ul className="text-gray-400 mt-4 list-disc list-inside space-y-1">
        <li>Designed dynamic product listing and cart functionality</li>
        <li>Implemented real-time cart updates using JavaScript</li>
        <li>Optimized layout for mobile and desktop responsiveness</li>
        <li>Created a clean, agriculture-themed UI design</li>
      </ul>

      {/* TECH STACK */}
      <p className="mt-4 text-sm text-blue-400">
        Tech: HTML, CSS, JavaScript
      </p>

    </div>

  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="text-gray-400">chandupulluru33@gmail.com</p>
        <a
      href="https://www.linkedin.com/in/chandu-pulluru-92249728b/"
      target="_blank"
      className="block text-blue-500 hover:underline"
    >
      LinkedIn
    </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500">
        © 2026 Chandu Pulluru
      </footer>

    </main>
  );
}
