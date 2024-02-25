'use client'
import { useState } from 'react'
import { Header } from './header'
import { ReviewList } from './review-list'
import { SearchSection } from './section-search'

export default function Dashboard() {
  const [filter, setFilter] = useState('')

  return (
    <>
      <Header />
      <SearchSection filter={filter} setFilter={setFilter} />
      <ReviewList filter={filter} />
    </>
  )
}
