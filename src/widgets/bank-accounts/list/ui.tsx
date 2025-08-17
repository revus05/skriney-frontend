'use client'

import { useGetBankAccounts } from 'features/bank-accounts/get-bank-accounts'
import { Balance, Button, Card, EmojiTitle } from 'shared/ui'
import { Trend } from 'shared/ui/trend'
import { Popover, PopoverContent, PopoverTrigger } from '@heroui/react'
import { useDeleteBankAccount } from 'features/bank-accounts/delete-bank-account'

export const BankAccountsList = () => {
  const bankAccounts = useGetBankAccounts()

  const deleteBankAccount = useDeleteBankAccount()

  return (
    <div className={'flex gap-4'}>
      {bankAccounts.map((bankAccount) => (
        <Card
          key={bankAccount.uuid}
          className={'relative flex flex-col gap-3 pr-12'}
        >
          <EmojiTitle title={bankAccount.title} />
          <div className={'flex items-center gap-2.5'}>
            <Balance
              sum={bankAccount.balance}
              currency={bankAccount.currency}
            />
            <Trend changePercent={7.62} />
          </div>

          <Popover placement="bottom-end">
            <PopoverTrigger>
              <Button
                variant={'icon'}
                iconStart={'moreVertical'}
                className={'absolute top-3.5 right-3.5'}
              />
            </PopoverTrigger>
            <PopoverContent
              className={
                'border-border-neutral-primary bg-bg-neutral-primary rounded-2xl border p-1'
              }
            >
              <div className="flex items-center gap-2.5">
                <Button
                  variant={'ghost'}
                  iconStart={'trashBin'}
                  className={
                    '[&_svg]:fill-icon-semantic-error-primary text-text-semantic-error-primary rounded-xl px-3 py-2 font-bold'
                  }
                  onClick={() => deleteBankAccount({ uuid: bankAccount.uuid })}
                >
                  Удалить
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </Card>
      ))}
    </div>
  )
}
