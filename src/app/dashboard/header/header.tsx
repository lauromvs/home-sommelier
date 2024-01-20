'use client'
import { Logo, Avatar } from '@/components/icons'
import { Container, Content, StyledButton } from './header.styles'

export function Header() {
  return (
    <Container>
      <Content>
        <Logo />
        <StyledButton>
          <Avatar />
        </StyledButton>
      </Content>
    </Container>
  )
}
