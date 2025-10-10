/**
 * @fileoverview gRPC-Web generated client stub for santiago.web.localization
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as localization_pb from './localization_pb';


export class ClientLocalizationClient {
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

  methodDescriptorgetTranslations = new grpcWeb.MethodDescriptor(
    '/santiago.web.localization.ClientLocalization/getTranslations',
    grpcWeb.MethodType.UNARY,
    localization_pb.GetTranslationsRequest,
    localization_pb.GetTranslationsResponse,
    (request: localization_pb.GetTranslationsRequest) => {
      return request.serializeBinary();
    },
    localization_pb.GetTranslationsResponse.deserializeBinary
  );

  getTranslations(
    request: localization_pb.GetTranslationsRequest,
    metadata: grpcWeb.Metadata | null): Promise<localization_pb.GetTranslationsResponse>;

  getTranslations(
    request: localization_pb.GetTranslationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: localization_pb.GetTranslationsResponse) => void): grpcWeb.ClientReadableStream<localization_pb.GetTranslationsResponse>;

  getTranslations(
    request: localization_pb.GetTranslationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: localization_pb.GetTranslationsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santiago.web.localization.ClientLocalization/getTranslations',
        request,
        metadata || {},
        this.methodDescriptorgetTranslations,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santiago.web.localization.ClientLocalization/getTranslations',
    request,
    metadata || {},
    this.methodDescriptorgetTranslations);
  }

}

