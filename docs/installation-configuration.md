---
title: Whisparr Installation & Configuration
meta_desc: Information on how to install the Whisparr provider.
layout: installation
---

## Installation

The Pulumi Whisparr provider is available as a package in all Pulumi languages:

* JavaScript/TypeScript: [`@maienm/pulumi-whisparr`](https://www.npmjs.com/package/@maienm/pulumi-whisparr)
* Python: [`pulumi_whisparr`](https://pypi.org/project/pulumi_whisparr/)
* Go: [`github.com/MaienM/pulumi-whisparr/sdk/go/whisparr`](https://pkg.go.dev/github.com/MaienM/pulumi-whisparr/sdk/go/whisparr)
* .NET: [`MaienM.Whisparr`](https://www.nuget.org/packages/MaienM.Whisparr)


## Configuration

> Note:  
> Replace the following **sample content**, with the configuration options
> of the wrapped Terraform provider and remove this note.

The following configuration points are available for the `whisparr` provider:

- `whisparr:apiKey` (environment: `whisparr_API_KEY`) - the API key for `whisparr`
- `whisparr:region` (environment: `whisparr_REGION`) - the region in which to deploy resources

### Provider Binary

The Whisparr provider binary is a third party binary. It can be installed using the `pulumi plugin` command.

```bash
pulumi plugin install resource whisparr <version>
```

Replace the version string `<version>` with your desired version.
