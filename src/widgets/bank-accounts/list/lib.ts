'use client'

import { DailyBalanceDTO } from 'shared/api'

export const getChangePercent = (
  dailyBalances: DailyBalanceDTO[],
  bankAccountUuid: string,
) => {
  const accountBalances = dailyBalances
    .filter((b) => b.bankAccountUuid === bankAccountUuid)
    .sort((a, b) => a.date.localeCompare(b.date))

  const last = accountBalances.at(-1)
  const prev = getPrevious(accountBalances)

  if (!last || !prev || !last.bankAccountUuid || !prev.totalBalance) {
    return 0
  }

  return ((last.totalBalance - prev.totalBalance) / prev.totalBalance) * 100
}

const getPrevious = (
  accountBalances: DailyBalanceDTO[],
): DailyBalanceDTO | null => {
  if (accountBalances.length === 1 || accountBalances.length === 0) {
    return null
  }

  if (accountBalances.length > 30) {
    return accountBalances[accountBalances.length - 30]
  }

  return accountBalances[0]
}
