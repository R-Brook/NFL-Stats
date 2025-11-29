import os
from dotenv import load_dotenv
from balldontlie import BalldontlieAPI

def authorise_api():
  try:
    # Only load .env if it exists
    if os.path.exists(".env"):
        load_dotenv()

    # Fetch the API key from environment
    api_key = os.getenv("BALLDONTLIEAPI_KEY")
    if not api_key:
        raise ValueError(
            "BALLDONTLIEAPI_KEY not set. "
            "Set it in a local .env file or as a GitHub Actions secret."
        )

    # Initialise the API
    api = BalldontlieAPI(api_key=api_key)
    return api
  
  except Exception as e:
    print(f"ERROR: {e}")
    raise

if __name__ == "__main__":
    authorise_api()
