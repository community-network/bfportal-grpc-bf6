import * as jspb from 'google-protobuf'



export class SidList extends jspb.Message {
  getSidsList(): Array<string>;
  setSidsList(value: Array<string>): SidList;
  clearSidsList(): SidList;
  addSids(value: string, index?: number): SidList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SidList.AsObject;
  static toObject(includeInstance: boolean, msg: SidList): SidList.AsObject;
  static serializeBinaryToWriter(message: SidList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SidList;
  static deserializeBinaryFromReader(message: SidList, reader: jspb.BinaryReader): SidList;
}

export namespace SidList {
  export type AsObject = {
    sidsList: Array<string>,
  }
}

export class CategoryIdList extends jspb.Message {
  getIdsList(): Array<number>;
  setIdsList(value: Array<number>): CategoryIdList;
  clearIdsList(): CategoryIdList;
  addIds(value: number, index?: number): CategoryIdList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryIdList.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryIdList): CategoryIdList.AsObject;
  static serializeBinaryToWriter(message: CategoryIdList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryIdList;
  static deserializeBinaryFromReader(message: CategoryIdList, reader: jspb.BinaryReader): CategoryIdList;
}

export namespace CategoryIdList {
  export type AsObject = {
    idsList: Array<number>,
  }
}

export class SubCategoryIdList extends jspb.Message {
  getIdsList(): Array<number>;
  setIdsList(value: Array<number>): SubCategoryIdList;
  clearIdsList(): SubCategoryIdList;
  addIds(value: number, index?: number): SubCategoryIdList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubCategoryIdList.AsObject;
  static toObject(includeInstance: boolean, msg: SubCategoryIdList): SubCategoryIdList.AsObject;
  static serializeBinaryToWriter(message: SubCategoryIdList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubCategoryIdList;
  static deserializeBinaryFromReader(message: SubCategoryIdList, reader: jspb.BinaryReader): SubCategoryIdList;
}

export namespace SubCategoryIdList {
  export type AsObject = {
    idsList: Array<number>,
  }
}

export class TranslationsQuery extends jspb.Message {
  getSidlist(): SidList | undefined;
  setSidlist(value?: SidList): TranslationsQuery;
  hasSidlist(): boolean;
  clearSidlist(): TranslationsQuery;

  getCategoryidlist(): CategoryIdList | undefined;
  setCategoryidlist(value?: CategoryIdList): TranslationsQuery;
  hasCategoryidlist(): boolean;
  clearCategoryidlist(): TranslationsQuery;

  getSubcategoryidlist(): SubCategoryIdList | undefined;
  setSubcategoryidlist(value?: SubCategoryIdList): TranslationsQuery;
  hasSubcategoryidlist(): boolean;
  clearSubcategoryidlist(): TranslationsQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslationsQuery.AsObject;
  static toObject(includeInstance: boolean, msg: TranslationsQuery): TranslationsQuery.AsObject;
  static serializeBinaryToWriter(message: TranslationsQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranslationsQuery;
  static deserializeBinaryFromReader(message: TranslationsQuery, reader: jspb.BinaryReader): TranslationsQuery;
}

export namespace TranslationsQuery {
  export type AsObject = {
    sidlist?: SidList.AsObject,
    categoryidlist?: CategoryIdList.AsObject,
    subcategoryidlist?: SubCategoryIdList.AsObject,
  }

  export enum SidlistCase { 
    _SIDLIST_NOT_SET = 0,
    SIDLIST = 1,
  }

  export enum CategoryidlistCase { 
    _CATEGORYIDLIST_NOT_SET = 0,
    CATEGORYIDLIST = 2,
  }

  export enum SubcategoryidlistCase { 
    _SUBCATEGORYIDLIST_NOT_SET = 0,
    SUBCATEGORYIDLIST = 3,
  }
}

export class LocalizedText extends jspb.Message {
  getSid(): string;
  setSid(value: string): LocalizedText;

  getLocalizedtext(): string;
  setLocalizedtext(value: string): LocalizedText;

  getCategoryid(): number;
  setCategoryid(value: number): LocalizedText;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalizedText.AsObject;
  static toObject(includeInstance: boolean, msg: LocalizedText): LocalizedText.AsObject;
  static serializeBinaryToWriter(message: LocalizedText, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalizedText;
  static deserializeBinaryFromReader(message: LocalizedText, reader: jspb.BinaryReader): LocalizedText;
}

export namespace LocalizedText {
  export type AsObject = {
    sid: string,
    localizedtext: string,
    categoryid: number,
  }
}

export class Timestamp extends jspb.Message {
  getSeconds(): string;
  setSeconds(value: string): Timestamp;

  getNanos(): number;
  setNanos(value: number): Timestamp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Timestamp.AsObject;
  static toObject(includeInstance: boolean, msg: Timestamp): Timestamp.AsObject;
  static serializeBinaryToWriter(message: Timestamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Timestamp;
  static deserializeBinaryFromReader(message: Timestamp, reader: jspb.BinaryReader): Timestamp;
}

export namespace Timestamp {
  export type AsObject = {
    seconds: string,
    nanos: number,
  }
}

export class GetTranslationsRequest extends jspb.Message {
  getTranslationsquery(): TranslationsQuery | undefined;
  setTranslationsquery(value?: TranslationsQuery): GetTranslationsRequest;
  hasTranslationsquery(): boolean;
  clearTranslationsquery(): GetTranslationsRequest;

  getLocale(): string;
  setLocale(value: string): GetTranslationsRequest;

  getFetchfrom(): Timestamp | undefined;
  setFetchfrom(value?: Timestamp): GetTranslationsRequest;
  hasFetchfrom(): boolean;
  clearFetchfrom(): GetTranslationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTranslationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTranslationsRequest): GetTranslationsRequest.AsObject;
  static serializeBinaryToWriter(message: GetTranslationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTranslationsRequest;
  static deserializeBinaryFromReader(message: GetTranslationsRequest, reader: jspb.BinaryReader): GetTranslationsRequest;
}

export namespace GetTranslationsRequest {
  export type AsObject = {
    translationsquery?: TranslationsQuery.AsObject,
    locale: string,
    fetchfrom?: Timestamp.AsObject,
  }

  export enum FetchfromCase { 
    _FETCHFROM_NOT_SET = 0,
    FETCHFROM = 5,
  }
}

export class GetTranslationsResponse extends jspb.Message {
  getLocalizedtextsList(): Array<LocalizedText>;
  setLocalizedtextsList(value: Array<LocalizedText>): GetTranslationsResponse;
  clearLocalizedtextsList(): GetTranslationsResponse;
  addLocalizedtexts(value?: LocalizedText, index?: number): LocalizedText;

  getFetcheduntil(): Timestamp | undefined;
  setFetcheduntil(value?: Timestamp): GetTranslationsResponse;
  hasFetcheduntil(): boolean;
  clearFetcheduntil(): GetTranslationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTranslationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTranslationsResponse): GetTranslationsResponse.AsObject;
  static serializeBinaryToWriter(message: GetTranslationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTranslationsResponse;
  static deserializeBinaryFromReader(message: GetTranslationsResponse, reader: jspb.BinaryReader): GetTranslationsResponse;
}

export namespace GetTranslationsResponse {
  export type AsObject = {
    localizedtextsList: Array<LocalizedText.AsObject>,
    fetcheduntil?: Timestamp.AsObject,
  }

  export enum FetcheduntilCase { 
    _FETCHEDUNTIL_NOT_SET = 0,
    FETCHEDUNTIL = 4,
  }
}

