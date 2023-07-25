// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export namespace DownloadClients {
    export interface GetDownloadClientsDownloadClient {
        /**
         * Add paused flag.
         */
        addPaused: boolean;
        /**
         * Add stopped flag.
         */
        addStopped: boolean;
        /**
         * Additional tags, `0` TitleSlug, `1` Quality, `2` Language, `3` ReleaseGroup, `4` Year, `5` Indexer, `6` Network.
         */
        additionalTags: number[];
        /**
         * API key.
         */
        apiKey: string;
        /**
         * API URL.
         */
        apiUrl: string;
        /**
         * App ID.
         */
        appId: string;
        /**
         * App Token.
         */
        appToken: string;
        /**
         * Category.
         */
        category: string;
        /**
         * DownloadClient configuration template.
         */
        configContract: string;
        /**
         * Destination.
         */
        destination: string;
        /**
         * Movie directory.
         */
        destinationDirectory: string;
        /**
         * Enable flag.
         */
        enable: boolean;
        /**
         * Field tags.
         */
        fieldTags: string[];
        /**
         * First and last flag.
         */
        firstAndLast: boolean;
        /**
         * host.
         */
        host: string;
        /**
         * Download Client ID.
         */
        id: number;
        /**
         * DownloadClient implementation name.
         */
        implementation: string;
        /**
         * Initial state. `0` Start, `1` ForceStart, `2` Pause.
         */
        initialState: number;
        /**
         * Initial state, with Stop support. `0` Start, `1` ForceStart, `2` Pause, `3` Stop.
         */
        intialState: number;
        /**
         * Magnet file extension.
         */
        magnetFileExtension: string;
        /**
         * Movie category.
         */
        movieCategory: string;
        /**
         * Movie directory.
         */
        movieDirectory: string;
        /**
         * Movie imported category.
         */
        movieImportedCategory: string;
        /**
         * Download Client name.
         */
        name: string;
        /**
         * NZB folder.
         */
        nzbFolder: string;
        /**
         * Older Movie priority. `0` Last, `1` First.
         */
        olderMoviePriority: number;
        /**
         * Older Movie priority. `0` Last, `1` First.
         */
        olderPriority: number;
        /**
         * Password.
         */
        password: string;
        /**
         * Port.
         */
        port: number;
        /**
         * Post import tags.
         */
        postImportTags: string[];
        /**
         * Priority.
         */
        priority: number;
        /**
         * Protocol. Valid values are 'usenet' and 'torrent'.
         */
        protocol: string;
        /**
         * Read only flag.
         */
        readOnly: boolean;
        /**
         * Recent Movie priority. `0` Last, `1` First.
         */
        recentMoviePriority: number;
        /**
         * Recent Movie priority. `0` Last, `1` First.
         */
        recentPriority: number;
        /**
         * Remove completed downloads flag.
         */
        removeCompletedDownloads: boolean;
        /**
         * Remove failed downloads flag.
         */
        removeFailedDownloads: boolean;
        /**
         * RPC path.
         */
        rpcPath: string;
        /**
         * Save magnet files flag.
         */
        saveMagnetFiles: boolean;
        /**
         * Secret token.
         */
        secretToken: string;
        /**
         * Sequential order flag.
         */
        sequentialOrder: boolean;
        /**
         * Start on add flag.
         */
        startOnAdd: boolean;
        /**
         * STRM folder.
         */
        strmFolder: string;
        /**
         * List of associated tags.
         */
        tags: number[];
        /**
         * Torrent folder.
         */
        torrentFolder: string;
        /**
         * Base URL.
         */
        urlBase: string;
        /**
         * Use SSL flag.
         */
        useSsl: boolean;
        /**
         * Username.
         */
        username: string;
        /**
         * Watch folder flag.
         */
        watchFolder: string;
    }

    export interface GetRemotePathMappingsRemotePathMapping {
        /**
         * Download Client host.
         */
        host: string;
        /**
         * RemotePathMapping ID.
         */
        id: number;
        /**
         * Local path.
         */
        localPath: string;
        /**
         * Download Client remote path.
         */
        remotePath: string;
    }

}

export namespace ImportLists {
    export interface GetImportListExclusionsImportListExclusion {
        /**
         * Import List Exclusion ID.
         */
        id: number;
        /**
         * Movie to be excluded.
         */
        title: string;
        /**
         * Movie TMDB ID.
         */
        tmdbId: number;
        /**
         * Year.
         */
        year: number;
    }

