import type {APIContext} from "astro"
import {sql} from "../../util/db.ts"

export async function GET({params, clientAddress}: APIContext) {
    const apiRoot = "https://api.ipgeolocation.io"
    const apiKey = process.env.IPGEOLOC_KEY
    const res = await fetch(`${apiRoot}/ipgeo?apiKey=${apiKey}&ip=${clientAddress}&fields=country_code2`)
    const clientInfo = await res.json()

    if (res.status >= 400)
        console.warn(`Request failed (${res.status}): ${clientInfo.message}`)

    const country = clientInfo.country_code2 ?? null
    if (!country)
        console.warn(`Warning: could not find country for client ${clientAddress}`)

    try {
        await sql`insert into downloads (date, version, country)
                  values (now(), ${params.version}, ${country})`
    } catch (e) {
        console.warn("Warning: could not increment download count")
        console.warn(e)
    }
    return new Response()
}
