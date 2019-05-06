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
 * Represents script execution settings like query and params
 */
export interface ScriptExecution {
    query: string;
    params?: { [key: string]: any };
}
