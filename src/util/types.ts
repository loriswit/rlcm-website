export interface GitHubRelease {
    tag_name: string,
    assets: GithubReleaseAsset[]
    message?: string
}

export interface GithubReleaseAsset {
    name: string,
    download_count: number,
    browser_download_url: string,
}

export interface CountryInfo {
    name: {
        common: string
    }
    cca2: string
}

export type StatsRange = [number, number]
