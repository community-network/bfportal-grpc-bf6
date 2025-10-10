/**
 * @fileoverview gRPC-Web generated client stub for santiago.web.reporting
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as reporting_pb from './reporting_pb';


export class WebReportingClient {
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

  methodDescriptorReportPlayer = new grpcWeb.MethodDescriptor(
    '/santiago.web.reporting.WebReporting/ReportPlayer',
    grpcWeb.MethodType.UNARY,
    reporting_pb.ReportPlayerRequest,
    reporting_pb.ReportingResponse,
    (request: reporting_pb.ReportPlayerRequest) => {
      return request.serializeBinary();
    },
    reporting_pb.ReportingResponse.deserializeBinary
  );

  reportPlayer(
    request: reporting_pb.ReportPlayerRequest,
    metadata: grpcWeb.Metadata | null): Promise<reporting_pb.ReportingResponse>;

  reportPlayer(
    request: reporting_pb.ReportPlayerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: reporting_pb.ReportingResponse) => void): grpcWeb.ClientReadableStream<reporting_pb.ReportingResponse>;

  reportPlayer(
    request: reporting_pb.ReportPlayerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: reporting_pb.ReportingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santiago.web.reporting.WebReporting/ReportPlayer',
        request,
        metadata || {},
        this.methodDescriptorReportPlayer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santiago.web.reporting.WebReporting/ReportPlayer',
    request,
    metadata || {},
    this.methodDescriptorReportPlayer);
  }

  methodDescriptorReportExperience = new grpcWeb.MethodDescriptor(
    '/santiago.web.reporting.WebReporting/ReportExperience',
    grpcWeb.MethodType.UNARY,
    reporting_pb.ReportExperienceRequest,
    reporting_pb.ReportingResponse,
    (request: reporting_pb.ReportExperienceRequest) => {
      return request.serializeBinary();
    },
    reporting_pb.ReportingResponse.deserializeBinary
  );

  reportExperience(
    request: reporting_pb.ReportExperienceRequest,
    metadata: grpcWeb.Metadata | null): Promise<reporting_pb.ReportingResponse>;

  reportExperience(
    request: reporting_pb.ReportExperienceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: reporting_pb.ReportingResponse) => void): grpcWeb.ClientReadableStream<reporting_pb.ReportingResponse>;

  reportExperience(
    request: reporting_pb.ReportExperienceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: reporting_pb.ReportingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santiago.web.reporting.WebReporting/ReportExperience',
        request,
        metadata || {},
        this.methodDescriptorReportExperience,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santiago.web.reporting.WebReporting/ReportExperience',
    request,
    metadata || {},
    this.methodDescriptorReportExperience);
  }

}

