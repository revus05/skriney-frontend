'use client'

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Translate,
} from 'shared/ui'
import {
  UpdateBankAccountFormData,
  updateBankAccountModalOpenFn,
  useUpdateBankAccountForm,
  useUpdateBankAccountSubmit,
} from '../model'
import { CurrencySymbols } from 'entities/user-setting'
import { Controller } from 'react-hook-form'
import { useTranslation } from 'shared/i18n'
import React from 'react'
import { useAppDispatch, useAppSelector } from 'shared/lib'

export const UpdateBankAccountModal = () => {
  const updateBankAccountModalOpen = useAppSelector(
    (state) => state.updateBankAccountsSlice.updateModalOpen,
  )

  const uuid = useAppSelector(
    (state) => state.updateBankAccountsSlice.bankAccountUuid,
  )

  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setFocus,
    getValues,
  } = useUpdateBankAccountForm()

  const handleClose = () => {
    dispatch(updateBankAccountModalOpenFn(false))
    reset()
  }

  const onSubmit = useUpdateBankAccountSubmit(uuid, handleClose)

  const t = useTranslation()

  const handleSetFocus = (name: string) =>
    setFocus(name as keyof UpdateBankAccountFormData)

  console.log(getValues('title'))

  return (
    <Modal
      isOpen={updateBankAccountModalOpen}
      onOpenChange={(newValue) =>
        dispatch(updateBankAccountModalOpenFn(newValue))
      }
      hideCloseButton
    >
      <ModalContent className={'bg-bg-neutral-tertiary rounded-3xl border p-4'}>
        <div className={'flex flex-col gap-4'}>
          <ModalHeader className="flex items-center justify-between gap-1 p-0">
            <h2>
              <Translate value={'bankAccounts.update.sectionTitle'} />
            </h2>
            <Button variant="icon" iconStart={'x'} onClick={handleClose} />
          </ModalHeader>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={'flex flex-col gap-4'}
          >
            <ModalBody className={'p-0'}>
              <Input
                {...register('title')}
                errorMessage={errors.title?.message}
                placeholder={t('bankAccounts.update.title')}
                setFocus={handleSetFocus}
              />
              <Controller
                name="currency"
                control={control}
                render={({ field }) => (
                  <Select
                    label={'currency'}
                    placeholder={t('bankAccounts.update.currency')}
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
                <Translate value={'bankAccounts.update.update'} />
              </Button>
            </ModalFooter>
          </form>
        </div>
      </ModalContent>
    </Modal>
  )
}
