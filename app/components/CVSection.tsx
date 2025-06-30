import { Download, Calendar, MapPin, Award, Briefcase, GraduationCap, FileText } from "lucide-react"

export default function CVSection() {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Freelance Projects",
      period: "2023 - Present",
      location: "Remote",
      type: "Freelance",
      description:
        "Developing cutting-edge web applications using Next.js, React, and AI-powered development tools. Successfully delivered multiple projects with database integration and optimized deployment on Vercel.",
      achievements: [
        "Built 10+ responsive web applications",
        "Reduced development time by 60% using AI tools",
        "Achieved 95+ performance scores on all projects",
      ],
    },
    {
      title: "Web Developer",
      company: "University Projects",
      period: "2022 - 2023",
      location: "University Campus",
      type: "Academic",
      description:
        "Developed various web applications as part of coursework and personal projects. Gained comprehensive expertise in frontend and backend development, database design, and modern development practices.",
      achievements: [
        "Completed 15+ academic projects",
        "Mentored 5+ junior students",
        "Maintained 3.8+ GPA in technical courses",
      ],
    },
    {
      title: "Brand Designer",
      company: "Industrial Companies",
      period: "2022 - Present",
      location: "Freelance",
      type: "Design",
      description:
        "Created professional brand identities and logos for various industrial companies, combining creative design principles with business requirements and industry standards.",
      achievements: [
        "Designed 15+ professional logos",
        "Increased client brand recognition by 35%",
        "Delivered projects 20% ahead of schedule",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University Name",
      period: "2021 - Present",
      gpa: "3.8/4.0",
      description:
        "Focusing on software development, web technologies, artificial intelligence, and modern programming practices.",
      coursework: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Systems",
        "Software Engineering",
        "AI & Machine Learning",
      ],
    },
  ]

  const certifications = [
    "Next.js Certified Developer",
    "React Professional Certificate",
    "AWS Cloud Practitioner",
    "Google Analytics Certified",
  ]

  return (
    <section id="resume" className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Resume & Experience
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            My professional journey, education, and key experiences in web development and design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 mx-auto sm:mx-0 shadow-lg hover:shadow-xl transform hover:scale-105">
              <Download size={20} />
              Download Resume (PDF)
            </button>
            <button className="bg-gray-700/50 backdrop-blur-sm text-gray-300 px-8 py-4 rounded-lg font-medium hover:bg-gray-600/50 hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto sm:mx-0 border border-gray-600/50">
              <FileText size={20} />
              View Online Resume
            </button>
          </div>
        </div>

        {/* Resume Display Area */}
        <div className="mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl" />
            <div className="relative bg-gray-800/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-700/50">
              {/* A4 proportioned resume preview - larger for better readability */}
              <div className="bg-white rounded-lg text-gray-900 aspect-[210/297] max-w-5xl mx-auto flex items-center justify-center min-h-[800px]">
                <div className="text-center p-12">
                  <FileText className="mx-auto mb-8 text-gray-400" size={80} />
                  <h3 className="text-3xl font-semibold mb-6">Resume Preview</h3>
                  <p className="text-gray-600 mb-8 text-xl">
                    Your professionally formatted resume will be displayed here
                  </p>
                  <div className="text-gray-500 max-w-lg mx-auto">
                    <p className="mb-3 text-lg">This area is optimized for A4 paper viewing</p>
                    <p className="text-base">PDF viewer integration would show the actual resume document</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div id="experience">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-white">
              <Briefcase className="text-purple-400" size={24} />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500" />
                  <div className="relative pl-12">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-2 border-gray-900" />

                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-xl blur-xl" />
                      <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                          <span
                            className={`text-xs px-2 py-1 rounded-full font-medium ${
                              exp.type === "Freelance"
                                ? "bg-purple-500/20 text-purple-300"
                                : exp.type === "Academic"
                                  ? "bg-blue-500/20 text-blue-300"
                                  : "bg-green-500/20 text-green-300"
                            }`}
                          >
                            {exp.type}
                          </span>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3 text-sm text-gray-400">
                          <span className="font-medium text-gray-300">{exp.company}</span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>

                        <div>
                          <h5 className="text-sm font-semibold text-white mb-2">Key Achievements:</h5>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-sm text-gray-400 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-white">
              <GraduationCap className="text-blue-400" size={24} />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl blur-xl" />
                  <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                    <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3 text-sm text-gray-400">
                      <span className="font-medium text-gray-300">{edu.institution}</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {edu.period}
                      </span>
                      <span className="text-blue-400 font-medium">GPA: {edu.gpa}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4">{edu.description}</p>

                    <div>
                      <h5 className="text-sm font-semibold text-white mb-2">Relevant Coursework:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs border border-blue-500/30"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Award className="text-green-400" size={20} />
                Certifications
              </h4>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-xl blur-xl" />
                <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {certifications.map((cert, certIndex) => (
                      <div key={certIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
