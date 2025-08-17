import { FC } from 'react'
import { Balance, Card, Icons } from 'shared/ui'
import { Trend } from 'shared/ui/trend'

type TotalBalanceType = {
  type: 'balance' | 'income' | 'expenses'
  sum: number
  currency: string
  changePercent: number
}

const TYPE_CONFIG = {
  balance: {
    icon: <Icons.dollarCircle />,
    title: 'Баланс',
  },
  income: {
    icon: <Icons.arrowBottomLeft />,
    title: 'Получено',
  },
  expenses: {
    icon: <Icons.arrowTopRight />,
    title: 'Потрачено',
  },
} as const

export const TotalBalance: FC<TotalBalanceType> = ({
  type,
  sum,
  currency,
  changePercent,
}) => {
  const { icon, title } = TYPE_CONFIG[type]

  return (
    <Card className={'flex gap-4'}>
      <div className="fill-icon-neutral-tertiary">{icon}</div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <span className="text-text-neutral-tertiary">{title}</span>
          <Balance sum={sum} currency={currency} />
        </div>

        <Trend changePercent={changePercent} expense={type === 'expenses'} />
      </div>
    </Card>
  )
}
