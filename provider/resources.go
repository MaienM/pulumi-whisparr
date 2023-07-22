// Copyright 2016-2018, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package whisparr

import (
	_ "embed"
	"fmt"
	"path/filepath"
	"strings"

	"github.com/MaienM/pulumi-whisparr/provider/pkg/version"
	shimprovider "github.com/devopsarr/terraform-provider-whisparr/shim"
	"github.com/ettle/strcase"
	pf "github.com/pulumi/pulumi-terraform-bridge/pf/tfbridge"
	"github.com/pulumi/pulumi-terraform-bridge/v3/pkg/tfbridge"
	"github.com/pulumi/pulumi/sdk/v3/go/common/tokens"
	"github.com/pulumi/pulumi/sdk/v3/go/common/util/contract"
)

//go:embed cmd/pulumi-resource-whisparr/bridge-metadata.json
var bridgeMetadata []byte

// all of the token components used below.
const (
	// This variable controls the default name of the package in the package
	mainMod            = "index" // the whisparr module
	modDownloadClients = "DownloadClient"
	modImportLists     = "ImportLists"
	modIndexers        = "Indexers"
	modLanguages       = "Languages"
	modMediaManagement = "MediaManagement"
	modMetadata        = "Metadata"
	modMovies          = "Movies"
	modNotifications   = "Notifications"
	modProfiles        = "Profiles"
	modStatus          = "Status"
	modTags            = "Tags"
)

func convertName(name string) string {
	idx := strings.Index(name, "_")
	contract.Assertf(idx > 0 && idx < len(name)-1, "Invalid snake case name %s", name)
	name = name[idx+1:]
	contract.Assertf(len(name) > 0, "Invalid snake case name %s", name)
	return strcase.ToPascal(name)
}

func makeDataSource(mod string, name string) tokens.ModuleMember {
	name = convertName(name)
	return tfbridge.MakeDataSource("whisparr", mod, "get"+name)
}

func makeResource(mod string, res string) tokens.Type {
	return tfbridge.MakeResource("whisparr", mod, convertName(res))
}

