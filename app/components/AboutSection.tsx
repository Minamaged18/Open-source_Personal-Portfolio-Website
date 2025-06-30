import Image from "next/image"
import { Code, Database, Globe, Palette, Users, Brain, Rocket, Smartphone, Cloud, Paintbrush } from "lucide-react"

export default function AboutSection() {
  const skills = [
    { name: "Frontend Development", icon: Code, description: "React, Next.js, TypeScript, Tailwind CSS" },
    {
      name: "Backend Development",
      icon: Database,
      description: "Node.js, API Development, Database Design",
    },
    { name: "Full-Stack Projects", icon: Globe, description: "End-to-end web application development" },
    { name: "AI-Powered Development", icon: Brain, description: "V0.dev, Cursor, AI-assisted coding" },
    { name: "Content Management", icon: Palette, description: "Sanity CMS, Logo Design, Brand Identity" },
    { name: "Project Management", icon: Users, description: "Team collaboration, Problem-solving" },
    { name: "Mobile Development", icon: Smartphone, description: "React Native, Progressive Web Apps" },
    { name: "Cloud & DevOps", icon: Cloud, description: "AWS, Vercel, Docker, CI/CD Pipelines" },
    { name: "UI/UX Design", icon: Paintbrush, description: "Figma, User Experience, Interface Design" },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Passionate about creating innovative web solutions using cutting-edge technologies and AI-powered
            development tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Rocket className="text-purple-400" size={24} />
                  My Journey
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    As a dedicated computer science student, I've immersed myself in the world of modern web
                    development, transforming curiosity into expertise through hands-on projects and continuous
                    learning.
                  </p>
                  <p>
                    My specialization lies in creating dynamic, high-performance web applications using React and
                    Next.js, with a keen focus on user experience, accessibility, and modern design principles.
                  </p>
                  <p>
                    I'm particularly passionate about leveraging AI-powered development tools like V0.dev and Cursor,
                    which has given me unique insights into the future of software development and enhanced my
                    productivity significantly.
                  </p>
                  <p>
                    Beyond technical skills, I've developed expertise in content management systems and creative design,
                    having created professional brand identities and logos for various industrial companies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur-2xl opacity-30" />
              <div className="relative w-full h-full bg-gray-800 rounded-2xl p-2 border border-gray-700/50">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Professional photo of Mina"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills">
          <h3 className="text-2xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-lg mr-4">
                      <skill.icon className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                  </div>
                  <p className="text-gray-400 mb-4">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