    export interface GetImportListsImportList {
        /**
         * Access token.
         */
        accessToken: string;
        /**
         * Account ID.
         */
        accountId: string;
        /**
         * API key.
         */
        apiKey: string;
        /**
         * Auth user.
         */
        authUser: string;
        /**
         * Base URL.
         */
        baseUrl: string;
        /**
         * Include cast.
         */
        cast: boolean;
        /**
         * Include cast director.
         */
        castDirector: boolean;
        /**
         * Include cast producer.
         */
        castProducer: boolean;
        /**
         * Include cast sound.
         */
        castSound: boolean;
        /**
         * Include cast writing.
         */
        castWriting: boolean;
        /**
         * Certification.
         */
        certification: string;
        /**
         * Collection ID.
         */
        collectionId: string;
        /**
         * Company ID.
         */
        companyId: string;
        /**
         * ImportList configuration template.
         */
        configContract: string;
        /**
         * Enable automatic add flag.
         */
        enableAuto: boolean;
        /**
         * Enabled flag.
         */
        enabled: boolean;
        /**
         * Exclude genre IDs.
         */
        excludeGenreIds: string;
        /**
         * Expires.
         */
        expires: string;
        /**
         * Genres.
         */
        genres: string;
        /**
         * Import List ID.
         */
        id: number;
        /**
         * ImportList implementation name.
         */
        implementation: string;
        /**
         * Include genre IDs.
         */
        includeGenreIds: string;
        /**
         * Keyword ID.
         */
        keywordId: string;
        /**
         * Language code.
         */
        languageCode: number;
        /**
         * limit.
         */
        limit: number;
        /**
         * Link.
         */
        link: string;
        /**
         * List ID.
         */
        listId: string;
        /**
         * List order.
         */
        listOrder: number;
        /**
         * List type.
         */
        listType: string;
        /**
         * List name.
         */
        listname: string;
        /**
         * Min score.
         */
        minScore: number;
        /**
         * Min vote average.
         */
        minVoteAverage: string;
        /**
         * Min votes.
         */
        minVotes: string;
        /**
         * Minimum availability.
         */
        minimumAvailability: string;
        /**
         * Import List name.
         */
        name: string;
        /**
         * Only active.
         */
        onlyActive: boolean;
        /**
         * Person ID.
         */
        personId: string;
        /**
         * Port.
         */
        port: number;
        /**
         * Profile IDs.
         */
        profileIds: number[];
        /**
         * Quality profile ID.
         */
        qualityProfileId: number;
        /**
         * Rating.
         */
        rating: string;
        /**
         * Refresh token.
         */
        refreshToken: string;
        /**
         * Root folder path.
         */
        rootFolderPath: string;
        /**
         * Search on add flag.
         */
        searchOnAdd: boolean;
        /**
         * Should monitor.
         */
        shouldMonitor: boolean;
        /**
         * Source.
         */
        source: number;
        /**
         * Tag IDs.
         */
        tagIds: number[];
        /**
         * List of associated tags.
         */
        tags: number[];
        /**
         * Certification.
         */
        tmdbCertification: string;
        /**
         * TMDB list type.
         */
        tmdbListType: number;
        /**
         * Trakt additional parameters.
         */
        traktAdditionalParameters: string;
        /**
         * Trakt list type.
         */
        traktListType: number;
        /**
         * URL.
         */
        url: string;
        /**
         * Base URL.
         */
        urlBase: string;
        /**
         * User list type.
         */
        userListType: number;
        /**
         * Username.
         */
        username: string;
        /**
         * Years.
         */
        years: string;
    }

}

