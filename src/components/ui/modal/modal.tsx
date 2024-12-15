'use client'
import { Modals } from '@/constants/modals'
import { useModal } from '@/hooks/useModal'
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal'

export default function CustomModal() {
  const { isOpen, onOpenChange, title, content } = useModal()
  const Content = Modals.get(content)
  if (!Content) return null
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
          <ModalBody>
            <Content />
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  )
}
