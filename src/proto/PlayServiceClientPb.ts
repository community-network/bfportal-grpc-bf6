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

}

