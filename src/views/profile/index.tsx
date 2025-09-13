import { withHomeLayout } from 'widgets/layouts'
import { ProfileHeadline } from 'widgets/profile'
import { BankAccountsList } from 'widgets/bank-accounts'
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
