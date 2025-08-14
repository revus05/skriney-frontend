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
    currency?: CreateTransactionRequestDTO.currency;
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
export namespace CreateTransactionRequestDTO {
    /**
     * Transaction category
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

