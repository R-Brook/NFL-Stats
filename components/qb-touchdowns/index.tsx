import Image from "next/image"
import { qbDataSeason } from "@/scripts/generated-files/qb-data-season"
import { getTeamColour } from "@/utils/get-team-colours"

export const QBTOuchdowns = () => {
  const qbsSortedTDs = qbDataSeason.sort((a, b) =>
    a.passing_tds + a.rushing_tds > b.passing_tds + b.rushing_tds ? -1 : 1
  )

  return (
    <>
      <h2>Quarterbacks with at least 1 touchdown this season</h2>
      <div className="flex flex-col gap-1">
        {qbsSortedTDs.map((qb, key) =>
          qb.passing_tds + qb.rushing_tds > 0 ? (
            <div
              key={key}
              style={{
                backgroundColor: getTeamColour(qb.recent_team).primary,
              }}
              className="flex p-1 text-white"
            >
              <div className="w-20 h-20 block relative bg-white">
                <Image
                  src={`/images/players/qbs/no-bg/${qb.player_name.replace(
                    ".",
                    ""
                  )}.png`}
                  alt={qb.player_display_name}
                  unoptimized
                  fill={true}
                  objectFit="cover"
                />
              </div>
              <div className="w-0 h-o border-solid border-t-[80] border-r-[80] border-b-0 border-l-0 border-t-white border-r-transparent border-b-transparent border-l-transparent rotate-0" />

              <div className="flex">
                <div className="flex items-center justify-between gap-4">
                  <span>({qb.recent_team})</span>
                  <span className="text-4xl">{qb.player_display_name}</span>
                </div>
              </div>
              <span className="flex ml-auto mr-4 items-center uppercase text-xs">
                Passing: {qb.passing_tds} Rushing: {qb.rushing_tds}
              </span>
              <span className="mr-4 text-3xl flex items-center">
                {qb.passing_tds + qb.rushing_tds}
              </span>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </>
  )
}
