'use client'

import { TotalBalanceCard } from 'entities/balance'
import { CurrencySymbols } from 'entities/user-setting'
import { BalanceSummaryDTO, DailyBalanceDTO } from 'shared/api'
import { useGetBalanceSummary, useGetDailyBalances } from 'entities/balance'

export const TotalBalance = () => {
  const balanceSummary = useGetBalanceSummary()
  const dailyBalances = useGetDailyBalances()

  function aggregateByDate(dailyBalances: DailyBalanceDTO[]) {
    const grouped: Record<string, BalanceSummaryDTO> = {}

    dailyBalances.forEach((b, index, balances) => {
      if (!grouped[b.date]) {
        grouped[b.date] = {
          totalBalance: balances[index - 1]?.totalBalance || 0,
          totalIncome: 0,
          totalExpense: 0,
        }
      }
      grouped[b.date].totalBalance += b.totalBalance
      grouped[b.date].totalIncome += b.dailyIncome
      grouped[b.date].totalExpense += b.dailyExpenses
    })

    return Object.entries(grouped)
      .map(([date, values]) => ({ date, ...values }))
      .sort((a, b) => a.date.localeCompare(b.date))
  }

  function getChangePercent(current: number, previous: number | null) {
    if (previous === null || previous === 0) return null
    return ((current - previous) / previous) * 100
  }

  const aggregated = aggregateByDate(dailyBalances)

  const last = aggregated.at(-1)
  const prev = aggregated[0]

  const statsChange = {
    balanceChangePercent: getChangePercent(
      last?.totalBalance || 0,
      prev?.totalBalance ?? null,
    ),
    incomeChangePercent: getChangePercent(
      last?.totalIncome || 0,
      prev?.totalIncome ?? null,
    ),
    expenseChangePercent: getChangePercent(
      last?.totalExpense || 0,
      prev?.totalExpense ?? null,
    ),
  }

  return (
    <div className={'flex gap-4'}>
      <TotalBalanceCard
        type={'balance'}
        amount={balanceSummary?.totalBalance || 0}
        currency={CurrencySymbols.BYN}
        changePercent={statsChange.balanceChangePercent}
      />
      <TotalBalanceCard
        type={'income'}
        amount={balanceSummary?.totalIncome || 0}
        currency={CurrencySymbols.BYN}
        changePercent={statsChange.incomeChangePercent}
      />
      <TotalBalanceCard
        type={'expenses'}
        amount={balanceSummary?.totalExpense || 0}
        currency={CurrencySymbols.BYN}
        changePercent={statsChange.expenseChangePercent}
      />
    </div>
  )
}