export namespace Indexers {
    export interface GetIndexersIndexer {
        /**
         * Additional parameters.
         */
        additionalParameters: string;
        /**
         * Allow zero size files.
         */
        allowZeroSize: boolean;
        /**
         * API key.
         */
        apiKey: string;
        /**
         * API path.
         */
        apiPath: string;
        /**
         * API User.
         */
        apiUser: string;
        /**
         * Base URL.
         */
        baseUrl: string;
        /**
         * Captcha token.
         */
        captchaToken: string;
        /**
         * Series list.
         */
        categories: number[];
        /**
         * Codecs.
         */
        codecs: number[];
        /**
         * Indexer configuration template.
         */
        configContract: string;
        /**
         * Cookie.
         */
        cookie: string;
        /**
         * Delay before grabbing.
         */
        delay: number;
        /**
         * Download client ID.
         */
        downloadClientId: number;
        /**
         * Enable automatic search flag.
         */
        enableAutomaticSearch: boolean;
        /**
         * Enable interactive search flag.
         */
        enableInteractiveSearch: boolean;
        /**
         * Enable RSS flag.
         */
        enableRss: boolean;
        /**
         * Indexer ID.
         */
        id: number;
        /**
         * Indexer implementation name.
         */
        implementation: string;
        /**
         * Mediumd.
         */
        mediums: number[];
        /**
         * Minimum seeders.
         */
        minimumSeeders: number;
        /**
         * Language list.
         */
        multiLanguages: number[];
        /**
         * Indexer name.
         */
        name: string;
        /**
         * Passkey.
         */
        passkey: string;
        /**
         * Priority.
         */
        priority: number;
        /**
         * Protocol. Valid values are 'usenet' and 'torrent'.
         */
        protocol: string;
        /**
         * Allow ranked only.
         */
        rankedOnly: boolean;
        /**
         * Computed flags.
         */
        requiredFlags: number[];
        /**
         * Seed ratio.
         */
        seedRatio: number;
        /**
         * Seed time.
         */
        seedTime: number;
        /**
         * List of associated tags.
         */
        tags: number[];
        /**
         * Username.
         */
        user: string;
        /**
         * Username.
         */
        username: string;
    }

    export interface GetRestrictionsRestriction {
        /**
         * Restriction ID.
         */
        id: number;
        /**
         * Ignored.
         */
        ignored: string;
        /**
         * Required.
         */
        required: string;
        /**
         * List of associated tags.
         */
        tags: number[];
    }

}

export namespace MediaManagement {
    export interface GetRootFolderUnmappedFolder {
        /**
         * Name of unmapped folder.
         */
        name: string;
        /**
         * Path of unmapped folder.
         */
        path: string;
    }

    export interface GetRootFoldersRootFolder {
        /**
         * Access flag.
         */
        accessible: boolean;
        /**
         * Root Folder ID.
         */
        id: number;
        /**
         * Root Folder absolute path.
         */
        path: string;
        /**
         * List of folders with no associated series.
         */
        unmappedFolders: outputs.MediaManagement.GetRootFoldersRootFolderUnmappedFolder[];
    }

    export interface GetRootFoldersRootFolderUnmappedFolder {
        name: string;
        path: string;
    }

    export interface RootFolderUnmappedFolder {
        /**
         * Name of unmapped folder.
         */
        name: string;
        /**
         * Path of unmapped folder.
         */
        path: string;
    }

}

export namespace Metadata {
    export interface GetMetadataConsumersMetadataConsumer {
        /**
         * Metadata configuration template.
         */
        configContract: string;
        /**
         * Enable flag.
         */
        enable: boolean;
        /**
         * Metadata ID.
         */
        id: number;
        /**
         * Metadata implementation name.
         */
        implementation: string;
        /**
         * Movie images flag.
         */
        movieImages: boolean;
        /**
         * Movie metafata flag.
         */
        movieMetadata: boolean;
        /**
         * Movie metadata language.
         */
        movieMetadataLanguage: number;
        /**
         * Movie metadata URL flag.
         */
        movieMetadataUrl: boolean;
        /**
         * Metadata name.
         */
        name: string;
        /**
         * List of associated tags.
         */
        tags: number[];
        /**
         * Use movie nfo flag.
         */
        useMovieNfo: boolean;
    }

}

export namespace Movies {
    export interface GetMovieOriginalLanguage {
        /**
         * ID.
         */
        id: number;
        /**
         * Name.
         */
        name: string;
    }

