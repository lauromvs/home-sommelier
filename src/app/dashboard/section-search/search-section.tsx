import {
  Wrapper,
  FlexContainer,
  InputSearch,
  ButtonCategory,
} from './section-search.styles'
import { WhiskyIcon, WineIcon, GinIcon, BeerIcon } from '@/components/icons'
import { CreateReviewDialog } from './create-review-dialog'

export function SearchSection() {
  return (
    <>
      <Wrapper>
        <FlexContainer>
          <InputSearch />
          <CreateReviewDialog />
        </FlexContainer>
      </Wrapper>
      <Wrapper>
        <FlexContainer>
          <ButtonCategory>
            <WhiskyIcon />
            Whisky
          </ButtonCategory>
          <ButtonCategory>
            <WineIcon />
            Vinho
          </ButtonCategory>
          <ButtonCategory>
            <GinIcon />
            Gin
          </ButtonCategory>
          <ButtonCategory>
            <BeerIcon />
            Cerveja
          </ButtonCategory>
        </FlexContainer>
      </Wrapper>
    </>
  )
}
