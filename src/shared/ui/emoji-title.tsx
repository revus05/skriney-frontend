import { FC } from 'react'

type EmojiTitleType = {
  emoji?: string
  title: string
}

export const EmojiTitle: FC<EmojiTitleType> = ({ emoji, title }) => {
  return (
    <span className={'text-base leading-5'}>
      {emoji && <span>{emoji} </span>}
      <span className={'font-semibold'}>{title}</span>
    </span>
  )
}
