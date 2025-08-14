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
    currency: BankAccountDTO.currency;
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
export namespace BankAccountDTO {
    /**
     * Bank Account currency
     */
    export enum currency {
        USD = 'USD',
        EUR = 'EUR',
        JPY = 'JPY',
        GBP = 'GBP',
        AUD = 'AUD',
        CAD = 'CAD',
        CHF = 'CHF',
        CNY = 'CNY',
        HKD = 'HKD',
        NZD = 'NZD',
        SEK = 'SEK',
        KRW = 'KRW',
        SGD = 'SGD',
        NOK = 'NOK',
        MXN = 'MXN',
        INR = 'INR',
        RUB = 'RUB',
        ZAR = 'ZAR',
        TRY = 'TRY',
        BRL = 'BRL',
        TWD = 'TWD',
        DKK = 'DKK',
        PLN = 'PLN',
        THB = 'THB',
        MYR = 'MYR',
        IDR = 'IDR',
        HUF = 'HUF',
        CZK = 'CZK',
        ILS = 'ILS',
        CLP = 'CLP',
        PHP = 'PHP',
        AED = 'AED',
        COP = 'COP',
        SAR = 'SAR',
        RON = 'RON',
        BGN = 'BGN',
        KZT = 'KZT',
        BYN = 'BYN',
    }
}

