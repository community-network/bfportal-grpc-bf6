import * as jspb from 'google-protobuf'



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

export class ReportPlayerRequest extends jspb.Message {
  getOffendingplayer(): Player | undefined;
  setOffendingplayer(value?: Player): ReportPlayerRequest;
  hasOffendingplayer(): boolean;
  clearOffendingplayer(): ReportPlayerRequest;

  getSubject(): string;
  setSubject(value: string): ReportPlayerRequest;
  hasSubject(): boolean;
  clearSubject(): ReportPlayerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportPlayerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportPlayerRequest): ReportPlayerRequest.AsObject;
  static serializeBinaryToWriter(message: ReportPlayerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportPlayerRequest;
  static deserializeBinaryFromReader(message: ReportPlayerRequest, reader: jspb.BinaryReader): ReportPlayerRequest;
}

export namespace ReportPlayerRequest {
  export type AsObject = {
    offendingplayer?: Player.AsObject,
    subject?: string,
  }

  export enum OffendingplayerCase { 
    _OFFENDINGPLAYER_NOT_SET = 0,
    OFFENDINGPLAYER = 1,
  }

  export enum SubjectCase { 
    _SUBJECT_NOT_SET = 0,
    SUBJECT = 2,
  }
}

export class ReportExperienceRequest extends jspb.Message {
  getExperienceid(): string;
  setExperienceid(value: string): ReportExperienceRequest;

  getSubject(): string;
  setSubject(value: string): ReportExperienceRequest;
  hasSubject(): boolean;
  clearSubject(): ReportExperienceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportExperienceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportExperienceRequest): ReportExperienceRequest.AsObject;
  static serializeBinaryToWriter(message: ReportExperienceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportExperienceRequest;
  static deserializeBinaryFromReader(message: ReportExperienceRequest, reader: jspb.BinaryReader): ReportExperienceRequest;
}

export namespace ReportExperienceRequest {
  export type AsObject = {
    experienceid: string,
    subject?: string,
  }

  export enum SubjectCase { 
    _SUBJECT_NOT_SET = 0,
    SUBJECT = 2,
  }
}

export class ReportingResponse extends jspb.Message {
  getSuccess(): CreatePetitionSuccess | undefined;
  setSuccess(value?: CreatePetitionSuccess): ReportingResponse;
  hasSuccess(): boolean;
  clearSuccess(): ReportingResponse;

  getError(): CreatePetitionError | undefined;
  setError(value?: CreatePetitionError): ReportingResponse;
  hasError(): boolean;
  clearError(): ReportingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReportingResponse): ReportingResponse.AsObject;
  static serializeBinaryToWriter(message: ReportingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportingResponse;
  static deserializeBinaryFromReader(message: ReportingResponse, reader: jspb.BinaryReader): ReportingResponse;
}

export namespace ReportingResponse {
  export type AsObject = {
    success?: CreatePetitionSuccess.AsObject,
    error?: CreatePetitionError.AsObject,
  }

  export enum SuccessCase { 
    _SUCCESS_NOT_SET = 0,
    SUCCESS = 1,
  }

  export enum ErrorCase { 
    _ERROR_NOT_SET = 0,
    ERROR = 2,
  }
}

export class CreatePetitionSuccess extends jspb.Message {
  getPetitionid(): string;
  setPetitionid(value: string): CreatePetitionSuccess;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePetitionSuccess.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePetitionSuccess): CreatePetitionSuccess.AsObject;
  static serializeBinaryToWriter(message: CreatePetitionSuccess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePetitionSuccess;
  static deserializeBinaryFromReader(message: CreatePetitionSuccess, reader: jspb.BinaryReader): CreatePetitionSuccess;
}

export namespace CreatePetitionSuccess {
  export type AsObject = {
    petitionid: string,
  }
}

export class CreatePetitionError extends jspb.Message {
  getErrortype(): ReportingErrorType;
  setErrortype(value: ReportingErrorType): CreatePetitionError;

  getErrormessage(): string;
  setErrormessage(value: string): CreatePetitionError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePetitionError.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePetitionError): CreatePetitionError.AsObject;
  static serializeBinaryToWriter(message: CreatePetitionError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePetitionError;
  static deserializeBinaryFromReader(message: CreatePetitionError, reader: jspb.BinaryReader): CreatePetitionError;
}

export namespace CreatePetitionError {
  export type AsObject = {
    errortype: ReportingErrorType,
    errormessage: string,
  }
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
export enum ReportingErrorType { 
  ERROR_TYPES_GENERIC_SERVICE_FAILURE = 0,
  ERROR_TYPES_GENERIC_BUSINESS_FAILURE = 1,
  ERROR_TYPES_INVALID_ARGUMENT = 2,
  ERROR_TYPES_RATE_LIMITED = 3,
}
