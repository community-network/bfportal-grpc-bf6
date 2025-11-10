import struct

compression_flag = b"\x00"


def to_length_prefixed_msg(serialized_msg: bytes):
    msg_length = struct.pack(">I", len(serialized_msg))
    return compression_flag + msg_length + serialized_msg


def from_length_prefixed_msg(serialized_msg: bytes):
    compression_flag = serialized_msg[0]
    message_length = struct.unpack(">I", serialized_msg[1:5])[0]
    return serialized_msg[5 : 5 + message_length]
