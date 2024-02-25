import { ReviewItemInfo, Container, StyledText } from './review-item.styles'
import { ItemDetailDialog } from './item-detail-dialog'
import { useState } from 'react'
import { ReviewItemModel } from '@/models/ReviewItemModel'

interface ReviewItemProps {
  reviewItem: ReviewItemModel
}

export function ReviewItem({ reviewItem }: ReviewItemProps) {
  const { category, name, grade } = reviewItem
  const [isOpen, setIsOpen] = useState(false)

  const imageMap: { [key: string]: string } = {
    whisky:
      'https://media.istockphoto.com/id/494485669/photo/whiskey-bottle.jpg?s=612x612&w=0&k=20&c=N2JWckWtGedUALfU-5sPSMh8Lo2tIp33FGw4O6aLbOQ=',
    wine: 'https://www.princewinestore.com.au/media/catalog/product/placeholder/default/placeholder-2.png',
    gin: 'https://media.istockphoto.com/id/1310472003/photo/bottle-of-transparent-glass-with-gin-tequila-rum-or-vodka-isolated-on-pure-white-background.jpg?s=612x612&w=0&k=20&c=7THYNd_CKybjbzd0XVB88kq-uUb9R7covK8FVUiAVnA=',
    beer: 'https://cdn11.bigcommerce.com/s-ngmedl3wse/images/stencil/640w/products/12924/20070/AC-330PK-278-AM12_1__43207.1.jpg',
  }

  function getImage() {
    if (reviewItem.image) return reviewItem.image

    return imageMap[reviewItem.category]
  }
  return (
    <ItemDetailDialog
      reviewItem={reviewItem}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <Container $image={getImage()} onClick={() => setIsOpen(true)}>
        <ReviewItemInfo>
          <StyledText $bold>{name}</StyledText>
          <StyledText>{category}</StyledText>
          <StyledText>Nota: {grade}</StyledText>
        </ReviewItemInfo>
      </Container>
    </ItemDetailDialog>
  )
}
