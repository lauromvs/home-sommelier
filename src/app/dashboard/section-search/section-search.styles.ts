import styled from 'styled-components'

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

const InputSearch = styled.input`
  border-radius: 8px;
  background: #c5cbc0;
  color: #2d4a72;
  border: none;
  height: 48px;
`
const ButtonCategory = styled.button`
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
`

const ButtonAddReview = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background: #2d4a72;
  color: #ebebd3;
  padding: 16px;
  border: none;
  cursor: pointer;
  gap: 12px;
`

export { Wrapper, FlexContainer, InputSearch, ButtonAddReview, ButtonCategory }
