import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  margin-top: 32px;
  margin-inline: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FlexContainer = styled.div`
  max-width: 1140px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ButtonCategory = styled.button<{ $selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 250px;
  height: 102px;
  flex-shrink: 0;
  background-color: #2d4a7233;
  border-radius: 8px;
  border: none;
  color: #2d4a72;

  font-size: 24px;
  font-style: normal;
  font-weight: 400;

  ${(props) =>
    props.$selected &&
    css`
      background-color: #2d4a72;
      color: #ebebd3;
      & + svg {
        color: #ebebd3;
      }
    `}
`

export { Wrapper, FlexContainer, ButtonCategory }