// Provider returns additional overlaid schema and metadata associated with the provider..
func Provider() tfbridge.ProviderInfo {
	// Instantiate the Terraform provider
	p := pf.ShimProvider(shimprovider.NewProvider(version.Version)())

	// Create a Pulumi provider mapping
	return tfbridge.ProviderInfo{
		Name: "whisparr",
		P:    p,
		// DisplayName is a way to be able to change the casing of the provider
		// name when being displayed on the Pulumi registry
		DisplayName: "whisparr",
		// The default publisher for all packages is Pulumi.
		// Change this to your personal name (or a company name) that you
		// would like to be shown in the Pulumi Registry if this package is published
		// there.
		Publisher: "MaienM",
		// LogoURL is optional but useful to help identify your package in the Pulumi Registry
		// if this package is published there.
		//
		// You may host a logo on a domain you control or add an SVG logo for your package
		// in your repository and use the raw content URL for that file as your logo URL.
		LogoURL: "https://raw.githubusercontent.com/MaienM/pulumi-whisparr/main/docs/whisparr.png",
		// PluginDownloadURL is an optional URL used to download the Provider
		// for use in Pulumi programs
		// e.g https://github.com/org/pulumi-provider-name/releases/
		PluginDownloadURL: "github://api.github.com/MaienM/pulumi-whisparr",
		Description:       "A Pulumi package for creating and managing a whisparr application.",
		// category/cloud tag helps with categorizing the package in the Pulumi Registry.
		// For all available categories, see `Keywords` in
		// https://www.pulumi.com/docs/guides/pulumi-packages/schema/#package.
		Keywords: []string{
			"pulumi",
			"whisparr",
			"category/infrastructure",
		},
		License:    "Apache-2.0",
		Homepage:   "https://github.com/MaienM/pulumi-whisparr",
		Repository: "https://github.com/MaienM/pulumi-whisparr",
		// The GitHub Org for the provider - defaults to `terraform-providers`. Note that this
		// should match the TF provider module's require directive, not any replace directives.
		Version:      version.Version,
		GitHubOrg:    "devopsarr",
		MetadataInfo: tfbridge.NewProviderMetadata(bridgeMetadata),
		Config:       map[string]*tfbridge.SchemaInfo{
			// Add any required configuration here, or remove the example below if
			// no additional points are required.
			// "region": {
			// 	Type: tfbridge.MakeType("region", "Region"),
			// 	Default: &tfbridge.DefaultInfo{
			// 		EnvVars: []string{"AWS_REGION", "AWS_DEFAULT_REGION"},
			// 	},
			// },
		},
		Resources: map[string]*tfbridge.ResourceInfo{
			"whisparr_download_client":                          {Tok: makeResource(modDownloadClients, "whisparr_download_client")},
			"whisparr_download_client_aria2":                    {Tok: makeResource(modDownloadClients, "whisparr_download_client_aria2")},
			"whisparr_download_client_config":                   {Tok: makeResource(modDownloadClients, "whisparr_download_client_config")},
			"whisparr_download_client_deluge":                   {Tok: makeResource(modDownloadClients, "whisparr_download_client_deluge")},
			"whisparr_download_client_flood":                    {Tok: makeResource(modDownloadClients, "whisparr_download_client_flood")},
			"whisparr_download_client_hadouken":                 {Tok: makeResource(modDownloadClients, "whisparr_download_client_hadouken")},
			"whisparr_download_client_nzbget":                   {Tok: makeResource(modDownloadClients, "whisparr_download_client_nzbget")},
			"whisparr_download_client_nzbvortex":                {Tok: makeResource(modDownloadClients, "whisparr_download_client_nzbvortex")},
			"whisparr_download_client_pneumatic":                {Tok: makeResource(modDownloadClients, "whisparr_download_client_pneumatic")},
			"whisparr_download_client_qbittorrent":              {Tok: makeResource(modDownloadClients, "whisparr_download_client_qbittorrent")},
			"whisparr_download_client_rtorrent":                 {Tok: makeResource(modDownloadClients, "whisparr_download_client_rtorrent")},
			"whisparr_download_client_sabnzbd":                  {Tok: makeResource(modDownloadClients, "whisparr_download_client_sabnzbd")},
			"whisparr_download_client_torrent_blackhole":        {Tok: makeResource(modDownloadClients, "whisparr_download_client_torrent_blackhole")},
			"whisparr_download_client_torrent_download_station": {Tok: makeResource(modDownloadClients, "whisparr_download_client_torrent_download_station")},
			"whisparr_download_client_transmission":             {Tok: makeResource(modDownloadClients, "whisparr_download_client_transmission")},
			"whisparr_download_client_usenet_blackhole":         {Tok: makeResource(modDownloadClients, "whisparr_download_client_usenet_blackhole")},
			"whisparr_download_client_usenet_download_station":  {Tok: makeResource(modDownloadClients, "whisparr_download_client_usenet_download_station")},
			"whisparr_download_client_utorrent":                 {Tok: makeResource(modDownloadClients, "whisparr_download_client_utorrent")},
			"whisparr_download_client_vuze":                     {Tok: makeResource(modDownloadClients, "whisparr_download_client_vuze")},
			"whisparr_remote_path_mapping":                      {Tok: makeResource(modDownloadClients, "whisparr_remote_path_mapping")},

			"whisparr_import_list":                 {Tok: makeResource(modImportLists, "whisparr_import_list")},
			"whisparr_import_list_config":          {Tok: makeResource(modImportLists, "whisparr_import_list_config")},
			"whisparr_import_list_couch_potato":    {Tok: makeResource(modImportLists, "whisparr_import_list_couch_potato")},
			"whisparr_import_list_custom":          {Tok: makeResource(modImportLists, "whisparr_import_list_custom")},
			"whisparr_import_list_exclusion":       {Tok: makeResource(modImportLists, "whisparr_import_list_exclusion")},
			"whisparr_import_list_imdb":            {Tok: makeResource(modImportLists, "whisparr_import_list_imdb")},
			"whisparr_import_list_plex":            {Tok: makeResource(modImportLists, "whisparr_import_list_plex")},
			"whisparr_import_list_rss":             {Tok: makeResource(modImportLists, "whisparr_import_list_rss")},
			"whisparr_import_list_stevenlu":        {Tok: makeResource(modImportLists, "whisparr_import_list_stevenlu")},
			"whisparr_import_list_stevenlu2":       {Tok: makeResource(modImportLists, "whisparr_import_list_stevenlu2")},
			"whisparr_import_list_tmdb_collection": {Tok: makeResource(modImportLists, "whisparr_import_list_tmdb_collection")},
			"whisparr_import_list_tmdb_company":    {Tok: makeResource(modImportLists, "whisparr_import_list_tmdb_company")},
			"whisparr_import_list_tmdb_keyword":    {Tok: makeResource(modImportLists, "whisparr_import_list_tmdb_keyword")},
			"whisparr_import_list_tmdb_list":       {Tok: makeResource(modImportLists, "whisparr_import_list_tmdb_list")},
			"whisparr_import_list_tmdb_person":     {Tok: makeResource(modImportLists, "whisparr_import_list_tmdb_person")},
			"whisparr_import_list_tmdb_popular":    {Tok: makeResource(modImportLists, "whisparr_import_list_tmdb_popular")},
			"whisparr_import_list_tmdb_user":       {Tok: makeResource(modImportLists, "whisparr_import_list_tmdb_user")},
			"whisparr_import_list_trakt_list":      {Tok: makeResource(modImportLists, "whisparr_import_list_trakt_list")},
			"whisparr_import_list_trakt_popular":   {Tok: makeResource(modImportLists, "whisparr_import_list_trakt_popular")},
			"whisparr_import_list_trakt_user":      {Tok: makeResource(modImportLists, "whisparr_import_list_trakt_user")},
			"whisparr_import_list_whisparr":        {Tok: makeResource(modImportLists, "whisparr_import_list_whisparr")},

			"whisparr_indexer":                {Tok: makeResource(modIndexers, "whisparr_indexer")},
			"whisparr_indexer_config":         {Tok: makeResource(modIndexers, "whisparr_indexer_config")},
			"whisparr_indexer_filelist":       {Tok: makeResource(modIndexers, "whisparr_indexer_filelist")},
			"whisparr_indexer_hdbits":         {Tok: makeResource(modIndexers, "whisparr_indexer_hdbits")},
			"whisparr_indexer_iptorrents":     {Tok: makeResource(modIndexers, "whisparr_indexer_iptorrents")},
			"whisparr_indexer_newznab":        {Tok: makeResource(modIndexers, "whisparr_indexer_newznab")},
			"whisparr_indexer_nyaa":           {Tok: makeResource(modIndexers, "whisparr_indexer_nyaa")},
			"whisparr_indexer_omgwtfnzbs":     {Tok: makeResource(modIndexers, "whisparr_indexer_omgwtfnzbs")},
			"whisparr_indexer_rarbg":          {Tok: makeResource(modIndexers, "whisparr_indexer_rarbg")},
			"whisparr_indexer_torrent_potato": {Tok: makeResource(modIndexers, "whisparr_indexer_torrent_potato")},
			"whisparr_indexer_torrent_rss":    {Tok: makeResource(modIndexers, "whisparr_indexer_torrent_rss")},
			"whisparr_indexer_torznab":        {Tok: makeResource(modIndexers, "whisparr_indexer_torznab")},
			"whisparr_restriction":            {Tok: makeResource(modIndexers, "whisparr_restriction")},

			"whisparr_media_management": {Tok: makeResource(modMediaManagement, "whisparr_media_management")},
			"whisparr_naming":           {Tok: makeResource(modMediaManagement, "whisparr_naming")},
			"whisparr_root_folder":      {Tok: makeResource(modMediaManagement, "whisparr_root_folder")},

			"whisparr_metadata":         {Tok: makeResource(modMetadata, "whisparr_metadata")},
			"whisparr_metadata_config":  {Tok: makeResource(modMetadata, "whisparr_metadata_config")},
			"whisparr_metadata_emby":    {Tok: makeResource(modMetadata, "whisparr_metadata_emby")},
			"whisparr_metadata_kodi":    {Tok: makeResource(modMetadata, "whisparr_metadata_kodi")},
			"whisparr_metadata_roksbox": {Tok: makeResource(modMetadata, "whisparr_metadata_roksbox")},
			"whisparr_metadata_wdtv":    {Tok: makeResource(modMetadata, "whisparr_metadata_wdtv")},

			"whisparr_movie": {Tok: makeResource(modMovies, "whisparr_movie")},

			"whisparr_notification":                  {Tok: makeResource(modNotifications, "whisparr_notification")},
			"whisparr_notification_boxcar":           {Tok: makeResource(modNotifications, "whisparr_notification_boxcar")},
			"whisparr_notification_custom_script":    {Tok: makeResource(modNotifications, "whisparr_notification_custom_script")},
			"whisparr_notification_discord":          {Tok: makeResource(modNotifications, "whisparr_notification_discord")},
			"whisparr_notification_email":            {Tok: makeResource(modNotifications, "whisparr_notification_email")},
			"whisparr_notification_emby":             {Tok: makeResource(modNotifications, "whisparr_notification_emby")},
			"whisparr_notification_gotify":           {Tok: makeResource(modNotifications, "whisparr_notification_gotify")},
			"whisparr_notification_join":             {Tok: makeResource(modNotifications, "whisparr_notification_join")},
			"whisparr_notification_kodi":             {Tok: makeResource(modNotifications, "whisparr_notification_kodi")},
			"whisparr_notification_mailgun":          {Tok: makeResource(modNotifications, "whisparr_notification_mailgun")},
			"whisparr_notification_notifiarr":        {Tok: makeResource(modNotifications, "whisparr_notification_notifiarr")},
			"whisparr_notification_plex":             {Tok: makeResource(modNotifications, "whisparr_notification_plex")},
			"whisparr_notification_prowl":            {Tok: makeResource(modNotifications, "whisparr_notification_prowl")},
			"whisparr_notification_pushbullet":       {Tok: makeResource(modNotifications, "whisparr_notification_pushbullet")},
			"whisparr_notification_pushover":         {Tok: makeResource(modNotifications, "whisparr_notification_pushover")},
			"whisparr_notification_sendgrid":         {Tok: makeResource(modNotifications, "whisparr_notification_sendgrid")},
			"whisparr_notification_simplepush":       {Tok: makeResource(modNotifications, "whisparr_notification_simplepush")},
			"whisparr_notification_slack":            {Tok: makeResource(modNotifications, "whisparr_notification_slack")},
			"whisparr_notification_synology_indexer": {Tok: makeResource(modNotifications, "whisparr_notification_synology_indexer")},
			"whisparr_notification_telegram":         {Tok: makeResource(modNotifications, "whisparr_notification_telegram")},
			"whisparr_notification_trakt":            {Tok: makeResource(modNotifications, "whisparr_notification_trakt")},
			"whisparr_notification_twitter":          {Tok: makeResource(modNotifications, "whisparr_notification_twitter")},
			"whisparr_notification_webhook":          {Tok: makeResource(modNotifications, "whisparr_notification_webhook")},

			"whisparr_custom_format":      {Tok: makeResource(modProfiles, "whisparr_custom_format")},
			"whisparr_delay_profile":      {Tok: makeResource(modProfiles, "whisparr_delay_profile")},
			"whisparr_quality_definition": {Tok: makeResource(modProfiles, "whisparr_quality_definition")},
			"whisparr_quality_profile":    {Tok: makeResource(modProfiles, "whisparr_quality_profile")},

			"whisparr_tag": {Tok: makeResource(modTags, "whisparr_tag")},
		},
		DataSources: map[string]*tfbridge.DataSourceInfo{
			"whisparr_download_client":        {Tok: makeDataSource(modDownloadClients, "whisparr_download_client")},
			"whisparr_download_client_config": {Tok: makeDataSource(modDownloadClients, "whisparr_download_client_config")},
			"whisparr_download_clients":       {Tok: makeDataSource(modDownloadClients, "whisparr_download_clients")},
			"whisparr_remote_path_mapping":    {Tok: makeDataSource(modDownloadClients, "whisparr_remote_path_mapping")},
			"whisparr_remote_path_mappings":   {Tok: makeDataSource(modDownloadClients, "whisparr_remote_path_mappings")},

			"whisparr_import_list":            {Tok: makeDataSource(modImportLists, "whisparr_import_list")},
			"whisparr_import_list_config":     {Tok: makeDataSource(modImportLists, "whisparr_import_list_config")},
			"whisparr_import_list_exclusion":  {Tok: makeDataSource(modImportLists, "whisparr_import_list_exclusion")},
			"whisparr_import_list_exclusions": {Tok: makeDataSource(modImportLists, "whisparr_import_list_exclusions")},
			"whisparr_import_lists":           {Tok: makeDataSource(modImportLists, "whisparr_import_lists")},

			"whisparr_indexer":        {Tok: makeDataSource(modIndexers, "whisparr_indexer")},
			"whisparr_indexer_config": {Tok: makeDataSource(modIndexers, "whisparr_indexer_config")},
			"whisparr_indexers":       {Tok: makeDataSource(modIndexers, "whisparr_indexers")},
			"whisparr_restriction":    {Tok: makeDataSource(modIndexers, "whisparr_restriction")},
			"whisparr_restrictions":   {Tok: makeDataSource(modIndexers, "whisparr_restrictions")},

			"whisparr_language":  {Tok: makeDataSource(modLanguages, "whisparr_language")},
			"whisparr_languages": {Tok: makeDataSource(modLanguages, "whisparr_languages")},

			"whisparr_media_management": {Tok: makeDataSource(modMediaManagement, "whisparr_media_management")},
			"whisparr_naming":           {Tok: makeDataSource(modMediaManagement, "whisparr_naming")},
			"whisparr_root_folder":      {Tok: makeDataSource(modMediaManagement, "whisparr_root_folder")},
			"whisparr_root_folders":     {Tok: makeDataSource(modMediaManagement, "whisparr_root_folders")},

			"whisparr_metadata":           {Tok: makeDataSource(modMetadata, "whisparr_metadata")},
			"whisparr_metadata_config":    {Tok: makeDataSource(modMetadata, "whisparr_metadata_config")},
			"whisparr_metadata_consumers": {Tok: makeDataSource(modMetadata, "whisparr_metadata_consumers")},

			"whisparr_movie":  {Tok: makeDataSource(modMovies, "whisparr_movie")},
			"whisparr_movies": {Tok: makeDataSource(modMovies, "whisparr_movies")},

			"whisparr_notification":  {Tok: makeDataSource(modNotifications, "whisparr_notification")},
			"whisparr_notifications": {Tok: makeDataSource(modNotifications, "whisparr_notifications")},

			"whisparr_custom_format":                            {Tok: makeDataSource(modProfiles, "whisparr_custom_format")},
			"whisparr_custom_format_condition":                  {Tok: makeDataSource(modProfiles, "whisparr_custom_format_condition")},
			"whisparr_custom_format_condition_edition":          {Tok: makeDataSource(modProfiles, "whisparr_custom_format_condition_edition")},
			"whisparr_custom_format_condition_indexer_flag":     {Tok: makeDataSource(modProfiles, "whisparr_custom_format_condition_indexer_flag")},
			"whisparr_custom_format_condition_language":         {Tok: makeDataSource(modProfiles, "whisparr_custom_format_condition_language")},
			"whisparr_custom_format_condition_quality_modifier": {Tok: makeDataSource(modProfiles, "whisparr_custom_format_condition_quality_modifier")},
			"whisparr_custom_format_condition_release_title":    {Tok: makeDataSource(modProfiles, "whisparr_custom_format_condition_release_title")},
			"whisparr_custom_format_condition_resolution":       {Tok: makeDataSource(modProfiles, "whisparr_custom_format_condition_resolution")},
			"whisparr_custom_format_condition_size":             {Tok: makeDataSource(modProfiles, "whisparr_custom_format_condition_size")},
			"whisparr_custom_format_condition_source":           {Tok: makeDataSource(modProfiles, "whisparr_custom_format_condition_source")},
			"whisparr_custom_formats":                           {Tok: makeDataSource(modProfiles, "whisparr_custom_formats")},
			"whisparr_delay_profile":                            {Tok: makeDataSource(modProfiles, "whisparr_delay_profile")},
			"whisparr_delay_profiles":                           {Tok: makeDataSource(modProfiles, "whisparr_delay_profiles")},
			"whisparr_quality":                                  {Tok: makeDataSource(modProfiles, "whisparr_quality")},
			"whisparr_quality_definition":                       {Tok: makeDataSource(modProfiles, "whisparr_quality_definition")},
			"whisparr_quality_definitions":                      {Tok: makeDataSource(modProfiles, "whisparr_quality_definitions")},
			"whisparr_quality_profile":                          {Tok: makeDataSource(modProfiles, "whisparr_quality_profile")},
			"whisparr_quality_profiles":                         {Tok: makeDataSource(modProfiles, "whisparr_quality_profiles")},

			"whisparr_system_status": {Tok: makeDataSource(modStatus, "whisparr_system_status")},

			"whisparr_tag":  {Tok: makeDataSource(modTags, "whisparr_tag")},
			"whisparr_tags": {Tok: makeDataSource(modTags, "whisparr_tags")},
		},
		JavaScript: &tfbridge.JavaScriptInfo{
			PackageName: "@maienm/pulumi-whisparr",

			// List any npm dependencies and their versions
			Dependencies: map[string]string{
				"@pulumi/pulumi": "^3.0.0",
			},
			DevDependencies: map[string]string{
				"@types/node": "^10.0.0", // so we can access strongly typed node definitions.
				"@types/mime": "^2.0.0",
			},
			// See the documentation for tfbridge.OverlayInfo for how to lay out this
			// section, or refer to the AWS provider. Delete this section if there are
			// no overlay files.
			//Overlay: &tfbridge.OverlayInfo{},
		},
		Python: &tfbridge.PythonInfo{
			PackageName: "pulumi_whisparr",

			// List any Python dependencies and their version ranges
			Requires: map[string]string{
				"pulumi": ">=3.0.0,<4.0.0",
			},
		},
		Golang: &tfbridge.GolangInfo{
			ImportBasePath: filepath.Join(
				fmt.Sprintf("github.com/MaienM/pulumi-%[1]s/sdk/", "whisparr"),
				tfbridge.GetModuleMajorVersion(version.Version),
				"go",
				"whisparr",
			),
			GenerateResourceContainerTypes: true,
		},
		CSharp: &tfbridge.CSharpInfo{
			RootNamespace: "MaienM",

			PackageReferences: map[string]string{
				"Pulumi": "3.*",
			},
		},
		Java: &tfbridge.JavaInfo{
			BasePackage: "com.maienm",
		},
	}
}
