import * as jspb from 'google-protobuf'



export class DeleteAttachmentsRequest extends jspb.Message {
  getPlayelementdesignid(): string;
  setPlayelementdesignid(value: string): DeleteAttachmentsRequest;

  getAttachmentidsList(): Array<string>;
  setAttachmentidsList(value: Array<string>): DeleteAttachmentsRequest;
  clearAttachmentidsList(): DeleteAttachmentsRequest;
  addAttachmentids(value: string, index?: number): DeleteAttachmentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAttachmentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAttachmentsRequest): DeleteAttachmentsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAttachmentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAttachmentsRequest;
  static deserializeBinaryFromReader(message: DeleteAttachmentsRequest, reader: jspb.BinaryReader): DeleteAttachmentsRequest;
}

export namespace DeleteAttachmentsRequest {
  export type AsObject = {
    playelementdesignid: string,
    attachmentidsList: Array<string>,
  }
}

export class DeleteAttachmentsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAttachmentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAttachmentsResponse): DeleteAttachmentsResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteAttachmentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAttachmentsResponse;
  static deserializeBinaryFromReader(message: DeleteAttachmentsResponse, reader: jspb.BinaryReader): DeleteAttachmentsResponse;
}

export namespace DeleteAttachmentsResponse {
  export type AsObject = {
  }
}

export class GetLicenseRequirementsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLicenseRequirementsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLicenseRequirementsRequest): GetLicenseRequirementsRequest.AsObject;
  static serializeBinaryToWriter(message: GetLicenseRequirementsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLicenseRequirementsRequest;
  static deserializeBinaryFromReader(message: GetLicenseRequirementsRequest, reader: jspb.BinaryReader): GetLicenseRequirementsRequest;
}

export namespace GetLicenseRequirementsRequest {
  export type AsObject = {
  }
}

export class GetLicenseRequirementsResponse extends jspb.Message {
  getOwnedlicensesList(): Array<string>;
  setOwnedlicensesList(value: Array<string>): GetLicenseRequirementsResponse;
  clearOwnedlicensesList(): GetLicenseRequirementsResponse;
  addOwnedlicenses(value: string, index?: number): GetLicenseRequirementsResponse;

  getMapentryrequirementsList(): Array<MapEntryRequirement>;
  setMapentryrequirementsList(value: Array<MapEntryRequirement>): GetLicenseRequirementsResponse;
  clearMapentryrequirementsList(): GetLicenseRequirementsResponse;
  addMapentryrequirements(value?: MapEntryRequirement, index?: number): MapEntryRequirement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLicenseRequirementsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLicenseRequirementsResponse): GetLicenseRequirementsResponse.AsObject;
  static serializeBinaryToWriter(message: GetLicenseRequirementsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLicenseRequirementsResponse;
  static deserializeBinaryFromReader(message: GetLicenseRequirementsResponse, reader: jspb.BinaryReader): GetLicenseRequirementsResponse;
}

export namespace GetLicenseRequirementsResponse {
  export type AsObject = {
    ownedlicensesList: Array<string>,
    mapentryrequirementsList: Array<MapEntryRequirement.AsObject>,
  }
}

export class MapEntryRequirement extends jspb.Message {
  getLevelname(): string;
  setLevelname(value: string): MapEntryRequirement;

  getLevellocation(): string;
  setLevellocation(value: string): MapEntryRequirement;

  getLicenserequirementsList(): Array<string>;
  setLicenserequirementsList(value: Array<string>): MapEntryRequirement;
  clearLicenserequirementsList(): MapEntryRequirement;
  addLicenserequirements(value: string, index?: number): MapEntryRequirement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapEntryRequirement.AsObject;
  static toObject(includeInstance: boolean, msg: MapEntryRequirement): MapEntryRequirement.AsObject;
  static serializeBinaryToWriter(message: MapEntryRequirement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapEntryRequirement;
  static deserializeBinaryFromReader(message: MapEntryRequirement, reader: jspb.BinaryReader): MapEntryRequirement;
}

export namespace MapEntryRequirement {
  export type AsObject = {
    levelname: string,
    levellocation: string,
    licenserequirementsList: Array<string>,
  }
}

export class GetProgressionTypesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProgressionTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProgressionTypesRequest): GetProgressionTypesRequest.AsObject;
  static serializeBinaryToWriter(message: GetProgressionTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProgressionTypesRequest;
  static deserializeBinaryFromReader(message: GetProgressionTypesRequest, reader: jspb.BinaryReader): GetProgressionTypesRequest;
}

export namespace GetProgressionTypesRequest {
  export type AsObject = {
  }
}

export class GetProgressionTypesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProgressionTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProgressionTypesResponse): GetProgressionTypesResponse.AsObject;
  static serializeBinaryToWriter(message: GetProgressionTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProgressionTypesResponse;
  static deserializeBinaryFromReader(message: GetProgressionTypesResponse, reader: jspb.BinaryReader): GetProgressionTypesResponse;
}

export namespace GetProgressionTypesResponse {
  export type AsObject = {
  }
}

export class UploadExperienceThumbnailRequest extends jspb.Message {
  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): UploadExperienceThumbnailRequest;

  getMimetype(): string;
  setMimetype(value: string): UploadExperienceThumbnailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadExperienceThumbnailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadExperienceThumbnailRequest): UploadExperienceThumbnailRequest.AsObject;
  static serializeBinaryToWriter(message: UploadExperienceThumbnailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadExperienceThumbnailRequest;
  static deserializeBinaryFromReader(message: UploadExperienceThumbnailRequest, reader: jspb.BinaryReader): UploadExperienceThumbnailRequest;
}

export namespace UploadExperienceThumbnailRequest {
  export type AsObject = {
    image: Uint8Array | string,
    mimetype: string,
  }
}

export class UploadExperienceThumbnailResponse extends jspb.Message {
  getAssetid(): string;
  setAssetid(value: string): UploadExperienceThumbnailResponse;

  getUrl(): string;
  setUrl(value: string): UploadExperienceThumbnailResponse;

  getVerificationurl(): string;
  setVerificationurl(value: string): UploadExperienceThumbnailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadExperienceThumbnailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadExperienceThumbnailResponse): UploadExperienceThumbnailResponse.AsObject;
  static serializeBinaryToWriter(message: UploadExperienceThumbnailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadExperienceThumbnailResponse;
  static deserializeBinaryFromReader(message: UploadExperienceThumbnailResponse, reader: jspb.BinaryReader): UploadExperienceThumbnailResponse;
}

export namespace UploadExperienceThumbnailResponse {
  export type AsObject = {
    assetid: string,
    url: string,
    verificationurl: string,
  }
}

export class CreateModDataVersionResponse extends jspb.Message {
  getSignedurl(): string;
  setSignedurl(value: string): CreateModDataVersionResponse;

  getValiduntil(): number;
  setValiduntil(value: number): CreateModDataVersionResponse;
  hasValiduntil(): boolean;
  clearValiduntil(): CreateModDataVersionResponse;

  getModleveldataid(): string;
  setModleveldataid(value: string): CreateModDataVersionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModDataVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModDataVersionResponse): CreateModDataVersionResponse.AsObject;
  static serializeBinaryToWriter(message: CreateModDataVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModDataVersionResponse;
  static deserializeBinaryFromReader(message: CreateModDataVersionResponse, reader: jspb.BinaryReader): CreateModDataVersionResponse;
}

export namespace CreateModDataVersionResponse {
  export type AsObject = {
    signedurl: string,
    validuntil?: number,
    modleveldataid: string,
  }

  export enum ValiduntilCase { 
    _VALIDUNTIL_NOT_SET = 0,
    VALIDUNTIL = 2,
  }
}

export class CreateModDataVersionRequest extends jspb.Message {
  getPlayelementid(): string;
  setPlayelementid(value: string): CreateModDataVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModDataVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModDataVersionRequest): CreateModDataVersionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModDataVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModDataVersionRequest;
  static deserializeBinaryFromReader(message: CreateModDataVersionRequest, reader: jspb.BinaryReader): CreateModDataVersionRequest;
}

export namespace CreateModDataVersionRequest {
  export type AsObject = {
    playelementid: string,
  }
}

export class ListModDataVersionsRequest extends jspb.Message {
  getPlayelementid(): string;
  setPlayelementid(value: string): ListModDataVersionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModDataVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModDataVersionsRequest): ListModDataVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListModDataVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModDataVersionsRequest;
  static deserializeBinaryFromReader(message: ListModDataVersionsRequest, reader: jspb.BinaryReader): ListModDataVersionsRequest;
}

export namespace ListModDataVersionsRequest {
  export type AsObject = {
    playelementid: string,
  }
}

export class ListModDataVersionsResponse extends jspb.Message {
  getModdataversionsList(): Array<ModDataVersion>;
  setModdataversionsList(value: Array<ModDataVersion>): ListModDataVersionsResponse;
  clearModdataversionsList(): ListModDataVersionsResponse;
  addModdataversions(value?: ModDataVersion, index?: number): ModDataVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModDataVersionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModDataVersionsResponse): ListModDataVersionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListModDataVersionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModDataVersionsResponse;
  static deserializeBinaryFromReader(message: ListModDataVersionsResponse, reader: jspb.BinaryReader): ListModDataVersionsResponse;
}

export namespace ListModDataVersionsResponse {
  export type AsObject = {
    moddataversionsList: Array<ModDataVersion.AsObject>,
  }
}

export class ModDataVersion extends jspb.Message {
  getId(): string;
  setId(value: string): ModDataVersion;

  getPlayelementid(): string;
  setPlayelementid(value: string): ModDataVersion;

  getCreated(): number;
  setCreated(value: number): ModDataVersion;
  hasCreated(): boolean;
  clearCreated(): ModDataVersion;

  getBuildinfo(): ModDataVersionBuildInfo | undefined;
  setBuildinfo(value?: ModDataVersionBuildInfo): ModDataVersion;
  hasBuildinfo(): boolean;
  clearBuildinfo(): ModDataVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModDataVersion.AsObject;
  static toObject(includeInstance: boolean, msg: ModDataVersion): ModDataVersion.AsObject;
  static serializeBinaryToWriter(message: ModDataVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModDataVersion;
  static deserializeBinaryFromReader(message: ModDataVersion, reader: jspb.BinaryReader): ModDataVersion;
}

export namespace ModDataVersion {
  export type AsObject = {
    id: string,
    playelementid: string,
    created?: number,
    buildinfo?: ModDataVersionBuildInfo.AsObject,
  }

  export enum CreatedCase { 
    _CREATED_NOT_SET = 0,
    CREATED = 3,
  }

  export enum BuildinfoCase { 
    _BUILDINFO_NOT_SET = 0,
    BUILDINFO = 4,
  }
}

export class ModDataVersionBuildInfo extends jspb.Message {
  getPipelineversion(): string;
  setPipelineversion(value: string): ModDataVersionBuildInfo;

  getPending(): Empty | undefined;
  setPending(value?: Empty): ModDataVersionBuildInfo;
  hasPending(): boolean;
  clearPending(): ModDataVersionBuildInfo;

  getNobuildavailable(): Empty | undefined;
  setNobuildavailable(value?: Empty): ModDataVersionBuildInfo;
  hasNobuildavailable(): boolean;
  clearNobuildavailable(): ModDataVersionBuildInfo;

  getError(): BuildStatusError | undefined;
  setError(value?: BuildStatusError): ModDataVersionBuildInfo;
  hasError(): boolean;
  clearError(): ModDataVersionBuildInfo;

  getSuccess(): BuildStatusSuccess | undefined;
  setSuccess(value?: BuildStatusSuccess): ModDataVersionBuildInfo;
  hasSuccess(): boolean;
  clearSuccess(): ModDataVersionBuildInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModDataVersionBuildInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ModDataVersionBuildInfo): ModDataVersionBuildInfo.AsObject;
  static serializeBinaryToWriter(message: ModDataVersionBuildInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModDataVersionBuildInfo;
  static deserializeBinaryFromReader(message: ModDataVersionBuildInfo, reader: jspb.BinaryReader): ModDataVersionBuildInfo;
}

export namespace ModDataVersionBuildInfo {
  export type AsObject = {
    pipelineversion: string,
    pending?: Empty.AsObject,
    nobuildavailable?: Empty.AsObject,
    error?: BuildStatusError.AsObject,
    success?: BuildStatusSuccess.AsObject,
  }

  export enum PendingCase { 
    _PENDING_NOT_SET = 0,
    PENDING = 2,
  }

  export enum NobuildavailableCase { 
    _NOBUILDAVAILABLE_NOT_SET = 0,
    NOBUILDAVAILABLE = 3,
  }

  export enum ErrorCase { 
    _ERROR_NOT_SET = 0,
    ERROR = 4,
  }

  export enum SuccessCase { 
    _SUCCESS_NOT_SET = 0,
    SUCCESS = 5,
  }
}

export class BuildStatusError extends jspb.Message {
  getErrormessage(): string;
  setErrormessage(value: string): BuildStatusError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildStatusError.AsObject;
  static toObject(includeInstance: boolean, msg: BuildStatusError): BuildStatusError.AsObject;
  static serializeBinaryToWriter(message: BuildStatusError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildStatusError;
  static deserializeBinaryFromReader(message: BuildStatusError, reader: jspb.BinaryReader): BuildStatusError;
}

export namespace BuildStatusError {
  export type AsObject = {
    errormessage: string,
  }
}

export class BuildStatusSuccess extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildStatusSuccess.AsObject;
  static toObject(includeInstance: boolean, msg: BuildStatusSuccess): BuildStatusSuccess.AsObject;
  static serializeBinaryToWriter(message: BuildStatusSuccess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildStatusSuccess;
  static deserializeBinaryFromReader(message: BuildStatusSuccess, reader: jspb.BinaryReader): BuildStatusSuccess;
}

export namespace BuildStatusSuccess {
  export type AsObject = {
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class GetAvailableTagsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAvailableTagsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAvailableTagsRequest): GetAvailableTagsRequest.AsObject;
  static serializeBinaryToWriter(message: GetAvailableTagsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAvailableTagsRequest;
  static deserializeBinaryFromReader(message: GetAvailableTagsRequest, reader: jspb.BinaryReader): GetAvailableTagsRequest;
}

export namespace GetAvailableTagsRequest {
  export type AsObject = {
  }
}

export class GetAvailableTagsResponse extends jspb.Message {
  getAvailabletags(): AvailableTags | undefined;
  setAvailabletags(value?: AvailableTags): GetAvailableTagsResponse;
  hasAvailabletags(): boolean;
  clearAvailabletags(): GetAvailableTagsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAvailableTagsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAvailableTagsResponse): GetAvailableTagsResponse.AsObject;
  static serializeBinaryToWriter(message: GetAvailableTagsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAvailableTagsResponse;
  static deserializeBinaryFromReader(message: GetAvailableTagsResponse, reader: jspb.BinaryReader): GetAvailableTagsResponse;
}

export namespace GetAvailableTagsResponse {
  export type AsObject = {
    availabletags?: AvailableTags.AsObject,
  }

  export enum AvailabletagsCase { 
    _AVAILABLETAGS_NOT_SET = 0,
    AVAILABLETAGS = 1,
  }
}

export class PlayExperience extends jspb.Message {
  getId(): string;
  setId(value: string): PlayExperience;

  getCreator(): Creator | undefined;
  setCreator(value?: Creator): PlayExperience;
  hasCreator(): boolean;
  clearCreator(): PlayExperience;

  getName(): string;
  setName(value: string): PlayExperience;

  getDescription(): string;
  setDescription(value: string): PlayExperience;
  hasDescription(): boolean;
  clearDescription(): PlayExperience;

  getPlayelementdesign(): PlayElementDesign | undefined;
  setPlayelementdesign(value?: PlayElementDesign): PlayExperience;
  hasPlayelementdesign(): boolean;
  clearPlayelementdesign(): PlayExperience;

  getPlayercount(): number;
  setPlayercount(value: number): PlayExperience;
  hasPlayercount(): boolean;
  clearPlayercount(): PlayExperience;

  getLikes(): number;
  setLikes(value: number): PlayExperience;
  hasLikes(): boolean;
  clearLikes(): PlayExperience;

  getPublishat(): number;
  setPublishat(value: number): PlayExperience;
  hasPublishat(): boolean;
  clearPublishat(): PlayExperience;

  getThumbnailurl(): string;
  setThumbnailurl(value: string): PlayExperience;
  hasThumbnailurl(): boolean;
  clearThumbnailurl(): PlayExperience;

  getIsugc(): boolean;
  setIsugc(value: boolean): PlayExperience;

  getShortcode(): string;
  setShortcode(value: string): PlayExperience;
  hasShortcode(): boolean;
  clearShortcode(): PlayExperience;

