import styled from 'styled-components'

const Container = styled.div`
  margin-top: 32px;
  margin-inline: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  max-width: 1140px;
  width: 100%;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`

export { Container, Content }
