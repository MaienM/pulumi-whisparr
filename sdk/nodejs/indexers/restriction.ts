// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Indexers -->Restriction resource.
 * For more information refer to [Restriction](https://wiki.servarr.com/whisparr/settings#remote-path-restrictions) documentation.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as whisparr from "@maienm/pulumi-whisparr";
 *
 * const example = new whisparr.indexers.Restriction("example", {
 *     ignored: "string1",
 *     required: "string2",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import whisparr:Indexers/restriction:Restriction example 10
 * ```
 */
export class Restriction extends pulumi.CustomResource {
    /**
     * Get an existing Restriction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RestrictionState, opts?: pulumi.CustomResourceOptions): Restriction {
        return new Restriction(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'whisparr:Indexers/restriction:Restriction';

    /**
     * Returns true if the given object is an instance of Restriction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Restriction {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Restriction.__pulumiType;
    }

    /**
     * Ignored. Either one of 'required' or 'ignored' must be set.
     */
    public readonly ignored!: pulumi.Output<string>;
    /**
     * Required. Either one of 'required' or 'ignored' must be set.
     */
    public readonly required!: pulumi.Output<string>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;

    /**
     * Create a Restriction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RestrictionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RestrictionArgs | RestrictionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RestrictionState | undefined;
            resourceInputs["ignored"] = state ? state.ignored : undefined;
            resourceInputs["required"] = state ? state.required : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as RestrictionArgs | undefined;
            resourceInputs["ignored"] = args ? args.ignored : undefined;
            resourceInputs["required"] = args ? args.required : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Restriction.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Restriction resources.
 */
export interface RestrictionState {
    /**
     * Ignored. Either one of 'required' or 'ignored' must be set.
     */
    ignored?: pulumi.Input<string>;
    /**
     * Required. Either one of 'required' or 'ignored' must be set.
     */
    required?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * The set of arguments for constructing a Restriction resource.
 */
export interface RestrictionArgs {
    /**
     * Ignored. Either one of 'required' or 'ignored' must be set.
     */
    ignored?: pulumi.Input<string>;
    /**
     * Required. Either one of 'required' or 'ignored' must be set.
     */
    required?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}
