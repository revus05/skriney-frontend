import { useGetCategoriesMutation } from 'entities/category/api'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/hooks'
import { setCategories } from 'entities/category'

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
