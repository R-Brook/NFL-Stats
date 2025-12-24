from scripts.utils.fetch_ngs import parse_ngs

StatType = "receiving"
OutputFile = "ngs-data-" + StatType
VariableName = "nGSStats" + StatType.capitalize()

parse_ngs(StatType, OutputFile, VariableName)