  getPublishstate(): PublishStateType;
  setPublishstate(value: PublishStateType): PlayExperience;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayExperience.AsObject;
  static toObject(includeInstance: boolean, msg: PlayExperience): PlayExperience.AsObject;
  static serializeBinaryToWriter(message: PlayExperience, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayExperience;
  static deserializeBinaryFromReader(message: PlayExperience, reader: jspb.BinaryReader): PlayExperience;
}

export namespace PlayExperience {
  export type AsObject = {
    id: string,
    creator?: Creator.AsObject,
    name: string,
    description?: string,
    playelementdesign?: PlayElementDesign.AsObject,
    playercount?: number,
    likes?: number,
    publishat?: number,
    thumbnailurl?: string,
    isugc: boolean,
    shortcode?: string,
    publishstate: PublishStateType,
  }

  export enum CreatorCase { 
    _CREATOR_NOT_SET = 0,
    CREATOR = 2,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 4,
  }

  export enum PlayelementdesignCase { 
    _PLAYELEMENTDESIGN_NOT_SET = 0,
    PLAYELEMENTDESIGN = 5,
  }

  export enum PlayercountCase { 
    _PLAYERCOUNT_NOT_SET = 0,
    PLAYERCOUNT = 6,
  }

  export enum LikesCase { 
    _LIKES_NOT_SET = 0,
    LIKES = 7,
  }

  export enum PublishatCase { 
    _PUBLISHAT_NOT_SET = 0,
    PUBLISHAT = 8,
  }

  export enum ThumbnailurlCase { 
    _THUMBNAILURL_NOT_SET = 0,
    THUMBNAILURL = 9,
  }

  export enum ShortcodeCase { 
    _SHORTCODE_NOT_SET = 0,
    SHORTCODE = 11,
  }
}

export class ListExperiencesResponse extends jspb.Message {
  getExperiencesList(): Array<PlayExperience>;
  setExperiencesList(value: Array<PlayExperience>): ListExperiencesResponse;
  clearExperiencesList(): ListExperiencesResponse;
  addExperiences(value?: PlayExperience, index?: number): PlayExperience;

  getNextpage(): Pagination | undefined;
  setNextpage(value?: Pagination): ListExperiencesResponse;
  hasNextpage(): boolean;
  clearNextpage(): ListExperiencesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExperiencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListExperiencesResponse): ListExperiencesResponse.AsObject;
  static serializeBinaryToWriter(message: ListExperiencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExperiencesResponse;
  static deserializeBinaryFromReader(message: ListExperiencesResponse, reader: jspb.BinaryReader): ListExperiencesResponse;
}

export namespace ListExperiencesResponse {
  export type AsObject = {
    experiencesList: Array<PlayExperience.AsObject>,
    nextpage?: Pagination.AsObject,
  }

  export enum NextpageCase { 
    _NEXTPAGE_NOT_SET = 0,
    NEXTPAGE = 2,
  }
}

export class PlayExperienceQuery extends jspb.Message {
  getMapseqList(): Array<string>;
  setMapseqList(value: Array<string>): PlayExperienceQuery;
  clearMapseqList(): PlayExperienceQuery;
  addMapseq(value: string, index?: number): PlayExperienceQuery;

  getLevellocationseqList(): Array<string>;
  setLevellocationseqList(value: Array<string>): PlayExperienceQuery;
  clearLevellocationseqList(): PlayExperienceQuery;
  addLevellocationseq(value: string, index?: number): PlayExperienceQuery;

  getMaxplayercounteqList(): Array<number>;
  setMaxplayercounteqList(value: Array<number>): PlayExperienceQuery;
  clearMaxplayercounteqList(): PlayExperienceQuery;
  addMaxplayercounteq(value: number, index?: number): PlayExperienceQuery;

  getTagseqList(): Array<string>;
  setTagseqList(value: Array<string>): PlayExperienceQuery;
  clearTagseqList(): PlayExperienceQuery;
  addTagseq(value: string, index?: number): PlayExperienceQuery;

  getPlayercreatoreq(): PlayerCreator | undefined;
  setPlayercreatoreq(value?: PlayerCreator): PlayExperienceQuery;
  hasPlayercreatoreq(): boolean;
  clearPlayercreatoreq(): PlayExperienceQuery;

  getOrdering(): ExperienceOrderBy;
  setOrdering(value: ExperienceOrderBy): PlayExperienceQuery;

  getPagesize(): number;
  setPagesize(value: number): PlayExperienceQuery;

  getNameprefix(): string;
  setNameprefix(value: string): PlayExperienceQuery;
  hasNameprefix(): boolean;
  clearNameprefix(): PlayExperienceQuery;

  getShortcode(): string;
  setShortcode(value: string): PlayExperienceQuery;
  hasShortcode(): boolean;
  clearShortcode(): PlayExperienceQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayExperienceQuery.AsObject;
  static toObject(includeInstance: boolean, msg: PlayExperienceQuery): PlayExperienceQuery.AsObject;
  static serializeBinaryToWriter(message: PlayExperienceQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayExperienceQuery;
  static deserializeBinaryFromReader(message: PlayExperienceQuery, reader: jspb.BinaryReader): PlayExperienceQuery;
}

export namespace PlayExperienceQuery {
  export type AsObject = {
    mapseqList: Array<string>,
    levellocationseqList: Array<string>,
    maxplayercounteqList: Array<number>,
    tagseqList: Array<string>,
    playercreatoreq?: PlayerCreator.AsObject,
    ordering: ExperienceOrderBy,
    pagesize: number,
    nameprefix?: string,
    shortcode?: string,
  }

  export enum PlayercreatoreqCase { 
    _PLAYERCREATOREQ_NOT_SET = 0,
    PLAYERCREATOREQ = 5,
  }

  export enum NameprefixCase { 
    _NAMEPREFIX_NOT_SET = 0,
    NAMEPREFIX = 8,
  }

  export enum ShortcodeCase { 
    _SHORTCODE_NOT_SET = 0,
    SHORTCODE = 9,
  }
}

export class ListExperiencesRequest extends jspb.Message {
  getFilter(): PlayExperienceQuery | undefined;
  setFilter(value?: PlayExperienceQuery): ListExperiencesRequest;
  hasFilter(): boolean;
  clearFilter(): ListExperiencesRequest;

  getPage(): Pagination | undefined;
  setPage(value?: Pagination): ListExperiencesRequest;
  hasPage(): boolean;
  clearPage(): ListExperiencesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExperiencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListExperiencesRequest): ListExperiencesRequest.AsObject;
  static serializeBinaryToWriter(message: ListExperiencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExperiencesRequest;
  static deserializeBinaryFromReader(message: ListExperiencesRequest, reader: jspb.BinaryReader): ListExperiencesRequest;
}

export namespace ListExperiencesRequest {
  export type AsObject = {
    filter?: PlayExperienceQuery.AsObject,
    page?: Pagination.AsObject,
  }

  export enum FilterCase { 
    _FILTER_NOT_SET = 0,
    FILTER = 1,
  }

  export enum PageCase { 
    _PAGE_NOT_SET = 0,
    PAGE = 2,
  }
}

export class Pagination extends jspb.Message {
  getPagenumber(): number;
  setPagenumber(value: number): Pagination;
  hasPagenumber(): boolean;
  clearPagenumber(): Pagination;

  getToken(): string;
  setToken(value: string): Pagination;
  hasToken(): boolean;
  clearToken(): Pagination;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pagination.AsObject;
  static toObject(includeInstance: boolean, msg: Pagination): Pagination.AsObject;
  static serializeBinaryToWriter(message: Pagination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pagination;
  static deserializeBinaryFromReader(message: Pagination, reader: jspb.BinaryReader): Pagination;
}

export namespace Pagination {
  export type AsObject = {
    pagenumber?: number,
    token?: string,
  }

  export enum PagenumberCase { 
    _PAGENUMBER_NOT_SET = 0,
    PAGENUMBER = 1,
  }

  export enum TokenCase { 
    _TOKEN_NOT_SET = 0,
    TOKEN = 2,
  }
}

export class DeletePlayElementRequest extends jspb.Message {
  getPlayelementid(): string;
  setPlayelementid(value: string): DeletePlayElementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePlayElementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePlayElementRequest): DeletePlayElementRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePlayElementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePlayElementRequest;
  static deserializeBinaryFromReader(message: DeletePlayElementRequest, reader: jspb.BinaryReader): DeletePlayElementRequest;
}

export namespace DeletePlayElementRequest {
  export type AsObject = {
    playelementid: string,
  }
}

export class GetScheduledBlueprintsResponse extends jspb.Message {
  getBlueprintidsList(): Array<BlueprintId>;
  setBlueprintidsList(value: Array<BlueprintId>): GetScheduledBlueprintsResponse;
  clearBlueprintidsList(): GetScheduledBlueprintsResponse;
  addBlueprintids(value?: BlueprintId, index?: number): BlueprintId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScheduledBlueprintsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetScheduledBlueprintsResponse): GetScheduledBlueprintsResponse.AsObject;
  static serializeBinaryToWriter(message: GetScheduledBlueprintsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScheduledBlueprintsResponse;
  static deserializeBinaryFromReader(message: GetScheduledBlueprintsResponse, reader: jspb.BinaryReader): GetScheduledBlueprintsResponse;
}

export namespace GetScheduledBlueprintsResponse {
  export type AsObject = {
    blueprintidsList: Array<BlueprintId.AsObject>,
  }
}

export class DeletePlayElementResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePlayElementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePlayElementResponse): DeletePlayElementResponse.AsObject;
  static serializeBinaryToWriter(message: DeletePlayElementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePlayElementResponse;
  static deserializeBinaryFromReader(message: DeletePlayElementResponse, reader: jspb.BinaryReader): DeletePlayElementResponse;
}

export namespace DeletePlayElementResponse {
  export type AsObject = {
  }
}

export class GetBlueprintsByIdRequest extends jspb.Message {
  getBlueprintidsList(): Array<BlueprintId>;
  setBlueprintidsList(value: Array<BlueprintId>): GetBlueprintsByIdRequest;
  clearBlueprintidsList(): GetBlueprintsByIdRequest;
  addBlueprintids(value?: BlueprintId, index?: number): BlueprintId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlueprintsByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlueprintsByIdRequest): GetBlueprintsByIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetBlueprintsByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlueprintsByIdRequest;
  static deserializeBinaryFromReader(message: GetBlueprintsByIdRequest, reader: jspb.BinaryReader): GetBlueprintsByIdRequest;
}

export namespace GetBlueprintsByIdRequest {
  export type AsObject = {
    blueprintidsList: Array<BlueprintId.AsObject>,
  }
}

export class BlueprintId extends jspb.Message {
  getId(): string;
  setId(value: string): BlueprintId;

  getVersion(): string;
  setVersion(value: string): BlueprintId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlueprintId.AsObject;
  static toObject(includeInstance: boolean, msg: BlueprintId): BlueprintId.AsObject;
  static serializeBinaryToWriter(message: BlueprintId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlueprintId;
  static deserializeBinaryFromReader(message: BlueprintId, reader: jspb.BinaryReader): BlueprintId;
}

export namespace BlueprintId {
  export type AsObject = {
    id: string,
    version: string,
  }
}

export class GetBlueprintsByIdResponse extends jspb.Message {
  getBlueprintsList(): Array<Blueprint>;
  setBlueprintsList(value: Array<Blueprint>): GetBlueprintsByIdResponse;
  clearBlueprintsList(): GetBlueprintsByIdResponse;
  addBlueprints(value?: Blueprint, index?: number): Blueprint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlueprintsByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlueprintsByIdResponse): GetBlueprintsByIdResponse.AsObject;
  static serializeBinaryToWriter(message: GetBlueprintsByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlueprintsByIdResponse;
  static deserializeBinaryFromReader(message: GetBlueprintsByIdResponse, reader: jspb.BinaryReader): GetBlueprintsByIdResponse;
}

export namespace GetBlueprintsByIdResponse {
  export type AsObject = {
    blueprintsList: Array<Blueprint.AsObject>,
  }
}

export class GetScheduledBlueprintsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScheduledBlueprintsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetScheduledBlueprintsRequest): GetScheduledBlueprintsRequest.AsObject;
  static serializeBinaryToWriter(message: GetScheduledBlueprintsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScheduledBlueprintsRequest;
  static deserializeBinaryFromReader(message: GetScheduledBlueprintsRequest, reader: jspb.BinaryReader): GetScheduledBlueprintsRequest;
}

export namespace GetScheduledBlueprintsRequest {
  export type AsObject = {
  }
}

export class Blueprint extends jspb.Message {
  getBlueprintid(): BlueprintId | undefined;
  setBlueprintid(value?: BlueprintId): Blueprint;
  hasBlueprintid(): boolean;
  clearBlueprintid(): Blueprint;

  getName(): string;
  setName(value: string): Blueprint;

  getAvailablegamedata(): AvailableGameData | undefined;
  setAvailablegamedata(value?: AvailableGameData): Blueprint;
  hasAvailablegamedata(): boolean;
  clearAvailablegamedata(): Blueprint;

  getAvailabletags(): AvailableTags | undefined;
  setAvailabletags(value?: AvailableTags): Blueprint;
  hasAvailabletags(): boolean;
  clearAvailabletags(): Blueprint;

  getAvailablethumbnailurlsList(): Array<string>;
  setAvailablethumbnailurlsList(value: Array<string>): Blueprint;
  clearAvailablethumbnailurlsList(): Blueprint;
  addAvailablethumbnailurls(value: string, index?: number): Blueprint;

  getAvailableprogressionmodetags(): AvailableTags | undefined;
  setAvailableprogressionmodetags(value?: AvailableTags): Blueprint;
  hasAvailableprogressionmodetags(): boolean;
  clearAvailableprogressionmodetags(): Blueprint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blueprint.AsObject;
  static toObject(includeInstance: boolean, msg: Blueprint): Blueprint.AsObject;
  static serializeBinaryToWriter(message: Blueprint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Blueprint;
  static deserializeBinaryFromReader(message: Blueprint, reader: jspb.BinaryReader): Blueprint;
}

export namespace Blueprint {
  export type AsObject = {
    blueprintid?: BlueprintId.AsObject,
    name: string,
    availablegamedata?: AvailableGameData.AsObject,
    availabletags?: AvailableTags.AsObject,
    availablethumbnailurlsList: Array<string>,
    availableprogressionmodetags?: AvailableTags.AsObject,
  }

  export enum BlueprintidCase { 
    _BLUEPRINTID_NOT_SET = 0,
    BLUEPRINTID = 1,
  }

  export enum AvailablegamedataCase { 
    _AVAILABLEGAMEDATA_NOT_SET = 0,
    AVAILABLEGAMEDATA = 3,
  }

  export enum AvailabletagsCase { 
    _AVAILABLETAGS_NOT_SET = 0,
    AVAILABLETAGS = 4,
  }

  export enum AvailableprogressionmodetagsCase { 
    _AVAILABLEPROGRESSIONMODETAGS_NOT_SET = 0,
    AVAILABLEPROGRESSIONMODETAGS = 6,
  }
}

export class AvailableGameData extends jspb.Message {
  getMutatorsList(): Array<AvailableMutator>;
  setMutatorsList(value: Array<AvailableMutator>): AvailableGameData;
  clearMutatorsList(): AvailableGameData;
  addMutators(value?: AvailableMutator, index?: number): AvailableMutator;

  getMapsList(): Array<AvailableMapEntry>;
  setMapsList(value: Array<AvailableMapEntry>): AvailableGameData;
  clearMapsList(): AvailableGameData;
  addMaps(value?: AvailableMapEntry, index?: number): AvailableMapEntry;

  getModrules(): ModRulesDefinition | undefined;
  setModrules(value?: ModRulesDefinition): AvailableGameData;
  hasModrules(): boolean;
  clearModrules(): AvailableGameData;

  getAssetcategories(): AvailableAssetCategories | undefined;
  setAssetcategories(value?: AvailableAssetCategories): AvailableGameData;
  hasAssetcategories(): boolean;
  clearAssetcategories(): AvailableGameData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableGameData.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableGameData): AvailableGameData.AsObject;
  static serializeBinaryToWriter(message: AvailableGameData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableGameData;
  static deserializeBinaryFromReader(message: AvailableGameData, reader: jspb.BinaryReader): AvailableGameData;
}

export namespace AvailableGameData {
  export type AsObject = {
    mutatorsList: Array<AvailableMutator.AsObject>,
    mapsList: Array<AvailableMapEntry.AsObject>,
    modrules?: ModRulesDefinition.AsObject,
    assetcategories?: AvailableAssetCategories.AsObject,
  }

  export enum ModrulesCase { 
    _MODRULES_NOT_SET = 0,
    MODRULES = 3,
  }

