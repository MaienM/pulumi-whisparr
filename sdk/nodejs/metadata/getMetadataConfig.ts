// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Metadata -->Metadata Config.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as whisparr from "@pulumi/whisparr";
 *
 * const example = whisparr.Metadata.getMetadataConfig({});
 * ```
 */
export function getMetadataConfig(opts?: pulumi.InvokeOptions): Promise<GetMetadataConfigResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("whisparr:Metadata/getMetadataConfig:getMetadataConfig", {
    }, opts);
}

/**
 * A collection of values returned by getMetadataConfig.
 */
export interface GetMetadataConfigResult {
    /**
     * Certification Country.
     */
    readonly certificationCountry: string;
    /**
     * Delay Profile ID.
     */
    readonly id: number;
}
