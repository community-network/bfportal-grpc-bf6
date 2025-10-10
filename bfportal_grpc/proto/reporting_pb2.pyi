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

class ReportingErrorType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    ERROR_TYPES_GENERIC_SERVICE_FAILURE: _ClassVar[ReportingErrorType]
    ERROR_TYPES_GENERIC_BUSINESS_FAILURE: _ClassVar[ReportingErrorType]
    ERROR_TYPES_INVALID_ARGUMENT: _ClassVar[ReportingErrorType]
    ERROR_TYPES_RATE_LIMITED: _ClassVar[ReportingErrorType]
UNKNOWN: Platform
PC: Platform
PS4: Platform
XBOXONE: Platform
PS5: Platform
XBSX: Platform
COMMON: Platform
STEAM: Platform
ERROR_TYPES_GENERIC_SERVICE_FAILURE: ReportingErrorType
ERROR_TYPES_GENERIC_BUSINESS_FAILURE: ReportingErrorType
ERROR_TYPES_INVALID_ARGUMENT: ReportingErrorType
ERROR_TYPES_RATE_LIMITED: ReportingErrorType

class Player(_message.Message):
    __slots__ = ("nucleusId", "personaId", "platform")
    NUCLEUSID_FIELD_NUMBER: _ClassVar[int]
    PERSONAID_FIELD_NUMBER: _ClassVar[int]
    PLATFORM_FIELD_NUMBER: _ClassVar[int]
    nucleusId: int
    personaId: int
    platform: Platform
    def __init__(self, nucleusId: _Optional[int] = ..., personaId: _Optional[int] = ..., platform: _Optional[_Union[Platform, str]] = ...) -> None: ...

class ReportPlayerRequest(_message.Message):
    __slots__ = ("offendingPlayer", "subject")
    OFFENDINGPLAYER_FIELD_NUMBER: _ClassVar[int]
    SUBJECT_FIELD_NUMBER: _ClassVar[int]
    offendingPlayer: Player
    subject: str
    def __init__(self, offendingPlayer: _Optional[_Union[Player, _Mapping]] = ..., subject: _Optional[str] = ...) -> None: ...

class ReportExperienceRequest(_message.Message):
    __slots__ = ("experienceId", "subject")
    EXPERIENCEID_FIELD_NUMBER: _ClassVar[int]
    SUBJECT_FIELD_NUMBER: _ClassVar[int]
    experienceId: str
    subject: str
    def __init__(self, experienceId: _Optional[str] = ..., subject: _Optional[str] = ...) -> None: ...

class ReportingResponse(_message.Message):
    __slots__ = ("success", "error")
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    success: CreatePetitionSuccess
    error: CreatePetitionError
    def __init__(self, success: _Optional[_Union[CreatePetitionSuccess, _Mapping]] = ..., error: _Optional[_Union[CreatePetitionError, _Mapping]] = ...) -> None: ...

class CreatePetitionSuccess(_message.Message):
    __slots__ = ("petitionId",)
    PETITIONID_FIELD_NUMBER: _ClassVar[int]
    petitionId: str
    def __init__(self, petitionId: _Optional[str] = ...) -> None: ...

class CreatePetitionError(_message.Message):
    __slots__ = ("errorType", "errorMessage")
    ERRORTYPE_FIELD_NUMBER: _ClassVar[int]
    ERRORMESSAGE_FIELD_NUMBER: _ClassVar[int]
    errorType: ReportingErrorType
    errorMessage: str
    def __init__(self, errorType: _Optional[_Union[ReportingErrorType, str]] = ..., errorMessage: _Optional[str] = ...) -> None: ...
