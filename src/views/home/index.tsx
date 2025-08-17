import { CategoryCard } from 'entities/category'
import { TotalBalance } from 'widgets/home'
import { GoalCard } from 'entities/goal'
import { withHomeLayout } from 'widgets/layouts'

const HomePage = () => {
  return (
    <div className={'flex flex-col gap-6'}>
      <div className={'flex gap-4'}>
        <TotalBalance
          type={'balance'}
          sum={430.04}
          currency={'BYN'}
          changePercent={14.08}
        />
        <TotalBalance
          type={'income'}
          sum={60.02}
          currency={'BYN'}
          changePercent={-8.56}
        />
        <TotalBalance
          type={'expenses'}
          sum={60.02}
          currency={'BYN'}
          changePercent={-8.56}
        />
      </div>
      <div className={'flex flex-col gap-4'}>
        <h2 className={'text-xl font-bold'}>Категории за 30 дней</h2>
        <div className={'flex gap-4'}>
          <CategoryCard
            title={'Продукты'}
            emoji={'🍎'}
            sum={430.09}
            currency={'BYN'}
          />
          <CategoryCard
            title={'Такси'}
            emoji={'🚕'}
            sum={120.93}
            currency={'BYN'}
          />
          <CategoryCard title={'Развлечения'} sum={430.09} currency={'BYN'} />
        </div>
      </div>
      <div className={'flex flex-col gap-4'}>
        <h2 className={'text-xl font-bold'}>Цели</h2>
        <div className={'flex gap-4'}>
          <GoalCard
            title={'Поездка в Италию'}
            emoji={'✈️'}
            currency={'BYN'}
            goalSum={1200}
            currentSum={602.87}
          />
          <GoalCard
            title={'PlayStation 5'}
            emoji={'🎮'}
            currency={'BYN'}
            goalSum={2000}
            currentSum={1000}
          />
          <GoalCard
            title={'iPhone 16 pro'}
            emoji={'📱'}
            currency={'BYN'}
            goalSum={3500}
            currentSum={120}
          />
        </div>
      </div>
    </div>
  )
}

export default withHomeLayout(HomePage)
