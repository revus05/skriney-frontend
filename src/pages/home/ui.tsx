import { Header } from 'widgets/nav/header'
import { Aside } from 'widgets/nav/aside'
import { Icons } from 'shared/ui'

const HomePage = () => {
  return (
    <main>
      <Header />
      <div className="mt-8 flex gap-8">
        <Aside />
        <div className={'flex gap-4'}>
          <div
            className={
              'border-border-neutral-primary bg-bg-neutral-tertiary/70 flex h-fit gap-4 rounded-3xl border px-6 py-4 backdrop-blur-[32px]'
            }
          >
            <Icons.dollarCircle className={'fill-icon-neutral-tertiary'} />
            <div className={'flex flex-col gap-2'}>
              <div className={'flex flex-col gap-1'}>
                <span className={'text-text-neutral-tertiary'}>Баланс</span>
                <span
                  className={'text-text-neutral-primary text-base font-bold'}
                >
                  430.04{' '}
                  <span
                    className={'text-text-neutral-tertiary text-sm font-normal'}
                  >
                    BYN
                  </span>
                </span>
              </div>
              <div className={'flex items-center gap-2'}>
                <Icons.trendingUp
                  className={'fill-icon-semantic-success-primary'}
                />
                <span className={'text-text-semantic-success-primary'}>
                  +14.08%
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              'border-border-neutral-primary bg-bg-neutral-tertiary/70 flex h-fit gap-4 rounded-3xl border px-6 py-4 backdrop-blur-[32px]'
            }
          >
            <Icons.arrowBottomLeft className={'fill-icon-neutral-tertiary'} />
            <div className={'flex flex-col gap-2'}>
              <div className={'flex flex-col gap-1'}>
                <span className={'text-text-neutral-tertiary'}>Получено</span>
                <span
                  className={'text-text-neutral-primary text-base font-bold'}
                >
                  60.02{' '}
                  <span
                    className={'text-text-neutral-tertiary text-sm font-normal'}
                  >
                    BYN
                  </span>
                </span>
              </div>
              <div className={'flex items-center gap-2'}>
                <Icons.trendingDown
                  className={'fill-icon-semantic-error-primary'}
                />
                <span className={'text-text-semantic-error-primary'}>
                  -8.56%
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              'border-border-neutral-primary bg-bg-neutral-tertiary/70 flex h-fit gap-4 rounded-3xl border px-6 py-4 backdrop-blur-[32px]'
            }
          >
            <Icons.arrowTopRight className={'fill-icon-neutral-tertiary'} />
            <div className={'flex flex-col gap-2'}>
              <div className={'flex flex-col gap-1'}>
                <span className={'text-text-neutral-tertiary'}>Потрачено</span>
                <span
                  className={'text-text-neutral-primary text-base font-bold'}
                >
                  60.02{' '}
                  <span
                    className={'text-text-neutral-tertiary text-sm font-normal'}
                  >
                    BYN
                  </span>
                </span>
              </div>
              <div className={'flex items-center gap-2'}>
                <Icons.trendingDown
                  className={'fill-icon-semantic-success-primary'}
                />
                <span className={'text-text-semantic-success-primary'}>
                  -8.56%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage
