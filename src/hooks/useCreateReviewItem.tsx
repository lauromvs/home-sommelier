import { api } from '@/api'
import { ReviewItemModel } from '@/models/ReviewItemModel'
import { useMutation, useQueryClient } from 'react-query'

export function useCreateReviewItem() {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationKey: ['create-review'],
    mutationFn: (item: Omit<ReviewItemModel, 'id'>) =>
      api.post('review-item', item),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['review-item'] }),
  })

  return { mutate }
}
