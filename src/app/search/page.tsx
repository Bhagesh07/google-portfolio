'use client'

import { Suspense } from 'react'
import SearchResults from '@/components/SearchResults'

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SearchResults />
    </Suspense>
  )
}
