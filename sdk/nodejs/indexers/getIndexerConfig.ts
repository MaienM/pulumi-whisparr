// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Indexers -->Indexer Config.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as whisparr from "@pulumi/whisparr";
 *
 * const example = whisparr.Indexers.getIndexerConfig({});
 * ```
 */
export function getIndexerConfig(opts?: pulumi.InvokeOptions): Promise<GetIndexerConfigResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("whisparr:Indexers/getIndexerConfig:getIndexerConfig", {
    }, opts);
}

/**
 * A collection of values returned by getIndexerConfig.
 */
export interface GetIndexerConfigResult {
    /**
     * Allow hardcoded subs.
     */
    readonly allowHardcodedSubs: boolean;
    /**
     * Availability delay.
     */
    readonly availabilityDelay: number;
    /**
     * Delay Profile ID.
     */
    readonly id: number;
    /**
     * Maximum size.
     */
    readonly maximumSize: number;
    /**
     * Minimum age.
     */
    readonly minimumAge: number;
    /**
     * Prefer indexer flags.
     */
    readonly preferIndexerFlags: boolean;
    /**
     * Retention.
     */
    readonly retention: number;
    /**
     * RSS sync interval.
     */
    readonly rssSyncInterval: number;
    /**
     * Whitelisted hardconded subs.
     */
    readonly whitelistedHardcodedSubs: string;
}
