import { FC } from 'react'

type BalanceType = {
  sum: number
  goalSum?: number
  currency: string
}

export const Balance: FC<BalanceType> = ({ sum, goalSum, currency }) => {
  return (
    <span>
      <span className="text-text-neutral-primary text-base font-bold">
        {sum}
      </span>
      {goalSum && (
        <>
          <span className="text-text-neutral-tertiary"> / </span>
          <span className="text-text-neutral-primary text-base font-bold">
            {goalSum}
          </span>
        </>
      )}
      <span className="text-text-neutral-tertiary"> {currency}</span>
    </span>
  )
}
