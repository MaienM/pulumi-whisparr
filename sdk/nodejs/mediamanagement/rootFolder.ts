// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Media Management -->Root Folder resource.
 * For more information refer to [Root Folders](https://wiki.servarr.com/whisparr/settings#root-folders) documentation.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as whisparr from "@maienm/pulumi-whisparr";
 *
 * const example = new whisparr.mediamanagement.RootFolder("example", {path: "/tmp"});
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import whisparr:MediaManagement/rootFolder:RootFolder example 10
 * ```
 */
export class RootFolder extends pulumi.CustomResource {
    /**
     * Get an existing RootFolder resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RootFolderState, opts?: pulumi.CustomResourceOptions): RootFolder {
        return new RootFolder(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'whisparr:MediaManagement/rootFolder:RootFolder';

    /**
     * Returns true if the given object is an instance of RootFolder.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RootFolder {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RootFolder.__pulumiType;
    }

    /**
     * Access flag.
     */
    public /*out*/ readonly accessible!: pulumi.Output<boolean>;
    /**
     * Root Folder absolute path.
     */
    public readonly path!: pulumi.Output<string>;
    /**
     * List of folders with no associated series.
     */
    public /*out*/ readonly unmappedFolders!: pulumi.Output<outputs.MediaManagement.RootFolderUnmappedFolder[]>;

    /**
     * Create a RootFolder resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RootFolderArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RootFolderArgs | RootFolderState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RootFolderState | undefined;
            resourceInputs["accessible"] = state ? state.accessible : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["unmappedFolders"] = state ? state.unmappedFolders : undefined;
        } else {
            const args = argsOrState as RootFolderArgs | undefined;
            if ((!args || args.path === undefined) && !opts.urn) {
                throw new Error("Missing required property 'path'");
            }
            resourceInputs["path"] = args ? args.path : undefined;
            resourceInputs["accessible"] = undefined /*out*/;
            resourceInputs["unmappedFolders"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RootFolder.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering RootFolder resources.
 */
export interface RootFolderState {
    /**
     * Access flag.
     */
    accessible?: pulumi.Input<boolean>;
    /**
     * Root Folder absolute path.
     */
    path?: pulumi.Input<string>;
    /**
     * List of folders with no associated series.
     */
    unmappedFolders?: pulumi.Input<pulumi.Input<inputs.MediaManagement.RootFolderUnmappedFolder>[]>;
}

/**
 * The set of arguments for constructing a RootFolder resource.
 */
export interface RootFolderArgs {
    /**
     * Root Folder absolute path.
     */
    path: pulumi.Input<string>;
}
