/**
 * Ferret Server API
 * API of Ferret Server
 *
 * OpenAPI spec version: 1.0.0-rc.2
 * Contact: mont.ferret@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Execution cause
 */
export type ExecutionCause = 'unknown' | 'manual' | 'schedule' | 'hook';

export const ExecutionCause = {
    Unknown: 'unknown' as ExecutionCause,
    Manual: 'manual' as ExecutionCause,
    Schedule: 'schedule' as ExecutionCause,
    Hook: 'hook' as ExecutionCause,
};
