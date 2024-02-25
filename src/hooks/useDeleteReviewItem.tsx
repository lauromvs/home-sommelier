import { api } from '@/api'
import { useMutation, useQueryClient } from 'react-query'

export function useDeleteReviewItem() {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationKey: ['delete-review'],
    mutationFn: (id: string) => api.delete(`review-item/${id}`),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['review-item'] }),
  })

  return { mutate }
}
