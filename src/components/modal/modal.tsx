'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { ModalBody, ModalFooter, ModalHeader, Modal, ModalContent } from '@nextui-org/modal'
import { useForm } from 'react-hook-form'
import { policieSchema } from '../schemas/policies.schema'
import type { Policy } from '@/types/policy.types'

export default function CustomModal({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Policy>({ resolver: zodResolver(policieSchema) })

  const onSubmit = (data: Policy) => {
    alert(`object ${data.object}, subject ${data.subject} , action ${data.action}`)
  }

  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" size="lg" placement="center" className="max-w-[450px]">
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalBody>
                  <Input {...register('object')} isInvalid={!!errors.object} errorMessage={errors.object?.message} />
                  <Input {...register('subject')} isInvalid={!!errors.subject} errorMessage={errors.object?.message} />
                  <Input {...register('action')} isInvalid={!!errors.action} errorMessage={errors.object?.message} />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" type="submit">
                    Action
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
