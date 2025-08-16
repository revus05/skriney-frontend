/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type {UserSettingsDTO} from './UserSettingsDTO';

export type UserDTO = {
    /**
     * User UUID
     */
    uuid: string;
    /**
     * User image URL
     */
    image: string;
    /**
     * Username
     */
    username: string;
    /**
     * Email address
     */
    email: string;
    /**
     * User settings
     */
    userSettings: UserSettingsDTO;
    /**
     * Creation timestamp
     */
    createdAt: string;
    /**
     * Last update timestamp
     */
    updatedAt: string;
};

