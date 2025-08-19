'use client'

import {
  useDeleteBankAccount,
  useGetBankAccounts,
  useUpdateBankAccount,
} from 'features/bank-accounts'
import { Balance, Button, Card, EmojiTitle, Trend } from 'shared/ui'
import { Popover, PopoverContent, PopoverTrigger } from '@heroui/react'

export const BankAccountsList = () => {
  const bankAccounts = useGetBankAccounts()

  const deleteBankAccount = useDeleteBankAccount()

  const updateBankAccount = useUpdateBankAccount()

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
              className={'bg-bg-neutral-primary rounded-2xl border p-1'}
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
