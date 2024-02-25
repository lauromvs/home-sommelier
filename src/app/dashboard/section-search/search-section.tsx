import { Wrapper, FlexContainer, ButtonCategory } from './section-search.styles'
import { WhiskyIcon, WineIcon, GinIcon, BeerIcon } from '@/components/icons'
import { CreateReviewDialog } from './create-review-dialog'

interface SearchSectionProps {
  filter: string
  setFilter: (filter: string) => void
}

export function SearchSection({ filter, setFilter }: SearchSectionProps) {
  function handleSelect(category: string) {
    if (category === filter) {
      return setFilter('')
    }
    setFilter(category)
  }

  return (
    <>
      <Wrapper>
        <FlexContainer>
          <CreateReviewDialog />
        </FlexContainer>
      </Wrapper>
      <Wrapper>
        <FlexContainer>
          <ButtonCategory
            onClick={() => handleSelect('whisky')}
            $selected={filter === 'whisky'}
          >
            <WhiskyIcon />
            Whisky
          </ButtonCategory>
          <ButtonCategory
            onClick={() => handleSelect('wine')}
            $selected={filter === 'wine'}
          >
            <WineIcon />
            Vinho
          </ButtonCategory>
          <ButtonCategory
            onClick={() => handleSelect('gin')}
            $selected={filter === 'gin'}
          >
            <GinIcon />
            Gin
          </ButtonCategory>
          <ButtonCategory
            onClick={() => handleSelect('beer')}
            $selected={filter === 'beer'}
          >
            <BeerIcon />
            Cerveja
          </ButtonCategory>
        </FlexContainer>
      </Wrapper>
    </>
  )
}
