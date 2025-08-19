import { FC } from 'react'
import { cn } from 'shared/lib'

type BalanceType = {
  balance: number
  goalAmount?: number
  currency: string
  withBackground?: boolean
  withColor?: boolean
  signed?: boolean
}

export const Balance: FC<BalanceType> = ({
  balance,
  goalAmount,
  currency,
  withBackground,
  withColor,
  signed = false,
}) => {
  return (
    <div
      className={cn(
        'whitespace-nowrap',
        withBackground &&
          'flex w-fit shrink-0 flex-nowrap rounded-md px-1 py-0.5 backdrop-blur-[32px]',
        withBackground &&
          (balance < 0
            ? 'bg-bg-semantic-error-subtle/70'
            : 'bg-bg-semantic-success-subtle/70'),
      )}
    >
      <span className={'leading-5'}>
        <span
          className={cn(
            'text-text-neutral-primary text-base leading-5 font-semibold',
            (withBackground || withColor) &&
              (balance < 0
                ? 'text-text-semantic-error-primary'
                : 'text-text-semantic-success-primary'),
          )}
        >
          {signed && balance > 0 && '+'}
          {balance.toFixed(2)}
        </span>
        {goalAmount && (
          <>
            <span className="text-text-neutral-tertiary leading-5"> / </span>
            <span className="text-text-neutral-primary text-base leading-5 font-bold">
              {goalAmount.toFixed(2)}
            </span>
          </>
        )}
        <span className="text-text-neutral-tertiary"> {currency}</span>
      </span>
    </div>
  )
}