    export interface GetMoviesMovie {
        /**
         * List genres.
         */
        genres: string[];
        /**
         * Movie ID.
         */
        id: number;
        /**
         * IMDB ID.
         */
        imdbId: string;
        /**
         * Availability flag.
         */
        isAvailable: boolean;
        /**
         * Minimum availability.
         * Allowed values: 'tba', 'announced', 'inCinemas', 'released', 'deleted'.
         */
        minimumAvailability: string;
        /**
         * Monitored flag.
         */
        monitored: boolean;
        /**
         * Origina language.
         */
        originalLanguage: outputs.Movies.GetMoviesMovieOriginalLanguage;
        /**
         * Movie original title.
         */
        originalTitle: string;
        /**
         * Overview.
         */
        overview: string;
        /**
         * Full movie path.
         */
        path: string;
        /**
         * Quality profile ID.
         */
        qualityProfileId: number;
        /**
         * Movie status.
         */
        status: string;
        /**
         * List of associated tags.
         */
        tags: number[];
        /**
         * Movie title.
         */
        title: string;
        /**
         * TMDB ID.
         */
        tmdbId: number;
        /**
         * Website.
         */
        website: string;
        /**
         * Year.
         */
        year: number;
        /**
         * Youtube trailer ID.
         */
        youtubeTrailerId: string;
    }

    export interface GetMoviesMovieOriginalLanguage {
        /**
         * The ID of this resource.
         */
        id: number;
        name: string;
    }

    export interface MovieOriginalLanguage {
        /**
         * ID.
         */
        id: number;
        /**
         * Name.
         */
        name: string;
    }

}

export namespace Notifications {
    export interface GetNotificationsNotification {
        /**
         * Access token.
         */
        accessToken: string;
        /**
         * Access token secret.
         */
        accessTokenSecret: string;
        /**
         * Always update flag.
         */
        alwaysUpdate: boolean;
        /**
         * API key.
         */
        apiKey: string;
        /**
         * App token.
         */
        appToken: string;
        /**
         * Arguments.
         */
        arguments: string;
        /**
         * Auth token.
         */
        authToken: string;
        /**
         * Auth user.
         */
        authUser: string;
        /**
         * Author.
         */
        author: string;
        /**
         * Avatar.
         */
        avatar: string;
        /**
         * Bcc.
         */
        bccs: string[];
        /**
         * Bot token.
         */
        botToken: string;
        /**
         * Cc.
         */
        ccs: string[];
        /**
         * Channel.
         */
        channel: string;
        /**
         * Channel tags.
         */
        channelTags: string[];
        /**
         * Chat ID.
         */
        chatId: string;
        /**
         * Clean library flag.
         */
        cleanLibrary: boolean;
        /**
         * Click URL.
         */
        clickUrl: string;
        /**
         * Notification configuration template.
         */
        configContract: string;
        /**
         * Consumer key.
         */
        consumerKey: string;
        /**
         * Consumer secret.
         */
        consumerSecret: string;
        /**
         * Device IDs.
         */
        deviceIds: string[];
        /**
         * Device names.
         */
        deviceNames: string;
        /**
         * Devices.
         */
        devices: string[];
        /**
         * Direct message flag.
         */
        directMessage: boolean;
        /**
         * Display time.
         */
        displayTime: number;
        /**
         * Event.
         */
        event: string;
        /**
         * Expire.
         */
        expire: number;
        /**
         * Expires.
         */
        expires: string;
        /**
         * Specific tags.
         */
        fieldTags: string[];
        /**
         * From.
         */
        from: string;
        /**
         * Grab fields. `0` Overview, `1` Rating, `2` Genres, `3` Quality, `4` Group, `5` Size, `6` Links, `7` Release, `8` Poster, `9` Fanart, `10` CustomFormats, `11` CustomFormatScore.
         */
        grabFields: number[];
        /**
         * Host.
         */
        host: string;
        /**
         * Icon.
         */
        icon: string;
        /**
         * Notification ID.
         */
        id: number;
        /**
         * Notification implementation name.
         */
        implementation: string;
        /**
         * Import fields. `0` Overview, `1` Rating, `2` Genres, `3` Quality, `4` Codecs, `5` Group, `6` Size, `7` Languages, `8` Subtitles, `9` Links, `10` Release, `11` Poster, `12` Fanart.
         */
        importFields: number[];
        /**
         * Include health warnings.
         */
        includeHealthWarnings: boolean;
        /**
         * Instance name.
         */
        instanceName: string;
        /**
         * Key.
         */
        key: string;
        /**
         * Map From.
         */
        mapFrom: string;
        /**
         * Map To.
         */
        mapTo: string;
        /**
         * Mention.
         */
        mention: string;
        /**
         * Method. `1` POST, `2` PUT.
         */
        method: number;
        /**
         * Notification name.
         */
        name: string;
        /**
         * Notify flag.
         */
        notify: boolean;
        /**
         * On application update flag.
         */
        onApplicationUpdate: boolean;
        /**
         * On download flag.
         */
        onDownload: boolean;
        /**
         * On grab flag.
         */
        onGrab: boolean;
        /**
         * On health issue flag.
         */
        onHealthIssue: boolean;
        /**
         * On movie delete flag.
         */
        onMovieDelete: boolean;
        /**
         * On movie file delete flag.
         */
        onMovieFileDelete: boolean;
        /**
         * On movie file delete for upgrade flag.
         */
        onMovieFileDeleteForUpgrade: boolean;
        /**
         * On rename flag.
         */
        onRename: boolean;
        /**
         * On upgrade flag.
         */
        onUpgrade: boolean;
        /**
         * password.
         */
        password: string;
        /**
         * Path.
         */
        path: string;
        /**
         * Port.
         */
        port: number;
        /**
         * Priority.
         */
        priority: number;
        /**
         * Recipients.
         */
        recipients: string[];
        /**
         * Refresh token.
         */
        refreshToken: string;
        /**
         * Require encryption flag.
         */
        requireEncryption: boolean;
        /**
         * Retry.
         */
        retry: number;
        /**
         * Add silently flag.
         */
        sendSilently: boolean;
        /**
         * Sender domain.
         */
        senderDomain: string;
        /**
         * Sender ID.
         */
        senderId: string;
        /**
         * server.
         */
        server: string;
        /**
         * Server url.
         */
        serverUrl: string;
        /**
         * Sign in.
         */
        signIn: string;
        /**
         * Sound.
         */
        sound: string;
        /**
         * List of associated tags.
         */
        tags: number[];
        /**
         * Token.
         */
        token: string;
        /**
         * Topics.
         */
        topics: string[];
        /**
         * To.
         */
        tos: string[];
        /**
         * Update library flag.
         */
        updateLibrary: boolean;
        /**
         * URL.
         */
        url: string;
        /**
         * Use EU endpoint flag.
         */
        useEuEndpoint: boolean;
        /**
         * Use SSL flag.
         */
        useSsl: boolean;
        /**
         * User key.
         */
        userKey: string;
        /**
         * Username.
         */
        username: string;
        /**
         * Web hook url.
         */
        webHookUrl: string;
    }

}

