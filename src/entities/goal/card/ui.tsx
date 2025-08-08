import { Balance, Card, EmojiTitle, Progress } from 'shared/ui'
import { FC } from 'react'

type GoalCardType = {
  emoji?: string
  title: string
  currentSum: number
  goalSum: number
  currency: string
}

export const GoalCard: FC<GoalCardType> = ({
  emoji,
  title,
  currentSum,
  goalSum,
  currency,
}) => {
  const percentCompleted = (currentSum * 100) / goalSum
  return (
    <Card className={'flex flex-col gap-4'}>
      <EmojiTitle emoji={emoji} title={title} />
      <div className={'flex flex-col gap-2'}>
        <div className={'flex items-center justify-between'}>
          <Balance sum={currentSum} goalSum={goalSum} currency={currency} />
          <span className="text-text-neutral-primary font-bold">
            {percentCompleted.toFixed(2)}
            <span className="text-text-neutral-tertiary">%</span>
          </span>
        </div>
        <Progress
          value={(currentSum * 100) / goalSum}
          className={'min-w-[256px]'}
        />
      </div>
    </Card>
  )
}
