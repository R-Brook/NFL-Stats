import Image from "next/image"
import { qbDataSeason } from "@/scripts/generated-files/qb-data-season"
import { teamData } from "@/scripts/generated-files/team-data"

export const QBTOuchdowns = () => {
  const qbsSortedTDs = qbDataSeason.sort((a, b) =>
    a.passing_tds + a.rushing_tds > b.passing_tds + b.rushing_tds ? -1 : 1
  )

  const getTeamColour = (playerTeam: string) => {
    // for each player's team
    // loop through team-data and get matching colour
    const teamColour = teamData.find((obj) => obj.team_abbr === playerTeam)
    return teamColour?.team_color || ""
  }

  return (
    <div className="flex flex-col gap-1">
      {qbsSortedTDs.map((qb, key) => (
        <div
          key={key}
          style={{ backgroundColor: getTeamColour(qb.recent_team) }}
          className="flex p-1 gap-2 text-white"
        >
          <div className="w-20 h-20 block relative rounded-full">
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

          <div className="flex flex-col  ">
            <div className="flex justify-between">
              <span>{qb.player_display_name}</span>
              <span>TDs: {qb.passing_tds + qb.rushing_tds}</span>
            </div>
            Passing: {qb.passing_tds} Rushing: {qb.rushing_tds}
          </div>
        </div>
      ))}
    </div>
  )
}
