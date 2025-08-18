'use client'

import { useGetBalanceSummary } from 'features/balance/get-balance-summary'
import { TotalBalanceCard } from 'entities/balance/ui/card/ui'
import { CurrencySymbols } from 'entities/user-settings'

export const TotalBalance = () => {
  const balanceSummary = useGetBalanceSummary()

  return (
    <div className={'flex gap-4'}>
      <TotalBalanceCard
        type={'balance'}
        amount={balanceSummary?.totalBalance || 0}
        currency={CurrencySymbols.BYN}
        changePercent={14}
      />
      <TotalBalanceCard
        type={'income'}
        amount={balanceSummary?.totalIncome || 0}
        currency={CurrencySymbols.BYN}
        changePercent={14}
      />
      <TotalBalanceCard
        type={'expenses'}
        amount={balanceSummary?.totalExpense || 0}
        currency={CurrencySymbols.BYN}
        changePercent={14}
      />
    </div>
  )
}
