import { api } from '@/api'
import { ReviewItemModel } from '@/models/ReviewItemModel'
import { useQuery } from 'react-query'

export function useReviewItemList() {
  const { data } = useQuery({
    queryKey: ['review-item'],
    queryFn: () => api.get<ReviewItemModel[]>('review-item'),
  })

  return { list: data?.data }
}
