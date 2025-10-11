/**
 * @fileoverview gRPC-Web generated client stub for santiago.web.play
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as play_pb from './play_pb';


export class WebPlayClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorcreatePlayElement = new grpcWeb.MethodDescriptor(
    '/santiago.web.play.WebPlay/createPlayElement',
    grpcWeb.MethodType.UNARY,
    play_pb.CreatePlayElementRequest,
    play_pb.PlayElementResponse,
    (request: play_pb.CreatePlayElementRequest) => {
      return request.serializeBinary();
    },
    play_pb.PlayElementResponse.deserializeBinary
  );

  createPlayElement(
    request: play_pb.CreatePlayElementRequest,
    metadata: grpcWeb.Metadata | null): Promise<play_pb.PlayElementResponse>;

  createPlayElement(
    request: play_pb.CreatePlayElementRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: play_pb.PlayElementResponse) => void): grpcWeb.ClientReadableStream<play_pb.PlayElementResponse>;

  createPlayElement(
    request: play_pb.CreatePlayElementRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: play_pb.PlayElementResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santiago.web.play.WebPlay/createPlayElement',
        request,
        metadata || {},
        this.methodDescriptorcreatePlayElement,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santiago.web.play.WebPlay/createPlayElement',
    request,
    metadata || {},
    this.methodDescriptorcreatePlayElement);
  }

  methodDescriptorgetPlayElement = new grpcWeb.MethodDescriptor(
    '/santiago.web.play.WebPlay/getPlayElement',
    grpcWeb.MethodType.UNARY,
    play_pb.GetPlayElementRequest,
    play_pb.PlayElementResponse,
    (request: play_pb.GetPlayElementRequest) => {
      return request.serializeBinary();
    },
    play_pb.PlayElementResponse.deserializeBinary
  );

  getPlayElement(
    request: play_pb.GetPlayElementRequest,
    metadata: grpcWeb.Metadata | null): Promise<play_pb.PlayElementResponse>;

  getPlayElement(
    request: play_pb.GetPlayElementRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: play_pb.PlayElementResponse) => void): grpcWeb.ClientReadableStream<play_pb.PlayElementResponse>;

  getPlayElement(
    request: play_pb.GetPlayElementRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: play_pb.PlayElementResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santiago.web.play.WebPlay/getPlayElement',
        request,
        metadata || {},
        this.methodDescriptorgetPlayElement,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santiago.web.play.WebPlay/getPlayElement',
    request,
    metadata || {},
    this.methodDescriptorgetPlayElement);
  }

  methodDescriptorupdatePlayElement = new grpcWeb.MethodDescriptor(
    '/santiago.web.play.WebPlay/updatePlayElement',
    grpcWeb.MethodType.UNARY,
    play_pb.UpdatePlayElementRequest,
    play_pb.PlayElementResponse,
    (request: play_pb.UpdatePlayElementRequest) => {
      return request.serializeBinary();
    },
    play_pb.PlayElementResponse.deserializeBinary
  );

  updatePlayElement(
    request: play_pb.UpdatePlayElementRequest,
    metadata: grpcWeb.Metadata | null): Promise<play_pb.PlayElementResponse>;

  updatePlayElement(
    request: play_pb.UpdatePlayElementRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: play_pb.PlayElementResponse) => void): grpcWeb.ClientReadableStream<play_pb.PlayElementResponse>;

  updatePlayElement(
    request: play_pb.UpdatePlayElementRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: play_pb.PlayElementResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santiago.web.play.WebPlay/updatePlayElement',
        request,
        metadata || {},
        this.methodDescriptorupdatePlayElement,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santiago.web.play.WebPlay/updatePlayElement',
    request,
    metadata || {},
    this.methodDescriptorupdatePlayElement);
  }

  methodDescriptordeletePlayElement = new grpcWeb.MethodDescriptor(
    '/santiago.web.play.WebPlay/deletePlayElement',
    grpcWeb.MethodType.UNARY,
    play_pb.DeletePlayElementRequest,
    play_pb.DeletePlayElementResponse,
    (request: play_pb.DeletePlayElementRequest) => {
      return request.serializeBinary();
    },
    play_pb.DeletePlayElementResponse.deserializeBinary
  );

  deletePlayElement(
    request: play_pb.DeletePlayElementRequest,
    metadata: grpcWeb.Metadata | null): Promise<play_pb.DeletePlayElementResponse>;

  deletePlayElement(
    request: play_pb.DeletePlayElementRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: play_pb.DeletePlayElementResponse) => void): grpcWeb.ClientReadableStream<play_pb.DeletePlayElementResponse>;

  deletePlayElement(
    request: play_pb.DeletePlayElementRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: play_pb.DeletePlayElementResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santiago.web.play.WebPlay/deletePlayElement',
        request,
        metadata || {},
        this.methodDescriptordeletePlayElement,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santiago.web.play.WebPlay/deletePlayElement',
    request,
    metadata || {},
    this.methodDescriptordeletePlayElement);
  }

  methodDescriptorgetOwnedPlayElements = new grpcWeb.MethodDescriptor(
    '/santiago.web.play.WebPlay/getOwnedPlayElements',
    grpcWeb.MethodType.UNARY,
    play_pb.GetOwnedPlayElementsRequest,
    play_pb.GetOwnedPlayElementsResponse,
    (request: play_pb.GetOwnedPlayElementsRequest) => {
      return request.serializeBinary();
    },
    play_pb.GetOwnedPlayElementsResponse.deserializeBinary
  );

  getOwnedPlayElements(
    request: play_pb.GetOwnedPlayElementsRequest,
    metadata: grpcWeb.Metadata | null): Promise<play_pb.GetOwnedPlayElementsResponse>;

  getOwnedPlayElements(
    request: play_pb.GetOwnedPlayElementsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: play_pb.GetOwnedPlayElementsResponse) => void): grpcWeb.ClientReadableStream<play_pb.GetOwnedPlayElementsResponse>;

  getOwnedPlayElements(
    request: play_pb.GetOwnedPlayElementsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: play_pb.GetOwnedPlayElementsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santiago.web.play.WebPlay/getOwnedPlayElements',
        request,
        metadata || {},
        this.methodDescriptorgetOwnedPlayElements,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santiago.web.play.WebPlay/getOwnedPlayElements',
    request,
    metadata || {},
    this.methodDescriptorgetOwnedPlayElements);
  }

  methodDescriptorgetOwnedPlayElementsV2 = new grpcWeb.MethodDescriptor(
    '/santiago.web.play.WebPlay/getOwnedPlayElementsV2',
    grpcWeb.MethodType.UNARY,
    play_pb.GetOwnedPlayElementsRequest,
    play_pb.GetOwnedPlayElementsResponseV2,
    (request: play_pb.GetOwnedPlayElementsRequest) => {
      return request.serializeBinary();
    },
    play_pb.GetOwnedPlayElementsResponseV2.deserializeBinary
  );

  getOwnedPlayElementsV2(
    request: play_pb.GetOwnedPlayElementsRequest,
    metadata: grpcWeb.Metadata | null): Promise<play_pb.GetOwnedPlayElementsResponseV2>;

  getOwnedPlayElementsV2(
    request: play_pb.GetOwnedPlayElementsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: play_pb.GetOwnedPlayElementsResponseV2) => void): grpcWeb.ClientReadableStream<play_pb.GetOwnedPlayElementsResponseV2>;

  getOwnedPlayElementsV2(
    request: play_pb.GetOwnedPlayElementsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: play_pb.GetOwnedPlayElementsResponseV2) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santiago.web.play.WebPlay/getOwnedPlayElementsV2',
        request,
        metadata || {},
        this.methodDescriptorgetOwnedPlayElementsV2,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santiago.web.play.WebPlay/getOwnedPlayElementsV2',
    request,
    metadata || {},
    this.methodDescriptorgetOwnedPlayElementsV2);
  }

  methodDescriptorgetBlueprintsById = new grpcWeb.MethodDescriptor(
    '/santiago.web.play.WebPlay/getBlueprintsById',
    grpcWeb.MethodType.UNARY,
    play_pb.GetBlueprintsByIdRequest,
    play_pb.GetBlueprintsByIdResponse,
    (request: play_pb.GetBlueprintsByIdRequest) => {
      return request.serializeBinary();
    },
    play_pb.GetBlueprintsByIdResponse.deserializeBinary
  );

  getBlueprintsById(
    request: play_pb.GetBlueprintsByIdRequest,
    metadata: grpcWeb.Metadata | null): Promise<play_pb.GetBlueprintsByIdResponse>;

  getBlueprintsById(
    request: play_pb.GetBlueprintsByIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: play_pb.GetBlueprintsByIdResponse) => void): grpcWeb.ClientReadableStream<play_pb.GetBlueprintsByIdResponse>;

  getBlueprintsById(
    request: play_pb.GetBlueprintsByIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: play_pb.GetBlueprintsByIdResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santiago.web.play.WebPlay/getBlueprintsById',
        request,
        metadata || {},
        this.methodDescriptorgetBlueprintsById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santiago.web.play.WebPlay/getBlueprintsById',
    request,
    metadata || {},
    this.methodDescriptorgetBlueprintsById);
  }

  methodDescriptorgetScheduledBlueprints = new grpcWeb.MethodDescriptor(
    '/santiago.web.play.WebPlay/getScheduledBlueprints',
    grpcWeb.MethodType.UNARY,
    play_pb.GetScheduledBlueprintsRequest,
    play_pb.GetScheduledBlueprintsResponse,
    (request: play_pb.GetScheduledBlueprintsRequest) => {
      return request.serializeBinary();
    },
    play_pb.GetScheduledBlueprintsResponse.deserializeBinary
  );

  getScheduledBlueprints(
    request: play_pb.GetScheduledBlueprintsRequest,
    metadata: grpcWeb.Metadata | null): Promise<play_pb.GetScheduledBlueprintsResponse>;

  getScheduledBlueprints(
    request: play_pb.GetScheduledBlueprintsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: play_pb.GetScheduledBlueprintsResponse) => void): grpcWeb.ClientReadableStream<play_pb.GetScheduledBlueprintsResponse>;

  getScheduledBlueprints(
    request: play_pb.GetScheduledBlueprintsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: play_pb.GetScheduledBlueprintsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santiago.web.play.WebPlay/getScheduledBlueprints',
        request,
        metadata || {},
        this.methodDescriptorgetScheduledBlueprints,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santiago.web.play.WebPlay/getScheduledBlueprints',
    request,
    metadata || {},
    this.methodDescriptorgetScheduledBlueprints);
  }

  methodDescriptorcreateModDataVersion = new grpcWeb.MethodDescriptor(
    '/santiago.web.play.WebPlay/createModDataVersion',
    grpcWeb.MethodType.UNARY,
    play_pb.CreateModDataVersionRequest,
    play_pb.CreateModDataVersionResponse,
    (request: play_pb.CreateModDataVersionRequest) => {
      return request.serializeBinary();
    },
    play_pb.CreateModDataVersionResponse.deserializeBinary
  );

  createModDataVersion(
    request: play_pb.CreateModDataVersionRequest,
    metadata: grpcWeb.Metadata | null): Promise<play_pb.CreateModDataVersionResponse>;

  createModDataVersion(
    request: play_pb.CreateModDataVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: play_pb.CreateModDataVersionResponse) => void): grpcWeb.ClientReadableStream<play_pb.CreateModDataVersionResponse>;

  createModDataVersion(
    request: play_pb.CreateModDataVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: play_pb.CreateModDataVersionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santiago.web.play.WebPlay/createModDataVersion',
        request,
        metadata || {},
        this.methodDescriptorcreateModDataVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santiago.web.play.WebPlay/createModDataVersion',
    request,
    metadata || {},
    this.methodDescriptorcreateModDataVersion);
  }

  methodDescriptorlistModDataVersions = new grpcWeb.MethodDescriptor(
    '/santiago.web.play.WebPlay/listModDataVersions',
    grpcWeb.MethodType.UNARY,
    play_pb.ListModDataVersionsRequest,
    play_pb.ListModDataVersionsResponse,
    (request: play_pb.ListModDataVersionsRequest) => {
      return request.serializeBinary();
    },
    play_pb.ListModDataVersionsResponse.deserializeBinary
  );

  listModDataVersions(
    request: play_pb.ListModDataVersionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<play_pb.ListModDataVersionsResponse>;

  listModDataVersions(
    request: play_pb.ListModDataVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: play_pb.ListModDataVersionsResponse) => void): grpcWeb.ClientReadableStream<play_pb.ListModDataVersionsResponse>;

  listModDataVersions(
    request: play_pb.ListModDataVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: play_pb.ListModDataVersionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santiago.web.play.WebPlay/listModDataVersions',
        request,
        metadata || {},
        this.methodDescriptorlistModDataVersions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santiago.web.play.WebPlay/listModDataVersions',
    request,
    metadata || {},
    this.methodDescriptorlistModDataVersions);
  }

  methodDescriptorUploadExperienceThumbnail = new grpcWeb.MethodDescriptor(
    '/santiago.web.play.WebPlay/UploadExperienceThumbnail',
    grpcWeb.MethodType.UNARY,
    play_pb.UploadExperienceThumbnailRequest,
    play_pb.UploadExperienceThumbnailResponse,
    (request: play_pb.UploadExperienceThumbnailRequest) => {
      return request.serializeBinary();
    },
    play_pb.UploadExperienceThumbnailResponse.deserializeBinary
  );

  uploadExperienceThumbnail(
    request: play_pb.UploadExperienceThumbnailRequest,
    metadata: grpcWeb.Metadata | null): Promise<play_pb.UploadExperienceThumbnailResponse>;

  uploadExperienceThumbnail(
    request: play_pb.UploadExperienceThumbnailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: play_pb.UploadExperienceThumbnailResponse) => void): grpcWeb.ClientReadableStream<play_pb.UploadExperienceThumbnailResponse>;

  uploadExperienceThumbnail(
    request: play_pb.UploadExperienceThumbnailRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: play_pb.UploadExperienceThumbnailResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santiago.web.play.WebPlay/UploadExperienceThumbnail',
        request,
        metadata || {},
        this.methodDescriptorUploadExperienceThumbnail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santiago.web.play.WebPlay/UploadExperienceThumbnail',
    request,
    metadata || {},
    this.methodDescriptorUploadExperienceThumbnail);
  }

  methodDescriptorGetProgressionTypes = new grpcWeb.MethodDescriptor(
    '/santiago.web.play.WebPlay/GetProgressionTypes',
    grpcWeb.MethodType.UNARY,
    play_pb.GetProgressionTypesRequest,
    play_pb.GetProgressionTypesResponse,
    (request: play_pb.GetProgressionTypesRequest) => {
      return request.serializeBinary();
    },
    play_pb.GetProgressionTypesResponse.deserializeBinary
  );

  getProgressionTypes(
    request: play_pb.GetProgressionTypesRequest,
    metadata: grpcWeb.Metadata | null): Promise<play_pb.GetProgressionTypesResponse>;

  getProgressionTypes(
    request: play_pb.GetProgressionTypesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: play_pb.GetProgressionTypesResponse) => void): grpcWeb.ClientReadableStream<play_pb.GetProgressionTypesResponse>;

  getProgressionTypes(
    request: play_pb.GetProgressionTypesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: play_pb.GetProgressionTypesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santiago.web.play.WebPlay/GetProgressionTypes',
        request,
        metadata || {},
        this.methodDescriptorGetProgressionTypes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santiago.web.play.WebPlay/GetProgressionTypes',
    request,
    metadata || {},
    this.methodDescriptorGetProgressionTypes);
  }

  methodDescriptorGetLicenseRequirements = new grpcWeb.MethodDescriptor(
    '/santiago.web.play.WebPlay/GetLicenseRequirements',
    grpcWeb.MethodType.UNARY,
    play_pb.GetLicenseRequirementsRequest,
    play_pb.GetLicenseRequirementsResponse,
    (request: play_pb.GetLicenseRequirementsRequest) => {
      return request.serializeBinary();
    },
    play_pb.GetLicenseRequirementsResponse.deserializeBinary
  );

  getLicenseRequirements(
    request: play_pb.GetLicenseRequirementsRequest,
    metadata: grpcWeb.Metadata | null): Promise<play_pb.GetLicenseRequirementsResponse>;

  getLicenseRequirements(
    request: play_pb.GetLicenseRequirementsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: play_pb.GetLicenseRequirementsResponse) => void): grpcWeb.ClientReadableStream<play_pb.GetLicenseRequirementsResponse>;

  getLicenseRequirements(
    request: play_pb.GetLicenseRequirementsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: play_pb.GetLicenseRequirementsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santiago.web.play.WebPlay/GetLicenseRequirements',
        request,
        metadata || {},
        this.methodDescriptorGetLicenseRequirements,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santiago.web.play.WebPlay/GetLicenseRequirements',
    request,
    metadata || {},
    this.methodDescriptorGetLicenseRequirements);
  }

  methodDescriptorGetAvailableTags = new grpcWeb.MethodDescriptor(
    '/santiago.web.play.WebPlay/GetAvailableTags',
    grpcWeb.MethodType.UNARY,
    play_pb.GetAvailableTagsRequest,
    play_pb.GetAvailableTagsResponse,
    (request: play_pb.GetAvailableTagsRequest) => {
      return request.serializeBinary();
    },
    play_pb.GetAvailableTagsResponse.deserializeBinary
  );

  getAvailableTags(
    request: play_pb.GetAvailableTagsRequest,
    metadata: grpcWeb.Metadata | null): Promise<play_pb.GetAvailableTagsResponse>;

  getAvailableTags(
    request: play_pb.GetAvailableTagsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: play_pb.GetAvailableTagsResponse) => void): grpcWeb.ClientReadableStream<play_pb.GetAvailableTagsResponse>;

  getAvailableTags(
    request: play_pb.GetAvailableTagsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: play_pb.GetAvailableTagsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santiago.web.play.WebPlay/GetAvailableTags',
        request,
        metadata || {},
        this.methodDescriptorGetAvailableTags,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santiago.web.play.WebPlay/GetAvailableTags',
    request,
    metadata || {},
    this.methodDescriptorGetAvailableTags);
  }

  methodDescriptorListExperiences = new grpcWeb.MethodDescriptor(
    '/santiago.web.play.WebPlay/ListExperiences',
    grpcWeb.MethodType.UNARY,
    play_pb.ListExperiencesRequest,
    play_pb.ListExperiencesResponse,
    (request: play_pb.ListExperiencesRequest) => {
      return request.serializeBinary();
    },
    play_pb.ListExperiencesResponse.deserializeBinary
  );

  listExperiences(
    request: play_pb.ListExperiencesRequest,
    metadata: grpcWeb.Metadata | null): Promise<play_pb.ListExperiencesResponse>;

  listExperiences(
    request: play_pb.ListExperiencesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: play_pb.ListExperiencesResponse) => void): grpcWeb.ClientReadableStream<play_pb.ListExperiencesResponse>;

  listExperiences(
    request: play_pb.ListExperiencesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: play_pb.ListExperiencesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santiago.web.play.WebPlay/ListExperiences',
        request,
        metadata || {},
        this.methodDescriptorListExperiences,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santiago.web.play.WebPlay/ListExperiences',
    request,
    metadata || {},
    this.methodDescriptorListExperiences);
  }

  methodDescriptorDeleteAttachments = new grpcWeb.MethodDescriptor(
    '/santiago.web.play.WebPlay/DeleteAttachments',
    grpcWeb.MethodType.UNARY,
    play_pb.DeleteAttachmentsRequest,
    play_pb.DeleteAttachmentsResponse,
    (request: play_pb.DeleteAttachmentsRequest) => {
      return request.serializeBinary();
    },
    play_pb.DeleteAttachmentsResponse.deserializeBinary
  );

  deleteAttachments(
    request: play_pb.DeleteAttachmentsRequest,
    metadata: grpcWeb.Metadata | null): Promise<play_pb.DeleteAttachmentsResponse>;

  deleteAttachments(
    request: play_pb.DeleteAttachmentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: play_pb.DeleteAttachmentsResponse) => void): grpcWeb.ClientReadableStream<play_pb.DeleteAttachmentsResponse>;

  deleteAttachments(
    request: play_pb.DeleteAttachmentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: play_pb.DeleteAttachmentsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santiago.web.play.WebPlay/DeleteAttachments',
        request,
        metadata || {},
        this.methodDescriptorDeleteAttachments,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santiago.web.play.WebPlay/DeleteAttachments',
    request,
    metadata || {},
    this.methodDescriptorDeleteAttachments);
  }

}

