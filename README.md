# RLCM website

The website for the [Rayman Lengends Challenge Manager](https://github.com/loriswit/rlcm).

## Installation

Create [Neon database](https://neon.tech/) with the following table.

```sql
create table public.downloads
(
    id      serial primary key,
    date    timestamp not null,
    version text      not null,
    country text
);
```

Clone this repository and install dependencies.

```
npm install
```

Define the following environment variables.

| Variable              | Description                                        |
|-----------------------|----------------------------------------------------|
| `DATABASE_URL`        | The database connection string                     |
| `IPAPI_KEY`           | The [ipapi](https://ipapi.com/) access key         |
| `GITHUB_REPO`         | The RLCM GitHub repository (`user/repo`)           |
| `GITHUB_TOKEN`        | A GitHub access token (to increase requests limit) |
| `INIT_COUNT`          | The initial number of downloads                    |
| `IGNORE_STATS_RANGES` | A list of ID ranges to discard from stats          |
| `DISCORD_URL`         | A link to the Discord server                       |

Start the development server.

```
npm run dev
```

Or deploy to [Vercel](https://vercel.com/).

```
npx vercel deploy
```
