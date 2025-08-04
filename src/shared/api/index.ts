import axios, { AxiosError, AxiosInstance } from 'axios'

export type ApiResponse<T> = {
  status: number
  message: string
  data: T
}

export const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
})

export type BaseError = {
  status: number
  message: string
  data: unknown
}

export class ApiError extends Error {
  status: number
  message: string
  data: unknown

  constructor(response: BaseError) {
    super(response.message || 'An error occurred')
    this.status = response.status
    this.message = response.message
    this.data = response.data || null
  }
}

export const handleApiError = (error: unknown): ApiError => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<BaseError>
    if (axiosError.response && axiosError.response.data) {
      return new ApiError(axiosError.response.data)
    }
  }
  return new ApiError({
    status: 500,
    message:
      error instanceof Error ? error.message : 'Произошла неизвестная ошибка',
    data: null,
  })
}
