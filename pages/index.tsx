import { qbData } from "@/scripts/qb-data"
import { teamData } from "@/scripts/team-data"
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
            {qbData ? "has fetched QB data" : "has not fetched QB data"}
          </span>
        </div>
      </main>
    </div>
  )
}
