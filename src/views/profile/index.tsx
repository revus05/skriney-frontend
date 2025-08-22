import { withHomeLayout } from 'widgets/layouts'
import { ProfileHeadline } from 'widgets/profile'
import { BankAccountsList } from 'widgets/bank-accounts'

const ProfilePage = () => {
  return (
    <div className={'flex flex-col gap-6'}>
      <ProfileHeadline />
      <div className={'flex flex-col gap-4'}>
        <h2 className={'text-[20px] font-bold'}>Счета</h2>
        <BankAccountsList />
      </div>
    </div>
  )
}

export default withHomeLayout(ProfilePage)
