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
  /* transform: translate(-50%, -50%); */
  width: 90vw;
  max-width: 450px;
  height: 97vh;
  padding: 25px;
  animation: ${contentShow} 150ms linear;
  &:focus {
    outline: none;
  }
`

const DialogTitle = styled(Dialog.Title)`
  margin: 0;
  font-weight: 500;
  /* color: mauve.mauve12; */
  font-size: 17;
`

const DialogDescription = styled(Dialog.Description)`
  margin: 10px 0 20px;
  font-size: 15px;
  line-height: 1.5;
`

const Flex = styled.div`
  display: flex;
  margin-top: 25px;
  gap: 16px;
  justify-content: flex-end;
`

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1px;
  font-weight: 500px;
  height: 35px;
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

const IconButton = styled.button`
  all: unset;
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* color: violet.violet11; */
  position: absolute;
  top: 10px;
  right: 10px;
  &:hover {
    background-color: violet;
  }
  &:focus {
    box-shadow: 0 0 0 2px violet;
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

  &:focus {
    box-shadow: 0 0 0 2px #19304f;
  }
`

const Select = styled.select`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4;
  padding-inline: 8px;
  padding-block: 4px;
  color: violet;
  height: 40px;
  background: #c5cbc0;
  color: #2d4a72;
  border-radius: 8px;
  border: none;

  &:focus {
    box-shadow: 0 0 0 2px #19304f;
  }
`
export {
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  Flex,
  ButtonAddReview,
  Button,
  IconButton,
  Fieldset,
  Label,
  Input,
  Select,
}
