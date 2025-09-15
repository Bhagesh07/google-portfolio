'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, Moon, Sun } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { searchData } from '@/data/profileData'
import { useTheme } from './ThemeProvider'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<typeof searchData>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    if (query.length > 0) {
      const filtered = searchData.filter(item =>
        item.keywords.some(keyword => 
          keyword.toLowerCase().includes(query.toLowerCase())
        ) || 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      )
      setSuggestions(filtered.slice(0, 6))
      setShowSuggestions(true)
      setSelectedIndex(-1)
    } else {
      setShowSuggestions(false)
      setSuggestions([])
    }
  }, [query])

  const handleSearch = (searchQuery?: string) => {
    const finalQuery = searchQuery || query
    if (finalQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(finalQuery)}`)
    }
  }

  const handleSuggestionClick = (item: typeof searchData[0]) => {
    setQuery(item.title)
    setShowSuggestions(false)
    router.push(item.url)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (selectedIndex >= 0) {
        handleSuggestionClick(suggestions[selectedIndex])
      } else {
        handleSearch()
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false)
      setSelectedIndex(-1)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      {/* Theme Toggle */}
      <div className="absolute -top-16 right-0">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5 text-gray-600" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-500" />
          )}
        </button>
      </div>

      {/* Search Input */}
      <div className="relative">
        <div className="flex items-center w-full px-4 py-3 bg-white dark:bg-gray-800 rounded-full google-search-shadow border border-gray-200 dark:border-gray-600 focus-within:shadow-lg transition-shadow duration-200">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search Bhagesh's portfolio..."
            className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            autoComplete="off"
          />
          {query && (
            <button
              onClick={() => {
                setQuery('')
                setShowSuggestions(false)
                inputRef.current?.focus()
              }}
              className="ml-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>

        {/* Search Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden z-10 animate-slide-up">
            {suggestions.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleSuggestionClick(item)}
                className={`search-suggestion ${
                  index === selectedIndex ? 'bg-gray-100 dark:bg-gray-700' : ''
                }`}
              >
                <div className="flex items-center">
                  <Search className="w-4 h-4 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Search Buttons */}
      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={() => handleSearch()}
          className="px-6 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded border border-gray-300 dark:border-gray-600 transition-colors duration-200"
        >
          Search Portfolio
        </button>
        <button
          onClick={() => router.push('/projects')}
          className="px-6 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded border border-gray-300 dark:border-gray-600 transition-colors duration-200"
        >
          View Projects
        </button>
      </div>
    </div>
  )
}
