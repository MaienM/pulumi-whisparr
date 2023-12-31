// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Indexers -->Single Restriction.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as whisparr from "@pulumi/whisparr";
 *
 * const example = whisparr.Indexers.getRestriction({
 *     id: 3,
 * });
 * ```
 */
export function getRestriction(args: GetRestrictionArgs, opts?: pulumi.InvokeOptions): Promise<GetRestrictionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("whisparr:Indexers/getRestriction:getRestriction", {
        "id": args.id,
    }, opts);
}

/**
 * A collection of arguments for invoking getRestriction.
 */
export interface GetRestrictionArgs {
    /**
     * Restriction ID.
     */
    id: number;
}

/**
 * A collection of values returned by getRestriction.
 */
export interface GetRestrictionResult {
    /**
     * Restriction ID.
     */
    readonly id: number;
    /**
     * Ignored.
     */
    readonly ignored: string;
    /**
     * Required.
     */
    readonly required: string;
    /**
     * List of associated tags.
     */
    readonly tags: number[];
}
/**
 * <!-- subcategory:Indexers -->Single Restriction.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as whisparr from "@pulumi/whisparr";
 *
 * const example = whisparr.Indexers.getRestriction({
 *     id: 3,
 * });
 * ```
 */
export function getRestrictionOutput(args: GetRestrictionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRestrictionResult> {
    return pulumi.output(args).apply((a: any) => getRestriction(a, opts))
}

/**
 * A collection of arguments for invoking getRestriction.
 */
export interface GetRestrictionOutputArgs {
    /**
     * Restriction ID.
     */
    id: pulumi.Input<number>;
}
