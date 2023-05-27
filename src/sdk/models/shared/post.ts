/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * post created
 */
export class Post extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "createdDate" })
    createdDate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "link" })
    link: string;

    @SpeakeasyMetadata()
    @Expose({ name: "rootDomain" })
    rootDomain: string;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title: string;
}
