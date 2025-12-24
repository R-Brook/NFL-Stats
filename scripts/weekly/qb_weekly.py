from scripts.utils.fetch_qb_data import parse_qbs

SummaryLevel = "weekly"
TriggerFileName = "qb_" + SummaryLevel
OutputFileName = "qb-data-" + SummaryLevel
OutputConstName = "qbData" + SummaryLevel.capitalize()

parse_qbs("week", TriggerFileName, OutputFileName, OutputConstName)