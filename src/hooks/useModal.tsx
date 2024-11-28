'use client'
import { useDisclosure } from '@nextui-org/modal'
import { type ReactNode, createContext, useContext, useState } from 'react'

const ModalContext = createContext<{
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onOpenChange: () => void
  content: ReactNode
  title: string
  setTitle: (title: string) => void
  setContent: (content: ReactNode) => void
} | null>(null)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()
  const [content, setContent] = useState<ReactNode | null>(null)
  const [title, setTitle] = useState<string>('Modal')

  return (
    <ModalContext.Provider value={{ isOpen, onOpen, onClose, onOpenChange, content, title, setTitle, setContent }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  const { isOpen, onOpen, onClose, onOpenChange, setContent, setTitle, title, content } = context || {}
  const openModal = (title: string, content: ReactNode) => {
    if (setTitle && setContent && onOpen) {
      setTitle(title)
      setContent(content)
      alert(`${title} ${content}`)
      onOpen()
    }
  }

  return { isOpen, onOpen, onClose, onOpenChange, openModal, title, content }
}
