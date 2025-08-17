import { Icons } from 'shared/ui'
import { withHomeLayout } from 'widgets/layouts'
import { CreateBankAccountButton } from 'features/bank-accounts'
import { BankAccountsList } from 'widgets/bank-accounts'

const BankAccountsPage = () => (
  <div className={'flex w-[560px] flex-col gap-6'}>
    <div className={'flex items-center justify-between'}>
      <div className={'flex items-center gap-2.5'}>
        <h2 className={'text-[32px] leading-8 font-bold'}>Счета</h2>
        <Icons.info />
      </div>
      <CreateBankAccountButton />
    </div>
    <BankAccountsList />
  </div>
)

export default withHomeLayout(BankAccountsPage)
