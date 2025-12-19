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
          <span className="block">
            {teamData ? "has fetched team data" : "has not fetched team data"}
          </span>
          <span className="block">
            {qbDataSeason
              ? "has fetched QB season data"
              : "has not fetched QB data"}
          </span>
          <span className="block">
            {qbDataWeekly
              ? "has fetched QB weekly data"
              : "has not fetched QB data"}
          </span>
        </div>
      </main>
    </div>
  )
}
