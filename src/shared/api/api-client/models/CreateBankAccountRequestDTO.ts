/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateBankAccountRequestDTO = {
    /**
     * Initial bank account balance
     */
    balance?: number;
    /**
     * Bank account currency
     */
    currency: 'USD' | 'EUR' | 'JPY' | 'GBP' | 'AUD' | 'CAD' | 'CHF' | 'CNY' | 'HKD' | 'NZD' | 'SEK' | 'KRW' | 'SGD' | 'NOK' | 'MXN' | 'INR' | 'RUB' | 'ZAR' | 'TRY' | 'BRL' | 'TWD' | 'DKK' | 'PLN' | 'THB' | 'MYR' | 'IDR' | 'HUF' | 'CZK' | 'ILS' | 'CLP' | 'PHP' | 'AED' | 'COP' | 'SAR' | 'RON' | 'BGN' | 'KZT' | 'BYN';
    /**
     * Bank account title
     */
    title: string;
    /**
     * Bank account's card color
     */
    color?: string;
    /**
     * Optional user's description
     */
    description?: string;
    /**
     * Optional user's image
     */
    image?: string;
    inTotalBalance?: boolean;
};

