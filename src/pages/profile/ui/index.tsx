import { withHomeLayout } from 'widgets/layouts/home'
import { ProfileHeadline } from './headline'
import { BankAccountsList } from 'widgets/bank-accounts/list'
import { Translate } from 'shared/ui'

const ProfilePage = () => {
  return (
    <div className={'flex flex-col gap-6'}>
      <ProfileHeadline />
      <div className={'flex flex-col gap-4'}>
        <h2 className={'text-[20px] font-bold'}>
          <Translate value={'profile.bankAccounts'} />
        </h2>
        <BankAccountsList />
      </div>
    </div>
  )
}

export default withHomeLayout(ProfilePage)
