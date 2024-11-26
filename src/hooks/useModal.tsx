import { useDisclosure } from '@nextui-org/modal'
import { type ComponentType, useMemo, useState } from 'react'

type ModalProps = {
  modal: ComponentType<{}>
  title: string
  hasFooter: boolean
}

export const useModal = () => {
  const [content, setContent] = useState<ComponentType<{}>>()
  const [hasFooter, setHasfooter] = useState<boolean>(false)
  const [isOpen, setOpen] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('modal')

  const openModal = ({ modal, title, hasFooter }: ModalProps) => {
    setContent(modal)
    setTitle(title)
    setHasfooter(hasFooter)
    setOpen(true)
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  return useMemo(
    () => ({
      openModal,
      isOpen,
      content,
      title,
      hasFooter,
    }),
    [content, hasFooter, isOpen, title],
  )
}
