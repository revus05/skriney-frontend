'use client'

import { Button, Input, Translate } from 'shared/ui'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@heroui/react'
import { useCreateCategoryForm, useCreateCategorySubmit } from '../model'
import { useTranslation } from 'shared/i18n'

export const CreateCategoryButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useCreateCategoryForm()

  const onSubmit = useCreateCategorySubmit(() => {
    onOpenChange()
    reset()
  })

  const t = useTranslation()

  return (
    <>
      <Button onClick={onOpen} variant={'icon'} iconStart={'plus'} />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
        <ModalContent
          className={'bg-bg-neutral-tertiary rounded-3xl border p-4'}
        >
          <div className={'flex flex-col gap-4'}>
            <ModalHeader className="flex items-center justify-between gap-1 p-0">
              <h2>
                <Translate value={'categories.creation.sectionTitle'} />
              </h2>
              <Button variant="icon" iconStart={'x'} onClick={onOpenChange} />
            </ModalHeader>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={'flex flex-col gap-4'}
            >
              <ModalBody className={'p-0'}>
                <Input
                  {...register('title')}
                  errorMessage={errors.title?.message}
                  placeholder={t('categories.creation.title')}
                />
              </ModalBody>
              <ModalFooter className={'flex justify-center p-0'}>
                <Button type={'submit'}>
                  <Translate value={'categories.creation.create'} />
                </Button>
              </ModalFooter>
            </form>
          </div>
        </ModalContent>
      </Modal>
    </>
  )
}
