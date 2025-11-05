'use client'

import {
  Button,
  Input,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Select,
  SelectItem,
  Translate,
} from 'shared/ui'
import {
  CreateBankAccountFormData,
  useCreateBankAccountForm,
  useCreateBankAccountSubmit,
} from '../model'
import { CurrencySymbols } from 'entities/user-setting'
import { Controller } from 'react-hook-form'
import { useTranslation } from 'shared/i18n'
import { Modal } from 'shared/ui'
import { useDisclosure } from '@heroui/react'

export const CreateBankAccountButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setFocus,
  } = useCreateBankAccountForm()

  const handleOpenChange = () => {
    onOpenChange()
    reset()
  }

  const onSubmit = useCreateBankAccountSubmit(handleOpenChange)

  const t = useTranslation()

  const handleSetFocus = (name: string) =>
    setFocus(name as keyof CreateBankAccountFormData)

  return (
    <>
      <Button onClick={onOpen} variant={'icon'} iconStart={'plus'} />
      <Modal isOpen={isOpen} onOpenChange={handleOpenChange} hideCloseButton>
        <ModalContent
          className={'bg-bg-neutral-tertiary rounded-3xl border p-4'}
        >
          <div className={'flex flex-col gap-4'}>
            <ModalHeader className="flex items-center justify-between gap-1 p-0">
              <h2>
                <Translate value={'bankAccounts.creation.sectionTitle'} />
              </h2>
              <Button
                variant="icon"
                iconStart={'x'}
                onClick={handleOpenChange}
              />
            </ModalHeader>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={'flex flex-col gap-4'}
            >
              <ModalBody className={'p-0'}>
                <Input
                  {...register('title')}
                  errorMessage={errors.title?.message}
                  placeholder={t('bankAccounts.creation.title')}
                  setFocus={handleSetFocus}
                />
                <Input
                  {...register('balance')}
                  errorMessage={errors.balance?.message}
                  placeholder={t('bankAccounts.creation.initialBalance')}
                  setFocus={handleSetFocus}
                />
                <Controller
                  name="currency"
                  control={control}
                  render={({ field }) => (
                    <Select
                      label={'currency'}
                      placeholder={t('bankAccounts.creation.currency')}
                      isInvalid={!!errors.currency?.message}
                      errorMessage={errors.currency?.message}
                      value={field.value}
                      onValueChangeAction={field.onChange}
                    >
                      {Object.entries(CurrencySymbols).map(([key, symbol]) => (
                        <SelectItem key={key}>
                          {symbol === key ? key : `${symbol} ${key}`}
                        </SelectItem>
                      ))}
                    </Select>
                  )}
                />
              </ModalBody>
              <ModalFooter className={'flex justify-center p-0'}>
                <Button type={'submit'}>
                  <Translate value={'bankAccounts.creation.create'} />
                </Button>
              </ModalFooter>
            </form>
          </div>
        </ModalContent>
      </Modal>
    </>
  )
}
