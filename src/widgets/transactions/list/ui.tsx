'use client'

import { useGetTransactions } from './model'
import { Balance, Button, Card, EmojiTitle } from 'shared/ui'
import { TransactionDTO } from 'shared/api/api-client'
import { Popover, PopoverContent, PopoverTrigger } from '@heroui/react'
import { useDeleteTransaction } from 'features/transactions/delete-transaction'

export const TransactionsList = () => {
  const transactions = useGetTransactions()

  const grouped = transactions.reduce<Record<string, TransactionDTO[]>>(
    (acc, tx) => {
      const dateKey = new Date(tx.createdAt).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
      })
      if (!acc[dateKey]) acc[dateKey] = []
      acc[dateKey].push(tx)
      return acc
    },
    {},
  )

  const deleteTransaction = useDeleteTransaction()

  return (
    <Card className={'flex flex-col gap-4 rounded-2xl p-4'}>
      {Object.entries(grouped).map(([date, txs]) => {
        const totalDayDelta = txs.reduce(
          (sum, transaction) => sum + transaction.sum,
          0,
        )

        return (
          <div key={date} className="flex flex-col gap-1">
            <div
              className={
                'border-border-neutral-primary flex items-center gap-2.5 border-b pb-1 pl-2'
              }
            >
              <span className="text-base font-bold">{date}</span>
              <span className="text-text-neutral-tertiary text-base font-bold">
                •
              </span>
              <Balance
                sum={totalDayDelta}
                currency={txs[0].currency}
                signable
                withBackground
              />
            </div>
            <div className={'flex flex-col'}>
              {txs.map((tx) => (
                <div
                  key={tx.uuid}
                  className="hover:bg-bg-neutral-primary flex cursor-pointer items-center rounded-lg py-1 pr-1 pl-2"
                >
                  <div className={'flex grow items-center'}>
                    <EmojiTitle
                      title={tx.category.title}
                      emoji={tx.category.emoji}
                      className={'w-[20%] text-sm'}
                    />
                    <div className={'w-[20%]'}>
                      <Balance
                        sum={tx.sum}
                        currency={tx.currency}
                        signable
                        withColor
                      />
                    </div>
                    <span
                      className={
                        'text-text-neutral-primary w-[30%] text-sm font-bold'
                      }
                    >
                      {tx.bankAccount.title}
                    </span>
                    <span
                      className={'text-text-neutral-primary text-sm font-bold'}
                    >
                      {tx.description}
                    </span>
                  </div>
                  <Popover placement="bottom-end">
                    <PopoverTrigger>
                      <Button variant="icon" iconStart="moreVertical" />
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
                          onClick={() => deleteTransaction({ uuid: tx.uuid })}
                        >
                          Удалить
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </Card>
  )
}
