'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Search, ArrowLeft, ExternalLink } from 'lucide-react'
import { searchData, profileData } from '@/data/profileData'
import { useTheme } from './ThemeProvider'

interface SearchResult {
  id: string
  title: string
  description: string
  url: string
  category: string
  snippet: string
}

export default function SearchResults() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { toggleTheme, theme } = useTheme()
  const query = searchParams.get('q') || ''
  const [results, setResults] = useState<SearchResult[]>([])
  const [searchQuery, setSearchQuery] = useState(query)

  const performSearch = (searchTerm: string) => {
    const lowerQuery = searchTerm.toLowerCase()
    
    const searchResults: SearchResult[] = []

    searchData.forEach(item => {
      const relevanceScore = calculateRelevance(item, lowerQuery)
      if (relevanceScore > 0) {
        searchResults.push({
          ...item,
          snippet: generateSnippet(item, lowerQuery)
        })
      }
    })

    if (lowerQuery.includes('skill') || lowerQuery.includes('tech') || lowerQuery.includes('programming')) {
      const allSkills = [
        ...profileData.skills.programmingLanguages,
        ...profileData.skills.frontend,
        ...profileData.skills.backend,
        ...profileData.skills.databases,
        ...profileData.skills.devopsCloud,
        ...profileData.skills.tools,
        ...profileData.skills.concepts
      ]
      
      const matchingSkills = allSkills.filter(skill => 
        skill.toLowerCase().includes(lowerQuery) || 
        lowerQuery.includes(skill.toLowerCase())
      )

      if (matchingSkills.length > 0) {
        searchResults.unshift({
          id: 'skills-match',
          title: `Skills: ${matchingSkills.slice(0, 3).join(', ')}${matchingSkills.length > 3 ? '...' : ''}`,
          description: `Found ${matchingSkills.length} matching skills`,
          url: '/skills',
          category: 'Skills',
          snippet: `Matching skills include: ${matchingSkills.join(', ')}`
        })
      }
    }

    profileData.projects.forEach(project => {
      if (project.title.toLowerCase().includes(lowerQuery) ||
          project.description.toLowerCase().includes(lowerQuery) ||
          project.technologies.some(tech => tech.toLowerCase().includes(lowerQuery))) {
        searchResults.push({
          id: `project-${project.title.toLowerCase().replace(/\s+/g, '-')}`,
          title: project.title,
          description: project.description,
          url: '/projects',
          category: 'Projects',
          snippet: `Technologies: ${project.technologies.join(', ')}`
        })
      }
    })

    setResults(searchResults.slice(0, 10))
  }

  useEffect(() => {
    if (query) {
      performSearch(query)
    }
  }, [query, performSearch])   // ✅ Added performSearch to dependency array

  const calculateRelevance = (item: any, query: string): number => {
    let score = 0
    if (item.title.toLowerCase().includes(query)) score += 10
    const matchingKeywords = item.keywords?.filter((keyword: string) => 
      keyword.toLowerCase().includes(query) || query.includes(keyword.toLowerCase())
    ) || []
    score += matchingKeywords.length * 5
    if (item.description?.toLowerCase().includes(query)) score += 3
    return score
  }

  const generateSnippet = (item: any, query: string): string => {
    const description = item.description || ''
    const queryIndex = description.toLowerCase().indexOf(query)
    
    if (queryIndex !== -1) {
      const start = Math.max(0, queryIndex - 50)
      const end = Math.min(description.length, queryIndex + query.length + 50)
      let snippet = description.substring(start, end)
      
      if (start > 0) snippet = '...' + snippet
      if (end < description.length) snippet = snippet + '...'
      
      return snippet
    }
    
    return description.substring(0, 150) + (description.length > 150 ? '...' : '')
  }

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-6">
            <Link 
              href="/"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </Link>

            <Link href="/" className="text-2xl font-light">
              <span className="text-google-blue">B</span>
              <span className="text-google-red">h</span>
              <span className="text-google-yellow">a</span>
              <span className="text-google-blue">g</span>
              <span className="text-google-green">e</span>
              <span className="text-google-red">s</span>
              <span className="text-google-yellow">h</span>
            </Link>

            <div className="flex-1 max-w-2xl">
              <div className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-600 focus-within:shadow-md transition-shadow">
                <Search className="w-4 h-4 text-gray-400 mr-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white"
                  placeholder="Search..."
                />
              </div>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            About {results.length} results for &quot;{query}&quot;  {/* ✅ Fixed by escaping quotes */}
          </p>
        </div>

        <div className="space-y-6">
          {results.length > 0 ? (
            results.map((result, index) => (
              <div key={result.id} className="result-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center text-sm text-green-700 dark:text-green-400 mb-1">
                      <span>bhageshchavan.dev</span>
                      <span className="mx-1">›</span>
                      <span>{result.category}</span>
                    </div>

                    <Link 
                      href={result.url}
                      className="block text-xl text-blue-600 dark:text-blue-400 hover:underline mb-2 font-medium"
                    >
                      {result.title}
                    </Link>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                      {result.snippet}
                    </p>

                    <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">
                      {result.category}
                    </span>
                  </div>

                  <Link 
                    href={result.url}
                    className="ml-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                No results found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try searching for &quot;skills&quot;, &quot;projects&quot;, &quot;internship&quot;, or &quot;contact&quot;  {/* ✅ Fixed here too */}
              </p>
              <Link 
                href="/"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          )}
        </div>

        {results.length > 0 && (
          <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="font-medium text-gray-900 dark:text-white mb-4">
              Related searches
            </h3>
            <div className="flex flex-wrap gap-2">
              {['skills', 'projects', 'internship', 'achievements', 'contact'].map(term => (
                <Link
                  key={term}
                  href={`/search?q=${term}`}
                  className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors border border-gray-200 dark:border-gray-600"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
