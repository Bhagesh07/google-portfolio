import SearchBar from '@/components/SearchBar'
import { profileData } from '@/data/profileData'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Google-style Logo */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-6xl md:text-7xl font-light text-center mb-2">
          <span className="text-google-blue">B</span>
          <span className="text-google-red">h</span>
          <span className="text-google-yellow">a</span>
          <span className="text-google-blue">g</span>
          <span className="text-google-green">e</span>
          <span className="text-google-red">s</span>
          <span className="text-google-yellow">h</span>
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-lg">
          Full Stack Developer & Problem Solver
        </p>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-2xl animate-fade-in">
        <SearchBar />
      </div>

      {/* Quick Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-fade-in">
        <div className="p-4">
          <div className="text-2xl font-bold text-google-blue">228+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">LeetCode Problems</div>
        </div>
        <div className="p-4">
          <div className="text-2xl font-bold text-google-green">3</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Major Projects</div>
        </div>
        <div className="p-4">
          <div className="text-2xl font-bold text-google-red">95%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Detection Accuracy</div>
        </div>
        <div className="p-4">
          <div className="text-2xl font-bold text-google-yellow">2</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">NPTEL Certifications</div>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-12 max-w-2xl text-center animate-fade-in">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {profileData.about}
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-16">
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Try searching for &quot;skills&quot;, &quot;projects&quot;, &quot;internship&quot;, or &quot;contact&quot;
        </p>
      </footer>
    </main>
  )
}
