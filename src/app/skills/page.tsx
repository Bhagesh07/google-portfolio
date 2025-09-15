import Link from 'next/link'
import { ArrowLeft, Code, Database, Cloud, Wrench, Brain } from 'lucide-react'
import { profileData } from '@/data/profileData'

export const metadata = {
  title: 'Skills & Technologies - Bhagesh Chavan',
  description: 'Programming languages, frameworks, databases, and technical concepts I work with',
}

export default function SkillsPage() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: profileData.skills.programmingLanguages,
      color: 'blue'
    },
    {
      title: 'Frontend Technologies',
      icon: <Code className="w-6 h-6" />,
      skills: profileData.skills.frontend,
      color: 'green'
    },
    {
      title: 'Backend Technologies',
      icon: <Database className="w-6 h-6" />,
      skills: profileData.skills.backend,
      color: 'purple'
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: profileData.skills.databases,
      color: 'red'
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud className="w-6 h-6" />,
      skills: profileData.skills.devopsCloud,
      color: 'yellow'
    },
    {
      title: 'Tools & Frameworks',
      icon: <Wrench className="w-6 h-6" />,
      skills: profileData.skills.tools,
      color: 'indigo'
    },
    {
      title: 'Concepts & Methodologies',
      icon: <Brain className="w-6 h-6" />,
      skills: profileData.skills.concepts,
      color: 'pink'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
      green: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
      purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
      red: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
      yellow: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
      indigo: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800',
      pink: 'bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link 
              href="/"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </Link>
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Skills & Technologies
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of the programming languages, frameworks, databases, 
            and technologies I use to build impactful software solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`p-6 rounded-xl border-2 ${getColorClasses(category.color)} animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg bg-white dark:bg-gray-800 mr-3`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              15+
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              Programming Languages & Frameworks
            </div>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              10+
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              Development Tools & Platforms
            </div>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              7+
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              Core Computer Science Concepts
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Ready to collaborate?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Let&apos;s build something amazing together using these technologies.
          </p>
          <div className="space-x-4">
            <Link
              href="/projects"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
