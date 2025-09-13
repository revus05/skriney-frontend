'use client'

import {
  useDeleteBankAccount,
  useGetBankAccounts,
  useUpdateBankAccount,
} from 'features/bank-accounts'
import { Balance, Button, Card, EmojiTitle, Translate, Trend } from 'shared/ui'
import { Popover, PopoverContent, PopoverTrigger } from '@heroui/react'
import { useGetChangePercent } from './model'
import { BankAccountDTO } from 'shared/api'
import { FC } from 'react'

export const BankAccountsList = () => {
  const bankAccounts = useGetBankAccounts()

  return (
    <div className={'flex gap-4'}>
      {bankAccounts.map((bankAccount) => (
        <BankAccountItem key={bankAccount.uuid} bankAccount={bankAccount} />
      ))}
    </div>
  )
}

type BankAccountItemType = {
  bankAccount: BankAccountDTO
}

const BankAccountItem: FC<BankAccountItemType> = ({ bankAccount }) => {
  const deleteBankAccount = useDeleteBankAccount()
  const updateBankAccount = useUpdateBankAccount()

  const changePercent = useGetChangePercent(bankAccount.uuid)

  return (
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
        {changePercent !== null && <Trend changePercent={changePercent} />}
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
              <Translate value={'bankAccounts.delete'} />
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </Card>
  )
}
