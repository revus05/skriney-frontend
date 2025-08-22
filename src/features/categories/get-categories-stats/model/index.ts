'use client'

import {
  setCategoriesStats,
  useGetCategoriesStatsMutation,
} from 'entities/category'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/hooks'

export const useGetCategoriesStats = () => {
  const [getCategoriesStats] = useGetCategoriesStatsMutation()
  const dispatch = useAppDispatch()
  const stats = useAppSelector((state) => state.categorySlice.stats)

  useEffect(() => {
    const fetchCategoriesStats = async () => {
      const response = await getCategoriesStats().unwrap()
      dispatch(setCategoriesStats(response.data))
    }

    void fetchCategoriesStats()
  }, [dispatch, getCategoriesStats])

  return stats
}
