'use client'

import { Button, Icons, Input, Translate } from 'shared/ui'
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
import { useCreateTransactionForm } from '../model'
import { Controller } from 'react-hook-form'
import { CurrencySymbols } from 'entities/user-setting'
import { cn } from 'shared/lib'
import { useTranslation } from 'shared/i18n'
import { useGetBankAccounts } from 'entities/bank-account'
import { useGetCategories } from 'entities/category'
import { useCreateTransactionSubmit } from '../model'

export const CreateTransactionButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
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

  const onSubmit = useCreateTransactionSubmit(() => {
    onOpenChange()
    reset()
  })

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
                <Translate value={'transactions.creation.sectionTitle'} />
              </h2>
              <Button variant="icon" iconStart={'x'} onClick={onOpenChange} />
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
                />
                <Controller
                  name="currency"
                  control={control}
                  render={({ field }) => (
                    <Select
                      aria-label={'currency'}
                      classNames={{
                        trigger: cn(
                          'hover:!bg-bg-neutral-secondary transition will-change-transform active:scale-[0.98] px-4 !h-9 !min-h-9 border bg-transparent cursor-pointer outline-none',
                          !!errors.currency?.message &&
                            'border-border-semantic-error-primary',
                        ),
                        popoverContent: 'bg-bg-neutral-primary',
                        value: '!text-text-neutral-tertiary font-semibold',
                        errorMessage:
                          'text-text-semantic-error-primary text-sm',
                        mainWrapper: '[&_>_div]:p-0',
                      }}
                      placeholder={t('transactions.creation.currency')}
                      selectorIcon={<Icons.chevronDown />}
                      size={'sm'}
                      isInvalid={!!errors.currency?.message}
                      errorMessage={errors.currency?.message}
                      selectedKeys={field.value ? [field.value] : []}
                      onSelectionChange={(keys) =>
                        field.onChange(Array.from(keys)[0] || '')
                      }
                    >
                      {Object.entries(CurrencySymbols).map(([key, symbol]) => (
                        <SelectItem
                          key={key}
                          className={'outline-none'}
                          classNames={{
                            wrapper: 'hover:bg-red-300 active:bg-red-300',
                          }}
                        >
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
                      aria-label={'bank-account'}
                      classNames={{
                        trigger: cn(
                          'hover:!bg-bg-neutral-secondary transition will-change-transform active:scale-[0.98] px-4 !h-9 !min-h-9 border bg-transparent cursor-pointer outline-none',
                          !!errors.bankAccountUuid?.message &&
                            'border-border-semantic-error-primary text-sm',
                        ),
                        popoverContent: 'bg-bg-neutral-primary',
                        value: '!text-text-neutral-tertiary font-semibold',
                        errorMessage:
                          'text-text-semantic-error-primary text-sm',
                        mainWrapper: '[&_>_div]:p-0',
                      }}
                      placeholder={t('transactions.creation.bankAccount')}
                      selectorIcon={<Icons.chevronDown />}
                      size={'sm'}
                      isInvalid={!!errors.bankAccountUuid?.message}
                      errorMessage={errors.bankAccountUuid?.message}
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
                  name="categoryUuid"
                  control={control}
                  render={({ field }) => (
                    <Select
                      aria-label={'category'}
                      classNames={{
                        trigger: cn(
                          'hover:!bg-bg-neutral-secondary transition will-change-transform active:scale-[0.98] px-4 !h-9 !min-h-9 border bg-transparent cursor-pointer outline-none',
                          !!errors.categoryUuid?.message &&
                            'border-border-semantic-error-primary',
                        ),
                        popoverContent: 'bg-bg-neutral-primary',
                        value: '!text-text-neutral-tertiary font-semibold',
                        errorMessage:
                          'text-text-semantic-error-primary text-sm',
                        mainWrapper: '[&_>_div]:p-0',
                      }}
                      placeholder={t('transactions.creation.category')}
                      selectorIcon={<Icons.chevronDown />}
                      size={'sm'}
                      isInvalid={!!errors.categoryUuid?.message}
                      errorMessage={errors.categoryUuid?.message}
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