  export enum AssetcategoriesCase { 
    _ASSETCATEGORIES_NOT_SET = 0,
    ASSETCATEGORIES = 4,
  }
}

export class AvailableAssetCategories extends jspb.Message {
  getRoottagsList(): Array<AvailableAssetCategoryTag>;
  setRoottagsList(value: Array<AvailableAssetCategoryTag>): AvailableAssetCategories;
  clearRoottagsList(): AvailableAssetCategories;
  addRoottags(value?: AvailableAssetCategoryTag, index?: number): AvailableAssetCategoryTag;

  getTagsList(): Array<AvailableAssetCategoryTag>;
  setTagsList(value: Array<AvailableAssetCategoryTag>): AvailableAssetCategories;
  clearTagsList(): AvailableAssetCategories;
  addTags(value?: AvailableAssetCategoryTag, index?: number): AvailableAssetCategoryTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableAssetCategories.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableAssetCategories): AvailableAssetCategories.AsObject;
  static serializeBinaryToWriter(message: AvailableAssetCategories, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableAssetCategories;
  static deserializeBinaryFromReader(message: AvailableAssetCategories, reader: jspb.BinaryReader): AvailableAssetCategories;
}

export namespace AvailableAssetCategories {
  export type AsObject = {
    roottagsList: Array<AvailableAssetCategoryTag.AsObject>,
    tagsList: Array<AvailableAssetCategoryTag.AsObject>,
  }
}

export class AvailableAssetCategoryTag extends jspb.Message {
  getTagid(): string;
  setTagid(value: string): AvailableAssetCategoryTag;

  getName(): string;
  setName(value: string): AvailableAssetCategoryTag;

  getChildrentagsList(): Array<string>;
  setChildrentagsList(value: Array<string>): AvailableAssetCategoryTag;
  clearChildrentagsList(): AvailableAssetCategoryTag;
  addChildrentags(value: string, index?: number): AvailableAssetCategoryTag;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): AvailableAssetCategoryTag;
  hasMetadata(): boolean;
  clearMetadata(): AvailableAssetCategoryTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableAssetCategoryTag.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableAssetCategoryTag): AvailableAssetCategoryTag.AsObject;
  static serializeBinaryToWriter(message: AvailableAssetCategoryTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableAssetCategoryTag;
  static deserializeBinaryFromReader(message: AvailableAssetCategoryTag, reader: jspb.BinaryReader): AvailableAssetCategoryTag;
}

export namespace AvailableAssetCategoryTag {
  export type AsObject = {
    tagid: string,
    name: string,
    childrentagsList: Array<string>,
    metadata?: Metadata.AsObject,
  }

  export enum MetadataCase { 
    _METADATA_NOT_SET = 0,
    METADATA = 4,
  }
}

export class ModRulesDefinition extends jspb.Message {
  getRulesversion(): number;
  setRulesversion(value: number): ModRulesDefinition;

  getModbuilder(): Uint8Array | string;
  getModbuilder_asU8(): Uint8Array;
  getModbuilder_asB64(): string;
  setModbuilder(value: Uint8Array | string): ModRulesDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModRulesDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ModRulesDefinition): ModRulesDefinition.AsObject;
  static serializeBinaryToWriter(message: ModRulesDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModRulesDefinition;
  static deserializeBinaryFromReader(message: ModRulesDefinition, reader: jspb.BinaryReader): ModRulesDefinition;
}

export namespace ModRulesDefinition {
  export type AsObject = {
    rulesversion: number,
    modbuilder: Uint8Array | string,
  }
}

export class AvailableTag extends jspb.Message {
  getId(): string;
  setId(value: string): AvailableTag;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): AvailableTag;
  hasMetadata(): boolean;
  clearMetadata(): AvailableTag;

  getCategory(): string;
  setCategory(value: string): AvailableTag;
  hasCategory(): boolean;
  clearCategory(): AvailableTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableTag.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableTag): AvailableTag.AsObject;
  static serializeBinaryToWriter(message: AvailableTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableTag;
  static deserializeBinaryFromReader(message: AvailableTag, reader: jspb.BinaryReader): AvailableTag;
}

export namespace AvailableTag {
  export type AsObject = {
    id: string,
    metadata?: Metadata.AsObject,
    category?: string,
  }

  export enum MetadataCase { 
    _METADATA_NOT_SET = 0,
    METADATA = 2,
  }

  export enum CategoryCase { 
    _CATEGORY_NOT_SET = 0,
    CATEGORY = 3,
  }
}

export class AvailableMapEntry extends jspb.Message {
  getLevelname(): string;
  setLevelname(value: string): AvailableMapEntry;

  getLevellocation(): string;
  setLevellocation(value: string): AvailableMapEntry;

  getGamesize(): AvailableIntValue | undefined;
  setGamesize(value?: AvailableIntValue): AvailableMapEntry;
  hasGamesize(): boolean;
  clearGamesize(): AvailableMapEntry;

  getRounds(): AvailableIntValue | undefined;
  setRounds(value?: AvailableIntValue): AvailableMapEntry;
  hasRounds(): boolean;
  clearRounds(): AvailableMapEntry;

  getAllowedspectators(): AvailableIntValue | undefined;
  setAllowedspectators(value?: AvailableIntValue): AvailableMapEntry;
  hasAllowedspectators(): boolean;
  clearAllowedspectators(): AvailableMapEntry;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): AvailableMapEntry;
  hasMetadata(): boolean;
  clearMetadata(): AvailableMapEntry;

  getAllowedteamsrange(): AvailableIntValue | undefined;
  setAllowedteamsrange(value?: AvailableIntValue): AvailableMapEntry;
  hasAllowedteamsrange(): boolean;
  clearAllowedteamsrange(): AvailableMapEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableMapEntry.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableMapEntry): AvailableMapEntry.AsObject;
  static serializeBinaryToWriter(message: AvailableMapEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableMapEntry;
  static deserializeBinaryFromReader(message: AvailableMapEntry, reader: jspb.BinaryReader): AvailableMapEntry;
}

export namespace AvailableMapEntry {
  export type AsObject = {
    levelname: string,
    levellocation: string,
    gamesize?: AvailableIntValue.AsObject,
    rounds?: AvailableIntValue.AsObject,
    allowedspectators?: AvailableIntValue.AsObject,
    metadata?: Metadata.AsObject,
    allowedteamsrange?: AvailableIntValue.AsObject,
  }

  export enum GamesizeCase { 
    _GAMESIZE_NOT_SET = 0,
    GAMESIZE = 3,
  }

  export enum RoundsCase { 
    _ROUNDS_NOT_SET = 0,
    ROUNDS = 4,
  }

  export enum AllowedspectatorsCase { 
    _ALLOWEDSPECTATORS_NOT_SET = 0,
    ALLOWEDSPECTATORS = 5,
  }

  export enum MetadataCase { 
    _METADATA_NOT_SET = 0,
    METADATA = 6,
  }

  export enum AllowedteamsrangeCase { 
    _ALLOWEDTEAMSRANGE_NOT_SET = 0,
    ALLOWEDTEAMSRANGE = 7,
  }
}

export class AvailableIntValue extends jspb.Message {
  getDefaultvalue(): number;
  setDefaultvalue(value: number): AvailableIntValue;

  getAvailablevalues(): AvailableIntValues | undefined;
  setAvailablevalues(value?: AvailableIntValues): AvailableIntValue;
  hasAvailablevalues(): boolean;
  clearAvailablevalues(): AvailableIntValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableIntValue.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableIntValue): AvailableIntValue.AsObject;
  static serializeBinaryToWriter(message: AvailableIntValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableIntValue;
  static deserializeBinaryFromReader(message: AvailableIntValue, reader: jspb.BinaryReader): AvailableIntValue;
}

export namespace AvailableIntValue {
  export type AsObject = {
    defaultvalue: number,
    availablevalues?: AvailableIntValues.AsObject,
  }

  export enum AvailablevaluesCase { 
    _AVAILABLEVALUES_NOT_SET = 0,
    AVAILABLEVALUES = 2,
  }
}

export class AvailableIntValues extends jspb.Message {
  getRange(): IntRange | undefined;
  setRange(value?: IntRange): AvailableIntValues;
  hasRange(): boolean;
  clearRange(): AvailableIntValues;

  getSparsevalues(): SparseIntValues | undefined;
  setSparsevalues(value?: SparseIntValues): AvailableIntValues;
  hasSparsevalues(): boolean;
  clearSparsevalues(): AvailableIntValues;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableIntValues.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableIntValues): AvailableIntValues.AsObject;
  static serializeBinaryToWriter(message: AvailableIntValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableIntValues;
  static deserializeBinaryFromReader(message: AvailableIntValues, reader: jspb.BinaryReader): AvailableIntValues;
}

export namespace AvailableIntValues {
  export type AsObject = {
    range?: IntRange.AsObject,
    sparsevalues?: SparseIntValues.AsObject,
  }

  export enum RangeCase { 
    _RANGE_NOT_SET = 0,
    RANGE = 1,
  }

  export enum SparsevaluesCase { 
    _SPARSEVALUES_NOT_SET = 0,
    SPARSEVALUES = 2,
  }
}

export class SparseIntValues extends jspb.Message {
  getValuesList(): Array<number>;
  setValuesList(value: Array<number>): SparseIntValues;
  clearValuesList(): SparseIntValues;
  addValues(value: number, index?: number): SparseIntValues;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SparseIntValues.AsObject;
  static toObject(includeInstance: boolean, msg: SparseIntValues): SparseIntValues.AsObject;
  static serializeBinaryToWriter(message: SparseIntValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SparseIntValues;
  static deserializeBinaryFromReader(message: SparseIntValues, reader: jspb.BinaryReader): SparseIntValues;
}

export namespace SparseIntValues {
  export type AsObject = {
    valuesList: Array<number>,
  }
}

export class IntRange extends jspb.Message {
  getMinvalue(): number;
  setMinvalue(value: number): IntRange;

  getMaxvalue(): number;
  setMaxvalue(value: number): IntRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntRange.AsObject;
  static toObject(includeInstance: boolean, msg: IntRange): IntRange.AsObject;
  static serializeBinaryToWriter(message: IntRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntRange;
  static deserializeBinaryFromReader(message: IntRange, reader: jspb.BinaryReader): IntRange;
}

export namespace IntRange {
  export type AsObject = {
    minvalue: number,
    maxvalue: number,
  }
}

export class AvailableTags extends jspb.Message {
  getTagsList(): Array<AvailableTag>;
  setTagsList(value: Array<AvailableTag>): AvailableTags;
  clearTagsList(): AvailableTags;
  addTags(value?: AvailableTag, index?: number): AvailableTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableTags.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableTags): AvailableTags.AsObject;
  static serializeBinaryToWriter(message: AvailableTags, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableTags;
  static deserializeBinaryFromReader(message: AvailableTags, reader: jspb.BinaryReader): AvailableTags;
}

export namespace AvailableTags {
  export type AsObject = {
    tagsList: Array<AvailableTag.AsObject>,
  }
}

export class AvailableMutator extends jspb.Message {
  getName(): string;
  setName(value: string): AvailableMutator;

  getCategory(): string;
  setCategory(value: string): AvailableMutator;

  getKind(): AvailableMutatorKind | undefined;
  setKind(value?: AvailableMutatorKind): AvailableMutator;
  hasKind(): boolean;
  clearKind(): AvailableMutator;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): AvailableMutator;
  hasMetadata(): boolean;
  clearMetadata(): AvailableMutator;

  getId(): string;
  setId(value: string): AvailableMutator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableMutator.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableMutator): AvailableMutator.AsObject;
  static serializeBinaryToWriter(message: AvailableMutator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableMutator;
  static deserializeBinaryFromReader(message: AvailableMutator, reader: jspb.BinaryReader): AvailableMutator;
}

export namespace AvailableMutator {
  export type AsObject = {
    name: string,
    category: string,
    kind?: AvailableMutatorKind.AsObject,
    metadata?: Metadata.AsObject,
    id: string,
  }

  export enum KindCase { 
    _KIND_NOT_SET = 0,
    KIND = 3,
  }

  export enum MetadataCase { 
    _METADATA_NOT_SET = 0,
    METADATA = 4,
  }
}

export class AvailableMutatorKind extends jspb.Message {
  getMutatorboolean(): MutatorBoolean | undefined;
  setMutatorboolean(value?: MutatorBoolean): AvailableMutatorKind;
  hasMutatorboolean(): boolean;
  clearMutatorboolean(): AvailableMutatorKind;

  getMutatorstring(): MutatorString | undefined;
  setMutatorstring(value?: MutatorString): AvailableMutatorKind;
  hasMutatorstring(): boolean;
  clearMutatorstring(): AvailableMutatorKind;

  getMutatorfloatvalues(): AvailableMutatorFloatValues | undefined;
  setMutatorfloatvalues(value?: AvailableMutatorFloatValues): AvailableMutatorKind;
  hasMutatorfloatvalues(): boolean;
  clearMutatorfloatvalues(): AvailableMutatorKind;

  getMutatorintvalues(): AvailableMutatorIntValues | undefined;
  setMutatorintvalues(value?: AvailableMutatorIntValues): AvailableMutatorKind;
  hasMutatorintvalues(): boolean;
  clearMutatorintvalues(): AvailableMutatorKind;

  getMutatorsparseboolean(): MutatorSparseBoolean | undefined;
  setMutatorsparseboolean(value?: MutatorSparseBoolean): AvailableMutatorKind;
  hasMutatorsparseboolean(): boolean;
  clearMutatorsparseboolean(): AvailableMutatorKind;

  getMutatorsparseintvalues(): AvailableMutatorSparseIntValues | undefined;
  setMutatorsparseintvalues(value?: AvailableMutatorSparseIntValues): AvailableMutatorKind;
  hasMutatorsparseintvalues(): boolean;
  clearMutatorsparseintvalues(): AvailableMutatorKind;

  getMutatorsparsefloatvalues(): AvailableMutatorSparseFloatValues | undefined;
  setMutatorsparsefloatvalues(value?: AvailableMutatorSparseFloatValues): AvailableMutatorKind;
  hasMutatorsparsefloatvalues(): boolean;
  clearMutatorsparsefloatvalues(): AvailableMutatorKind;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableMutatorKind.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableMutatorKind): AvailableMutatorKind.AsObject;
  static serializeBinaryToWriter(message: AvailableMutatorKind, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableMutatorKind;
  static deserializeBinaryFromReader(message: AvailableMutatorKind, reader: jspb.BinaryReader): AvailableMutatorKind;
}

export namespace AvailableMutatorKind {
  export type AsObject = {
    mutatorboolean?: MutatorBoolean.AsObject,
    mutatorstring?: MutatorString.AsObject,
    mutatorfloatvalues?: AvailableMutatorFloatValues.AsObject,
    mutatorintvalues?: AvailableMutatorIntValues.AsObject,
    mutatorsparseboolean?: MutatorSparseBoolean.AsObject,
    mutatorsparseintvalues?: AvailableMutatorSparseIntValues.AsObject,
    mutatorsparsefloatvalues?: AvailableMutatorSparseFloatValues.AsObject,
  }

  export enum MutatorbooleanCase { 
    _MUTATORBOOLEAN_NOT_SET = 0,
    MUTATORBOOLEAN = 1,
  }

  export enum MutatorstringCase { 
    _MUTATORSTRING_NOT_SET = 0,
    MUTATORSTRING = 4,
  }

  export enum MutatorfloatvaluesCase { 
    _MUTATORFLOATVALUES_NOT_SET = 0,
    MUTATORFLOATVALUES = 5,
  }

  export enum MutatorintvaluesCase { 
    _MUTATORINTVALUES_NOT_SET = 0,
    MUTATORINTVALUES = 6,
  }

  export enum MutatorsparsebooleanCase { 
    _MUTATORSPARSEBOOLEAN_NOT_SET = 0,
    MUTATORSPARSEBOOLEAN = 7,
  }

  export enum MutatorsparseintvaluesCase { 
    _MUTATORSPARSEINTVALUES_NOT_SET = 0,
    MUTATORSPARSEINTVALUES = 8,
  }

  export enum MutatorsparsefloatvaluesCase { 
    _MUTATORSPARSEFLOATVALUES_NOT_SET = 0,
    MUTATORSPARSEFLOATVALUES = 9,
  }
}

export class AvailableMutatorSparseIntValues extends jspb.Message {
  getMutator(): MutatorSparseInt | undefined;
  setMutator(value?: MutatorSparseInt): AvailableMutatorSparseIntValues;
  hasMutator(): boolean;
  clearMutator(): AvailableMutatorSparseIntValues;

