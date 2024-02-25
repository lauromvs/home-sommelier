import * as Dialog from '@radix-ui/react-dialog'
import styled, { keyframes } from 'styled-components'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translateX(50%)' },
  '100%': { opacity: 1, transform: 'translateX(0%)' },
})

const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms linear;
`

const DialogContent = styled(Dialog.Content)`
  background-color: white;
  border-radius: 8px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 16px;
  right: 16px;
  width: 90vw;
  max-width: 450px;
  height: 97vh;
  padding: 25px;
  animation: ${contentShow} 150ms linear;
  &:focus {
    outline: none;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 16px;
`

const DialogTitle = styled(Dialog.Title)`
  margin: 0;
  font-weight: 700;
  font-size: 17;
`

const IconButton = styled.button`
  all: unset;
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 10px;
  &:hover {
    background-color: #2d4a7233;
  }
`

const Fieldset = styled.fieldset`
  all: unset;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  margin-bottom: 16px;
`
const Label = styled.label`
  font-size: 16px;
  color: #19304f;
  text-align: right;
  font-weight: 500;
`

const Input = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 8px;
  padding-block: 4px;
  height: 40px;
  background: #c5cbc0;
  color: #2d4a72;
  border-radius: 8px;
  border: none;
  outline: none;
`

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  color: #2d4a72;
`

export {
  DialogOverlay,
  DialogContent,
  TitleWrapper,
  DialogTitle,
  IconButton,
  Fieldset,
  Label,
  Input,
  DeleteButton,
}
