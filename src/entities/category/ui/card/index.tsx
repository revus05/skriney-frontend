import { FC } from 'react'
import { Balance, Card, EmojiTitle } from 'shared/ui'

type CategoryCardType = {
  emoji?: string
  title: string
  currency: string
  amount: number
}

export const CategoryCard: FC<CategoryCardType> = ({
  emoji,
  title,
  currency,
  amount,
}) => {
  return (
    <Card className={'flex flex-col gap-2'}>
      <EmojiTitle emoji={emoji} title={title} />
      <Balance balance={amount} currency={currency} />
    </Card>
  )
}
