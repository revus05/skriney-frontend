import { FC } from 'react'
import { Balance, Card, EmojiTitle } from 'shared/ui'

type CategoryCardType = {
  emoji?: string
  title: string
  currency: string
  sum: number
}

export const CategoryListItem: FC<CategoryCardType> = ({
  emoji,
  title,
  currency,
  sum,
}) => {
  return (
    <Card className={'flex gap-2.5 rounded-xl px-4 py-2'}>
      <EmojiTitle emoji={emoji} title={title} />
      <span className={'text-text-neutral-tertiary text-base font-bold'}>
        •
      </span>
      <Balance sum={sum} currency={currency} />
    </Card>
  )
}
