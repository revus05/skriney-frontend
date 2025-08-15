/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BankAccountDTO = {
    /**
     * Bank Account UUID
     */
    uuid: string;
    /**
     * Money on the bank account
     */
    balance: number;
    /**
     * Bank Account currency
     */
    currency: 'USD' | 'EUR' | 'JPY' | 'GBP' | 'AUD' | 'CAD' | 'CHF' | 'CNY' | 'HKD' | 'NZD' | 'SEK' | 'KRW' | 'SGD' | 'NOK' | 'MXN' | 'INR' | 'RUB' | 'ZAR' | 'TRY' | 'BRL' | 'TWD' | 'DKK' | 'PLN' | 'THB' | 'MYR' | 'IDR' | 'HUF' | 'CZK' | 'ILS' | 'CLP' | 'PHP' | 'AED' | 'COP' | 'SAR' | 'RON' | 'BGN' | 'KZT' | 'BYN';
    /**
     * Bank Account title
     */
    title: string;
    /**
     * Bank Account's card color
     */
    color?: string;
    /**
     * Percent of balance change
     */
    changePercent: number;
    /**
     * Optional user's description
     */
    description?: string;
    /**
     * Optional user's image
     */
    image?: string;
    /**
     * Creation timestamp
     */
    createdAt: string;
    /**
     * Last update timestamp
     */
    updatedAt: string;
    inTotalBalance?: boolean;
};

