'use client'
import { Header } from './header'
import { ReviewList } from './review-list'
import { SearchSection } from './section-search'

export default function Dashboard() {
  return (
    <>
      <Header />
      <SearchSection />
      <ReviewList />
    </>
  )
}
