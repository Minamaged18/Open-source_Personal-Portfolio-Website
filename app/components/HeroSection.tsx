import Image from "next/image"
import Link from "next/link"
import { ArrowDown, Download, Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-sm" />
            <div className="relative w-full h-full bg-gray-800 rounded-full p-1">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="Professional headshot of Mina"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Hey, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Mina</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mb-8">
            I'm a Student & Web Developer
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I specialize in <span className="text-blue-400 font-semibold">Front-End Development</span> with expertise in{" "}
            <span className="text-purple-400 font-semibold">React and Next.js</span>, creating responsive, interactive,
            seamless, scalable, and high-performance websites and mobile applications.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="#contact"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Contact Me here
            <Mail size={20} />
          </Link>
          <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 flex items-center gap-2 border border-white/20">
            <Download size={20} />
            Download CV
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a
            href="#projects"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110"
            aria-label="View Projects"
          >
            <ExternalLink size={20} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  )
}
