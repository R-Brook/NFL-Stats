import Image from "next/image"
import { qbDataSeason } from "@/scripts/generated-files/qb-data-season"
import { getTeamColour } from "@/utils/get-team-info"

export const QBTouchdowns = () => {
  const qbsSortedByTDs = qbDataSeason
    // Add total touchdowns to each QB
    .map((qb) => ({ ...qb, total_tds: qb.passing_tds + qb.rushing_tds }))
    // Filter QBs with at least 1 touchdown
    .filter((qb) => qb.total_tds > 0)
    // Sort by total touchdowns descending
    .sort((a, b) => b.total_tds - a.total_tds)

  return (
    <>
      <h2>Quarterbacks with at least 1 touchdown this season</h2>
      <div className="flex flex-col gap-1">
        {qbsSortedByTDs.map((qb) => (
          <article
            key={qb.player_id}
            style={{
              backgroundColor: getTeamColour(qb.recent_team).primary,
            }}
            className="flex p-1 text-white"
          >
            <div className="w-20 h-20 block relative bg-white">
              <div className="relative min-w-10 w-full h-full">
                <Image
                  src={`/images/players/qbs/no-bg/${qb.player_name.replace(
                    ".",
                    ""
                  )}.png`}
                  alt={qb.player_display_name}
                  unoptimized
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-0 h-0 border-solid border-r-[40] border-t-[80] sm:border-r-[80] border-b-0 border-l-0 border-t-white border-r-transparent border-b-transparent border-l-transparent" />

            <div
              aria-hidden
              className="flex items-center justify-between gap-4"
            >
              <span>({qb.recent_team})</span>
              <span className="text-xl sm:text-2xl md:text-3xl">
                {qb.player_display_name}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row ml-auto mr-4 justify-center sm:items-center uppercase text-xs gap-1">
              <span>Passing: {qb.passing_tds}</span>
              <span>Rushing: {qb.rushing_tds}</span>
            </div>
            <span className="mr-4 text-3xl flex items-center">
              {qb.total_tds}
            </span>
          </article>
        ))}
      </div>
    </>
  )
}
