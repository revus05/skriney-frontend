import { FC } from 'react'
import { Balance, Card, EmojiTitle } from 'shared/ui'

type CategoryCardType = {
  emoji?: string
  title: string
  currency: string
  sum: number
}

export const CategoryCard: FC<CategoryCardType> = ({
  emoji,
  title,
  currency,
  sum,
}) => {
  return (
    <Card className={'flex flex-col gap-2'}>
      <EmojiTitle emoji={emoji} title={title} />
      <Balance sum={sum} currency={currency} />
    </Card>
  )
}
