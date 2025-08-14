'use client'

import { useGetTransactions } from './model'
import { Balance, Button, Card, EmojiTitle } from 'shared/ui'
import { TransactionDTO } from 'shared/api/api-client'

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
                  <Button variant={'icon'} iconStart={'moreVertical'} />
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </Card>
  )
}
