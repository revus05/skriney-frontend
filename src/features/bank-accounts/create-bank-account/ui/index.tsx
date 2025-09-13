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
import { useCreateBankAccountForm, useCreateBankAccountSubmit } from '../model'
import { CurrencySymbols } from 'entities/user-settings'
import { Controller } from 'react-hook-form'
import { CreateBankAccountFormData } from 'features/bank-accounts/create-bank-account/model/schema'
import { useTranslation } from 'app/i18n'

export const CreateBankAccountButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useCreateBankAccountForm()

  const submitTransaction = useCreateBankAccountSubmit()

  const t = useTranslation()

  return (
    <>
      <Button onClick={onOpen} variant={'icon'} iconStart={'plus'} />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
        <ModalContent
          className={'bg-bg-neutral-tertiary rounded-3xl border p-4'}
        >
          {(onClose) => {
            const onSubmit = async (data: CreateBankAccountFormData) => {
              await submitTransaction(data)
              onClose()
              reset()
            }

            return (
              <div className={'flex flex-col gap-4'}>
                <ModalHeader className="flex items-center justify-between gap-1 p-0">
                  <h2>
                    <Translate value={'bankAccounts.creation.sectionTitle'} />
                  </h2>
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
                      placeholder={t('bankAccounts.creation.title')}
                    />
                    <Input
                      {...register('balance')}
                      errorMessage={errors.balance?.message}
                      placeholder={t('bankAccounts.creation.initialBalance')}
                    />
                    <Controller
                      name="currency"
                      control={control}
                      render={({ field }) => (
                        <Select
                          aria-label={'currency'}
                          classNames={{
                            mainWrapper: 'w-[130px] [&_>_div]:p-0',
                            trigger:
                              'hover:!bg-bg-neutral-secondary transition will-change-transform active:scale-[0.98] px-4 !h-9 !min-h-9 border bg-transparent cursor-pointer outline-none',
                            popoverContent: 'bg-bg-neutral-primary',
                            value: '!text-text-neutral-tertiary font-semibold',
                            errorMessage:
                              'text-text-semantic-error-primary text-sm',
                          }}
                          placeholder={t('bankAccounts.creation.currency')}
                          selectorIcon={<Icons.chevronDown />}
                          size={'sm'}
                          isInvalid={!!errors.currency?.message}
                          errorMessage={errors.currency?.message}
                          selectedKeys={field.value ? [field.value] : []}
                          onSelectionChange={(keys) =>
                            field.onChange(Array.from(keys)[0] || '')
                          }
                        >
                          {Object.entries(CurrencySymbols).map(
                            ([key, symbol]) => (
                              <SelectItem
                                key={key}
                                className={'outline-none'}
                                classNames={{
                                  wrapper: 'hover:bg-red-300 active:bg-red-300',
                                }}
                              >
                                {symbol === key ? key : `${symbol} ${key}`}
                              </SelectItem>
                            ),
                          )}
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
            )
          }}
        </ModalContent>
      </Modal>
    </>
  )
}
