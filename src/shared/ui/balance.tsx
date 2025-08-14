import { FC } from 'react'
import { cn } from 'shared/lib'

type BalanceType = {
  sum: number
  goalSum?: number
  currency: string
  withBackground?: boolean
  withColor?: boolean
  signable?: boolean
}

export const Balance: FC<BalanceType> = ({
  sum,
  goalSum,
  currency,
  withBackground,
  withColor,
  signable = false,
}) => {
  return (
    <div
      className={cn(
        withBackground &&
          'flex w-fit shrink-0 flex-nowrap rounded-md px-1 py-0.5 backdrop-blur-[32px]',
        withBackground &&
          (sum < 0
            ? 'bg-bg-semantic-error-subtle/70'
            : 'bg-bg-semantic-success-subtle/70'),
      )}
    >
      <span className={'leading-5'}>
        <span
          className={cn(
            'text-text-neutral-primary text-base leading-5 font-semibold',
            (withBackground || withColor) &&
              (sum < 0
                ? 'text-text-semantic-error-primary'
                : 'text-text-semantic-success-primary'),
          )}
        >
          {signable && sum > 0 && '+'}
          {sum.toFixed(2)}
        </span>
        {goalSum && (
          <>
            <span className="text-text-neutral-tertiary leading-5"> / </span>
            <span className="text-text-neutral-primary text-base leading-5 font-bold">
              {goalSum.toFixed(2)}
            </span>
          </>
        )}
        <span className="text-text-neutral-tertiary"> {currency}</span>
      </span>
    </div>
  )
}
