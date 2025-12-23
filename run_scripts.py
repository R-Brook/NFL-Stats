from pathlib import Path
import subprocess
import sys

exit_code = 0

# Loop through all Python scripts in the top-level of the scripts folder
for script in sorted(Path("scripts").glob("*.py")):
    try:
        print(f"Running {script}...")
        subprocess.run(["python", str(script)], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Script {script} failed: {e}")
        exit_code = 1  # Mark failure but continue to next script

# Exit with 1 if any script failed, 0 otherwise
sys.exit(exit_code)
