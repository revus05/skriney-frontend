'use client'

import { Balance, Button, Card, EmojiTitle, Translate, Trend } from 'shared/ui'
import { Popover, PopoverContent, PopoverTrigger } from '@heroui/react'
import { getChangePercent } from './lib'
import {
  useDeleteBankAccount,
  useGetBankAccounts,
  useUpdateBankAccount,
} from 'entities/bank-account'
import { useGetDailyBalances } from 'entities/balance'
import {
  UpdateBankAccountModal,
  updateBankAccountModalOpenFn,
} from 'features/bank-accounts/update-bank-account'
import { useAppDispatch, useAppSelector } from 'shared/lib'
import { useState } from 'react'
import { updateBankAccountUuid } from 'features/bank-accounts/update-bank-account/model/slice'

export const BankAccountsList = () => {
  const dispatch = useAppDispatch()

  const bankAccountUuid = useAppSelector(
    (state) => state.updateBankAccountsSlice.bankAccountUuid,
  )

  const [updateUuid, setUpdateUuid] = useState<string>('')
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false)

  const bankAccounts = useGetBankAccounts()

  const deleteBankAccount = useDeleteBankAccount()
  const updateBankAccount = useUpdateBankAccount()

  const dailyBalances = useGetDailyBalances()

  const handleEditClicked = (uuid: string) => {
    dispatch(updateBankAccountModalOpenFn(true))
    dispatch(updateBankAccountUuid(uuid))
    setUpdateUuid(uuid)
    setPopoverOpen(false)
  }

  const handleDelete = (uuid: string) => {
    void deleteBankAccount({ uuid })
  }

  return (
    <div className={'flex gap-4'}>
      {bankAccounts.map((bankAccount) => (
        <Card
          key={bankAccount.uuid}
          className={'relative flex flex-col gap-3 pr-12'}
        >
          <EmojiTitle
            title={bankAccount.title}
            emoji={bankAccount.emoji}
            onEmojiChange={(emoji) =>
              updateBankAccount(bankAccount.uuid, { emoji })
            }
            onTitleChange={(title) =>
              updateBankAccount(bankAccount.uuid, { title })
            }
          />
          <div className={'flex items-center gap-2.5'}>
            <Balance
              balance={bankAccount.balance}
              currency={bankAccount.currency}
            />
            {
              <Trend
                changePercent={getChangePercent(
                  dailyBalances,
                  bankAccount.uuid,
                )}
              />
            }
          </div>

          <Popover
            placement="bottom-end"
            isOpen={popoverOpen}
            onOpenChange={setPopoverOpen}
          >
            <PopoverTrigger>
              <Button
                variant={'icon'}
                iconStart={'moreVertical'}
                className={'absolute top-3.5 right-3.5'}
              />
            </PopoverTrigger>
            <PopoverContent
              className={
                'bg-bg-neutral-primary items-start rounded-2xl border p-1'
              }
            >
              <Button
                variant={'ghost'}
                iconStart={'edit'}
                onClick={() => handleEditClicked(bankAccount.uuid)}
                className={
                  'text-text-neutral-tertiary w-full rounded-xl px-3 py-2 font-bold'
                }
              >
                Редактировать
              </Button>
              <Button
                variant={'ghost'}
                iconStart={'trashBin'}
                className={
                  '[&_svg]:fill-icon-semantic-error-primary text-text-semantic-error-primary w-full rounded-xl px-3 py-2 font-bold'
                }
                onClick={() => handleDelete(bankAccount.uuid)}
              >
                <Translate value={'bankAccounts.delete'} />
              </Button>
            </PopoverContent>
          </Popover>
        </Card>
      ))}

      <UpdateBankAccountModal />
    </div>
  )
}
