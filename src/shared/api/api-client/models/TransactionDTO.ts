/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type {BankAccountDTO} from './BankAccountDTO';
import type {CategoryDTO} from './CategoryDTO';

export type TransactionDTO = {
    /**
     * Transaction UUID
     */
    uuid: string;
    /**
     * Transaction sum
     */
    sum: number;
    /**
     * Transaction category
     */
    currency: TransactionDTO.currency;
    /**
     * Optional user description
     */
    description?: string;
    /**
     * Creation timestamp
     */
    createdAt: string;
    /**
     * Last update timestamp
     */
    updatedAt: string;
    /**
     * Connection to bank account
     */
    bankAccount: BankAccountDTO;
    /**
     * transaction category
     */
    category: CategoryDTO;
};
export namespace TransactionDTO {
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

