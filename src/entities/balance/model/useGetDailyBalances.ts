'use client'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/lib'
import { useGetDailyBalancesMutation } from '../api'
import { setDailyBalances } from '../model'

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

    void fetchDailyBalances()
  }, [dispatch, getDailyBalances])

  return dailyBalances
}
