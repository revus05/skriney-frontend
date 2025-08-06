import { Icons, Input } from 'shared/ui'
import Link from 'next/link'

export const Header = () => {
  return (
    <header
      className={
        'bg-bg-neutral-primary/70 border-border-neutral-primary/70 flex items-center justify-between rounded-2xl border px-8 py-3'
      }
    >
      <Link href={'/'}>
        <Icons.logo />
      </Link>
      <Input
        className={'bg-bg-neutral-secondary/70 w-[394px]'}
        placeholder={'Поиск'}
        iconStart={'search'}
      />
      <div className={'flex items-center gap-2'}>
        <span className={'font-semibold'}>Максим</span>
        <div className={'size-8 rounded-full bg-gray-700'}></div>
      </div>
    </header>
  )
}
