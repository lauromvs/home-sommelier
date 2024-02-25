import styled from 'styled-components'

const Container = styled.button<{ $image: string }>`
  border-radius: 16px;
  position: relative;
  width: 330px;
  height: 330px;
  background-image: url(${(props) => props.$image});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #fff;
  padding: 16px;
  border: none;
`

const ReviewItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-block: 8px;
  padding-inline: 12px;

  position: absolute;
  bottom: 16px;
  right: 16px;
  border-radius: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
`

const StyledText = styled.p<{ $bold?: boolean }>`
  text-transform: capitalize;
  line-height: 24px;
  font-weight: ${(props) => (props.$bold ? 700 : 400)};
`

export { Container, ReviewItemInfo, StyledText }
