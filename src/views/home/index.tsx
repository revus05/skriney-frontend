import { CategoryCard } from 'entities/category'
import { TotalBalance } from 'widgets/home'
import { GoalCard } from 'entities/goal'
import { withHomeLayout } from 'widgets/layouts'

const HomePage = () => {
  return (
    <div className={'flex flex-col gap-6'}>
      <TotalBalance />
      <div className={'flex flex-col gap-4'}>
        <h2 className={'text-xl font-bold'}>Категории за 30 дней</h2>
        <div className={'flex gap-4'}>
          <CategoryCard
            title={'Продукты'}
            emoji={'🍎'}
            amount={430.09}
            currency={'BYN'}
          />
          <CategoryCard
            title={'Такси'}
            emoji={'🚕'}
            amount={120.93}
            currency={'BYN'}
          />
          <CategoryCard
            title={'Развлечения'}
            amount={430.09}
            currency={'BYN'}
          />
        </div>
      </div>
      <div className={'flex flex-col gap-4'}>
        <h2 className={'text-xl font-bold'}>Цели</h2>
        <div className={'flex gap-4'}>
          <GoalCard
            title={'Поездка в Италию'}
            emoji={'✈️'}
            currency={'BYN'}
            goalAmount={1200}
            currentAmount={602.87}
          />
          <GoalCard
            title={'PlayStation 5'}
            emoji={'🎮'}
            currency={'BYN'}
            goalAmount={2000}
            currentAmount={1000}
          />
          <GoalCard
            title={'iPhone 16 pro'}
            emoji={'📱'}
            currency={'BYN'}
            goalAmount={3500}
            currentAmount={120}
          />
        </div>
      </div>
    </div>
  )
}

export default withHomeLayout(HomePage)