  getAvailablevalues(): AvailableIntValues | undefined;
  setAvailablevalues(value?: AvailableIntValues): AvailableMutatorSparseIntValues;
  hasAvailablevalues(): boolean;
  clearAvailablevalues(): AvailableMutatorSparseIntValues;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableMutatorSparseIntValues.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableMutatorSparseIntValues): AvailableMutatorSparseIntValues.AsObject;
  static serializeBinaryToWriter(message: AvailableMutatorSparseIntValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableMutatorSparseIntValues;
  static deserializeBinaryFromReader(message: AvailableMutatorSparseIntValues, reader: jspb.BinaryReader): AvailableMutatorSparseIntValues;
}

export namespace AvailableMutatorSparseIntValues {
  export type AsObject = {
    mutator?: MutatorSparseInt.AsObject,
    availablevalues?: AvailableIntValues.AsObject,
  }

  export enum MutatorCase { 
    _MUTATOR_NOT_SET = 0,
    MUTATOR = 1,
  }

  export enum AvailablevaluesCase { 
    _AVAILABLEVALUES_NOT_SET = 0,
    AVAILABLEVALUES = 2,
  }
}

export class AvailableMutatorSparseFloatValues extends jspb.Message {
  getMutator(): MutatorSparseFloat | undefined;
  setMutator(value?: MutatorSparseFloat): AvailableMutatorSparseFloatValues;
  hasMutator(): boolean;
  clearMutator(): AvailableMutatorSparseFloatValues;

  getAvailablevalues(): AvailableFloatValues | undefined;
  setAvailablevalues(value?: AvailableFloatValues): AvailableMutatorSparseFloatValues;
  hasAvailablevalues(): boolean;
  clearAvailablevalues(): AvailableMutatorSparseFloatValues;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableMutatorSparseFloatValues.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableMutatorSparseFloatValues): AvailableMutatorSparseFloatValues.AsObject;
  static serializeBinaryToWriter(message: AvailableMutatorSparseFloatValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableMutatorSparseFloatValues;
  static deserializeBinaryFromReader(message: AvailableMutatorSparseFloatValues, reader: jspb.BinaryReader): AvailableMutatorSparseFloatValues;
}

export namespace AvailableMutatorSparseFloatValues {
  export type AsObject = {
    mutator?: MutatorSparseFloat.AsObject,
    availablevalues?: AvailableFloatValues.AsObject,
  }

  export enum MutatorCase { 
    _MUTATOR_NOT_SET = 0,
    MUTATOR = 1,
  }

  export enum AvailablevaluesCase { 
    _AVAILABLEVALUES_NOT_SET = 0,
    AVAILABLEVALUES = 2,
  }
}

export class CreatePlayElementRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreatePlayElementRequest;

  getDescription(): string;
  setDescription(value: string): CreatePlayElementRequest;
  hasDescription(): boolean;
  clearDescription(): CreatePlayElementRequest;

  getDesignmetadata(): DesignMetadata | undefined;
  setDesignmetadata(value?: DesignMetadata): CreatePlayElementRequest;
  hasDesignmetadata(): boolean;
  clearDesignmetadata(): CreatePlayElementRequest;

  getMaprotation(): MapRotation | undefined;
  setMaprotation(value?: MapRotation): CreatePlayElementRequest;
  hasMaprotation(): boolean;
  clearMaprotation(): CreatePlayElementRequest;

  getMutatorsList(): Array<Mutator>;
  setMutatorsList(value: Array<Mutator>): CreatePlayElementRequest;
  clearMutatorsList(): CreatePlayElementRequest;
  addMutators(value?: Mutator, index?: number): Mutator;

  getAssetcategoriesList(): Array<AssetCategory>;
  setAssetcategoriesList(value: Array<AssetCategory>): CreatePlayElementRequest;
  clearAssetcategoriesList(): CreatePlayElementRequest;
  addAssetcategories(value?: AssetCategory, index?: number): AssetCategory;

  getOriginalmodrules(): Uint8Array | string;
  getOriginalmodrules_asU8(): Uint8Array;
  getOriginalmodrules_asB64(): string;
  setOriginalmodrules(value: Uint8Array | string): CreatePlayElementRequest;

  getPlayelementsettings(): PlayElementSettings | undefined;
  setPlayelementsettings(value?: PlayElementSettings): CreatePlayElementRequest;
  hasPlayelementsettings(): boolean;
  clearPlayelementsettings(): CreatePlayElementRequest;

  getPublishstate(): PublishStateType;
  setPublishstate(value: PublishStateType): CreatePlayElementRequest;

  getModleveldataid(): string;
  setModleveldataid(value: string): CreatePlayElementRequest;
  hasModleveldataid(): boolean;
  clearModleveldataid(): CreatePlayElementRequest;

  getThumbnailurl(): string;
  setThumbnailurl(value: string): CreatePlayElementRequest;
  hasThumbnailurl(): boolean;
  clearThumbnailurl(): CreatePlayElementRequest;

  getAttachmentsList(): Array<Attachment>;
  setAttachmentsList(value: Array<Attachment>): CreatePlayElementRequest;
  clearAttachmentsList(): CreatePlayElementRequest;
  addAttachments(value?: Attachment, index?: number): Attachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlayElementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlayElementRequest): CreatePlayElementRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePlayElementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlayElementRequest;
  static deserializeBinaryFromReader(message: CreatePlayElementRequest, reader: jspb.BinaryReader): CreatePlayElementRequest;
}

export namespace CreatePlayElementRequest {
  export type AsObject = {
    name: string,
    description?: string,
    designmetadata?: DesignMetadata.AsObject,
    maprotation?: MapRotation.AsObject,
    mutatorsList: Array<Mutator.AsObject>,
    assetcategoriesList: Array<AssetCategory.AsObject>,
    originalmodrules: Uint8Array | string,
    playelementsettings?: PlayElementSettings.AsObject,
    publishstate: PublishStateType,
    modleveldataid?: string,
    thumbnailurl?: string,
    attachmentsList: Array<Attachment.AsObject>,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 2,
  }

  export enum DesignmetadataCase { 
    _DESIGNMETADATA_NOT_SET = 0,
    DESIGNMETADATA = 3,
  }

  export enum MaprotationCase { 
    _MAPROTATION_NOT_SET = 0,
    MAPROTATION = 4,
  }

  export enum PlayelementsettingsCase { 
    _PLAYELEMENTSETTINGS_NOT_SET = 0,
    PLAYELEMENTSETTINGS = 8,
  }

  export enum ModleveldataidCase { 
    _MODLEVELDATAID_NOT_SET = 0,
    MODLEVELDATAID = 10,
  }

  export enum ThumbnailurlCase { 
    _THUMBNAILURL_NOT_SET = 0,
    THUMBNAILURL = 11,
  }
}

export class AvailableMutatorFloatValues extends jspb.Message {
  getMutator(): MutatorFloat | undefined;
  setMutator(value?: MutatorFloat): AvailableMutatorFloatValues;
  hasMutator(): boolean;
  clearMutator(): AvailableMutatorFloatValues;

  getAvailablevalues(): AvailableFloatValues | undefined;
  setAvailablevalues(value?: AvailableFloatValues): AvailableMutatorFloatValues;
  hasAvailablevalues(): boolean;
  clearAvailablevalues(): AvailableMutatorFloatValues;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableMutatorFloatValues.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableMutatorFloatValues): AvailableMutatorFloatValues.AsObject;
  static serializeBinaryToWriter(message: AvailableMutatorFloatValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableMutatorFloatValues;
  static deserializeBinaryFromReader(message: AvailableMutatorFloatValues, reader: jspb.BinaryReader): AvailableMutatorFloatValues;
}

export namespace AvailableMutatorFloatValues {
  export type AsObject = {
    mutator?: MutatorFloat.AsObject,
    availablevalues?: AvailableFloatValues.AsObject,
  }

  export enum MutatorCase { 
    _MUTATOR_NOT_SET = 0,
    MUTATOR = 1,
  }
}

export class AvailableFloatValues extends jspb.Message {
  getRange(): FloatRange | undefined;
  setRange(value?: FloatRange): AvailableFloatValues;
  hasRange(): boolean;
  clearRange(): AvailableFloatValues;

  getSparsevalues(): SparseFloatValues | undefined;
  setSparsevalues(value?: SparseFloatValues): AvailableFloatValues;
  hasSparsevalues(): boolean;
  clearSparsevalues(): AvailableFloatValues;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableFloatValues.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableFloatValues): AvailableFloatValues.AsObject;
  static serializeBinaryToWriter(message: AvailableFloatValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableFloatValues;
  static deserializeBinaryFromReader(message: AvailableFloatValues, reader: jspb.BinaryReader): AvailableFloatValues;
}

export namespace AvailableFloatValues {
  export type AsObject = {
    range?: FloatRange.AsObject,
    sparsevalues?: SparseFloatValues.AsObject,
  }

  export enum RangeCase { 
    _RANGE_NOT_SET = 0,
    RANGE = 1,
  }

  export enum SparsevaluesCase { 
    _SPARSEVALUES_NOT_SET = 0,
    SPARSEVALUES = 2,
  }
}

export class SparseFloatValues extends jspb.Message {
  getValuesList(): Array<number>;
  setValuesList(value: Array<number>): SparseFloatValues;
  clearValuesList(): SparseFloatValues;
  addValues(value: number, index?: number): SparseFloatValues;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SparseFloatValues.AsObject;
  static toObject(includeInstance: boolean, msg: SparseFloatValues): SparseFloatValues.AsObject;
  static serializeBinaryToWriter(message: SparseFloatValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SparseFloatValues;
  static deserializeBinaryFromReader(message: SparseFloatValues, reader: jspb.BinaryReader): SparseFloatValues;
}

export namespace SparseFloatValues {
  export type AsObject = {
    valuesList: Array<number>,
  }
}

export class FloatRange extends jspb.Message {
  getMinvalue(): number;
  setMinvalue(value: number): FloatRange;

  getMaxvalue(): number;
  setMaxvalue(value: number): FloatRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FloatRange.AsObject;
  static toObject(includeInstance: boolean, msg: FloatRange): FloatRange.AsObject;
  static serializeBinaryToWriter(message: FloatRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FloatRange;
  static deserializeBinaryFromReader(message: FloatRange, reader: jspb.BinaryReader): FloatRange;
}

export namespace FloatRange {
  export type AsObject = {
    minvalue: number,
    maxvalue: number,
  }
}

export class AvailableMutatorIntValues extends jspb.Message {
  getMutator(): MutatorInt | undefined;
  setMutator(value?: MutatorInt): AvailableMutatorIntValues;
  hasMutator(): boolean;
  clearMutator(): AvailableMutatorIntValues;

  getAvailablevalues(): AvailableIntValues | undefined;
  setAvailablevalues(value?: AvailableIntValues): AvailableMutatorIntValues;
  hasAvailablevalues(): boolean;
  clearAvailablevalues(): AvailableMutatorIntValues;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableMutatorIntValues.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableMutatorIntValues): AvailableMutatorIntValues.AsObject;
  static serializeBinaryToWriter(message: AvailableMutatorIntValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableMutatorIntValues;
  static deserializeBinaryFromReader(message: AvailableMutatorIntValues, reader: jspb.BinaryReader): AvailableMutatorIntValues;
}

export namespace AvailableMutatorIntValues {
  export type AsObject = {
    mutator?: MutatorInt.AsObject,
    availablevalues?: AvailableIntValues.AsObject,
  }

  export enum MutatorCase { 
    _MUTATOR_NOT_SET = 0,
    MUTATOR = 1,
  }

  export enum AvailablevaluesCase { 
    _AVAILABLEVALUES_NOT_SET = 0,
    AVAILABLEVALUES = 2,
  }
}

export class UpdatePlayElementRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdatePlayElementRequest;

  getName(): string;
  setName(value: string): UpdatePlayElementRequest;

  getDescription(): string;
  setDescription(value: string): UpdatePlayElementRequest;
  hasDescription(): boolean;
  clearDescription(): UpdatePlayElementRequest;

  getDesignmetadata(): DesignMetadata | undefined;
  setDesignmetadata(value?: DesignMetadata): UpdatePlayElementRequest;
  hasDesignmetadata(): boolean;
  clearDesignmetadata(): UpdatePlayElementRequest;

  getMaprotation(): MapRotation | undefined;
  setMaprotation(value?: MapRotation): UpdatePlayElementRequest;
  hasMaprotation(): boolean;
  clearMaprotation(): UpdatePlayElementRequest;

  getMutatorsList(): Array<Mutator>;
  setMutatorsList(value: Array<Mutator>): UpdatePlayElementRequest;
  clearMutatorsList(): UpdatePlayElementRequest;
  addMutators(value?: Mutator, index?: number): Mutator;

  getAssetcategoriesList(): Array<AssetCategory>;
  setAssetcategoriesList(value: Array<AssetCategory>): UpdatePlayElementRequest;
  clearAssetcategoriesList(): UpdatePlayElementRequest;
  addAssetcategories(value?: AssetCategory, index?: number): AssetCategory;

  getOriginalmodrules(): Uint8Array | string;
  getOriginalmodrules_asU8(): Uint8Array;
  getOriginalmodrules_asB64(): string;
  setOriginalmodrules(value: Uint8Array | string): UpdatePlayElementRequest;

  getPlayelementsettings(): PlayElementSettings | undefined;
  setPlayelementsettings(value?: PlayElementSettings): UpdatePlayElementRequest;
  hasPlayelementsettings(): boolean;
  clearPlayelementsettings(): UpdatePlayElementRequest;

  getPublishstate(): PublishStateType;
  setPublishstate(value: PublishStateType): UpdatePlayElementRequest;

  getModleveldataid(): string;
  setModleveldataid(value: string): UpdatePlayElementRequest;
  hasModleveldataid(): boolean;
  clearModleveldataid(): UpdatePlayElementRequest;

  getThumbnailurl(): string;
  setThumbnailurl(value: string): UpdatePlayElementRequest;
  hasThumbnailurl(): boolean;
  clearThumbnailurl(): UpdatePlayElementRequest;

  getAttachmentsList(): Array<Attachment>;
  setAttachmentsList(value: Array<Attachment>): UpdatePlayElementRequest;
  clearAttachmentsList(): UpdatePlayElementRequest;
  addAttachments(value?: Attachment, index?: number): Attachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePlayElementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePlayElementRequest): UpdatePlayElementRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePlayElementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePlayElementRequest;
  static deserializeBinaryFromReader(message: UpdatePlayElementRequest, reader: jspb.BinaryReader): UpdatePlayElementRequest;
}

export namespace UpdatePlayElementRequest {
  export type AsObject = {
    id: string,
    name: string,
    description?: string,
    designmetadata?: DesignMetadata.AsObject,
    maprotation?: MapRotation.AsObject,
    mutatorsList: Array<Mutator.AsObject>,
    assetcategoriesList: Array<AssetCategory.AsObject>,
    originalmodrules: Uint8Array | string,
    playelementsettings?: PlayElementSettings.AsObject,
    publishstate: PublishStateType,
    modleveldataid?: string,
    thumbnailurl?: string,
    attachmentsList: Array<Attachment.AsObject>,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 3,
  }

  export enum DesignmetadataCase { 
    _DESIGNMETADATA_NOT_SET = 0,
    DESIGNMETADATA = 4,
  }

  export enum MaprotationCase { 
    _MAPROTATION_NOT_SET = 0,
    MAPROTATION = 5,
  }

  export enum PlayelementsettingsCase { 
    _PLAYELEMENTSETTINGS_NOT_SET = 0,
    PLAYELEMENTSETTINGS = 9,
  }

  export enum ModleveldataidCase { 
    _MODLEVELDATAID_NOT_SET = 0,
    MODLEVELDATAID = 11,
  }

  export enum ThumbnailurlCase { 
    _THUMBNAILURL_NOT_SET = 0,
    THUMBNAILURL = 12,
  }
}

export class PlayElementResponse extends jspb.Message {
  getPlayelement(): PlayElement | undefined;
  setPlayelement(value?: PlayElement): PlayElementResponse;
  hasPlayelement(): boolean;
  clearPlayelement(): PlayElementResponse;

  getPlayelementdesign(): PlayElementDesign | undefined;
  setPlayelementdesign(value?: PlayElementDesign): PlayElementResponse;
  hasPlayelementdesign(): boolean;
  clearPlayelementdesign(): PlayElementResponse;

  getProgressionmode(): string;
  setProgressionmode(value: string): PlayElementResponse;
  hasProgressionmode(): boolean;
  clearProgressionmode(): PlayElementResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayElementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlayElementResponse): PlayElementResponse.AsObject;
  static serializeBinaryToWriter(message: PlayElementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayElementResponse;
  static deserializeBinaryFromReader(message: PlayElementResponse, reader: jspb.BinaryReader): PlayElementResponse;
}

