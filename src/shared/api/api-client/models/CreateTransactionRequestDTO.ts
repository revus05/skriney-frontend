/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateTransactionRequestDTO = {
    /**
     * Transaction sum
     */
    sum: number;
    /**
     * Transaction category
     */
    currency?: 'USD' | 'EUR' | 'JPY' | 'GBP' | 'AUD' | 'CAD' | 'CHF' | 'CNY' | 'HKD' | 'NZD' | 'SEK' | 'KRW' | 'SGD' | 'NOK' | 'MXN' | 'INR' | 'RUB' | 'ZAR' | 'TRY' | 'BRL' | 'TWD' | 'DKK' | 'PLN' | 'THB' | 'MYR' | 'IDR' | 'HUF' | 'CZK' | 'ILS' | 'CLP' | 'PHP' | 'AED' | 'COP' | 'SAR' | 'RON' | 'BGN' | 'KZT' | 'BYN';
    /**
     * Optional user description
     */
    description?: string;
    /**
     * Bank account uuid
     */
    bankAccountUuid: string;
    /**
     * Transaction category uuid
     */
    categoryUuid: string;
};

