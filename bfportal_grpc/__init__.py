import sys
from pathlib import Path


def _add_proto_files_to_python_path():
    absolute_path = Path(__file__).parent.joinpath("proto").absolute()
    if absolute_path not in sys.path:
        sys.path.append(str(absolute_path))


try:
    _add_proto_files_to_python_path()
    from .proto import (
        authentication_pb2_grpc,
        authentication_pb2,
        play_pb2_grpc,
        play_pb2,
        localization_pb2_grpc,
        localization_pb2,
        reporting_pb2_grpc,
        reporting_pb2,
    )
except ImportError:
    print("Please run `poetry run compile-proto` to compile the proto files.")
    pass
