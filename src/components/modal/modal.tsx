'use client'
import { Button } from '@nextui-org/button'
import { ModalBody, ModalFooter, ModalHeader, Modal as NextUiModal } from '@nextui-org/modal'
import { useModal } from '@/hooks/useModal'

export default function Modal() {
  const { content, title, hasFooter = false } = useModal()
  const { i}
  const ModalContent = content || (() => <div>No content available</div>)
  return (
    <NextUiModal isOpen={true}>
      <ModalHeader>
        <h3>{title}</h3>
      </ModalHeader>
      <ModalBody>
        <ModalContent />
      </ModalBody>
      {hasFooter && (
        <ModalFooter>
          <Button variant="faded" color="danger">
            Cancelar
          </Button>
          <Button variant="faded" color="primary">
            Agregar
          </Button>
        </ModalFooter>
      )}
    </NextUiModal>
  )
}