export namespace Profiles {
    export interface CustomFormatSpecification {
        /**
         * Implementation.
         */
        implementation: string;
        /**
         * Max.
         */
        max: number;
        /**
         * Min.
         */
        min: number;
        /**
         * Specification name.
         */
        name: string;
        /**
         * Negate flag.
         */
        negate: boolean;
        /**
         * Required flag.
         */
        required: boolean;
        /**
         * Value.
         */
        value: string;
    }

    export interface GetCustomFormatSpecification {
        /**
         * Implementation.
         */
        implementation: string;
        /**
         * Max.
         */
        max: number;
        /**
         * Min.
         */
        min: number;
        /**
         * Specification name.
         */
        name: string;
        /**
         * Negate flag.
         */
        negate: boolean;
        /**
         * Computed flag.
         */
        required: boolean;
        /**
         * Value.
         */
        value: string;
    }

    export interface GetCustomFormatsCustomFormat {
        /**
         * Custom Format ID.
         */
        id: number;
        /**
         * Include custom format when renaming flag.
         */
        includeCustomFormatWhenRenaming: boolean;
        /**
         * Custom Format name.
         */
        name: string;
        /**
         * Specifications.
         */
        specifications: outputs.Profiles.GetCustomFormatsCustomFormatSpecification[];
    }

    export interface GetCustomFormatsCustomFormatSpecification {
        implementation: string;
        max: number;
        min: number;
        name: string;
        negate: boolean;
        required: boolean;
        value: string;
    }

    export interface GetDelayProfilesDelayProfile {
        /**
         * Bypass for highest quality Flag.
         */
        bypassIfHighestQuality: boolean;
        /**
         * Torrent allowed Flag.
         */
        enableTorrent: boolean;
        /**
         * Usenet allowed Flag.
         */
        enableUsenet: boolean;
        /**
         * Delay Profile ID.
         */
        id: number;
        /**
         * Order.
         */
        order: number;
        /**
         * Preferred protocol.
         */
        preferredProtocol: string;
        /**
         * List of associated tags.
         */
        tags: number[];
        /**
         * Torrent Delay.
         */
        torrentDelay: number;
        /**
         * Usenet delay.
         */
        usenetDelay: number;
    }

