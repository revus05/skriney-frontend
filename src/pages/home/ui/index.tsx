import { TotalBalance } from './total-balance'
import { CategoriesHome } from './categories'
import { withHomeLayout } from 'widgets/layouts/home'
import { Translate } from 'shared/ui'
import { GoalCard } from 'entities/goal/card'
import { HandleSignIn } from 'pages/home/ui/handle-sign-in'

const HomePage = () => {
  return (
    <>
      <div className={'flex flex-col gap-6'}>
        <TotalBalance />
        <CategoriesHome />
        <div className={'flex flex-col gap-4'}>
          <h2 className={'text-xl font-bold'}>
            <Translate value={'home.goals.title'} />
          </h2>
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
      <HandleSignIn />
    </>
  )
}

export default withHomeLayout(HomePage)
