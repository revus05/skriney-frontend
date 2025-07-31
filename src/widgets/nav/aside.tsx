import { Icons } from 'shared/ui'
import { createElement } from 'react'
import Link from 'next/link'

export const Aside = () => {
  const navItems = [
    {
      id: 'home',
      label: 'Главная',
      icon: 'home',
      href: '/',
    },
    {
      id: 'transaction',
      label: 'Транзакции',
      icon: 'transaction',
      href: '/transactions',
    },
    {
      id: 'graph',
      label: 'Статистика',
      icon: 'graph',
      href: '/statistics',
    },
    {
      id: 'target',
      label: 'Цели',
      icon: 'target',
      href: '/targets',
    },
    'divide',
    {
      id: 'settings',
      label: 'Настройки',
      icon: 'settings',
      href: '/settings',
    },
  ]

  return (
    <aside
      className={
        'bg-bg-neutral-primary/70 border-border-neutral-primary/70 rounded-2xl border px-4 py-2'
      }
    >
      <nav>
        <ul>
          {navItems.map((item) =>
            typeof item === 'string' ? (
              <div
                className={'bg-border-neutral-primary my-2 h-[1px]'}
                key={item}
              ></div>
            ) : (
              <li key={item.id} className={'transition active:scale-[0.98]'}>
                <Link
                  href={item.href}
                  className={
                    'hover:bg-bg-neutral-secondary group flex cursor-pointer items-center gap-4 rounded-lg px-4 py-2'
                  }
                >
                  {createElement(Icons[item.icon], {
                    className:
                      'fill-icon-neutral-tertiary group-hover:fill-icon-neutral-primary transition',
                  })}
                  <span
                    className={
                      'text-text-neutral-tertiary group-hover:text-text-neutral-primary text-base font-semibold transition select-none'
                    }
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>
    </aside>
  )
}