    export interface GetLanguagesLanguage {
        /**
         * Language ID.
         */
        id: number;
        /**
         * Language.
         */
        name: string;
        /**
         * Language in lowercase.
         */
        nameLower: string;
    }

    export interface GetQualityDefinitionsQualityDefinition {
        /**
         * Quality Definition ID.
         */
        id: number;
        /**
         * Maximum size MB/min.
         */
        maxSize: number;
        /**
         * Minimum size MB/min.
         */
        minSize: number;
        /**
         * Preferred size MB/min.
         */
        preferredSize: number;
        /**
         * Quality ID.
         */
        qualityId: number;
        /**
         * Quality Name.
         */
        qualityName: string;
        /**
         * Quality Resolution.
         */
        resolution: number;
        /**
         * Quality source.
         */
        source: string;
        /**
         * Quality Definition Title.
         */
        title: string;
    }

    export interface GetQualityProfileFormatItem {
        /**
         * Format.
         */
        format: number;
        /**
         * Name.
         */
        name: string;
        /**
         * Score.
         */
        score: number;
    }

    export interface GetQualityProfileLanguage {
        /**
         * ID.
         */
        id: number;
        /**
         * Name.
         */
        name: string;
    }

    export interface GetQualityProfileQualityGroup {
        /**
         * Quality group ID.
         */
        id: number;
        /**
         * Quality group name.
         */
        name: string;
        /**
         * Qualities in group.
         */
        qualities: outputs.Profiles.GetQualityProfileQualityGroupQuality[];
    }

    export interface GetQualityProfileQualityGroupQuality {
        /**
         * Quality Profile ID.
         */
        id: number;
        /**
         * Quality Profile Name.
         */
        name: string;
        resolution: number;
        source: string;
    }

    export interface GetQualityProfilesQualityProfile {
        /**
         * Quality ID to which cutoff.
         */
        cutoff: number;
        /**
         * Cutoff format score.
         */
        cutoffFormatScore: number;
        /**
         * Format items.
         */
        formatItems: outputs.Profiles.GetQualityProfilesQualityProfileFormatItem[];
        /**
         * Quality Profile ID.
         */
        id: number;
        /**
         * Language.
         */
        language: outputs.Profiles.GetQualityProfilesQualityProfileLanguage;
        /**
         * Min format score.
         */
        minFormatScore: number;
        /**
         * Quality Profile Name.
         */
        name: string;
        /**
         * Quality groups.
         */
        qualityGroups: outputs.Profiles.GetQualityProfilesQualityProfileQualityGroup[];
        /**
         * Upgrade allowed flag.
         */
        upgradeAllowed: boolean;
    }

    export interface GetQualityProfilesQualityProfileFormatItem {
        format: number;
        name: string;
        score: number;
    }

    export interface GetQualityProfilesQualityProfileLanguage {
        /**
         * The ID of this resource.
         */
        id: number;
        name: string;
    }

    export interface GetQualityProfilesQualityProfileQualityGroup {
        /**
         * The ID of this resource.
         */
        id: number;
        name: string;
        qualities: outputs.Profiles.GetQualityProfilesQualityProfileQualityGroupQuality[];
    }

    export interface GetQualityProfilesQualityProfileQualityGroupQuality {
        /**
         * The ID of this resource.
         */
        id: number;
        name: string;
        resolution: number;
        source: string;
    }

    export interface QualityProfileFormatItem {
        /**
         * Format.
         */
        format: number;
        /**
         * Name.
         */
        name: string;
        /**
         * Score.
         */
        score: number;
    }

    export interface QualityProfileLanguage {
        /**
         * ID.
         */
        id: number;
        /**
         * Name.
         */
        name: string;
    }

    export interface QualityProfileQualityGroup {
        /**
         * Quality group ID.
         */
        id: number;
        /**
         * Quality group name.
         */
        name: string;
        /**
         * Qualities in group.
         */
        qualities: outputs.Profiles.QualityProfileQualityGroupQuality[];
    }

    export interface QualityProfileQualityGroupQuality {
        /**
         * Quality Profile ID.
         */
        id: number;
        /**
         * Quality Profile Name.
         */
        name: string;
        resolution: number;
        source: string;
    }

}

export namespace Tags {
    export interface GetTagsTag {
        /**
         * Tag ID.
         */
        id: number;
        /**
         * Tag label.
         */
        label: string;
    }

}