export namespace PlayElementResponse {
  export type AsObject = {
    playelement?: PlayElement.AsObject,
    playelementdesign?: PlayElementDesign.AsObject,
    progressionmode?: string,
  }

  export enum PlayelementCase { 
    _PLAYELEMENT_NOT_SET = 0,
    PLAYELEMENT = 1,
  }

  export enum PlayelementdesignCase { 
    _PLAYELEMENTDESIGN_NOT_SET = 0,
    PLAYELEMENTDESIGN = 2,
  }

  export enum ProgressionmodeCase { 
    _PROGRESSIONMODE_NOT_SET = 0,
    PROGRESSIONMODE = 3,
  }
}

export class PlayElement extends jspb.Message {
  getId(): string;
  setId(value: string): PlayElement;

  getDesignid(): string;
  setDesignid(value: string): PlayElement;

  getCreator(): Creator | undefined;
  setCreator(value?: Creator): PlayElement;
  hasCreator(): boolean;
  clearCreator(): PlayElement;

  getName(): string;
  setName(value: string): PlayElement;

  getDescription(): string;
  setDescription(value: string): PlayElement;
  hasDescription(): boolean;
  clearDescription(): PlayElement;

  getCreated(): number;
  setCreated(value: number): PlayElement;
  hasCreated(): boolean;
  clearCreated(): PlayElement;

  getUpdated(): number;
  setUpdated(value: number): PlayElement;
  hasUpdated(): boolean;
  clearUpdated(): PlayElement;

  getPlayelementsettings(): PlayElementSettings | undefined;
  setPlayelementsettings(value?: PlayElementSettings): PlayElement;
  hasPlayelementsettings(): boolean;
  clearPlayelementsettings(): PlayElement;

  getPublishstatetype(): PublishStateType;
  setPublishstatetype(value: PublishStateType): PlayElement;

  getLikes(): number;
  setLikes(value: number): PlayElement;
  hasLikes(): boolean;
  clearLikes(): PlayElement;

  getPublishat(): number;
  setPublishat(value: number): PlayElement;
  hasPublishat(): boolean;
  clearPublishat(): PlayElement;

  getThumbnailurl(): string;
  setThumbnailurl(value: string): PlayElement;
  hasThumbnailurl(): boolean;
  clearThumbnailurl(): PlayElement;

  getModerationstate(): ModerationStateType;
  setModerationstate(value: ModerationStateType): PlayElement;

  getShortcode(): string;
  setShortcode(value: string): PlayElement;
  hasShortcode(): boolean;
  clearShortcode(): PlayElement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayElement.AsObject;
  static toObject(includeInstance: boolean, msg: PlayElement): PlayElement.AsObject;
  static serializeBinaryToWriter(message: PlayElement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayElement;
  static deserializeBinaryFromReader(message: PlayElement, reader: jspb.BinaryReader): PlayElement;
}

export namespace PlayElement {
  export type AsObject = {
    id: string,
    designid: string,
    creator?: Creator.AsObject,
    name: string,
    description?: string,
    created?: number,
    updated?: number,
    playelementsettings?: PlayElementSettings.AsObject,
    publishstatetype: PublishStateType,
    likes?: number,
    publishat?: number,
    thumbnailurl?: string,
    moderationstate: ModerationStateType,
    shortcode?: string,
  }

  export enum CreatorCase { 
    _CREATOR_NOT_SET = 0,
    CREATOR = 3,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 5,
  }

  export enum CreatedCase { 
    _CREATED_NOT_SET = 0,
    CREATED = 6,
  }

  export enum UpdatedCase { 
    _UPDATED_NOT_SET = 0,
    UPDATED = 7,
  }

  export enum PlayelementsettingsCase { 
    _PLAYELEMENTSETTINGS_NOT_SET = 0,
    PLAYELEMENTSETTINGS = 8,
  }

  export enum LikesCase { 
    _LIKES_NOT_SET = 0,
    LIKES = 10,
  }

  export enum PublishatCase { 
    _PUBLISHAT_NOT_SET = 0,
    PUBLISHAT = 11,
  }

  export enum ThumbnailurlCase { 
    _THUMBNAILURL_NOT_SET = 0,
    THUMBNAILURL = 12,
  }

  export enum ShortcodeCase { 
    _SHORTCODE_NOT_SET = 0,
    SHORTCODE = 14,
  }
}

export class PlayElementDesign extends jspb.Message {
  getDesignid(): string;
  setDesignid(value: string): PlayElementDesign;

  getDesignname(): string;
  setDesignname(value: string): PlayElementDesign;

  getUpdated(): number;
  setUpdated(value: number): PlayElementDesign;
  hasUpdated(): boolean;
  clearUpdated(): PlayElementDesign;

  getDesignmetadata(): DesignMetadata | undefined;
  setDesignmetadata(value?: DesignMetadata): PlayElementDesign;
  hasDesignmetadata(): boolean;
  clearDesignmetadata(): PlayElementDesign;

  getMaprotation(): MapRotation | undefined;
  setMaprotation(value?: MapRotation): PlayElementDesign;
  hasMaprotation(): boolean;
  clearMaprotation(): PlayElementDesign;

  getMutatorsList(): Array<Mutator>;
  setMutatorsList(value: Array<Mutator>): PlayElementDesign;
  clearMutatorsList(): PlayElementDesign;
  addMutators(value?: Mutator, index?: number): Mutator;

  getAssetcategoriesList(): Array<AssetCategory>;
  setAssetcategoriesList(value: Array<AssetCategory>): PlayElementDesign;
  clearAssetcategoriesList(): PlayElementDesign;
  addAssetcategories(value?: AssetCategory, index?: number): AssetCategory;

  getLicenserequirementsList(): Array<string>;
  setLicenserequirementsList(value: Array<string>): PlayElementDesign;
  clearLicenserequirementsList(): PlayElementDesign;
  addLicenserequirements(value: string, index?: number): PlayElementDesign;

  getModrules(): ModRules | undefined;
  setModrules(value?: ModRules): PlayElementDesign;
  hasModrules(): boolean;
  clearModrules(): PlayElementDesign;

  getTagsList(): Array<Tag>;
  setTagsList(value: Array<Tag>): PlayElementDesign;
  clearTagsList(): PlayElementDesign;
  addTags(value?: Tag, index?: number): Tag;

  getBlazesettings(): BlazePlayElementDesignSettings | undefined;
  setBlazesettings(value?: BlazePlayElementDesignSettings): PlayElementDesign;
  hasBlazesettings(): boolean;
  clearBlazesettings(): PlayElementDesign;

  getModleveldataid(): string;
  setModleveldataid(value: string): PlayElementDesign;
  hasModleveldataid(): boolean;
  clearModleveldataid(): PlayElementDesign;

  getAttachmentsList(): Array<Attachment>;
  setAttachmentsList(value: Array<Attachment>): PlayElementDesign;
  clearAttachmentsList(): PlayElementDesign;
  addAttachments(value?: Attachment, index?: number): Attachment;

  getGrouplicensesList(): Array<string>;
  setGrouplicensesList(value: Array<string>): PlayElementDesign;
  clearGrouplicensesList(): PlayElementDesign;
  addGrouplicenses(value: string, index?: number): PlayElementDesign;

  getAttachmentcompilestatus(): AttachmentCompileStatus;
  setAttachmentcompilestatus(value: AttachmentCompileStatus): PlayElementDesign;

  getServerhostlicenserequirementsList(): Array<string>;
  setServerhostlicenserequirementsList(value: Array<string>): PlayElementDesign;
  clearServerhostlicenserequirementsList(): PlayElementDesign;
  addServerhostlicenserequirements(value: string, index?: number): PlayElementDesign;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayElementDesign.AsObject;
  static toObject(includeInstance: boolean, msg: PlayElementDesign): PlayElementDesign.AsObject;
  static serializeBinaryToWriter(message: PlayElementDesign, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayElementDesign;
  static deserializeBinaryFromReader(message: PlayElementDesign, reader: jspb.BinaryReader): PlayElementDesign;
}

export namespace PlayElementDesign {
  export type AsObject = {
    designid: string,
    designname: string,
    updated?: number,
    designmetadata?: DesignMetadata.AsObject,
    maprotation?: MapRotation.AsObject,
    mutatorsList: Array<Mutator.AsObject>,
    assetcategoriesList: Array<AssetCategory.AsObject>,
    licenserequirementsList: Array<string>,
    modrules?: ModRules.AsObject,
    tagsList: Array<Tag.AsObject>,
    blazesettings?: BlazePlayElementDesignSettings.AsObject,
    modleveldataid?: string,
    attachmentsList: Array<Attachment.AsObject>,
    grouplicensesList: Array<string>,
    attachmentcompilestatus: AttachmentCompileStatus,
    serverhostlicenserequirementsList: Array<string>,
  }

  export enum UpdatedCase { 
    _UPDATED_NOT_SET = 0,
    UPDATED = 4,
  }

  export enum DesignmetadataCase { 
    _DESIGNMETADATA_NOT_SET = 0,
    DESIGNMETADATA = 5,
  }

  export enum MaprotationCase { 
    _MAPROTATION_NOT_SET = 0,
    MAPROTATION = 6,
  }

  export enum ModrulesCase { 
    _MODRULES_NOT_SET = 0,
    MODRULES = 10,
  }

  export enum BlazesettingsCase { 
    _BLAZESETTINGS_NOT_SET = 0,
    BLAZESETTINGS = 12,
  }

  export enum ModleveldataidCase { 
    _MODLEVELDATAID_NOT_SET = 0,
    MODLEVELDATAID = 13,
  }
}

export class Creator extends jspb.Message {
  getInternalcreator(): InternalCreator | undefined;
  setInternalcreator(value?: InternalCreator): Creator;
  hasInternalcreator(): boolean;
  clearInternalcreator(): Creator;

  getPlayercreator(): PlayerCreator | undefined;
  setPlayercreator(value?: PlayerCreator): Creator;
  hasPlayercreator(): boolean;
  clearPlayercreator(): Creator;

  getExternalcreator(): ExternalCreator | undefined;
  setExternalcreator(value?: ExternalCreator): Creator;
  hasExternalcreator(): boolean;
  clearExternalcreator(): Creator;

  getTrustedcreator(): PlayerCreator | undefined;
  setTrustedcreator(value?: PlayerCreator): Creator;
  hasTrustedcreator(): boolean;
  clearTrustedcreator(): Creator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Creator.AsObject;
  static toObject(includeInstance: boolean, msg: Creator): Creator.AsObject;
  static serializeBinaryToWriter(message: Creator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Creator;
  static deserializeBinaryFromReader(message: Creator, reader: jspb.BinaryReader): Creator;
}

export namespace Creator {
  export type AsObject = {
    internalcreator?: InternalCreator.AsObject,
    playercreator?: PlayerCreator.AsObject,
    externalcreator?: ExternalCreator.AsObject,
    trustedcreator?: PlayerCreator.AsObject,
  }

  export enum InternalcreatorCase { 
    _INTERNALCREATOR_NOT_SET = 0,
    INTERNALCREATOR = 1,
  }

  export enum PlayercreatorCase { 
    _PLAYERCREATOR_NOT_SET = 0,
    PLAYERCREATOR = 2,
  }

  export enum ExternalcreatorCase { 
    _EXTERNALCREATOR_NOT_SET = 0,
    EXTERNALCREATOR = 3,
  }

  export enum TrustedcreatorCase { 
    _TRUSTEDCREATOR_NOT_SET = 0,
    TRUSTEDCREATOR = 4,
  }
}

export class InternalCreator extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalCreator.AsObject;
  static toObject(includeInstance: boolean, msg: InternalCreator): InternalCreator.AsObject;
  static serializeBinaryToWriter(message: InternalCreator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalCreator;
  static deserializeBinaryFromReader(message: InternalCreator, reader: jspb.BinaryReader): InternalCreator;
}

export namespace InternalCreator {
  export type AsObject = {
  }
}

export class PlayerCreator extends jspb.Message {
  getPlayer(): Player | undefined;
  setPlayer(value?: Player): PlayerCreator;
  hasPlayer(): boolean;
  clearPlayer(): PlayerCreator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerCreator.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerCreator): PlayerCreator.AsObject;
  static serializeBinaryToWriter(message: PlayerCreator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerCreator;
  static deserializeBinaryFromReader(message: PlayerCreator, reader: jspb.BinaryReader): PlayerCreator;
}

export namespace PlayerCreator {
  export type AsObject = {
    player?: Player.AsObject,
  }

  export enum PlayerCase { 
    _PLAYER_NOT_SET = 0,
    PLAYER = 1,
  }
}

export class ExternalCreator extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalCreator.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalCreator): ExternalCreator.AsObject;
  static serializeBinaryToWriter(message: ExternalCreator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalCreator;
  static deserializeBinaryFromReader(message: ExternalCreator, reader: jspb.BinaryReader): ExternalCreator;
}

export namespace ExternalCreator {
  export type AsObject = {
  }
}

export class Player extends jspb.Message {
  getNucleusid(): number;
  setNucleusid(value: number): Player;

  getPersonaid(): number;
  setPersonaid(value: number): Player;

  getPlatform(): Platform;
  setPlatform(value: Platform): Player;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Player.AsObject;
  static toObject(includeInstance: boolean, msg: Player): Player.AsObject;
  static serializeBinaryToWriter(message: Player, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Player;
  static deserializeBinaryFromReader(message: Player, reader: jspb.BinaryReader): Player;
}

export namespace Player {
  export type AsObject = {
    nucleusid: number,
    personaid: number,
    platform: Platform,
  }
}

export class Tag extends jspb.Message {
  getTagid(): string;
  setTagid(value: string): Tag;

  getPriority(): number;
  setPriority(value: number): Tag;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): Tag;
  hasMetadata(): boolean;
  clearMetadata(): Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tag.AsObject;
  static toObject(includeInstance: boolean, msg: Tag): Tag.AsObject;
  static serializeBinaryToWriter(message: Tag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tag;
  static deserializeBinaryFromReader(message: Tag, reader: jspb.BinaryReader): Tag;
}

export namespace Tag {
  export type AsObject = {
    tagid: string,
    priority: number,
    metadata?: Metadata.AsObject,
  }

  export enum MetadataCase { 
    _METADATA_NOT_SET = 0,
    METADATA = 3,
  }
}

export class Metadata extends jspb.Message {
  getTranslationsList(): Array<TranslationMetadata>;
  setTranslationsList(value: Array<TranslationMetadata>): Metadata;
  clearTranslationsList(): Metadata;
  addTranslations(value?: TranslationMetadata, index?: number): TranslationMetadata;

  getResourcesList(): Array<Resource>;
  setResourcesList(value: Array<Resource>): Metadata;
  clearResourcesList(): Metadata;
  addResources(value?: Resource, index?: number): Resource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
  export type AsObject = {
    translationsList: Array<TranslationMetadata.AsObject>,
    resourcesList: Array<Resource.AsObject>,
  }
}

export class TranslationMetadata extends jspb.Message {
  getKind(): string;
  setKind(value: string): TranslationMetadata;

  getTranslationid(): string;
  setTranslationid(value: string): TranslationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: TranslationMetadata): TranslationMetadata.AsObject;
  static serializeBinaryToWriter(message: TranslationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranslationMetadata;
  static deserializeBinaryFromReader(message: TranslationMetadata, reader: jspb.BinaryReader): TranslationMetadata;
}

export namespace TranslationMetadata {
  export type AsObject = {
    kind: string,
    translationid: string,
  }
}

export class Resource extends jspb.Message {
  getLocation(): ResourceLocation | undefined;
  setLocation(value?: ResourceLocation): Resource;
  hasLocation(): boolean;
  clearLocation(): Resource;

  getKind(): string;
  setKind(value: string): Resource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resource.AsObject;
  static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
  static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resource;
  static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
  export type AsObject = {
    location?: ResourceLocation.AsObject,
    kind: string,
  }

  export enum LocationCase { 
    _LOCATION_NOT_SET = 0,
    LOCATION = 1,
  }
}

export class ResourceLocation extends jspb.Message {
  getRef(): string;
  setRef(value: string): ResourceLocation;
  hasRef(): boolean;
  clearRef(): ResourceLocation;

  getUrl(): string;
  setUrl(value: string): ResourceLocation;
  hasUrl(): boolean;
  clearUrl(): ResourceLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceLocation.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceLocation): ResourceLocation.AsObject;
  static serializeBinaryToWriter(message: ResourceLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceLocation;
  static deserializeBinaryFromReader(message: ResourceLocation, reader: jspb.BinaryReader): ResourceLocation;
}

export namespace ResourceLocation {
  export type AsObject = {
    ref?: string,
    url?: string,
  }

  export enum RefCase { 
    _REF_NOT_SET = 0,
    REF = 1,
  }

