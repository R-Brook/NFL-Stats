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
          {teamData ? "has fetched data" : "has not fetched data"}
        </div>
      </main>
    </div>
  )
}
