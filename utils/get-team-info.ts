import { teamData } from "@/scripts/generated-files/team-data"

interface ITeamColours {
  primary: string
  colour_two: string
  colour_three: string
  colour_four: string
}

/**
 *
 * @param teamAbbr String of a team's abbreviated name
 * @returns An object containing all the team colours
 */
export const getTeamColour = (teamAbbr: string): ITeamColours => {
  const teamMatch = teamData.find((obj) => obj.team_abbr === teamAbbr)

  const teamColours = {
    primary: teamMatch?.team_color || "",
    colour_two: teamMatch?.team_color2 || "",
    colour_three: teamMatch?.team_color3 || "",
    colour_four: teamMatch?.team_color4 || "",
  }

  return teamColours
}

/**
 *
 * @param teamAbbr String of a team's abbreviated name
 * @returns String with the team's full name
 */
export const getFullTeamName = (teamAbbr: string): string => {
  const teamMatch = teamData.find((obj) => obj.team_abbr === teamAbbr)

  return teamMatch?.team_name || "No team"
}
