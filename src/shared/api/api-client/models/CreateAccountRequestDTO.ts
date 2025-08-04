/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateAccountRequestDTO = {
    /**
     * Initial account balance
     */
    balance?: number;
    /**
     * Account currency
     */
    currency?: CreateAccountRequestDTO.currency;
    /**
     * Account name
     */
    name: string;
    /**
     * Account's card colour
     */
    colour?: string;
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
export namespace CreateAccountRequestDTO {
    /**
     * Account currency
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

