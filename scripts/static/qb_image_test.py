import polars as pl
import nflreadpy as nfl
from pathlib import Path
import urllib.request
import re

def clean_filename(name: str) -> str:
    return re.sub(r"[^a-zA-Z0-9_ -]", "", name).replace(" ", "_")

def parse_qbs():
    out_dir = Path("public/qb_headshots")
    out_dir.mkdir(exist_ok=True)

    player_stats = nfl.load_player_stats(summary_level="reg")

    qb_data = (
        player_stats
        .filter(pl.col("position") == "QB")
        .select(["player_name", "headshot_url"])
        .unique()
        .to_dicts()
    )

    for qb in qb_data:
        url = qb.get("headshot_url")
        name = qb.get("player_name")

        if not url or not name:
            continue

        # Force a real image variant
        image_url = url.replace(
            "t_headshot_small",
            "t_headshot_small"
        )

        filename = clean_filename(name) + ".jpg"
        save_path = out_dir / filename

        try:
            with urllib.request.urlopen(image_url) as response:
                content = response.read()

            # Sanity check: images should not be tiny
            if len(content) < 10_000:
                print(f"Skipped (not image): {name}")
                continue

            save_path.write_bytes(content)
            print(f"Saved {filename}")

        except Exception as e:
            print(f"Failed {name}: {e}")

if __name__ == "__main__":
    parse_qbs()
