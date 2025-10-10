/**
 * @fileoverview gRPC-Web generated client stub for santiago.web.authentication
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as authentication_pb from './authentication_pb';


export class WebAuthenticationClient {
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

  methodDescriptorviaAuthCode = new grpcWeb.MethodDescriptor(
    '/santiago.web.authentication.WebAuthentication/viaAuthCode',
    grpcWeb.MethodType.UNARY,
    authentication_pb.AuthCodeAuthentication,
    authentication_pb.AuthenticationResponse,
    (request: authentication_pb.AuthCodeAuthentication) => {
      return request.serializeBinary();
    },
    authentication_pb.AuthenticationResponse.deserializeBinary
  );

  viaAuthCode(
    request: authentication_pb.AuthCodeAuthentication,
    metadata: grpcWeb.Metadata | null): Promise<authentication_pb.AuthenticationResponse>;

  viaAuthCode(
    request: authentication_pb.AuthCodeAuthentication,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: authentication_pb.AuthenticationResponse) => void): grpcWeb.ClientReadableStream<authentication_pb.AuthenticationResponse>;

  viaAuthCode(
    request: authentication_pb.AuthCodeAuthentication,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: authentication_pb.AuthenticationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santiago.web.authentication.WebAuthentication/viaAuthCode',
        request,
        metadata || {},
        this.methodDescriptorviaAuthCode,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santiago.web.authentication.WebAuthentication/viaAuthCode',
    request,
    metadata || {},
    this.methodDescriptorviaAuthCode);
  }

  methodDescriptorlogout = new grpcWeb.MethodDescriptor(
    '/santiago.web.authentication.WebAuthentication/logout',
    grpcWeb.MethodType.UNARY,
    authentication_pb.Empty,
    authentication_pb.Empty,
    (request: authentication_pb.Empty) => {
      return request.serializeBinary();
    },
    authentication_pb.Empty.deserializeBinary
  );

  logout(
    request: authentication_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<authentication_pb.Empty>;

  logout(
    request: authentication_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: authentication_pb.Empty) => void): grpcWeb.ClientReadableStream<authentication_pb.Empty>;

  logout(
    request: authentication_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: authentication_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santiago.web.authentication.WebAuthentication/logout',
        request,
        metadata || {},
        this.methodDescriptorlogout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santiago.web.authentication.WebAuthentication/logout',
    request,
    metadata || {},
    this.methodDescriptorlogout);
  }

}