  export enum UrlCase { 
    _URL_NOT_SET = 0,
    URL = 2,
  }
}

export class Attachment extends jspb.Message {
  getId(): string;
  setId(value: string): Attachment;

  getVersion(): string;
  setVersion(value: string): Attachment;

  getFilename(): string;
  setFilename(value: string): Attachment;
  hasFilename(): boolean;
  clearFilename(): Attachment;

  getIsprocessable(): boolean;
  setIsprocessable(value: boolean): Attachment;

  getProcessingstatus(): ProcessingStatus;
  setProcessingstatus(value: ProcessingStatus): Attachment;

  getAttachmentdata(): AttachmentData | undefined;
  setAttachmentdata(value?: AttachmentData): Attachment;
  hasAttachmentdata(): boolean;
  clearAttachmentdata(): Attachment;

  getAttachmenttype(): AttachmentType;
  setAttachmenttype(value: AttachmentType): Attachment;

  getMetadata(): string;
  setMetadata(value: string): Attachment;
  hasMetadata(): boolean;
  clearMetadata(): Attachment;

  getErrorsList(): Array<string>;
  setErrorsList(value: Array<string>): Attachment;
  clearErrorsList(): Attachment;
  addErrors(value: string, index?: number): Attachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attachment.AsObject;
  static toObject(includeInstance: boolean, msg: Attachment): Attachment.AsObject;
  static serializeBinaryToWriter(message: Attachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attachment;
  static deserializeBinaryFromReader(message: Attachment, reader: jspb.BinaryReader): Attachment;
}

export namespace Attachment {
  export type AsObject = {
    id: string,
    version: string,
    filename?: string,
    isprocessable: boolean,
    processingstatus: ProcessingStatus,
    attachmentdata?: AttachmentData.AsObject,
    attachmenttype: AttachmentType,
    metadata?: string,
    errorsList: Array<string>,
  }

  export enum FilenameCase { 
    _FILENAME_NOT_SET = 0,
    FILENAME = 3,
  }

  export enum AttachmentdataCase { 
    _ATTACHMENTDATA_NOT_SET = 0,
    ATTACHMENTDATA = 6,
  }

  export enum MetadataCase { 
    _METADATA_NOT_SET = 0,
    METADATA = 8,
  }
}

export class PlayElementSettings extends jspb.Message {
  getSecret(): string;
  setSecret(value: string): PlayElementSettings;
  hasSecret(): boolean;
  clearSecret(): PlayElementSettings;

  getMessagesList(): Array<GameServerMessage>;
  setMessagesList(value: Array<GameServerMessage>): PlayElementSettings;
  clearMessagesList(): PlayElementSettings;
  addMessages(value?: GameServerMessage, index?: number): GameServerMessage;

  getAllowcopies(): boolean;
  setAllowcopies(value: boolean): PlayElementSettings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayElementSettings.AsObject;
  static toObject(includeInstance: boolean, msg: PlayElementSettings): PlayElementSettings.AsObject;
  static serializeBinaryToWriter(message: PlayElementSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayElementSettings;
  static deserializeBinaryFromReader(message: PlayElementSettings, reader: jspb.BinaryReader): PlayElementSettings;
}

export namespace PlayElementSettings {
  export type AsObject = {
    secret?: string,
    messagesList: Array<GameServerMessage.AsObject>,
    allowcopies: boolean,
  }

  export enum SecretCase { 
    _SECRET_NOT_SET = 0,
    SECRET = 1,
  }
}

export class GameServerMessage extends jspb.Message {
  getKind(): string;
  setKind(value: string): GameServerMessage;

  getText(): string;
  setText(value: string): GameServerMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameServerMessage.AsObject;
  static toObject(includeInstance: boolean, msg: GameServerMessage): GameServerMessage.AsObject;
  static serializeBinaryToWriter(message: GameServerMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameServerMessage;
  static deserializeBinaryFromReader(message: GameServerMessage, reader: jspb.BinaryReader): GameServerMessage;
}

export namespace GameServerMessage {
  export type AsObject = {
    kind: string,
    text: string,
  }
}

export class DesignMetadata extends jspb.Message {
  getProgressionmode(): string;
  setProgressionmode(value: string): DesignMetadata;
  hasProgressionmode(): boolean;
  clearProgressionmode(): DesignMetadata;

  getFirstpartymetadataList(): Array<FirstPartyMetadata>;
  setFirstpartymetadataList(value: Array<FirstPartyMetadata>): DesignMetadata;
  clearFirstpartymetadataList(): DesignMetadata;
  addFirstpartymetadata(value?: FirstPartyMetadata, index?: number): FirstPartyMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DesignMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: DesignMetadata): DesignMetadata.AsObject;
  static serializeBinaryToWriter(message: DesignMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DesignMetadata;
  static deserializeBinaryFromReader(message: DesignMetadata, reader: jspb.BinaryReader): DesignMetadata;
}

export namespace DesignMetadata {
  export type AsObject = {
    progressionmode?: string,
    firstpartymetadataList: Array<FirstPartyMetadata.AsObject>,
  }

  export enum ProgressionmodeCase { 
    _PROGRESSIONMODE_NOT_SET = 0,
    PROGRESSIONMODE = 1,
  }
}

export class FirstPartyMetadata extends jspb.Message {
  getPsnmetadata(): PSNMetadata | undefined;
  setPsnmetadata(value?: PSNMetadata): FirstPartyMetadata;
  hasPsnmetadata(): boolean;
  clearPsnmetadata(): FirstPartyMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FirstPartyMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: FirstPartyMetadata): FirstPartyMetadata.AsObject;
  static serializeBinaryToWriter(message: FirstPartyMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FirstPartyMetadata;
  static deserializeBinaryFromReader(message: FirstPartyMetadata, reader: jspb.BinaryReader): FirstPartyMetadata;
}

export namespace FirstPartyMetadata {
  export type AsObject = {
    psnmetadata?: PSNMetadata.AsObject,
  }

  export enum PsnmetadataCase { 
    _PSNMETADATA_NOT_SET = 0,
    PSNMETADATA = 1,
  }
}

export class PSNMetadata extends jspb.Message {
  getActivityid(): string;
  setActivityid(value: string): PSNMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PSNMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: PSNMetadata): PSNMetadata.AsObject;
  static serializeBinaryToWriter(message: PSNMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PSNMetadata;
  static deserializeBinaryFromReader(message: PSNMetadata, reader: jspb.BinaryReader): PSNMetadata;
}

export namespace PSNMetadata {
  export type AsObject = {
    activityid: string,
  }
}

export class MapRotation extends jspb.Message {
  getMapsList(): Array<MapEntry>;
  setMapsList(value: Array<MapEntry>): MapRotation;
  clearMapsList(): MapRotation;
  addMaps(value?: MapEntry, index?: number): MapEntry;

  getAttributes(): MapRotationAttributes | undefined;
  setAttributes(value?: MapRotationAttributes): MapRotation;
  hasAttributes(): boolean;
  clearAttributes(): MapRotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapRotation.AsObject;
  static toObject(includeInstance: boolean, msg: MapRotation): MapRotation.AsObject;
  static serializeBinaryToWriter(message: MapRotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapRotation;
  static deserializeBinaryFromReader(message: MapRotation, reader: jspb.BinaryReader): MapRotation;
}

export namespace MapRotation {
  export type AsObject = {
    mapsList: Array<MapEntry.AsObject>,
    attributes?: MapRotationAttributes.AsObject,
  }

  export enum AttributesCase { 
    _ATTRIBUTES_NOT_SET = 0,
    ATTRIBUTES = 2,
  }
}

export class MapEntry extends jspb.Message {
  getLevelname(): string;
  setLevelname(value: string): MapEntry;

  getLevellocation(): string;
  setLevellocation(value: string): MapEntry;

  getRounds(): number;
  setRounds(value: number): MapEntry;

  getAllowedspectators(): number;
  setAllowedspectators(value: number): MapEntry;

  getTeamcomposition(): TeamComposition | undefined;
  setTeamcomposition(value?: TeamComposition): MapEntry;
  hasTeamcomposition(): boolean;
  clearTeamcomposition(): MapEntry;

  getBlazegamesettings(): BlazeGameSettings | undefined;
  setBlazegamesettings(value?: BlazeGameSettings): MapEntry;
  hasBlazegamesettings(): boolean;
  clearBlazegamesettings(): MapEntry;

  getMutatorsList(): Array<Mutator>;
  setMutatorsList(value: Array<Mutator>): MapEntry;
  clearMutatorsList(): MapEntry;
  addMutators(value?: Mutator, index?: number): Mutator;

  getGameserverjoinabilitysettings(): GameServerJoinabilitySettings | undefined;
  setGameserverjoinabilitysettings(value?: GameServerJoinabilitySettings): MapEntry;
  hasGameserverjoinabilitysettings(): boolean;
  clearGameserverjoinabilitysettings(): MapEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapEntry.AsObject;
  static toObject(includeInstance: boolean, msg: MapEntry): MapEntry.AsObject;
  static serializeBinaryToWriter(message: MapEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapEntry;
  static deserializeBinaryFromReader(message: MapEntry, reader: jspb.BinaryReader): MapEntry;
}

export namespace MapEntry {
  export type AsObject = {
    levelname: string,
    levellocation: string,
    rounds: number,
    allowedspectators: number,
    teamcomposition?: TeamComposition.AsObject,
    blazegamesettings?: BlazeGameSettings.AsObject,
    mutatorsList: Array<Mutator.AsObject>,
    gameserverjoinabilitysettings?: GameServerJoinabilitySettings.AsObject,
  }

  export enum TeamcompositionCase { 
    _TEAMCOMPOSITION_NOT_SET = 0,
    TEAMCOMPOSITION = 5,
  }

  export enum BlazegamesettingsCase { 
    _BLAZEGAMESETTINGS_NOT_SET = 0,
    BLAZEGAMESETTINGS = 6,
  }

  export enum GameserverjoinabilitysettingsCase { 
    _GAMESERVERJOINABILITYSETTINGS_NOT_SET = 0,
    GAMESERVERJOINABILITYSETTINGS = 8,
  }
}

export class BlazeGameSettings extends jspb.Message {
  getJoininprogress(): BlazeGameSettingValue;
  setJoininprogress(value: BlazeGameSettingValue): BlazeGameSettings;

  getOpentojoinbyplayer(): BlazeGameSettingValue;
  setOpentojoinbyplayer(value: BlazeGameSettingValue): BlazeGameSettings;

  getOpentoinvites(): BlazeGameSettingValue;
  setOpentoinvites(value: BlazeGameSettingValue): BlazeGameSettings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlazeGameSettings.AsObject;
  static toObject(includeInstance: boolean, msg: BlazeGameSettings): BlazeGameSettings.AsObject;
  static serializeBinaryToWriter(message: BlazeGameSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlazeGameSettings;
  static deserializeBinaryFromReader(message: BlazeGameSettings, reader: jspb.BinaryReader): BlazeGameSettings;
}

export namespace BlazeGameSettings {
  export type AsObject = {
    joininprogress: BlazeGameSettingValue,
    opentojoinbyplayer: BlazeGameSettingValue,
    opentoinvites: BlazeGameSettingValue,
  }
}

export class GameServerJoinabilitySettings extends jspb.Message {
  getMatchmakinginprogress(): GameServerJoinabilitySettingValue;
  setMatchmakinginprogress(value: GameServerJoinabilitySettingValue): GameServerJoinabilitySettings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameServerJoinabilitySettings.AsObject;
  static toObject(includeInstance: boolean, msg: GameServerJoinabilitySettings): GameServerJoinabilitySettings.AsObject;
  static serializeBinaryToWriter(message: GameServerJoinabilitySettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameServerJoinabilitySettings;
  static deserializeBinaryFromReader(message: GameServerJoinabilitySettings, reader: jspb.BinaryReader): GameServerJoinabilitySettings;
}

export namespace GameServerJoinabilitySettings {
  export type AsObject = {
    matchmakinginprogress: GameServerJoinabilitySettingValue,
  }
}

export class MapRotationAttributes extends jspb.Message {
  getRotationbehavior(): RotationBehavior;
  setRotationbehavior(value: RotationBehavior): MapRotationAttributes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapRotationAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: MapRotationAttributes): MapRotationAttributes.AsObject;
  static serializeBinaryToWriter(message: MapRotationAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapRotationAttributes;
  static deserializeBinaryFromReader(message: MapRotationAttributes, reader: jspb.BinaryReader): MapRotationAttributes;
}

export namespace MapRotationAttributes {
  export type AsObject = {
    rotationbehavior: RotationBehavior,
  }
}

export class ModRules extends jspb.Message {
  getCompatiblerules(): CompatibleModRules | undefined;
  setCompatiblerules(value?: CompatibleModRules): ModRules;
  hasCompatiblerules(): boolean;
  clearCompatiblerules(): ModRules;

  getIncompatiblerules(): IncompatibleModRules | undefined;
  setIncompatiblerules(value?: IncompatibleModRules): ModRules;
  hasIncompatiblerules(): boolean;
  clearIncompatiblerules(): ModRules;

  getErrorrules(): ErrorModRules | undefined;
  setErrorrules(value?: ErrorModRules): ModRules;
  hasErrorrules(): boolean;
  clearErrorrules(): ModRules;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModRules.AsObject;
  static toObject(includeInstance: boolean, msg: ModRules): ModRules.AsObject;
  static serializeBinaryToWriter(message: ModRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModRules;
  static deserializeBinaryFromReader(message: ModRules, reader: jspb.BinaryReader): ModRules;
}

export namespace ModRules {
  export type AsObject = {
    compatiblerules?: CompatibleModRules.AsObject,
    incompatiblerules?: IncompatibleModRules.AsObject,
    errorrules?: ErrorModRules.AsObject,
  }

  export enum CompatiblerulesCase { 
    _COMPATIBLERULES_NOT_SET = 0,
    COMPATIBLERULES = 1,
  }

  export enum IncompatiblerulesCase { 
    _INCOMPATIBLERULES_NOT_SET = 0,
    INCOMPATIBLERULES = 2,
  }

  export enum ErrorrulesCase { 
    _ERRORRULES_NOT_SET = 0,
    ERRORRULES = 3,
  }
}

export class BlazePlayElementDesignSettings extends jspb.Message {
  getOpengroupreservations(): BlazeGameSettingValue;
  setOpengroupreservations(value: BlazeGameSettingValue): BlazePlayElementDesignSettings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlazePlayElementDesignSettings.AsObject;
  static toObject(includeInstance: boolean, msg: BlazePlayElementDesignSettings): BlazePlayElementDesignSettings.AsObject;
  static serializeBinaryToWriter(message: BlazePlayElementDesignSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlazePlayElementDesignSettings;
  static deserializeBinaryFromReader(message: BlazePlayElementDesignSettings, reader: jspb.BinaryReader): BlazePlayElementDesignSettings;
}

export namespace BlazePlayElementDesignSettings {
  export type AsObject = {
    opengroupreservations: BlazeGameSettingValue,
  }
}

export class AttachmentData extends jspb.Message {
  getOriginal(): Uint8Array | string;
  getOriginal_asU8(): Uint8Array;
  getOriginal_asB64(): string;
  setOriginal(value: Uint8Array | string): AttachmentData;

  getCompiled(): Uint8Array | string;
  getCompiled_asU8(): Uint8Array;
  getCompiled_asB64(): string;
  setCompiled(value: Uint8Array | string): AttachmentData;
  hasCompiled(): boolean;
  clearCompiled(): AttachmentData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmentData.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmentData): AttachmentData.AsObject;
  static serializeBinaryToWriter(message: AttachmentData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmentData;
  static deserializeBinaryFromReader(message: AttachmentData, reader: jspb.BinaryReader): AttachmentData;
}

export namespace AttachmentData {
  export type AsObject = {
    original: Uint8Array | string,
    compiled?: Uint8Array | string,
  }

  export enum CompiledCase { 
    _COMPILED_NOT_SET = 0,
    COMPILED = 2,
  }
}

export class TeamComposition extends jspb.Message {
  getTeamsList(): Array<TeamStructure>;
  setTeamsList(value: Array<TeamStructure>): TeamComposition;
  clearTeamsList(): TeamComposition;
  addTeams(value?: TeamStructure, index?: number): TeamStructure;

  getInternalteamsList(): Array<InternalTeamStructure>;
  setInternalteamsList(value: Array<InternalTeamStructure>): TeamComposition;
  clearInternalteamsList(): TeamComposition;
  addInternalteams(value?: InternalTeamStructure, index?: number): InternalTeamStructure;

