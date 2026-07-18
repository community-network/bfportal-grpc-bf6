import json
from pathlib import Path
from google.protobuf.json_format import MessageToDict, MessageToJson


def to_file(proto, method, message):
    Path(f"temp/{proto}").mkdir(parents=True, exist_ok=True)
    print(MessageToDict(message))
    with open(f"temp/{proto}/{method}.json", "w", encoding="utf-8") as f:
        json.dump(MessageToDict(message), f, ensure_ascii=False, indent=4)
