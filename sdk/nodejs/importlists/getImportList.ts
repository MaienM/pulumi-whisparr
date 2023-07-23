// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Import Lists -->Single Import List.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as whisparr from "@pulumi/whisparr";
 *
 * const example = whisparr.ImportLists.getImportList({
 *     name: "Example",
 * });
 * ```
 */
export function getImportList(args: GetImportListArgs, opts?: pulumi.InvokeOptions): Promise<GetImportListResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("whisparr:ImportLists/getImportList:getImportList", {
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getImportList.
 */
export interface GetImportListArgs {
    /**
     * Import List name.
     */
    name: string;
}

/**
 * A collection of values returned by getImportList.
 */
export interface GetImportListResult {
    /**
     * Access token.
     */
    readonly accessToken: string;
    /**
     * Account ID.
     */
    readonly accountId: string;
    /**
     * API key.
     */
    readonly apiKey: string;
    /**
     * Auth user.
     */
    readonly authUser: string;
    /**
     * Base URL.
     */
    readonly baseUrl: string;
    /**
     * Include cast.
     */
    readonly cast: boolean;
    /**
     * Include cast director.
     */
    readonly castDirector: boolean;
    /**
     * Include cast producer.
     */
    readonly castProducer: boolean;
    /**
     * Include cast sound.
     */
    readonly castSound: boolean;
    /**
     * Include cast writing.
     */
    readonly castWriting: boolean;
    /**
     * Certification.
     */
    readonly certification: string;
    /**
     * Collection ID.
     */
    readonly collectionId: string;
    /**
     * Company ID.
     */
    readonly companyId: string;
    /**
     * ImportList configuration template.
     */
    readonly configContract: string;
    /**
     * Enable automatic add flag.
     */
    readonly enableAuto: boolean;
    /**
     * Enabled flag.
     */
    readonly enabled: boolean;
    /**
     * Exclude genre IDs.
     */
    readonly excludeGenreIds: string;
    /**
     * Expires.
     */
    readonly expires: string;
    /**
     * Genres.
     */
    readonly genres: string;
    /**
     * Import List ID.
     */
    readonly id: number;
    /**
     * ImportList implementation name.
     */
    readonly implementation: string;
    /**
     * Include genre IDs.
     */
    readonly includeGenreIds: string;
    /**
     * Keyword ID.
     */
    readonly keywordId: string;
    /**
     * Language code.
     */
    readonly languageCode: number;
    /**
     * limit.
     */
    readonly limit: number;
    /**
     * Link.
     */
    readonly link: string;
    /**
     * List ID.
     */
    readonly listId: string;
    /**
     * List order.
     */
    readonly listOrder: number;
    /**
     * List type.
     */
    readonly listType: string;
    /**
     * List name.
     */
    readonly listname: string;
    /**
     * Min score.
     */
    readonly minScore: number;
    /**
     * Min vote average.
     */
    readonly minVoteAverage: string;
    /**
     * Min votes.
     */
    readonly minVotes: string;
    /**
     * Minimum availability.
     */
    readonly minimumAvailability: string;
    /**
     * Import List name.
     */
    readonly name: string;
    /**
     * Only active.
     */
    readonly onlyActive: boolean;
    /**
     * Person ID.
     */
    readonly personId: string;
    /**
     * Port.
     */
    readonly port: number;
    /**
     * Profile IDs.
     */
    readonly profileIds: number[];
    /**
     * Quality profile ID.
     */
    readonly qualityProfileId: number;
    /**
     * Rating.
     */
    readonly rating: string;
    /**
     * Refresh token.
     */
    readonly refreshToken: string;
    /**
     * Root folder path.
     */
    readonly rootFolderPath: string;
    /**
     * Search on add flag.
     */
    readonly searchOnAdd: boolean;
    /**
     * Should monitor.
     */
    readonly shouldMonitor: boolean;
    /**
     * Source.
     */
    readonly source: number;
    /**
     * Tag IDs.
     */
    readonly tagIds: number[];
    /**
     * List of associated tags.
     */
    readonly tags: number[];
    /**
     * Certification.
     */
    readonly tmdbCertification: string;
    /**
     * TMDB list type.
     */
    readonly tmdbListType: number;
    /**
     * Trakt additional parameters.
     */
    readonly traktAdditionalParameters: string;
    /**
     * Trakt list type.
     */
    readonly traktListType: number;
    /**
     * URL.
     */
    readonly url: string;
    /**
     * Base URL.
     */
    readonly urlBase: string;
    /**
     * User list type.
     */
    readonly userListType: number;
    /**
     * Username.
     */
    readonly username: string;
    /**
     * Years.
     */
    readonly years: string;
}
/**
 * <!-- subcategory:Import Lists -->Single Import List.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as whisparr from "@pulumi/whisparr";
 *
 * const example = whisparr.ImportLists.getImportList({
 *     name: "Example",
 * });
 * ```
 */
export function getImportListOutput(args: GetImportListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetImportListResult> {
    return pulumi.output(args).apply((a: any) => getImportList(a, opts))
}

/**
 * A collection of arguments for invoking getImportList.
 */
export interface GetImportListOutputArgs {
    /**
     * Import List name.
     */
    name: pulumi.Input<string>;
}