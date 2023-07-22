// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Import Lists -->Import List Trakt User resource.
 * For more information refer to [Import List](https://wiki.servarr.com/whisparr/settings#import-lists) and [Trakt User](https://wiki.servarr.com/whisparr/supported#traktuserimport).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as whisparr from "@maienm/pulumi-whisparr";
 *
 * const example = new whisparr.importlists.ImportListTraktUser("example", {
 *     accessToken: "Token",
 *     authUser: "User1",
 *     enableAuto: false,
 *     enabled: true,
 *     limit: 100,
 *     minimumAvailability: "tba",
 *     name: "Example",
 *     qualityProfileId: 1,
 *     rootFolderPath: "/config",
 *     searchOnAdd: false,
 *     shouldMonitor: true,
 *     traktListType: 0,
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import whisparr:ImportLists/importListTraktUser:ImportListTraktUser example 1
 * ```
 */
export class ImportListTraktUser extends pulumi.CustomResource {
    /**
     * Get an existing ImportListTraktUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ImportListTraktUserState, opts?: pulumi.CustomResourceOptions): ImportListTraktUser {
        return new ImportListTraktUser(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'whisparr:ImportLists/importListTraktUser:ImportListTraktUser';

    /**
     * Returns true if the given object is an instance of ImportListTraktUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ImportListTraktUser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ImportListTraktUser.__pulumiType;
    }

    /**
     * Access token.
     */
    public readonly accessToken!: pulumi.Output<string>;
    /**
     * Auth user.
     */
    public readonly authUser!: pulumi.Output<string>;
    /**
     * Enable automatic add flag.
     */
    public readonly enableAuto!: pulumi.Output<boolean>;
    /**
     * Enabled flag.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * Expires.
     */
    public readonly expires!: pulumi.Output<string>;
    /**
     * limit.
     */
    public readonly limit!: pulumi.Output<number>;
    /**
     * List order.
     */
    public readonly listOrder!: pulumi.Output<number>;
    /**
     * Minimum availability.
     */
    public readonly minimumAvailability!: pulumi.Output<string>;
    /**
     * Import List name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Quality profile ID.
     */
    public readonly qualityProfileId!: pulumi.Output<number>;
    /**
     * Refresh token.
     */
    public readonly refreshToken!: pulumi.Output<string>;
    /**
     * Root folder path.
     */
    public readonly rootFolderPath!: pulumi.Output<string>;
    /**
     * Search on add flag.
     */
    public readonly searchOnAdd!: pulumi.Output<boolean>;
    /**
     * Should monitor.
     */
    public readonly shouldMonitor!: pulumi.Output<boolean>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * Trakt additional parameters.
     */
    public readonly traktAdditionalParameters!: pulumi.Output<string>;
    /**
     * Trakt list type.`0` UserWatchList, `1` UserWatchedList, `2` UserCollectionList.
     */
    public readonly traktListType!: pulumi.Output<number>;
    /**
     * Username.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a ImportListTraktUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImportListTraktUserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ImportListTraktUserArgs | ImportListTraktUserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ImportListTraktUserState | undefined;
            resourceInputs["accessToken"] = state ? state.accessToken : undefined;
            resourceInputs["authUser"] = state ? state.authUser : undefined;
            resourceInputs["enableAuto"] = state ? state.enableAuto : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["expires"] = state ? state.expires : undefined;
            resourceInputs["limit"] = state ? state.limit : undefined;
            resourceInputs["listOrder"] = state ? state.listOrder : undefined;
            resourceInputs["minimumAvailability"] = state ? state.minimumAvailability : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["qualityProfileId"] = state ? state.qualityProfileId : undefined;
            resourceInputs["refreshToken"] = state ? state.refreshToken : undefined;
            resourceInputs["rootFolderPath"] = state ? state.rootFolderPath : undefined;
            resourceInputs["searchOnAdd"] = state ? state.searchOnAdd : undefined;
            resourceInputs["shouldMonitor"] = state ? state.shouldMonitor : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["traktAdditionalParameters"] = state ? state.traktAdditionalParameters : undefined;
            resourceInputs["traktListType"] = state ? state.traktListType : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as ImportListTraktUserArgs | undefined;
            if ((!args || args.accessToken === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessToken'");
            }
            if ((!args || args.authUser === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authUser'");
            }
            if ((!args || args.limit === undefined) && !opts.urn) {
                throw new Error("Missing required property 'limit'");
            }
            if ((!args || args.minimumAvailability === undefined) && !opts.urn) {
                throw new Error("Missing required property 'minimumAvailability'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.qualityProfileId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'qualityProfileId'");
            }
            if ((!args || args.rootFolderPath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rootFolderPath'");
            }
            if ((!args || args.shouldMonitor === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shouldMonitor'");
            }
            resourceInputs["accessToken"] = args?.accessToken ? pulumi.secret(args.accessToken) : undefined;
            resourceInputs["authUser"] = args ? args.authUser : undefined;
            resourceInputs["enableAuto"] = args ? args.enableAuto : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["expires"] = args ? args.expires : undefined;
            resourceInputs["limit"] = args ? args.limit : undefined;
            resourceInputs["listOrder"] = args ? args.listOrder : undefined;
            resourceInputs["minimumAvailability"] = args ? args.minimumAvailability : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["qualityProfileId"] = args ? args.qualityProfileId : undefined;
            resourceInputs["refreshToken"] = args?.refreshToken ? pulumi.secret(args.refreshToken) : undefined;
            resourceInputs["rootFolderPath"] = args ? args.rootFolderPath : undefined;
            resourceInputs["searchOnAdd"] = args ? args.searchOnAdd : undefined;
            resourceInputs["shouldMonitor"] = args ? args.shouldMonitor : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["traktAdditionalParameters"] = args ? args.traktAdditionalParameters : undefined;
            resourceInputs["traktListType"] = args ? args.traktListType : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["accessToken", "refreshToken"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ImportListTraktUser.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ImportListTraktUser resources.
 */
export interface ImportListTraktUserState {
    /**
     * Access token.
     */
    accessToken?: pulumi.Input<string>;
    /**
     * Auth user.
     */
    authUser?: pulumi.Input<string>;
    /**
     * Enable automatic add flag.
     */
    enableAuto?: pulumi.Input<boolean>;
    /**
     * Enabled flag.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Expires.
     */
    expires?: pulumi.Input<string>;
    /**
     * limit.
     */
    limit?: pulumi.Input<number>;
    /**
     * List order.
     */
    listOrder?: pulumi.Input<number>;
    /**
     * Minimum availability.
     */
    minimumAvailability?: pulumi.Input<string>;
    /**
     * Import List name.
     */
    name?: pulumi.Input<string>;
    /**
     * Quality profile ID.
     */
    qualityProfileId?: pulumi.Input<number>;
    /**
     * Refresh token.
     */
    refreshToken?: pulumi.Input<string>;
    /**
     * Root folder path.
     */
    rootFolderPath?: pulumi.Input<string>;
    /**
     * Search on add flag.
     */
    searchOnAdd?: pulumi.Input<boolean>;
    /**
     * Should monitor.
     */
    shouldMonitor?: pulumi.Input<boolean>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Trakt additional parameters.
     */
    traktAdditionalParameters?: pulumi.Input<string>;
    /**
     * Trakt list type.`0` UserWatchList, `1` UserWatchedList, `2` UserCollectionList.
     */
    traktListType?: pulumi.Input<number>;
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ImportListTraktUser resource.
 */
export interface ImportListTraktUserArgs {
    /**
     * Access token.
     */
    accessToken: pulumi.Input<string>;
    /**
     * Auth user.
     */
    authUser: pulumi.Input<string>;
    /**
     * Enable automatic add flag.
     */
    enableAuto?: pulumi.Input<boolean>;
    /**
     * Enabled flag.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Expires.
     */
    expires?: pulumi.Input<string>;
    /**
     * limit.
     */
    limit: pulumi.Input<number>;
    /**
     * List order.
     */
    listOrder?: pulumi.Input<number>;
    /**
     * Minimum availability.
     */
    minimumAvailability: pulumi.Input<string>;
    /**
     * Import List name.
     */
    name: pulumi.Input<string>;
    /**
     * Quality profile ID.
     */
    qualityProfileId: pulumi.Input<number>;
    /**
     * Refresh token.
     */
    refreshToken?: pulumi.Input<string>;
    /**
     * Root folder path.
     */
    rootFolderPath: pulumi.Input<string>;
    /**
     * Search on add flag.
     */
    searchOnAdd?: pulumi.Input<boolean>;
    /**
     * Should monitor.
     */
    shouldMonitor: pulumi.Input<boolean>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Trakt additional parameters.
     */
    traktAdditionalParameters?: pulumi.Input<string>;
    /**
     * Trakt list type.`0` UserWatchList, `1` UserWatchedList, `2` UserCollectionList.
     */
    traktListType?: pulumi.Input<number>;
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
}
