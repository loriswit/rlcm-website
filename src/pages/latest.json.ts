import type {GitHubRelease} from "../util/types.ts"

export async function GET() {
    const res = await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPO}/releases/latest`)
    const release = await res.json() as GitHubRelease

    if (res.status >= 400)
        return new Response(`An error occurred: ${release.message}`, {status: res.status})

    const version = release.tag_name.match(/[\d.]+/)?.[0]
    if (!version)
        return new Response(`Parsing error: ${release.tag_name}`, {status: 400})

    const versionNum = Number(version.replaceAll(".", ""))
    const url = release.assets.find(asset => asset.name === "rlcm.exe")?.browser_download_url

    return new Response(JSON.stringify({
        number: versionNum,
        name: version,
        url,
    }), {
        headers: {"Content-Type": "application/json"},
    })
}
