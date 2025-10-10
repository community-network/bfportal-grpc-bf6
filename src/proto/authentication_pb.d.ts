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

export class AuthCodeAuthentication extends jspb.Message {
  getAuthcode(): string;
  setAuthcode(value: string): AuthCodeAuthentication;

  getPlatform(): Platform;
  setPlatform(value: Platform): AuthCodeAuthentication;

  getRedirecturi(): string;
  setRedirecturi(value: string): AuthCodeAuthentication;
  hasRedirecturi(): boolean;
  clearRedirecturi(): AuthCodeAuthentication;

  getPatchversion(): string;
  setPatchversion(value: string): AuthCodeAuthentication;
  hasPatchversion(): boolean;
  clearPatchversion(): AuthCodeAuthentication;

  getProtocolversion(): string;
  setProtocolversion(value: string): AuthCodeAuthentication;
  hasProtocolversion(): boolean;
  clearProtocolversion(): AuthCodeAuthentication;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthCodeAuthentication.AsObject;
  static toObject(includeInstance: boolean, msg: AuthCodeAuthentication): AuthCodeAuthentication.AsObject;
  static serializeBinaryToWriter(message: AuthCodeAuthentication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthCodeAuthentication;
  static deserializeBinaryFromReader(message: AuthCodeAuthentication, reader: jspb.BinaryReader): AuthCodeAuthentication;
}

export namespace AuthCodeAuthentication {
  export type AsObject = {
    authcode: string,
    platform: Platform,
    redirecturi?: string,
    patchversion?: string,
    protocolversion?: string,
  }

  export enum RedirecturiCase { 
    _REDIRECTURI_NOT_SET = 0,
    REDIRECTURI = 3,
  }

  export enum PatchversionCase { 
    _PATCHVERSION_NOT_SET = 0,
    PATCHVERSION = 4,
  }

  export enum ProtocolversionCase { 
    _PROTOCOLVERSION_NOT_SET = 0,
    PROTOCOLVERSION = 5,
  }
}

export class Duration extends jspb.Message {
  getSeconds(): number;
  setSeconds(value: number): Duration;

  getNanos(): number;
  setNanos(value: number): Duration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Duration.AsObject;
  static toObject(includeInstance: boolean, msg: Duration): Duration.AsObject;
  static serializeBinaryToWriter(message: Duration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Duration;
  static deserializeBinaryFromReader(message: Duration, reader: jspb.BinaryReader): Duration;
}

export namespace Duration {
  export type AsObject = {
    seconds: number,
    nanos: number,
  }
}

export class TimeTravel extends jspb.Message {
  getOffset(): Duration | undefined;
  setOffset(value?: Duration): TimeTravel;
  hasOffset(): boolean;
  clearOffset(): TimeTravel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeTravel.AsObject;
  static toObject(includeInstance: boolean, msg: TimeTravel): TimeTravel.AsObject;
  static serializeBinaryToWriter(message: TimeTravel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeTravel;
  static deserializeBinaryFromReader(message: TimeTravel, reader: jspb.BinaryReader): TimeTravel;
}

export namespace TimeTravel {
  export type AsObject = {
    offset?: Duration.AsObject,
  }
}

export class ProtocolVersionOverride extends jspb.Message {
  getOriginal(): string;
  setOriginal(value: string): ProtocolVersionOverride;

  getOverridden(): string;
  setOverridden(value: string): ProtocolVersionOverride;

  getReason(): Reason;
  setReason(value: Reason): ProtocolVersionOverride;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProtocolVersionOverride.AsObject;
  static toObject(includeInstance: boolean, msg: ProtocolVersionOverride): ProtocolVersionOverride.AsObject;
  static serializeBinaryToWriter(message: ProtocolVersionOverride, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProtocolVersionOverride;
  static deserializeBinaryFromReader(message: ProtocolVersionOverride, reader: jspb.BinaryReader): ProtocolVersionOverride;
}

export namespace ProtocolVersionOverride {
  export type AsObject = {
    original: string,
    overridden: string,
    reason: Reason,
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

export class AuthenticationResponse extends jspb.Message {
  getSessionid(): string;
  setSessionid(value: string): AuthenticationResponse;

  getPlayer(): Player | undefined;
  setPlayer(value?: Player): AuthenticationResponse;
  hasPlayer(): boolean;
  clearPlayer(): AuthenticationResponse;

  getTimetravel(): TimeTravel | undefined;
  setTimetravel(value?: TimeTravel): AuthenticationResponse;
  hasTimetravel(): boolean;
  clearTimetravel(): AuthenticationResponse;

  getProtocolversionoverride(): ProtocolVersionOverride | undefined;
  setProtocolversionoverride(value?: ProtocolVersionOverride): AuthenticationResponse;
  hasProtocolversionoverride(): boolean;
  clearProtocolversionoverride(): AuthenticationResponse;

  getPatchversion(): string;
  setPatchversion(value: string): AuthenticationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationResponse): AuthenticationResponse.AsObject;
  static serializeBinaryToWriter(message: AuthenticationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationResponse;
  static deserializeBinaryFromReader(message: AuthenticationResponse, reader: jspb.BinaryReader): AuthenticationResponse;
}

export namespace AuthenticationResponse {
  export type AsObject = {
    sessionid: string,
    player?: Player.AsObject,
    timetravel?: TimeTravel.AsObject,
    protocolversionoverride?: ProtocolVersionOverride.AsObject,
    patchversion: string,
  }

  export enum PlayerCase { 
    _PLAYER_NOT_SET = 0,
    PLAYER = 2,
  }

  export enum TimetravelCase { 
    _TIMETRAVEL_NOT_SET = 0,
    TIMETRAVEL = 3,
  }

  export enum ProtocolversionoverrideCase { 
    _PROTOCOLVERSIONOVERRIDE_NOT_SET = 0,
    PROTOCOLVERSIONOVERRIDE = 4,
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
export enum Reason { 
  NONE = 0,
  SYNC = 1,
}
