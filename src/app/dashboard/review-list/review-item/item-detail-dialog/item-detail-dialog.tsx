import React, { PropsWithChildren } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import {
  DialogOverlay,
  DialogContent,
  DialogTitle,
  IconButton,
  DeleteButton,
  Fieldset,
  Label,
  Input,
  TitleWrapper,
} from './item-detail-dialog.styles'
import { ReviewItemModel } from '@/models/ReviewItemModel'
import { useDeleteReviewItem } from '@/hooks/useDeleteReviewItem'
import { TrashIcon } from '@/components/icons/trash'

interface ItemDetailDialogProps {
  reviewItem: ReviewItemModel
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function ItemDetailDialog({
  reviewItem,
  children,
  isOpen,
  setIsOpen,
}: PropsWithChildren<ItemDetailDialogProps>) {
  const { mutate } = useDeleteReviewItem()
  const {
    id,
    category,
    name,
    grade,
    origin,
    abv,
    color,
    palate,
    nose,
    harmonization,
  } = reviewItem

  function handleDelete() {
    mutate(id)
    setIsOpen(false)
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <TitleWrapper>
            <DialogTitle>{name}</DialogTitle>
            <DeleteButton onClick={handleDelete}>
              <TrashIcon />
            </DeleteButton>
          </TitleWrapper>
          <Fieldset>
            <Label htmlFor="category">Categoria</Label>
            <Input id="category" value={category} readOnly />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="grade">Nota</Label>
            <Input id="grade" value={grade} readOnly />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="origin">Origem</Label>
            <Input id="origin" value={origin} readOnly />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="abv">Graduação Alcoólica</Label>
            <Input id="abv" value={abv} readOnly />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="color">Coloração</Label>
            <Input id="color" value={color} readOnly />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="palate">Paladar</Label>
            <Input id="palate" value={palate} readOnly />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="nose">Aroma</Label>
            <Input id="nose" value={nose} readOnly />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="harmonization">Harmonização</Label>
            <Input id="harmonization" value={harmonization} readOnly />
          </Fieldset>
          <Dialog.Close asChild>
            <IconButton aria-label="Close">
              <Cross2Icon />
            </IconButton>
          </Dialog.Close>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
