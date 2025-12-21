from utils.fetch_qb_data import parse_qbs

SummaryLevel = "season"
TriggerFileName = "qb_" + SummaryLevel
OutputFileName = "qb-data-" + SummaryLevel
OutputConstName = "qbData" + SummaryLevel.capitalize()

parse_qbs("reg", TriggerFileName, OutputFileName, OutputConstName)