  getBalancingmethod(): TeamBalancingMethod;
  setBalancingmethod(value: TeamBalancingMethod): TeamComposition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamComposition.AsObject;
  static toObject(includeInstance: boolean, msg: TeamComposition): TeamComposition.AsObject;
  static serializeBinaryToWriter(message: TeamComposition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamComposition;
  static deserializeBinaryFromReader(message: TeamComposition, reader: jspb.BinaryReader): TeamComposition;
}

export namespace TeamComposition {
  export type AsObject = {
    teamsList: Array<TeamStructure.AsObject>,
    internalteamsList: Array<InternalTeamStructure.AsObject>,
    balancingmethod: TeamBalancingMethod,
  }
}

export class TeamStructure extends jspb.Message {
  getTeamid(): number;
  setTeamid(value: number): TeamStructure;

  getCapacity(): number;
  setCapacity(value: number): TeamStructure;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamStructure.AsObject;
  static toObject(includeInstance: boolean, msg: TeamStructure): TeamStructure.AsObject;
  static serializeBinaryToWriter(message: TeamStructure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamStructure;
  static deserializeBinaryFromReader(message: TeamStructure, reader: jspb.BinaryReader): TeamStructure;
}

export namespace TeamStructure {
  export type AsObject = {
    teamid: number,
    capacity: number,
  }
}

export class InternalTeamStructure extends jspb.Message {
  getTeamid(): number;
  setTeamid(value: number): InternalTeamStructure;

  getCapacity(): number;
  setCapacity(value: number): InternalTeamStructure;

  getCapacitytype(): InternalCapacityType;
  setCapacitytype(value: InternalCapacityType): InternalTeamStructure;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalTeamStructure.AsObject;
  static toObject(includeInstance: boolean, msg: InternalTeamStructure): InternalTeamStructure.AsObject;
  static serializeBinaryToWriter(message: InternalTeamStructure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalTeamStructure;
  static deserializeBinaryFromReader(message: InternalTeamStructure, reader: jspb.BinaryReader): InternalTeamStructure;
}

export namespace InternalTeamStructure {
  export type AsObject = {
    teamid: number,
    capacity: number,
    capacitytype: InternalCapacityType,
  }
}

export class CompatibleModRules extends jspb.Message {
  getOriginal(): Uint8Array | string;
  getOriginal_asU8(): Uint8Array;
  getOriginal_asB64(): string;
  setOriginal(value: Uint8Array | string): CompatibleModRules;

  getRulesversion(): number;
  setRulesversion(value: number): CompatibleModRules;

  getCompiled(): CompiledRules | undefined;
  setCompiled(value?: CompiledRules): CompatibleModRules;
  hasCompiled(): boolean;
  clearCompiled(): CompatibleModRules;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompatibleModRules.AsObject;
  static toObject(includeInstance: boolean, msg: CompatibleModRules): CompatibleModRules.AsObject;
  static serializeBinaryToWriter(message: CompatibleModRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompatibleModRules;
  static deserializeBinaryFromReader(message: CompatibleModRules, reader: jspb.BinaryReader): CompatibleModRules;
}

export namespace CompatibleModRules {
  export type AsObject = {
    original: Uint8Array | string,
    rulesversion: number,
    compiled?: CompiledRules.AsObject,
  }

  export enum CompiledCase { 
    _COMPILED_NOT_SET = 0,
    COMPILED = 3,
  }
}

export class CompiledRules extends jspb.Message {
  getUncompressed(): Uncompressed | undefined;
  setUncompressed(value?: Uncompressed): CompiledRules;
  hasUncompressed(): boolean;
  clearUncompressed(): CompiledRules;

  getCompressed(): Compressed | undefined;
  setCompressed(value?: Compressed): CompiledRules;
  hasCompressed(): boolean;
  clearCompressed(): CompiledRules;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompiledRules.AsObject;
  static toObject(includeInstance: boolean, msg: CompiledRules): CompiledRules.AsObject;
  static serializeBinaryToWriter(message: CompiledRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompiledRules;
  static deserializeBinaryFromReader(message: CompiledRules, reader: jspb.BinaryReader): CompiledRules;
}

export namespace CompiledRules {
  export type AsObject = {
    uncompressed?: Uncompressed.AsObject,
    compressed?: Compressed.AsObject,
  }

  export enum UncompressedCase { 
    _UNCOMPRESSED_NOT_SET = 0,
    UNCOMPRESSED = 1,
  }

  export enum CompressedCase { 
    _COMPRESSED_NOT_SET = 0,
    COMPRESSED = 2,
  }
}

export class Uncompressed extends jspb.Message {
  getCompiledmodrules(): Uint8Array | string;
  getCompiledmodrules_asU8(): Uint8Array;
  getCompiledmodrules_asB64(): string;
  setCompiledmodrules(value: Uint8Array | string): Uncompressed;

  getRulesversion(): number;
  setRulesversion(value: number): Uncompressed;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Uncompressed.AsObject;
  static toObject(includeInstance: boolean, msg: Uncompressed): Uncompressed.AsObject;
  static serializeBinaryToWriter(message: Uncompressed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Uncompressed;
  static deserializeBinaryFromReader(message: Uncompressed, reader: jspb.BinaryReader): Uncompressed;
}

export namespace Uncompressed {
  export type AsObject = {
    compiledmodrules: Uint8Array | string,
    rulesversion: number,
  }
}

export class Compressed extends jspb.Message {
  getCompiledmodrules(): Uint8Array | string;
  getCompiledmodrules_asU8(): Uint8Array;
  getCompiledmodrules_asB64(): string;
  setCompiledmodrules(value: Uint8Array | string): Compressed;

  getRulesversion(): number;
  setRulesversion(value: number): Compressed;

  getInflatedsize(): number;
  setInflatedsize(value: number): Compressed;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Compressed.AsObject;
  static toObject(includeInstance: boolean, msg: Compressed): Compressed.AsObject;
  static serializeBinaryToWriter(message: Compressed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Compressed;
  static deserializeBinaryFromReader(message: Compressed, reader: jspb.BinaryReader): Compressed;
}

export namespace Compressed {
  export type AsObject = {
    compiledmodrules: Uint8Array | string,
    rulesversion: number,
    inflatedsize: number,
  }
}

export class IncompatibleModRules extends jspb.Message {
  getOriginal(): Uint8Array | string;
  getOriginal_asU8(): Uint8Array;
  getOriginal_asB64(): string;
  setOriginal(value: Uint8Array | string): IncompatibleModRules;

  getRulesversion(): number;
  setRulesversion(value: number): IncompatibleModRules;

  getBlueprintrulesversion(): number;
  setBlueprintrulesversion(value: number): IncompatibleModRules;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncompatibleModRules.AsObject;
  static toObject(includeInstance: boolean, msg: IncompatibleModRules): IncompatibleModRules.AsObject;
  static serializeBinaryToWriter(message: IncompatibleModRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncompatibleModRules;
  static deserializeBinaryFromReader(message: IncompatibleModRules, reader: jspb.BinaryReader): IncompatibleModRules;
}

export namespace IncompatibleModRules {
  export type AsObject = {
    original: Uint8Array | string,
    rulesversion: number,
    blueprintrulesversion: number,
  }
}

export class ErrorModRules extends jspb.Message {
  getOriginal(): Uint8Array | string;
  getOriginal_asU8(): Uint8Array;
  getOriginal_asB64(): string;
  setOriginal(value: Uint8Array | string): ErrorModRules;

  getErrormessage(): string;
  setErrormessage(value: string): ErrorModRules;
  hasErrormessage(): boolean;
  clearErrormessage(): ErrorModRules;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorModRules.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorModRules): ErrorModRules.AsObject;
  static serializeBinaryToWriter(message: ErrorModRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorModRules;
  static deserializeBinaryFromReader(message: ErrorModRules, reader: jspb.BinaryReader): ErrorModRules;
}

export namespace ErrorModRules {
  export type AsObject = {
    original: Uint8Array | string,
    errormessage?: string,
  }

  export enum ErrormessageCase { 
    _ERRORMESSAGE_NOT_SET = 0,
    ERRORMESSAGE = 2,
  }
}

export class AssetCategory extends jspb.Message {
  getTagid(): string;
  setTagid(value: string): AssetCategory;

  getBoolean(): AssetCategoryBoolean | undefined;
  setBoolean(value?: AssetCategoryBoolean): AssetCategory;
  hasBoolean(): boolean;
  clearBoolean(): AssetCategory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetCategory.AsObject;
  static toObject(includeInstance: boolean, msg: AssetCategory): AssetCategory.AsObject;
  static serializeBinaryToWriter(message: AssetCategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetCategory;
  static deserializeBinaryFromReader(message: AssetCategory, reader: jspb.BinaryReader): AssetCategory;
}

export namespace AssetCategory {
  export type AsObject = {
    tagid: string,
    pb_boolean?: AssetCategoryBoolean.AsObject,
  }

  export enum BooleanCase { 
    _BOOLEAN_NOT_SET = 0,
    BOOLEAN = 2,
  }
}

export class AssetCategoryBoolean extends jspb.Message {
  getDefaultvalue(): boolean;
  setDefaultvalue(value: boolean): AssetCategoryBoolean;

  getOverrides(): AssetCategoryTagBooleanOverride | undefined;
  setOverrides(value?: AssetCategoryTagBooleanOverride): AssetCategoryBoolean;
  hasOverrides(): boolean;
  clearOverrides(): AssetCategoryBoolean;

  getTeamoverridesList(): Array<AssetCategoryTagBooleanTeamOverride>;
  setTeamoverridesList(value: Array<AssetCategoryTagBooleanTeamOverride>): AssetCategoryBoolean;
  clearTeamoverridesList(): AssetCategoryBoolean;
  addTeamoverrides(value?: AssetCategoryTagBooleanTeamOverride, index?: number): AssetCategoryTagBooleanTeamOverride;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetCategoryBoolean.AsObject;
  static toObject(includeInstance: boolean, msg: AssetCategoryBoolean): AssetCategoryBoolean.AsObject;
  static serializeBinaryToWriter(message: AssetCategoryBoolean, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetCategoryBoolean;
  static deserializeBinaryFromReader(message: AssetCategoryBoolean, reader: jspb.BinaryReader): AssetCategoryBoolean;
}

export namespace AssetCategoryBoolean {
  export type AsObject = {
    defaultvalue: boolean,
    overrides?: AssetCategoryTagBooleanOverride.AsObject,
    teamoverridesList: Array<AssetCategoryTagBooleanTeamOverride.AsObject>,
  }

  export enum OverridesCase { 
    _OVERRIDES_NOT_SET = 0,
    OVERRIDES = 2,
  }
}

export class AssetCategoryTagBooleanOverride extends jspb.Message {
  getAssetcategorytagsList(): Array<string>;
  setAssetcategorytagsList(value: Array<string>): AssetCategoryTagBooleanOverride;
  clearAssetcategorytagsList(): AssetCategoryTagBooleanOverride;
  addAssetcategorytags(value: string, index?: number): AssetCategoryTagBooleanOverride;

  getValue(): boolean;
  setValue(value: boolean): AssetCategoryTagBooleanOverride;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetCategoryTagBooleanOverride.AsObject;
  static toObject(includeInstance: boolean, msg: AssetCategoryTagBooleanOverride): AssetCategoryTagBooleanOverride.AsObject;
  static serializeBinaryToWriter(message: AssetCategoryTagBooleanOverride, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetCategoryTagBooleanOverride;
  static deserializeBinaryFromReader(message: AssetCategoryTagBooleanOverride, reader: jspb.BinaryReader): AssetCategoryTagBooleanOverride;
}

export namespace AssetCategoryTagBooleanOverride {
  export type AsObject = {
    assetcategorytagsList: Array<string>,
    value: boolean,
  }
}

export class AssetCategoryTagBooleanTeamOverride extends jspb.Message {
  getAssetcategorytagsList(): Array<string>;
  setAssetcategorytagsList(value: Array<string>): AssetCategoryTagBooleanTeamOverride;
  clearAssetcategorytagsList(): AssetCategoryTagBooleanTeamOverride;
  addAssetcategorytags(value: string, index?: number): AssetCategoryTagBooleanTeamOverride;

  getValue(): boolean;
  setValue(value: boolean): AssetCategoryTagBooleanTeamOverride;

  getTeamid(): number;
  setTeamid(value: number): AssetCategoryTagBooleanTeamOverride;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetCategoryTagBooleanTeamOverride.AsObject;
  static toObject(includeInstance: boolean, msg: AssetCategoryTagBooleanTeamOverride): AssetCategoryTagBooleanTeamOverride.AsObject;
  static serializeBinaryToWriter(message: AssetCategoryTagBooleanTeamOverride, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetCategoryTagBooleanTeamOverride;
  static deserializeBinaryFromReader(message: AssetCategoryTagBooleanTeamOverride, reader: jspb.BinaryReader): AssetCategoryTagBooleanTeamOverride;
}

export namespace AssetCategoryTagBooleanTeamOverride {
  export type AsObject = {
    assetcategorytagsList: Array<string>,
    value: boolean,
    teamid: number,
  }
}

export class Mutator extends jspb.Message {
  getName(): string;
  setName(value: string): Mutator;

  getCategory(): string;
  setCategory(value: string): Mutator;

  getKind(): MutatorKind | undefined;
  setKind(value?: MutatorKind): Mutator;
  hasKind(): boolean;
  clearKind(): Mutator;

  getId(): string;
  setId(value: string): Mutator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mutator.AsObject;
  static toObject(includeInstance: boolean, msg: Mutator): Mutator.AsObject;
  static serializeBinaryToWriter(message: Mutator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mutator;
  static deserializeBinaryFromReader(message: Mutator, reader: jspb.BinaryReader): Mutator;
}

export namespace Mutator {
  export type AsObject = {
    name: string,
    category: string,
    kind?: MutatorKind.AsObject,
    id: string,
  }

  export enum KindCase { 
    _KIND_NOT_SET = 0,
    KIND = 3,
  }
}

export class MutatorKind extends jspb.Message {
  getMutatorboolean(): MutatorBoolean | undefined;
  setMutatorboolean(value?: MutatorBoolean): MutatorKind;
  hasMutatorboolean(): boolean;
  clearMutatorboolean(): MutatorKind;

  getMutatorstring(): MutatorString | undefined;
  setMutatorstring(value?: MutatorString): MutatorKind;
  hasMutatorstring(): boolean;
  clearMutatorstring(): MutatorKind;

  getMutatorfloat(): MutatorFloat | undefined;
  setMutatorfloat(value?: MutatorFloat): MutatorKind;
  hasMutatorfloat(): boolean;
  clearMutatorfloat(): MutatorKind;

  getMutatorint(): MutatorInt | undefined;
  setMutatorint(value?: MutatorInt): MutatorKind;
  hasMutatorint(): boolean;
  clearMutatorint(): MutatorKind;

  getMutatorsparseboolean(): MutatorSparseBoolean | undefined;
  setMutatorsparseboolean(value?: MutatorSparseBoolean): MutatorKind;
  hasMutatorsparseboolean(): boolean;
  clearMutatorsparseboolean(): MutatorKind;

  getMutatorsparseint(): MutatorSparseInt | undefined;
  setMutatorsparseint(value?: MutatorSparseInt): MutatorKind;
  hasMutatorsparseint(): boolean;
  clearMutatorsparseint(): MutatorKind;

  getMutatorsparsefloat(): MutatorSparseFloat | undefined;
  setMutatorsparsefloat(value?: MutatorSparseFloat): MutatorKind;
  hasMutatorsparsefloat(): boolean;
  clearMutatorsparsefloat(): MutatorKind;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorKind.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorKind): MutatorKind.AsObject;
  static serializeBinaryToWriter(message: MutatorKind, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorKind;
  static deserializeBinaryFromReader(message: MutatorKind, reader: jspb.BinaryReader): MutatorKind;
}

export namespace MutatorKind {
  export type AsObject = {
    mutatorboolean?: MutatorBoolean.AsObject,
    mutatorstring?: MutatorString.AsObject,
    mutatorfloat?: MutatorFloat.AsObject,
    mutatorint?: MutatorInt.AsObject,
    mutatorsparseboolean?: MutatorSparseBoolean.AsObject,
    mutatorsparseint?: MutatorSparseInt.AsObject,
    mutatorsparsefloat?: MutatorSparseFloat.AsObject,
  }

  export enum MutatorbooleanCase { 
    _MUTATORBOOLEAN_NOT_SET = 0,
    MUTATORBOOLEAN = 1,
  }

  export enum MutatorstringCase { 
    _MUTATORSTRING_NOT_SET = 0,
    MUTATORSTRING = 4,
  }

  export enum MutatorfloatCase { 
    _MUTATORFLOAT_NOT_SET = 0,
    MUTATORFLOAT = 5,
  }

  export enum MutatorintCase { 
    _MUTATORINT_NOT_SET = 0,
    MUTATORINT = 6,
  }

  export enum MutatorsparsebooleanCase { 
    _MUTATORSPARSEBOOLEAN_NOT_SET = 0,
    MUTATORSPARSEBOOLEAN = 7,
  }

