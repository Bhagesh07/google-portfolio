import Link from 'next/link'
import { ArrowLeft, Award, Code2, Trophy, ExternalLink } from 'lucide-react'
import { profileData } from '@/data/profileData'

export const metadata = {
  title: 'Achievements & Certifications - Bhagesh Chavan',
  description: 'NPTEL certifications, LeetCode progress, and hackathon achievements',
}

export default function AchievementsPage() {
  const { achievements } = profileData

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
              Achievements & Certifications
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="mb-12 text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-6">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of certifications, coding achievements, and hackathon participation 
            that demonstrate my commitment to continuous learning and excellence.
          </p>
        </div>

        {/* Certifications Section */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-blue-600" />
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {cert}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      National Programme on Technology Enhanced Learning
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coding Achievements */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
            <Code2 className="w-6 h-6 mr-3 text-green-600" />
            Coding Excellence
          </h3>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl border border-green-200 dark:border-green-800">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  LeetCode Problem Solving
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {achievements.coding}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">228+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Problems Solved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Java</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Primary Language</div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <a
                  href={profileData.contact.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  View Profile
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hackathons */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
            <Trophy className="w-6 h-6 mr-3 text-purple-600" />
            Hackathon Participation
          </h3>
          <div className="space-y-6">
            {achievements.hackathons.map((hackathon, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4">
                    <Trophy className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {hackathon}
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full">
                        YOLOv8
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full">
                        OpenCV
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full">
                        Computer Vision
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full">
                        Healthcare AI
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {achievements.certifications.length}
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              NPTEL Certifications
            </div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              228+
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              LeetCode Problems
            </div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {achievements.hackathons.length}
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              Hackathon Projects
            </div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-xl">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
              2024
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              Active Year
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Let's connect and grow together
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            I'm always looking for new challenges and opportunities to learn and contribute.
          </p>
          <div className="space-x-4">
            <a
              href={profileData.contact.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              View LeetCode Profile
            </a>
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
