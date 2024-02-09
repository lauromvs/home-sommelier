import { HeartIcon } from '@/components/icons'
import { ReviewItemInfo, Container, ReviewItemLike } from './review-item.styles'

interface ReviewItemProps {
  category: string
  name: string
  grade: number
  isLiked?: boolean
}

export function ReviewItem({
  category,
  name,
  grade,
  isLiked,
}: ReviewItemProps) {
  return (
    <Container>
      <ReviewItemInfo>
        <p>{category}</p>
        <p>{name}</p>
        <p>Nota:</p>
        <p>{grade}</p>
      </ReviewItemInfo>
      <ReviewItemLike $invert={isLiked}>
        <HeartIcon invert={isLiked} />
      </ReviewItemLike>
    </Container>
  )
}
