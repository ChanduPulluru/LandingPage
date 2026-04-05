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
      <section id="about" className="py-24 px-6 md:px-16 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400">
          I am a pre-final year Computer Science student with strong skills in Java,
          Data Structures, and frontend development. I enjoy building real-world applications
          and solving complex problems efficiently.
        </p>
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

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <Image src="/project1.png" alt="fraud" width={500} height={300} className="rounded mb-4"/>
            <h3 className="text-xl font-bold">Online Payment Fraud Detection</h3>
            <p className="text-gray-400 mt-2">
              Built a machine learning model using Logistic Regression and Random Forest
              to detect fraudulent transactions with high accuracy.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <Image src="/project2.png" alt="agri" width={500} height={300} className="rounded mb-4"/>
            <h3 className="text-xl font-bold">AgriDirect E-Commerce Platform</h3>
            <p className="text-gray-400 mt-2">
              Developed a responsive platform connecting farmers with consumers
              using modern frontend technologies.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="text-gray-400">chandupulluru33@gmail.com</p>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500">
        © 2026 Chandu Pulluru
      </footer>

    </main>
  );
}
