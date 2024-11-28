'use client'
import { useModal } from '@/hooks/useModal'
import { Button } from '@nextui-org/button'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal'

export default function CustomModal() {
  const { isOpen, onOpenChange, title, content } = useModal()
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" size="lg" placement="auto">
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              <p>{content}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" type="submit">
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
