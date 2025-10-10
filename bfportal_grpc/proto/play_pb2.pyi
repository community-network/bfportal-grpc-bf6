from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

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
