import type {APIContext} from "astro"
import {sql} from "../../util/db.ts"

export async function GET({params, clientAddress}: APIContext) {
    const apiKey = process.env.IPAPI_KEY
    const res = await fetch(`https://api.ipapi.com/${clientAddress}?access_key=${apiKey}`)
    const clientInfo = await res.json()

    const country = clientInfo.country_code ?? null
    if (!country)
        console.warn(`Warning: could not find country for client ${clientAddress}`)

    await sql`insert into downloads (date, version, country)
              values (now(), ${params.version}, ${country})`

    return new Response()
}
