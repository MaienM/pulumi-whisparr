// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Profiles -->Single Delay Profile.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as whisparr from "@pulumi/whisparr";
 *
 * const example = whisparr.Profiles.getDelayProfile({
 *     id: 1,
 * });
 * ```
 */
export function getDelayProfile(args: GetDelayProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetDelayProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("whisparr:Profiles/getDelayProfile:getDelayProfile", {
        "id": args.id,
    }, opts);
}

/**
 * A collection of arguments for invoking getDelayProfile.
 */
export interface GetDelayProfileArgs {
    /**
     * Delay Profile ID.
     */
    id: number;
}

/**
 * A collection of values returned by getDelayProfile.
 */
export interface GetDelayProfileResult {
    /**
     * Bypass for highest quality Flag.
     */
    readonly bypassIfHighestQuality: boolean;
    /**
     * Torrent allowed Flag.
     */
    readonly enableTorrent: boolean;
    /**
     * Usenet allowed Flag.
     */
    readonly enableUsenet: boolean;
    /**
     * Delay Profile ID.
     */
    readonly id: number;
    /**
     * Order.
     */
    readonly order: number;
    /**
     * Preferred protocol.
     */
    readonly preferredProtocol: string;
    /**
     * List of associated tags.
     */
    readonly tags: number[];
    /**
     * Torrent Delay.
     */
    readonly torrentDelay: number;
    /**
     * Usenet delay.
     */
    readonly usenetDelay: number;
}
/**
 * <!-- subcategory:Profiles -->Single Delay Profile.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as whisparr from "@pulumi/whisparr";
 *
 * const example = whisparr.Profiles.getDelayProfile({
 *     id: 1,
 * });
 * ```
 */
export function getDelayProfileOutput(args: GetDelayProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDelayProfileResult> {
    return pulumi.output(args).apply((a: any) => getDelayProfile(a, opts))
}

/**
 * A collection of arguments for invoking getDelayProfile.
 */
export interface GetDelayProfileOutputArgs {
    /**
     * Delay Profile ID.
     */
    id: pulumi.Input<number>;
}
