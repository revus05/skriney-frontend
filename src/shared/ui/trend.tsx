import { Icons } from 'shared/ui/icons'
import { FC } from 'react'

type TrendType = {
  expense?: boolean
  changePercent: number
}

export const Trend: FC<TrendType> = ({ changePercent, expense = false }) => {
  const formattedPercent =
    changePercent > 0
      ? `+${changePercent.toFixed(2)}`
      : `${changePercent.toFixed(2)}`

  const isPositive = changePercent >= 0

  const changeIconColor =
    isPositive !== expense
      ? 'fill-icon-semantic-success-primary'
      : 'fill-icon-semantic-error-primary'

  const changeTextColor =
    isPositive !== expense
      ? 'text-text-semantic-success-primary'
      : 'text-text-semantic-error-primary'

  return (
    <div className="flex items-center gap-2">
      {isPositive ? (
        <Icons.trendingUp className={changeIconColor} />
      ) : (
        <Icons.trendingDown className={changeIconColor} />
      )}
      <span className={changeTextColor}>{formattedPercent}%</span>
    </div>
  )
}
