import React, { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import {
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  Flex,
  ButtonAddReview,
  Button,
  IconButton,
  Fieldset,
  FieldSetWrapper,
  Label,
  Input,
  Select,
} from './create-review-dialog.styles'
import { Plus } from '@/components/icons'
import { useCreateReviewItem } from '@/hooks/useCreateReviewItem'
import { ReviewItemModel } from '@/models/ReviewItemModel'

export function CreateReviewDialog() {
  const [category, setCategory] = useState('whisky')
  const [grade, setGrade] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [origin, setOrigin] = useState('')
  const [abv, setAbv] = useState('')
  const [color, setColor] = useState('')
  const [palate, setPalate] = useState('')
  const [nose, setNose] = useState('')
  const [harmonization, setHarmonization] = useState('')

  const { mutate } = useCreateReviewItem()
  function handleSave() {
    const newItem: Omit<ReviewItemModel, 'id'> = {
      category,
      name,
      grade: Number(grade),
      image,
      origin,
      abv: Number(abv),
      color,
      palate,
      nose,
      harmonization,
    }

    mutate(newItem)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonAddReview>
          <Plus />
          Adicionar nova avaliação
        </ButtonAddReview>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>Cadastrar Nova Bebida</DialogTitle>
          <DialogDescription></DialogDescription>
          <FieldSetWrapper>
            <Fieldset>
              <Label htmlFor="category">Categoria</Label>
              <Select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="whisky">Whisky</option>
                <option value="wine">Vinho</option>
                <option value="gin">Gin</option>
                <option value="beer">Cerveja</option>
              </Select>
            </Fieldset>
            <Fieldset>
              <Label htmlFor="grade">Nota</Label>
              <Input
                id="grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
              />
            </Fieldset>
          </FieldSetWrapper>
          <Fieldset>
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="image">Link da imagem</Label>
            <Input
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="origin">Origem</Label>
            <Input
              id="origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="abv">Graduação Alcoólica</Label>
            <Input
              id="abv"
              value={abv}
              onChange={(e) => setAbv(e.target.value)}
            />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="color">Coloração</Label>
            <Input
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="palate">Paladar</Label>
            <Input
              id="palate"
              value={palate}
              onChange={(e) => setPalate(e.target.value)}
            />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="nose">Aroma</Label>
            <Input
              id="nose"
              value={nose}
              onChange={(e) => setNose(e.target.value)}
            />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="harmonization">Harmonização</Label>
            <Input
              id="harmonization"
              value={harmonization}
              onChange={(e) => setHarmonization(e.target.value)}
            />
          </Fieldset>
          <Flex>
            <Dialog.Close asChild>
              <Button onClick={handleSave}>Savar</Button>
            </Dialog.Close>
          </Flex>
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
