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
    currency?: CreateBankAccountRequestDTO.currency;
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
export namespace CreateBankAccountRequestDTO {
    /**
     * Bank account currency
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

