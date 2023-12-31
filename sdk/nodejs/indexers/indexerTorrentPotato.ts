// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Indexers -->Indexer TorrentPotato resource.
 * For more information refer to [Indexer](https://wiki.servarr.com/whisparr/settings#indexers) and [TorrentPotato](https://wiki.servarr.com/whisparr/supported#torrentpotato).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as whisparr from "@maienm/pulumi-whisparr";
 *
 * const example = new whisparr.indexers.IndexerTorrentPotato("example", {
 *     baseUrl: "http://127.0.0.1",
 *     enableAutomaticSearch: true,
 *     minimumSeeders: 1,
 *     name: "Example",
 *     passkey: "Key",
 *     user: "User",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import whisparr:Indexers/indexerTorrentPotato:IndexerTorrentPotato example 1
 * ```
 */
export class IndexerTorrentPotato extends pulumi.CustomResource {
    /**
     * Get an existing IndexerTorrentPotato resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IndexerTorrentPotatoState, opts?: pulumi.CustomResourceOptions): IndexerTorrentPotato {
        return new IndexerTorrentPotato(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'whisparr:Indexers/indexerTorrentPotato:IndexerTorrentPotato';

    /**
     * Returns true if the given object is an instance of IndexerTorrentPotato.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IndexerTorrentPotato {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IndexerTorrentPotato.__pulumiType;
    }

    /**
     * Base URL.
     */
    public readonly baseUrl!: pulumi.Output<string>;
    /**
     * Download client ID.
     */
    public readonly downloadClientId!: pulumi.Output<number>;
    /**
     * Enable automatic search flag.
     */
    public readonly enableAutomaticSearch!: pulumi.Output<boolean>;
    /**
     * Enable interactive search flag.
     */
    public readonly enableInteractiveSearch!: pulumi.Output<boolean>;
    /**
     * Enable RSS flag.
     */
    public readonly enableRss!: pulumi.Output<boolean>;
    /**
     * Minimum seeders.
     */
    public readonly minimumSeeders!: pulumi.Output<number>;
    /**
     * Languages list.
     */
    public readonly multiLanguages!: pulumi.Output<number[]>;
    /**
     * IndexerTorrentPotato name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Passkey.
     */
    public readonly passkey!: pulumi.Output<string>;
    /**
     * Priority.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * Flag list.
     */
    public readonly requiredFlags!: pulumi.Output<number[]>;
    /**
     * Seed ratio.
     */
    public readonly seedRatio!: pulumi.Output<number>;
    /**
     * Seed time.
     */
    public readonly seedTime!: pulumi.Output<number>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * User.
     */
    public readonly user!: pulumi.Output<string>;

    /**
     * Create a IndexerTorrentPotato resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IndexerTorrentPotatoArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IndexerTorrentPotatoArgs | IndexerTorrentPotatoState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IndexerTorrentPotatoState | undefined;
            resourceInputs["baseUrl"] = state ? state.baseUrl : undefined;
            resourceInputs["downloadClientId"] = state ? state.downloadClientId : undefined;
            resourceInputs["enableAutomaticSearch"] = state ? state.enableAutomaticSearch : undefined;
            resourceInputs["enableInteractiveSearch"] = state ? state.enableInteractiveSearch : undefined;
            resourceInputs["enableRss"] = state ? state.enableRss : undefined;
            resourceInputs["minimumSeeders"] = state ? state.minimumSeeders : undefined;
            resourceInputs["multiLanguages"] = state ? state.multiLanguages : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["passkey"] = state ? state.passkey : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["requiredFlags"] = state ? state.requiredFlags : undefined;
            resourceInputs["seedRatio"] = state ? state.seedRatio : undefined;
            resourceInputs["seedTime"] = state ? state.seedTime : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
        } else {
            const args = argsOrState as IndexerTorrentPotatoArgs | undefined;
            if ((!args || args.baseUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'baseUrl'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            resourceInputs["baseUrl"] = args ? args.baseUrl : undefined;
            resourceInputs["downloadClientId"] = args ? args.downloadClientId : undefined;
            resourceInputs["enableAutomaticSearch"] = args ? args.enableAutomaticSearch : undefined;
            resourceInputs["enableInteractiveSearch"] = args ? args.enableInteractiveSearch : undefined;
            resourceInputs["enableRss"] = args ? args.enableRss : undefined;
            resourceInputs["minimumSeeders"] = args ? args.minimumSeeders : undefined;
            resourceInputs["multiLanguages"] = args ? args.multiLanguages : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["passkey"] = args?.passkey ? pulumi.secret(args.passkey) : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["requiredFlags"] = args ? args.requiredFlags : undefined;
            resourceInputs["seedRatio"] = args ? args.seedRatio : undefined;
            resourceInputs["seedTime"] = args ? args.seedTime : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["passkey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(IndexerTorrentPotato.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering IndexerTorrentPotato resources.
 */
export interface IndexerTorrentPotatoState {
    /**
     * Base URL.
     */
    baseUrl?: pulumi.Input<string>;
    /**
     * Download client ID.
     */
    downloadClientId?: pulumi.Input<number>;
    /**
     * Enable automatic search flag.
     */
    enableAutomaticSearch?: pulumi.Input<boolean>;
    /**
     * Enable interactive search flag.
     */
    enableInteractiveSearch?: pulumi.Input<boolean>;
    /**
     * Enable RSS flag.
     */
    enableRss?: pulumi.Input<boolean>;
    /**
     * Minimum seeders.
     */
    minimumSeeders?: pulumi.Input<number>;
    /**
     * Languages list.
     */
    multiLanguages?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * IndexerTorrentPotato name.
     */
    name?: pulumi.Input<string>;
    /**
     * Passkey.
     */
    passkey?: pulumi.Input<string>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Flag list.
     */
    requiredFlags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Seed ratio.
     */
    seedRatio?: pulumi.Input<number>;
    /**
     * Seed time.
     */
    seedTime?: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * User.
     */
    user?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IndexerTorrentPotato resource.
 */
export interface IndexerTorrentPotatoArgs {
    /**
     * Base URL.
     */
    baseUrl: pulumi.Input<string>;
    /**
     * Download client ID.
     */
    downloadClientId?: pulumi.Input<number>;
    /**
     * Enable automatic search flag.
     */
    enableAutomaticSearch?: pulumi.Input<boolean>;
    /**
     * Enable interactive search flag.
     */
    enableInteractiveSearch?: pulumi.Input<boolean>;
    /**
     * Enable RSS flag.
     */
    enableRss?: pulumi.Input<boolean>;
    /**
     * Minimum seeders.
     */
    minimumSeeders?: pulumi.Input<number>;
    /**
     * Languages list.
     */
    multiLanguages?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * IndexerTorrentPotato name.
     */
    name: pulumi.Input<string>;
    /**
     * Passkey.
     */
    passkey?: pulumi.Input<string>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Flag list.
     */
    requiredFlags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Seed ratio.
     */
    seedRatio?: pulumi.Input<number>;
    /**
     * Seed time.
     */
    seedTime?: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * User.
     */
    user?: pulumi.Input<string>;
}
