from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Platform(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    UNKNOWN: _ClassVar[Platform]
    PC: _ClassVar[Platform]
    PS4: _ClassVar[Platform]
    XBOXONE: _ClassVar[Platform]
    PS5: _ClassVar[Platform]
    XBSX: _ClassVar[Platform]
    COMMON: _ClassVar[Platform]
    STEAM: _ClassVar[Platform]

class Reason(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    NONE: _ClassVar[Reason]
    SYNC: _ClassVar[Reason]
UNKNOWN: Platform
PC: Platform
PS4: Platform
XBOXONE: Platform
PS5: Platform
XBSX: Platform
COMMON: Platform
STEAM: Platform
NONE: Reason
SYNC: Reason

class Player(_message.Message):
    __slots__ = ("nucleusId", "personaId", "platform")
    NUCLEUSID_FIELD_NUMBER: _ClassVar[int]
    PERSONAID_FIELD_NUMBER: _ClassVar[int]
    PLATFORM_FIELD_NUMBER: _ClassVar[int]
    nucleusId: int
    personaId: int
    platform: Platform
    def __init__(self, nucleusId: _Optional[int] = ..., personaId: _Optional[int] = ..., platform: _Optional[_Union[Platform, str]] = ...) -> None: ...

class AuthCodeAuthentication(_message.Message):
    __slots__ = ("authCode", "platform", "redirectUri", "patchVersion", "protocolVersion")
    AUTHCODE_FIELD_NUMBER: _ClassVar[int]
    PLATFORM_FIELD_NUMBER: _ClassVar[int]
    REDIRECTURI_FIELD_NUMBER: _ClassVar[int]
    PATCHVERSION_FIELD_NUMBER: _ClassVar[int]
    PROTOCOLVERSION_FIELD_NUMBER: _ClassVar[int]
    authCode: str
    platform: Platform
    redirectUri: str
    patchVersion: str
    protocolVersion: str
    def __init__(self, authCode: _Optional[str] = ..., platform: _Optional[_Union[Platform, str]] = ..., redirectUri: _Optional[str] = ..., patchVersion: _Optional[str] = ..., protocolVersion: _Optional[str] = ...) -> None: ...

class Duration(_message.Message):
    __slots__ = ("seconds", "nanos")
    SECONDS_FIELD_NUMBER: _ClassVar[int]
    NANOS_FIELD_NUMBER: _ClassVar[int]
    seconds: int
    nanos: int
    def __init__(self, seconds: _Optional[int] = ..., nanos: _Optional[int] = ...) -> None: ...

class TimeTravel(_message.Message):
    __slots__ = ("offset",)
    OFFSET_FIELD_NUMBER: _ClassVar[int]
    offset: Duration
    def __init__(self, offset: _Optional[_Union[Duration, _Mapping]] = ...) -> None: ...

class ProtocolVersionOverride(_message.Message):
    __slots__ = ("original", "overridden", "reason")
    ORIGINAL_FIELD_NUMBER: _ClassVar[int]
    OVERRIDDEN_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    original: str
    overridden: str
    reason: Reason
    def __init__(self, original: _Optional[str] = ..., overridden: _Optional[str] = ..., reason: _Optional[_Union[Reason, str]] = ...) -> None: ...

class Empty(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class AuthenticationResponse(_message.Message):
    __slots__ = ("sessionId", "player", "timeTravel", "protocolVersionOverride", "patchVersion")
    SESSIONID_FIELD_NUMBER: _ClassVar[int]
    PLAYER_FIELD_NUMBER: _ClassVar[int]
    TIMETRAVEL_FIELD_NUMBER: _ClassVar[int]
    PROTOCOLVERSIONOVERRIDE_FIELD_NUMBER: _ClassVar[int]
    PATCHVERSION_FIELD_NUMBER: _ClassVar[int]
    sessionId: str
    player: Player
    timeTravel: TimeTravel
    protocolVersionOverride: ProtocolVersionOverride
    patchVersion: str
    def __init__(self, sessionId: _Optional[str] = ..., player: _Optional[_Union[Player, _Mapping]] = ..., timeTravel: _Optional[_Union[TimeTravel, _Mapping]] = ..., protocolVersionOverride: _Optional[_Union[ProtocolVersionOverride, _Mapping]] = ..., patchVersion: _Optional[str] = ...) -> None: ...
