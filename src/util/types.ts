export interface GitHubRelease {
    tag_name: string
    assets: GithubReleaseAsset[]
    published_at: string
    body: string
    message?: string
}

export interface GithubReleaseAsset {
    name: string
    download_count: number
    browser_download_url: string
}

export interface VersionInfo {
    number: number
    name: string
    url: string
}

export interface ChangelogEntry {
    title: string
    date: Date
    changes: string[]
}

export interface CountryInfo {
    name: {
        common: string
    }
    cca2: string
}

export type StatsRange = [number, number]
