import Link from 'next/link'
import { ArrowLeft, Building, Calendar, Target, Award, Code } from 'lucide-react'
import { profileData } from '@/data/profileData'

export const metadata = {
  title: 'Internship Experience - Bhagesh Chavan',
  description: 'Software Development Intern at Jindal Steel - Real-time Coil Detection & Counting System',
}

export default function InternshipPage() {
  const { internship } = profileData

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
              Internship Experience
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Company Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6">
            <Building className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {internship.company}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
            {internship.title}
          </p>
          <div className="flex items-center justify-center text-gray-500 dark:text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{internship.duration}</span>
          </div>
        </div>

        {/* Project Overview */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 mb-12 animate-fade-in">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Target className="w-6 h-6 mr-3 text-blue-600" />
            Project Overview
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {internship.description}
          </p>
        </div>

        {/* Key Achievements */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Award className="w-6 h-6 mr-3 text-green-600" />
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internship.achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 dark:text-green-400 font-semibold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Code className="w-6 h-6 mr-3 text-purple-600" />
            Technologies & Tools
          </h3>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-3">
              {internship.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              95%
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Detection Accuracy
            </div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              96%
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Counting Accuracy
            </div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              25 fps
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Real-time Processing
            </div>
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Learning Outcomes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technical Skills</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Computer Vision with YOLOv8</li>
                <li>• Real-time image processing</li>
                <li>• Performance optimization</li>
                <li>• Industrial automation systems</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Professional Skills</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Industrial project management</li>
                <li>• Cross-functional collaboration</li>
                <li>• Problem-solving in production</li>
                <li>• Quality assurance processes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Want to know more?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            I&apos;d love to discuss my internship experience and how it shaped my approach to software development.
          </p>
          <div className="space-x-4">
            <Link
              href="/projects"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Projects
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
