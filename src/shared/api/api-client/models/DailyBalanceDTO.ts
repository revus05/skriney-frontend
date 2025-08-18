/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DailyBalanceDTO = {
    /**
     * Daily balance uuid
     */
    uuid: string;
    /**
     * Day date
     */
    date: string;
    /**
     * Total balance for this day
     */
    totalBalance: number;
    /**
     * Total daily balance change
     */
    dailyChange: number;
    /**
     * Total daily income
     */
    dailyIncome: number;
    /**
     * Total daily expenses
     */
    dailyExpenses: number;
    /**
     * Bank account uuid
     */
    bankAccountUuid: string;
};

