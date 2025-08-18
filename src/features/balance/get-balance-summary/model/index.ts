'use client'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/hooks'
import {
  setBalanceSummary,
  useGetBalanceSummaryMutation,
} from 'entities/balance'

export const useGetBalanceSummary = () => {
  const [getBalanceSummary] = useGetBalanceSummaryMutation()
  const dispatch = useAppDispatch()
  const balanceSummary = useAppSelector(
    (state) => state.dailyBalanceSlice.summary,
  )

  useEffect(() => {
    const fetchBalanceSummary = async () => {
      const response = await getBalanceSummary().unwrap()
      dispatch(setBalanceSummary(response.data))
    }

    fetchBalanceSummary()
  }, [dispatch, getBalanceSummary])

  return balanceSummary
}
