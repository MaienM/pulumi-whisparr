// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Download Clients -->Download Client Vuze resource.
 * For more information refer to [Download Client](https://wiki.servarr.com/whisparr/settings#download-clients) and [Vuze](https://wiki.servarr.com/whisparr/supported#vuze).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as whisparr from "@maienm/pulumi-whisparr";
 *
 * const example = new whisparr.downloadclient.DownloadClientVuze("example", {
 *     enable: true,
 *     host: "vuze",
 *     name: "Example",
 *     port: 9091,
 *     priority: 1,
 *     urlBase: "/vuze/",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import whisparr:DownloadClient/downloadClientVuze:DownloadClientVuze example 1
 * ```
 */
export class DownloadClientVuze extends pulumi.CustomResource {
    /**
     * Get an existing DownloadClientVuze resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DownloadClientVuzeState, opts?: pulumi.CustomResourceOptions): DownloadClientVuze {
        return new DownloadClientVuze(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'whisparr:DownloadClient/downloadClientVuze:DownloadClientVuze';

    /**
     * Returns true if the given object is an instance of DownloadClientVuze.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DownloadClientVuze {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DownloadClientVuze.__pulumiType;
    }

    /**
     * Add paused flag.
     */
    public readonly addPaused!: pulumi.Output<boolean>;
    /**
     * Enable flag.
     */
    public readonly enable!: pulumi.Output<boolean>;
    /**
     * host.
     */
    public readonly host!: pulumi.Output<string>;
    /**
     * Movie category.
     */
    public readonly movieCategory!: pulumi.Output<string>;
    /**
     * Movie directory.
     */
    public readonly movieDirectory!: pulumi.Output<string>;
    /**
     * Download Client name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Older Movie priority. `0` Last, `1` First.
     */
    public readonly olderMoviePriority!: pulumi.Output<number>;
    /**
     * Password.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * Port.
     */
    public readonly port!: pulumi.Output<number>;
    /**
     * Priority.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * Recent Movie priority. `0` Last, `1` First.
     */
    public readonly recentMoviePriority!: pulumi.Output<number>;
    /**
     * Remove completed downloads flag.
     */
    public readonly removeCompletedDownloads!: pulumi.Output<boolean>;
    /**
     * Remove failed downloads flag.
     */
    public readonly removeFailedDownloads!: pulumi.Output<boolean>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * Base URL.
     */
    public readonly urlBase!: pulumi.Output<string>;
    /**
     * Use SSL flag.
     */
    public readonly useSsl!: pulumi.Output<boolean>;
    /**
     * Username.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a DownloadClientVuze resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DownloadClientVuzeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DownloadClientVuzeArgs | DownloadClientVuzeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DownloadClientVuzeState | undefined;
            resourceInputs["addPaused"] = state ? state.addPaused : undefined;
            resourceInputs["enable"] = state ? state.enable : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["movieCategory"] = state ? state.movieCategory : undefined;
            resourceInputs["movieDirectory"] = state ? state.movieDirectory : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["olderMoviePriority"] = state ? state.olderMoviePriority : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["recentMoviePriority"] = state ? state.recentMoviePriority : undefined;
            resourceInputs["removeCompletedDownloads"] = state ? state.removeCompletedDownloads : undefined;
            resourceInputs["removeFailedDownloads"] = state ? state.removeFailedDownloads : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["urlBase"] = state ? state.urlBase : undefined;
            resourceInputs["useSsl"] = state ? state.useSsl : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as DownloadClientVuzeArgs | undefined;
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            resourceInputs["addPaused"] = args ? args.addPaused : undefined;
            resourceInputs["enable"] = args ? args.enable : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["movieCategory"] = args ? args.movieCategory : undefined;
            resourceInputs["movieDirectory"] = args ? args.movieDirectory : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["olderMoviePriority"] = args ? args.olderMoviePriority : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["recentMoviePriority"] = args ? args.recentMoviePriority : undefined;
            resourceInputs["removeCompletedDownloads"] = args ? args.removeCompletedDownloads : undefined;
            resourceInputs["removeFailedDownloads"] = args ? args.removeFailedDownloads : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["urlBase"] = args ? args.urlBase : undefined;
            resourceInputs["useSsl"] = args ? args.useSsl : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(DownloadClientVuze.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DownloadClientVuze resources.
 */
export interface DownloadClientVuzeState {
    /**
     * Add paused flag.
     */
    addPaused?: pulumi.Input<boolean>;
    /**
     * Enable flag.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * host.
     */
    host?: pulumi.Input<string>;
    /**
     * Movie category.
     */
    movieCategory?: pulumi.Input<string>;
    /**
     * Movie directory.
     */
    movieDirectory?: pulumi.Input<string>;
    /**
     * Download Client name.
     */
    name?: pulumi.Input<string>;
    /**
     * Older Movie priority. `0` Last, `1` First.
     */
    olderMoviePriority?: pulumi.Input<number>;
    /**
     * Password.
     */
    password?: pulumi.Input<string>;
    /**
     * Port.
     */
    port?: pulumi.Input<number>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Recent Movie priority. `0` Last, `1` First.
     */
    recentMoviePriority?: pulumi.Input<number>;
    /**
     * Remove completed downloads flag.
     */
    removeCompletedDownloads?: pulumi.Input<boolean>;
    /**
     * Remove failed downloads flag.
     */
    removeFailedDownloads?: pulumi.Input<boolean>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Base URL.
     */
    urlBase?: pulumi.Input<string>;
    /**
     * Use SSL flag.
     */
    useSsl?: pulumi.Input<boolean>;
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DownloadClientVuze resource.
 */
export interface DownloadClientVuzeArgs {
    /**
     * Add paused flag.
     */
    addPaused?: pulumi.Input<boolean>;
    /**
     * Enable flag.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * host.
     */
    host?: pulumi.Input<string>;
    /**
     * Movie category.
     */
    movieCategory?: pulumi.Input<string>;
    /**
     * Movie directory.
     */
    movieDirectory?: pulumi.Input<string>;
    /**
     * Download Client name.
     */
    name: pulumi.Input<string>;
    /**
     * Older Movie priority. `0` Last, `1` First.
     */
    olderMoviePriority?: pulumi.Input<number>;
    /**
     * Password.
     */
    password?: pulumi.Input<string>;
    /**
     * Port.
     */
    port?: pulumi.Input<number>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Recent Movie priority. `0` Last, `1` First.
     */
    recentMoviePriority?: pulumi.Input<number>;
    /**
     * Remove completed downloads flag.
     */
    removeCompletedDownloads?: pulumi.Input<boolean>;
    /**
     * Remove failed downloads flag.
     */
    removeFailedDownloads?: pulumi.Input<boolean>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Base URL.
     */
    urlBase?: pulumi.Input<string>;
    /**
     * Use SSL flag.
     */
    useSsl?: pulumi.Input<boolean>;
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
}
