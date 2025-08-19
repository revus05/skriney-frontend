'use client'

import { Button, Input } from 'shared/ui'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@heroui/react'
import { useCreateCategoryForm, useCreateCategorySubmit } from '../model'
import { CreateCategoryFormData } from '../model/schema'

export const CreateCategoryButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useCreateCategoryForm()

  const submitTransaction = useCreateCategorySubmit()

  return (
    <>
      <Button onClick={onOpen} variant={'icon'} iconStart={'plus'} />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
        <ModalContent
          className={'bg-bg-neutral-tertiary rounded-3xl border p-4'}
        >
          {(onClose) => {
            const onSubmit = async (data: CreateCategoryFormData) => {
              await submitTransaction(data)
              onClose()
              reset()
            }

            return (
              <div className={'flex flex-col gap-4'}>
                <ModalHeader className="flex items-center justify-between gap-1 p-0">
                  <h2>Создать категорию:</h2>
                  <Button variant="icon" iconStart={'x'} onClick={onClose} />
                </ModalHeader>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={'flex flex-col gap-4'}
                >
                  <ModalBody className={'p-0'}>
                    <Input
                      {...register('title')}
                      errorMessage={errors.title?.message}
                      placeholder={'Название'}
                    />
                  </ModalBody>
                  <ModalFooter className={'flex justify-center p-0'}>
                    <Button type={'submit'}>Создать</Button>
                  </ModalFooter>
                </form>
              </div>
            )
          }}
        </ModalContent>
      </Modal>
    </>
  )
}
