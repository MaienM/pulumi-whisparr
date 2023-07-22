// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Profiles -->Delay Profile resource.
 * For more information refer to [Delay Profiles](https://wiki.servarr.com/whisparr/settings#delay-profiles) documentation.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as whisparr from "@maienm/pulumi-whisparr";
 *
 * const example = new whisparr.profiles.DelayProfile("example", {
 *     bypassIfHighestQuality: true,
 *     enableTorrent: true,
 *     enableUsenet: true,
 *     preferredProtocol: "torrent",
 *     tags: [
 *         1,
 *         2,
 *     ],
 *     torrentDelay: 0,
 *     usenetDelay: 0,
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import whisparr:Profiles/delayProfile:DelayProfile example 10
 * ```
 */
export class DelayProfile extends pulumi.CustomResource {
    /**
     * Get an existing DelayProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DelayProfileState, opts?: pulumi.CustomResourceOptions): DelayProfile {
        return new DelayProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'whisparr:Profiles/delayProfile:DelayProfile';

    /**
     * Returns true if the given object is an instance of DelayProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DelayProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DelayProfile.__pulumiType;
    }

    /**
     * Bypass for highest quality flag.
     */
    public readonly bypassIfHighestQuality!: pulumi.Output<boolean>;
    /**
     * Torrent allowed flag at least one of `enableUsenet` and `enableTorrent` must be defined.
     */
    public readonly enableTorrent!: pulumi.Output<boolean>;
    /**
     * Usenet allowed flag at least one of `enableUsenet` and `enableTorrent` must be defined.
     */
    public readonly enableUsenet!: pulumi.Output<boolean>;
    /**
     * Order.
     */
    public readonly order!: pulumi.Output<number>;
    /**
     * Preferred protocol.
     */
    public readonly preferredProtocol!: pulumi.Output<string>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * Torrent Delay.
     */
    public readonly torrentDelay!: pulumi.Output<number>;
    /**
     * Usenet delay.
     */
    public readonly usenetDelay!: pulumi.Output<number>;

    /**
     * Create a DelayProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DelayProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DelayProfileArgs | DelayProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DelayProfileState | undefined;
            resourceInputs["bypassIfHighestQuality"] = state ? state.bypassIfHighestQuality : undefined;
            resourceInputs["enableTorrent"] = state ? state.enableTorrent : undefined;
            resourceInputs["enableUsenet"] = state ? state.enableUsenet : undefined;
            resourceInputs["order"] = state ? state.order : undefined;
            resourceInputs["preferredProtocol"] = state ? state.preferredProtocol : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["torrentDelay"] = state ? state.torrentDelay : undefined;
            resourceInputs["usenetDelay"] = state ? state.usenetDelay : undefined;
        } else {
            const args = argsOrState as DelayProfileArgs | undefined;
            if ((!args || args.tags === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tags'");
            }
            resourceInputs["bypassIfHighestQuality"] = args ? args.bypassIfHighestQuality : undefined;
            resourceInputs["enableTorrent"] = args ? args.enableTorrent : undefined;
            resourceInputs["enableUsenet"] = args ? args.enableUsenet : undefined;
            resourceInputs["order"] = args ? args.order : undefined;
            resourceInputs["preferredProtocol"] = args ? args.preferredProtocol : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["torrentDelay"] = args ? args.torrentDelay : undefined;
            resourceInputs["usenetDelay"] = args ? args.usenetDelay : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DelayProfile.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DelayProfile resources.
 */
export interface DelayProfileState {
    /**
     * Bypass for highest quality flag.
     */
    bypassIfHighestQuality?: pulumi.Input<boolean>;
    /**
     * Torrent allowed flag at least one of `enableUsenet` and `enableTorrent` must be defined.
     */
    enableTorrent?: pulumi.Input<boolean>;
    /**
     * Usenet allowed flag at least one of `enableUsenet` and `enableTorrent` must be defined.
     */
    enableUsenet?: pulumi.Input<boolean>;
    /**
     * Order.
     */
    order?: pulumi.Input<number>;
    /**
     * Preferred protocol.
     */
    preferredProtocol?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Torrent Delay.
     */
    torrentDelay?: pulumi.Input<number>;
    /**
     * Usenet delay.
     */
    usenetDelay?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a DelayProfile resource.
 */
export interface DelayProfileArgs {
    /**
     * Bypass for highest quality flag.
     */
    bypassIfHighestQuality?: pulumi.Input<boolean>;
    /**
     * Torrent allowed flag at least one of `enableUsenet` and `enableTorrent` must be defined.
     */
    enableTorrent?: pulumi.Input<boolean>;
    /**
     * Usenet allowed flag at least one of `enableUsenet` and `enableTorrent` must be defined.
     */
    enableUsenet?: pulumi.Input<boolean>;
    /**
     * Order.
     */
    order?: pulumi.Input<number>;
    /**
     * Preferred protocol.
     */
    preferredProtocol?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Torrent Delay.
     */
    torrentDelay?: pulumi.Input<number>;
    /**
     * Usenet delay.
     */
    usenetDelay?: pulumi.Input<number>;
}
