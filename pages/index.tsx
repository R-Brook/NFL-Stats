import { nGSStatsPassing } from "@/scripts/generated-files/ngs-data-passing"
import { nGSStatsReceiving } from "@/scripts/generated-files/ngs-data-receiving"
import { nGSStatsRushing } from "@/scripts/generated-files/ngs-data-rushing"
import { qbDataSeason } from "@/scripts/generated-files/qb-data-season"
import { qbDataWeekly } from "@/scripts/generated-files/qb-data-weekly"
import { teamData } from "@/scripts/generated-files/team-data"
import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>NFL Stats</title>
      </Head>
      <main>
        <div>
          <h1>NFL Stats</h1>
          <ul>
            <li>{teamData && "has fetched team data"}</li>
            <li>{qbDataSeason && "has fetched QB season data"}</li>
            <li>{qbDataWeekly && "has fetched QB weekly data"}</li>
            <li>{nGSStatsPassing && "has fetched NGS passing"}</li>
            <li>{nGSStatsReceiving && "has fetched NGS passing"}</li>
            <li>{nGSStatsRushing && "has fetched NGS passing"}</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
