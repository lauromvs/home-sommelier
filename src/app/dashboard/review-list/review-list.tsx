'use client'
import { ReviewItem } from './review-item/review-item'
import { Container, Content } from './review-list.styles'

export function ReviewList() {
  return (
    <Container>
      <Content>
        <ReviewItem category="Whisky" grade={9.7} name="Glenlivit" />
        <ReviewItem category="Whisky" grade={9.7} name="Glenlivit" />
        <ReviewItem category="Whisky" grade={9.7} name="Glenlivit" />
        <ReviewItem category="Whisky" grade={9.7} name="Glenlivit" />
        <ReviewItem category="Whisky" grade={9.7} name="Glenlivit" />
      </Content>
    </Container>
  )
}
