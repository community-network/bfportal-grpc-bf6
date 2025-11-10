from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class SidList(_message.Message):
    __slots__ = ("sids",)
    SIDS_FIELD_NUMBER: _ClassVar[int]
    sids: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, sids: _Optional[_Iterable[str]] = ...) -> None: ...

class CategoryIdList(_message.Message):
    __slots__ = ("ids",)
    IDS_FIELD_NUMBER: _ClassVar[int]
    ids: _containers.RepeatedScalarFieldContainer[int]
    def __init__(self, ids: _Optional[_Iterable[int]] = ...) -> None: ...

class SubCategoryIdList(_message.Message):
    __slots__ = ("ids",)
    IDS_FIELD_NUMBER: _ClassVar[int]
    ids: _containers.RepeatedScalarFieldContainer[int]
    def __init__(self, ids: _Optional[_Iterable[int]] = ...) -> None: ...

class TranslationsQuery(_message.Message):
    __slots__ = ("sidList", "categoryIdList", "subCategoryIdList")
    SIDLIST_FIELD_NUMBER: _ClassVar[int]
    CATEGORYIDLIST_FIELD_NUMBER: _ClassVar[int]
    SUBCATEGORYIDLIST_FIELD_NUMBER: _ClassVar[int]
    sidList: SidList
    categoryIdList: CategoryIdList
    subCategoryIdList: SubCategoryIdList
    def __init__(self, sidList: _Optional[_Union[SidList, _Mapping]] = ..., categoryIdList: _Optional[_Union[CategoryIdList, _Mapping]] = ..., subCategoryIdList: _Optional[_Union[SubCategoryIdList, _Mapping]] = ...) -> None: ...

class LocalizedText(_message.Message):
    __slots__ = ("sid", "localizedText", "categoryId")
    SID_FIELD_NUMBER: _ClassVar[int]
    LOCALIZEDTEXT_FIELD_NUMBER: _ClassVar[int]
    CATEGORYID_FIELD_NUMBER: _ClassVar[int]
    sid: str
    localizedText: str
    categoryId: int
    def __init__(self, sid: _Optional[str] = ..., localizedText: _Optional[str] = ..., categoryId: _Optional[int] = ...) -> None: ...

class Timestamp(_message.Message):
    __slots__ = ("seconds", "nanos")
    SECONDS_FIELD_NUMBER: _ClassVar[int]
    NANOS_FIELD_NUMBER: _ClassVar[int]
    seconds: int
    nanos: int
    def __init__(self, seconds: _Optional[int] = ..., nanos: _Optional[int] = ...) -> None: ...

class GetTranslationsRequest(_message.Message):
    __slots__ = ("translationsQuery", "locale", "fetchFrom")
    TRANSLATIONSQUERY_FIELD_NUMBER: _ClassVar[int]
    LOCALE_FIELD_NUMBER: _ClassVar[int]
    FETCHFROM_FIELD_NUMBER: _ClassVar[int]
    translationsQuery: TranslationsQuery
    locale: str
    fetchFrom: Timestamp
    def __init__(self, translationsQuery: _Optional[_Union[TranslationsQuery, _Mapping]] = ..., locale: _Optional[str] = ..., fetchFrom: _Optional[_Union[Timestamp, _Mapping]] = ...) -> None: ...

class GetTranslationsResponse(_message.Message):
    __slots__ = ("localizedTexts", "fetchedUntil")
    LOCALIZEDTEXTS_FIELD_NUMBER: _ClassVar[int]
    FETCHEDUNTIL_FIELD_NUMBER: _ClassVar[int]
    localizedTexts: _containers.RepeatedCompositeFieldContainer[LocalizedText]
    fetchedUntil: Timestamp
    def __init__(self, localizedTexts: _Optional[_Iterable[_Union[LocalizedText, _Mapping]]] = ..., fetchedUntil: _Optional[_Union[Timestamp, _Mapping]] = ...) -> None: ...
