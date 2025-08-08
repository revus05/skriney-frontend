import { FC } from 'react'
import { Balance, Card, Icons } from 'shared/ui'

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

  const isPositive = changePercent >= 0
  const isExpenses = type === 'expenses'

  const changeIconColor =
    isPositive !== isExpenses
      ? 'fill-icon-semantic-success-primary'
      : 'fill-icon-semantic-error-primary'

  const changeTextColor =
    isPositive !== isExpenses
      ? 'text-text-semantic-success-primary'
      : 'text-text-semantic-error-primary'

  const formattedPercent =
    changePercent > 0 ? `+${changePercent}` : `${changePercent}`

  return (
    <Card className={'flex gap-4'}>
      <div className="fill-icon-neutral-tertiary">{icon}</div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <span className="text-text-neutral-tertiary">{title}</span>
          <Balance sum={sum} currency={currency} />
        </div>

        <div className="flex items-center gap-2">
          {isPositive ? (
            <Icons.trendingUp className={changeIconColor} />
          ) : (
            <Icons.trendingDown className={changeIconColor} />
          )}
          <span className={changeTextColor}>{formattedPercent}%</span>
        </div>
      </div>
    </Card>
  )
}
