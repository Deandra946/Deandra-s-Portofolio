import { Code, Palette, Database, Smartphone, Globe, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Vue.js", level: 70 }
    ]
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "REST APIs", level: 90 }
    ]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 80 },
      { name: "Flutter", level: 65 },
      { name: "iOS Development", level: 60 },
      { name: "Android", level: 65 },
      { name: "Cross-Platform", level: 85 }
    ]
  },
  {
    title: "Design & UI/UX",
    icon: Palette,
    skills: [
      { name: "Figma", level: 90 },
      { name: "Adobe Creative Suite", level: 75 },
      { name: "Prototyping", level: 85 },
      { name: "User Research", level: 70 },
      { name: "Design Systems", level: 80 }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: Globe,
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Vercel", level: 90 },
      { name: "CI/CD", level: 75 }
    ]
  },
  {
    title: "Soft Skills",
    icon: Zap,
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Team Leadership", level: 80 },
      { name: "Communication", level: 85 },
      { name: "Project Management", level: 75 },
      { name: "Mentoring", level: 70 }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-xl mr-4">
                  <category.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies I Love */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Technologies I Love Working With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", 
              "PostgreSQL", "MongoDB", "Firebase", "Vercel", "Figma", 
              "React Native", "Docker", "AWS", "GraphQL", "Prisma"
            ].map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}