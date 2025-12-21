from pathlib import Path
import subprocess

for script in sorted(Path("scripts").glob("*.py")):
    subprocess.run(["python", script], check=True)
