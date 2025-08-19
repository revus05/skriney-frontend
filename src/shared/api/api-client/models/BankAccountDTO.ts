/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BankAccountDTO = {
    /**
     * Bank Account uuid
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
     * Bank Account emoji
     */
    emoji: string;
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

