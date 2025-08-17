'use client'

import { setCategories, useGetCategoriesMutation } from 'entities/category'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/hooks'

export const useGetCategories = () => {
  const [getCategories] = useGetCategoriesMutation()
  const dispatch = useAppDispatch()
  const categories = useAppSelector((state) => state.categorySlice.categories)

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories().unwrap()
      dispatch(setCategories(response.data))
    }

    fetchCategories()
  }, [dispatch, getCategories])

  return categories
}
