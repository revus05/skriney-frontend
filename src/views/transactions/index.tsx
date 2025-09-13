import { Icons, Translate } from 'shared/ui'
import { withHomeLayout } from 'widgets/layouts'
import { TransactionsList } from 'widgets/transactions'
import { CreateTransactionButton } from 'features/transactions'

const TransactionsPage = () => {
  return (
    <div className={'flex w-[898px] flex-col gap-6'}>
      <div className={'flex items-center justify-between'}>
        <div className={'flex items-center gap-2.5'}>
          <h2 className={'text-[32px] leading-8 font-bold'}>
            <Translate value={'transactions.title'} />
          </h2>
          <Icons.info />
        </div>
        <CreateTransactionButton />
      </div>
      <TransactionsList />
    </div>
  )
}

export default withHomeLayout(TransactionsPage)
