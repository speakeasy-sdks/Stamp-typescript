/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Refresh Sucessful
 */
export class RefreshTokenResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "jwt" })
    jwt: string;
}
