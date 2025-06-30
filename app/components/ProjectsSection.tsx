import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Star, Code } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI-Powered Web Application",
      description:
        "A cutting-edge web application built using V0.dev and Cursor, showcasing the power of AI-assisted development. Features include intelligent database integration, real-time data processing, and seamless deployment on Vercel.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "React", "TypeScript", "V0.dev", "Cursor", "Vercel", "AI Integration"],
      liveUrl: "https://your-ai-project.vercel.app",
      githubUrl: "https://github.com/yourusername/ai-project",
      featured: true,
      role: "Full-Stack Developer & AI Integration Specialist",
      achievements: [
        "Reduced development time by 60% using AI tools",
        "Achieved 98% performance score",
        "Integrated advanced AI features",
      ],
    },
    {
      title: "Enterprise CMS Solution",
      description:
        "Professional content management system built with Sanity CMS, featuring dynamic content delivery, multi-language support, and advanced SEO optimization. Designed for scalability and performance.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Sanity CMS", "Next.js", "React", "GraphQL", "Tailwind CSS", "Vercel"],
      liveUrl: "https://your-cms-project.com",
      githubUrl: "https://github.com/yourusername/cms-project",
      featured: true,
      role: "Lead Developer & CMS Architect",
      achievements: [
        "Improved content delivery by 40%",
        "Implemented headless architecture",
        "Enhanced SEO performance",
      ],
    },
    {
      title: "Industrial Brand Identity Suite",
      description:
        "Comprehensive brand identity and logo design project for multiple industrial companies. Created cohesive visual identities that reflect professionalism and industry expertise.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy", "Logo Design", "Visual Identity"],
      liveUrl: "https://your-design-portfolio.com",
      featured: false,
      role: "Brand Designer & Creative Director",
      achievements: [
        "Designed 15+ professional logos",
        "Increased brand recognition by 35%",
        "Created comprehensive style guides",
      ],
    },
    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with advanced features including user authentication, payment processing, inventory management, and comprehensive admin dashboard.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma", "NextAuth"],
      liveUrl: "https://your-ecommerce.com",
      githubUrl: "https://github.com/yourusername/ecommerce",
      featured: false,
      role: "Full-Stack Developer",
      achievements: ["Processed $50K+ in transactions", "99.9% uptime", "Mobile-first responsive design"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-800 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web development, AI-powered tools, and
            creative design solutions.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className={`relative group ${project.featured ? "lg:scale-105" : ""}`}>
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />

              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 overflow-hidden hover:border-gray-600/50 transition-all duration-300">
                {project.featured && (
                  <div className="absolute top-6 left-6 z-10 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Star size={16} />
                    Featured Project
                  </div>
                )}

                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Project Image */}
                  <div className={`relative h-64 lg:h-96 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                  </div>

                  {/* Project Details */}
                  <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                        <Code size={16} />
                        <span>{project.role}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    {/* Achievements */}
                    {project.achievements && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-3">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-gray-400 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        View Live
                        <ExternalLink size={16} />
                      </Link>
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-700/50 backdrop-blur-sm text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-600/50 hover:text-white transition-all duration-300 flex items-center gap-2 border border-gray-600/50"
                        >
                          <Github size={16} />
                          Code
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
