import {
  Wrapper,
  FlexContainer,
  InputSearch,
  ButtonAddReview,
  ButtonCategory,
} from './section-search.styles'
import { Plus } from '@/components/icons/plus'
import { WhiskyIcon, WineIcon, GinIcon, BeerIcon } from '@/components/icons'

export function SearchSection() {
  return (
    <>
      <Wrapper>
        <FlexContainer>
          <InputSearch />
          <ButtonAddReview>
            <Plus />
            Adicionar nova avaliação
          </ButtonAddReview>
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
