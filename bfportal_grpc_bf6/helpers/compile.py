import subprocess
from pathlib import Path
import os

PROJECT_ROOT = Path(__file__).parent.parent.parent
OUT_DIR = PROJECT_ROOT / "bfportal_grpc_bf6" / "proto"
INPUT_PROTO_FILES_DIR = PROJECT_ROOT / "proto"

PROTO_FILES = [
    proto_file.relative_to(PROJECT_ROOT)
    for proto_file in list(INPUT_PROTO_FILES_DIR.glob("*.proto"))
]

BASE_COMMAND = [
    "python",
    "-m",
    "grpc_tools.protoc",
]
COMMAND_ARGUMENTS = [
    f"-I={INPUT_PROTO_FILES_DIR.relative_to(PROJECT_ROOT)}",
    f"--python_out=./{OUT_DIR.relative_to(PROJECT_ROOT)}",
    f"--grpc_python_out=./{OUT_DIR.relative_to(PROJECT_ROOT)}",
    f"--pyi_out=./{OUT_DIR.relative_to(PROJECT_ROOT)}",
    *PROTO_FILES,
]
COMPILE_COMMAND = BASE_COMMAND + COMMAND_ARGUMENTS


def compile_proto():
    # print(subprocess.list2cmdline(COMPILE_COMMAND))
    os.chdir(PROJECT_ROOT)
    command_output = subprocess.run(
        COMPILE_COMMAND,
        capture_output=True,
    )
    if command_output.returncode != 0:
        print(command_output.stdout.decode())
        print(command_output.stderr.decode())


if __name__ == "__main__":
    compile_proto()
