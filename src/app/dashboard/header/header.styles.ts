import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 140px;
  background-color: #19304f;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  margin-inline: 32px;
  color: #fff;
`

const StyledButton = styled.button`
  background-color: #cbbe77;
  border-radius: 50%;
  height: 68px;
  width: 68px;
`

export { Container, Content, StyledButton }
