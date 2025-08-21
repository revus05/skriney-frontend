'use client'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/hooks'
import { setDailyBalances, useGetDailyBalancesMutation } from 'entities/balance'

export const useGetDailyBalances = () => {
  const [getDailyBalances] = useGetDailyBalancesMutation()
  const dispatch = useAppDispatch()
  const dailyBalances = useAppSelector(
    (state) => state.dailyBalanceSlice.dailyBalances,
  )

  useEffect(() => {
    const fetchDailyBalances = async () => {
      const response = await getDailyBalances().unwrap()
      dispatch(setDailyBalances(response.data))
    }

    fetchDailyBalances()
  }, [dispatch, getDailyBalances])

  return dailyBalances
}
