"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Playfair_Display } from "next/font/google";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import PokemonScene from "./CharacterScene";
import { Card } from "@/components/ui/card";
import { FolderCode, Laptop, Brain, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function MyProject() {
  const logosArray = [
    { id: 1, icon: <FaGithub />, href: "https:/github.com", bg: "bg-gray-600" },
    {
      id: 2,
      icon: <FaLinkedin />,
      href: "https:/linkedin.com",
      bg: "bg-blue-600",
    },
    {
      id: 3,
      icon: <FaWhatsapp />,
      href: "https:/whatsapp.com",
      bg: "bg-green-600",
    },
    { id: 4, icon: <FaEnvelope />, href: "https:/gmail.com", bg: "bg-red-600" },
  ];

  const expLogo = [
    {
      id: 1,
      icon: <FolderCode size={40} />,
      exp: "1+",
      text: "Years Experience",
      color: "#f55b0c",
    },
    {
      id: 2,
      icon: <Laptop size={40} />,
      exp: "7 -> 1",
      text: "Apps Consolidated",
      color: "#6f3894",
    },
    {
      id: 3,
      icon: <Brain size={40} />,
      exp: "200+",
      text: "Design Projects",
      color: "#38c2de",
    },
    {
      id: 4,
      icon: <Bug size={40} />,
      exp: "60%",
      text: "Overhead Reduced",
      color: "#df5429",
    },
  ];

  return (
    <main>
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center ">
        {/* Background */}
        <Image
          src="/dev123.png"
          alt="Developer workspace background"
          fill
          priority
          className="object-cover "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 " />

        {/* Hero Section */}
        <section className="relative  max-w-6xl w-full flex justify-center gap-5 items-center">
          {/* Profile Image */}
          <figure className="flex justify-center">
            <div className="relative h-48 w-48 md:h-84 md:w-64 animate-[float_5s_ease-in-out_infinite]">
              <Image
                src="/devImg.jpg"
                alt="Portrait of Muhammad Ahmad"
                fill
                className="object-cover rounded-full border-4 border-white/30 shadow-2xl hover:scale-102 transition duration-300"
              />
            </div>
          </figure>

          {/* Intro Content */}
          <header className="text-white text-center md:text-left space-y-4">
            {/* Animated Role */}
            <h1
              className={`${playfair.className} text-3xl md:text-5xl font-bold text-zinc-300`}
            >
              <TypeAnimation
                sequence={[
                  "React Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "Next.js Developer",
                  2000,
                ]}
                repeat={Infinity}
                speed={50}
              />
            </h1>

            {/* Name */}
            <p className="text-xl md:text-2xl font-semibold tracking-wide">
              Hey, I am{" "}
              <span className="text-lime-600 font-bold">Muhammad Ahmad</span>
            </p>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
              I build modern, scalable web applications using React, Next.js,
              and JavaScript. Passionate about clean UI, performance, and
              delivering real-world solutions.
            </p>

            {/* Actions */}
            <nav className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <a
                href="/M.Ahmad.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition hover:-translate-y-1"
              >
                View Resume
              </a>
              <button className="px-6 py-2 border border-white/40 hover:bg-white/10 rounded-lg transition hover:-translate-y-1">
                View Projects
              </button>
            </nav>
            <div className="flex gap-5 mt-5">
              {logosArray.map((logo) => (
                <a
                  key={logo.id}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`h-10 w-10 flex justify-center items-center rounded-full ${logo.bg} hover:scale-110 transition duration-100`}
                >
                  {logo.icon}
                </a>
              ))}
            </div>
          </header>
        </section>
      </div>
      <section className="flex flex-col justify-center items-center">
        <div>
          <PokemonScene />
        </div>
        <div className="flex gap-5 m-5">
          {/* for Cards */}
          <div className="grid grid-cols-2 gap-5 w-xl">
            {expLogo.map((exp) => (
              <Card
                key={exp.id}
                className=" bg-gray-500 items-center p-5 border-gray-400 hover:scale-105 transition duration-500"
              >
                <div style={{ color: exp.color }}>{exp.icon}</div>
                <p className="text-3xl font-bold">{exp.exp}</p>
                <p className="text-gray-400">{exp.text}</p>
              </Card>
            ))}
          </div>
          {/* for Content */}
          <div className="w-xl text-gray-400">
            <h1 className="text-5xl font-bold mb-5">Front-End Web Developer</h1>
            <p className="mb-5">
              Hey, I am Muhammad Ahmad. A junior React Developer with over 1
              year of Experience
            </p>
            <p>
              My expertise lies in building high-performance cross-platform
              applications using Clean Architecture, advanced state management
              patterns (Riverpod, Bloc, GetX), and modern development practices.
            </p>
            <div className="mt-5">
              <Button className="bg-purple-600 mr-4 rounded-full ">
                MVVM Architecture
              </Button>
              <Button className="bg-purple-600 rounded-full">
                State Management Expert
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-gray-900 text-white py-16 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        <form
          className="flex flex-col w-full max-w-md gap-4"
          action="mailto:akbutt2017@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-4 py-2 rounded-lg text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-4 py-2 rounded-lg text-black"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="px-4 py-2 rounded-lg text-black"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition"
          >
            Send
          </button>
        </form>
      </section> */}
    </main>
  );
}
