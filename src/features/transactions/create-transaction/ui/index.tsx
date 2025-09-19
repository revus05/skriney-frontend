'use client'

import { Button, Input, Select, SelectItem, Translate } from 'shared/ui'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@heroui/react'
import {
  CreateTransactionFormData,
  useCreateTransactionForm,
  useCreateTransactionSubmit,
} from '../model'
import { Controller } from 'react-hook-form'
import { CurrencySymbols } from 'entities/user-setting'
import { useTranslation } from 'shared/i18n'
import { useGetBankAccounts } from 'entities/bank-account'
import { useGetCategories } from 'entities/category'

export const CreateTransactionButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setFocus,
  } = useCreateTransactionForm()

  const categories = useGetCategories().map((category) => ({
    key: category.uuid,
    label: category.emoji
      ? `${category.emoji} ${category.title}`
      : category.title,
  }))

  const bankAccounts = useGetBankAccounts().map((bankAccount) => ({
    key: bankAccount.uuid,
    label: bankAccount.title,
  }))

  const t = useTranslation()

  const handleOpenChange = () => {
    onOpenChange()
    reset()
    if (isOpen) {
      setFocus('amount')
    }
  }

  const onSubmit = useCreateTransactionSubmit(handleOpenChange)
  const handleSetFocus = (name: string) =>
    setFocus(name as keyof CreateTransactionFormData)

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
                <Translate value={'transactions.creation.sectionTitle'} />
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
                  {...register('amount')}
                  errorMessage={errors.amount?.message}
                  placeholder={t('transactions.creation.amount')}
                  setFocus={handleSetFocus}
                />
                <Controller
                  name="currency"
                  control={control}
                  render={({ field }) => (
                    <Select
                      label={'currency'}
                      placeholder={t('transactions.creation.currency')}
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
                <Controller
                  name="bankAccountUuid"
                  control={control}
                  render={({ field }) => (
                    <Select
                      label={'bank-account'}
                      placeholder={t('transactions.creation.bankAccount')}
                      isInvalid={!!errors.bankAccountUuid?.message}
                      errorMessage={errors.bankAccountUuid?.message}
                      value={field.value}
                      onValueChangeAction={field.onChange}
                    >
                      {bankAccounts.map((bankAccount) => (
                        <SelectItem key={bankAccount.key}>
                          {bankAccount.label}
                        </SelectItem>
                      ))}
                    </Select>
                  )}
                />
                <Controller
                  name="categoryUuid"
                  control={control}
                  render={({ field }) => (
                    <Select
                      label={'category'}
                      placeholder={t('transactions.creation.category')}
                      isInvalid={!!errors.categoryUuid?.message}
                      errorMessage={errors.categoryUuid?.message}
                      value={field.value}
                      onValueChangeAction={field.onChange}
                    >
                      {categories.map((category) => (
                        <SelectItem key={category.key}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </Select>
                  )}
                />
              </ModalBody>
              <ModalFooter className={'flex justify-center p-0'}>
                <Button type={'submit'}>
                  <Translate value={'transactions.creation.create'} />
                </Button>
              </ModalFooter>
            </form>
          </div>
        </ModalContent>
      </Modal>
    </>
  )
}
