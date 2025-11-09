from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ExperienceOrderBy(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    EXPERIENCE_ORDER_BY_UNSPECIFIED: _ClassVar[ExperienceOrderBy]
    EXPERIENCE_ORDER_BY_UPDATED_ASC: _ClassVar[ExperienceOrderBy]
    EXPERIENCE_ORDER_BY_UPDATED_DESC: _ClassVar[ExperienceOrderBy]
    EXPERIENCE_ORDER_BY_CREATED_ASC: _ClassVar[ExperienceOrderBy]
    EXPERIENCE_ORDER_BY_CREATED_DESC: _ClassVar[ExperienceOrderBy]
    EXPERIENCE_ORDER_BY_POPULARITY_ASC: _ClassVar[ExperienceOrderBy]
    EXPERIENCE_ORDER_BY_POPULARITY_DESC: _ClassVar[ExperienceOrderBy]
    EXPERIENCE_ORDER_BY_LIKES_ASC: _ClassVar[ExperienceOrderBy]
    EXPERIENCE_ORDER_BY_LIKES_DESC: _ClassVar[ExperienceOrderBy]

class InternalCapacityType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    AI_BACKFILL: _ClassVar[InternalCapacityType]
    AI_STATIC: _ClassVar[InternalCapacityType]

class TeamBalancingMethod(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    UNSPECIFIED: _ClassVar[TeamBalancingMethod]
    EVEN_NUMBERS: _ClassVar[TeamBalancingMethod]
    EVEN_PERCENTAGE: _ClassVar[TeamBalancingMethod]
    FILL_IN_TEAM_ORDER: _ClassVar[TeamBalancingMethod]

class RotationBehavior(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    ROTATION_BEHAVIOR_LOOP: _ClassVar[RotationBehavior]
    ROTATION_BEHAVIOR_EORMM: _ClassVar[RotationBehavior]
    ROTATION_BEHAVIOR_ONE_MAP: _ClassVar[RotationBehavior]

class GameServerJoinabilitySettingValue(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    GAME_SERVER_JOINABILITY_SETTING_VALUE_UNSPECIFIED: _ClassVar[GameServerJoinabilitySettingValue]
    GAME_SERVER_JOINABILITY_SETTING_VALUE_ALLOWED: _ClassVar[GameServerJoinabilitySettingValue]
    GAME_SERVER_JOINABILITY_SETTING_VALUE_DISALLOWED: _ClassVar[GameServerJoinabilitySettingValue]

class BlazeGameSettingValue(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    BLAZE_GAME_SETTING_VALUE_UNSPECIFIED: _ClassVar[BlazeGameSettingValue]
    BLAZE_GAME_SETTING_VALUE_ALLOWED: _ClassVar[BlazeGameSettingValue]
    BLAZE_GAME_SETTING_VALUE_DISALLOWED: _ClassVar[BlazeGameSettingValue]

class ModerationStateType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    MODERATION_STATE_TYPE_UNDEFINED: _ClassVar[ModerationStateType]
    MODERATION_STATE_TYPE_IN_REVIEW: _ClassVar[ModerationStateType]
    MODERATION_STATE_TYPE_APPROVED: _ClassVar[ModerationStateType]
    MODERATION_STATE_TYPE_DENIED: _ClassVar[ModerationStateType]

class PublishStateType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    PUBLISH_STATE_TYPE_INVALID: _ClassVar[PublishStateType]
    PUBLISH_STATE_TYPE_DRAFT: _ClassVar[PublishStateType]
    PUBLISH_STATE_TYPE_PUBLISHED: _ClassVar[PublishStateType]
    PUBLISH_STATE_TYPE_ARCHIVED: _ClassVar[PublishStateType]
    PUBLISH_STATE_TYPE_ERROR: _ClassVar[PublishStateType]

class ProcessingStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    PROCESSING_STATUS_UNSPECIFIED: _ClassVar[ProcessingStatus]
    PROCESSING_STATUS_PENDING: _ClassVar[ProcessingStatus]
    PROCESSING_STATUS_PROCESSED: _ClassVar[ProcessingStatus]
    PROCESSING_STATUS_NEEDS_RECOMPILE: _ClassVar[ProcessingStatus]
    PROCESSING_STATUS_ERROR: _ClassVar[ProcessingStatus]

class AttachmentCompileStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    ATTACHMENT_COMPILE_STATUS_UNSPECIFIED: _ClassVar[AttachmentCompileStatus]
    ATTACHMENT_COMPILE_STATUS_OK: _ClassVar[AttachmentCompileStatus]
    ATTACHMENT_COMPILE_STATUS_ERROR: _ClassVar[AttachmentCompileStatus]
    ATTACHMENT_COMPILE_STATUS_INCOMPATIBLE_VERSION: _ClassVar[AttachmentCompileStatus]

class AttachmentType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    ATTACHMENT_TYPE_UNSPECIFIED: _ClassVar[AttachmentType]
    ATTACHMENT_TYPE_SPATIAL: _ClassVar[AttachmentType]
    ATTACHMENT_TYPE_SCRIPT: _ClassVar[AttachmentType]
    ATTACHMENT_TYPE_SCRIPT_DATA: _ClassVar[AttachmentType]
    ATTACHMENT_TYPE_STRINGS: _ClassVar[AttachmentType]
    ATTACHMENT_TYPE_MP_DATA: _ClassVar[AttachmentType]

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
EXPERIENCE_ORDER_BY_UNSPECIFIED: ExperienceOrderBy
EXPERIENCE_ORDER_BY_UPDATED_ASC: ExperienceOrderBy
EXPERIENCE_ORDER_BY_UPDATED_DESC: ExperienceOrderBy
EXPERIENCE_ORDER_BY_CREATED_ASC: ExperienceOrderBy
EXPERIENCE_ORDER_BY_CREATED_DESC: ExperienceOrderBy
EXPERIENCE_ORDER_BY_POPULARITY_ASC: ExperienceOrderBy
EXPERIENCE_ORDER_BY_POPULARITY_DESC: ExperienceOrderBy
EXPERIENCE_ORDER_BY_LIKES_ASC: ExperienceOrderBy
EXPERIENCE_ORDER_BY_LIKES_DESC: ExperienceOrderBy
AI_BACKFILL: InternalCapacityType
AI_STATIC: InternalCapacityType
UNSPECIFIED: TeamBalancingMethod
EVEN_NUMBERS: TeamBalancingMethod
EVEN_PERCENTAGE: TeamBalancingMethod
FILL_IN_TEAM_ORDER: TeamBalancingMethod
ROTATION_BEHAVIOR_LOOP: RotationBehavior
ROTATION_BEHAVIOR_EORMM: RotationBehavior
ROTATION_BEHAVIOR_ONE_MAP: RotationBehavior
GAME_SERVER_JOINABILITY_SETTING_VALUE_UNSPECIFIED: GameServerJoinabilitySettingValue
GAME_SERVER_JOINABILITY_SETTING_VALUE_ALLOWED: GameServerJoinabilitySettingValue
GAME_SERVER_JOINABILITY_SETTING_VALUE_DISALLOWED: GameServerJoinabilitySettingValue
BLAZE_GAME_SETTING_VALUE_UNSPECIFIED: BlazeGameSettingValue
BLAZE_GAME_SETTING_VALUE_ALLOWED: BlazeGameSettingValue
BLAZE_GAME_SETTING_VALUE_DISALLOWED: BlazeGameSettingValue
MODERATION_STATE_TYPE_UNDEFINED: ModerationStateType
MODERATION_STATE_TYPE_IN_REVIEW: ModerationStateType
MODERATION_STATE_TYPE_APPROVED: ModerationStateType
MODERATION_STATE_TYPE_DENIED: ModerationStateType
PUBLISH_STATE_TYPE_INVALID: PublishStateType
PUBLISH_STATE_TYPE_DRAFT: PublishStateType
PUBLISH_STATE_TYPE_PUBLISHED: PublishStateType
PUBLISH_STATE_TYPE_ARCHIVED: PublishStateType
PUBLISH_STATE_TYPE_ERROR: PublishStateType
PROCESSING_STATUS_UNSPECIFIED: ProcessingStatus
PROCESSING_STATUS_PENDING: ProcessingStatus
PROCESSING_STATUS_PROCESSED: ProcessingStatus
PROCESSING_STATUS_NEEDS_RECOMPILE: ProcessingStatus
PROCESSING_STATUS_ERROR: ProcessingStatus
ATTACHMENT_COMPILE_STATUS_UNSPECIFIED: AttachmentCompileStatus
ATTACHMENT_COMPILE_STATUS_OK: AttachmentCompileStatus
ATTACHMENT_COMPILE_STATUS_ERROR: AttachmentCompileStatus
ATTACHMENT_COMPILE_STATUS_INCOMPATIBLE_VERSION: AttachmentCompileStatus
ATTACHMENT_TYPE_UNSPECIFIED: AttachmentType
ATTACHMENT_TYPE_SPATIAL: AttachmentType
ATTACHMENT_TYPE_SCRIPT: AttachmentType
ATTACHMENT_TYPE_SCRIPT_DATA: AttachmentType
ATTACHMENT_TYPE_STRINGS: AttachmentType
ATTACHMENT_TYPE_MP_DATA: AttachmentType
UNKNOWN: Platform
PC: Platform
PS4: Platform
XBOXONE: Platform
PS5: Platform
XBSX: Platform
COMMON: Platform
STEAM: Platform

class DeleteAttachmentsRequest(_message.Message):
    __slots__ = ("playElementDesignId", "attachmentIds")
    PLAYELEMENTDESIGNID_FIELD_NUMBER: _ClassVar[int]
    ATTACHMENTIDS_FIELD_NUMBER: _ClassVar[int]
    playElementDesignId: str
    attachmentIds: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, playElementDesignId: _Optional[str] = ..., attachmentIds: _Optional[_Iterable[str]] = ...) -> None: ...

class DeleteAttachmentsResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetLicenseRequirementsRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetLicenseRequirementsResponse(_message.Message):
    __slots__ = ("ownedLicenses", "mapEntryRequirements")
    OWNEDLICENSES_FIELD_NUMBER: _ClassVar[int]
    MAPENTRYREQUIREMENTS_FIELD_NUMBER: _ClassVar[int]
    ownedLicenses: _containers.RepeatedScalarFieldContainer[str]
    mapEntryRequirements: _containers.RepeatedCompositeFieldContainer[MapEntryRequirement]
    def __init__(self, ownedLicenses: _Optional[_Iterable[str]] = ..., mapEntryRequirements: _Optional[_Iterable[_Union[MapEntryRequirement, _Mapping]]] = ...) -> None: ...

class MapEntryRequirement(_message.Message):
    __slots__ = ("levelName", "levelLocation", "licenseRequirements")
    LEVELNAME_FIELD_NUMBER: _ClassVar[int]
    LEVELLOCATION_FIELD_NUMBER: _ClassVar[int]
    LICENSEREQUIREMENTS_FIELD_NUMBER: _ClassVar[int]
    levelName: str
    levelLocation: str
    licenseRequirements: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, levelName: _Optional[str] = ..., levelLocation: _Optional[str] = ..., licenseRequirements: _Optional[_Iterable[str]] = ...) -> None: ...

class GetProgressionTypesRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetProgressionTypesResponse(_message.Message):
    __slots__ = ("entries",)
    ENTRIES_FIELD_NUMBER: _ClassVar[int]
    entries: _containers.RepeatedCompositeFieldContainer[ProgressionEntry]
    def __init__(self, entries: _Optional[_Iterable[_Union[ProgressionEntry, _Mapping]]] = ...) -> None: ...

class ProgressionEntry(_message.Message):
    __slots__ = ("progressionMode", "progressibles")
    PROGRESSIONMODE_FIELD_NUMBER: _ClassVar[int]
    PROGRESSIBLES_FIELD_NUMBER: _ClassVar[int]
    progressionMode: str
    progressibles: _containers.RepeatedCompositeFieldContainer[Mutator]
    def __init__(self, progressionMode: _Optional[str] = ..., progressibles: _Optional[_Iterable[_Union[Mutator, _Mapping]]] = ...) -> None: ...

class UploadExperienceThumbnailRequest(_message.Message):
    __slots__ = ("image", "mimeType")
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    MIMETYPE_FIELD_NUMBER: _ClassVar[int]
    image: bytes
    mimeType: str
    def __init__(self, image: _Optional[bytes] = ..., mimeType: _Optional[str] = ...) -> None: ...

class UploadExperienceThumbnailResponse(_message.Message):
    __slots__ = ("assetId", "url", "verificationUrl")
    ASSETID_FIELD_NUMBER: _ClassVar[int]
    URL_FIELD_NUMBER: _ClassVar[int]
    VERIFICATIONURL_FIELD_NUMBER: _ClassVar[int]
    assetId: str
    url: str
    verificationUrl: str
    def __init__(self, assetId: _Optional[str] = ..., url: _Optional[str] = ..., verificationUrl: _Optional[str] = ...) -> None: ...

class CreateModDataVersionResponse(_message.Message):
    __slots__ = ("signedUrl", "validUntil", "modLevelDataId")
    SIGNEDURL_FIELD_NUMBER: _ClassVar[int]
    VALIDUNTIL_FIELD_NUMBER: _ClassVar[int]
    MODLEVELDATAID_FIELD_NUMBER: _ClassVar[int]
    signedUrl: str
    validUntil: int
    modLevelDataId: str
    def __init__(self, signedUrl: _Optional[str] = ..., validUntil: _Optional[int] = ..., modLevelDataId: _Optional[str] = ...) -> None: ...

class CreateModDataVersionRequest(_message.Message):
    __slots__ = ("playElementId",)
    PLAYELEMENTID_FIELD_NUMBER: _ClassVar[int]
    playElementId: str
    def __init__(self, playElementId: _Optional[str] = ...) -> None: ...

class ListModDataVersionsRequest(_message.Message):
    __slots__ = ("playElementId",)
    PLAYELEMENTID_FIELD_NUMBER: _ClassVar[int]
    playElementId: str
    def __init__(self, playElementId: _Optional[str] = ...) -> None: ...

class ListModDataVersionsResponse(_message.Message):
    __slots__ = ("modDataVersions",)
    MODDATAVERSIONS_FIELD_NUMBER: _ClassVar[int]
    modDataVersions: _containers.RepeatedCompositeFieldContainer[ModDataVersion]
    def __init__(self, modDataVersions: _Optional[_Iterable[_Union[ModDataVersion, _Mapping]]] = ...) -> None: ...

class ModDataVersion(_message.Message):
    __slots__ = ("id", "playElementId", "created", "buildInfo")
    ID_FIELD_NUMBER: _ClassVar[int]
    PLAYELEMENTID_FIELD_NUMBER: _ClassVar[int]
    CREATED_FIELD_NUMBER: _ClassVar[int]
    BUILDINFO_FIELD_NUMBER: _ClassVar[int]
    id: str
    playElementId: str
    created: int
    buildInfo: ModDataVersionBuildInfo
    def __init__(self, id: _Optional[str] = ..., playElementId: _Optional[str] = ..., created: _Optional[int] = ..., buildInfo: _Optional[_Union[ModDataVersionBuildInfo, _Mapping]] = ...) -> None: ...

class ModDataVersionBuildInfo(_message.Message):
    __slots__ = ("pipelineVersion", "pending", "noBuildAvailable", "error", "success")
    PIPELINEVERSION_FIELD_NUMBER: _ClassVar[int]
    PENDING_FIELD_NUMBER: _ClassVar[int]
    NOBUILDAVAILABLE_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    pipelineVersion: str
    pending: Empty
    noBuildAvailable: Empty
    error: BuildStatusError
    success: BuildStatusSuccess
    def __init__(self, pipelineVersion: _Optional[str] = ..., pending: _Optional[_Union[Empty, _Mapping]] = ..., noBuildAvailable: _Optional[_Union[Empty, _Mapping]] = ..., error: _Optional[_Union[BuildStatusError, _Mapping]] = ..., success: _Optional[_Union[BuildStatusSuccess, _Mapping]] = ...) -> None: ...

class BuildStatusError(_message.Message):
    __slots__ = ("errorMessage",)
    ERRORMESSAGE_FIELD_NUMBER: _ClassVar[int]
    errorMessage: str
    def __init__(self, errorMessage: _Optional[str] = ...) -> None: ...

class BuildStatusSuccess(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class Empty(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetAvailableTagsRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetAvailableTagsResponse(_message.Message):
    __slots__ = ("availableTags",)
    AVAILABLETAGS_FIELD_NUMBER: _ClassVar[int]
    availableTags: AvailableTags
    def __init__(self, availableTags: _Optional[_Union[AvailableTags, _Mapping]] = ...) -> None: ...

class PlayExperience(_message.Message):
    __slots__ = ("id", "creator", "name", "description", "playElementDesign", "playerCount", "likes", "publishAt", "thumbnailUrl", "isUgc", "shortCode", "publishState")
    ID_FIELD_NUMBER: _ClassVar[int]
    CREATOR_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    PLAYELEMENTDESIGN_FIELD_NUMBER: _ClassVar[int]
    PLAYERCOUNT_FIELD_NUMBER: _ClassVar[int]
    LIKES_FIELD_NUMBER: _ClassVar[int]
    PUBLISHAT_FIELD_NUMBER: _ClassVar[int]
    THUMBNAILURL_FIELD_NUMBER: _ClassVar[int]
    ISUGC_FIELD_NUMBER: _ClassVar[int]
    SHORTCODE_FIELD_NUMBER: _ClassVar[int]
    PUBLISHSTATE_FIELD_NUMBER: _ClassVar[int]
    id: str
    creator: Creator
    name: str
    description: str
    playElementDesign: PlayElementDesign
    playerCount: int
    likes: int
    publishAt: int
    thumbnailUrl: str
    isUgc: bool
    shortCode: str
    publishState: PublishStateType
    def __init__(self, id: _Optional[str] = ..., creator: _Optional[_Union[Creator, _Mapping]] = ..., name: _Optional[str] = ..., description: _Optional[str] = ..., playElementDesign: _Optional[_Union[PlayElementDesign, _Mapping]] = ..., playerCount: _Optional[int] = ..., likes: _Optional[int] = ..., publishAt: _Optional[int] = ..., thumbnailUrl: _Optional[str] = ..., isUgc: bool = ..., shortCode: _Optional[str] = ..., publishState: _Optional[_Union[PublishStateType, str]] = ...) -> None: ...

class ListExperiencesResponse(_message.Message):
    __slots__ = ("experiences", "nextPage")
    EXPERIENCES_FIELD_NUMBER: _ClassVar[int]
    NEXTPAGE_FIELD_NUMBER: _ClassVar[int]
    experiences: _containers.RepeatedCompositeFieldContainer[PlayExperience]
    nextPage: Pagination
    def __init__(self, experiences: _Optional[_Iterable[_Union[PlayExperience, _Mapping]]] = ..., nextPage: _Optional[_Union[Pagination, _Mapping]] = ...) -> None: ...

class PlayExperienceQuery(_message.Message):
    __slots__ = ("mapsEq", "levelLocationsEq", "maxPlayerCountEq", "tagsEq", "playerCreatorEq", "ordering", "pageSize", "namePrefix", "shortCode")
    MAPSEQ_FIELD_NUMBER: _ClassVar[int]
    LEVELLOCATIONSEQ_FIELD_NUMBER: _ClassVar[int]
    MAXPLAYERCOUNTEQ_FIELD_NUMBER: _ClassVar[int]
    TAGSEQ_FIELD_NUMBER: _ClassVar[int]
    PLAYERCREATOREQ_FIELD_NUMBER: _ClassVar[int]
    ORDERING_FIELD_NUMBER: _ClassVar[int]
    PAGESIZE_FIELD_NUMBER: _ClassVar[int]
    NAMEPREFIX_FIELD_NUMBER: _ClassVar[int]
    SHORTCODE_FIELD_NUMBER: _ClassVar[int]
    mapsEq: _containers.RepeatedScalarFieldContainer[str]
    levelLocationsEq: _containers.RepeatedScalarFieldContainer[str]
    maxPlayerCountEq: _containers.RepeatedScalarFieldContainer[int]
    tagsEq: _containers.RepeatedScalarFieldContainer[str]
    playerCreatorEq: PlayerCreator
    ordering: ExperienceOrderBy
    pageSize: int
    namePrefix: str
    shortCode: str
    def __init__(self, mapsEq: _Optional[_Iterable[str]] = ..., levelLocationsEq: _Optional[_Iterable[str]] = ..., maxPlayerCountEq: _Optional[_Iterable[int]] = ..., tagsEq: _Optional[_Iterable[str]] = ..., playerCreatorEq: _Optional[_Union[PlayerCreator, _Mapping]] = ..., ordering: _Optional[_Union[ExperienceOrderBy, str]] = ..., pageSize: _Optional[int] = ..., namePrefix: _Optional[str] = ..., shortCode: _Optional[str] = ...) -> None: ...

class ListExperiencesRequest(_message.Message):
    __slots__ = ("filter", "page")
    FILTER_FIELD_NUMBER: _ClassVar[int]
    PAGE_FIELD_NUMBER: _ClassVar[int]
    filter: PlayExperienceQuery
    page: Pagination
    def __init__(self, filter: _Optional[_Union[PlayExperienceQuery, _Mapping]] = ..., page: _Optional[_Union[Pagination, _Mapping]] = ...) -> None: ...

class Pagination(_message.Message):
    __slots__ = ("pageNumber", "token")
    PAGENUMBER_FIELD_NUMBER: _ClassVar[int]
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    pageNumber: int
    token: str
    def __init__(self, pageNumber: _Optional[int] = ..., token: _Optional[str] = ...) -> None: ...

class DeletePlayElementRequest(_message.Message):
    __slots__ = ("playElementId",)
    PLAYELEMENTID_FIELD_NUMBER: _ClassVar[int]
    playElementId: str
    def __init__(self, playElementId: _Optional[str] = ...) -> None: ...

class GetScheduledBlueprintsResponse(_message.Message):
    __slots__ = ("blueprintIds",)
    BLUEPRINTIDS_FIELD_NUMBER: _ClassVar[int]
    blueprintIds: _containers.RepeatedCompositeFieldContainer[BlueprintId]
    def __init__(self, blueprintIds: _Optional[_Iterable[_Union[BlueprintId, _Mapping]]] = ...) -> None: ...

class DeletePlayElementResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetBlueprintsByIdRequest(_message.Message):
    __slots__ = ("blueprintIds",)
    BLUEPRINTIDS_FIELD_NUMBER: _ClassVar[int]
    blueprintIds: _containers.RepeatedCompositeFieldContainer[BlueprintId]
    def __init__(self, blueprintIds: _Optional[_Iterable[_Union[BlueprintId, _Mapping]]] = ...) -> None: ...

class BlueprintId(_message.Message):
    __slots__ = ("id", "version")
    ID_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    id: str
    version: str
    def __init__(self, id: _Optional[str] = ..., version: _Optional[str] = ...) -> None: ...

class GetBlueprintsByIdResponse(_message.Message):
    __slots__ = ("blueprints",)
    BLUEPRINTS_FIELD_NUMBER: _ClassVar[int]
    blueprints: _containers.RepeatedCompositeFieldContainer[Blueprint]
    def __init__(self, blueprints: _Optional[_Iterable[_Union[Blueprint, _Mapping]]] = ...) -> None: ...

class GetScheduledBlueprintsRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class Blueprint(_message.Message):
    __slots__ = ("blueprintId", "name", "availableGameData", "availableTags", "availableThumbnailUrls", "availableProgressionModeTags")
    BLUEPRINTID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    AVAILABLEGAMEDATA_FIELD_NUMBER: _ClassVar[int]
    AVAILABLETAGS_FIELD_NUMBER: _ClassVar[int]
    AVAILABLETHUMBNAILURLS_FIELD_NUMBER: _ClassVar[int]
    AVAILABLEPROGRESSIONMODETAGS_FIELD_NUMBER: _ClassVar[int]
    blueprintId: BlueprintId
    name: str
    availableGameData: AvailableGameData
    availableTags: AvailableTags
    availableThumbnailUrls: _containers.RepeatedScalarFieldContainer[str]
    availableProgressionModeTags: AvailableTags
    def __init__(self, blueprintId: _Optional[_Union[BlueprintId, _Mapping]] = ..., name: _Optional[str] = ..., availableGameData: _Optional[_Union[AvailableGameData, _Mapping]] = ..., availableTags: _Optional[_Union[AvailableTags, _Mapping]] = ..., availableThumbnailUrls: _Optional[_Iterable[str]] = ..., availableProgressionModeTags: _Optional[_Union[AvailableTags, _Mapping]] = ...) -> None: ...

class AvailableGameData(_message.Message):
    __slots__ = ("mutators", "maps", "modRules", "assetCategories", "spatialAssetInfo")
    MUTATORS_FIELD_NUMBER: _ClassVar[int]
    MAPS_FIELD_NUMBER: _ClassVar[int]
    MODRULES_FIELD_NUMBER: _ClassVar[int]
    ASSETCATEGORIES_FIELD_NUMBER: _ClassVar[int]
    SPATIALASSETINFO_FIELD_NUMBER: _ClassVar[int]
    mutators: _containers.RepeatedCompositeFieldContainer[AvailableMutator]
    maps: _containers.RepeatedCompositeFieldContainer[AvailableMapEntry]
    modRules: ModRulesDefinition
    assetCategories: AvailableAssetCategories
    spatialAssetInfo: AssetInfo
    def __init__(self, mutators: _Optional[_Iterable[_Union[AvailableMutator, _Mapping]]] = ..., maps: _Optional[_Iterable[_Union[AvailableMapEntry, _Mapping]]] = ..., modRules: _Optional[_Union[ModRulesDefinition, _Mapping]] = ..., assetCategories: _Optional[_Union[AvailableAssetCategories, _Mapping]] = ..., spatialAssetInfo: _Optional[_Union[AssetInfo, _Mapping]] = ...) -> None: ...

class AssetInfo(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class Prefab(_message.Message):
    __slots__ = ("prefabInstance", "prefabPartition", "prefabType", "gemInstance", "gemPartition", "gemType")
    PREFABINSTANCE_FIELD_NUMBER: _ClassVar[int]
    PREFABPARTITION_FIELD_NUMBER: _ClassVar[int]
    PREFABTYPE_FIELD_NUMBER: _ClassVar[int]
    GEMINSTANCE_FIELD_NUMBER: _ClassVar[int]
    GEMPARTITION_FIELD_NUMBER: _ClassVar[int]
    GEMTYPE_FIELD_NUMBER: _ClassVar[int]
    prefabInstance: str
    prefabPartition: str
    prefabType: str
    gemInstance: str
    gemPartition: str
    gemType: str
    def __init__(self, prefabInstance: _Optional[str] = ..., prefabPartition: _Optional[str] = ..., prefabType: _Optional[str] = ..., gemInstance: _Optional[str] = ..., gemPartition: _Optional[str] = ..., gemType: _Optional[str] = ...) -> None: ...

class EntityList(_message.Message):
    __slots__ = ("entity",)
    ENTITY_FIELD_NUMBER: _ClassVar[int]
    entity: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, entity: _Optional[_Iterable[str]] = ...) -> None: ...

class AvailableAssetCategories(_message.Message):
    __slots__ = ("rootTags", "tags")
    ROOTTAGS_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    rootTags: _containers.RepeatedCompositeFieldContainer[AvailableAssetCategoryTag]
    tags: _containers.RepeatedCompositeFieldContainer[AvailableAssetCategoryTag]
    def __init__(self, rootTags: _Optional[_Iterable[_Union[AvailableAssetCategoryTag, _Mapping]]] = ..., tags: _Optional[_Iterable[_Union[AvailableAssetCategoryTag, _Mapping]]] = ...) -> None: ...

class AvailableAssetCategoryTag(_message.Message):
    __slots__ = ("tagId", "name", "childrenTags", "metadata")
    TAGID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    CHILDRENTAGS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    tagId: str
    name: str
    childrenTags: _containers.RepeatedScalarFieldContainer[str]
    metadata: Metadata
    def __init__(self, tagId: _Optional[str] = ..., name: _Optional[str] = ..., childrenTags: _Optional[_Iterable[str]] = ..., metadata: _Optional[_Union[Metadata, _Mapping]] = ...) -> None: ...

class ModRulesDefinition(_message.Message):
    __slots__ = ("rulesVersion", "modBuilder")
    RULESVERSION_FIELD_NUMBER: _ClassVar[int]
    MODBUILDER_FIELD_NUMBER: _ClassVar[int]
    rulesVersion: int
    modBuilder: bytes
    def __init__(self, rulesVersion: _Optional[int] = ..., modBuilder: _Optional[bytes] = ...) -> None: ...

class AvailableTag(_message.Message):
    __slots__ = ("id", "metadata", "category")
    ID_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    CATEGORY_FIELD_NUMBER: _ClassVar[int]
    id: str
    metadata: Metadata
    category: str
    def __init__(self, id: _Optional[str] = ..., metadata: _Optional[_Union[Metadata, _Mapping]] = ..., category: _Optional[str] = ...) -> None: ...

class AvailableMapEntry(_message.Message):
    __slots__ = ("levelName", "levelLocation", "gameSize", "rounds", "allowedSpectators", "metadata", "allowedTeamsRange")
    LEVELNAME_FIELD_NUMBER: _ClassVar[int]
    LEVELLOCATION_FIELD_NUMBER: _ClassVar[int]
    GAMESIZE_FIELD_NUMBER: _ClassVar[int]
    ROUNDS_FIELD_NUMBER: _ClassVar[int]
    ALLOWEDSPECTATORS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ALLOWEDTEAMSRANGE_FIELD_NUMBER: _ClassVar[int]
    levelName: str
    levelLocation: str
    gameSize: AvailableIntValue
    rounds: AvailableIntValue
    allowedSpectators: AvailableIntValue
    metadata: Metadata
    allowedTeamsRange: AvailableIntValue
    def __init__(self, levelName: _Optional[str] = ..., levelLocation: _Optional[str] = ..., gameSize: _Optional[_Union[AvailableIntValue, _Mapping]] = ..., rounds: _Optional[_Union[AvailableIntValue, _Mapping]] = ..., allowedSpectators: _Optional[_Union[AvailableIntValue, _Mapping]] = ..., metadata: _Optional[_Union[Metadata, _Mapping]] = ..., allowedTeamsRange: _Optional[_Union[AvailableIntValue, _Mapping]] = ...) -> None: ...

class AvailableIntValue(_message.Message):
    __slots__ = ("defaultValue", "availableValues")
    DEFAULTVALUE_FIELD_NUMBER: _ClassVar[int]
    AVAILABLEVALUES_FIELD_NUMBER: _ClassVar[int]
    defaultValue: int
    availableValues: AvailableIntValues
    def __init__(self, defaultValue: _Optional[int] = ..., availableValues: _Optional[_Union[AvailableIntValues, _Mapping]] = ...) -> None: ...

class AvailableIntValues(_message.Message):
    __slots__ = ("range", "sparseValues")
    RANGE_FIELD_NUMBER: _ClassVar[int]
    SPARSEVALUES_FIELD_NUMBER: _ClassVar[int]
    range: IntRange
    sparseValues: SparseIntValues
    def __init__(self, range: _Optional[_Union[IntRange, _Mapping]] = ..., sparseValues: _Optional[_Union[SparseIntValues, _Mapping]] = ...) -> None: ...

class SparseIntValues(_message.Message):
    __slots__ = ("values",)
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedScalarFieldContainer[int]
    def __init__(self, values: _Optional[_Iterable[int]] = ...) -> None: ...

class IntRange(_message.Message):
    __slots__ = ("minValue", "maxValue")
    MINVALUE_FIELD_NUMBER: _ClassVar[int]
    MAXVALUE_FIELD_NUMBER: _ClassVar[int]
    minValue: int
    maxValue: int
    def __init__(self, minValue: _Optional[int] = ..., maxValue: _Optional[int] = ...) -> None: ...

class AvailableTags(_message.Message):
    __slots__ = ("tags",)
    TAGS_FIELD_NUMBER: _ClassVar[int]
    tags: _containers.RepeatedCompositeFieldContainer[AvailableTag]
    def __init__(self, tags: _Optional[_Iterable[_Union[AvailableTag, _Mapping]]] = ...) -> None: ...

class AvailableMutator(_message.Message):
    __slots__ = ("name", "category", "kind", "metadata", "id")
    NAME_FIELD_NUMBER: _ClassVar[int]
    CATEGORY_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    name: str
    category: str
    kind: AvailableMutatorKind
    metadata: Metadata
    id: str
    def __init__(self, name: _Optional[str] = ..., category: _Optional[str] = ..., kind: _Optional[_Union[AvailableMutatorKind, _Mapping]] = ..., metadata: _Optional[_Union[Metadata, _Mapping]] = ..., id: _Optional[str] = ...) -> None: ...

class AvailableMutatorKind(_message.Message):
    __slots__ = ("mutatorBoolean", "mutatorString", "mutatorFloatValues", "mutatorIntValues", "mutatorSparseBoolean", "mutatorSparseIntValues", "mutatorSparseFloatValues")
    MUTATORBOOLEAN_FIELD_NUMBER: _ClassVar[int]
    MUTATORSTRING_FIELD_NUMBER: _ClassVar[int]
    MUTATORFLOATVALUES_FIELD_NUMBER: _ClassVar[int]
    MUTATORINTVALUES_FIELD_NUMBER: _ClassVar[int]
    MUTATORSPARSEBOOLEAN_FIELD_NUMBER: _ClassVar[int]
    MUTATORSPARSEINTVALUES_FIELD_NUMBER: _ClassVar[int]
    MUTATORSPARSEFLOATVALUES_FIELD_NUMBER: _ClassVar[int]
    mutatorBoolean: MutatorBoolean
    mutatorString: MutatorString
    mutatorFloatValues: AvailableMutatorFloatValues
    mutatorIntValues: AvailableMutatorIntValues
    mutatorSparseBoolean: MutatorSparseBoolean
    mutatorSparseIntValues: AvailableMutatorSparseIntValues
    mutatorSparseFloatValues: AvailableMutatorSparseFloatValues
    def __init__(self, mutatorBoolean: _Optional[_Union[MutatorBoolean, _Mapping]] = ..., mutatorString: _Optional[_Union[MutatorString, _Mapping]] = ..., mutatorFloatValues: _Optional[_Union[AvailableMutatorFloatValues, _Mapping]] = ..., mutatorIntValues: _Optional[_Union[AvailableMutatorIntValues, _Mapping]] = ..., mutatorSparseBoolean: _Optional[_Union[MutatorSparseBoolean, _Mapping]] = ..., mutatorSparseIntValues: _Optional[_Union[AvailableMutatorSparseIntValues, _Mapping]] = ..., mutatorSparseFloatValues: _Optional[_Union[AvailableMutatorSparseFloatValues, _Mapping]] = ...) -> None: ...

class AvailableMutatorSparseIntValues(_message.Message):
    __slots__ = ("mutator", "availableValues")
    MUTATOR_FIELD_NUMBER: _ClassVar[int]
    AVAILABLEVALUES_FIELD_NUMBER: _ClassVar[int]
    mutator: MutatorSparseInt
    availableValues: AvailableIntValues
    def __init__(self, mutator: _Optional[_Union[MutatorSparseInt, _Mapping]] = ..., availableValues: _Optional[_Union[AvailableIntValues, _Mapping]] = ...) -> None: ...

class AvailableMutatorSparseFloatValues(_message.Message):
    __slots__ = ("mutator", "availableValues")
    MUTATOR_FIELD_NUMBER: _ClassVar[int]
    AVAILABLEVALUES_FIELD_NUMBER: _ClassVar[int]
    mutator: MutatorSparseFloat
    availableValues: AvailableFloatValues
    def __init__(self, mutator: _Optional[_Union[MutatorSparseFloat, _Mapping]] = ..., availableValues: _Optional[_Union[AvailableFloatValues, _Mapping]] = ...) -> None: ...

class CreatePlayElementRequest(_message.Message):
    __slots__ = ("name", "description", "designMetadata", "mapRotation", "mutators", "assetCategories", "originalModRules", "playElementSettings", "publishState", "modLevelDataId", "thumbnailUrl", "attachments")
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    DESIGNMETADATA_FIELD_NUMBER: _ClassVar[int]
    MAPROTATION_FIELD_NUMBER: _ClassVar[int]
    MUTATORS_FIELD_NUMBER: _ClassVar[int]
    ASSETCATEGORIES_FIELD_NUMBER: _ClassVar[int]
    ORIGINALMODRULES_FIELD_NUMBER: _ClassVar[int]
    PLAYELEMENTSETTINGS_FIELD_NUMBER: _ClassVar[int]
    PUBLISHSTATE_FIELD_NUMBER: _ClassVar[int]
    MODLEVELDATAID_FIELD_NUMBER: _ClassVar[int]
    THUMBNAILURL_FIELD_NUMBER: _ClassVar[int]
    ATTACHMENTS_FIELD_NUMBER: _ClassVar[int]
    name: str
    description: str
    designMetadata: DesignMetadata
    mapRotation: MapRotation
    mutators: _containers.RepeatedCompositeFieldContainer[Mutator]
    assetCategories: _containers.RepeatedCompositeFieldContainer[AssetCategory]
    originalModRules: bytes
    playElementSettings: PlayElementSettings
    publishState: PublishStateType
    modLevelDataId: str
    thumbnailUrl: str
    attachments: _containers.RepeatedCompositeFieldContainer[Attachment]
    def __init__(self, name: _Optional[str] = ..., description: _Optional[str] = ..., designMetadata: _Optional[_Union[DesignMetadata, _Mapping]] = ..., mapRotation: _Optional[_Union[MapRotation, _Mapping]] = ..., mutators: _Optional[_Iterable[_Union[Mutator, _Mapping]]] = ..., assetCategories: _Optional[_Iterable[_Union[AssetCategory, _Mapping]]] = ..., originalModRules: _Optional[bytes] = ..., playElementSettings: _Optional[_Union[PlayElementSettings, _Mapping]] = ..., publishState: _Optional[_Union[PublishStateType, str]] = ..., modLevelDataId: _Optional[str] = ..., thumbnailUrl: _Optional[str] = ..., attachments: _Optional[_Iterable[_Union[Attachment, _Mapping]]] = ...) -> None: ...

class AvailableMutatorFloatValues(_message.Message):
    __slots__ = ("mutator", "availableValues")
    MUTATOR_FIELD_NUMBER: _ClassVar[int]
    AVAILABLEVALUES_FIELD_NUMBER: _ClassVar[int]
    mutator: MutatorFloat
    availableValues: AvailableFloatValues
    def __init__(self, mutator: _Optional[_Union[MutatorFloat, _Mapping]] = ..., availableValues: _Optional[_Union[AvailableFloatValues, _Mapping]] = ...) -> None: ...

class AvailableFloatValues(_message.Message):
    __slots__ = ("range", "sparseValues")
    RANGE_FIELD_NUMBER: _ClassVar[int]
    SPARSEVALUES_FIELD_NUMBER: _ClassVar[int]
    range: FloatRange
    sparseValues: SparseFloatValues
    def __init__(self, range: _Optional[_Union[FloatRange, _Mapping]] = ..., sparseValues: _Optional[_Union[SparseFloatValues, _Mapping]] = ...) -> None: ...

class SparseFloatValues(_message.Message):
    __slots__ = ("values",)
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedScalarFieldContainer[float]
    def __init__(self, values: _Optional[_Iterable[float]] = ...) -> None: ...

class FloatRange(_message.Message):
    __slots__ = ("minValue", "maxValue")
    MINVALUE_FIELD_NUMBER: _ClassVar[int]
    MAXVALUE_FIELD_NUMBER: _ClassVar[int]
    minValue: float
    maxValue: float
    def __init__(self, minValue: _Optional[float] = ..., maxValue: _Optional[float] = ...) -> None: ...

class AvailableMutatorIntValues(_message.Message):
    __slots__ = ("mutator", "availableValues")
    MUTATOR_FIELD_NUMBER: _ClassVar[int]
    AVAILABLEVALUES_FIELD_NUMBER: _ClassVar[int]
    mutator: MutatorInt
    availableValues: AvailableIntValues
    def __init__(self, mutator: _Optional[_Union[MutatorInt, _Mapping]] = ..., availableValues: _Optional[_Union[AvailableIntValues, _Mapping]] = ...) -> None: ...

class UpdatePlayElementRequest(_message.Message):
    __slots__ = ("id", "name", "description", "designMetadata", "mapRotation", "mutators", "assetCategories", "originalModRules", "playElementSettings", "publishState", "modLevelDataId", "thumbnailUrl", "attachments")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    DESIGNMETADATA_FIELD_NUMBER: _ClassVar[int]
    MAPROTATION_FIELD_NUMBER: _ClassVar[int]
    MUTATORS_FIELD_NUMBER: _ClassVar[int]
    ASSETCATEGORIES_FIELD_NUMBER: _ClassVar[int]
    ORIGINALMODRULES_FIELD_NUMBER: _ClassVar[int]
    PLAYELEMENTSETTINGS_FIELD_NUMBER: _ClassVar[int]
    PUBLISHSTATE_FIELD_NUMBER: _ClassVar[int]
    MODLEVELDATAID_FIELD_NUMBER: _ClassVar[int]
    THUMBNAILURL_FIELD_NUMBER: _ClassVar[int]
    ATTACHMENTS_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    description: str
    designMetadata: DesignMetadata
    mapRotation: MapRotation
    mutators: _containers.RepeatedCompositeFieldContainer[Mutator]
    assetCategories: _containers.RepeatedCompositeFieldContainer[AssetCategory]
    originalModRules: bytes
    playElementSettings: PlayElementSettings
    publishState: PublishStateType
    modLevelDataId: str
    thumbnailUrl: str
    attachments: _containers.RepeatedCompositeFieldContainer[Attachment]
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., description: _Optional[str] = ..., designMetadata: _Optional[_Union[DesignMetadata, _Mapping]] = ..., mapRotation: _Optional[_Union[MapRotation, _Mapping]] = ..., mutators: _Optional[_Iterable[_Union[Mutator, _Mapping]]] = ..., assetCategories: _Optional[_Iterable[_Union[AssetCategory, _Mapping]]] = ..., originalModRules: _Optional[bytes] = ..., playElementSettings: _Optional[_Union[PlayElementSettings, _Mapping]] = ..., publishState: _Optional[_Union[PublishStateType, str]] = ..., modLevelDataId: _Optional[str] = ..., thumbnailUrl: _Optional[str] = ..., attachments: _Optional[_Iterable[_Union[Attachment, _Mapping]]] = ...) -> None: ...

class PlayElementResponse(_message.Message):
    __slots__ = ("playElement", "playElementDesign", "progressionMode")
    PLAYELEMENT_FIELD_NUMBER: _ClassVar[int]
    PLAYELEMENTDESIGN_FIELD_NUMBER: _ClassVar[int]
    PROGRESSIONMODE_FIELD_NUMBER: _ClassVar[int]
    playElement: PlayElement
    playElementDesign: PlayElementDesign
    progressionMode: str
    def __init__(self, playElement: _Optional[_Union[PlayElement, _Mapping]] = ..., playElementDesign: _Optional[_Union[PlayElementDesign, _Mapping]] = ..., progressionMode: _Optional[str] = ...) -> None: ...

class PlayElement(_message.Message):
    __slots__ = ("id", "designId", "creator", "name", "description", "created", "updated", "playElementSettings", "publishStateType", "likes", "publishAt", "thumbnailUrl", "moderationState", "shortCode")
    ID_FIELD_NUMBER: _ClassVar[int]
    DESIGNID_FIELD_NUMBER: _ClassVar[int]
    CREATOR_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    CREATED_FIELD_NUMBER: _ClassVar[int]
    UPDATED_FIELD_NUMBER: _ClassVar[int]
    PLAYELEMENTSETTINGS_FIELD_NUMBER: _ClassVar[int]
    PUBLISHSTATETYPE_FIELD_NUMBER: _ClassVar[int]
    LIKES_FIELD_NUMBER: _ClassVar[int]
    PUBLISHAT_FIELD_NUMBER: _ClassVar[int]
    THUMBNAILURL_FIELD_NUMBER: _ClassVar[int]
    MODERATIONSTATE_FIELD_NUMBER: _ClassVar[int]
    SHORTCODE_FIELD_NUMBER: _ClassVar[int]
    id: str
    designId: str
    creator: Creator
    name: str
    description: str
    created: int
    updated: int
    playElementSettings: PlayElementSettings
    publishStateType: PublishStateType
    likes: int
    publishAt: int
    thumbnailUrl: str
    moderationState: ModerationStateType
    shortCode: str
    def __init__(self, id: _Optional[str] = ..., designId: _Optional[str] = ..., creator: _Optional[_Union[Creator, _Mapping]] = ..., name: _Optional[str] = ..., description: _Optional[str] = ..., created: _Optional[int] = ..., updated: _Optional[int] = ..., playElementSettings: _Optional[_Union[PlayElementSettings, _Mapping]] = ..., publishStateType: _Optional[_Union[PublishStateType, str]] = ..., likes: _Optional[int] = ..., publishAt: _Optional[int] = ..., thumbnailUrl: _Optional[str] = ..., moderationState: _Optional[_Union[ModerationStateType, str]] = ..., shortCode: _Optional[str] = ...) -> None: ...

class PlayElementDesign(_message.Message):
    __slots__ = ("designId", "designName", "updated", "designMetadata", "mapRotation", "mutators", "assetCategories", "licenseRequirements", "modRules", "tags", "blazeSettings", "modLevelDataId", "attachments", "groupLicenses", "attachmentCompileStatus", "serverHostLicenseRequirements")
    DESIGNID_FIELD_NUMBER: _ClassVar[int]
    DESIGNNAME_FIELD_NUMBER: _ClassVar[int]
    UPDATED_FIELD_NUMBER: _ClassVar[int]
    DESIGNMETADATA_FIELD_NUMBER: _ClassVar[int]
    MAPROTATION_FIELD_NUMBER: _ClassVar[int]
    MUTATORS_FIELD_NUMBER: _ClassVar[int]
    ASSETCATEGORIES_FIELD_NUMBER: _ClassVar[int]
    LICENSEREQUIREMENTS_FIELD_NUMBER: _ClassVar[int]
    MODRULES_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    BLAZESETTINGS_FIELD_NUMBER: _ClassVar[int]
    MODLEVELDATAID_FIELD_NUMBER: _ClassVar[int]
    ATTACHMENTS_FIELD_NUMBER: _ClassVar[int]
    GROUPLICENSES_FIELD_NUMBER: _ClassVar[int]
    ATTACHMENTCOMPILESTATUS_FIELD_NUMBER: _ClassVar[int]
    SERVERHOSTLICENSEREQUIREMENTS_FIELD_NUMBER: _ClassVar[int]
    designId: str
    designName: str
    updated: int
    designMetadata: DesignMetadata
    mapRotation: MapRotation
    mutators: _containers.RepeatedCompositeFieldContainer[Mutator]
    assetCategories: _containers.RepeatedCompositeFieldContainer[AssetCategory]
    licenseRequirements: _containers.RepeatedScalarFieldContainer[str]
    modRules: ModRules
    tags: _containers.RepeatedCompositeFieldContainer[Tag]
    blazeSettings: BlazePlayElementDesignSettings
    modLevelDataId: str
    attachments: _containers.RepeatedCompositeFieldContainer[Attachment]
    groupLicenses: _containers.RepeatedScalarFieldContainer[str]
    attachmentCompileStatus: AttachmentCompileStatus
    serverHostLicenseRequirements: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, designId: _Optional[str] = ..., designName: _Optional[str] = ..., updated: _Optional[int] = ..., designMetadata: _Optional[_Union[DesignMetadata, _Mapping]] = ..., mapRotation: _Optional[_Union[MapRotation, _Mapping]] = ..., mutators: _Optional[_Iterable[_Union[Mutator, _Mapping]]] = ..., assetCategories: _Optional[_Iterable[_Union[AssetCategory, _Mapping]]] = ..., licenseRequirements: _Optional[_Iterable[str]] = ..., modRules: _Optional[_Union[ModRules, _Mapping]] = ..., tags: _Optional[_Iterable[_Union[Tag, _Mapping]]] = ..., blazeSettings: _Optional[_Union[BlazePlayElementDesignSettings, _Mapping]] = ..., modLevelDataId: _Optional[str] = ..., attachments: _Optional[_Iterable[_Union[Attachment, _Mapping]]] = ..., groupLicenses: _Optional[_Iterable[str]] = ..., attachmentCompileStatus: _Optional[_Union[AttachmentCompileStatus, str]] = ..., serverHostLicenseRequirements: _Optional[_Iterable[str]] = ...) -> None: ...

class Creator(_message.Message):
    __slots__ = ("internalCreator", "playerCreator", "externalCreator", "trustedCreator")
    INTERNALCREATOR_FIELD_NUMBER: _ClassVar[int]
    PLAYERCREATOR_FIELD_NUMBER: _ClassVar[int]
    EXTERNALCREATOR_FIELD_NUMBER: _ClassVar[int]
    TRUSTEDCREATOR_FIELD_NUMBER: _ClassVar[int]
    internalCreator: InternalCreator
    playerCreator: PlayerCreator
    externalCreator: ExternalCreator
    trustedCreator: PlayerCreator
    def __init__(self, internalCreator: _Optional[_Union[InternalCreator, _Mapping]] = ..., playerCreator: _Optional[_Union[PlayerCreator, _Mapping]] = ..., externalCreator: _Optional[_Union[ExternalCreator, _Mapping]] = ..., trustedCreator: _Optional[_Union[PlayerCreator, _Mapping]] = ...) -> None: ...

class InternalCreator(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class PlayerCreator(_message.Message):
    __slots__ = ("player",)
    PLAYER_FIELD_NUMBER: _ClassVar[int]
    player: Player
    def __init__(self, player: _Optional[_Union[Player, _Mapping]] = ...) -> None: ...

class ExternalCreator(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class Player(_message.Message):
    __slots__ = ("nucleusId", "personaId", "platform")
    NUCLEUSID_FIELD_NUMBER: _ClassVar[int]
    PERSONAID_FIELD_NUMBER: _ClassVar[int]
    PLATFORM_FIELD_NUMBER: _ClassVar[int]
    nucleusId: int
    personaId: int
    platform: Platform
    def __init__(self, nucleusId: _Optional[int] = ..., personaId: _Optional[int] = ..., platform: _Optional[_Union[Platform, str]] = ...) -> None: ...

class Tag(_message.Message):
    __slots__ = ("tagId", "priority", "metadata")
    TAGID_FIELD_NUMBER: _ClassVar[int]
    PRIORITY_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    tagId: str
    priority: int
    metadata: Metadata
    def __init__(self, tagId: _Optional[str] = ..., priority: _Optional[int] = ..., metadata: _Optional[_Union[Metadata, _Mapping]] = ...) -> None: ...

class Metadata(_message.Message):
    __slots__ = ("translations", "resources")
    TRANSLATIONS_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    translations: _containers.RepeatedCompositeFieldContainer[TranslationMetadata]
    resources: _containers.RepeatedCompositeFieldContainer[Resource]
    def __init__(self, translations: _Optional[_Iterable[_Union[TranslationMetadata, _Mapping]]] = ..., resources: _Optional[_Iterable[_Union[Resource, _Mapping]]] = ...) -> None: ...

class TranslationMetadata(_message.Message):
    __slots__ = ("kind", "translationId")
    KIND_FIELD_NUMBER: _ClassVar[int]
    TRANSLATIONID_FIELD_NUMBER: _ClassVar[int]
    kind: str
    translationId: str
    def __init__(self, kind: _Optional[str] = ..., translationId: _Optional[str] = ...) -> None: ...

class Resource(_message.Message):
    __slots__ = ("location", "kind")
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    location: ResourceLocation
    kind: str
    def __init__(self, location: _Optional[_Union[ResourceLocation, _Mapping]] = ..., kind: _Optional[str] = ...) -> None: ...

class ResourceLocation(_message.Message):
    __slots__ = ("ref", "url")
    REF_FIELD_NUMBER: _ClassVar[int]
    URL_FIELD_NUMBER: _ClassVar[int]
    ref: str
    url: str
    def __init__(self, ref: _Optional[str] = ..., url: _Optional[str] = ...) -> None: ...

class Attachment(_message.Message):
    __slots__ = ("id", "version", "filename", "isProcessable", "processingStatus", "attachmentData", "attachmentType", "metadata", "errors")
    ID_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    FILENAME_FIELD_NUMBER: _ClassVar[int]
    ISPROCESSABLE_FIELD_NUMBER: _ClassVar[int]
    PROCESSINGSTATUS_FIELD_NUMBER: _ClassVar[int]
    ATTACHMENTDATA_FIELD_NUMBER: _ClassVar[int]
    ATTACHMENTTYPE_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ERRORS_FIELD_NUMBER: _ClassVar[int]
    id: str
    version: str
    filename: str
    isProcessable: bool
    processingStatus: ProcessingStatus
    attachmentData: AttachmentData
    attachmentType: AttachmentType
    metadata: str
    errors: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, id: _Optional[str] = ..., version: _Optional[str] = ..., filename: _Optional[str] = ..., isProcessable: bool = ..., processingStatus: _Optional[_Union[ProcessingStatus, str]] = ..., attachmentData: _Optional[_Union[AttachmentData, _Mapping]] = ..., attachmentType: _Optional[_Union[AttachmentType, str]] = ..., metadata: _Optional[str] = ..., errors: _Optional[_Iterable[str]] = ...) -> None: ...

class PlayElementSettings(_message.Message):
    __slots__ = ("secret", "messages", "allowCopies")
    SECRET_FIELD_NUMBER: _ClassVar[int]
    MESSAGES_FIELD_NUMBER: _ClassVar[int]
    ALLOWCOPIES_FIELD_NUMBER: _ClassVar[int]
    secret: str
    messages: _containers.RepeatedCompositeFieldContainer[GameServerMessage]
    allowCopies: bool
    def __init__(self, secret: _Optional[str] = ..., messages: _Optional[_Iterable[_Union[GameServerMessage, _Mapping]]] = ..., allowCopies: bool = ...) -> None: ...

class GameServerMessage(_message.Message):
    __slots__ = ("kind", "text")
    KIND_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    kind: str
    text: str
    def __init__(self, kind: _Optional[str] = ..., text: _Optional[str] = ...) -> None: ...

class DesignMetadata(_message.Message):
    __slots__ = ("progressionMode", "firstPartyMetadata")
    PROGRESSIONMODE_FIELD_NUMBER: _ClassVar[int]
    FIRSTPARTYMETADATA_FIELD_NUMBER: _ClassVar[int]
    progressionMode: str
    firstPartyMetadata: _containers.RepeatedCompositeFieldContainer[FirstPartyMetadata]
    def __init__(self, progressionMode: _Optional[str] = ..., firstPartyMetadata: _Optional[_Iterable[_Union[FirstPartyMetadata, _Mapping]]] = ...) -> None: ...

class FirstPartyMetadata(_message.Message):
    __slots__ = ("psnMetadata",)
    PSNMETADATA_FIELD_NUMBER: _ClassVar[int]
    psnMetadata: PSNMetadata
    def __init__(self, psnMetadata: _Optional[_Union[PSNMetadata, _Mapping]] = ...) -> None: ...

class PSNMetadata(_message.Message):
    __slots__ = ("activityId",)
    ACTIVITYID_FIELD_NUMBER: _ClassVar[int]
    activityId: str
    def __init__(self, activityId: _Optional[str] = ...) -> None: ...

class MapRotation(_message.Message):
    __slots__ = ("maps", "attributes")
    MAPS_FIELD_NUMBER: _ClassVar[int]
    ATTRIBUTES_FIELD_NUMBER: _ClassVar[int]
    maps: _containers.RepeatedCompositeFieldContainer[MapEntry]
    attributes: MapRotationAttributes
    def __init__(self, maps: _Optional[_Iterable[_Union[MapEntry, _Mapping]]] = ..., attributes: _Optional[_Union[MapRotationAttributes, _Mapping]] = ...) -> None: ...

class MapEntry(_message.Message):
    __slots__ = ("levelName", "levelLocation", "rounds", "allowedSpectators", "teamComposition", "blazeGameSettings", "mutators", "gameServerJoinabilitySettings")
    LEVELNAME_FIELD_NUMBER: _ClassVar[int]
    LEVELLOCATION_FIELD_NUMBER: _ClassVar[int]
    ROUNDS_FIELD_NUMBER: _ClassVar[int]
    ALLOWEDSPECTATORS_FIELD_NUMBER: _ClassVar[int]
    TEAMCOMPOSITION_FIELD_NUMBER: _ClassVar[int]
    BLAZEGAMESETTINGS_FIELD_NUMBER: _ClassVar[int]
    MUTATORS_FIELD_NUMBER: _ClassVar[int]
    GAMESERVERJOINABILITYSETTINGS_FIELD_NUMBER: _ClassVar[int]
    levelName: str
    levelLocation: str
    rounds: int
    allowedSpectators: int
    teamComposition: TeamComposition
    blazeGameSettings: BlazeGameSettings
    mutators: _containers.RepeatedCompositeFieldContainer[Mutator]
    gameServerJoinabilitySettings: GameServerJoinabilitySettings
    def __init__(self, levelName: _Optional[str] = ..., levelLocation: _Optional[str] = ..., rounds: _Optional[int] = ..., allowedSpectators: _Optional[int] = ..., teamComposition: _Optional[_Union[TeamComposition, _Mapping]] = ..., blazeGameSettings: _Optional[_Union[BlazeGameSettings, _Mapping]] = ..., mutators: _Optional[_Iterable[_Union[Mutator, _Mapping]]] = ..., gameServerJoinabilitySettings: _Optional[_Union[GameServerJoinabilitySettings, _Mapping]] = ...) -> None: ...

class BlazeGameSettings(_message.Message):
    __slots__ = ("joinInProgress", "openToJoinByPlayer", "openToInvites")
    JOININPROGRESS_FIELD_NUMBER: _ClassVar[int]
    OPENTOJOINBYPLAYER_FIELD_NUMBER: _ClassVar[int]
    OPENTOINVITES_FIELD_NUMBER: _ClassVar[int]
    joinInProgress: BlazeGameSettingValue
    openToJoinByPlayer: BlazeGameSettingValue
    openToInvites: BlazeGameSettingValue
    def __init__(self, joinInProgress: _Optional[_Union[BlazeGameSettingValue, str]] = ..., openToJoinByPlayer: _Optional[_Union[BlazeGameSettingValue, str]] = ..., openToInvites: _Optional[_Union[BlazeGameSettingValue, str]] = ...) -> None: ...

class GameServerJoinabilitySettings(_message.Message):
    __slots__ = ("matchmakingInProgress",)
    MATCHMAKINGINPROGRESS_FIELD_NUMBER: _ClassVar[int]
    matchmakingInProgress: GameServerJoinabilitySettingValue
    def __init__(self, matchmakingInProgress: _Optional[_Union[GameServerJoinabilitySettingValue, str]] = ...) -> None: ...

class MapRotationAttributes(_message.Message):
    __slots__ = ("rotationBehavior",)
    ROTATIONBEHAVIOR_FIELD_NUMBER: _ClassVar[int]
    rotationBehavior: RotationBehavior
    def __init__(self, rotationBehavior: _Optional[_Union[RotationBehavior, str]] = ...) -> None: ...

class ModRules(_message.Message):
    __slots__ = ("compatibleRules", "incompatibleRules", "errorRules")
    COMPATIBLERULES_FIELD_NUMBER: _ClassVar[int]
    INCOMPATIBLERULES_FIELD_NUMBER: _ClassVar[int]
    ERRORRULES_FIELD_NUMBER: _ClassVar[int]
    compatibleRules: CompatibleModRules
    incompatibleRules: IncompatibleModRules
    errorRules: ErrorModRules
    def __init__(self, compatibleRules: _Optional[_Union[CompatibleModRules, _Mapping]] = ..., incompatibleRules: _Optional[_Union[IncompatibleModRules, _Mapping]] = ..., errorRules: _Optional[_Union[ErrorModRules, _Mapping]] = ...) -> None: ...

class BlazePlayElementDesignSettings(_message.Message):
    __slots__ = ("openGroupReservations",)
    OPENGROUPRESERVATIONS_FIELD_NUMBER: _ClassVar[int]
    openGroupReservations: BlazeGameSettingValue
    def __init__(self, openGroupReservations: _Optional[_Union[BlazeGameSettingValue, str]] = ...) -> None: ...

class AttachmentData(_message.Message):
    __slots__ = ("original", "compiled")
    ORIGINAL_FIELD_NUMBER: _ClassVar[int]
    COMPILED_FIELD_NUMBER: _ClassVar[int]
    original: bytes
    compiled: bytes
    def __init__(self, original: _Optional[bytes] = ..., compiled: _Optional[bytes] = ...) -> None: ...

class TeamComposition(_message.Message):
    __slots__ = ("teams", "internalTeams", "balancingMethod")
    TEAMS_FIELD_NUMBER: _ClassVar[int]
    INTERNALTEAMS_FIELD_NUMBER: _ClassVar[int]
    BALANCINGMETHOD_FIELD_NUMBER: _ClassVar[int]
    teams: _containers.RepeatedCompositeFieldContainer[TeamStructure]
    internalTeams: _containers.RepeatedCompositeFieldContainer[InternalTeamStructure]
    balancingMethod: TeamBalancingMethod
    def __init__(self, teams: _Optional[_Iterable[_Union[TeamStructure, _Mapping]]] = ..., internalTeams: _Optional[_Iterable[_Union[InternalTeamStructure, _Mapping]]] = ..., balancingMethod: _Optional[_Union[TeamBalancingMethod, str]] = ...) -> None: ...

class TeamStructure(_message.Message):
    __slots__ = ("teamId", "capacity")
    TEAMID_FIELD_NUMBER: _ClassVar[int]
    CAPACITY_FIELD_NUMBER: _ClassVar[int]
    teamId: int
    capacity: int
    def __init__(self, teamId: _Optional[int] = ..., capacity: _Optional[int] = ...) -> None: ...

class InternalTeamStructure(_message.Message):
    __slots__ = ("teamId", "capacity", "capacityType")
    TEAMID_FIELD_NUMBER: _ClassVar[int]
    CAPACITY_FIELD_NUMBER: _ClassVar[int]
    CAPACITYTYPE_FIELD_NUMBER: _ClassVar[int]
    teamId: int
    capacity: int
    capacityType: InternalCapacityType
    def __init__(self, teamId: _Optional[int] = ..., capacity: _Optional[int] = ..., capacityType: _Optional[_Union[InternalCapacityType, str]] = ...) -> None: ...

class CompatibleModRules(_message.Message):
    __slots__ = ("original", "rulesVersion", "compiled")
    ORIGINAL_FIELD_NUMBER: _ClassVar[int]
    RULESVERSION_FIELD_NUMBER: _ClassVar[int]
    COMPILED_FIELD_NUMBER: _ClassVar[int]
    original: bytes
    rulesVersion: int
    compiled: CompiledRules
    def __init__(self, original: _Optional[bytes] = ..., rulesVersion: _Optional[int] = ..., compiled: _Optional[_Union[CompiledRules, _Mapping]] = ...) -> None: ...

class CompiledRules(_message.Message):
    __slots__ = ("uncompressed", "compressed")
    UNCOMPRESSED_FIELD_NUMBER: _ClassVar[int]
    COMPRESSED_FIELD_NUMBER: _ClassVar[int]
    uncompressed: Uncompressed
    compressed: Compressed
    def __init__(self, uncompressed: _Optional[_Union[Uncompressed, _Mapping]] = ..., compressed: _Optional[_Union[Compressed, _Mapping]] = ...) -> None: ...

class Uncompressed(_message.Message):
    __slots__ = ("compiledModRules", "rulesVersion")
    COMPILEDMODRULES_FIELD_NUMBER: _ClassVar[int]
    RULESVERSION_FIELD_NUMBER: _ClassVar[int]
    compiledModRules: bytes
    rulesVersion: int
    def __init__(self, compiledModRules: _Optional[bytes] = ..., rulesVersion: _Optional[int] = ...) -> None: ...

class Compressed(_message.Message):
    __slots__ = ("compiledModRules", "rulesVersion", "inflatedSize")
    COMPILEDMODRULES_FIELD_NUMBER: _ClassVar[int]
    RULESVERSION_FIELD_NUMBER: _ClassVar[int]
    INFLATEDSIZE_FIELD_NUMBER: _ClassVar[int]
    compiledModRules: bytes
    rulesVersion: int
    inflatedSize: int
    def __init__(self, compiledModRules: _Optional[bytes] = ..., rulesVersion: _Optional[int] = ..., inflatedSize: _Optional[int] = ...) -> None: ...

class IncompatibleModRules(_message.Message):
    __slots__ = ("original", "rulesVersion", "blueprintRulesVersion")
    ORIGINAL_FIELD_NUMBER: _ClassVar[int]
    RULESVERSION_FIELD_NUMBER: _ClassVar[int]
    BLUEPRINTRULESVERSION_FIELD_NUMBER: _ClassVar[int]
    original: bytes
    rulesVersion: int
    blueprintRulesVersion: int
    def __init__(self, original: _Optional[bytes] = ..., rulesVersion: _Optional[int] = ..., blueprintRulesVersion: _Optional[int] = ...) -> None: ...

class ErrorModRules(_message.Message):
    __slots__ = ("original", "errorMessage")
    ORIGINAL_FIELD_NUMBER: _ClassVar[int]
    ERRORMESSAGE_FIELD_NUMBER: _ClassVar[int]
    original: bytes
    errorMessage: str
    def __init__(self, original: _Optional[bytes] = ..., errorMessage: _Optional[str] = ...) -> None: ...

class AssetCategory(_message.Message):
    __slots__ = ("tagId", "boolean")
    TAGID_FIELD_NUMBER: _ClassVar[int]
    BOOLEAN_FIELD_NUMBER: _ClassVar[int]
    tagId: str
    boolean: AssetCategoryBoolean
    def __init__(self, tagId: _Optional[str] = ..., boolean: _Optional[_Union[AssetCategoryBoolean, _Mapping]] = ...) -> None: ...

class AssetCategoryBoolean(_message.Message):
    __slots__ = ("defaultValue", "overrides", "teamOverrides")
    DEFAULTVALUE_FIELD_NUMBER: _ClassVar[int]
    OVERRIDES_FIELD_NUMBER: _ClassVar[int]
    TEAMOVERRIDES_FIELD_NUMBER: _ClassVar[int]
    defaultValue: bool
    overrides: AssetCategoryTagBooleanOverride
    teamOverrides: _containers.RepeatedCompositeFieldContainer[AssetCategoryTagBooleanTeamOverride]
    def __init__(self, defaultValue: bool = ..., overrides: _Optional[_Union[AssetCategoryTagBooleanOverride, _Mapping]] = ..., teamOverrides: _Optional[_Iterable[_Union[AssetCategoryTagBooleanTeamOverride, _Mapping]]] = ...) -> None: ...

class AssetCategoryTagBooleanOverride(_message.Message):
    __slots__ = ("assetCategoryTags", "value")
    ASSETCATEGORYTAGS_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    assetCategoryTags: _containers.RepeatedScalarFieldContainer[str]
    value: bool
    def __init__(self, assetCategoryTags: _Optional[_Iterable[str]] = ..., value: bool = ...) -> None: ...

class AssetCategoryTagBooleanTeamOverride(_message.Message):
    __slots__ = ("assetCategoryTags", "value", "teamId")
    ASSETCATEGORYTAGS_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    TEAMID_FIELD_NUMBER: _ClassVar[int]
    assetCategoryTags: _containers.RepeatedScalarFieldContainer[str]
    value: bool
    teamId: int
    def __init__(self, assetCategoryTags: _Optional[_Iterable[str]] = ..., value: bool = ..., teamId: _Optional[int] = ...) -> None: ...

class Mutator(_message.Message):
    __slots__ = ("name", "category", "kind", "id")
    NAME_FIELD_NUMBER: _ClassVar[int]
    CATEGORY_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    name: str
    category: str
    kind: MutatorKind
    id: str
    def __init__(self, name: _Optional[str] = ..., category: _Optional[str] = ..., kind: _Optional[_Union[MutatorKind, _Mapping]] = ..., id: _Optional[str] = ...) -> None: ...

class MutatorKind(_message.Message):
    __slots__ = ("mutatorBoolean", "mutatorString", "mutatorFloat", "mutatorInt", "mutatorSparseBoolean", "mutatorSparseInt", "mutatorSparseFloat")
    MUTATORBOOLEAN_FIELD_NUMBER: _ClassVar[int]
    MUTATORSTRING_FIELD_NUMBER: _ClassVar[int]
    MUTATORFLOAT_FIELD_NUMBER: _ClassVar[int]
    MUTATORINT_FIELD_NUMBER: _ClassVar[int]
    MUTATORSPARSEBOOLEAN_FIELD_NUMBER: _ClassVar[int]
    MUTATORSPARSEINT_FIELD_NUMBER: _ClassVar[int]
    MUTATORSPARSEFLOAT_FIELD_NUMBER: _ClassVar[int]
    mutatorBoolean: MutatorBoolean
    mutatorString: MutatorString
    mutatorFloat: MutatorFloat
    mutatorInt: MutatorInt
    mutatorSparseBoolean: MutatorSparseBoolean
    mutatorSparseInt: MutatorSparseInt
    mutatorSparseFloat: MutatorSparseFloat
    def __init__(self, mutatorBoolean: _Optional[_Union[MutatorBoolean, _Mapping]] = ..., mutatorString: _Optional[_Union[MutatorString, _Mapping]] = ..., mutatorFloat: _Optional[_Union[MutatorFloat, _Mapping]] = ..., mutatorInt: _Optional[_Union[MutatorInt, _Mapping]] = ..., mutatorSparseBoolean: _Optional[_Union[MutatorSparseBoolean, _Mapping]] = ..., mutatorSparseInt: _Optional[_Union[MutatorSparseInt, _Mapping]] = ..., mutatorSparseFloat: _Optional[_Union[MutatorSparseFloat, _Mapping]] = ...) -> None: ...

class MutatorBoolean(_message.Message):
    __slots__ = ("boolValue",)
    BOOLVALUE_FIELD_NUMBER: _ClassVar[int]
    boolValue: bool
    def __init__(self, boolValue: bool = ...) -> None: ...

class MutatorString(_message.Message):
    __slots__ = ("stringValue",)
    STRINGVALUE_FIELD_NUMBER: _ClassVar[int]
    stringValue: str
    def __init__(self, stringValue: _Optional[str] = ...) -> None: ...

class MutatorFloat(_message.Message):
    __slots__ = ("value",)
    VALUE_FIELD_NUMBER: _ClassVar[int]
    value: float
    def __init__(self, value: _Optional[float] = ...) -> None: ...

class MutatorInt(_message.Message):
    __slots__ = ("value",)
    VALUE_FIELD_NUMBER: _ClassVar[int]
    value: int
    def __init__(self, value: _Optional[int] = ...) -> None: ...

class MutatorSparseBooleanEntry(_message.Message):
    __slots__ = ("index", "value")
    INDEX_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    index: int
    value: bool
    def __init__(self, index: _Optional[int] = ..., value: bool = ...) -> None: ...

class MutatorSparseBoolean(_message.Message):
    __slots__ = ("defaultValue", "size", "sparseValues")
    DEFAULTVALUE_FIELD_NUMBER: _ClassVar[int]
    SIZE_FIELD_NUMBER: _ClassVar[int]
    SPARSEVALUES_FIELD_NUMBER: _ClassVar[int]
    defaultValue: bool
    size: int
    sparseValues: _containers.RepeatedCompositeFieldContainer[MutatorSparseBooleanEntry]
    def __init__(self, defaultValue: bool = ..., size: _Optional[int] = ..., sparseValues: _Optional[_Iterable[_Union[MutatorSparseBooleanEntry, _Mapping]]] = ...) -> None: ...

class SparseIntEntity(_message.Message):
    __slots__ = ("values",)
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedScalarFieldContainer[int]
    def __init__(self, values: _Optional[_Iterable[int]] = ...) -> None: ...

class MutatorSparseIntEntry(_message.Message):
    __slots__ = ("index", "value")
    INDEX_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    index: int
    value: int
    def __init__(self, index: _Optional[int] = ..., value: _Optional[int] = ...) -> None: ...

class MutatorSparseInt(_message.Message):
    __slots__ = ("defaultValue", "size", "sparseValues")
    DEFAULTVALUE_FIELD_NUMBER: _ClassVar[int]
    SIZE_FIELD_NUMBER: _ClassVar[int]
    SPARSEVALUES_FIELD_NUMBER: _ClassVar[int]
    defaultValue: int
    size: int
    sparseValues: MutatorSparseIntEntry
    def __init__(self, defaultValue: _Optional[int] = ..., size: _Optional[int] = ..., sparseValues: _Optional[_Union[MutatorSparseIntEntry, _Mapping]] = ...) -> None: ...

class MutatorSparseFloatEntry(_message.Message):
    __slots__ = ("index", "value")
    INDEX_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    index: int
    value: float
    def __init__(self, index: _Optional[int] = ..., value: _Optional[float] = ...) -> None: ...

class MutatorSparseFloat(_message.Message):
    __slots__ = ("defaultValue", "size", "sparseValues")
    DEFAULTVALUE_FIELD_NUMBER: _ClassVar[int]
    SIZE_FIELD_NUMBER: _ClassVar[int]
    SPARSEVALUES_FIELD_NUMBER: _ClassVar[int]
    defaultValue: float
    size: int
    sparseValues: _containers.RepeatedCompositeFieldContainer[MutatorSparseFloatEntry]
    def __init__(self, defaultValue: _Optional[float] = ..., size: _Optional[int] = ..., sparseValues: _Optional[_Iterable[_Union[MutatorSparseFloatEntry, _Mapping]]] = ...) -> None: ...

class GetPlayElementRequest(_message.Message):
    __slots__ = ("id", "includeDenied")
    ID_FIELD_NUMBER: _ClassVar[int]
    INCLUDEDENIED_FIELD_NUMBER: _ClassVar[int]
    id: str
    includeDenied: bool
    def __init__(self, id: _Optional[str] = ..., includeDenied: bool = ...) -> None: ...

class GetOwnedPlayElementsResponse(_message.Message):
    __slots__ = ("playElements",)
    PLAYELEMENTS_FIELD_NUMBER: _ClassVar[int]
    playElements: _containers.RepeatedCompositeFieldContainer[PlayElement]
    def __init__(self, playElements: _Optional[_Iterable[_Union[PlayElement, _Mapping]]] = ...) -> None: ...

class GetOwnedPlayElementsResponseV2(_message.Message):
    __slots__ = ("playElements",)
    PLAYELEMENTS_FIELD_NUMBER: _ClassVar[int]
    playElements: _containers.RepeatedCompositeFieldContainer[EnrichedPlayElement]
    def __init__(self, playElements: _Optional[_Iterable[_Union[EnrichedPlayElement, _Mapping]]] = ...) -> None: ...

class EnrichedPlayElement(_message.Message):
    __slots__ = ("playElement", "mapRotation")
    PLAYELEMENT_FIELD_NUMBER: _ClassVar[int]
    MAPROTATION_FIELD_NUMBER: _ClassVar[int]
    playElement: PlayElement
    mapRotation: MapRotation
    def __init__(self, playElement: _Optional[_Union[PlayElement, _Mapping]] = ..., mapRotation: _Optional[_Union[MapRotation, _Mapping]] = ...) -> None: ...

class GetOwnedPlayElementsRequest(_message.Message):
    __slots__ = ("publishStates", "includeDenied")
    PUBLISHSTATES_FIELD_NUMBER: _ClassVar[int]
    INCLUDEDENIED_FIELD_NUMBER: _ClassVar[int]
    publishStates: _containers.RepeatedScalarFieldContainer[PublishStateType]
    includeDenied: bool
    def __init__(self, publishStates: _Optional[_Iterable[_Union[PublishStateType, str]]] = ..., includeDenied: bool = ...) -> None: ...
