'use client'

import { Button, Icons, Input } from 'shared/ui'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from '@heroui/react'
import { useCreateTransactionForm, useCreateTransactionSubmit } from '../model'
import { Controller } from 'react-hook-form'
import { useGetCategories } from 'widgets/categories/list/model'
import { useGetBankAccounts } from 'features/bank-accounts/get-bank-accounts'

export const CreateTransactionButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useCreateTransactionForm()

  const onSubmit = useCreateTransactionSubmit()

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

  return (
    <>
      <Button onClick={onOpen} variant={'icon'} iconStart={'plus'} />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
        <ModalContent
          className={
            'border-border-neutral-primary bg-bg-neutral-tertiary rounded-3xl border p-4'
          }
        >
          {(onClose) => (
            <div className={'flex flex-col gap-4'}>
              <ModalHeader className="flex items-center justify-between gap-1 p-0">
                <h2>Создать транзакцию:</h2>
                <Button variant="icon" iconStart={'x'} onClick={onClose} />
              </ModalHeader>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={'flex flex-col gap-4'}
              >
                <ModalBody className={'p-0'}>
                  <Input
                    {...register('sum', { valueAsNumber: true })}
                    errorMessage={errors.sum?.message}
                    placeholder={'Сумма'}
                    step="any"
                    type={'number'}
                  />
                  <Input
                    {...register('currency')}
                    errorMessage={errors.currency?.message}
                    placeholder={'Валюта'}
                  />
                  <Controller
                    name="bankAccount"
                    control={control}
                    render={({ field }) => (
                      <Select
                        aria-label={'bank-account'}
                        classNames={{
                          trigger:
                            'hover:!bg-bg-neutral-secondary transition will-change-transform active:scale-[0.98] border-border-neutral-primary px-4 !h-9 !min-h-9 border bg-transparent cursor-pointer outline-none',
                          popoverContent: 'bg-bg-neutral-primary',
                          value: '!text-text-neutral-tertiary font-semibold',
                        }}
                        placeholder={'Счет'}
                        selectorIcon={<Icons.chevronDown />}
                        size={'sm'}
                        errorMessage={errors.bankAccount?.message}
                        selectedKeys={field.value ? [field.value] : []}
                        onSelectionChange={(keys) =>
                          field.onChange(Array.from(keys)[0] || '')
                        }
                      >
                        {bankAccounts.map((bankAccount) => (
                          <SelectItem
                            key={bankAccount.key}
                            className={'outline-none'}
                            classNames={{
                              wrapper: 'hover:bg-red-300 active:bg-red-300',
                            }}
                          >
                            {bankAccount.label}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                  />
                  <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                      <Select
                        aria-label={'category'}
                        classNames={{
                          trigger:
                            'hover:!bg-bg-neutral-secondary transition will-change-transform active:scale-[0.98] border-border-neutral-primary px-4 !h-9 !min-h-9 border bg-transparent cursor-pointer outline-none',
                          popoverContent: 'bg-bg-neutral-primary',
                          value: '!text-text-neutral-tertiary font-semibold',
                        }}
                        placeholder={'Категория'}
                        selectorIcon={<Icons.chevronDown />}
                        size={'sm'}
                        errorMessage={errors.category?.message}
                        selectedKeys={field.value ? [field.value] : []}
                        onSelectionChange={(keys) =>
                          field.onChange(Array.from(keys)[0] || '')
                        }
                      >
                        {categories.map((category) => (
                          <SelectItem
                            key={category.key}
                            className={'outline-none'}
                            classNames={{
                              wrapper: 'hover:bg-red-300 active:bg-red-300',
                            }}
                          >
                            {category.label}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                  />
                </ModalBody>
                <ModalFooter className={'flex justify-center p-0'}>
                  <Button type={'submit'} onClick={onClose}>
                    Создать
                  </Button>
                </ModalFooter>
              </form>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
