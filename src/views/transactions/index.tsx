import { Icons } from 'shared/ui'
import { withHomeLayout } from 'widgets/layouts/home'
import { TransactionsList } from 'widgets/transactions/list'
import { CreateTransactionButton } from 'features/transactions/create-transaction'

const TransactionsPage = () => {
  return (
    <div className={'flex w-[898px] flex-col gap-6'}>
      <div className={'flex items-center justify-between'}>
        <div className={'flex items-center gap-2.5'}>
          <h2 className={'text-[32px] leading-8 font-bold'}>Транзакции</h2>
          <Icons.info />
        </div>
        <CreateTransactionButton />
      </div>
      <TransactionsList />
    </div>
  )
}

export default withHomeLayout(TransactionsPage)
