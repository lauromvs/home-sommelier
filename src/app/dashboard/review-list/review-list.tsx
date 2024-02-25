'use client'
import { ReviewItem } from './review-item/review-item'
import { Container, Content } from './review-list.styles'
import { useReviewItemList } from '@/hooks/useReviewItemList'

interface ReviewListProps {
  filter: string
}

export function ReviewList({ filter }: ReviewListProps) {
  const { list } = useReviewItemList()

  const reviewList = !filter
    ? list
    : list?.filter((item) => item.category === filter)

  return (
    <Container>
      <Content>
        {reviewList?.map((item) => (
          <ReviewItem reviewItem={item} />
        ))}
      </Content>
    </Container>
  )
}