  export enum MutatorsparseintCase { 
    _MUTATORSPARSEINT_NOT_SET = 0,
    MUTATORSPARSEINT = 8,
  }

  export enum MutatorsparsefloatCase { 
    _MUTATORSPARSEFLOAT_NOT_SET = 0,
    MUTATORSPARSEFLOAT = 9,
  }
}

export class MutatorBoolean extends jspb.Message {
  getBoolvalue(): boolean;
  setBoolvalue(value: boolean): MutatorBoolean;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorBoolean.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorBoolean): MutatorBoolean.AsObject;
  static serializeBinaryToWriter(message: MutatorBoolean, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorBoolean;
  static deserializeBinaryFromReader(message: MutatorBoolean, reader: jspb.BinaryReader): MutatorBoolean;
}

export namespace MutatorBoolean {
  export type AsObject = {
    boolvalue: boolean,
  }
}

export class MutatorString extends jspb.Message {
  getStringvalue(): string;
  setStringvalue(value: string): MutatorString;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorString.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorString): MutatorString.AsObject;
  static serializeBinaryToWriter(message: MutatorString, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorString;
  static deserializeBinaryFromReader(message: MutatorString, reader: jspb.BinaryReader): MutatorString;
}

export namespace MutatorString {
  export type AsObject = {
    stringvalue: string,
  }
}

export class MutatorFloat extends jspb.Message {
  getValue(): number;
  setValue(value: number): MutatorFloat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorFloat.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorFloat): MutatorFloat.AsObject;
  static serializeBinaryToWriter(message: MutatorFloat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorFloat;
  static deserializeBinaryFromReader(message: MutatorFloat, reader: jspb.BinaryReader): MutatorFloat;
}

export namespace MutatorFloat {
  export type AsObject = {
    value: number,
  }
}

export class MutatorInt extends jspb.Message {
  getValue(): number;
  setValue(value: number): MutatorInt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorInt.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorInt): MutatorInt.AsObject;
  static serializeBinaryToWriter(message: MutatorInt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorInt;
  static deserializeBinaryFromReader(message: MutatorInt, reader: jspb.BinaryReader): MutatorInt;
}

export namespace MutatorInt {
  export type AsObject = {
    value: number,
  }
}

export class MutatorSparseBooleanEntry extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): MutatorSparseBooleanEntry;

  getValue(): boolean;
  setValue(value: boolean): MutatorSparseBooleanEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorSparseBooleanEntry.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorSparseBooleanEntry): MutatorSparseBooleanEntry.AsObject;
  static serializeBinaryToWriter(message: MutatorSparseBooleanEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorSparseBooleanEntry;
  static deserializeBinaryFromReader(message: MutatorSparseBooleanEntry, reader: jspb.BinaryReader): MutatorSparseBooleanEntry;
}

export namespace MutatorSparseBooleanEntry {
  export type AsObject = {
    index: number,
    value: boolean,
  }
}

export class MutatorSparseBoolean extends jspb.Message {
  getDefaultvalue(): boolean;
  setDefaultvalue(value: boolean): MutatorSparseBoolean;

  getSize(): number;
  setSize(value: number): MutatorSparseBoolean;

  getSparsevaluesList(): Array<MutatorSparseBooleanEntry>;
  setSparsevaluesList(value: Array<MutatorSparseBooleanEntry>): MutatorSparseBoolean;
  clearSparsevaluesList(): MutatorSparseBoolean;
  addSparsevalues(value?: MutatorSparseBooleanEntry, index?: number): MutatorSparseBooleanEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorSparseBoolean.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorSparseBoolean): MutatorSparseBoolean.AsObject;
  static serializeBinaryToWriter(message: MutatorSparseBoolean, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorSparseBoolean;
  static deserializeBinaryFromReader(message: MutatorSparseBoolean, reader: jspb.BinaryReader): MutatorSparseBoolean;
}

export namespace MutatorSparseBoolean {
  export type AsObject = {
    defaultvalue: boolean,
    size: number,
    sparsevaluesList: Array<MutatorSparseBooleanEntry.AsObject>,
  }
}

export class SparseIntEntity extends jspb.Message {
  getValuesList(): Array<number>;
  setValuesList(value: Array<number>): SparseIntEntity;
  clearValuesList(): SparseIntEntity;
  addValues(value: number, index?: number): SparseIntEntity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SparseIntEntity.AsObject;
  static toObject(includeInstance: boolean, msg: SparseIntEntity): SparseIntEntity.AsObject;
  static serializeBinaryToWriter(message: SparseIntEntity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SparseIntEntity;
  static deserializeBinaryFromReader(message: SparseIntEntity, reader: jspb.BinaryReader): SparseIntEntity;
}

export namespace SparseIntEntity {
  export type AsObject = {
    valuesList: Array<number>,
  }
}

export class MutatorSparseIntEntry extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): MutatorSparseIntEntry;

  getValue(): number;
  setValue(value: number): MutatorSparseIntEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorSparseIntEntry.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorSparseIntEntry): MutatorSparseIntEntry.AsObject;
  static serializeBinaryToWriter(message: MutatorSparseIntEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorSparseIntEntry;
  static deserializeBinaryFromReader(message: MutatorSparseIntEntry, reader: jspb.BinaryReader): MutatorSparseIntEntry;
}

export namespace MutatorSparseIntEntry {
  export type AsObject = {
    index: number,
    value: number,
  }
}

export class MutatorSparseInt extends jspb.Message {
  getDefaultvalue(): number;
  setDefaultvalue(value: number): MutatorSparseInt;

  getSize(): number;
  setSize(value: number): MutatorSparseInt;

  getSparsevalues(): MutatorSparseIntEntry | undefined;
  setSparsevalues(value?: MutatorSparseIntEntry): MutatorSparseInt;
  hasSparsevalues(): boolean;
  clearSparsevalues(): MutatorSparseInt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorSparseInt.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorSparseInt): MutatorSparseInt.AsObject;
  static serializeBinaryToWriter(message: MutatorSparseInt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorSparseInt;
  static deserializeBinaryFromReader(message: MutatorSparseInt, reader: jspb.BinaryReader): MutatorSparseInt;
}

export namespace MutatorSparseInt {
  export type AsObject = {
    defaultvalue: number,
    size: number,
    sparsevalues?: MutatorSparseIntEntry.AsObject,
  }
}

export class MutatorSparseFloatEntry extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): MutatorSparseFloatEntry;

  getValue(): number;
  setValue(value: number): MutatorSparseFloatEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorSparseFloatEntry.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorSparseFloatEntry): MutatorSparseFloatEntry.AsObject;
  static serializeBinaryToWriter(message: MutatorSparseFloatEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorSparseFloatEntry;
  static deserializeBinaryFromReader(message: MutatorSparseFloatEntry, reader: jspb.BinaryReader): MutatorSparseFloatEntry;
}

export namespace MutatorSparseFloatEntry {
  export type AsObject = {
    index: number,
    value: number,
  }
}

export class MutatorSparseFloat extends jspb.Message {
  getDefaultvalue(): number;
  setDefaultvalue(value: number): MutatorSparseFloat;

  getSize(): number;
  setSize(value: number): MutatorSparseFloat;

  getSparsevaluesList(): Array<MutatorSparseFloatEntry>;
  setSparsevaluesList(value: Array<MutatorSparseFloatEntry>): MutatorSparseFloat;
  clearSparsevaluesList(): MutatorSparseFloat;
  addSparsevalues(value?: MutatorSparseFloatEntry, index?: number): MutatorSparseFloatEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorSparseFloat.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorSparseFloat): MutatorSparseFloat.AsObject;
  static serializeBinaryToWriter(message: MutatorSparseFloat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorSparseFloat;
  static deserializeBinaryFromReader(message: MutatorSparseFloat, reader: jspb.BinaryReader): MutatorSparseFloat;
}

export namespace MutatorSparseFloat {
  export type AsObject = {
    defaultvalue: number,
    size: number,
    sparsevaluesList: Array<MutatorSparseFloatEntry.AsObject>,
  }
}

export class GetPlayElementRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetPlayElementRequest;

  getIncludedenied(): boolean;
  setIncludedenied(value: boolean): GetPlayElementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlayElementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlayElementRequest): GetPlayElementRequest.AsObject;
  static serializeBinaryToWriter(message: GetPlayElementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlayElementRequest;
  static deserializeBinaryFromReader(message: GetPlayElementRequest, reader: jspb.BinaryReader): GetPlayElementRequest;
}

export namespace GetPlayElementRequest {
  export type AsObject = {
    id: string,
    includedenied: boolean,
  }
}

export class GetOwnedPlayElementsResponse extends jspb.Message {
  getPlayelementsList(): Array<PlayElement>;
  setPlayelementsList(value: Array<PlayElement>): GetOwnedPlayElementsResponse;
  clearPlayelementsList(): GetOwnedPlayElementsResponse;
  addPlayelements(value?: PlayElement, index?: number): PlayElement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOwnedPlayElementsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOwnedPlayElementsResponse): GetOwnedPlayElementsResponse.AsObject;
  static serializeBinaryToWriter(message: GetOwnedPlayElementsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOwnedPlayElementsResponse;
  static deserializeBinaryFromReader(message: GetOwnedPlayElementsResponse, reader: jspb.BinaryReader): GetOwnedPlayElementsResponse;
}

export namespace GetOwnedPlayElementsResponse {
  export type AsObject = {
    playelementsList: Array<PlayElement.AsObject>,
  }
}

export class GetOwnedPlayElementsResponseV2 extends jspb.Message {
  getPlayelementsList(): Array<EnrichedPlayElement>;
  setPlayelementsList(value: Array<EnrichedPlayElement>): GetOwnedPlayElementsResponseV2;
  clearPlayelementsList(): GetOwnedPlayElementsResponseV2;
  addPlayelements(value?: EnrichedPlayElement, index?: number): EnrichedPlayElement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOwnedPlayElementsResponseV2.AsObject;
  static toObject(includeInstance: boolean, msg: GetOwnedPlayElementsResponseV2): GetOwnedPlayElementsResponseV2.AsObject;
  static serializeBinaryToWriter(message: GetOwnedPlayElementsResponseV2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOwnedPlayElementsResponseV2;
  static deserializeBinaryFromReader(message: GetOwnedPlayElementsResponseV2, reader: jspb.BinaryReader): GetOwnedPlayElementsResponseV2;
}

export namespace GetOwnedPlayElementsResponseV2 {
  export type AsObject = {
    playelementsList: Array<EnrichedPlayElement.AsObject>,
  }
}

export class EnrichedPlayElement extends jspb.Message {
  getPlayelement(): PlayElement | undefined;
  setPlayelement(value?: PlayElement): EnrichedPlayElement;
  hasPlayelement(): boolean;
  clearPlayelement(): EnrichedPlayElement;

  getMaprotation(): MapRotation | undefined;
  setMaprotation(value?: MapRotation): EnrichedPlayElement;
  hasMaprotation(): boolean;
  clearMaprotation(): EnrichedPlayElement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnrichedPlayElement.AsObject;
  static toObject(includeInstance: boolean, msg: EnrichedPlayElement): EnrichedPlayElement.AsObject;
  static serializeBinaryToWriter(message: EnrichedPlayElement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnrichedPlayElement;
  static deserializeBinaryFromReader(message: EnrichedPlayElement, reader: jspb.BinaryReader): EnrichedPlayElement;
}

export namespace EnrichedPlayElement {
  export type AsObject = {
    playelement?: PlayElement.AsObject,
    maprotation?: MapRotation.AsObject,
  }

  export enum PlayelementCase { 
    _PLAYELEMENT_NOT_SET = 0,
    PLAYELEMENT = 1,
  }

  export enum MaprotationCase { 
    _MAPROTATION_NOT_SET = 0,
    MAPROTATION = 2,
  }
}

export class GetOwnedPlayElementsRequest extends jspb.Message {
  getPublishstatesList(): Array<PublishStateType>;
  setPublishstatesList(value: Array<PublishStateType>): GetOwnedPlayElementsRequest;
  clearPublishstatesList(): GetOwnedPlayElementsRequest;
  addPublishstates(value: PublishStateType, index?: number): GetOwnedPlayElementsRequest;

  getIncludedenied(): boolean;
  setIncludedenied(value: boolean): GetOwnedPlayElementsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOwnedPlayElementsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOwnedPlayElementsRequest): GetOwnedPlayElementsRequest.AsObject;
  static serializeBinaryToWriter(message: GetOwnedPlayElementsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOwnedPlayElementsRequest;
  static deserializeBinaryFromReader(message: GetOwnedPlayElementsRequest, reader: jspb.BinaryReader): GetOwnedPlayElementsRequest;
}

export namespace GetOwnedPlayElementsRequest {
  export type AsObject = {
    publishstatesList: Array<PublishStateType>,
    includedenied: boolean,
  }
}

export enum ExperienceOrderBy { 
  EXPERIENCE_ORDER_BY_UNSPECIFIED = 0,
  EXPERIENCE_ORDER_BY_UPDATED_ASC = 1,
  EXPERIENCE_ORDER_BY_UPDATED_DESC = 2,
  EXPERIENCE_ORDER_BY_CREATED_ASC = 3,
  EXPERIENCE_ORDER_BY_CREATED_DESC = 4,
  EXPERIENCE_ORDER_BY_POPULARITY_ASC = 5,
  EXPERIENCE_ORDER_BY_POPULARITY_DESC = 6,
  EXPERIENCE_ORDER_BY_LIKES_ASC = 7,
  EXPERIENCE_ORDER_BY_LIKES_DESC = 8,
}
export enum InternalCapacityType { 
  AI_BACKFILL = 0,
  AI_STATIC = 1,
}
export enum TeamBalancingMethod { 
  UNSPECIFIED = 0,
  EVEN_NUMBERS = 1,
  EVEN_PERCENTAGE = 2,
  FILL_IN_TEAM_ORDER = 3,
}
export enum RotationBehavior { 
  ROTATION_BEHAVIOR_LOOP = 0,
  ROTATION_BEHAVIOR_EORMM = 1,
  ROTATION_BEHAVIOR_ONE_MAP = 2,
}
export enum GameServerJoinabilitySettingValue { 
  GAME_SERVER_JOINABILITY_SETTING_VALUE_UNSPECIFIED = 0,
  GAME_SERVER_JOINABILITY_SETTING_VALUE_ALLOWED = 1,
  GAME_SERVER_JOINABILITY_SETTING_VALUE_DISALLOWED = 2,
}
export enum BlazeGameSettingValue { 
  BLAZE_GAME_SETTING_VALUE_UNSPECIFIED = 0,
  BLAZE_GAME_SETTING_VALUE_ALLOWED = 1,
  BLAZE_GAME_SETTING_VALUE_DISALLOWED = 2,
}
export enum ModerationStateType { 
  MODERATION_STATE_TYPE_UNDEFINED = 0,
  MODERATION_STATE_TYPE_IN_REVIEW = 1,
  MODERATION_STATE_TYPE_APPROVED = 2,
  MODERATION_STATE_TYPE_DENIED = 3,
}
export enum PublishStateType { 
  PUBLISH_STATE_TYPE_INVALID = 0,
  PUBLISH_STATE_TYPE_DRAFT = 1,
  PUBLISH_STATE_TYPE_PUBLISHED = 2,
  PUBLISH_STATE_TYPE_ARCHIVED = 3,
  PUBLISH_STATE_TYPE_ERROR = 4,
}
export enum ProcessingStatus { 
  PROCESSING_STATUS_UNSPECIFIED = 0,
  PROCESSING_STATUS_PENDING = 1,
  PROCESSING_STATUS_PROCESSED = 2,
  PROCESSING_STATUS_NEEDS_RECOMPILE = 3,
  PROCESSING_STATUS_ERROR = 4,
}
export enum AttachmentCompileStatus { 
  ATTACHMENT_COMPILE_STATUS_UNSPECIFIED = 0,
  ATTACHMENT_COMPILE_STATUS_OK = 1,
  ATTACHMENT_COMPILE_STATUS_ERROR = 2,
  ATTACHMENT_COMPILE_STATUS_INCOMPATIBLE_VERSION = 3,
}
export enum AttachmentType { 
  ATTACHMENT_TYPE_UNSPECIFIED = 0,
  ATTACHMENT_TYPE_SPATIAL = 1,
  ATTACHMENT_TYPE_SCRIPT = 2,
  ATTACHMENT_TYPE_SCRIPT_DATA = 3,
  ATTACHMENT_TYPE_STRINGS = 4,
  ATTACHMENT_TYPE_MP_DATA = 5,
}
export enum Platform { 
  UNKNOWN = 0,
  PC = 1,
  PS4 = 2,
  XBOXONE = 3,
  PS5 = 4,
  XBSX = 5,
  COMMON = 6,
  STEAM = 7,
}
