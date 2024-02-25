'use client'
import { QueryClient, QueryClientProvider } from 'react-query'
import Dashboard from './dashboard/dashboard'

export default function Home() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>
  )
}
