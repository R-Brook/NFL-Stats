import { qbDataSeason } from "@/scripts/generated-files/qb-data-season"
import Head from "next/head"
import Image from "next/image"

export default function Home() {
  const qbsSortedTDs = qbDataSeason.sort((a, b) =>
    a.passing_tds + a.rushing_tds > b.passing_tds + b.rushing_tds ? -1 : 1
  )

  return (
    <div>
      <Head>
        <title>NFL Stats</title>
      </Head>
      <main>
        <h1>Quarterback Stats</h1>
        <section>
          {qbsSortedTDs.map((qb, key) => (
            <div key={key} className="flex border-2 border-black p-1 gap-2">
              <div className="w-20 h-20 block relative rounded-full">
                <Image
                  // src={qb.headshot_url}
                  src={`/images/players/qbs/${qb.player_name.replace(
                    ".",
                    ""
                  )}.jpg`}
                  alt={qb.player_display_name}
                  unoptimized
                  // width="320"
                  // height="245"
                  fill={true}
                  objectFit="cover"
                  // className="border-2 border-blue-400"
                />
              </div>

              <div className="flex flex-col  border-2 border-red-200">
                <div className="flex justify-between">
                  <span>Name: {qb.player_name}</span>
                  <span>TDs: {qb.passing_tds + qb.rushing_tds}</span>
                </div>
                Passing: {qb.passing_tds} Rushing: {qb.rushing_tds}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
