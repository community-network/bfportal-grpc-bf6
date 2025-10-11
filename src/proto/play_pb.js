// source: play.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

goog.exportSymbol('proto.santiago.web.play.AssetCategory', null, global);
goog.exportSymbol('proto.santiago.web.play.AssetCategoryBoolean', null, global);
goog.exportSymbol('proto.santiago.web.play.AssetCategoryTagBooleanOverride', null, global);
goog.exportSymbol('proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride', null, global);
goog.exportSymbol('proto.santiago.web.play.Attachment', null, global);
goog.exportSymbol('proto.santiago.web.play.AttachmentCompileStatus', null, global);
goog.exportSymbol('proto.santiago.web.play.AttachmentData', null, global);
goog.exportSymbol('proto.santiago.web.play.AttachmentType', null, global);
goog.exportSymbol('proto.santiago.web.play.AvailableAssetCategories', null, global);
goog.exportSymbol('proto.santiago.web.play.AvailableAssetCategoryTag', null, global);
goog.exportSymbol('proto.santiago.web.play.AvailableFloatValues', null, global);
goog.exportSymbol('proto.santiago.web.play.AvailableGameData', null, global);
goog.exportSymbol('proto.santiago.web.play.AvailableIntValue', null, global);
goog.exportSymbol('proto.santiago.web.play.AvailableIntValues', null, global);
goog.exportSymbol('proto.santiago.web.play.AvailableMapEntry', null, global);
goog.exportSymbol('proto.santiago.web.play.AvailableMutator', null, global);
goog.exportSymbol('proto.santiago.web.play.AvailableMutatorFloatValues', null, global);
goog.exportSymbol('proto.santiago.web.play.AvailableMutatorIntValues', null, global);
goog.exportSymbol('proto.santiago.web.play.AvailableMutatorKind', null, global);
goog.exportSymbol('proto.santiago.web.play.AvailableMutatorSparseFloatValues', null, global);
goog.exportSymbol('proto.santiago.web.play.AvailableMutatorSparseIntValues', null, global);
goog.exportSymbol('proto.santiago.web.play.AvailableTag', null, global);
goog.exportSymbol('proto.santiago.web.play.AvailableTags', null, global);
goog.exportSymbol('proto.santiago.web.play.BlazeGameSettingValue', null, global);
goog.exportSymbol('proto.santiago.web.play.BlazeGameSettings', null, global);
goog.exportSymbol('proto.santiago.web.play.BlazePlayElementDesignSettings', null, global);
goog.exportSymbol('proto.santiago.web.play.Blueprint', null, global);
goog.exportSymbol('proto.santiago.web.play.BlueprintId', null, global);
goog.exportSymbol('proto.santiago.web.play.BuildStatusError', null, global);
goog.exportSymbol('proto.santiago.web.play.BuildStatusSuccess', null, global);
goog.exportSymbol('proto.santiago.web.play.CompatibleModRules', null, global);
goog.exportSymbol('proto.santiago.web.play.CompiledRules', null, global);
goog.exportSymbol('proto.santiago.web.play.Compressed', null, global);
goog.exportSymbol('proto.santiago.web.play.CreateModDataVersionRequest', null, global);
goog.exportSymbol('proto.santiago.web.play.CreateModDataVersionResponse', null, global);
goog.exportSymbol('proto.santiago.web.play.CreatePlayElementRequest', null, global);
goog.exportSymbol('proto.santiago.web.play.Creator', null, global);
goog.exportSymbol('proto.santiago.web.play.DeleteAttachmentsRequest', null, global);
goog.exportSymbol('proto.santiago.web.play.DeleteAttachmentsResponse', null, global);
goog.exportSymbol('proto.santiago.web.play.DeletePlayElementRequest', null, global);
goog.exportSymbol('proto.santiago.web.play.DeletePlayElementResponse', null, global);
goog.exportSymbol('proto.santiago.web.play.DesignMetadata', null, global);
goog.exportSymbol('proto.santiago.web.play.Empty', null, global);
goog.exportSymbol('proto.santiago.web.play.EnrichedPlayElement', null, global);
goog.exportSymbol('proto.santiago.web.play.ErrorModRules', null, global);
goog.exportSymbol('proto.santiago.web.play.ExperienceOrderBy', null, global);
goog.exportSymbol('proto.santiago.web.play.ExternalCreator', null, global);
goog.exportSymbol('proto.santiago.web.play.FirstPartyMetadata', null, global);
goog.exportSymbol('proto.santiago.web.play.FloatRange', null, global);
goog.exportSymbol('proto.santiago.web.play.GameServerJoinabilitySettingValue', null, global);
goog.exportSymbol('proto.santiago.web.play.GameServerJoinabilitySettings', null, global);
goog.exportSymbol('proto.santiago.web.play.GameServerMessage', null, global);
goog.exportSymbol('proto.santiago.web.play.GetAvailableTagsRequest', null, global);
goog.exportSymbol('proto.santiago.web.play.GetAvailableTagsResponse', null, global);
goog.exportSymbol('proto.santiago.web.play.GetBlueprintsByIdRequest', null, global);
goog.exportSymbol('proto.santiago.web.play.GetBlueprintsByIdResponse', null, global);
goog.exportSymbol('proto.santiago.web.play.GetLicenseRequirementsRequest', null, global);
goog.exportSymbol('proto.santiago.web.play.GetLicenseRequirementsResponse', null, global);
goog.exportSymbol('proto.santiago.web.play.GetOwnedPlayElementsRequest', null, global);
goog.exportSymbol('proto.santiago.web.play.GetOwnedPlayElementsResponse', null, global);
goog.exportSymbol('proto.santiago.web.play.GetOwnedPlayElementsResponseV2', null, global);
goog.exportSymbol('proto.santiago.web.play.GetPlayElementRequest', null, global);
goog.exportSymbol('proto.santiago.web.play.GetProgressionTypesRequest', null, global);
goog.exportSymbol('proto.santiago.web.play.GetProgressionTypesResponse', null, global);
goog.exportSymbol('proto.santiago.web.play.GetScheduledBlueprintsRequest', null, global);
goog.exportSymbol('proto.santiago.web.play.GetScheduledBlueprintsResponse', null, global);
goog.exportSymbol('proto.santiago.web.play.IncompatibleModRules', null, global);
goog.exportSymbol('proto.santiago.web.play.IntRange', null, global);
goog.exportSymbol('proto.santiago.web.play.InternalCapacityType', null, global);
goog.exportSymbol('proto.santiago.web.play.InternalCreator', null, global);
goog.exportSymbol('proto.santiago.web.play.InternalTeamStructure', null, global);
goog.exportSymbol('proto.santiago.web.play.ListExperiencesRequest', null, global);
goog.exportSymbol('proto.santiago.web.play.ListExperiencesResponse', null, global);
goog.exportSymbol('proto.santiago.web.play.ListModDataVersionsRequest', null, global);
goog.exportSymbol('proto.santiago.web.play.ListModDataVersionsResponse', null, global);
goog.exportSymbol('proto.santiago.web.play.MapEntry', null, global);
goog.exportSymbol('proto.santiago.web.play.MapEntryRequirement', null, global);
goog.exportSymbol('proto.santiago.web.play.MapRotation', null, global);
goog.exportSymbol('proto.santiago.web.play.MapRotationAttributes', null, global);
goog.exportSymbol('proto.santiago.web.play.Metadata', null, global);
goog.exportSymbol('proto.santiago.web.play.ModDataVersion', null, global);
goog.exportSymbol('proto.santiago.web.play.ModDataVersionBuildInfo', null, global);
goog.exportSymbol('proto.santiago.web.play.ModRules', null, global);
goog.exportSymbol('proto.santiago.web.play.ModRulesDefinition', null, global);
goog.exportSymbol('proto.santiago.web.play.ModerationStateType', null, global);
goog.exportSymbol('proto.santiago.web.play.Mutator', null, global);
goog.exportSymbol('proto.santiago.web.play.MutatorBoolean', null, global);
goog.exportSymbol('proto.santiago.web.play.MutatorFloat', null, global);
goog.exportSymbol('proto.santiago.web.play.MutatorInt', null, global);
goog.exportSymbol('proto.santiago.web.play.MutatorKind', null, global);
goog.exportSymbol('proto.santiago.web.play.MutatorSparseBoolean', null, global);
goog.exportSymbol('proto.santiago.web.play.MutatorSparseBooleanEntry', null, global);
goog.exportSymbol('proto.santiago.web.play.MutatorSparseFloat', null, global);
goog.exportSymbol('proto.santiago.web.play.MutatorSparseFloatEntry', null, global);
goog.exportSymbol('proto.santiago.web.play.MutatorSparseInt', null, global);
goog.exportSymbol('proto.santiago.web.play.MutatorSparseIntEntry', null, global);
goog.exportSymbol('proto.santiago.web.play.MutatorString', null, global);
goog.exportSymbol('proto.santiago.web.play.PSNMetadata', null, global);
goog.exportSymbol('proto.santiago.web.play.Pagination', null, global);
goog.exportSymbol('proto.santiago.web.play.Platform', null, global);
goog.exportSymbol('proto.santiago.web.play.PlayElement', null, global);
goog.exportSymbol('proto.santiago.web.play.PlayElementDesign', null, global);
goog.exportSymbol('proto.santiago.web.play.PlayElementResponse', null, global);
goog.exportSymbol('proto.santiago.web.play.PlayElementSettings', null, global);
goog.exportSymbol('proto.santiago.web.play.PlayExperience', null, global);
goog.exportSymbol('proto.santiago.web.play.PlayExperienceQuery', null, global);
goog.exportSymbol('proto.santiago.web.play.Player', null, global);
goog.exportSymbol('proto.santiago.web.play.PlayerCreator', null, global);
goog.exportSymbol('proto.santiago.web.play.ProcessingStatus', null, global);
goog.exportSymbol('proto.santiago.web.play.PublishStateType', null, global);
goog.exportSymbol('proto.santiago.web.play.Resource', null, global);
goog.exportSymbol('proto.santiago.web.play.ResourceLocation', null, global);
goog.exportSymbol('proto.santiago.web.play.RotationBehavior', null, global);
goog.exportSymbol('proto.santiago.web.play.SparseFloatValues', null, global);
goog.exportSymbol('proto.santiago.web.play.SparseIntEntity', null, global);
goog.exportSymbol('proto.santiago.web.play.SparseIntValues', null, global);
goog.exportSymbol('proto.santiago.web.play.Tag', null, global);
goog.exportSymbol('proto.santiago.web.play.TeamBalancingMethod', null, global);
goog.exportSymbol('proto.santiago.web.play.TeamComposition', null, global);
goog.exportSymbol('proto.santiago.web.play.TeamStructure', null, global);
goog.exportSymbol('proto.santiago.web.play.TranslationMetadata', null, global);
goog.exportSymbol('proto.santiago.web.play.Uncompressed', null, global);
goog.exportSymbol('proto.santiago.web.play.UpdatePlayElementRequest', null, global);
goog.exportSymbol('proto.santiago.web.play.UploadExperienceThumbnailRequest', null, global);
goog.exportSymbol('proto.santiago.web.play.UploadExperienceThumbnailResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.DeleteAttachmentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.DeleteAttachmentsRequest.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.DeleteAttachmentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.DeleteAttachmentsRequest.displayName = 'proto.santiago.web.play.DeleteAttachmentsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.DeleteAttachmentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.DeleteAttachmentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.DeleteAttachmentsResponse.displayName = 'proto.santiago.web.play.DeleteAttachmentsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.GetLicenseRequirementsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.GetLicenseRequirementsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.GetLicenseRequirementsRequest.displayName = 'proto.santiago.web.play.GetLicenseRequirementsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.GetLicenseRequirementsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.GetLicenseRequirementsResponse.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.GetLicenseRequirementsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.GetLicenseRequirementsResponse.displayName = 'proto.santiago.web.play.GetLicenseRequirementsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.MapEntryRequirement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.MapEntryRequirement.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.MapEntryRequirement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.MapEntryRequirement.displayName = 'proto.santiago.web.play.MapEntryRequirement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.GetProgressionTypesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.GetProgressionTypesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.GetProgressionTypesRequest.displayName = 'proto.santiago.web.play.GetProgressionTypesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.GetProgressionTypesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.GetProgressionTypesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.GetProgressionTypesResponse.displayName = 'proto.santiago.web.play.GetProgressionTypesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.UploadExperienceThumbnailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.UploadExperienceThumbnailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.UploadExperienceThumbnailRequest.displayName = 'proto.santiago.web.play.UploadExperienceThumbnailRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.UploadExperienceThumbnailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.UploadExperienceThumbnailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.UploadExperienceThumbnailResponse.displayName = 'proto.santiago.web.play.UploadExperienceThumbnailResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.CreateModDataVersionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.CreateModDataVersionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.CreateModDataVersionResponse.displayName = 'proto.santiago.web.play.CreateModDataVersionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.CreateModDataVersionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.CreateModDataVersionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.CreateModDataVersionRequest.displayName = 'proto.santiago.web.play.CreateModDataVersionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.ListModDataVersionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.ListModDataVersionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.ListModDataVersionsRequest.displayName = 'proto.santiago.web.play.ListModDataVersionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.ListModDataVersionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.ListModDataVersionsResponse.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.ListModDataVersionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.ListModDataVersionsResponse.displayName = 'proto.santiago.web.play.ListModDataVersionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.ModDataVersion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.ModDataVersion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.ModDataVersion.displayName = 'proto.santiago.web.play.ModDataVersion';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.ModDataVersionBuildInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.ModDataVersionBuildInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.ModDataVersionBuildInfo.displayName = 'proto.santiago.web.play.ModDataVersionBuildInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.BuildStatusError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.BuildStatusError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.BuildStatusError.displayName = 'proto.santiago.web.play.BuildStatusError';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.BuildStatusSuccess = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.BuildStatusSuccess, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.BuildStatusSuccess.displayName = 'proto.santiago.web.play.BuildStatusSuccess';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.Empty.displayName = 'proto.santiago.web.play.Empty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.GetAvailableTagsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.GetAvailableTagsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.GetAvailableTagsRequest.displayName = 'proto.santiago.web.play.GetAvailableTagsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.GetAvailableTagsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.GetAvailableTagsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.GetAvailableTagsResponse.displayName = 'proto.santiago.web.play.GetAvailableTagsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.PlayExperience = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.PlayExperience, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.PlayExperience.displayName = 'proto.santiago.web.play.PlayExperience';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.ListExperiencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.ListExperiencesResponse.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.ListExperiencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.ListExperiencesResponse.displayName = 'proto.santiago.web.play.ListExperiencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.PlayExperienceQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.PlayExperienceQuery.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.PlayExperienceQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.PlayExperienceQuery.displayName = 'proto.santiago.web.play.PlayExperienceQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.ListExperiencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.ListExperiencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.ListExperiencesRequest.displayName = 'proto.santiago.web.play.ListExperiencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.Pagination = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.Pagination, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.Pagination.displayName = 'proto.santiago.web.play.Pagination';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.DeletePlayElementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.DeletePlayElementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.DeletePlayElementRequest.displayName = 'proto.santiago.web.play.DeletePlayElementRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.GetScheduledBlueprintsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.GetScheduledBlueprintsResponse.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.GetScheduledBlueprintsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.GetScheduledBlueprintsResponse.displayName = 'proto.santiago.web.play.GetScheduledBlueprintsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.DeletePlayElementResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.DeletePlayElementResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.DeletePlayElementResponse.displayName = 'proto.santiago.web.play.DeletePlayElementResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.GetBlueprintsByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.GetBlueprintsByIdRequest.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.GetBlueprintsByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.GetBlueprintsByIdRequest.displayName = 'proto.santiago.web.play.GetBlueprintsByIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.BlueprintId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.BlueprintId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.BlueprintId.displayName = 'proto.santiago.web.play.BlueprintId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.GetBlueprintsByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.GetBlueprintsByIdResponse.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.GetBlueprintsByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.GetBlueprintsByIdResponse.displayName = 'proto.santiago.web.play.GetBlueprintsByIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.GetScheduledBlueprintsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.GetScheduledBlueprintsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.GetScheduledBlueprintsRequest.displayName = 'proto.santiago.web.play.GetScheduledBlueprintsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.Blueprint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.Blueprint.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.Blueprint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.Blueprint.displayName = 'proto.santiago.web.play.Blueprint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.AvailableGameData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.AvailableGameData.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.AvailableGameData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.AvailableGameData.displayName = 'proto.santiago.web.play.AvailableGameData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.AvailableAssetCategories = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.AvailableAssetCategories.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.AvailableAssetCategories, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.AvailableAssetCategories.displayName = 'proto.santiago.web.play.AvailableAssetCategories';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.AvailableAssetCategoryTag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.AvailableAssetCategoryTag.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.AvailableAssetCategoryTag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.AvailableAssetCategoryTag.displayName = 'proto.santiago.web.play.AvailableAssetCategoryTag';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.ModRulesDefinition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.ModRulesDefinition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.ModRulesDefinition.displayName = 'proto.santiago.web.play.ModRulesDefinition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.AvailableTag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.AvailableTag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.AvailableTag.displayName = 'proto.santiago.web.play.AvailableTag';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.AvailableMapEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.AvailableMapEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.AvailableMapEntry.displayName = 'proto.santiago.web.play.AvailableMapEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.AvailableIntValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.AvailableIntValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.AvailableIntValue.displayName = 'proto.santiago.web.play.AvailableIntValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.AvailableIntValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.AvailableIntValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.AvailableIntValues.displayName = 'proto.santiago.web.play.AvailableIntValues';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.SparseIntValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.SparseIntValues.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.SparseIntValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.SparseIntValues.displayName = 'proto.santiago.web.play.SparseIntValues';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.IntRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.IntRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.IntRange.displayName = 'proto.santiago.web.play.IntRange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.AvailableTags = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.AvailableTags.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.AvailableTags, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.AvailableTags.displayName = 'proto.santiago.web.play.AvailableTags';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.AvailableMutator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.AvailableMutator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.AvailableMutator.displayName = 'proto.santiago.web.play.AvailableMutator';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.AvailableMutatorKind = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.AvailableMutatorKind, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.AvailableMutatorKind.displayName = 'proto.santiago.web.play.AvailableMutatorKind';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.AvailableMutatorSparseIntValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.AvailableMutatorSparseIntValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.AvailableMutatorSparseIntValues.displayName = 'proto.santiago.web.play.AvailableMutatorSparseIntValues';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.AvailableMutatorSparseFloatValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.AvailableMutatorSparseFloatValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.AvailableMutatorSparseFloatValues.displayName = 'proto.santiago.web.play.AvailableMutatorSparseFloatValues';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.CreatePlayElementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.CreatePlayElementRequest.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.CreatePlayElementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.CreatePlayElementRequest.displayName = 'proto.santiago.web.play.CreatePlayElementRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.AvailableMutatorFloatValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.AvailableMutatorFloatValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.AvailableMutatorFloatValues.displayName = 'proto.santiago.web.play.AvailableMutatorFloatValues';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.AvailableFloatValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.AvailableFloatValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.AvailableFloatValues.displayName = 'proto.santiago.web.play.AvailableFloatValues';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.SparseFloatValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.SparseFloatValues.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.SparseFloatValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.SparseFloatValues.displayName = 'proto.santiago.web.play.SparseFloatValues';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.FloatRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.FloatRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.FloatRange.displayName = 'proto.santiago.web.play.FloatRange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.AvailableMutatorIntValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.AvailableMutatorIntValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.AvailableMutatorIntValues.displayName = 'proto.santiago.web.play.AvailableMutatorIntValues';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.UpdatePlayElementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.UpdatePlayElementRequest.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.UpdatePlayElementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.UpdatePlayElementRequest.displayName = 'proto.santiago.web.play.UpdatePlayElementRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.PlayElementResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.PlayElementResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.PlayElementResponse.displayName = 'proto.santiago.web.play.PlayElementResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.PlayElement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.PlayElement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.PlayElement.displayName = 'proto.santiago.web.play.PlayElement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.PlayElementDesign = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.PlayElementDesign.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.PlayElementDesign, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.PlayElementDesign.displayName = 'proto.santiago.web.play.PlayElementDesign';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.Creator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.Creator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.Creator.displayName = 'proto.santiago.web.play.Creator';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.InternalCreator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.InternalCreator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.InternalCreator.displayName = 'proto.santiago.web.play.InternalCreator';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.PlayerCreator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.PlayerCreator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.PlayerCreator.displayName = 'proto.santiago.web.play.PlayerCreator';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.ExternalCreator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.ExternalCreator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.ExternalCreator.displayName = 'proto.santiago.web.play.ExternalCreator';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.Player = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.Player, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.Player.displayName = 'proto.santiago.web.play.Player';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.Tag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.Tag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.Tag.displayName = 'proto.santiago.web.play.Tag';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.Metadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.Metadata.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.Metadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.Metadata.displayName = 'proto.santiago.web.play.Metadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.TranslationMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.TranslationMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.TranslationMetadata.displayName = 'proto.santiago.web.play.TranslationMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.Resource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.Resource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.Resource.displayName = 'proto.santiago.web.play.Resource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.ResourceLocation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.ResourceLocation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.ResourceLocation.displayName = 'proto.santiago.web.play.ResourceLocation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.Attachment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.Attachment.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.Attachment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.Attachment.displayName = 'proto.santiago.web.play.Attachment';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.PlayElementSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.PlayElementSettings.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.PlayElementSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.PlayElementSettings.displayName = 'proto.santiago.web.play.PlayElementSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.GameServerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.GameServerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.GameServerMessage.displayName = 'proto.santiago.web.play.GameServerMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.DesignMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.DesignMetadata.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.DesignMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.DesignMetadata.displayName = 'proto.santiago.web.play.DesignMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.FirstPartyMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.FirstPartyMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.FirstPartyMetadata.displayName = 'proto.santiago.web.play.FirstPartyMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.PSNMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.PSNMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.PSNMetadata.displayName = 'proto.santiago.web.play.PSNMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.MapRotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.MapRotation.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.MapRotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.MapRotation.displayName = 'proto.santiago.web.play.MapRotation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.MapEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.MapEntry.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.MapEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.MapEntry.displayName = 'proto.santiago.web.play.MapEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.BlazeGameSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.BlazeGameSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.BlazeGameSettings.displayName = 'proto.santiago.web.play.BlazeGameSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.GameServerJoinabilitySettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.GameServerJoinabilitySettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.GameServerJoinabilitySettings.displayName = 'proto.santiago.web.play.GameServerJoinabilitySettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.MapRotationAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.MapRotationAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.MapRotationAttributes.displayName = 'proto.santiago.web.play.MapRotationAttributes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.ModRules = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.ModRules, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.ModRules.displayName = 'proto.santiago.web.play.ModRules';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.BlazePlayElementDesignSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.BlazePlayElementDesignSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.BlazePlayElementDesignSettings.displayName = 'proto.santiago.web.play.BlazePlayElementDesignSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.AttachmentData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.AttachmentData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.AttachmentData.displayName = 'proto.santiago.web.play.AttachmentData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.TeamComposition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.TeamComposition.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.TeamComposition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.TeamComposition.displayName = 'proto.santiago.web.play.TeamComposition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.TeamStructure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.TeamStructure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.TeamStructure.displayName = 'proto.santiago.web.play.TeamStructure';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.InternalTeamStructure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.InternalTeamStructure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.InternalTeamStructure.displayName = 'proto.santiago.web.play.InternalTeamStructure';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.CompatibleModRules = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.CompatibleModRules, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.CompatibleModRules.displayName = 'proto.santiago.web.play.CompatibleModRules';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.CompiledRules = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.CompiledRules, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.CompiledRules.displayName = 'proto.santiago.web.play.CompiledRules';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.Uncompressed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.Uncompressed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.Uncompressed.displayName = 'proto.santiago.web.play.Uncompressed';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.Compressed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.Compressed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.Compressed.displayName = 'proto.santiago.web.play.Compressed';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.IncompatibleModRules = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.IncompatibleModRules, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.IncompatibleModRules.displayName = 'proto.santiago.web.play.IncompatibleModRules';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.ErrorModRules = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.ErrorModRules, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.ErrorModRules.displayName = 'proto.santiago.web.play.ErrorModRules';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.AssetCategory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.AssetCategory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.AssetCategory.displayName = 'proto.santiago.web.play.AssetCategory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.AssetCategoryBoolean = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.AssetCategoryBoolean.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.AssetCategoryBoolean, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.AssetCategoryBoolean.displayName = 'proto.santiago.web.play.AssetCategoryBoolean';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.AssetCategoryTagBooleanOverride = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.AssetCategoryTagBooleanOverride.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.AssetCategoryTagBooleanOverride, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.AssetCategoryTagBooleanOverride.displayName = 'proto.santiago.web.play.AssetCategoryTagBooleanOverride';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.displayName = 'proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.Mutator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.Mutator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.Mutator.displayName = 'proto.santiago.web.play.Mutator';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.MutatorKind = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.MutatorKind, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.MutatorKind.displayName = 'proto.santiago.web.play.MutatorKind';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.MutatorBoolean = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.MutatorBoolean, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.MutatorBoolean.displayName = 'proto.santiago.web.play.MutatorBoolean';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.MutatorString = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.MutatorString, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.MutatorString.displayName = 'proto.santiago.web.play.MutatorString';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.MutatorFloat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.MutatorFloat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.MutatorFloat.displayName = 'proto.santiago.web.play.MutatorFloat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.MutatorInt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.MutatorInt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.MutatorInt.displayName = 'proto.santiago.web.play.MutatorInt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.MutatorSparseBooleanEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.MutatorSparseBooleanEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.MutatorSparseBooleanEntry.displayName = 'proto.santiago.web.play.MutatorSparseBooleanEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.MutatorSparseBoolean = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.MutatorSparseBoolean.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.MutatorSparseBoolean, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.MutatorSparseBoolean.displayName = 'proto.santiago.web.play.MutatorSparseBoolean';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.SparseIntEntity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.SparseIntEntity.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.SparseIntEntity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.SparseIntEntity.displayName = 'proto.santiago.web.play.SparseIntEntity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.MutatorSparseIntEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.MutatorSparseIntEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.MutatorSparseIntEntry.displayName = 'proto.santiago.web.play.MutatorSparseIntEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.MutatorSparseInt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.MutatorSparseInt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.MutatorSparseInt.displayName = 'proto.santiago.web.play.MutatorSparseInt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.MutatorSparseFloatEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.MutatorSparseFloatEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.MutatorSparseFloatEntry.displayName = 'proto.santiago.web.play.MutatorSparseFloatEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.MutatorSparseFloat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.MutatorSparseFloat.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.MutatorSparseFloat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.MutatorSparseFloat.displayName = 'proto.santiago.web.play.MutatorSparseFloat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.GetPlayElementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.GetPlayElementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.GetPlayElementRequest.displayName = 'proto.santiago.web.play.GetPlayElementRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.GetOwnedPlayElementsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.GetOwnedPlayElementsResponse.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.GetOwnedPlayElementsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.GetOwnedPlayElementsResponse.displayName = 'proto.santiago.web.play.GetOwnedPlayElementsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.GetOwnedPlayElementsResponseV2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.GetOwnedPlayElementsResponseV2.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.GetOwnedPlayElementsResponseV2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.GetOwnedPlayElementsResponseV2.displayName = 'proto.santiago.web.play.GetOwnedPlayElementsResponseV2';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.EnrichedPlayElement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.santiago.web.play.EnrichedPlayElement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.EnrichedPlayElement.displayName = 'proto.santiago.web.play.EnrichedPlayElement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santiago.web.play.GetOwnedPlayElementsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santiago.web.play.GetOwnedPlayElementsRequest.repeatedFields_, null);
};
goog.inherits(proto.santiago.web.play.GetOwnedPlayElementsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santiago.web.play.GetOwnedPlayElementsRequest.displayName = 'proto.santiago.web.play.GetOwnedPlayElementsRequest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.DeleteAttachmentsRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.DeleteAttachmentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.DeleteAttachmentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.DeleteAttachmentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.DeleteAttachmentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    playelementdesignid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    attachmentidsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.DeleteAttachmentsRequest}
 */
proto.santiago.web.play.DeleteAttachmentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.DeleteAttachmentsRequest;
  return proto.santiago.web.play.DeleteAttachmentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.DeleteAttachmentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.DeleteAttachmentsRequest}
 */
proto.santiago.web.play.DeleteAttachmentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayelementdesignid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAttachmentids(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.DeleteAttachmentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.DeleteAttachmentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.DeleteAttachmentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.DeleteAttachmentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayelementdesignid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAttachmentidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string playElementDesignId = 1;
 * @return {string}
 */
proto.santiago.web.play.DeleteAttachmentsRequest.prototype.getPlayelementdesignid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.DeleteAttachmentsRequest} returns this
 */
proto.santiago.web.play.DeleteAttachmentsRequest.prototype.setPlayelementdesignid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string attachmentIds = 2;
 * @return {!Array<string>}
 */
proto.santiago.web.play.DeleteAttachmentsRequest.prototype.getAttachmentidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.santiago.web.play.DeleteAttachmentsRequest} returns this
 */
proto.santiago.web.play.DeleteAttachmentsRequest.prototype.setAttachmentidsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.DeleteAttachmentsRequest} returns this
 */
proto.santiago.web.play.DeleteAttachmentsRequest.prototype.addAttachmentids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.DeleteAttachmentsRequest} returns this
 */
proto.santiago.web.play.DeleteAttachmentsRequest.prototype.clearAttachmentidsList = function() {
  return this.setAttachmentidsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.DeleteAttachmentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.DeleteAttachmentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.DeleteAttachmentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.DeleteAttachmentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.DeleteAttachmentsResponse}
 */
proto.santiago.web.play.DeleteAttachmentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.DeleteAttachmentsResponse;
  return proto.santiago.web.play.DeleteAttachmentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.DeleteAttachmentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.DeleteAttachmentsResponse}
 */
proto.santiago.web.play.DeleteAttachmentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.DeleteAttachmentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.DeleteAttachmentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.DeleteAttachmentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.DeleteAttachmentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.GetLicenseRequirementsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.GetLicenseRequirementsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.GetLicenseRequirementsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetLicenseRequirementsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.GetLicenseRequirementsRequest}
 */
proto.santiago.web.play.GetLicenseRequirementsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.GetLicenseRequirementsRequest;
  return proto.santiago.web.play.GetLicenseRequirementsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.GetLicenseRequirementsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.GetLicenseRequirementsRequest}
 */
proto.santiago.web.play.GetLicenseRequirementsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.GetLicenseRequirementsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.GetLicenseRequirementsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.GetLicenseRequirementsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetLicenseRequirementsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.GetLicenseRequirementsResponse.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.GetLicenseRequirementsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.GetLicenseRequirementsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.GetLicenseRequirementsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetLicenseRequirementsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownedlicensesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    mapentryrequirementsList: jspb.Message.toObjectList(msg.getMapentryrequirementsList(),
    proto.santiago.web.play.MapEntryRequirement.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.GetLicenseRequirementsResponse}
 */
proto.santiago.web.play.GetLicenseRequirementsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.GetLicenseRequirementsResponse;
  return proto.santiago.web.play.GetLicenseRequirementsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.GetLicenseRequirementsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.GetLicenseRequirementsResponse}
 */
proto.santiago.web.play.GetLicenseRequirementsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addOwnedlicenses(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.MapEntryRequirement;
      reader.readMessage(value,proto.santiago.web.play.MapEntryRequirement.deserializeBinaryFromReader);
      msg.addMapentryrequirements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.GetLicenseRequirementsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.GetLicenseRequirementsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.GetLicenseRequirementsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetLicenseRequirementsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnedlicensesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getMapentryrequirementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.santiago.web.play.MapEntryRequirement.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string ownedLicenses = 1;
 * @return {!Array<string>}
 */
proto.santiago.web.play.GetLicenseRequirementsResponse.prototype.getOwnedlicensesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.santiago.web.play.GetLicenseRequirementsResponse} returns this
 */
proto.santiago.web.play.GetLicenseRequirementsResponse.prototype.setOwnedlicensesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.GetLicenseRequirementsResponse} returns this
 */
proto.santiago.web.play.GetLicenseRequirementsResponse.prototype.addOwnedlicenses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.GetLicenseRequirementsResponse} returns this
 */
proto.santiago.web.play.GetLicenseRequirementsResponse.prototype.clearOwnedlicensesList = function() {
  return this.setOwnedlicensesList([]);
};


/**
 * repeated MapEntryRequirement mapEntryRequirements = 2;
 * @return {!Array<!proto.santiago.web.play.MapEntryRequirement>}
 */
proto.santiago.web.play.GetLicenseRequirementsResponse.prototype.getMapentryrequirementsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.MapEntryRequirement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.MapEntryRequirement, 2));
};


/**
 * @param {!Array<!proto.santiago.web.play.MapEntryRequirement>} value
 * @return {!proto.santiago.web.play.GetLicenseRequirementsResponse} returns this
*/
proto.santiago.web.play.GetLicenseRequirementsResponse.prototype.setMapentryrequirementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.santiago.web.play.MapEntryRequirement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.MapEntryRequirement}
 */
proto.santiago.web.play.GetLicenseRequirementsResponse.prototype.addMapentryrequirements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.santiago.web.play.MapEntryRequirement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.GetLicenseRequirementsResponse} returns this
 */
proto.santiago.web.play.GetLicenseRequirementsResponse.prototype.clearMapentryrequirementsList = function() {
  return this.setMapentryrequirementsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.MapEntryRequirement.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.MapEntryRequirement.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.MapEntryRequirement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.MapEntryRequirement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MapEntryRequirement.toObject = function(includeInstance, msg) {
  var f, obj = {
    levelname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    levellocation: jspb.Message.getFieldWithDefault(msg, 2, ""),
    licenserequirementsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.MapEntryRequirement}
 */
proto.santiago.web.play.MapEntryRequirement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.MapEntryRequirement;
  return proto.santiago.web.play.MapEntryRequirement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.MapEntryRequirement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.MapEntryRequirement}
 */
proto.santiago.web.play.MapEntryRequirement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLevelname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLevellocation(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addLicenserequirements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.MapEntryRequirement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.MapEntryRequirement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.MapEntryRequirement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MapEntryRequirement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevelname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLevellocation();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLicenserequirementsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string levelName = 1;
 * @return {string}
 */
proto.santiago.web.play.MapEntryRequirement.prototype.getLevelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.MapEntryRequirement} returns this
 */
proto.santiago.web.play.MapEntryRequirement.prototype.setLevelname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string levelLocation = 2;
 * @return {string}
 */
proto.santiago.web.play.MapEntryRequirement.prototype.getLevellocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.MapEntryRequirement} returns this
 */
proto.santiago.web.play.MapEntryRequirement.prototype.setLevellocation = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string licenseRequirements = 3;
 * @return {!Array<string>}
 */
proto.santiago.web.play.MapEntryRequirement.prototype.getLicenserequirementsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.santiago.web.play.MapEntryRequirement} returns this
 */
proto.santiago.web.play.MapEntryRequirement.prototype.setLicenserequirementsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.MapEntryRequirement} returns this
 */
proto.santiago.web.play.MapEntryRequirement.prototype.addLicenserequirements = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.MapEntryRequirement} returns this
 */
proto.santiago.web.play.MapEntryRequirement.prototype.clearLicenserequirementsList = function() {
  return this.setLicenserequirementsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.GetProgressionTypesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.GetProgressionTypesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.GetProgressionTypesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetProgressionTypesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.GetProgressionTypesRequest}
 */
proto.santiago.web.play.GetProgressionTypesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.GetProgressionTypesRequest;
  return proto.santiago.web.play.GetProgressionTypesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.GetProgressionTypesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.GetProgressionTypesRequest}
 */
proto.santiago.web.play.GetProgressionTypesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.GetProgressionTypesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.GetProgressionTypesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.GetProgressionTypesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetProgressionTypesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.GetProgressionTypesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.GetProgressionTypesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.GetProgressionTypesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetProgressionTypesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.GetProgressionTypesResponse}
 */
proto.santiago.web.play.GetProgressionTypesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.GetProgressionTypesResponse;
  return proto.santiago.web.play.GetProgressionTypesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.GetProgressionTypesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.GetProgressionTypesResponse}
 */
proto.santiago.web.play.GetProgressionTypesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.GetProgressionTypesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.GetProgressionTypesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.GetProgressionTypesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetProgressionTypesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.UploadExperienceThumbnailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.UploadExperienceThumbnailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.UploadExperienceThumbnailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.UploadExperienceThumbnailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    image: msg.getImage_asB64(),
    mimetype: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.UploadExperienceThumbnailRequest}
 */
proto.santiago.web.play.UploadExperienceThumbnailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.UploadExperienceThumbnailRequest;
  return proto.santiago.web.play.UploadExperienceThumbnailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.UploadExperienceThumbnailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.UploadExperienceThumbnailRequest}
 */
proto.santiago.web.play.UploadExperienceThumbnailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setImage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMimetype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.UploadExperienceThumbnailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.UploadExperienceThumbnailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.UploadExperienceThumbnailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.UploadExperienceThumbnailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getMimetype();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bytes image = 1;
 * @return {!(string|Uint8Array)}
 */
proto.santiago.web.play.UploadExperienceThumbnailRequest.prototype.getImage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes image = 1;
 * This is a type-conversion wrapper around `getImage()`
 * @return {string}
 */
proto.santiago.web.play.UploadExperienceThumbnailRequest.prototype.getImage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getImage()));
};


/**
 * optional bytes image = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getImage()`
 * @return {!Uint8Array}
 */
proto.santiago.web.play.UploadExperienceThumbnailRequest.prototype.getImage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getImage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.santiago.web.play.UploadExperienceThumbnailRequest} returns this
 */
proto.santiago.web.play.UploadExperienceThumbnailRequest.prototype.setImage = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string mimeType = 2;
 * @return {string}
 */
proto.santiago.web.play.UploadExperienceThumbnailRequest.prototype.getMimetype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.UploadExperienceThumbnailRequest} returns this
 */
proto.santiago.web.play.UploadExperienceThumbnailRequest.prototype.setMimetype = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.UploadExperienceThumbnailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.UploadExperienceThumbnailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.UploadExperienceThumbnailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.UploadExperienceThumbnailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    verificationurl: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.UploadExperienceThumbnailResponse}
 */
proto.santiago.web.play.UploadExperienceThumbnailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.UploadExperienceThumbnailResponse;
  return proto.santiago.web.play.UploadExperienceThumbnailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.UploadExperienceThumbnailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.UploadExperienceThumbnailResponse}
 */
proto.santiago.web.play.UploadExperienceThumbnailResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssetid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVerificationurl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.UploadExperienceThumbnailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.UploadExperienceThumbnailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.UploadExperienceThumbnailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.UploadExperienceThumbnailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVerificationurl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string assetId = 1;
 * @return {string}
 */
proto.santiago.web.play.UploadExperienceThumbnailResponse.prototype.getAssetid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.UploadExperienceThumbnailResponse} returns this
 */
proto.santiago.web.play.UploadExperienceThumbnailResponse.prototype.setAssetid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.santiago.web.play.UploadExperienceThumbnailResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.UploadExperienceThumbnailResponse} returns this
 */
proto.santiago.web.play.UploadExperienceThumbnailResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string verificationUrl = 3;
 * @return {string}
 */
proto.santiago.web.play.UploadExperienceThumbnailResponse.prototype.getVerificationurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.UploadExperienceThumbnailResponse} returns this
 */
proto.santiago.web.play.UploadExperienceThumbnailResponse.prototype.setVerificationurl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.CreateModDataVersionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.CreateModDataVersionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.CreateModDataVersionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.CreateModDataVersionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    signedurl: jspb.Message.getFieldWithDefault(msg, 1, ""),
    validuntil: jspb.Message.getFieldWithDefault(msg, 2, 0),
    modleveldataid: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.CreateModDataVersionResponse}
 */
proto.santiago.web.play.CreateModDataVersionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.CreateModDataVersionResponse;
  return proto.santiago.web.play.CreateModDataVersionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.CreateModDataVersionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.CreateModDataVersionResponse}
 */
proto.santiago.web.play.CreateModDataVersionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignedurl(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setValiduntil(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setModleveldataid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.CreateModDataVersionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.CreateModDataVersionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.CreateModDataVersionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.CreateModDataVersionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignedurl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getModleveldataid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string signedUrl = 1;
 * @return {string}
 */
proto.santiago.web.play.CreateModDataVersionResponse.prototype.getSignedurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.CreateModDataVersionResponse} returns this
 */
proto.santiago.web.play.CreateModDataVersionResponse.prototype.setSignedurl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 validUntil = 2;
 * @return {number}
 */
proto.santiago.web.play.CreateModDataVersionResponse.prototype.getValiduntil = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.CreateModDataVersionResponse} returns this
 */
proto.santiago.web.play.CreateModDataVersionResponse.prototype.setValiduntil = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.CreateModDataVersionResponse} returns this
 */
proto.santiago.web.play.CreateModDataVersionResponse.prototype.clearValiduntil = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.CreateModDataVersionResponse.prototype.hasValiduntil = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string modLevelDataId = 3;
 * @return {string}
 */
proto.santiago.web.play.CreateModDataVersionResponse.prototype.getModleveldataid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.CreateModDataVersionResponse} returns this
 */
proto.santiago.web.play.CreateModDataVersionResponse.prototype.setModleveldataid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.CreateModDataVersionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.CreateModDataVersionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.CreateModDataVersionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.CreateModDataVersionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    playelementid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.CreateModDataVersionRequest}
 */
proto.santiago.web.play.CreateModDataVersionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.CreateModDataVersionRequest;
  return proto.santiago.web.play.CreateModDataVersionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.CreateModDataVersionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.CreateModDataVersionRequest}
 */
proto.santiago.web.play.CreateModDataVersionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayelementid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.CreateModDataVersionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.CreateModDataVersionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.CreateModDataVersionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.CreateModDataVersionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayelementid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string playElementId = 1;
 * @return {string}
 */
proto.santiago.web.play.CreateModDataVersionRequest.prototype.getPlayelementid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.CreateModDataVersionRequest} returns this
 */
proto.santiago.web.play.CreateModDataVersionRequest.prototype.setPlayelementid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.ListModDataVersionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.ListModDataVersionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.ListModDataVersionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ListModDataVersionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    playelementid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.ListModDataVersionsRequest}
 */
proto.santiago.web.play.ListModDataVersionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.ListModDataVersionsRequest;
  return proto.santiago.web.play.ListModDataVersionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.ListModDataVersionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.ListModDataVersionsRequest}
 */
proto.santiago.web.play.ListModDataVersionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayelementid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.ListModDataVersionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.ListModDataVersionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.ListModDataVersionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ListModDataVersionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayelementid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string playElementId = 1;
 * @return {string}
 */
proto.santiago.web.play.ListModDataVersionsRequest.prototype.getPlayelementid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.ListModDataVersionsRequest} returns this
 */
proto.santiago.web.play.ListModDataVersionsRequest.prototype.setPlayelementid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.ListModDataVersionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.ListModDataVersionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.ListModDataVersionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.ListModDataVersionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ListModDataVersionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    moddataversionsList: jspb.Message.toObjectList(msg.getModdataversionsList(),
    proto.santiago.web.play.ModDataVersion.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.ListModDataVersionsResponse}
 */
proto.santiago.web.play.ListModDataVersionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.ListModDataVersionsResponse;
  return proto.santiago.web.play.ListModDataVersionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.ListModDataVersionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.ListModDataVersionsResponse}
 */
proto.santiago.web.play.ListModDataVersionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.ModDataVersion;
      reader.readMessage(value,proto.santiago.web.play.ModDataVersion.deserializeBinaryFromReader);
      msg.addModdataversions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.ListModDataVersionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.ListModDataVersionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.ListModDataVersionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ListModDataVersionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModdataversionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.santiago.web.play.ModDataVersion.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ModDataVersion modDataVersions = 1;
 * @return {!Array<!proto.santiago.web.play.ModDataVersion>}
 */
proto.santiago.web.play.ListModDataVersionsResponse.prototype.getModdataversionsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.ModDataVersion>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.ModDataVersion, 1));
};


/**
 * @param {!Array<!proto.santiago.web.play.ModDataVersion>} value
 * @return {!proto.santiago.web.play.ListModDataVersionsResponse} returns this
*/
proto.santiago.web.play.ListModDataVersionsResponse.prototype.setModdataversionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.santiago.web.play.ModDataVersion=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.ModDataVersion}
 */
proto.santiago.web.play.ListModDataVersionsResponse.prototype.addModdataversions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.santiago.web.play.ModDataVersion, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.ListModDataVersionsResponse} returns this
 */
proto.santiago.web.play.ListModDataVersionsResponse.prototype.clearModdataversionsList = function() {
  return this.setModdataversionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.ModDataVersion.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.ModDataVersion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.ModDataVersion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ModDataVersion.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playelementid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    created: jspb.Message.getFieldWithDefault(msg, 3, 0),
    buildinfo: (f = msg.getBuildinfo()) && proto.santiago.web.play.ModDataVersionBuildInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.ModDataVersion}
 */
proto.santiago.web.play.ModDataVersion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.ModDataVersion;
  return proto.santiago.web.play.ModDataVersion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.ModDataVersion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.ModDataVersion}
 */
proto.santiago.web.play.ModDataVersion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayelementid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreated(value);
      break;
    case 4:
      var value = new proto.santiago.web.play.ModDataVersionBuildInfo;
      reader.readMessage(value,proto.santiago.web.play.ModDataVersionBuildInfo.deserializeBinaryFromReader);
      msg.setBuildinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.ModDataVersion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.ModDataVersion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.ModDataVersion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ModDataVersion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlayelementid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getBuildinfo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.santiago.web.play.ModDataVersionBuildInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.santiago.web.play.ModDataVersion.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.ModDataVersion} returns this
 */
proto.santiago.web.play.ModDataVersion.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string playElementId = 2;
 * @return {string}
 */
proto.santiago.web.play.ModDataVersion.prototype.getPlayelementid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.ModDataVersion} returns this
 */
proto.santiago.web.play.ModDataVersion.prototype.setPlayelementid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 created = 3;
 * @return {number}
 */
proto.santiago.web.play.ModDataVersion.prototype.getCreated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.ModDataVersion} returns this
 */
proto.santiago.web.play.ModDataVersion.prototype.setCreated = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.ModDataVersion} returns this
 */
proto.santiago.web.play.ModDataVersion.prototype.clearCreated = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.ModDataVersion.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ModDataVersionBuildInfo buildInfo = 4;
 * @return {?proto.santiago.web.play.ModDataVersionBuildInfo}
 */
proto.santiago.web.play.ModDataVersion.prototype.getBuildinfo = function() {
  return /** @type{?proto.santiago.web.play.ModDataVersionBuildInfo} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.ModDataVersionBuildInfo, 4));
};


/**
 * @param {?proto.santiago.web.play.ModDataVersionBuildInfo|undefined} value
 * @return {!proto.santiago.web.play.ModDataVersion} returns this
*/
proto.santiago.web.play.ModDataVersion.prototype.setBuildinfo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.ModDataVersion} returns this
 */
proto.santiago.web.play.ModDataVersion.prototype.clearBuildinfo = function() {
  return this.setBuildinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.ModDataVersion.prototype.hasBuildinfo = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.ModDataVersionBuildInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.ModDataVersionBuildInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.ModDataVersionBuildInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ModDataVersionBuildInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    pipelineversion: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pending: (f = msg.getPending()) && proto.santiago.web.play.Empty.toObject(includeInstance, f),
    nobuildavailable: (f = msg.getNobuildavailable()) && proto.santiago.web.play.Empty.toObject(includeInstance, f),
    error: (f = msg.getError()) && proto.santiago.web.play.BuildStatusError.toObject(includeInstance, f),
    success: (f = msg.getSuccess()) && proto.santiago.web.play.BuildStatusSuccess.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.ModDataVersionBuildInfo}
 */
proto.santiago.web.play.ModDataVersionBuildInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.ModDataVersionBuildInfo;
  return proto.santiago.web.play.ModDataVersionBuildInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.ModDataVersionBuildInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.ModDataVersionBuildInfo}
 */
proto.santiago.web.play.ModDataVersionBuildInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPipelineversion(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.Empty;
      reader.readMessage(value,proto.santiago.web.play.Empty.deserializeBinaryFromReader);
      msg.setPending(value);
      break;
    case 3:
      var value = new proto.santiago.web.play.Empty;
      reader.readMessage(value,proto.santiago.web.play.Empty.deserializeBinaryFromReader);
      msg.setNobuildavailable(value);
      break;
    case 4:
      var value = new proto.santiago.web.play.BuildStatusError;
      reader.readMessage(value,proto.santiago.web.play.BuildStatusError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 5:
      var value = new proto.santiago.web.play.BuildStatusSuccess;
      reader.readMessage(value,proto.santiago.web.play.BuildStatusSuccess.deserializeBinaryFromReader);
      msg.setSuccess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.ModDataVersionBuildInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.ModDataVersionBuildInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.ModDataVersionBuildInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ModDataVersionBuildInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPipelineversion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPending();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.santiago.web.play.Empty.serializeBinaryToWriter
    );
  }
  f = message.getNobuildavailable();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.santiago.web.play.Empty.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.santiago.web.play.BuildStatusError.serializeBinaryToWriter
    );
  }
  f = message.getSuccess();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.santiago.web.play.BuildStatusSuccess.serializeBinaryToWriter
    );
  }
};


/**
 * optional string pipelineVersion = 1;
 * @return {string}
 */
proto.santiago.web.play.ModDataVersionBuildInfo.prototype.getPipelineversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.ModDataVersionBuildInfo} returns this
 */
proto.santiago.web.play.ModDataVersionBuildInfo.prototype.setPipelineversion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Empty pending = 2;
 * @return {?proto.santiago.web.play.Empty}
 */
proto.santiago.web.play.ModDataVersionBuildInfo.prototype.getPending = function() {
  return /** @type{?proto.santiago.web.play.Empty} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.Empty, 2));
};


/**
 * @param {?proto.santiago.web.play.Empty|undefined} value
 * @return {!proto.santiago.web.play.ModDataVersionBuildInfo} returns this
*/
proto.santiago.web.play.ModDataVersionBuildInfo.prototype.setPending = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.ModDataVersionBuildInfo} returns this
 */
proto.santiago.web.play.ModDataVersionBuildInfo.prototype.clearPending = function() {
  return this.setPending(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.ModDataVersionBuildInfo.prototype.hasPending = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Empty noBuildAvailable = 3;
 * @return {?proto.santiago.web.play.Empty}
 */
proto.santiago.web.play.ModDataVersionBuildInfo.prototype.getNobuildavailable = function() {
  return /** @type{?proto.santiago.web.play.Empty} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.Empty, 3));
};


/**
 * @param {?proto.santiago.web.play.Empty|undefined} value
 * @return {!proto.santiago.web.play.ModDataVersionBuildInfo} returns this
*/
proto.santiago.web.play.ModDataVersionBuildInfo.prototype.setNobuildavailable = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.ModDataVersionBuildInfo} returns this
 */
proto.santiago.web.play.ModDataVersionBuildInfo.prototype.clearNobuildavailable = function() {
  return this.setNobuildavailable(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.ModDataVersionBuildInfo.prototype.hasNobuildavailable = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional BuildStatusError error = 4;
 * @return {?proto.santiago.web.play.BuildStatusError}
 */
proto.santiago.web.play.ModDataVersionBuildInfo.prototype.getError = function() {
  return /** @type{?proto.santiago.web.play.BuildStatusError} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.BuildStatusError, 4));
};


/**
 * @param {?proto.santiago.web.play.BuildStatusError|undefined} value
 * @return {!proto.santiago.web.play.ModDataVersionBuildInfo} returns this
*/
proto.santiago.web.play.ModDataVersionBuildInfo.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.ModDataVersionBuildInfo} returns this
 */
proto.santiago.web.play.ModDataVersionBuildInfo.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.ModDataVersionBuildInfo.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional BuildStatusSuccess success = 5;
 * @return {?proto.santiago.web.play.BuildStatusSuccess}
 */
proto.santiago.web.play.ModDataVersionBuildInfo.prototype.getSuccess = function() {
  return /** @type{?proto.santiago.web.play.BuildStatusSuccess} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.BuildStatusSuccess, 5));
};


/**
 * @param {?proto.santiago.web.play.BuildStatusSuccess|undefined} value
 * @return {!proto.santiago.web.play.ModDataVersionBuildInfo} returns this
*/
proto.santiago.web.play.ModDataVersionBuildInfo.prototype.setSuccess = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.ModDataVersionBuildInfo} returns this
 */
proto.santiago.web.play.ModDataVersionBuildInfo.prototype.clearSuccess = function() {
  return this.setSuccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.ModDataVersionBuildInfo.prototype.hasSuccess = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.BuildStatusError.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.BuildStatusError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.BuildStatusError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.BuildStatusError.toObject = function(includeInstance, msg) {
  var f, obj = {
    errormessage: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.BuildStatusError}
 */
proto.santiago.web.play.BuildStatusError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.BuildStatusError;
  return proto.santiago.web.play.BuildStatusError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.BuildStatusError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.BuildStatusError}
 */
proto.santiago.web.play.BuildStatusError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrormessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.BuildStatusError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.BuildStatusError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.BuildStatusError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.BuildStatusError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrormessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string errorMessage = 1;
 * @return {string}
 */
proto.santiago.web.play.BuildStatusError.prototype.getErrormessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.BuildStatusError} returns this
 */
proto.santiago.web.play.BuildStatusError.prototype.setErrormessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.BuildStatusSuccess.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.BuildStatusSuccess.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.BuildStatusSuccess} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.BuildStatusSuccess.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.BuildStatusSuccess}
 */
proto.santiago.web.play.BuildStatusSuccess.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.BuildStatusSuccess;
  return proto.santiago.web.play.BuildStatusSuccess.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.BuildStatusSuccess} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.BuildStatusSuccess}
 */
proto.santiago.web.play.BuildStatusSuccess.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.BuildStatusSuccess.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.BuildStatusSuccess.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.BuildStatusSuccess} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.BuildStatusSuccess.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.Empty}
 */
proto.santiago.web.play.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.Empty;
  return proto.santiago.web.play.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.Empty}
 */
proto.santiago.web.play.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.GetAvailableTagsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.GetAvailableTagsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.GetAvailableTagsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetAvailableTagsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.GetAvailableTagsRequest}
 */
proto.santiago.web.play.GetAvailableTagsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.GetAvailableTagsRequest;
  return proto.santiago.web.play.GetAvailableTagsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.GetAvailableTagsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.GetAvailableTagsRequest}
 */
proto.santiago.web.play.GetAvailableTagsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.GetAvailableTagsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.GetAvailableTagsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.GetAvailableTagsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetAvailableTagsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.GetAvailableTagsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.GetAvailableTagsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.GetAvailableTagsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetAvailableTagsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    availabletags: (f = msg.getAvailabletags()) && proto.santiago.web.play.AvailableTags.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.GetAvailableTagsResponse}
 */
proto.santiago.web.play.GetAvailableTagsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.GetAvailableTagsResponse;
  return proto.santiago.web.play.GetAvailableTagsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.GetAvailableTagsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.GetAvailableTagsResponse}
 */
proto.santiago.web.play.GetAvailableTagsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.AvailableTags;
      reader.readMessage(value,proto.santiago.web.play.AvailableTags.deserializeBinaryFromReader);
      msg.setAvailabletags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.GetAvailableTagsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.GetAvailableTagsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.GetAvailableTagsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetAvailableTagsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailabletags();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.santiago.web.play.AvailableTags.serializeBinaryToWriter
    );
  }
};


/**
 * optional AvailableTags availableTags = 1;
 * @return {?proto.santiago.web.play.AvailableTags}
 */
proto.santiago.web.play.GetAvailableTagsResponse.prototype.getAvailabletags = function() {
  return /** @type{?proto.santiago.web.play.AvailableTags} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AvailableTags, 1));
};


/**
 * @param {?proto.santiago.web.play.AvailableTags|undefined} value
 * @return {!proto.santiago.web.play.GetAvailableTagsResponse} returns this
*/
proto.santiago.web.play.GetAvailableTagsResponse.prototype.setAvailabletags = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.GetAvailableTagsResponse} returns this
 */
proto.santiago.web.play.GetAvailableTagsResponse.prototype.clearAvailabletags = function() {
  return this.setAvailabletags(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.GetAvailableTagsResponse.prototype.hasAvailabletags = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.PlayExperience.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.PlayExperience.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.PlayExperience} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.PlayExperience.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    creator: (f = msg.getCreator()) && proto.santiago.web.play.Creator.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    playelementdesign: (f = msg.getPlayelementdesign()) && proto.santiago.web.play.PlayElementDesign.toObject(includeInstance, f),
    playercount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    likes: jspb.Message.getFieldWithDefault(msg, 7, 0),
    publishat: jspb.Message.getFieldWithDefault(msg, 8, 0),
    thumbnailurl: jspb.Message.getFieldWithDefault(msg, 9, ""),
    isugc: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    shortcode: jspb.Message.getFieldWithDefault(msg, 11, ""),
    publishstate: jspb.Message.getFieldWithDefault(msg, 12, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.PlayExperience}
 */
proto.santiago.web.play.PlayExperience.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.PlayExperience;
  return proto.santiago.web.play.PlayExperience.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.PlayExperience} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.PlayExperience}
 */
proto.santiago.web.play.PlayExperience.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.Creator;
      reader.readMessage(value,proto.santiago.web.play.Creator.deserializeBinaryFromReader);
      msg.setCreator(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new proto.santiago.web.play.PlayElementDesign;
      reader.readMessage(value,proto.santiago.web.play.PlayElementDesign.deserializeBinaryFromReader);
      msg.setPlayelementdesign(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlayercount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLikes(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPublishat(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setThumbnailurl(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsugc(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortcode(value);
      break;
    case 12:
      var value = /** @type {!proto.santiago.web.play.PublishStateType} */ (reader.readEnum());
      msg.setPublishstate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.PlayExperience.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.PlayExperience.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.PlayExperience} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.PlayExperience.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreator();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.santiago.web.play.Creator.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPlayelementdesign();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.santiago.web.play.PlayElementDesign.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getIsugc();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPublishstate();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.santiago.web.play.PlayExperience.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.PlayExperience} returns this
 */
proto.santiago.web.play.PlayExperience.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Creator creator = 2;
 * @return {?proto.santiago.web.play.Creator}
 */
proto.santiago.web.play.PlayExperience.prototype.getCreator = function() {
  return /** @type{?proto.santiago.web.play.Creator} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.Creator, 2));
};


/**
 * @param {?proto.santiago.web.play.Creator|undefined} value
 * @return {!proto.santiago.web.play.PlayExperience} returns this
*/
proto.santiago.web.play.PlayExperience.prototype.setCreator = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.PlayExperience} returns this
 */
proto.santiago.web.play.PlayExperience.prototype.clearCreator = function() {
  return this.setCreator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayExperience.prototype.hasCreator = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.santiago.web.play.PlayExperience.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.PlayExperience} returns this
 */
proto.santiago.web.play.PlayExperience.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.santiago.web.play.PlayExperience.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.PlayExperience} returns this
 */
proto.santiago.web.play.PlayExperience.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.PlayExperience} returns this
 */
proto.santiago.web.play.PlayExperience.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayExperience.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PlayElementDesign playElementDesign = 5;
 * @return {?proto.santiago.web.play.PlayElementDesign}
 */
proto.santiago.web.play.PlayExperience.prototype.getPlayelementdesign = function() {
  return /** @type{?proto.santiago.web.play.PlayElementDesign} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.PlayElementDesign, 5));
};


/**
 * @param {?proto.santiago.web.play.PlayElementDesign|undefined} value
 * @return {!proto.santiago.web.play.PlayExperience} returns this
*/
proto.santiago.web.play.PlayExperience.prototype.setPlayelementdesign = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.PlayExperience} returns this
 */
proto.santiago.web.play.PlayExperience.prototype.clearPlayelementdesign = function() {
  return this.setPlayelementdesign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayExperience.prototype.hasPlayelementdesign = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 playerCount = 6;
 * @return {number}
 */
proto.santiago.web.play.PlayExperience.prototype.getPlayercount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.PlayExperience} returns this
 */
proto.santiago.web.play.PlayExperience.prototype.setPlayercount = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.PlayExperience} returns this
 */
proto.santiago.web.play.PlayExperience.prototype.clearPlayercount = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayExperience.prototype.hasPlayercount = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 likes = 7;
 * @return {number}
 */
proto.santiago.web.play.PlayExperience.prototype.getLikes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.PlayExperience} returns this
 */
proto.santiago.web.play.PlayExperience.prototype.setLikes = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.PlayExperience} returns this
 */
proto.santiago.web.play.PlayExperience.prototype.clearLikes = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayExperience.prototype.hasLikes = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint32 publishAt = 8;
 * @return {number}
 */
proto.santiago.web.play.PlayExperience.prototype.getPublishat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.PlayExperience} returns this
 */
proto.santiago.web.play.PlayExperience.prototype.setPublishat = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.PlayExperience} returns this
 */
proto.santiago.web.play.PlayExperience.prototype.clearPublishat = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayExperience.prototype.hasPublishat = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string thumbnailUrl = 9;
 * @return {string}
 */
proto.santiago.web.play.PlayExperience.prototype.getThumbnailurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.PlayExperience} returns this
 */
proto.santiago.web.play.PlayExperience.prototype.setThumbnailurl = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.PlayExperience} returns this
 */
proto.santiago.web.play.PlayExperience.prototype.clearThumbnailurl = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayExperience.prototype.hasThumbnailurl = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool isUgc = 10;
 * @return {boolean}
 */
proto.santiago.web.play.PlayExperience.prototype.getIsugc = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.santiago.web.play.PlayExperience} returns this
 */
proto.santiago.web.play.PlayExperience.prototype.setIsugc = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional string shortCode = 11;
 * @return {string}
 */
proto.santiago.web.play.PlayExperience.prototype.getShortcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.PlayExperience} returns this
 */
proto.santiago.web.play.PlayExperience.prototype.setShortcode = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.PlayExperience} returns this
 */
proto.santiago.web.play.PlayExperience.prototype.clearShortcode = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayExperience.prototype.hasShortcode = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional PublishStateType publishState = 12;
 * @return {!proto.santiago.web.play.PublishStateType}
 */
proto.santiago.web.play.PlayExperience.prototype.getPublishstate = function() {
  return /** @type {!proto.santiago.web.play.PublishStateType} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.santiago.web.play.PublishStateType} value
 * @return {!proto.santiago.web.play.PlayExperience} returns this
 */
proto.santiago.web.play.PlayExperience.prototype.setPublishstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.ListExperiencesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.ListExperiencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.ListExperiencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.ListExperiencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ListExperiencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    experiencesList: jspb.Message.toObjectList(msg.getExperiencesList(),
    proto.santiago.web.play.PlayExperience.toObject, includeInstance),
    nextpage: (f = msg.getNextpage()) && proto.santiago.web.play.Pagination.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.ListExperiencesResponse}
 */
proto.santiago.web.play.ListExperiencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.ListExperiencesResponse;
  return proto.santiago.web.play.ListExperiencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.ListExperiencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.ListExperiencesResponse}
 */
proto.santiago.web.play.ListExperiencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.PlayExperience;
      reader.readMessage(value,proto.santiago.web.play.PlayExperience.deserializeBinaryFromReader);
      msg.addExperiences(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.Pagination;
      reader.readMessage(value,proto.santiago.web.play.Pagination.deserializeBinaryFromReader);
      msg.setNextpage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.ListExperiencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.ListExperiencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.ListExperiencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ListExperiencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExperiencesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.santiago.web.play.PlayExperience.serializeBinaryToWriter
    );
  }
  f = message.getNextpage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.santiago.web.play.Pagination.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PlayExperience experiences = 1;
 * @return {!Array<!proto.santiago.web.play.PlayExperience>}
 */
proto.santiago.web.play.ListExperiencesResponse.prototype.getExperiencesList = function() {
  return /** @type{!Array<!proto.santiago.web.play.PlayExperience>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.PlayExperience, 1));
};


/**
 * @param {!Array<!proto.santiago.web.play.PlayExperience>} value
 * @return {!proto.santiago.web.play.ListExperiencesResponse} returns this
*/
proto.santiago.web.play.ListExperiencesResponse.prototype.setExperiencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.santiago.web.play.PlayExperience=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.PlayExperience}
 */
proto.santiago.web.play.ListExperiencesResponse.prototype.addExperiences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.santiago.web.play.PlayExperience, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.ListExperiencesResponse} returns this
 */
proto.santiago.web.play.ListExperiencesResponse.prototype.clearExperiencesList = function() {
  return this.setExperiencesList([]);
};


/**
 * optional Pagination nextPage = 2;
 * @return {?proto.santiago.web.play.Pagination}
 */
proto.santiago.web.play.ListExperiencesResponse.prototype.getNextpage = function() {
  return /** @type{?proto.santiago.web.play.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.Pagination, 2));
};


/**
 * @param {?proto.santiago.web.play.Pagination|undefined} value
 * @return {!proto.santiago.web.play.ListExperiencesResponse} returns this
*/
proto.santiago.web.play.ListExperiencesResponse.prototype.setNextpage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.ListExperiencesResponse} returns this
 */
proto.santiago.web.play.ListExperiencesResponse.prototype.clearNextpage = function() {
  return this.setNextpage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.ListExperiencesResponse.prototype.hasNextpage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.PlayExperienceQuery.repeatedFields_ = [1,2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.PlayExperienceQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.PlayExperienceQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.PlayExperienceQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapseqList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    levellocationseqList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    maxplayercounteqList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    tagseqList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    playercreatoreq: (f = msg.getPlayercreatoreq()) && proto.santiago.web.play.PlayerCreator.toObject(includeInstance, f),
    ordering: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pagesize: jspb.Message.getFieldWithDefault(msg, 7, 0),
    nameprefix: jspb.Message.getFieldWithDefault(msg, 8, ""),
    shortcode: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.PlayExperienceQuery}
 */
proto.santiago.web.play.PlayExperienceQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.PlayExperienceQuery;
  return proto.santiago.web.play.PlayExperienceQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.PlayExperienceQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.PlayExperienceQuery}
 */
proto.santiago.web.play.PlayExperienceQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addMapseq(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addLevellocationseq(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addMaxplayercounteq(values[i]);
      }
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTagseq(value);
      break;
    case 5:
      var value = new proto.santiago.web.play.PlayerCreator;
      reader.readMessage(value,proto.santiago.web.play.PlayerCreator.deserializeBinaryFromReader);
      msg.setPlayercreatoreq(value);
      break;
    case 6:
      var value = /** @type {!proto.santiago.web.play.ExperienceOrderBy} */ (reader.readEnum());
      msg.setOrdering(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPagesize(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setNameprefix(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.PlayExperienceQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.PlayExperienceQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.PlayExperienceQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapseqList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getLevellocationseqList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getMaxplayercounteqList();
  if (f.length > 0) {
    writer.writePackedInt32(
      3,
      f
    );
  }
  f = message.getTagseqList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getPlayercreatoreq();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.santiago.web.play.PlayerCreator.serializeBinaryToWriter
    );
  }
  f = message.getOrdering();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getPagesize();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * repeated string mapsEq = 1;
 * @return {!Array<string>}
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.getMapseqList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.santiago.web.play.PlayExperienceQuery} returns this
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.setMapseqList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.PlayExperienceQuery} returns this
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.addMapseq = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.PlayExperienceQuery} returns this
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.clearMapseqList = function() {
  return this.setMapseqList([]);
};


/**
 * repeated string levelLocationsEq = 2;
 * @return {!Array<string>}
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.getLevellocationseqList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.santiago.web.play.PlayExperienceQuery} returns this
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.setLevellocationseqList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.PlayExperienceQuery} returns this
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.addLevellocationseq = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.PlayExperienceQuery} returns this
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.clearLevellocationseqList = function() {
  return this.setLevellocationseqList([]);
};


/**
 * repeated int32 maxPlayerCountEq = 3;
 * @return {!Array<number>}
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.getMaxplayercounteqList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.santiago.web.play.PlayExperienceQuery} returns this
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.setMaxplayercounteqList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.PlayExperienceQuery} returns this
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.addMaxplayercounteq = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.PlayExperienceQuery} returns this
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.clearMaxplayercounteqList = function() {
  return this.setMaxplayercounteqList([]);
};


/**
 * repeated string tagsEq = 4;
 * @return {!Array<string>}
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.getTagseqList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.santiago.web.play.PlayExperienceQuery} returns this
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.setTagseqList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.PlayExperienceQuery} returns this
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.addTagseq = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.PlayExperienceQuery} returns this
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.clearTagseqList = function() {
  return this.setTagseqList([]);
};


/**
 * optional PlayerCreator playerCreatorEq = 5;
 * @return {?proto.santiago.web.play.PlayerCreator}
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.getPlayercreatoreq = function() {
  return /** @type{?proto.santiago.web.play.PlayerCreator} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.PlayerCreator, 5));
};


/**
 * @param {?proto.santiago.web.play.PlayerCreator|undefined} value
 * @return {!proto.santiago.web.play.PlayExperienceQuery} returns this
*/
proto.santiago.web.play.PlayExperienceQuery.prototype.setPlayercreatoreq = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.PlayExperienceQuery} returns this
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.clearPlayercreatoreq = function() {
  return this.setPlayercreatoreq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.hasPlayercreatoreq = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ExperienceOrderBy ordering = 6;
 * @return {!proto.santiago.web.play.ExperienceOrderBy}
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.getOrdering = function() {
  return /** @type {!proto.santiago.web.play.ExperienceOrderBy} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.santiago.web.play.ExperienceOrderBy} value
 * @return {!proto.santiago.web.play.PlayExperienceQuery} returns this
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.setOrdering = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional int32 pageSize = 7;
 * @return {number}
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.getPagesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.PlayExperienceQuery} returns this
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.setPagesize = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string namePrefix = 8;
 * @return {string}
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.getNameprefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.PlayExperienceQuery} returns this
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.setNameprefix = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.PlayExperienceQuery} returns this
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.clearNameprefix = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.hasNameprefix = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string shortCode = 9;
 * @return {string}
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.getShortcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.PlayExperienceQuery} returns this
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.setShortcode = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.PlayExperienceQuery} returns this
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.clearShortcode = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayExperienceQuery.prototype.hasShortcode = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.ListExperiencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.ListExperiencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.ListExperiencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ListExperiencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.santiago.web.play.PlayExperienceQuery.toObject(includeInstance, f),
    page: (f = msg.getPage()) && proto.santiago.web.play.Pagination.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.ListExperiencesRequest}
 */
proto.santiago.web.play.ListExperiencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.ListExperiencesRequest;
  return proto.santiago.web.play.ListExperiencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.ListExperiencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.ListExperiencesRequest}
 */
proto.santiago.web.play.ListExperiencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.PlayExperienceQuery;
      reader.readMessage(value,proto.santiago.web.play.PlayExperienceQuery.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.Pagination;
      reader.readMessage(value,proto.santiago.web.play.Pagination.deserializeBinaryFromReader);
      msg.setPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.ListExperiencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.ListExperiencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.ListExperiencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ListExperiencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.santiago.web.play.PlayExperienceQuery.serializeBinaryToWriter
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.santiago.web.play.Pagination.serializeBinaryToWriter
    );
  }
};


/**
 * optional PlayExperienceQuery filter = 1;
 * @return {?proto.santiago.web.play.PlayExperienceQuery}
 */
proto.santiago.web.play.ListExperiencesRequest.prototype.getFilter = function() {
  return /** @type{?proto.santiago.web.play.PlayExperienceQuery} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.PlayExperienceQuery, 1));
};


/**
 * @param {?proto.santiago.web.play.PlayExperienceQuery|undefined} value
 * @return {!proto.santiago.web.play.ListExperiencesRequest} returns this
*/
proto.santiago.web.play.ListExperiencesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.ListExperiencesRequest} returns this
 */
proto.santiago.web.play.ListExperiencesRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.ListExperiencesRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Pagination page = 2;
 * @return {?proto.santiago.web.play.Pagination}
 */
proto.santiago.web.play.ListExperiencesRequest.prototype.getPage = function() {
  return /** @type{?proto.santiago.web.play.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.Pagination, 2));
};


/**
 * @param {?proto.santiago.web.play.Pagination|undefined} value
 * @return {!proto.santiago.web.play.ListExperiencesRequest} returns this
*/
proto.santiago.web.play.ListExperiencesRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.ListExperiencesRequest} returns this
 */
proto.santiago.web.play.ListExperiencesRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.ListExperiencesRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.Pagination.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.Pagination.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.Pagination} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Pagination.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagenumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.Pagination}
 */
proto.santiago.web.play.Pagination.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.Pagination;
  return proto.santiago.web.play.Pagination.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.Pagination} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.Pagination}
 */
proto.santiago.web.play.Pagination.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPagenumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.Pagination.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.Pagination.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.Pagination} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Pagination.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 pageNumber = 1;
 * @return {number}
 */
proto.santiago.web.play.Pagination.prototype.getPagenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.Pagination} returns this
 */
proto.santiago.web.play.Pagination.prototype.setPagenumber = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.Pagination} returns this
 */
proto.santiago.web.play.Pagination.prototype.clearPagenumber = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.Pagination.prototype.hasPagenumber = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.santiago.web.play.Pagination.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.Pagination} returns this
 */
proto.santiago.web.play.Pagination.prototype.setToken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.Pagination} returns this
 */
proto.santiago.web.play.Pagination.prototype.clearToken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.Pagination.prototype.hasToken = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.DeletePlayElementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.DeletePlayElementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.DeletePlayElementRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.DeletePlayElementRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    playelementid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.DeletePlayElementRequest}
 */
proto.santiago.web.play.DeletePlayElementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.DeletePlayElementRequest;
  return proto.santiago.web.play.DeletePlayElementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.DeletePlayElementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.DeletePlayElementRequest}
 */
proto.santiago.web.play.DeletePlayElementRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayelementid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.DeletePlayElementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.DeletePlayElementRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.DeletePlayElementRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.DeletePlayElementRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayelementid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string playElementId = 1;
 * @return {string}
 */
proto.santiago.web.play.DeletePlayElementRequest.prototype.getPlayelementid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.DeletePlayElementRequest} returns this
 */
proto.santiago.web.play.DeletePlayElementRequest.prototype.setPlayelementid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.GetScheduledBlueprintsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.GetScheduledBlueprintsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.GetScheduledBlueprintsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.GetScheduledBlueprintsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetScheduledBlueprintsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blueprintidsList: jspb.Message.toObjectList(msg.getBlueprintidsList(),
    proto.santiago.web.play.BlueprintId.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.GetScheduledBlueprintsResponse}
 */
proto.santiago.web.play.GetScheduledBlueprintsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.GetScheduledBlueprintsResponse;
  return proto.santiago.web.play.GetScheduledBlueprintsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.GetScheduledBlueprintsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.GetScheduledBlueprintsResponse}
 */
proto.santiago.web.play.GetScheduledBlueprintsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.BlueprintId;
      reader.readMessage(value,proto.santiago.web.play.BlueprintId.deserializeBinaryFromReader);
      msg.addBlueprintids(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.GetScheduledBlueprintsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.GetScheduledBlueprintsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.GetScheduledBlueprintsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetScheduledBlueprintsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlueprintidsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.santiago.web.play.BlueprintId.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BlueprintId blueprintIds = 1;
 * @return {!Array<!proto.santiago.web.play.BlueprintId>}
 */
proto.santiago.web.play.GetScheduledBlueprintsResponse.prototype.getBlueprintidsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.BlueprintId>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.BlueprintId, 1));
};


/**
 * @param {!Array<!proto.santiago.web.play.BlueprintId>} value
 * @return {!proto.santiago.web.play.GetScheduledBlueprintsResponse} returns this
*/
proto.santiago.web.play.GetScheduledBlueprintsResponse.prototype.setBlueprintidsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.santiago.web.play.BlueprintId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.BlueprintId}
 */
proto.santiago.web.play.GetScheduledBlueprintsResponse.prototype.addBlueprintids = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.santiago.web.play.BlueprintId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.GetScheduledBlueprintsResponse} returns this
 */
proto.santiago.web.play.GetScheduledBlueprintsResponse.prototype.clearBlueprintidsList = function() {
  return this.setBlueprintidsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.DeletePlayElementResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.DeletePlayElementResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.DeletePlayElementResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.DeletePlayElementResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.DeletePlayElementResponse}
 */
proto.santiago.web.play.DeletePlayElementResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.DeletePlayElementResponse;
  return proto.santiago.web.play.DeletePlayElementResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.DeletePlayElementResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.DeletePlayElementResponse}
 */
proto.santiago.web.play.DeletePlayElementResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.DeletePlayElementResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.DeletePlayElementResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.DeletePlayElementResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.DeletePlayElementResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.GetBlueprintsByIdRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.GetBlueprintsByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.GetBlueprintsByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.GetBlueprintsByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetBlueprintsByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blueprintidsList: jspb.Message.toObjectList(msg.getBlueprintidsList(),
    proto.santiago.web.play.BlueprintId.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.GetBlueprintsByIdRequest}
 */
proto.santiago.web.play.GetBlueprintsByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.GetBlueprintsByIdRequest;
  return proto.santiago.web.play.GetBlueprintsByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.GetBlueprintsByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.GetBlueprintsByIdRequest}
 */
proto.santiago.web.play.GetBlueprintsByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.BlueprintId;
      reader.readMessage(value,proto.santiago.web.play.BlueprintId.deserializeBinaryFromReader);
      msg.addBlueprintids(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.GetBlueprintsByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.GetBlueprintsByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.GetBlueprintsByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetBlueprintsByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlueprintidsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.santiago.web.play.BlueprintId.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BlueprintId blueprintIds = 1;
 * @return {!Array<!proto.santiago.web.play.BlueprintId>}
 */
proto.santiago.web.play.GetBlueprintsByIdRequest.prototype.getBlueprintidsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.BlueprintId>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.BlueprintId, 1));
};


/**
 * @param {!Array<!proto.santiago.web.play.BlueprintId>} value
 * @return {!proto.santiago.web.play.GetBlueprintsByIdRequest} returns this
*/
proto.santiago.web.play.GetBlueprintsByIdRequest.prototype.setBlueprintidsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.santiago.web.play.BlueprintId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.BlueprintId}
 */
proto.santiago.web.play.GetBlueprintsByIdRequest.prototype.addBlueprintids = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.santiago.web.play.BlueprintId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.GetBlueprintsByIdRequest} returns this
 */
proto.santiago.web.play.GetBlueprintsByIdRequest.prototype.clearBlueprintidsList = function() {
  return this.setBlueprintidsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.BlueprintId.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.BlueprintId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.BlueprintId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.BlueprintId.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.BlueprintId}
 */
proto.santiago.web.play.BlueprintId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.BlueprintId;
  return proto.santiago.web.play.BlueprintId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.BlueprintId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.BlueprintId}
 */
proto.santiago.web.play.BlueprintId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.BlueprintId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.BlueprintId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.BlueprintId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.BlueprintId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.santiago.web.play.BlueprintId.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.BlueprintId} returns this
 */
proto.santiago.web.play.BlueprintId.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.santiago.web.play.BlueprintId.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.BlueprintId} returns this
 */
proto.santiago.web.play.BlueprintId.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.GetBlueprintsByIdResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.GetBlueprintsByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.GetBlueprintsByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.GetBlueprintsByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetBlueprintsByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blueprintsList: jspb.Message.toObjectList(msg.getBlueprintsList(),
    proto.santiago.web.play.Blueprint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.GetBlueprintsByIdResponse}
 */
proto.santiago.web.play.GetBlueprintsByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.GetBlueprintsByIdResponse;
  return proto.santiago.web.play.GetBlueprintsByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.GetBlueprintsByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.GetBlueprintsByIdResponse}
 */
proto.santiago.web.play.GetBlueprintsByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.Blueprint;
      reader.readMessage(value,proto.santiago.web.play.Blueprint.deserializeBinaryFromReader);
      msg.addBlueprints(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.GetBlueprintsByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.GetBlueprintsByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.GetBlueprintsByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetBlueprintsByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlueprintsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.santiago.web.play.Blueprint.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Blueprint blueprints = 1;
 * @return {!Array<!proto.santiago.web.play.Blueprint>}
 */
proto.santiago.web.play.GetBlueprintsByIdResponse.prototype.getBlueprintsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.Blueprint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.Blueprint, 1));
};


/**
 * @param {!Array<!proto.santiago.web.play.Blueprint>} value
 * @return {!proto.santiago.web.play.GetBlueprintsByIdResponse} returns this
*/
proto.santiago.web.play.GetBlueprintsByIdResponse.prototype.setBlueprintsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.santiago.web.play.Blueprint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.Blueprint}
 */
proto.santiago.web.play.GetBlueprintsByIdResponse.prototype.addBlueprints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.santiago.web.play.Blueprint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.GetBlueprintsByIdResponse} returns this
 */
proto.santiago.web.play.GetBlueprintsByIdResponse.prototype.clearBlueprintsList = function() {
  return this.setBlueprintsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.GetScheduledBlueprintsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.GetScheduledBlueprintsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.GetScheduledBlueprintsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetScheduledBlueprintsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.GetScheduledBlueprintsRequest}
 */
proto.santiago.web.play.GetScheduledBlueprintsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.GetScheduledBlueprintsRequest;
  return proto.santiago.web.play.GetScheduledBlueprintsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.GetScheduledBlueprintsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.GetScheduledBlueprintsRequest}
 */
proto.santiago.web.play.GetScheduledBlueprintsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.GetScheduledBlueprintsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.GetScheduledBlueprintsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.GetScheduledBlueprintsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetScheduledBlueprintsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.Blueprint.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.Blueprint.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.Blueprint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.Blueprint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Blueprint.toObject = function(includeInstance, msg) {
  var f, obj = {
    blueprintid: (f = msg.getBlueprintid()) && proto.santiago.web.play.BlueprintId.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    availablegamedata: (f = msg.getAvailablegamedata()) && proto.santiago.web.play.AvailableGameData.toObject(includeInstance, f),
    availabletags: (f = msg.getAvailabletags()) && proto.santiago.web.play.AvailableTags.toObject(includeInstance, f),
    availablethumbnailurlsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    availableprogressionmodetags: (f = msg.getAvailableprogressionmodetags()) && proto.santiago.web.play.AvailableTags.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.Blueprint}
 */
proto.santiago.web.play.Blueprint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.Blueprint;
  return proto.santiago.web.play.Blueprint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.Blueprint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.Blueprint}
 */
proto.santiago.web.play.Blueprint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.BlueprintId;
      reader.readMessage(value,proto.santiago.web.play.BlueprintId.deserializeBinaryFromReader);
      msg.setBlueprintid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.santiago.web.play.AvailableGameData;
      reader.readMessage(value,proto.santiago.web.play.AvailableGameData.deserializeBinaryFromReader);
      msg.setAvailablegamedata(value);
      break;
    case 4:
      var value = new proto.santiago.web.play.AvailableTags;
      reader.readMessage(value,proto.santiago.web.play.AvailableTags.deserializeBinaryFromReader);
      msg.setAvailabletags(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addAvailablethumbnailurls(value);
      break;
    case 6:
      var value = new proto.santiago.web.play.AvailableTags;
      reader.readMessage(value,proto.santiago.web.play.AvailableTags.deserializeBinaryFromReader);
      msg.setAvailableprogressionmodetags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.Blueprint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.Blueprint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.Blueprint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Blueprint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlueprintid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.santiago.web.play.BlueprintId.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAvailablegamedata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.santiago.web.play.AvailableGameData.serializeBinaryToWriter
    );
  }
  f = message.getAvailabletags();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.santiago.web.play.AvailableTags.serializeBinaryToWriter
    );
  }
  f = message.getAvailablethumbnailurlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getAvailableprogressionmodetags();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.santiago.web.play.AvailableTags.serializeBinaryToWriter
    );
  }
};


/**
 * optional BlueprintId blueprintId = 1;
 * @return {?proto.santiago.web.play.BlueprintId}
 */
proto.santiago.web.play.Blueprint.prototype.getBlueprintid = function() {
  return /** @type{?proto.santiago.web.play.BlueprintId} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.BlueprintId, 1));
};


/**
 * @param {?proto.santiago.web.play.BlueprintId|undefined} value
 * @return {!proto.santiago.web.play.Blueprint} returns this
*/
proto.santiago.web.play.Blueprint.prototype.setBlueprintid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.Blueprint} returns this
 */
proto.santiago.web.play.Blueprint.prototype.clearBlueprintid = function() {
  return this.setBlueprintid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.Blueprint.prototype.hasBlueprintid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.santiago.web.play.Blueprint.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.Blueprint} returns this
 */
proto.santiago.web.play.Blueprint.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional AvailableGameData availableGameData = 3;
 * @return {?proto.santiago.web.play.AvailableGameData}
 */
proto.santiago.web.play.Blueprint.prototype.getAvailablegamedata = function() {
  return /** @type{?proto.santiago.web.play.AvailableGameData} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AvailableGameData, 3));
};


/**
 * @param {?proto.santiago.web.play.AvailableGameData|undefined} value
 * @return {!proto.santiago.web.play.Blueprint} returns this
*/
proto.santiago.web.play.Blueprint.prototype.setAvailablegamedata = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.Blueprint} returns this
 */
proto.santiago.web.play.Blueprint.prototype.clearAvailablegamedata = function() {
  return this.setAvailablegamedata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.Blueprint.prototype.hasAvailablegamedata = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AvailableTags availableTags = 4;
 * @return {?proto.santiago.web.play.AvailableTags}
 */
proto.santiago.web.play.Blueprint.prototype.getAvailabletags = function() {
  return /** @type{?proto.santiago.web.play.AvailableTags} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AvailableTags, 4));
};


/**
 * @param {?proto.santiago.web.play.AvailableTags|undefined} value
 * @return {!proto.santiago.web.play.Blueprint} returns this
*/
proto.santiago.web.play.Blueprint.prototype.setAvailabletags = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.Blueprint} returns this
 */
proto.santiago.web.play.Blueprint.prototype.clearAvailabletags = function() {
  return this.setAvailabletags(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.Blueprint.prototype.hasAvailabletags = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string availableThumbnailUrls = 5;
 * @return {!Array<string>}
 */
proto.santiago.web.play.Blueprint.prototype.getAvailablethumbnailurlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.santiago.web.play.Blueprint} returns this
 */
proto.santiago.web.play.Blueprint.prototype.setAvailablethumbnailurlsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.Blueprint} returns this
 */
proto.santiago.web.play.Blueprint.prototype.addAvailablethumbnailurls = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.Blueprint} returns this
 */
proto.santiago.web.play.Blueprint.prototype.clearAvailablethumbnailurlsList = function() {
  return this.setAvailablethumbnailurlsList([]);
};


/**
 * optional AvailableTags availableProgressionModeTags = 6;
 * @return {?proto.santiago.web.play.AvailableTags}
 */
proto.santiago.web.play.Blueprint.prototype.getAvailableprogressionmodetags = function() {
  return /** @type{?proto.santiago.web.play.AvailableTags} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AvailableTags, 6));
};


/**
 * @param {?proto.santiago.web.play.AvailableTags|undefined} value
 * @return {!proto.santiago.web.play.Blueprint} returns this
*/
proto.santiago.web.play.Blueprint.prototype.setAvailableprogressionmodetags = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.Blueprint} returns this
 */
proto.santiago.web.play.Blueprint.prototype.clearAvailableprogressionmodetags = function() {
  return this.setAvailableprogressionmodetags(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.Blueprint.prototype.hasAvailableprogressionmodetags = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.AvailableGameData.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.AvailableGameData.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.AvailableGameData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.AvailableGameData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableGameData.toObject = function(includeInstance, msg) {
  var f, obj = {
    mutatorsList: jspb.Message.toObjectList(msg.getMutatorsList(),
    proto.santiago.web.play.AvailableMutator.toObject, includeInstance),
    mapsList: jspb.Message.toObjectList(msg.getMapsList(),
    proto.santiago.web.play.AvailableMapEntry.toObject, includeInstance),
    modrules: (f = msg.getModrules()) && proto.santiago.web.play.ModRulesDefinition.toObject(includeInstance, f),
    assetcategories: (f = msg.getAssetcategories()) && proto.santiago.web.play.AvailableAssetCategories.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.AvailableGameData}
 */
proto.santiago.web.play.AvailableGameData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.AvailableGameData;
  return proto.santiago.web.play.AvailableGameData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.AvailableGameData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.AvailableGameData}
 */
proto.santiago.web.play.AvailableGameData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.AvailableMutator;
      reader.readMessage(value,proto.santiago.web.play.AvailableMutator.deserializeBinaryFromReader);
      msg.addMutators(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.AvailableMapEntry;
      reader.readMessage(value,proto.santiago.web.play.AvailableMapEntry.deserializeBinaryFromReader);
      msg.addMaps(value);
      break;
    case 3:
      var value = new proto.santiago.web.play.ModRulesDefinition;
      reader.readMessage(value,proto.santiago.web.play.ModRulesDefinition.deserializeBinaryFromReader);
      msg.setModrules(value);
      break;
    case 4:
      var value = new proto.santiago.web.play.AvailableAssetCategories;
      reader.readMessage(value,proto.santiago.web.play.AvailableAssetCategories.deserializeBinaryFromReader);
      msg.setAssetcategories(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AvailableGameData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.AvailableGameData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.AvailableGameData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableGameData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMutatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.santiago.web.play.AvailableMutator.serializeBinaryToWriter
    );
  }
  f = message.getMapsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.santiago.web.play.AvailableMapEntry.serializeBinaryToWriter
    );
  }
  f = message.getModrules();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.santiago.web.play.ModRulesDefinition.serializeBinaryToWriter
    );
  }
  f = message.getAssetcategories();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.santiago.web.play.AvailableAssetCategories.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AvailableMutator mutators = 1;
 * @return {!Array<!proto.santiago.web.play.AvailableMutator>}
 */
proto.santiago.web.play.AvailableGameData.prototype.getMutatorsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.AvailableMutator>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.AvailableMutator, 1));
};


/**
 * @param {!Array<!proto.santiago.web.play.AvailableMutator>} value
 * @return {!proto.santiago.web.play.AvailableGameData} returns this
*/
proto.santiago.web.play.AvailableGameData.prototype.setMutatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.santiago.web.play.AvailableMutator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.AvailableMutator}
 */
proto.santiago.web.play.AvailableGameData.prototype.addMutators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.santiago.web.play.AvailableMutator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.AvailableGameData} returns this
 */
proto.santiago.web.play.AvailableGameData.prototype.clearMutatorsList = function() {
  return this.setMutatorsList([]);
};


/**
 * repeated AvailableMapEntry maps = 2;
 * @return {!Array<!proto.santiago.web.play.AvailableMapEntry>}
 */
proto.santiago.web.play.AvailableGameData.prototype.getMapsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.AvailableMapEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.AvailableMapEntry, 2));
};


/**
 * @param {!Array<!proto.santiago.web.play.AvailableMapEntry>} value
 * @return {!proto.santiago.web.play.AvailableGameData} returns this
*/
proto.santiago.web.play.AvailableGameData.prototype.setMapsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.santiago.web.play.AvailableMapEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.AvailableMapEntry}
 */
proto.santiago.web.play.AvailableGameData.prototype.addMaps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.santiago.web.play.AvailableMapEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.AvailableGameData} returns this
 */
proto.santiago.web.play.AvailableGameData.prototype.clearMapsList = function() {
  return this.setMapsList([]);
};


/**
 * optional ModRulesDefinition modRules = 3;
 * @return {?proto.santiago.web.play.ModRulesDefinition}
 */
proto.santiago.web.play.AvailableGameData.prototype.getModrules = function() {
  return /** @type{?proto.santiago.web.play.ModRulesDefinition} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.ModRulesDefinition, 3));
};


/**
 * @param {?proto.santiago.web.play.ModRulesDefinition|undefined} value
 * @return {!proto.santiago.web.play.AvailableGameData} returns this
*/
proto.santiago.web.play.AvailableGameData.prototype.setModrules = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableGameData} returns this
 */
proto.santiago.web.play.AvailableGameData.prototype.clearModrules = function() {
  return this.setModrules(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableGameData.prototype.hasModrules = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AvailableAssetCategories assetCategories = 4;
 * @return {?proto.santiago.web.play.AvailableAssetCategories}
 */
proto.santiago.web.play.AvailableGameData.prototype.getAssetcategories = function() {
  return /** @type{?proto.santiago.web.play.AvailableAssetCategories} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AvailableAssetCategories, 4));
};


/**
 * @param {?proto.santiago.web.play.AvailableAssetCategories|undefined} value
 * @return {!proto.santiago.web.play.AvailableGameData} returns this
*/
proto.santiago.web.play.AvailableGameData.prototype.setAssetcategories = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableGameData} returns this
 */
proto.santiago.web.play.AvailableGameData.prototype.clearAssetcategories = function() {
  return this.setAssetcategories(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableGameData.prototype.hasAssetcategories = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.AvailableAssetCategories.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.AvailableAssetCategories.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.AvailableAssetCategories.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.AvailableAssetCategories} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableAssetCategories.toObject = function(includeInstance, msg) {
  var f, obj = {
    roottagsList: jspb.Message.toObjectList(msg.getRoottagsList(),
    proto.santiago.web.play.AvailableAssetCategoryTag.toObject, includeInstance),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    proto.santiago.web.play.AvailableAssetCategoryTag.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.AvailableAssetCategories}
 */
proto.santiago.web.play.AvailableAssetCategories.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.AvailableAssetCategories;
  return proto.santiago.web.play.AvailableAssetCategories.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.AvailableAssetCategories} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.AvailableAssetCategories}
 */
proto.santiago.web.play.AvailableAssetCategories.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.AvailableAssetCategoryTag;
      reader.readMessage(value,proto.santiago.web.play.AvailableAssetCategoryTag.deserializeBinaryFromReader);
      msg.addRoottags(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.AvailableAssetCategoryTag;
      reader.readMessage(value,proto.santiago.web.play.AvailableAssetCategoryTag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AvailableAssetCategories.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.AvailableAssetCategories.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.AvailableAssetCategories} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableAssetCategories.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoottagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.santiago.web.play.AvailableAssetCategoryTag.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.santiago.web.play.AvailableAssetCategoryTag.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AvailableAssetCategoryTag rootTags = 1;
 * @return {!Array<!proto.santiago.web.play.AvailableAssetCategoryTag>}
 */
proto.santiago.web.play.AvailableAssetCategories.prototype.getRoottagsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.AvailableAssetCategoryTag>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.AvailableAssetCategoryTag, 1));
};


/**
 * @param {!Array<!proto.santiago.web.play.AvailableAssetCategoryTag>} value
 * @return {!proto.santiago.web.play.AvailableAssetCategories} returns this
*/
proto.santiago.web.play.AvailableAssetCategories.prototype.setRoottagsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.santiago.web.play.AvailableAssetCategoryTag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.AvailableAssetCategoryTag}
 */
proto.santiago.web.play.AvailableAssetCategories.prototype.addRoottags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.santiago.web.play.AvailableAssetCategoryTag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.AvailableAssetCategories} returns this
 */
proto.santiago.web.play.AvailableAssetCategories.prototype.clearRoottagsList = function() {
  return this.setRoottagsList([]);
};


/**
 * repeated AvailableAssetCategoryTag tags = 2;
 * @return {!Array<!proto.santiago.web.play.AvailableAssetCategoryTag>}
 */
proto.santiago.web.play.AvailableAssetCategories.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.AvailableAssetCategoryTag>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.AvailableAssetCategoryTag, 2));
};


/**
 * @param {!Array<!proto.santiago.web.play.AvailableAssetCategoryTag>} value
 * @return {!proto.santiago.web.play.AvailableAssetCategories} returns this
*/
proto.santiago.web.play.AvailableAssetCategories.prototype.setTagsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.santiago.web.play.AvailableAssetCategoryTag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.AvailableAssetCategoryTag}
 */
proto.santiago.web.play.AvailableAssetCategories.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.santiago.web.play.AvailableAssetCategoryTag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.AvailableAssetCategories} returns this
 */
proto.santiago.web.play.AvailableAssetCategories.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.AvailableAssetCategoryTag.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.AvailableAssetCategoryTag.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.AvailableAssetCategoryTag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.AvailableAssetCategoryTag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableAssetCategoryTag.toObject = function(includeInstance, msg) {
  var f, obj = {
    tagid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    childrentagsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    metadata: (f = msg.getMetadata()) && proto.santiago.web.play.Metadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.AvailableAssetCategoryTag}
 */
proto.santiago.web.play.AvailableAssetCategoryTag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.AvailableAssetCategoryTag;
  return proto.santiago.web.play.AvailableAssetCategoryTag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.AvailableAssetCategoryTag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.AvailableAssetCategoryTag}
 */
proto.santiago.web.play.AvailableAssetCategoryTag.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTagid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addChildrentags(value);
      break;
    case 4:
      var value = new proto.santiago.web.play.Metadata;
      reader.readMessage(value,proto.santiago.web.play.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AvailableAssetCategoryTag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.AvailableAssetCategoryTag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.AvailableAssetCategoryTag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableAssetCategoryTag.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTagid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChildrentagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.santiago.web.play.Metadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tagId = 1;
 * @return {string}
 */
proto.santiago.web.play.AvailableAssetCategoryTag.prototype.getTagid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.AvailableAssetCategoryTag} returns this
 */
proto.santiago.web.play.AvailableAssetCategoryTag.prototype.setTagid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.santiago.web.play.AvailableAssetCategoryTag.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.AvailableAssetCategoryTag} returns this
 */
proto.santiago.web.play.AvailableAssetCategoryTag.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string childrenTags = 3;
 * @return {!Array<string>}
 */
proto.santiago.web.play.AvailableAssetCategoryTag.prototype.getChildrentagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.santiago.web.play.AvailableAssetCategoryTag} returns this
 */
proto.santiago.web.play.AvailableAssetCategoryTag.prototype.setChildrentagsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.AvailableAssetCategoryTag} returns this
 */
proto.santiago.web.play.AvailableAssetCategoryTag.prototype.addChildrentags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.AvailableAssetCategoryTag} returns this
 */
proto.santiago.web.play.AvailableAssetCategoryTag.prototype.clearChildrentagsList = function() {
  return this.setChildrentagsList([]);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.santiago.web.play.Metadata}
 */
proto.santiago.web.play.AvailableAssetCategoryTag.prototype.getMetadata = function() {
  return /** @type{?proto.santiago.web.play.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.Metadata, 4));
};


/**
 * @param {?proto.santiago.web.play.Metadata|undefined} value
 * @return {!proto.santiago.web.play.AvailableAssetCategoryTag} returns this
*/
proto.santiago.web.play.AvailableAssetCategoryTag.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableAssetCategoryTag} returns this
 */
proto.santiago.web.play.AvailableAssetCategoryTag.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableAssetCategoryTag.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.ModRulesDefinition.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.ModRulesDefinition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.ModRulesDefinition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ModRulesDefinition.toObject = function(includeInstance, msg) {
  var f, obj = {
    rulesversion: jspb.Message.getFieldWithDefault(msg, 1, 0),
    modbuilder: msg.getModbuilder_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.ModRulesDefinition}
 */
proto.santiago.web.play.ModRulesDefinition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.ModRulesDefinition;
  return proto.santiago.web.play.ModRulesDefinition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.ModRulesDefinition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.ModRulesDefinition}
 */
proto.santiago.web.play.ModRulesDefinition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRulesversion(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setModbuilder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.ModRulesDefinition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.ModRulesDefinition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.ModRulesDefinition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ModRulesDefinition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRulesversion();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getModbuilder_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional int32 rulesVersion = 1;
 * @return {number}
 */
proto.santiago.web.play.ModRulesDefinition.prototype.getRulesversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.ModRulesDefinition} returns this
 */
proto.santiago.web.play.ModRulesDefinition.prototype.setRulesversion = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes modBuilder = 2;
 * @return {!(string|Uint8Array)}
 */
proto.santiago.web.play.ModRulesDefinition.prototype.getModbuilder = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes modBuilder = 2;
 * This is a type-conversion wrapper around `getModbuilder()`
 * @return {string}
 */
proto.santiago.web.play.ModRulesDefinition.prototype.getModbuilder_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getModbuilder()));
};


/**
 * optional bytes modBuilder = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getModbuilder()`
 * @return {!Uint8Array}
 */
proto.santiago.web.play.ModRulesDefinition.prototype.getModbuilder_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getModbuilder()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.santiago.web.play.ModRulesDefinition} returns this
 */
proto.santiago.web.play.ModRulesDefinition.prototype.setModbuilder = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.AvailableTag.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.AvailableTag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.AvailableTag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableTag.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    metadata: (f = msg.getMetadata()) && proto.santiago.web.play.Metadata.toObject(includeInstance, f),
    category: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.AvailableTag}
 */
proto.santiago.web.play.AvailableTag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.AvailableTag;
  return proto.santiago.web.play.AvailableTag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.AvailableTag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.AvailableTag}
 */
proto.santiago.web.play.AvailableTag.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.Metadata;
      reader.readMessage(value,proto.santiago.web.play.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AvailableTag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.AvailableTag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.AvailableTag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableTag.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.santiago.web.play.Metadata.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.santiago.web.play.AvailableTag.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.AvailableTag} returns this
 */
proto.santiago.web.play.AvailableTag.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Metadata metadata = 2;
 * @return {?proto.santiago.web.play.Metadata}
 */
proto.santiago.web.play.AvailableTag.prototype.getMetadata = function() {
  return /** @type{?proto.santiago.web.play.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.Metadata, 2));
};


/**
 * @param {?proto.santiago.web.play.Metadata|undefined} value
 * @return {!proto.santiago.web.play.AvailableTag} returns this
*/
proto.santiago.web.play.AvailableTag.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableTag} returns this
 */
proto.santiago.web.play.AvailableTag.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableTag.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string category = 3;
 * @return {string}
 */
proto.santiago.web.play.AvailableTag.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.AvailableTag} returns this
 */
proto.santiago.web.play.AvailableTag.prototype.setCategory = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.AvailableTag} returns this
 */
proto.santiago.web.play.AvailableTag.prototype.clearCategory = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableTag.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.AvailableMapEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.AvailableMapEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.AvailableMapEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableMapEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    levelname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    levellocation: jspb.Message.getFieldWithDefault(msg, 2, ""),
    gamesize: (f = msg.getGamesize()) && proto.santiago.web.play.AvailableIntValue.toObject(includeInstance, f),
    rounds: (f = msg.getRounds()) && proto.santiago.web.play.AvailableIntValue.toObject(includeInstance, f),
    allowedspectators: (f = msg.getAllowedspectators()) && proto.santiago.web.play.AvailableIntValue.toObject(includeInstance, f),
    metadata: (f = msg.getMetadata()) && proto.santiago.web.play.Metadata.toObject(includeInstance, f),
    allowedteamsrange: (f = msg.getAllowedteamsrange()) && proto.santiago.web.play.AvailableIntValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.AvailableMapEntry}
 */
proto.santiago.web.play.AvailableMapEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.AvailableMapEntry;
  return proto.santiago.web.play.AvailableMapEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.AvailableMapEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.AvailableMapEntry}
 */
proto.santiago.web.play.AvailableMapEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLevelname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLevellocation(value);
      break;
    case 3:
      var value = new proto.santiago.web.play.AvailableIntValue;
      reader.readMessage(value,proto.santiago.web.play.AvailableIntValue.deserializeBinaryFromReader);
      msg.setGamesize(value);
      break;
    case 4:
      var value = new proto.santiago.web.play.AvailableIntValue;
      reader.readMessage(value,proto.santiago.web.play.AvailableIntValue.deserializeBinaryFromReader);
      msg.setRounds(value);
      break;
    case 5:
      var value = new proto.santiago.web.play.AvailableIntValue;
      reader.readMessage(value,proto.santiago.web.play.AvailableIntValue.deserializeBinaryFromReader);
      msg.setAllowedspectators(value);
      break;
    case 6:
      var value = new proto.santiago.web.play.Metadata;
      reader.readMessage(value,proto.santiago.web.play.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 7:
      var value = new proto.santiago.web.play.AvailableIntValue;
      reader.readMessage(value,proto.santiago.web.play.AvailableIntValue.deserializeBinaryFromReader);
      msg.setAllowedteamsrange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AvailableMapEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.AvailableMapEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.AvailableMapEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableMapEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevelname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLevellocation();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGamesize();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.santiago.web.play.AvailableIntValue.serializeBinaryToWriter
    );
  }
  f = message.getRounds();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.santiago.web.play.AvailableIntValue.serializeBinaryToWriter
    );
  }
  f = message.getAllowedspectators();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.santiago.web.play.AvailableIntValue.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.santiago.web.play.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getAllowedteamsrange();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.santiago.web.play.AvailableIntValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string levelName = 1;
 * @return {string}
 */
proto.santiago.web.play.AvailableMapEntry.prototype.getLevelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.AvailableMapEntry} returns this
 */
proto.santiago.web.play.AvailableMapEntry.prototype.setLevelname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string levelLocation = 2;
 * @return {string}
 */
proto.santiago.web.play.AvailableMapEntry.prototype.getLevellocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.AvailableMapEntry} returns this
 */
proto.santiago.web.play.AvailableMapEntry.prototype.setLevellocation = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional AvailableIntValue gameSize = 3;
 * @return {?proto.santiago.web.play.AvailableIntValue}
 */
proto.santiago.web.play.AvailableMapEntry.prototype.getGamesize = function() {
  return /** @type{?proto.santiago.web.play.AvailableIntValue} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AvailableIntValue, 3));
};


/**
 * @param {?proto.santiago.web.play.AvailableIntValue|undefined} value
 * @return {!proto.santiago.web.play.AvailableMapEntry} returns this
*/
proto.santiago.web.play.AvailableMapEntry.prototype.setGamesize = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMapEntry} returns this
 */
proto.santiago.web.play.AvailableMapEntry.prototype.clearGamesize = function() {
  return this.setGamesize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMapEntry.prototype.hasGamesize = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AvailableIntValue rounds = 4;
 * @return {?proto.santiago.web.play.AvailableIntValue}
 */
proto.santiago.web.play.AvailableMapEntry.prototype.getRounds = function() {
  return /** @type{?proto.santiago.web.play.AvailableIntValue} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AvailableIntValue, 4));
};


/**
 * @param {?proto.santiago.web.play.AvailableIntValue|undefined} value
 * @return {!proto.santiago.web.play.AvailableMapEntry} returns this
*/
proto.santiago.web.play.AvailableMapEntry.prototype.setRounds = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMapEntry} returns this
 */
proto.santiago.web.play.AvailableMapEntry.prototype.clearRounds = function() {
  return this.setRounds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMapEntry.prototype.hasRounds = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AvailableIntValue allowedSpectators = 5;
 * @return {?proto.santiago.web.play.AvailableIntValue}
 */
proto.santiago.web.play.AvailableMapEntry.prototype.getAllowedspectators = function() {
  return /** @type{?proto.santiago.web.play.AvailableIntValue} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AvailableIntValue, 5));
};


/**
 * @param {?proto.santiago.web.play.AvailableIntValue|undefined} value
 * @return {!proto.santiago.web.play.AvailableMapEntry} returns this
*/
proto.santiago.web.play.AvailableMapEntry.prototype.setAllowedspectators = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMapEntry} returns this
 */
proto.santiago.web.play.AvailableMapEntry.prototype.clearAllowedspectators = function() {
  return this.setAllowedspectators(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMapEntry.prototype.hasAllowedspectators = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Metadata metadata = 6;
 * @return {?proto.santiago.web.play.Metadata}
 */
proto.santiago.web.play.AvailableMapEntry.prototype.getMetadata = function() {
  return /** @type{?proto.santiago.web.play.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.Metadata, 6));
};


/**
 * @param {?proto.santiago.web.play.Metadata|undefined} value
 * @return {!proto.santiago.web.play.AvailableMapEntry} returns this
*/
proto.santiago.web.play.AvailableMapEntry.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMapEntry} returns this
 */
proto.santiago.web.play.AvailableMapEntry.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMapEntry.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional AvailableIntValue allowedTeamsRange = 7;
 * @return {?proto.santiago.web.play.AvailableIntValue}
 */
proto.santiago.web.play.AvailableMapEntry.prototype.getAllowedteamsrange = function() {
  return /** @type{?proto.santiago.web.play.AvailableIntValue} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AvailableIntValue, 7));
};


/**
 * @param {?proto.santiago.web.play.AvailableIntValue|undefined} value
 * @return {!proto.santiago.web.play.AvailableMapEntry} returns this
*/
proto.santiago.web.play.AvailableMapEntry.prototype.setAllowedteamsrange = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMapEntry} returns this
 */
proto.santiago.web.play.AvailableMapEntry.prototype.clearAllowedteamsrange = function() {
  return this.setAllowedteamsrange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMapEntry.prototype.hasAllowedteamsrange = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.AvailableIntValue.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.AvailableIntValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.AvailableIntValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableIntValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultvalue: jspb.Message.getFieldWithDefault(msg, 1, 0),
    availablevalues: (f = msg.getAvailablevalues()) && proto.santiago.web.play.AvailableIntValues.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.AvailableIntValue}
 */
proto.santiago.web.play.AvailableIntValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.AvailableIntValue;
  return proto.santiago.web.play.AvailableIntValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.AvailableIntValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.AvailableIntValue}
 */
proto.santiago.web.play.AvailableIntValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDefaultvalue(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.AvailableIntValues;
      reader.readMessage(value,proto.santiago.web.play.AvailableIntValues.deserializeBinaryFromReader);
      msg.setAvailablevalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AvailableIntValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.AvailableIntValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.AvailableIntValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableIntValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultvalue();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAvailablevalues();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.santiago.web.play.AvailableIntValues.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 defaultValue = 1;
 * @return {number}
 */
proto.santiago.web.play.AvailableIntValue.prototype.getDefaultvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.AvailableIntValue} returns this
 */
proto.santiago.web.play.AvailableIntValue.prototype.setDefaultvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional AvailableIntValues availableValues = 2;
 * @return {?proto.santiago.web.play.AvailableIntValues}
 */
proto.santiago.web.play.AvailableIntValue.prototype.getAvailablevalues = function() {
  return /** @type{?proto.santiago.web.play.AvailableIntValues} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AvailableIntValues, 2));
};


/**
 * @param {?proto.santiago.web.play.AvailableIntValues|undefined} value
 * @return {!proto.santiago.web.play.AvailableIntValue} returns this
*/
proto.santiago.web.play.AvailableIntValue.prototype.setAvailablevalues = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableIntValue} returns this
 */
proto.santiago.web.play.AvailableIntValue.prototype.clearAvailablevalues = function() {
  return this.setAvailablevalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableIntValue.prototype.hasAvailablevalues = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.AvailableIntValues.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.AvailableIntValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.AvailableIntValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableIntValues.toObject = function(includeInstance, msg) {
  var f, obj = {
    range: (f = msg.getRange()) && proto.santiago.web.play.IntRange.toObject(includeInstance, f),
    sparsevalues: (f = msg.getSparsevalues()) && proto.santiago.web.play.SparseIntValues.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.AvailableIntValues}
 */
proto.santiago.web.play.AvailableIntValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.AvailableIntValues;
  return proto.santiago.web.play.AvailableIntValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.AvailableIntValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.AvailableIntValues}
 */
proto.santiago.web.play.AvailableIntValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.IntRange;
      reader.readMessage(value,proto.santiago.web.play.IntRange.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.SparseIntValues;
      reader.readMessage(value,proto.santiago.web.play.SparseIntValues.deserializeBinaryFromReader);
      msg.setSparsevalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AvailableIntValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.AvailableIntValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.AvailableIntValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableIntValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.santiago.web.play.IntRange.serializeBinaryToWriter
    );
  }
  f = message.getSparsevalues();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.santiago.web.play.SparseIntValues.serializeBinaryToWriter
    );
  }
};


/**
 * optional IntRange range = 1;
 * @return {?proto.santiago.web.play.IntRange}
 */
proto.santiago.web.play.AvailableIntValues.prototype.getRange = function() {
  return /** @type{?proto.santiago.web.play.IntRange} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.IntRange, 1));
};


/**
 * @param {?proto.santiago.web.play.IntRange|undefined} value
 * @return {!proto.santiago.web.play.AvailableIntValues} returns this
*/
proto.santiago.web.play.AvailableIntValues.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableIntValues} returns this
 */
proto.santiago.web.play.AvailableIntValues.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableIntValues.prototype.hasRange = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SparseIntValues sparseValues = 2;
 * @return {?proto.santiago.web.play.SparseIntValues}
 */
proto.santiago.web.play.AvailableIntValues.prototype.getSparsevalues = function() {
  return /** @type{?proto.santiago.web.play.SparseIntValues} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.SparseIntValues, 2));
};


/**
 * @param {?proto.santiago.web.play.SparseIntValues|undefined} value
 * @return {!proto.santiago.web.play.AvailableIntValues} returns this
*/
proto.santiago.web.play.AvailableIntValues.prototype.setSparsevalues = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableIntValues} returns this
 */
proto.santiago.web.play.AvailableIntValues.prototype.clearSparsevalues = function() {
  return this.setSparsevalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableIntValues.prototype.hasSparsevalues = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.SparseIntValues.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.SparseIntValues.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.SparseIntValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.SparseIntValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.SparseIntValues.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.SparseIntValues}
 */
proto.santiago.web.play.SparseIntValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.SparseIntValues;
  return proto.santiago.web.play.SparseIntValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.SparseIntValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.SparseIntValues}
 */
proto.santiago.web.play.SparseIntValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addValues(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.SparseIntValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.SparseIntValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.SparseIntValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.SparseIntValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writePackedInt32(
      1,
      f
    );
  }
};


/**
 * repeated int32 values = 1;
 * @return {!Array<number>}
 */
proto.santiago.web.play.SparseIntValues.prototype.getValuesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.santiago.web.play.SparseIntValues} returns this
 */
proto.santiago.web.play.SparseIntValues.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.SparseIntValues} returns this
 */
proto.santiago.web.play.SparseIntValues.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.SparseIntValues} returns this
 */
proto.santiago.web.play.SparseIntValues.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.IntRange.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.IntRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.IntRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.IntRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    minvalue: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxvalue: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.IntRange}
 */
proto.santiago.web.play.IntRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.IntRange;
  return proto.santiago.web.play.IntRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.IntRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.IntRange}
 */
proto.santiago.web.play.IntRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinvalue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.IntRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.IntRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.IntRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.IntRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinvalue();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMaxvalue();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 minValue = 1;
 * @return {number}
 */
proto.santiago.web.play.IntRange.prototype.getMinvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.IntRange} returns this
 */
proto.santiago.web.play.IntRange.prototype.setMinvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 maxValue = 2;
 * @return {number}
 */
proto.santiago.web.play.IntRange.prototype.getMaxvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.IntRange} returns this
 */
proto.santiago.web.play.IntRange.prototype.setMaxvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.AvailableTags.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.AvailableTags.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.AvailableTags.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.AvailableTags} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableTags.toObject = function(includeInstance, msg) {
  var f, obj = {
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    proto.santiago.web.play.AvailableTag.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.AvailableTags}
 */
proto.santiago.web.play.AvailableTags.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.AvailableTags;
  return proto.santiago.web.play.AvailableTags.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.AvailableTags} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.AvailableTags}
 */
proto.santiago.web.play.AvailableTags.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.AvailableTag;
      reader.readMessage(value,proto.santiago.web.play.AvailableTag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AvailableTags.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.AvailableTags.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.AvailableTags} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableTags.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.santiago.web.play.AvailableTag.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AvailableTag tags = 1;
 * @return {!Array<!proto.santiago.web.play.AvailableTag>}
 */
proto.santiago.web.play.AvailableTags.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.AvailableTag>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.AvailableTag, 1));
};


/**
 * @param {!Array<!proto.santiago.web.play.AvailableTag>} value
 * @return {!proto.santiago.web.play.AvailableTags} returns this
*/
proto.santiago.web.play.AvailableTags.prototype.setTagsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.santiago.web.play.AvailableTag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.AvailableTag}
 */
proto.santiago.web.play.AvailableTags.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.santiago.web.play.AvailableTag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.AvailableTags} returns this
 */
proto.santiago.web.play.AvailableTags.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.AvailableMutator.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.AvailableMutator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.AvailableMutator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableMutator.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    category: jspb.Message.getFieldWithDefault(msg, 2, ""),
    kind: (f = msg.getKind()) && proto.santiago.web.play.AvailableMutatorKind.toObject(includeInstance, f),
    metadata: (f = msg.getMetadata()) && proto.santiago.web.play.Metadata.toObject(includeInstance, f),
    id: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.AvailableMutator}
 */
proto.santiago.web.play.AvailableMutator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.AvailableMutator;
  return proto.santiago.web.play.AvailableMutator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.AvailableMutator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.AvailableMutator}
 */
proto.santiago.web.play.AvailableMutator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.santiago.web.play.AvailableMutatorKind;
      reader.readMessage(value,proto.santiago.web.play.AvailableMutatorKind.deserializeBinaryFromReader);
      msg.setKind(value);
      break;
    case 4:
      var value = new proto.santiago.web.play.Metadata;
      reader.readMessage(value,proto.santiago.web.play.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AvailableMutator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.AvailableMutator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.AvailableMutator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableMutator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKind();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.santiago.web.play.AvailableMutatorKind.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.santiago.web.play.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.santiago.web.play.AvailableMutator.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.AvailableMutator} returns this
 */
proto.santiago.web.play.AvailableMutator.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.santiago.web.play.AvailableMutator.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.AvailableMutator} returns this
 */
proto.santiago.web.play.AvailableMutator.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional AvailableMutatorKind kind = 3;
 * @return {?proto.santiago.web.play.AvailableMutatorKind}
 */
proto.santiago.web.play.AvailableMutator.prototype.getKind = function() {
  return /** @type{?proto.santiago.web.play.AvailableMutatorKind} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AvailableMutatorKind, 3));
};


/**
 * @param {?proto.santiago.web.play.AvailableMutatorKind|undefined} value
 * @return {!proto.santiago.web.play.AvailableMutator} returns this
*/
proto.santiago.web.play.AvailableMutator.prototype.setKind = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMutator} returns this
 */
proto.santiago.web.play.AvailableMutator.prototype.clearKind = function() {
  return this.setKind(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMutator.prototype.hasKind = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.santiago.web.play.Metadata}
 */
proto.santiago.web.play.AvailableMutator.prototype.getMetadata = function() {
  return /** @type{?proto.santiago.web.play.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.Metadata, 4));
};


/**
 * @param {?proto.santiago.web.play.Metadata|undefined} value
 * @return {!proto.santiago.web.play.AvailableMutator} returns this
*/
proto.santiago.web.play.AvailableMutator.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMutator} returns this
 */
proto.santiago.web.play.AvailableMutator.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMutator.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string id = 5;
 * @return {string}
 */
proto.santiago.web.play.AvailableMutator.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.AvailableMutator} returns this
 */
proto.santiago.web.play.AvailableMutator.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.AvailableMutatorKind.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.AvailableMutatorKind} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableMutatorKind.toObject = function(includeInstance, msg) {
  var f, obj = {
    mutatorboolean: (f = msg.getMutatorboolean()) && proto.santiago.web.play.MutatorBoolean.toObject(includeInstance, f),
    mutatorstring: (f = msg.getMutatorstring()) && proto.santiago.web.play.MutatorString.toObject(includeInstance, f),
    mutatorfloatvalues: (f = msg.getMutatorfloatvalues()) && proto.santiago.web.play.AvailableMutatorFloatValues.toObject(includeInstance, f),
    mutatorintvalues: (f = msg.getMutatorintvalues()) && proto.santiago.web.play.AvailableMutatorIntValues.toObject(includeInstance, f),
    mutatorsparseboolean: (f = msg.getMutatorsparseboolean()) && proto.santiago.web.play.MutatorSparseBoolean.toObject(includeInstance, f),
    mutatorsparseintvalues: (f = msg.getMutatorsparseintvalues()) && proto.santiago.web.play.AvailableMutatorSparseIntValues.toObject(includeInstance, f),
    mutatorsparsefloatvalues: (f = msg.getMutatorsparsefloatvalues()) && proto.santiago.web.play.AvailableMutatorSparseFloatValues.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.AvailableMutatorKind}
 */
proto.santiago.web.play.AvailableMutatorKind.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.AvailableMutatorKind;
  return proto.santiago.web.play.AvailableMutatorKind.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.AvailableMutatorKind} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.AvailableMutatorKind}
 */
proto.santiago.web.play.AvailableMutatorKind.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.MutatorBoolean;
      reader.readMessage(value,proto.santiago.web.play.MutatorBoolean.deserializeBinaryFromReader);
      msg.setMutatorboolean(value);
      break;
    case 4:
      var value = new proto.santiago.web.play.MutatorString;
      reader.readMessage(value,proto.santiago.web.play.MutatorString.deserializeBinaryFromReader);
      msg.setMutatorstring(value);
      break;
    case 5:
      var value = new proto.santiago.web.play.AvailableMutatorFloatValues;
      reader.readMessage(value,proto.santiago.web.play.AvailableMutatorFloatValues.deserializeBinaryFromReader);
      msg.setMutatorfloatvalues(value);
      break;
    case 6:
      var value = new proto.santiago.web.play.AvailableMutatorIntValues;
      reader.readMessage(value,proto.santiago.web.play.AvailableMutatorIntValues.deserializeBinaryFromReader);
      msg.setMutatorintvalues(value);
      break;
    case 7:
      var value = new proto.santiago.web.play.MutatorSparseBoolean;
      reader.readMessage(value,proto.santiago.web.play.MutatorSparseBoolean.deserializeBinaryFromReader);
      msg.setMutatorsparseboolean(value);
      break;
    case 8:
      var value = new proto.santiago.web.play.AvailableMutatorSparseIntValues;
      reader.readMessage(value,proto.santiago.web.play.AvailableMutatorSparseIntValues.deserializeBinaryFromReader);
      msg.setMutatorsparseintvalues(value);
      break;
    case 9:
      var value = new proto.santiago.web.play.AvailableMutatorSparseFloatValues;
      reader.readMessage(value,proto.santiago.web.play.AvailableMutatorSparseFloatValues.deserializeBinaryFromReader);
      msg.setMutatorsparsefloatvalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.AvailableMutatorKind.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.AvailableMutatorKind} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableMutatorKind.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMutatorboolean();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.santiago.web.play.MutatorBoolean.serializeBinaryToWriter
    );
  }
  f = message.getMutatorstring();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.santiago.web.play.MutatorString.serializeBinaryToWriter
    );
  }
  f = message.getMutatorfloatvalues();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.santiago.web.play.AvailableMutatorFloatValues.serializeBinaryToWriter
    );
  }
  f = message.getMutatorintvalues();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.santiago.web.play.AvailableMutatorIntValues.serializeBinaryToWriter
    );
  }
  f = message.getMutatorsparseboolean();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.santiago.web.play.MutatorSparseBoolean.serializeBinaryToWriter
    );
  }
  f = message.getMutatorsparseintvalues();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.santiago.web.play.AvailableMutatorSparseIntValues.serializeBinaryToWriter
    );
  }
  f = message.getMutatorsparsefloatvalues();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.santiago.web.play.AvailableMutatorSparseFloatValues.serializeBinaryToWriter
    );
  }
};


/**
 * optional MutatorBoolean mutatorBoolean = 1;
 * @return {?proto.santiago.web.play.MutatorBoolean}
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.getMutatorboolean = function() {
  return /** @type{?proto.santiago.web.play.MutatorBoolean} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.MutatorBoolean, 1));
};


/**
 * @param {?proto.santiago.web.play.MutatorBoolean|undefined} value
 * @return {!proto.santiago.web.play.AvailableMutatorKind} returns this
*/
proto.santiago.web.play.AvailableMutatorKind.prototype.setMutatorboolean = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMutatorKind} returns this
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.clearMutatorboolean = function() {
  return this.setMutatorboolean(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.hasMutatorboolean = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MutatorString mutatorString = 4;
 * @return {?proto.santiago.web.play.MutatorString}
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.getMutatorstring = function() {
  return /** @type{?proto.santiago.web.play.MutatorString} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.MutatorString, 4));
};


/**
 * @param {?proto.santiago.web.play.MutatorString|undefined} value
 * @return {!proto.santiago.web.play.AvailableMutatorKind} returns this
*/
proto.santiago.web.play.AvailableMutatorKind.prototype.setMutatorstring = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMutatorKind} returns this
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.clearMutatorstring = function() {
  return this.setMutatorstring(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.hasMutatorstring = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AvailableMutatorFloatValues mutatorFloatValues = 5;
 * @return {?proto.santiago.web.play.AvailableMutatorFloatValues}
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.getMutatorfloatvalues = function() {
  return /** @type{?proto.santiago.web.play.AvailableMutatorFloatValues} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AvailableMutatorFloatValues, 5));
};


/**
 * @param {?proto.santiago.web.play.AvailableMutatorFloatValues|undefined} value
 * @return {!proto.santiago.web.play.AvailableMutatorKind} returns this
*/
proto.santiago.web.play.AvailableMutatorKind.prototype.setMutatorfloatvalues = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMutatorKind} returns this
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.clearMutatorfloatvalues = function() {
  return this.setMutatorfloatvalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.hasMutatorfloatvalues = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AvailableMutatorIntValues mutatorIntValues = 6;
 * @return {?proto.santiago.web.play.AvailableMutatorIntValues}
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.getMutatorintvalues = function() {
  return /** @type{?proto.santiago.web.play.AvailableMutatorIntValues} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AvailableMutatorIntValues, 6));
};


/**
 * @param {?proto.santiago.web.play.AvailableMutatorIntValues|undefined} value
 * @return {!proto.santiago.web.play.AvailableMutatorKind} returns this
*/
proto.santiago.web.play.AvailableMutatorKind.prototype.setMutatorintvalues = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMutatorKind} returns this
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.clearMutatorintvalues = function() {
  return this.setMutatorintvalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.hasMutatorintvalues = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional MutatorSparseBoolean mutatorSparseBoolean = 7;
 * @return {?proto.santiago.web.play.MutatorSparseBoolean}
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.getMutatorsparseboolean = function() {
  return /** @type{?proto.santiago.web.play.MutatorSparseBoolean} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.MutatorSparseBoolean, 7));
};


/**
 * @param {?proto.santiago.web.play.MutatorSparseBoolean|undefined} value
 * @return {!proto.santiago.web.play.AvailableMutatorKind} returns this
*/
proto.santiago.web.play.AvailableMutatorKind.prototype.setMutatorsparseboolean = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMutatorKind} returns this
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.clearMutatorsparseboolean = function() {
  return this.setMutatorsparseboolean(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.hasMutatorsparseboolean = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional AvailableMutatorSparseIntValues mutatorSparseIntValues = 8;
 * @return {?proto.santiago.web.play.AvailableMutatorSparseIntValues}
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.getMutatorsparseintvalues = function() {
  return /** @type{?proto.santiago.web.play.AvailableMutatorSparseIntValues} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AvailableMutatorSparseIntValues, 8));
};


/**
 * @param {?proto.santiago.web.play.AvailableMutatorSparseIntValues|undefined} value
 * @return {!proto.santiago.web.play.AvailableMutatorKind} returns this
*/
proto.santiago.web.play.AvailableMutatorKind.prototype.setMutatorsparseintvalues = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMutatorKind} returns this
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.clearMutatorsparseintvalues = function() {
  return this.setMutatorsparseintvalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.hasMutatorsparseintvalues = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional AvailableMutatorSparseFloatValues mutatorSparseFloatValues = 9;
 * @return {?proto.santiago.web.play.AvailableMutatorSparseFloatValues}
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.getMutatorsparsefloatvalues = function() {
  return /** @type{?proto.santiago.web.play.AvailableMutatorSparseFloatValues} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AvailableMutatorSparseFloatValues, 9));
};


/**
 * @param {?proto.santiago.web.play.AvailableMutatorSparseFloatValues|undefined} value
 * @return {!proto.santiago.web.play.AvailableMutatorKind} returns this
*/
proto.santiago.web.play.AvailableMutatorKind.prototype.setMutatorsparsefloatvalues = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMutatorKind} returns this
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.clearMutatorsparsefloatvalues = function() {
  return this.setMutatorsparsefloatvalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMutatorKind.prototype.hasMutatorsparsefloatvalues = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.AvailableMutatorSparseIntValues.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.AvailableMutatorSparseIntValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.AvailableMutatorSparseIntValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableMutatorSparseIntValues.toObject = function(includeInstance, msg) {
  var f, obj = {
    mutator: (f = msg.getMutator()) && proto.santiago.web.play.MutatorSparseInt.toObject(includeInstance, f),
    availablevalues: (f = msg.getAvailablevalues()) && proto.santiago.web.play.AvailableIntValues.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.AvailableMutatorSparseIntValues}
 */
proto.santiago.web.play.AvailableMutatorSparseIntValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.AvailableMutatorSparseIntValues;
  return proto.santiago.web.play.AvailableMutatorSparseIntValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.AvailableMutatorSparseIntValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.AvailableMutatorSparseIntValues}
 */
proto.santiago.web.play.AvailableMutatorSparseIntValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.MutatorSparseInt;
      reader.readMessage(value,proto.santiago.web.play.MutatorSparseInt.deserializeBinaryFromReader);
      msg.setMutator(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.AvailableIntValues;
      reader.readMessage(value,proto.santiago.web.play.AvailableIntValues.deserializeBinaryFromReader);
      msg.setAvailablevalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AvailableMutatorSparseIntValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.AvailableMutatorSparseIntValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.AvailableMutatorSparseIntValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableMutatorSparseIntValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMutator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.santiago.web.play.MutatorSparseInt.serializeBinaryToWriter
    );
  }
  f = message.getAvailablevalues();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.santiago.web.play.AvailableIntValues.serializeBinaryToWriter
    );
  }
};


/**
 * optional MutatorSparseInt mutator = 1;
 * @return {?proto.santiago.web.play.MutatorSparseInt}
 */
proto.santiago.web.play.AvailableMutatorSparseIntValues.prototype.getMutator = function() {
  return /** @type{?proto.santiago.web.play.MutatorSparseInt} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.MutatorSparseInt, 1));
};


/**
 * @param {?proto.santiago.web.play.MutatorSparseInt|undefined} value
 * @return {!proto.santiago.web.play.AvailableMutatorSparseIntValues} returns this
*/
proto.santiago.web.play.AvailableMutatorSparseIntValues.prototype.setMutator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMutatorSparseIntValues} returns this
 */
proto.santiago.web.play.AvailableMutatorSparseIntValues.prototype.clearMutator = function() {
  return this.setMutator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMutatorSparseIntValues.prototype.hasMutator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AvailableIntValues availableValues = 2;
 * @return {?proto.santiago.web.play.AvailableIntValues}
 */
proto.santiago.web.play.AvailableMutatorSparseIntValues.prototype.getAvailablevalues = function() {
  return /** @type{?proto.santiago.web.play.AvailableIntValues} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AvailableIntValues, 2));
};


/**
 * @param {?proto.santiago.web.play.AvailableIntValues|undefined} value
 * @return {!proto.santiago.web.play.AvailableMutatorSparseIntValues} returns this
*/
proto.santiago.web.play.AvailableMutatorSparseIntValues.prototype.setAvailablevalues = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMutatorSparseIntValues} returns this
 */
proto.santiago.web.play.AvailableMutatorSparseIntValues.prototype.clearAvailablevalues = function() {
  return this.setAvailablevalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMutatorSparseIntValues.prototype.hasAvailablevalues = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.AvailableMutatorSparseFloatValues.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.AvailableMutatorSparseFloatValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.AvailableMutatorSparseFloatValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableMutatorSparseFloatValues.toObject = function(includeInstance, msg) {
  var f, obj = {
    mutator: (f = msg.getMutator()) && proto.santiago.web.play.MutatorSparseFloat.toObject(includeInstance, f),
    availablevalues: (f = msg.getAvailablevalues()) && proto.santiago.web.play.AvailableFloatValues.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.AvailableMutatorSparseFloatValues}
 */
proto.santiago.web.play.AvailableMutatorSparseFloatValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.AvailableMutatorSparseFloatValues;
  return proto.santiago.web.play.AvailableMutatorSparseFloatValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.AvailableMutatorSparseFloatValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.AvailableMutatorSparseFloatValues}
 */
proto.santiago.web.play.AvailableMutatorSparseFloatValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.MutatorSparseFloat;
      reader.readMessage(value,proto.santiago.web.play.MutatorSparseFloat.deserializeBinaryFromReader);
      msg.setMutator(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.AvailableFloatValues;
      reader.readMessage(value,proto.santiago.web.play.AvailableFloatValues.deserializeBinaryFromReader);
      msg.setAvailablevalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AvailableMutatorSparseFloatValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.AvailableMutatorSparseFloatValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.AvailableMutatorSparseFloatValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableMutatorSparseFloatValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMutator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.santiago.web.play.MutatorSparseFloat.serializeBinaryToWriter
    );
  }
  f = message.getAvailablevalues();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.santiago.web.play.AvailableFloatValues.serializeBinaryToWriter
    );
  }
};


/**
 * optional MutatorSparseFloat mutator = 1;
 * @return {?proto.santiago.web.play.MutatorSparseFloat}
 */
proto.santiago.web.play.AvailableMutatorSparseFloatValues.prototype.getMutator = function() {
  return /** @type{?proto.santiago.web.play.MutatorSparseFloat} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.MutatorSparseFloat, 1));
};


/**
 * @param {?proto.santiago.web.play.MutatorSparseFloat|undefined} value
 * @return {!proto.santiago.web.play.AvailableMutatorSparseFloatValues} returns this
*/
proto.santiago.web.play.AvailableMutatorSparseFloatValues.prototype.setMutator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMutatorSparseFloatValues} returns this
 */
proto.santiago.web.play.AvailableMutatorSparseFloatValues.prototype.clearMutator = function() {
  return this.setMutator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMutatorSparseFloatValues.prototype.hasMutator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AvailableFloatValues availableValues = 2;
 * @return {?proto.santiago.web.play.AvailableFloatValues}
 */
proto.santiago.web.play.AvailableMutatorSparseFloatValues.prototype.getAvailablevalues = function() {
  return /** @type{?proto.santiago.web.play.AvailableFloatValues} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AvailableFloatValues, 2));
};


/**
 * @param {?proto.santiago.web.play.AvailableFloatValues|undefined} value
 * @return {!proto.santiago.web.play.AvailableMutatorSparseFloatValues} returns this
*/
proto.santiago.web.play.AvailableMutatorSparseFloatValues.prototype.setAvailablevalues = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMutatorSparseFloatValues} returns this
 */
proto.santiago.web.play.AvailableMutatorSparseFloatValues.prototype.clearAvailablevalues = function() {
  return this.setAvailablevalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMutatorSparseFloatValues.prototype.hasAvailablevalues = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.CreatePlayElementRequest.repeatedFields_ = [5,6,12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.CreatePlayElementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.CreatePlayElementRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.CreatePlayElementRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    designmetadata: (f = msg.getDesignmetadata()) && proto.santiago.web.play.DesignMetadata.toObject(includeInstance, f),
    maprotation: (f = msg.getMaprotation()) && proto.santiago.web.play.MapRotation.toObject(includeInstance, f),
    mutatorsList: jspb.Message.toObjectList(msg.getMutatorsList(),
    proto.santiago.web.play.Mutator.toObject, includeInstance),
    assetcategoriesList: jspb.Message.toObjectList(msg.getAssetcategoriesList(),
    proto.santiago.web.play.AssetCategory.toObject, includeInstance),
    originalmodrules: msg.getOriginalmodrules_asB64(),
    playelementsettings: (f = msg.getPlayelementsettings()) && proto.santiago.web.play.PlayElementSettings.toObject(includeInstance, f),
    publishstate: jspb.Message.getFieldWithDefault(msg, 9, 0),
    modleveldataid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    thumbnailurl: jspb.Message.getFieldWithDefault(msg, 11, ""),
    attachmentsList: jspb.Message.toObjectList(msg.getAttachmentsList(),
    proto.santiago.web.play.Attachment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.CreatePlayElementRequest}
 */
proto.santiago.web.play.CreatePlayElementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.CreatePlayElementRequest;
  return proto.santiago.web.play.CreatePlayElementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.CreatePlayElementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.CreatePlayElementRequest}
 */
proto.santiago.web.play.CreatePlayElementRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new proto.santiago.web.play.DesignMetadata;
      reader.readMessage(value,proto.santiago.web.play.DesignMetadata.deserializeBinaryFromReader);
      msg.setDesignmetadata(value);
      break;
    case 4:
      var value = new proto.santiago.web.play.MapRotation;
      reader.readMessage(value,proto.santiago.web.play.MapRotation.deserializeBinaryFromReader);
      msg.setMaprotation(value);
      break;
    case 5:
      var value = new proto.santiago.web.play.Mutator;
      reader.readMessage(value,proto.santiago.web.play.Mutator.deserializeBinaryFromReader);
      msg.addMutators(value);
      break;
    case 6:
      var value = new proto.santiago.web.play.AssetCategory;
      reader.readMessage(value,proto.santiago.web.play.AssetCategory.deserializeBinaryFromReader);
      msg.addAssetcategories(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOriginalmodrules(value);
      break;
    case 8:
      var value = new proto.santiago.web.play.PlayElementSettings;
      reader.readMessage(value,proto.santiago.web.play.PlayElementSettings.deserializeBinaryFromReader);
      msg.setPlayelementsettings(value);
      break;
    case 9:
      var value = /** @type {!proto.santiago.web.play.PublishStateType} */ (reader.readEnum());
      msg.setPublishstate(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setModleveldataid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setThumbnailurl(value);
      break;
    case 12:
      var value = new proto.santiago.web.play.Attachment;
      reader.readMessage(value,proto.santiago.web.play.Attachment.deserializeBinaryFromReader);
      msg.addAttachments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.CreatePlayElementRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.CreatePlayElementRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.CreatePlayElementRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDesignmetadata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.santiago.web.play.DesignMetadata.serializeBinaryToWriter
    );
  }
  f = message.getMaprotation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.santiago.web.play.MapRotation.serializeBinaryToWriter
    );
  }
  f = message.getMutatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.santiago.web.play.Mutator.serializeBinaryToWriter
    );
  }
  f = message.getAssetcategoriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.santiago.web.play.AssetCategory.serializeBinaryToWriter
    );
  }
  f = message.getOriginalmodrules_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getPlayelementsettings();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.santiago.web.play.PlayElementSettings.serializeBinaryToWriter
    );
  }
  f = message.getPublishstate();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.santiago.web.play.Attachment.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.CreatePlayElementRequest} returns this
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.CreatePlayElementRequest} returns this
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.CreatePlayElementRequest} returns this
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DesignMetadata designMetadata = 3;
 * @return {?proto.santiago.web.play.DesignMetadata}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.getDesignmetadata = function() {
  return /** @type{?proto.santiago.web.play.DesignMetadata} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.DesignMetadata, 3));
};


/**
 * @param {?proto.santiago.web.play.DesignMetadata|undefined} value
 * @return {!proto.santiago.web.play.CreatePlayElementRequest} returns this
*/
proto.santiago.web.play.CreatePlayElementRequest.prototype.setDesignmetadata = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.CreatePlayElementRequest} returns this
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.clearDesignmetadata = function() {
  return this.setDesignmetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.hasDesignmetadata = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MapRotation mapRotation = 4;
 * @return {?proto.santiago.web.play.MapRotation}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.getMaprotation = function() {
  return /** @type{?proto.santiago.web.play.MapRotation} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.MapRotation, 4));
};


/**
 * @param {?proto.santiago.web.play.MapRotation|undefined} value
 * @return {!proto.santiago.web.play.CreatePlayElementRequest} returns this
*/
proto.santiago.web.play.CreatePlayElementRequest.prototype.setMaprotation = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.CreatePlayElementRequest} returns this
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.clearMaprotation = function() {
  return this.setMaprotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.hasMaprotation = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Mutator mutators = 5;
 * @return {!Array<!proto.santiago.web.play.Mutator>}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.getMutatorsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.Mutator>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.Mutator, 5));
};


/**
 * @param {!Array<!proto.santiago.web.play.Mutator>} value
 * @return {!proto.santiago.web.play.CreatePlayElementRequest} returns this
*/
proto.santiago.web.play.CreatePlayElementRequest.prototype.setMutatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.santiago.web.play.Mutator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.Mutator}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.addMutators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.santiago.web.play.Mutator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.CreatePlayElementRequest} returns this
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.clearMutatorsList = function() {
  return this.setMutatorsList([]);
};


/**
 * repeated AssetCategory assetCategories = 6;
 * @return {!Array<!proto.santiago.web.play.AssetCategory>}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.getAssetcategoriesList = function() {
  return /** @type{!Array<!proto.santiago.web.play.AssetCategory>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.AssetCategory, 6));
};


/**
 * @param {!Array<!proto.santiago.web.play.AssetCategory>} value
 * @return {!proto.santiago.web.play.CreatePlayElementRequest} returns this
*/
proto.santiago.web.play.CreatePlayElementRequest.prototype.setAssetcategoriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.santiago.web.play.AssetCategory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.AssetCategory}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.addAssetcategories = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.santiago.web.play.AssetCategory, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.CreatePlayElementRequest} returns this
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.clearAssetcategoriesList = function() {
  return this.setAssetcategoriesList([]);
};


/**
 * optional bytes originalModRules = 7;
 * @return {!(string|Uint8Array)}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.getOriginalmodrules = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes originalModRules = 7;
 * This is a type-conversion wrapper around `getOriginalmodrules()`
 * @return {string}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.getOriginalmodrules_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOriginalmodrules()));
};


/**
 * optional bytes originalModRules = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOriginalmodrules()`
 * @return {!Uint8Array}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.getOriginalmodrules_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOriginalmodrules()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.santiago.web.play.CreatePlayElementRequest} returns this
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.setOriginalmodrules = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional PlayElementSettings playElementSettings = 8;
 * @return {?proto.santiago.web.play.PlayElementSettings}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.getPlayelementsettings = function() {
  return /** @type{?proto.santiago.web.play.PlayElementSettings} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.PlayElementSettings, 8));
};


/**
 * @param {?proto.santiago.web.play.PlayElementSettings|undefined} value
 * @return {!proto.santiago.web.play.CreatePlayElementRequest} returns this
*/
proto.santiago.web.play.CreatePlayElementRequest.prototype.setPlayelementsettings = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.CreatePlayElementRequest} returns this
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.clearPlayelementsettings = function() {
  return this.setPlayelementsettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.hasPlayelementsettings = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional PublishStateType publishState = 9;
 * @return {!proto.santiago.web.play.PublishStateType}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.getPublishstate = function() {
  return /** @type {!proto.santiago.web.play.PublishStateType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.santiago.web.play.PublishStateType} value
 * @return {!proto.santiago.web.play.CreatePlayElementRequest} returns this
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.setPublishstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional string modLevelDataId = 10;
 * @return {string}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.getModleveldataid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.CreatePlayElementRequest} returns this
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.setModleveldataid = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.CreatePlayElementRequest} returns this
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.clearModleveldataid = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.hasModleveldataid = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string thumbnailUrl = 11;
 * @return {string}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.getThumbnailurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.CreatePlayElementRequest} returns this
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.setThumbnailurl = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.CreatePlayElementRequest} returns this
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.clearThumbnailurl = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.hasThumbnailurl = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated Attachment attachments = 12;
 * @return {!Array<!proto.santiago.web.play.Attachment>}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.getAttachmentsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.Attachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.Attachment, 12));
};


/**
 * @param {!Array<!proto.santiago.web.play.Attachment>} value
 * @return {!proto.santiago.web.play.CreatePlayElementRequest} returns this
*/
proto.santiago.web.play.CreatePlayElementRequest.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.santiago.web.play.Attachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.Attachment}
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.addAttachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.santiago.web.play.Attachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.CreatePlayElementRequest} returns this
 */
proto.santiago.web.play.CreatePlayElementRequest.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.AvailableMutatorFloatValues.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.AvailableMutatorFloatValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.AvailableMutatorFloatValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableMutatorFloatValues.toObject = function(includeInstance, msg) {
  var f, obj = {
    mutator: (f = msg.getMutator()) && proto.santiago.web.play.MutatorFloat.toObject(includeInstance, f),
    availablevalues: (f = msg.getAvailablevalues()) && proto.santiago.web.play.AvailableFloatValues.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.AvailableMutatorFloatValues}
 */
proto.santiago.web.play.AvailableMutatorFloatValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.AvailableMutatorFloatValues;
  return proto.santiago.web.play.AvailableMutatorFloatValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.AvailableMutatorFloatValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.AvailableMutatorFloatValues}
 */
proto.santiago.web.play.AvailableMutatorFloatValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.MutatorFloat;
      reader.readMessage(value,proto.santiago.web.play.MutatorFloat.deserializeBinaryFromReader);
      msg.setMutator(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.AvailableFloatValues;
      reader.readMessage(value,proto.santiago.web.play.AvailableFloatValues.deserializeBinaryFromReader);
      msg.setAvailablevalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AvailableMutatorFloatValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.AvailableMutatorFloatValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.AvailableMutatorFloatValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableMutatorFloatValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMutator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.santiago.web.play.MutatorFloat.serializeBinaryToWriter
    );
  }
  f = message.getAvailablevalues();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.santiago.web.play.AvailableFloatValues.serializeBinaryToWriter
    );
  }
};


/**
 * optional MutatorFloat mutator = 1;
 * @return {?proto.santiago.web.play.MutatorFloat}
 */
proto.santiago.web.play.AvailableMutatorFloatValues.prototype.getMutator = function() {
  return /** @type{?proto.santiago.web.play.MutatorFloat} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.MutatorFloat, 1));
};


/**
 * @param {?proto.santiago.web.play.MutatorFloat|undefined} value
 * @return {!proto.santiago.web.play.AvailableMutatorFloatValues} returns this
*/
proto.santiago.web.play.AvailableMutatorFloatValues.prototype.setMutator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMutatorFloatValues} returns this
 */
proto.santiago.web.play.AvailableMutatorFloatValues.prototype.clearMutator = function() {
  return this.setMutator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMutatorFloatValues.prototype.hasMutator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AvailableFloatValues availableValues = 2;
 * @return {?proto.santiago.web.play.AvailableFloatValues}
 */
proto.santiago.web.play.AvailableMutatorFloatValues.prototype.getAvailablevalues = function() {
  return /** @type{?proto.santiago.web.play.AvailableFloatValues} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AvailableFloatValues, 2));
};


/**
 * @param {?proto.santiago.web.play.AvailableFloatValues|undefined} value
 * @return {!proto.santiago.web.play.AvailableMutatorFloatValues} returns this
*/
proto.santiago.web.play.AvailableMutatorFloatValues.prototype.setAvailablevalues = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMutatorFloatValues} returns this
 */
proto.santiago.web.play.AvailableMutatorFloatValues.prototype.clearAvailablevalues = function() {
  return this.setAvailablevalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMutatorFloatValues.prototype.hasAvailablevalues = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.AvailableFloatValues.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.AvailableFloatValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.AvailableFloatValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableFloatValues.toObject = function(includeInstance, msg) {
  var f, obj = {
    range: (f = msg.getRange()) && proto.santiago.web.play.FloatRange.toObject(includeInstance, f),
    sparsevalues: (f = msg.getSparsevalues()) && proto.santiago.web.play.SparseFloatValues.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.AvailableFloatValues}
 */
proto.santiago.web.play.AvailableFloatValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.AvailableFloatValues;
  return proto.santiago.web.play.AvailableFloatValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.AvailableFloatValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.AvailableFloatValues}
 */
proto.santiago.web.play.AvailableFloatValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.FloatRange;
      reader.readMessage(value,proto.santiago.web.play.FloatRange.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.SparseFloatValues;
      reader.readMessage(value,proto.santiago.web.play.SparseFloatValues.deserializeBinaryFromReader);
      msg.setSparsevalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AvailableFloatValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.AvailableFloatValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.AvailableFloatValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableFloatValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.santiago.web.play.FloatRange.serializeBinaryToWriter
    );
  }
  f = message.getSparsevalues();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.santiago.web.play.SparseFloatValues.serializeBinaryToWriter
    );
  }
};


/**
 * optional FloatRange range = 1;
 * @return {?proto.santiago.web.play.FloatRange}
 */
proto.santiago.web.play.AvailableFloatValues.prototype.getRange = function() {
  return /** @type{?proto.santiago.web.play.FloatRange} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.FloatRange, 1));
};


/**
 * @param {?proto.santiago.web.play.FloatRange|undefined} value
 * @return {!proto.santiago.web.play.AvailableFloatValues} returns this
*/
proto.santiago.web.play.AvailableFloatValues.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableFloatValues} returns this
 */
proto.santiago.web.play.AvailableFloatValues.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableFloatValues.prototype.hasRange = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SparseFloatValues sparseValues = 2;
 * @return {?proto.santiago.web.play.SparseFloatValues}
 */
proto.santiago.web.play.AvailableFloatValues.prototype.getSparsevalues = function() {
  return /** @type{?proto.santiago.web.play.SparseFloatValues} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.SparseFloatValues, 2));
};


/**
 * @param {?proto.santiago.web.play.SparseFloatValues|undefined} value
 * @return {!proto.santiago.web.play.AvailableFloatValues} returns this
*/
proto.santiago.web.play.AvailableFloatValues.prototype.setSparsevalues = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableFloatValues} returns this
 */
proto.santiago.web.play.AvailableFloatValues.prototype.clearSparsevalues = function() {
  return this.setSparsevalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableFloatValues.prototype.hasSparsevalues = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.SparseFloatValues.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.SparseFloatValues.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.SparseFloatValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.SparseFloatValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.SparseFloatValues.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuesList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.SparseFloatValues}
 */
proto.santiago.web.play.SparseFloatValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.SparseFloatValues;
  return proto.santiago.web.play.SparseFloatValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.SparseFloatValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.SparseFloatValues}
 */
proto.santiago.web.play.SparseFloatValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addValues(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.SparseFloatValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.SparseFloatValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.SparseFloatValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.SparseFloatValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writePackedFloat(
      1,
      f
    );
  }
};


/**
 * repeated float values = 1;
 * @return {!Array<number>}
 */
proto.santiago.web.play.SparseFloatValues.prototype.getValuesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.santiago.web.play.SparseFloatValues} returns this
 */
proto.santiago.web.play.SparseFloatValues.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.SparseFloatValues} returns this
 */
proto.santiago.web.play.SparseFloatValues.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.SparseFloatValues} returns this
 */
proto.santiago.web.play.SparseFloatValues.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.FloatRange.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.FloatRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.FloatRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.FloatRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    minvalue: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    maxvalue: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.FloatRange}
 */
proto.santiago.web.play.FloatRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.FloatRange;
  return proto.santiago.web.play.FloatRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.FloatRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.FloatRange}
 */
proto.santiago.web.play.FloatRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinvalue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMaxvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.FloatRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.FloatRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.FloatRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.FloatRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinvalue();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getMaxvalue();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional float minValue = 1;
 * @return {number}
 */
proto.santiago.web.play.FloatRange.prototype.getMinvalue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.FloatRange} returns this
 */
proto.santiago.web.play.FloatRange.prototype.setMinvalue = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float maxValue = 2;
 * @return {number}
 */
proto.santiago.web.play.FloatRange.prototype.getMaxvalue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.FloatRange} returns this
 */
proto.santiago.web.play.FloatRange.prototype.setMaxvalue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.AvailableMutatorIntValues.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.AvailableMutatorIntValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.AvailableMutatorIntValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableMutatorIntValues.toObject = function(includeInstance, msg) {
  var f, obj = {
    mutator: (f = msg.getMutator()) && proto.santiago.web.play.MutatorInt.toObject(includeInstance, f),
    availablevalues: (f = msg.getAvailablevalues()) && proto.santiago.web.play.AvailableIntValues.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.AvailableMutatorIntValues}
 */
proto.santiago.web.play.AvailableMutatorIntValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.AvailableMutatorIntValues;
  return proto.santiago.web.play.AvailableMutatorIntValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.AvailableMutatorIntValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.AvailableMutatorIntValues}
 */
proto.santiago.web.play.AvailableMutatorIntValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.MutatorInt;
      reader.readMessage(value,proto.santiago.web.play.MutatorInt.deserializeBinaryFromReader);
      msg.setMutator(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.AvailableIntValues;
      reader.readMessage(value,proto.santiago.web.play.AvailableIntValues.deserializeBinaryFromReader);
      msg.setAvailablevalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AvailableMutatorIntValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.AvailableMutatorIntValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.AvailableMutatorIntValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AvailableMutatorIntValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMutator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.santiago.web.play.MutatorInt.serializeBinaryToWriter
    );
  }
  f = message.getAvailablevalues();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.santiago.web.play.AvailableIntValues.serializeBinaryToWriter
    );
  }
};


/**
 * optional MutatorInt mutator = 1;
 * @return {?proto.santiago.web.play.MutatorInt}
 */
proto.santiago.web.play.AvailableMutatorIntValues.prototype.getMutator = function() {
  return /** @type{?proto.santiago.web.play.MutatorInt} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.MutatorInt, 1));
};


/**
 * @param {?proto.santiago.web.play.MutatorInt|undefined} value
 * @return {!proto.santiago.web.play.AvailableMutatorIntValues} returns this
*/
proto.santiago.web.play.AvailableMutatorIntValues.prototype.setMutator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMutatorIntValues} returns this
 */
proto.santiago.web.play.AvailableMutatorIntValues.prototype.clearMutator = function() {
  return this.setMutator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMutatorIntValues.prototype.hasMutator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AvailableIntValues availableValues = 2;
 * @return {?proto.santiago.web.play.AvailableIntValues}
 */
proto.santiago.web.play.AvailableMutatorIntValues.prototype.getAvailablevalues = function() {
  return /** @type{?proto.santiago.web.play.AvailableIntValues} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AvailableIntValues, 2));
};


/**
 * @param {?proto.santiago.web.play.AvailableIntValues|undefined} value
 * @return {!proto.santiago.web.play.AvailableMutatorIntValues} returns this
*/
proto.santiago.web.play.AvailableMutatorIntValues.prototype.setAvailablevalues = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AvailableMutatorIntValues} returns this
 */
proto.santiago.web.play.AvailableMutatorIntValues.prototype.clearAvailablevalues = function() {
  return this.setAvailablevalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AvailableMutatorIntValues.prototype.hasAvailablevalues = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.UpdatePlayElementRequest.repeatedFields_ = [6,7,13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.UpdatePlayElementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.UpdatePlayElementRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.UpdatePlayElementRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    designmetadata: (f = msg.getDesignmetadata()) && proto.santiago.web.play.DesignMetadata.toObject(includeInstance, f),
    maprotation: (f = msg.getMaprotation()) && proto.santiago.web.play.MapRotation.toObject(includeInstance, f),
    mutatorsList: jspb.Message.toObjectList(msg.getMutatorsList(),
    proto.santiago.web.play.Mutator.toObject, includeInstance),
    assetcategoriesList: jspb.Message.toObjectList(msg.getAssetcategoriesList(),
    proto.santiago.web.play.AssetCategory.toObject, includeInstance),
    originalmodrules: msg.getOriginalmodrules_asB64(),
    playelementsettings: (f = msg.getPlayelementsettings()) && proto.santiago.web.play.PlayElementSettings.toObject(includeInstance, f),
    publishstate: jspb.Message.getFieldWithDefault(msg, 10, 0),
    modleveldataid: jspb.Message.getFieldWithDefault(msg, 11, ""),
    thumbnailurl: jspb.Message.getFieldWithDefault(msg, 12, ""),
    attachmentsList: jspb.Message.toObjectList(msg.getAttachmentsList(),
    proto.santiago.web.play.Attachment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest}
 */
proto.santiago.web.play.UpdatePlayElementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.UpdatePlayElementRequest;
  return proto.santiago.web.play.UpdatePlayElementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.UpdatePlayElementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest}
 */
proto.santiago.web.play.UpdatePlayElementRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new proto.santiago.web.play.DesignMetadata;
      reader.readMessage(value,proto.santiago.web.play.DesignMetadata.deserializeBinaryFromReader);
      msg.setDesignmetadata(value);
      break;
    case 5:
      var value = new proto.santiago.web.play.MapRotation;
      reader.readMessage(value,proto.santiago.web.play.MapRotation.deserializeBinaryFromReader);
      msg.setMaprotation(value);
      break;
    case 6:
      var value = new proto.santiago.web.play.Mutator;
      reader.readMessage(value,proto.santiago.web.play.Mutator.deserializeBinaryFromReader);
      msg.addMutators(value);
      break;
    case 7:
      var value = new proto.santiago.web.play.AssetCategory;
      reader.readMessage(value,proto.santiago.web.play.AssetCategory.deserializeBinaryFromReader);
      msg.addAssetcategories(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOriginalmodrules(value);
      break;
    case 9:
      var value = new proto.santiago.web.play.PlayElementSettings;
      reader.readMessage(value,proto.santiago.web.play.PlayElementSettings.deserializeBinaryFromReader);
      msg.setPlayelementsettings(value);
      break;
    case 10:
      var value = /** @type {!proto.santiago.web.play.PublishStateType} */ (reader.readEnum());
      msg.setPublishstate(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setModleveldataid(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setThumbnailurl(value);
      break;
    case 13:
      var value = new proto.santiago.web.play.Attachment;
      reader.readMessage(value,proto.santiago.web.play.Attachment.deserializeBinaryFromReader);
      msg.addAttachments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.UpdatePlayElementRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.UpdatePlayElementRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.UpdatePlayElementRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDesignmetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.santiago.web.play.DesignMetadata.serializeBinaryToWriter
    );
  }
  f = message.getMaprotation();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.santiago.web.play.MapRotation.serializeBinaryToWriter
    );
  }
  f = message.getMutatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.santiago.web.play.Mutator.serializeBinaryToWriter
    );
  }
  f = message.getAssetcategoriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.santiago.web.play.AssetCategory.serializeBinaryToWriter
    );
  }
  f = message.getOriginalmodrules_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
  f = message.getPlayelementsettings();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.santiago.web.play.PlayElementSettings.serializeBinaryToWriter
    );
  }
  f = message.getPublishstate();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.santiago.web.play.Attachment.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DesignMetadata designMetadata = 4;
 * @return {?proto.santiago.web.play.DesignMetadata}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.getDesignmetadata = function() {
  return /** @type{?proto.santiago.web.play.DesignMetadata} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.DesignMetadata, 4));
};


/**
 * @param {?proto.santiago.web.play.DesignMetadata|undefined} value
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
*/
proto.santiago.web.play.UpdatePlayElementRequest.prototype.setDesignmetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.clearDesignmetadata = function() {
  return this.setDesignmetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.hasDesignmetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MapRotation mapRotation = 5;
 * @return {?proto.santiago.web.play.MapRotation}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.getMaprotation = function() {
  return /** @type{?proto.santiago.web.play.MapRotation} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.MapRotation, 5));
};


/**
 * @param {?proto.santiago.web.play.MapRotation|undefined} value
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
*/
proto.santiago.web.play.UpdatePlayElementRequest.prototype.setMaprotation = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.clearMaprotation = function() {
  return this.setMaprotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.hasMaprotation = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated Mutator mutators = 6;
 * @return {!Array<!proto.santiago.web.play.Mutator>}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.getMutatorsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.Mutator>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.Mutator, 6));
};


/**
 * @param {!Array<!proto.santiago.web.play.Mutator>} value
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
*/
proto.santiago.web.play.UpdatePlayElementRequest.prototype.setMutatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.santiago.web.play.Mutator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.Mutator}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.addMutators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.santiago.web.play.Mutator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.clearMutatorsList = function() {
  return this.setMutatorsList([]);
};


/**
 * repeated AssetCategory assetCategories = 7;
 * @return {!Array<!proto.santiago.web.play.AssetCategory>}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.getAssetcategoriesList = function() {
  return /** @type{!Array<!proto.santiago.web.play.AssetCategory>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.AssetCategory, 7));
};


/**
 * @param {!Array<!proto.santiago.web.play.AssetCategory>} value
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
*/
proto.santiago.web.play.UpdatePlayElementRequest.prototype.setAssetcategoriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.santiago.web.play.AssetCategory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.AssetCategory}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.addAssetcategories = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.santiago.web.play.AssetCategory, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.clearAssetcategoriesList = function() {
  return this.setAssetcategoriesList([]);
};


/**
 * optional bytes originalModRules = 8;
 * @return {!(string|Uint8Array)}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.getOriginalmodrules = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes originalModRules = 8;
 * This is a type-conversion wrapper around `getOriginalmodrules()`
 * @return {string}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.getOriginalmodrules_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOriginalmodrules()));
};


/**
 * optional bytes originalModRules = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOriginalmodrules()`
 * @return {!Uint8Array}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.getOriginalmodrules_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOriginalmodrules()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.setOriginalmodrules = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};


/**
 * optional PlayElementSettings playElementSettings = 9;
 * @return {?proto.santiago.web.play.PlayElementSettings}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.getPlayelementsettings = function() {
  return /** @type{?proto.santiago.web.play.PlayElementSettings} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.PlayElementSettings, 9));
};


/**
 * @param {?proto.santiago.web.play.PlayElementSettings|undefined} value
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
*/
proto.santiago.web.play.UpdatePlayElementRequest.prototype.setPlayelementsettings = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.clearPlayelementsettings = function() {
  return this.setPlayelementsettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.hasPlayelementsettings = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional PublishStateType publishState = 10;
 * @return {!proto.santiago.web.play.PublishStateType}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.getPublishstate = function() {
  return /** @type {!proto.santiago.web.play.PublishStateType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.santiago.web.play.PublishStateType} value
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.setPublishstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string modLevelDataId = 11;
 * @return {string}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.getModleveldataid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.setModleveldataid = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.clearModleveldataid = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.hasModleveldataid = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string thumbnailUrl = 12;
 * @return {string}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.getThumbnailurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.setThumbnailurl = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.clearThumbnailurl = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.hasThumbnailurl = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * repeated Attachment attachments = 13;
 * @return {!Array<!proto.santiago.web.play.Attachment>}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.getAttachmentsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.Attachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.Attachment, 13));
};


/**
 * @param {!Array<!proto.santiago.web.play.Attachment>} value
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
*/
proto.santiago.web.play.UpdatePlayElementRequest.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.santiago.web.play.Attachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.Attachment}
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.addAttachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.santiago.web.play.Attachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.UpdatePlayElementRequest} returns this
 */
proto.santiago.web.play.UpdatePlayElementRequest.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.PlayElementResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.PlayElementResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.PlayElementResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.PlayElementResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    playelement: (f = msg.getPlayelement()) && proto.santiago.web.play.PlayElement.toObject(includeInstance, f),
    playelementdesign: (f = msg.getPlayelementdesign()) && proto.santiago.web.play.PlayElementDesign.toObject(includeInstance, f),
    progressionmode: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.PlayElementResponse}
 */
proto.santiago.web.play.PlayElementResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.PlayElementResponse;
  return proto.santiago.web.play.PlayElementResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.PlayElementResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.PlayElementResponse}
 */
proto.santiago.web.play.PlayElementResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.PlayElement;
      reader.readMessage(value,proto.santiago.web.play.PlayElement.deserializeBinaryFromReader);
      msg.setPlayelement(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.PlayElementDesign;
      reader.readMessage(value,proto.santiago.web.play.PlayElementDesign.deserializeBinaryFromReader);
      msg.setPlayelementdesign(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProgressionmode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.PlayElementResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.PlayElementResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.PlayElementResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.PlayElementResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayelement();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.santiago.web.play.PlayElement.serializeBinaryToWriter
    );
  }
  f = message.getPlayelementdesign();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.santiago.web.play.PlayElementDesign.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional PlayElement playElement = 1;
 * @return {?proto.santiago.web.play.PlayElement}
 */
proto.santiago.web.play.PlayElementResponse.prototype.getPlayelement = function() {
  return /** @type{?proto.santiago.web.play.PlayElement} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.PlayElement, 1));
};


/**
 * @param {?proto.santiago.web.play.PlayElement|undefined} value
 * @return {!proto.santiago.web.play.PlayElementResponse} returns this
*/
proto.santiago.web.play.PlayElementResponse.prototype.setPlayelement = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.PlayElementResponse} returns this
 */
proto.santiago.web.play.PlayElementResponse.prototype.clearPlayelement = function() {
  return this.setPlayelement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayElementResponse.prototype.hasPlayelement = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PlayElementDesign playElementDesign = 2;
 * @return {?proto.santiago.web.play.PlayElementDesign}
 */
proto.santiago.web.play.PlayElementResponse.prototype.getPlayelementdesign = function() {
  return /** @type{?proto.santiago.web.play.PlayElementDesign} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.PlayElementDesign, 2));
};


/**
 * @param {?proto.santiago.web.play.PlayElementDesign|undefined} value
 * @return {!proto.santiago.web.play.PlayElementResponse} returns this
*/
proto.santiago.web.play.PlayElementResponse.prototype.setPlayelementdesign = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.PlayElementResponse} returns this
 */
proto.santiago.web.play.PlayElementResponse.prototype.clearPlayelementdesign = function() {
  return this.setPlayelementdesign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayElementResponse.prototype.hasPlayelementdesign = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string progressionMode = 3;
 * @return {string}
 */
proto.santiago.web.play.PlayElementResponse.prototype.getProgressionmode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.PlayElementResponse} returns this
 */
proto.santiago.web.play.PlayElementResponse.prototype.setProgressionmode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.PlayElementResponse} returns this
 */
proto.santiago.web.play.PlayElementResponse.prototype.clearProgressionmode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayElementResponse.prototype.hasProgressionmode = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.PlayElement.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.PlayElement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.PlayElement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.PlayElement.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    designid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    creator: (f = msg.getCreator()) && proto.santiago.web.play.Creator.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    created: jspb.Message.getFieldWithDefault(msg, 6, 0),
    updated: jspb.Message.getFieldWithDefault(msg, 7, 0),
    playelementsettings: (f = msg.getPlayelementsettings()) && proto.santiago.web.play.PlayElementSettings.toObject(includeInstance, f),
    publishstatetype: jspb.Message.getFieldWithDefault(msg, 9, 0),
    likes: jspb.Message.getFieldWithDefault(msg, 10, 0),
    publishat: jspb.Message.getFieldWithDefault(msg, 11, 0),
    thumbnailurl: jspb.Message.getFieldWithDefault(msg, 12, ""),
    moderationstate: jspb.Message.getFieldWithDefault(msg, 13, 0),
    shortcode: jspb.Message.getFieldWithDefault(msg, 14, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.PlayElement}
 */
proto.santiago.web.play.PlayElement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.PlayElement;
  return proto.santiago.web.play.PlayElement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.PlayElement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.PlayElement}
 */
proto.santiago.web.play.PlayElement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesignid(value);
      break;
    case 3:
      var value = new proto.santiago.web.play.Creator;
      reader.readMessage(value,proto.santiago.web.play.Creator.deserializeBinaryFromReader);
      msg.setCreator(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreated(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUpdated(value);
      break;
    case 8:
      var value = new proto.santiago.web.play.PlayElementSettings;
      reader.readMessage(value,proto.santiago.web.play.PlayElementSettings.deserializeBinaryFromReader);
      msg.setPlayelementsettings(value);
      break;
    case 9:
      var value = /** @type {!proto.santiago.web.play.PublishStateType} */ (reader.readEnum());
      msg.setPublishstatetype(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLikes(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPublishat(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setThumbnailurl(value);
      break;
    case 13:
      var value = /** @type {!proto.santiago.web.play.ModerationStateType} */ (reader.readEnum());
      msg.setModerationstate(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.PlayElement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.PlayElement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.PlayElement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.PlayElement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDesignid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreator();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.santiago.web.play.Creator.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getPlayelementsettings();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.santiago.web.play.PlayElementSettings.serializeBinaryToWriter
    );
  }
  f = message.getPublishstatetype();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getModerationstate();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.santiago.web.play.PlayElement.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.PlayElement} returns this
 */
proto.santiago.web.play.PlayElement.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string designId = 2;
 * @return {string}
 */
proto.santiago.web.play.PlayElement.prototype.getDesignid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.PlayElement} returns this
 */
proto.santiago.web.play.PlayElement.prototype.setDesignid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Creator creator = 3;
 * @return {?proto.santiago.web.play.Creator}
 */
proto.santiago.web.play.PlayElement.prototype.getCreator = function() {
  return /** @type{?proto.santiago.web.play.Creator} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.Creator, 3));
};


/**
 * @param {?proto.santiago.web.play.Creator|undefined} value
 * @return {!proto.santiago.web.play.PlayElement} returns this
*/
proto.santiago.web.play.PlayElement.prototype.setCreator = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.PlayElement} returns this
 */
proto.santiago.web.play.PlayElement.prototype.clearCreator = function() {
  return this.setCreator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayElement.prototype.hasCreator = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.santiago.web.play.PlayElement.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.PlayElement} returns this
 */
proto.santiago.web.play.PlayElement.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.santiago.web.play.PlayElement.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.PlayElement} returns this
 */
proto.santiago.web.play.PlayElement.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.PlayElement} returns this
 */
proto.santiago.web.play.PlayElement.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayElement.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 created = 6;
 * @return {number}
 */
proto.santiago.web.play.PlayElement.prototype.getCreated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.PlayElement} returns this
 */
proto.santiago.web.play.PlayElement.prototype.setCreated = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.PlayElement} returns this
 */
proto.santiago.web.play.PlayElement.prototype.clearCreated = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayElement.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 updated = 7;
 * @return {number}
 */
proto.santiago.web.play.PlayElement.prototype.getUpdated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.PlayElement} returns this
 */
proto.santiago.web.play.PlayElement.prototype.setUpdated = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.PlayElement} returns this
 */
proto.santiago.web.play.PlayElement.prototype.clearUpdated = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayElement.prototype.hasUpdated = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional PlayElementSettings playElementSettings = 8;
 * @return {?proto.santiago.web.play.PlayElementSettings}
 */
proto.santiago.web.play.PlayElement.prototype.getPlayelementsettings = function() {
  return /** @type{?proto.santiago.web.play.PlayElementSettings} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.PlayElementSettings, 8));
};


/**
 * @param {?proto.santiago.web.play.PlayElementSettings|undefined} value
 * @return {!proto.santiago.web.play.PlayElement} returns this
*/
proto.santiago.web.play.PlayElement.prototype.setPlayelementsettings = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.PlayElement} returns this
 */
proto.santiago.web.play.PlayElement.prototype.clearPlayelementsettings = function() {
  return this.setPlayelementsettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayElement.prototype.hasPlayelementsettings = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional PublishStateType publishStateType = 9;
 * @return {!proto.santiago.web.play.PublishStateType}
 */
proto.santiago.web.play.PlayElement.prototype.getPublishstatetype = function() {
  return /** @type {!proto.santiago.web.play.PublishStateType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.santiago.web.play.PublishStateType} value
 * @return {!proto.santiago.web.play.PlayElement} returns this
 */
proto.santiago.web.play.PlayElement.prototype.setPublishstatetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional int32 likes = 10;
 * @return {number}
 */
proto.santiago.web.play.PlayElement.prototype.getLikes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.PlayElement} returns this
 */
proto.santiago.web.play.PlayElement.prototype.setLikes = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.PlayElement} returns this
 */
proto.santiago.web.play.PlayElement.prototype.clearLikes = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayElement.prototype.hasLikes = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint32 publishAt = 11;
 * @return {number}
 */
proto.santiago.web.play.PlayElement.prototype.getPublishat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.PlayElement} returns this
 */
proto.santiago.web.play.PlayElement.prototype.setPublishat = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.PlayElement} returns this
 */
proto.santiago.web.play.PlayElement.prototype.clearPublishat = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayElement.prototype.hasPublishat = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string thumbnailUrl = 12;
 * @return {string}
 */
proto.santiago.web.play.PlayElement.prototype.getThumbnailurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.PlayElement} returns this
 */
proto.santiago.web.play.PlayElement.prototype.setThumbnailurl = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.PlayElement} returns this
 */
proto.santiago.web.play.PlayElement.prototype.clearThumbnailurl = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayElement.prototype.hasThumbnailurl = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ModerationStateType moderationState = 13;
 * @return {!proto.santiago.web.play.ModerationStateType}
 */
proto.santiago.web.play.PlayElement.prototype.getModerationstate = function() {
  return /** @type {!proto.santiago.web.play.ModerationStateType} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.santiago.web.play.ModerationStateType} value
 * @return {!proto.santiago.web.play.PlayElement} returns this
 */
proto.santiago.web.play.PlayElement.prototype.setModerationstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional string shortCode = 14;
 * @return {string}
 */
proto.santiago.web.play.PlayElement.prototype.getShortcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.PlayElement} returns this
 */
proto.santiago.web.play.PlayElement.prototype.setShortcode = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.PlayElement} returns this
 */
proto.santiago.web.play.PlayElement.prototype.clearShortcode = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayElement.prototype.hasShortcode = function() {
  return jspb.Message.getField(this, 14) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.PlayElementDesign.repeatedFields_ = [7,8,9,11,14,15,17];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.PlayElementDesign.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.PlayElementDesign.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.PlayElementDesign} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.PlayElementDesign.toObject = function(includeInstance, msg) {
  var f, obj = {
    designid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    designname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    updated: jspb.Message.getFieldWithDefault(msg, 4, 0),
    designmetadata: (f = msg.getDesignmetadata()) && proto.santiago.web.play.DesignMetadata.toObject(includeInstance, f),
    maprotation: (f = msg.getMaprotation()) && proto.santiago.web.play.MapRotation.toObject(includeInstance, f),
    mutatorsList: jspb.Message.toObjectList(msg.getMutatorsList(),
    proto.santiago.web.play.Mutator.toObject, includeInstance),
    assetcategoriesList: jspb.Message.toObjectList(msg.getAssetcategoriesList(),
    proto.santiago.web.play.AssetCategory.toObject, includeInstance),
    licenserequirementsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    modrules: (f = msg.getModrules()) && proto.santiago.web.play.ModRules.toObject(includeInstance, f),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    proto.santiago.web.play.Tag.toObject, includeInstance),
    blazesettings: (f = msg.getBlazesettings()) && proto.santiago.web.play.BlazePlayElementDesignSettings.toObject(includeInstance, f),
    modleveldataid: jspb.Message.getFieldWithDefault(msg, 13, ""),
    attachmentsList: jspb.Message.toObjectList(msg.getAttachmentsList(),
    proto.santiago.web.play.Attachment.toObject, includeInstance),
    grouplicensesList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    attachmentcompilestatus: jspb.Message.getFieldWithDefault(msg, 16, 0),
    serverhostlicenserequirementsList: (f = jspb.Message.getRepeatedField(msg, 17)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.PlayElementDesign}
 */
proto.santiago.web.play.PlayElementDesign.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.PlayElementDesign;
  return proto.santiago.web.play.PlayElementDesign.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.PlayElementDesign} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.PlayElementDesign}
 */
proto.santiago.web.play.PlayElementDesign.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesignid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesignname(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUpdated(value);
      break;
    case 5:
      var value = new proto.santiago.web.play.DesignMetadata;
      reader.readMessage(value,proto.santiago.web.play.DesignMetadata.deserializeBinaryFromReader);
      msg.setDesignmetadata(value);
      break;
    case 6:
      var value = new proto.santiago.web.play.MapRotation;
      reader.readMessage(value,proto.santiago.web.play.MapRotation.deserializeBinaryFromReader);
      msg.setMaprotation(value);
      break;
    case 7:
      var value = new proto.santiago.web.play.Mutator;
      reader.readMessage(value,proto.santiago.web.play.Mutator.deserializeBinaryFromReader);
      msg.addMutators(value);
      break;
    case 8:
      var value = new proto.santiago.web.play.AssetCategory;
      reader.readMessage(value,proto.santiago.web.play.AssetCategory.deserializeBinaryFromReader);
      msg.addAssetcategories(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addLicenserequirements(value);
      break;
    case 10:
      var value = new proto.santiago.web.play.ModRules;
      reader.readMessage(value,proto.santiago.web.play.ModRules.deserializeBinaryFromReader);
      msg.setModrules(value);
      break;
    case 11:
      var value = new proto.santiago.web.play.Tag;
      reader.readMessage(value,proto.santiago.web.play.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 12:
      var value = new proto.santiago.web.play.BlazePlayElementDesignSettings;
      reader.readMessage(value,proto.santiago.web.play.BlazePlayElementDesignSettings.deserializeBinaryFromReader);
      msg.setBlazesettings(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setModleveldataid(value);
      break;
    case 14:
      var value = new proto.santiago.web.play.Attachment;
      reader.readMessage(value,proto.santiago.web.play.Attachment.deserializeBinaryFromReader);
      msg.addAttachments(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addGrouplicenses(value);
      break;
    case 16:
      var value = /** @type {!proto.santiago.web.play.AttachmentCompileStatus} */ (reader.readEnum());
      msg.setAttachmentcompilestatus(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.addServerhostlicenserequirements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.PlayElementDesign.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.PlayElementDesign.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.PlayElementDesign} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.PlayElementDesign.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDesignid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDesignname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getDesignmetadata();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.santiago.web.play.DesignMetadata.serializeBinaryToWriter
    );
  }
  f = message.getMaprotation();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.santiago.web.play.MapRotation.serializeBinaryToWriter
    );
  }
  f = message.getMutatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.santiago.web.play.Mutator.serializeBinaryToWriter
    );
  }
  f = message.getAssetcategoriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.santiago.web.play.AssetCategory.serializeBinaryToWriter
    );
  }
  f = message.getLicenserequirementsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getModrules();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.santiago.web.play.ModRules.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.santiago.web.play.Tag.serializeBinaryToWriter
    );
  }
  f = message.getBlazesettings();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.santiago.web.play.BlazePlayElementDesignSettings.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.santiago.web.play.Attachment.serializeBinaryToWriter
    );
  }
  f = message.getGrouplicensesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
  f = message.getAttachmentcompilestatus();
  if (f !== 0.0) {
    writer.writeEnum(
      16,
      f
    );
  }
  f = message.getServerhostlicenserequirementsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      17,
      f
    );
  }
};


/**
 * optional string designId = 1;
 * @return {string}
 */
proto.santiago.web.play.PlayElementDesign.prototype.getDesignid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.setDesignid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string designName = 2;
 * @return {string}
 */
proto.santiago.web.play.PlayElementDesign.prototype.getDesignname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.setDesignname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 updated = 4;
 * @return {number}
 */
proto.santiago.web.play.PlayElementDesign.prototype.getUpdated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.setUpdated = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.clearUpdated = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayElementDesign.prototype.hasUpdated = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DesignMetadata designMetadata = 5;
 * @return {?proto.santiago.web.play.DesignMetadata}
 */
proto.santiago.web.play.PlayElementDesign.prototype.getDesignmetadata = function() {
  return /** @type{?proto.santiago.web.play.DesignMetadata} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.DesignMetadata, 5));
};


/**
 * @param {?proto.santiago.web.play.DesignMetadata|undefined} value
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
*/
proto.santiago.web.play.PlayElementDesign.prototype.setDesignmetadata = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.clearDesignmetadata = function() {
  return this.setDesignmetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayElementDesign.prototype.hasDesignmetadata = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MapRotation mapRotation = 6;
 * @return {?proto.santiago.web.play.MapRotation}
 */
proto.santiago.web.play.PlayElementDesign.prototype.getMaprotation = function() {
  return /** @type{?proto.santiago.web.play.MapRotation} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.MapRotation, 6));
};


/**
 * @param {?proto.santiago.web.play.MapRotation|undefined} value
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
*/
proto.santiago.web.play.PlayElementDesign.prototype.setMaprotation = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.clearMaprotation = function() {
  return this.setMaprotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayElementDesign.prototype.hasMaprotation = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated Mutator mutators = 7;
 * @return {!Array<!proto.santiago.web.play.Mutator>}
 */
proto.santiago.web.play.PlayElementDesign.prototype.getMutatorsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.Mutator>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.Mutator, 7));
};


/**
 * @param {!Array<!proto.santiago.web.play.Mutator>} value
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
*/
proto.santiago.web.play.PlayElementDesign.prototype.setMutatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.santiago.web.play.Mutator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.Mutator}
 */
proto.santiago.web.play.PlayElementDesign.prototype.addMutators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.santiago.web.play.Mutator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.clearMutatorsList = function() {
  return this.setMutatorsList([]);
};


/**
 * repeated AssetCategory assetCategories = 8;
 * @return {!Array<!proto.santiago.web.play.AssetCategory>}
 */
proto.santiago.web.play.PlayElementDesign.prototype.getAssetcategoriesList = function() {
  return /** @type{!Array<!proto.santiago.web.play.AssetCategory>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.AssetCategory, 8));
};


/**
 * @param {!Array<!proto.santiago.web.play.AssetCategory>} value
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
*/
proto.santiago.web.play.PlayElementDesign.prototype.setAssetcategoriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.santiago.web.play.AssetCategory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.AssetCategory}
 */
proto.santiago.web.play.PlayElementDesign.prototype.addAssetcategories = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.santiago.web.play.AssetCategory, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.clearAssetcategoriesList = function() {
  return this.setAssetcategoriesList([]);
};


/**
 * repeated string licenseRequirements = 9;
 * @return {!Array<string>}
 */
proto.santiago.web.play.PlayElementDesign.prototype.getLicenserequirementsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.setLicenserequirementsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.addLicenserequirements = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.clearLicenserequirementsList = function() {
  return this.setLicenserequirementsList([]);
};


/**
 * optional ModRules modRules = 10;
 * @return {?proto.santiago.web.play.ModRules}
 */
proto.santiago.web.play.PlayElementDesign.prototype.getModrules = function() {
  return /** @type{?proto.santiago.web.play.ModRules} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.ModRules, 10));
};


/**
 * @param {?proto.santiago.web.play.ModRules|undefined} value
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
*/
proto.santiago.web.play.PlayElementDesign.prototype.setModrules = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.clearModrules = function() {
  return this.setModrules(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayElementDesign.prototype.hasModrules = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated Tag tags = 11;
 * @return {!Array<!proto.santiago.web.play.Tag>}
 */
proto.santiago.web.play.PlayElementDesign.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.Tag, 11));
};


/**
 * @param {!Array<!proto.santiago.web.play.Tag>} value
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
*/
proto.santiago.web.play.PlayElementDesign.prototype.setTagsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.santiago.web.play.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.Tag}
 */
proto.santiago.web.play.PlayElementDesign.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.santiago.web.play.Tag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional BlazePlayElementDesignSettings blazeSettings = 12;
 * @return {?proto.santiago.web.play.BlazePlayElementDesignSettings}
 */
proto.santiago.web.play.PlayElementDesign.prototype.getBlazesettings = function() {
  return /** @type{?proto.santiago.web.play.BlazePlayElementDesignSettings} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.BlazePlayElementDesignSettings, 12));
};


/**
 * @param {?proto.santiago.web.play.BlazePlayElementDesignSettings|undefined} value
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
*/
proto.santiago.web.play.PlayElementDesign.prototype.setBlazesettings = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.clearBlazesettings = function() {
  return this.setBlazesettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayElementDesign.prototype.hasBlazesettings = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string modLevelDataId = 13;
 * @return {string}
 */
proto.santiago.web.play.PlayElementDesign.prototype.getModleveldataid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.setModleveldataid = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.clearModleveldataid = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayElementDesign.prototype.hasModleveldataid = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * repeated Attachment attachments = 14;
 * @return {!Array<!proto.santiago.web.play.Attachment>}
 */
proto.santiago.web.play.PlayElementDesign.prototype.getAttachmentsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.Attachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.Attachment, 14));
};


/**
 * @param {!Array<!proto.santiago.web.play.Attachment>} value
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
*/
proto.santiago.web.play.PlayElementDesign.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.santiago.web.play.Attachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.Attachment}
 */
proto.santiago.web.play.PlayElementDesign.prototype.addAttachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.santiago.web.play.Attachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};


/**
 * repeated string groupLicenses = 15;
 * @return {!Array<string>}
 */
proto.santiago.web.play.PlayElementDesign.prototype.getGrouplicensesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.setGrouplicensesList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.addGrouplicenses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.clearGrouplicensesList = function() {
  return this.setGrouplicensesList([]);
};


/**
 * optional AttachmentCompileStatus attachmentCompileStatus = 16;
 * @return {!proto.santiago.web.play.AttachmentCompileStatus}
 */
proto.santiago.web.play.PlayElementDesign.prototype.getAttachmentcompilestatus = function() {
  return /** @type {!proto.santiago.web.play.AttachmentCompileStatus} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {!proto.santiago.web.play.AttachmentCompileStatus} value
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.setAttachmentcompilestatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 16, value);
};


/**
 * repeated string serverHostLicenseRequirements = 17;
 * @return {!Array<string>}
 */
proto.santiago.web.play.PlayElementDesign.prototype.getServerhostlicenserequirementsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 17));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.setServerhostlicenserequirementsList = function(value) {
  return jspb.Message.setField(this, 17, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.addServerhostlicenserequirements = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 17, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.PlayElementDesign} returns this
 */
proto.santiago.web.play.PlayElementDesign.prototype.clearServerhostlicenserequirementsList = function() {
  return this.setServerhostlicenserequirementsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.Creator.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.Creator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.Creator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Creator.toObject = function(includeInstance, msg) {
  var f, obj = {
    internalcreator: (f = msg.getInternalcreator()) && proto.santiago.web.play.InternalCreator.toObject(includeInstance, f),
    playercreator: (f = msg.getPlayercreator()) && proto.santiago.web.play.PlayerCreator.toObject(includeInstance, f),
    externalcreator: (f = msg.getExternalcreator()) && proto.santiago.web.play.ExternalCreator.toObject(includeInstance, f),
    trustedcreator: (f = msg.getTrustedcreator()) && proto.santiago.web.play.PlayerCreator.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.Creator}
 */
proto.santiago.web.play.Creator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.Creator;
  return proto.santiago.web.play.Creator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.Creator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.Creator}
 */
proto.santiago.web.play.Creator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.InternalCreator;
      reader.readMessage(value,proto.santiago.web.play.InternalCreator.deserializeBinaryFromReader);
      msg.setInternalcreator(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.PlayerCreator;
      reader.readMessage(value,proto.santiago.web.play.PlayerCreator.deserializeBinaryFromReader);
      msg.setPlayercreator(value);
      break;
    case 3:
      var value = new proto.santiago.web.play.ExternalCreator;
      reader.readMessage(value,proto.santiago.web.play.ExternalCreator.deserializeBinaryFromReader);
      msg.setExternalcreator(value);
      break;
    case 4:
      var value = new proto.santiago.web.play.PlayerCreator;
      reader.readMessage(value,proto.santiago.web.play.PlayerCreator.deserializeBinaryFromReader);
      msg.setTrustedcreator(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.Creator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.Creator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.Creator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Creator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInternalcreator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.santiago.web.play.InternalCreator.serializeBinaryToWriter
    );
  }
  f = message.getPlayercreator();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.santiago.web.play.PlayerCreator.serializeBinaryToWriter
    );
  }
  f = message.getExternalcreator();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.santiago.web.play.ExternalCreator.serializeBinaryToWriter
    );
  }
  f = message.getTrustedcreator();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.santiago.web.play.PlayerCreator.serializeBinaryToWriter
    );
  }
};


/**
 * optional InternalCreator internalCreator = 1;
 * @return {?proto.santiago.web.play.InternalCreator}
 */
proto.santiago.web.play.Creator.prototype.getInternalcreator = function() {
  return /** @type{?proto.santiago.web.play.InternalCreator} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.InternalCreator, 1));
};


/**
 * @param {?proto.santiago.web.play.InternalCreator|undefined} value
 * @return {!proto.santiago.web.play.Creator} returns this
*/
proto.santiago.web.play.Creator.prototype.setInternalcreator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.Creator} returns this
 */
proto.santiago.web.play.Creator.prototype.clearInternalcreator = function() {
  return this.setInternalcreator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.Creator.prototype.hasInternalcreator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PlayerCreator playerCreator = 2;
 * @return {?proto.santiago.web.play.PlayerCreator}
 */
proto.santiago.web.play.Creator.prototype.getPlayercreator = function() {
  return /** @type{?proto.santiago.web.play.PlayerCreator} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.PlayerCreator, 2));
};


/**
 * @param {?proto.santiago.web.play.PlayerCreator|undefined} value
 * @return {!proto.santiago.web.play.Creator} returns this
*/
proto.santiago.web.play.Creator.prototype.setPlayercreator = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.Creator} returns this
 */
proto.santiago.web.play.Creator.prototype.clearPlayercreator = function() {
  return this.setPlayercreator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.Creator.prototype.hasPlayercreator = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ExternalCreator externalCreator = 3;
 * @return {?proto.santiago.web.play.ExternalCreator}
 */
proto.santiago.web.play.Creator.prototype.getExternalcreator = function() {
  return /** @type{?proto.santiago.web.play.ExternalCreator} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.ExternalCreator, 3));
};


/**
 * @param {?proto.santiago.web.play.ExternalCreator|undefined} value
 * @return {!proto.santiago.web.play.Creator} returns this
*/
proto.santiago.web.play.Creator.prototype.setExternalcreator = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.Creator} returns this
 */
proto.santiago.web.play.Creator.prototype.clearExternalcreator = function() {
  return this.setExternalcreator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.Creator.prototype.hasExternalcreator = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PlayerCreator trustedCreator = 4;
 * @return {?proto.santiago.web.play.PlayerCreator}
 */
proto.santiago.web.play.Creator.prototype.getTrustedcreator = function() {
  return /** @type{?proto.santiago.web.play.PlayerCreator} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.PlayerCreator, 4));
};


/**
 * @param {?proto.santiago.web.play.PlayerCreator|undefined} value
 * @return {!proto.santiago.web.play.Creator} returns this
*/
proto.santiago.web.play.Creator.prototype.setTrustedcreator = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.Creator} returns this
 */
proto.santiago.web.play.Creator.prototype.clearTrustedcreator = function() {
  return this.setTrustedcreator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.Creator.prototype.hasTrustedcreator = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.InternalCreator.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.InternalCreator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.InternalCreator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.InternalCreator.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.InternalCreator}
 */
proto.santiago.web.play.InternalCreator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.InternalCreator;
  return proto.santiago.web.play.InternalCreator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.InternalCreator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.InternalCreator}
 */
proto.santiago.web.play.InternalCreator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.InternalCreator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.InternalCreator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.InternalCreator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.InternalCreator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.PlayerCreator.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.PlayerCreator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.PlayerCreator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.PlayerCreator.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: (f = msg.getPlayer()) && proto.santiago.web.play.Player.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.PlayerCreator}
 */
proto.santiago.web.play.PlayerCreator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.PlayerCreator;
  return proto.santiago.web.play.PlayerCreator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.PlayerCreator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.PlayerCreator}
 */
proto.santiago.web.play.PlayerCreator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.Player;
      reader.readMessage(value,proto.santiago.web.play.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.PlayerCreator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.PlayerCreator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.PlayerCreator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.PlayerCreator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.santiago.web.play.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional Player player = 1;
 * @return {?proto.santiago.web.play.Player}
 */
proto.santiago.web.play.PlayerCreator.prototype.getPlayer = function() {
  return /** @type{?proto.santiago.web.play.Player} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.Player, 1));
};


/**
 * @param {?proto.santiago.web.play.Player|undefined} value
 * @return {!proto.santiago.web.play.PlayerCreator} returns this
*/
proto.santiago.web.play.PlayerCreator.prototype.setPlayer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.PlayerCreator} returns this
 */
proto.santiago.web.play.PlayerCreator.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayerCreator.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.ExternalCreator.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.ExternalCreator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.ExternalCreator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ExternalCreator.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.ExternalCreator}
 */
proto.santiago.web.play.ExternalCreator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.ExternalCreator;
  return proto.santiago.web.play.ExternalCreator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.ExternalCreator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.ExternalCreator}
 */
proto.santiago.web.play.ExternalCreator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.ExternalCreator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.ExternalCreator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.ExternalCreator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ExternalCreator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.Player.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.Player.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.Player} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Player.toObject = function(includeInstance, msg) {
  var f, obj = {
    nucleusid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    personaid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    platform: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.Player}
 */
proto.santiago.web.play.Player.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.Player;
  return proto.santiago.web.play.Player.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.Player} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.Player}
 */
proto.santiago.web.play.Player.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNucleusid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPersonaid(value);
      break;
    case 3:
      var value = /** @type {!proto.santiago.web.play.Platform} */ (reader.readEnum());
      msg.setPlatform(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.Player.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.Player.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.Player} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Player.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNucleusid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPersonaid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPlatform();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional int64 nucleusId = 1;
 * @return {number}
 */
proto.santiago.web.play.Player.prototype.getNucleusid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.Player} returns this
 */
proto.santiago.web.play.Player.prototype.setNucleusid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 personaId = 2;
 * @return {number}
 */
proto.santiago.web.play.Player.prototype.getPersonaid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.Player} returns this
 */
proto.santiago.web.play.Player.prototype.setPersonaid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Platform platform = 3;
 * @return {!proto.santiago.web.play.Platform}
 */
proto.santiago.web.play.Player.prototype.getPlatform = function() {
  return /** @type {!proto.santiago.web.play.Platform} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.santiago.web.play.Platform} value
 * @return {!proto.santiago.web.play.Player} returns this
 */
proto.santiago.web.play.Player.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.Tag.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.Tag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.Tag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Tag.toObject = function(includeInstance, msg) {
  var f, obj = {
    tagid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    priority: jspb.Message.getFieldWithDefault(msg, 2, 0),
    metadata: (f = msg.getMetadata()) && proto.santiago.web.play.Metadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.Tag}
 */
proto.santiago.web.play.Tag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.Tag;
  return proto.santiago.web.play.Tag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.Tag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.Tag}
 */
proto.santiago.web.play.Tag.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTagid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
      break;
    case 3:
      var value = new proto.santiago.web.play.Metadata;
      reader.readMessage(value,proto.santiago.web.play.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.Tag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.Tag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.Tag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Tag.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTagid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.santiago.web.play.Metadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tagId = 1;
 * @return {string}
 */
proto.santiago.web.play.Tag.prototype.getTagid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.Tag} returns this
 */
proto.santiago.web.play.Tag.prototype.setTagid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 priority = 2;
 * @return {number}
 */
proto.santiago.web.play.Tag.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.Tag} returns this
 */
proto.santiago.web.play.Tag.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Metadata metadata = 3;
 * @return {?proto.santiago.web.play.Metadata}
 */
proto.santiago.web.play.Tag.prototype.getMetadata = function() {
  return /** @type{?proto.santiago.web.play.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.Metadata, 3));
};


/**
 * @param {?proto.santiago.web.play.Metadata|undefined} value
 * @return {!proto.santiago.web.play.Tag} returns this
*/
proto.santiago.web.play.Tag.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.Tag} returns this
 */
proto.santiago.web.play.Tag.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.Tag.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.Metadata.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.Metadata.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.Metadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.Metadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Metadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    translationsList: jspb.Message.toObjectList(msg.getTranslationsList(),
    proto.santiago.web.play.TranslationMetadata.toObject, includeInstance),
    resourcesList: jspb.Message.toObjectList(msg.getResourcesList(),
    proto.santiago.web.play.Resource.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.Metadata}
 */
proto.santiago.web.play.Metadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.Metadata;
  return proto.santiago.web.play.Metadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.Metadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.Metadata}
 */
proto.santiago.web.play.Metadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.TranslationMetadata;
      reader.readMessage(value,proto.santiago.web.play.TranslationMetadata.deserializeBinaryFromReader);
      msg.addTranslations(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.Resource;
      reader.readMessage(value,proto.santiago.web.play.Resource.deserializeBinaryFromReader);
      msg.addResources(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.Metadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.Metadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.Metadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Metadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranslationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.santiago.web.play.TranslationMetadata.serializeBinaryToWriter
    );
  }
  f = message.getResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.santiago.web.play.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TranslationMetadata translations = 1;
 * @return {!Array<!proto.santiago.web.play.TranslationMetadata>}
 */
proto.santiago.web.play.Metadata.prototype.getTranslationsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.TranslationMetadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.TranslationMetadata, 1));
};


/**
 * @param {!Array<!proto.santiago.web.play.TranslationMetadata>} value
 * @return {!proto.santiago.web.play.Metadata} returns this
*/
proto.santiago.web.play.Metadata.prototype.setTranslationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.santiago.web.play.TranslationMetadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.TranslationMetadata}
 */
proto.santiago.web.play.Metadata.prototype.addTranslations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.santiago.web.play.TranslationMetadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.Metadata} returns this
 */
proto.santiago.web.play.Metadata.prototype.clearTranslationsList = function() {
  return this.setTranslationsList([]);
};


/**
 * repeated Resource resources = 2;
 * @return {!Array<!proto.santiago.web.play.Resource>}
 */
proto.santiago.web.play.Metadata.prototype.getResourcesList = function() {
  return /** @type{!Array<!proto.santiago.web.play.Resource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.Resource, 2));
};


/**
 * @param {!Array<!proto.santiago.web.play.Resource>} value
 * @return {!proto.santiago.web.play.Metadata} returns this
*/
proto.santiago.web.play.Metadata.prototype.setResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.santiago.web.play.Resource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.Resource}
 */
proto.santiago.web.play.Metadata.prototype.addResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.santiago.web.play.Resource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.Metadata} returns this
 */
proto.santiago.web.play.Metadata.prototype.clearResourcesList = function() {
  return this.setResourcesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.TranslationMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.TranslationMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.TranslationMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.TranslationMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, ""),
    translationid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.TranslationMetadata}
 */
proto.santiago.web.play.TranslationMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.TranslationMetadata;
  return proto.santiago.web.play.TranslationMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.TranslationMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.TranslationMetadata}
 */
proto.santiago.web.play.TranslationMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTranslationid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.TranslationMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.TranslationMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.TranslationMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.TranslationMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTranslationid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string kind = 1;
 * @return {string}
 */
proto.santiago.web.play.TranslationMetadata.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.TranslationMetadata} returns this
 */
proto.santiago.web.play.TranslationMetadata.prototype.setKind = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string translationId = 2;
 * @return {string}
 */
proto.santiago.web.play.TranslationMetadata.prototype.getTranslationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.TranslationMetadata} returns this
 */
proto.santiago.web.play.TranslationMetadata.prototype.setTranslationid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.Resource.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.Resource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.Resource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Resource.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.santiago.web.play.ResourceLocation.toObject(includeInstance, f),
    kind: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.Resource}
 */
proto.santiago.web.play.Resource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.Resource;
  return proto.santiago.web.play.Resource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.Resource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.Resource}
 */
proto.santiago.web.play.Resource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.ResourceLocation;
      reader.readMessage(value,proto.santiago.web.play.ResourceLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.Resource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.Resource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.Resource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Resource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.santiago.web.play.ResourceLocation.serializeBinaryToWriter
    );
  }
  f = message.getKind();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ResourceLocation location = 1;
 * @return {?proto.santiago.web.play.ResourceLocation}
 */
proto.santiago.web.play.Resource.prototype.getLocation = function() {
  return /** @type{?proto.santiago.web.play.ResourceLocation} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.ResourceLocation, 1));
};


/**
 * @param {?proto.santiago.web.play.ResourceLocation|undefined} value
 * @return {!proto.santiago.web.play.Resource} returns this
*/
proto.santiago.web.play.Resource.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.Resource} returns this
 */
proto.santiago.web.play.Resource.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.Resource.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string kind = 2;
 * @return {string}
 */
proto.santiago.web.play.Resource.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.Resource} returns this
 */
proto.santiago.web.play.Resource.prototype.setKind = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.ResourceLocation.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.ResourceLocation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.ResourceLocation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ResourceLocation.toObject = function(includeInstance, msg) {
  var f, obj = {
    ref: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.ResourceLocation}
 */
proto.santiago.web.play.ResourceLocation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.ResourceLocation;
  return proto.santiago.web.play.ResourceLocation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.ResourceLocation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.ResourceLocation}
 */
proto.santiago.web.play.ResourceLocation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRef(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.ResourceLocation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.ResourceLocation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.ResourceLocation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ResourceLocation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string ref = 1;
 * @return {string}
 */
proto.santiago.web.play.ResourceLocation.prototype.getRef = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.ResourceLocation} returns this
 */
proto.santiago.web.play.ResourceLocation.prototype.setRef = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.ResourceLocation} returns this
 */
proto.santiago.web.play.ResourceLocation.prototype.clearRef = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.ResourceLocation.prototype.hasRef = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.santiago.web.play.ResourceLocation.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.ResourceLocation} returns this
 */
proto.santiago.web.play.ResourceLocation.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.ResourceLocation} returns this
 */
proto.santiago.web.play.ResourceLocation.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.ResourceLocation.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.Attachment.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.Attachment.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.Attachment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.Attachment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Attachment.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    filename: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isprocessable: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    processingstatus: jspb.Message.getFieldWithDefault(msg, 5, 0),
    attachmentdata: (f = msg.getAttachmentdata()) && proto.santiago.web.play.AttachmentData.toObject(includeInstance, f),
    attachmenttype: jspb.Message.getFieldWithDefault(msg, 7, 0),
    metadata: jspb.Message.getFieldWithDefault(msg, 8, ""),
    errorsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.Attachment}
 */
proto.santiago.web.play.Attachment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.Attachment;
  return proto.santiago.web.play.Attachment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.Attachment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.Attachment}
 */
proto.santiago.web.play.Attachment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsprocessable(value);
      break;
    case 5:
      var value = /** @type {!proto.santiago.web.play.ProcessingStatus} */ (reader.readEnum());
      msg.setProcessingstatus(value);
      break;
    case 6:
      var value = new proto.santiago.web.play.AttachmentData;
      reader.readMessage(value,proto.santiago.web.play.AttachmentData.deserializeBinaryFromReader);
      msg.setAttachmentdata(value);
      break;
    case 7:
      var value = /** @type {!proto.santiago.web.play.AttachmentType} */ (reader.readEnum());
      msg.setAttachmenttype(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetadata(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.Attachment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.Attachment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.Attachment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Attachment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsprocessable();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getProcessingstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getAttachmentdata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.santiago.web.play.AttachmentData.serializeBinaryToWriter
    );
  }
  f = message.getAttachmenttype();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.santiago.web.play.Attachment.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.Attachment} returns this
 */
proto.santiago.web.play.Attachment.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.santiago.web.play.Attachment.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.Attachment} returns this
 */
proto.santiago.web.play.Attachment.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string filename = 3;
 * @return {string}
 */
proto.santiago.web.play.Attachment.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.Attachment} returns this
 */
proto.santiago.web.play.Attachment.prototype.setFilename = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.Attachment} returns this
 */
proto.santiago.web.play.Attachment.prototype.clearFilename = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.Attachment.prototype.hasFilename = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool isProcessable = 4;
 * @return {boolean}
 */
proto.santiago.web.play.Attachment.prototype.getIsprocessable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.santiago.web.play.Attachment} returns this
 */
proto.santiago.web.play.Attachment.prototype.setIsprocessable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional ProcessingStatus processingStatus = 5;
 * @return {!proto.santiago.web.play.ProcessingStatus}
 */
proto.santiago.web.play.Attachment.prototype.getProcessingstatus = function() {
  return /** @type {!proto.santiago.web.play.ProcessingStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.santiago.web.play.ProcessingStatus} value
 * @return {!proto.santiago.web.play.Attachment} returns this
 */
proto.santiago.web.play.Attachment.prototype.setProcessingstatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional AttachmentData attachmentData = 6;
 * @return {?proto.santiago.web.play.AttachmentData}
 */
proto.santiago.web.play.Attachment.prototype.getAttachmentdata = function() {
  return /** @type{?proto.santiago.web.play.AttachmentData} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AttachmentData, 6));
};


/**
 * @param {?proto.santiago.web.play.AttachmentData|undefined} value
 * @return {!proto.santiago.web.play.Attachment} returns this
*/
proto.santiago.web.play.Attachment.prototype.setAttachmentdata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.Attachment} returns this
 */
proto.santiago.web.play.Attachment.prototype.clearAttachmentdata = function() {
  return this.setAttachmentdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.Attachment.prototype.hasAttachmentdata = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional AttachmentType attachmentType = 7;
 * @return {!proto.santiago.web.play.AttachmentType}
 */
proto.santiago.web.play.Attachment.prototype.getAttachmenttype = function() {
  return /** @type {!proto.santiago.web.play.AttachmentType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.santiago.web.play.AttachmentType} value
 * @return {!proto.santiago.web.play.Attachment} returns this
 */
proto.santiago.web.play.Attachment.prototype.setAttachmenttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string metadata = 8;
 * @return {string}
 */
proto.santiago.web.play.Attachment.prototype.getMetadata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.Attachment} returns this
 */
proto.santiago.web.play.Attachment.prototype.setMetadata = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.Attachment} returns this
 */
proto.santiago.web.play.Attachment.prototype.clearMetadata = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.Attachment.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated string errors = 9;
 * @return {!Array<string>}
 */
proto.santiago.web.play.Attachment.prototype.getErrorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.santiago.web.play.Attachment} returns this
 */
proto.santiago.web.play.Attachment.prototype.setErrorsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.Attachment} returns this
 */
proto.santiago.web.play.Attachment.prototype.addErrors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.Attachment} returns this
 */
proto.santiago.web.play.Attachment.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.PlayElementSettings.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.PlayElementSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.PlayElementSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.PlayElementSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.PlayElementSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    secret: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messagesList: jspb.Message.toObjectList(msg.getMessagesList(),
    proto.santiago.web.play.GameServerMessage.toObject, includeInstance),
    allowcopies: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.PlayElementSettings}
 */
proto.santiago.web.play.PlayElementSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.PlayElementSettings;
  return proto.santiago.web.play.PlayElementSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.PlayElementSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.PlayElementSettings}
 */
proto.santiago.web.play.PlayElementSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecret(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.GameServerMessage;
      reader.readMessage(value,proto.santiago.web.play.GameServerMessage.deserializeBinaryFromReader);
      msg.addMessages(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowcopies(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.PlayElementSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.PlayElementSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.PlayElementSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.PlayElementSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.santiago.web.play.GameServerMessage.serializeBinaryToWriter
    );
  }
  f = message.getAllowcopies();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string secret = 1;
 * @return {string}
 */
proto.santiago.web.play.PlayElementSettings.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.PlayElementSettings} returns this
 */
proto.santiago.web.play.PlayElementSettings.prototype.setSecret = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.PlayElementSettings} returns this
 */
proto.santiago.web.play.PlayElementSettings.prototype.clearSecret = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.PlayElementSettings.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated GameServerMessage messages = 2;
 * @return {!Array<!proto.santiago.web.play.GameServerMessage>}
 */
proto.santiago.web.play.PlayElementSettings.prototype.getMessagesList = function() {
  return /** @type{!Array<!proto.santiago.web.play.GameServerMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.GameServerMessage, 2));
};


/**
 * @param {!Array<!proto.santiago.web.play.GameServerMessage>} value
 * @return {!proto.santiago.web.play.PlayElementSettings} returns this
*/
proto.santiago.web.play.PlayElementSettings.prototype.setMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.santiago.web.play.GameServerMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.GameServerMessage}
 */
proto.santiago.web.play.PlayElementSettings.prototype.addMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.santiago.web.play.GameServerMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.PlayElementSettings} returns this
 */
proto.santiago.web.play.PlayElementSettings.prototype.clearMessagesList = function() {
  return this.setMessagesList([]);
};


/**
 * optional bool allowCopies = 3;
 * @return {boolean}
 */
proto.santiago.web.play.PlayElementSettings.prototype.getAllowcopies = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.santiago.web.play.PlayElementSettings} returns this
 */
proto.santiago.web.play.PlayElementSettings.prototype.setAllowcopies = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.GameServerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.GameServerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.GameServerMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GameServerMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, ""),
    text: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.GameServerMessage}
 */
proto.santiago.web.play.GameServerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.GameServerMessage;
  return proto.santiago.web.play.GameServerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.GameServerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.GameServerMessage}
 */
proto.santiago.web.play.GameServerMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.GameServerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.GameServerMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.GameServerMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GameServerMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string kind = 1;
 * @return {string}
 */
proto.santiago.web.play.GameServerMessage.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.GameServerMessage} returns this
 */
proto.santiago.web.play.GameServerMessage.prototype.setKind = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.santiago.web.play.GameServerMessage.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.GameServerMessage} returns this
 */
proto.santiago.web.play.GameServerMessage.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.DesignMetadata.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.DesignMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.DesignMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.DesignMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.DesignMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    progressionmode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    firstpartymetadataList: jspb.Message.toObjectList(msg.getFirstpartymetadataList(),
    proto.santiago.web.play.FirstPartyMetadata.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.DesignMetadata}
 */
proto.santiago.web.play.DesignMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.DesignMetadata;
  return proto.santiago.web.play.DesignMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.DesignMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.DesignMetadata}
 */
proto.santiago.web.play.DesignMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProgressionmode(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.FirstPartyMetadata;
      reader.readMessage(value,proto.santiago.web.play.FirstPartyMetadata.deserializeBinaryFromReader);
      msg.addFirstpartymetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.DesignMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.DesignMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.DesignMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.DesignMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirstpartymetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.santiago.web.play.FirstPartyMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string progressionMode = 1;
 * @return {string}
 */
proto.santiago.web.play.DesignMetadata.prototype.getProgressionmode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.DesignMetadata} returns this
 */
proto.santiago.web.play.DesignMetadata.prototype.setProgressionmode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.DesignMetadata} returns this
 */
proto.santiago.web.play.DesignMetadata.prototype.clearProgressionmode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.DesignMetadata.prototype.hasProgressionmode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated FirstPartyMetadata firstPartyMetadata = 2;
 * @return {!Array<!proto.santiago.web.play.FirstPartyMetadata>}
 */
proto.santiago.web.play.DesignMetadata.prototype.getFirstpartymetadataList = function() {
  return /** @type{!Array<!proto.santiago.web.play.FirstPartyMetadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.FirstPartyMetadata, 2));
};


/**
 * @param {!Array<!proto.santiago.web.play.FirstPartyMetadata>} value
 * @return {!proto.santiago.web.play.DesignMetadata} returns this
*/
proto.santiago.web.play.DesignMetadata.prototype.setFirstpartymetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.santiago.web.play.FirstPartyMetadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.FirstPartyMetadata}
 */
proto.santiago.web.play.DesignMetadata.prototype.addFirstpartymetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.santiago.web.play.FirstPartyMetadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.DesignMetadata} returns this
 */
proto.santiago.web.play.DesignMetadata.prototype.clearFirstpartymetadataList = function() {
  return this.setFirstpartymetadataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.FirstPartyMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.FirstPartyMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.FirstPartyMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.FirstPartyMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    psnmetadata: (f = msg.getPsnmetadata()) && proto.santiago.web.play.PSNMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.FirstPartyMetadata}
 */
proto.santiago.web.play.FirstPartyMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.FirstPartyMetadata;
  return proto.santiago.web.play.FirstPartyMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.FirstPartyMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.FirstPartyMetadata}
 */
proto.santiago.web.play.FirstPartyMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.PSNMetadata;
      reader.readMessage(value,proto.santiago.web.play.PSNMetadata.deserializeBinaryFromReader);
      msg.setPsnmetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.FirstPartyMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.FirstPartyMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.FirstPartyMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.FirstPartyMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPsnmetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.santiago.web.play.PSNMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional PSNMetadata psnMetadata = 1;
 * @return {?proto.santiago.web.play.PSNMetadata}
 */
proto.santiago.web.play.FirstPartyMetadata.prototype.getPsnmetadata = function() {
  return /** @type{?proto.santiago.web.play.PSNMetadata} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.PSNMetadata, 1));
};


/**
 * @param {?proto.santiago.web.play.PSNMetadata|undefined} value
 * @return {!proto.santiago.web.play.FirstPartyMetadata} returns this
*/
proto.santiago.web.play.FirstPartyMetadata.prototype.setPsnmetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.FirstPartyMetadata} returns this
 */
proto.santiago.web.play.FirstPartyMetadata.prototype.clearPsnmetadata = function() {
  return this.setPsnmetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.FirstPartyMetadata.prototype.hasPsnmetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.PSNMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.PSNMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.PSNMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.PSNMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    activityid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.PSNMetadata}
 */
proto.santiago.web.play.PSNMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.PSNMetadata;
  return proto.santiago.web.play.PSNMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.PSNMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.PSNMetadata}
 */
proto.santiago.web.play.PSNMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setActivityid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.PSNMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.PSNMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.PSNMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.PSNMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActivityid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string activityId = 1;
 * @return {string}
 */
proto.santiago.web.play.PSNMetadata.prototype.getActivityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.PSNMetadata} returns this
 */
proto.santiago.web.play.PSNMetadata.prototype.setActivityid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.MapRotation.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.MapRotation.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.MapRotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.MapRotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MapRotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapsList: jspb.Message.toObjectList(msg.getMapsList(),
    proto.santiago.web.play.MapEntry.toObject, includeInstance),
    attributes: (f = msg.getAttributes()) && proto.santiago.web.play.MapRotationAttributes.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.MapRotation}
 */
proto.santiago.web.play.MapRotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.MapRotation;
  return proto.santiago.web.play.MapRotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.MapRotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.MapRotation}
 */
proto.santiago.web.play.MapRotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.MapEntry;
      reader.readMessage(value,proto.santiago.web.play.MapEntry.deserializeBinaryFromReader);
      msg.addMaps(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.MapRotationAttributes;
      reader.readMessage(value,proto.santiago.web.play.MapRotationAttributes.deserializeBinaryFromReader);
      msg.setAttributes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.MapRotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.MapRotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.MapRotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MapRotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.santiago.web.play.MapEntry.serializeBinaryToWriter
    );
  }
  f = message.getAttributes();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.santiago.web.play.MapRotationAttributes.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MapEntry maps = 1;
 * @return {!Array<!proto.santiago.web.play.MapEntry>}
 */
proto.santiago.web.play.MapRotation.prototype.getMapsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.MapEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.MapEntry, 1));
};


/**
 * @param {!Array<!proto.santiago.web.play.MapEntry>} value
 * @return {!proto.santiago.web.play.MapRotation} returns this
*/
proto.santiago.web.play.MapRotation.prototype.setMapsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.santiago.web.play.MapEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.MapEntry}
 */
proto.santiago.web.play.MapRotation.prototype.addMaps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.santiago.web.play.MapEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.MapRotation} returns this
 */
proto.santiago.web.play.MapRotation.prototype.clearMapsList = function() {
  return this.setMapsList([]);
};


/**
 * optional MapRotationAttributes attributes = 2;
 * @return {?proto.santiago.web.play.MapRotationAttributes}
 */
proto.santiago.web.play.MapRotation.prototype.getAttributes = function() {
  return /** @type{?proto.santiago.web.play.MapRotationAttributes} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.MapRotationAttributes, 2));
};


/**
 * @param {?proto.santiago.web.play.MapRotationAttributes|undefined} value
 * @return {!proto.santiago.web.play.MapRotation} returns this
*/
proto.santiago.web.play.MapRotation.prototype.setAttributes = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.MapRotation} returns this
 */
proto.santiago.web.play.MapRotation.prototype.clearAttributes = function() {
  return this.setAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.MapRotation.prototype.hasAttributes = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.MapEntry.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.MapEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.MapEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.MapEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MapEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    levelname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    levellocation: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rounds: jspb.Message.getFieldWithDefault(msg, 3, 0),
    allowedspectators: jspb.Message.getFieldWithDefault(msg, 4, 0),
    teamcomposition: (f = msg.getTeamcomposition()) && proto.santiago.web.play.TeamComposition.toObject(includeInstance, f),
    blazegamesettings: (f = msg.getBlazegamesettings()) && proto.santiago.web.play.BlazeGameSettings.toObject(includeInstance, f),
    mutatorsList: jspb.Message.toObjectList(msg.getMutatorsList(),
    proto.santiago.web.play.Mutator.toObject, includeInstance),
    gameserverjoinabilitysettings: (f = msg.getGameserverjoinabilitysettings()) && proto.santiago.web.play.GameServerJoinabilitySettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.MapEntry}
 */
proto.santiago.web.play.MapEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.MapEntry;
  return proto.santiago.web.play.MapEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.MapEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.MapEntry}
 */
proto.santiago.web.play.MapEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLevelname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLevellocation(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRounds(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAllowedspectators(value);
      break;
    case 5:
      var value = new proto.santiago.web.play.TeamComposition;
      reader.readMessage(value,proto.santiago.web.play.TeamComposition.deserializeBinaryFromReader);
      msg.setTeamcomposition(value);
      break;
    case 6:
      var value = new proto.santiago.web.play.BlazeGameSettings;
      reader.readMessage(value,proto.santiago.web.play.BlazeGameSettings.deserializeBinaryFromReader);
      msg.setBlazegamesettings(value);
      break;
    case 7:
      var value = new proto.santiago.web.play.Mutator;
      reader.readMessage(value,proto.santiago.web.play.Mutator.deserializeBinaryFromReader);
      msg.addMutators(value);
      break;
    case 8:
      var value = new proto.santiago.web.play.GameServerJoinabilitySettings;
      reader.readMessage(value,proto.santiago.web.play.GameServerJoinabilitySettings.deserializeBinaryFromReader);
      msg.setGameserverjoinabilitysettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.MapEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.MapEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.MapEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MapEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevelname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLevellocation();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRounds();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getAllowedspectators();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getTeamcomposition();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.santiago.web.play.TeamComposition.serializeBinaryToWriter
    );
  }
  f = message.getBlazegamesettings();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.santiago.web.play.BlazeGameSettings.serializeBinaryToWriter
    );
  }
  f = message.getMutatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.santiago.web.play.Mutator.serializeBinaryToWriter
    );
  }
  f = message.getGameserverjoinabilitysettings();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.santiago.web.play.GameServerJoinabilitySettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional string levelName = 1;
 * @return {string}
 */
proto.santiago.web.play.MapEntry.prototype.getLevelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.MapEntry} returns this
 */
proto.santiago.web.play.MapEntry.prototype.setLevelname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string levelLocation = 2;
 * @return {string}
 */
proto.santiago.web.play.MapEntry.prototype.getLevellocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.MapEntry} returns this
 */
proto.santiago.web.play.MapEntry.prototype.setLevellocation = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 rounds = 3;
 * @return {number}
 */
proto.santiago.web.play.MapEntry.prototype.getRounds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.MapEntry} returns this
 */
proto.santiago.web.play.MapEntry.prototype.setRounds = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 allowedSpectators = 4;
 * @return {number}
 */
proto.santiago.web.play.MapEntry.prototype.getAllowedspectators = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.MapEntry} returns this
 */
proto.santiago.web.play.MapEntry.prototype.setAllowedspectators = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional TeamComposition teamComposition = 5;
 * @return {?proto.santiago.web.play.TeamComposition}
 */
proto.santiago.web.play.MapEntry.prototype.getTeamcomposition = function() {
  return /** @type{?proto.santiago.web.play.TeamComposition} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.TeamComposition, 5));
};


/**
 * @param {?proto.santiago.web.play.TeamComposition|undefined} value
 * @return {!proto.santiago.web.play.MapEntry} returns this
*/
proto.santiago.web.play.MapEntry.prototype.setTeamcomposition = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.MapEntry} returns this
 */
proto.santiago.web.play.MapEntry.prototype.clearTeamcomposition = function() {
  return this.setTeamcomposition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.MapEntry.prototype.hasTeamcomposition = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional BlazeGameSettings blazeGameSettings = 6;
 * @return {?proto.santiago.web.play.BlazeGameSettings}
 */
proto.santiago.web.play.MapEntry.prototype.getBlazegamesettings = function() {
  return /** @type{?proto.santiago.web.play.BlazeGameSettings} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.BlazeGameSettings, 6));
};


/**
 * @param {?proto.santiago.web.play.BlazeGameSettings|undefined} value
 * @return {!proto.santiago.web.play.MapEntry} returns this
*/
proto.santiago.web.play.MapEntry.prototype.setBlazegamesettings = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.MapEntry} returns this
 */
proto.santiago.web.play.MapEntry.prototype.clearBlazegamesettings = function() {
  return this.setBlazegamesettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.MapEntry.prototype.hasBlazegamesettings = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated Mutator mutators = 7;
 * @return {!Array<!proto.santiago.web.play.Mutator>}
 */
proto.santiago.web.play.MapEntry.prototype.getMutatorsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.Mutator>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.Mutator, 7));
};


/**
 * @param {!Array<!proto.santiago.web.play.Mutator>} value
 * @return {!proto.santiago.web.play.MapEntry} returns this
*/
proto.santiago.web.play.MapEntry.prototype.setMutatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.santiago.web.play.Mutator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.Mutator}
 */
proto.santiago.web.play.MapEntry.prototype.addMutators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.santiago.web.play.Mutator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.MapEntry} returns this
 */
proto.santiago.web.play.MapEntry.prototype.clearMutatorsList = function() {
  return this.setMutatorsList([]);
};


/**
 * optional GameServerJoinabilitySettings gameServerJoinabilitySettings = 8;
 * @return {?proto.santiago.web.play.GameServerJoinabilitySettings}
 */
proto.santiago.web.play.MapEntry.prototype.getGameserverjoinabilitysettings = function() {
  return /** @type{?proto.santiago.web.play.GameServerJoinabilitySettings} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.GameServerJoinabilitySettings, 8));
};


/**
 * @param {?proto.santiago.web.play.GameServerJoinabilitySettings|undefined} value
 * @return {!proto.santiago.web.play.MapEntry} returns this
*/
proto.santiago.web.play.MapEntry.prototype.setGameserverjoinabilitysettings = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.MapEntry} returns this
 */
proto.santiago.web.play.MapEntry.prototype.clearGameserverjoinabilitysettings = function() {
  return this.setGameserverjoinabilitysettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.MapEntry.prototype.hasGameserverjoinabilitysettings = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.BlazeGameSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.BlazeGameSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.BlazeGameSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.BlazeGameSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    joininprogress: jspb.Message.getFieldWithDefault(msg, 1, 0),
    opentojoinbyplayer: jspb.Message.getFieldWithDefault(msg, 2, 0),
    opentoinvites: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.BlazeGameSettings}
 */
proto.santiago.web.play.BlazeGameSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.BlazeGameSettings;
  return proto.santiago.web.play.BlazeGameSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.BlazeGameSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.BlazeGameSettings}
 */
proto.santiago.web.play.BlazeGameSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.santiago.web.play.BlazeGameSettingValue} */ (reader.readEnum());
      msg.setJoininprogress(value);
      break;
    case 2:
      var value = /** @type {!proto.santiago.web.play.BlazeGameSettingValue} */ (reader.readEnum());
      msg.setOpentojoinbyplayer(value);
      break;
    case 3:
      var value = /** @type {!proto.santiago.web.play.BlazeGameSettingValue} */ (reader.readEnum());
      msg.setOpentoinvites(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.BlazeGameSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.BlazeGameSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.BlazeGameSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.BlazeGameSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJoininprogress();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOpentojoinbyplayer();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getOpentoinvites();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional BlazeGameSettingValue joinInProgress = 1;
 * @return {!proto.santiago.web.play.BlazeGameSettingValue}
 */
proto.santiago.web.play.BlazeGameSettings.prototype.getJoininprogress = function() {
  return /** @type {!proto.santiago.web.play.BlazeGameSettingValue} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.santiago.web.play.BlazeGameSettingValue} value
 * @return {!proto.santiago.web.play.BlazeGameSettings} returns this
 */
proto.santiago.web.play.BlazeGameSettings.prototype.setJoininprogress = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional BlazeGameSettingValue openToJoinByPlayer = 2;
 * @return {!proto.santiago.web.play.BlazeGameSettingValue}
 */
proto.santiago.web.play.BlazeGameSettings.prototype.getOpentojoinbyplayer = function() {
  return /** @type {!proto.santiago.web.play.BlazeGameSettingValue} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.santiago.web.play.BlazeGameSettingValue} value
 * @return {!proto.santiago.web.play.BlazeGameSettings} returns this
 */
proto.santiago.web.play.BlazeGameSettings.prototype.setOpentojoinbyplayer = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional BlazeGameSettingValue openToInvites = 3;
 * @return {!proto.santiago.web.play.BlazeGameSettingValue}
 */
proto.santiago.web.play.BlazeGameSettings.prototype.getOpentoinvites = function() {
  return /** @type {!proto.santiago.web.play.BlazeGameSettingValue} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.santiago.web.play.BlazeGameSettingValue} value
 * @return {!proto.santiago.web.play.BlazeGameSettings} returns this
 */
proto.santiago.web.play.BlazeGameSettings.prototype.setOpentoinvites = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.GameServerJoinabilitySettings.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.GameServerJoinabilitySettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.GameServerJoinabilitySettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GameServerJoinabilitySettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchmakinginprogress: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.GameServerJoinabilitySettings}
 */
proto.santiago.web.play.GameServerJoinabilitySettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.GameServerJoinabilitySettings;
  return proto.santiago.web.play.GameServerJoinabilitySettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.GameServerJoinabilitySettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.GameServerJoinabilitySettings}
 */
proto.santiago.web.play.GameServerJoinabilitySettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.santiago.web.play.GameServerJoinabilitySettingValue} */ (reader.readEnum());
      msg.setMatchmakinginprogress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.GameServerJoinabilitySettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.GameServerJoinabilitySettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.GameServerJoinabilitySettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GameServerJoinabilitySettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchmakinginprogress();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional GameServerJoinabilitySettingValue matchmakingInProgress = 1;
 * @return {!proto.santiago.web.play.GameServerJoinabilitySettingValue}
 */
proto.santiago.web.play.GameServerJoinabilitySettings.prototype.getMatchmakinginprogress = function() {
  return /** @type {!proto.santiago.web.play.GameServerJoinabilitySettingValue} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.santiago.web.play.GameServerJoinabilitySettingValue} value
 * @return {!proto.santiago.web.play.GameServerJoinabilitySettings} returns this
 */
proto.santiago.web.play.GameServerJoinabilitySettings.prototype.setMatchmakinginprogress = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.MapRotationAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.MapRotationAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.MapRotationAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MapRotationAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    rotationbehavior: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.MapRotationAttributes}
 */
proto.santiago.web.play.MapRotationAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.MapRotationAttributes;
  return proto.santiago.web.play.MapRotationAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.MapRotationAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.MapRotationAttributes}
 */
proto.santiago.web.play.MapRotationAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.santiago.web.play.RotationBehavior} */ (reader.readEnum());
      msg.setRotationbehavior(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.MapRotationAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.MapRotationAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.MapRotationAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MapRotationAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRotationbehavior();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional RotationBehavior rotationBehavior = 1;
 * @return {!proto.santiago.web.play.RotationBehavior}
 */
proto.santiago.web.play.MapRotationAttributes.prototype.getRotationbehavior = function() {
  return /** @type {!proto.santiago.web.play.RotationBehavior} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.santiago.web.play.RotationBehavior} value
 * @return {!proto.santiago.web.play.MapRotationAttributes} returns this
 */
proto.santiago.web.play.MapRotationAttributes.prototype.setRotationbehavior = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.ModRules.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.ModRules.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.ModRules} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ModRules.toObject = function(includeInstance, msg) {
  var f, obj = {
    compatiblerules: (f = msg.getCompatiblerules()) && proto.santiago.web.play.CompatibleModRules.toObject(includeInstance, f),
    incompatiblerules: (f = msg.getIncompatiblerules()) && proto.santiago.web.play.IncompatibleModRules.toObject(includeInstance, f),
    errorrules: (f = msg.getErrorrules()) && proto.santiago.web.play.ErrorModRules.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.ModRules}
 */
proto.santiago.web.play.ModRules.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.ModRules;
  return proto.santiago.web.play.ModRules.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.ModRules} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.ModRules}
 */
proto.santiago.web.play.ModRules.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.CompatibleModRules;
      reader.readMessage(value,proto.santiago.web.play.CompatibleModRules.deserializeBinaryFromReader);
      msg.setCompatiblerules(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.IncompatibleModRules;
      reader.readMessage(value,proto.santiago.web.play.IncompatibleModRules.deserializeBinaryFromReader);
      msg.setIncompatiblerules(value);
      break;
    case 3:
      var value = new proto.santiago.web.play.ErrorModRules;
      reader.readMessage(value,proto.santiago.web.play.ErrorModRules.deserializeBinaryFromReader);
      msg.setErrorrules(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.ModRules.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.ModRules.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.ModRules} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ModRules.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompatiblerules();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.santiago.web.play.CompatibleModRules.serializeBinaryToWriter
    );
  }
  f = message.getIncompatiblerules();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.santiago.web.play.IncompatibleModRules.serializeBinaryToWriter
    );
  }
  f = message.getErrorrules();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.santiago.web.play.ErrorModRules.serializeBinaryToWriter
    );
  }
};


/**
 * optional CompatibleModRules compatibleRules = 1;
 * @return {?proto.santiago.web.play.CompatibleModRules}
 */
proto.santiago.web.play.ModRules.prototype.getCompatiblerules = function() {
  return /** @type{?proto.santiago.web.play.CompatibleModRules} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.CompatibleModRules, 1));
};


/**
 * @param {?proto.santiago.web.play.CompatibleModRules|undefined} value
 * @return {!proto.santiago.web.play.ModRules} returns this
*/
proto.santiago.web.play.ModRules.prototype.setCompatiblerules = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.ModRules} returns this
 */
proto.santiago.web.play.ModRules.prototype.clearCompatiblerules = function() {
  return this.setCompatiblerules(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.ModRules.prototype.hasCompatiblerules = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional IncompatibleModRules incompatibleRules = 2;
 * @return {?proto.santiago.web.play.IncompatibleModRules}
 */
proto.santiago.web.play.ModRules.prototype.getIncompatiblerules = function() {
  return /** @type{?proto.santiago.web.play.IncompatibleModRules} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.IncompatibleModRules, 2));
};


/**
 * @param {?proto.santiago.web.play.IncompatibleModRules|undefined} value
 * @return {!proto.santiago.web.play.ModRules} returns this
*/
proto.santiago.web.play.ModRules.prototype.setIncompatiblerules = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.ModRules} returns this
 */
proto.santiago.web.play.ModRules.prototype.clearIncompatiblerules = function() {
  return this.setIncompatiblerules(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.ModRules.prototype.hasIncompatiblerules = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ErrorModRules errorRules = 3;
 * @return {?proto.santiago.web.play.ErrorModRules}
 */
proto.santiago.web.play.ModRules.prototype.getErrorrules = function() {
  return /** @type{?proto.santiago.web.play.ErrorModRules} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.ErrorModRules, 3));
};


/**
 * @param {?proto.santiago.web.play.ErrorModRules|undefined} value
 * @return {!proto.santiago.web.play.ModRules} returns this
*/
proto.santiago.web.play.ModRules.prototype.setErrorrules = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.ModRules} returns this
 */
proto.santiago.web.play.ModRules.prototype.clearErrorrules = function() {
  return this.setErrorrules(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.ModRules.prototype.hasErrorrules = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.BlazePlayElementDesignSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.BlazePlayElementDesignSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.BlazePlayElementDesignSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.BlazePlayElementDesignSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    opengroupreservations: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.BlazePlayElementDesignSettings}
 */
proto.santiago.web.play.BlazePlayElementDesignSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.BlazePlayElementDesignSettings;
  return proto.santiago.web.play.BlazePlayElementDesignSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.BlazePlayElementDesignSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.BlazePlayElementDesignSettings}
 */
proto.santiago.web.play.BlazePlayElementDesignSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.santiago.web.play.BlazeGameSettingValue} */ (reader.readEnum());
      msg.setOpengroupreservations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.BlazePlayElementDesignSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.BlazePlayElementDesignSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.BlazePlayElementDesignSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.BlazePlayElementDesignSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpengroupreservations();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional BlazeGameSettingValue openGroupReservations = 1;
 * @return {!proto.santiago.web.play.BlazeGameSettingValue}
 */
proto.santiago.web.play.BlazePlayElementDesignSettings.prototype.getOpengroupreservations = function() {
  return /** @type {!proto.santiago.web.play.BlazeGameSettingValue} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.santiago.web.play.BlazeGameSettingValue} value
 * @return {!proto.santiago.web.play.BlazePlayElementDesignSettings} returns this
 */
proto.santiago.web.play.BlazePlayElementDesignSettings.prototype.setOpengroupreservations = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.AttachmentData.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.AttachmentData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.AttachmentData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AttachmentData.toObject = function(includeInstance, msg) {
  var f, obj = {
    original: msg.getOriginal_asB64(),
    compiled: msg.getCompiled_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.AttachmentData}
 */
proto.santiago.web.play.AttachmentData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.AttachmentData;
  return proto.santiago.web.play.AttachmentData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.AttachmentData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.AttachmentData}
 */
proto.santiago.web.play.AttachmentData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOriginal(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCompiled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AttachmentData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.AttachmentData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.AttachmentData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AttachmentData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOriginal_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes original = 1;
 * @return {!(string|Uint8Array)}
 */
proto.santiago.web.play.AttachmentData.prototype.getOriginal = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes original = 1;
 * This is a type-conversion wrapper around `getOriginal()`
 * @return {string}
 */
proto.santiago.web.play.AttachmentData.prototype.getOriginal_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOriginal()));
};


/**
 * optional bytes original = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOriginal()`
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AttachmentData.prototype.getOriginal_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOriginal()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.santiago.web.play.AttachmentData} returns this
 */
proto.santiago.web.play.AttachmentData.prototype.setOriginal = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes compiled = 2;
 * @return {!(string|Uint8Array)}
 */
proto.santiago.web.play.AttachmentData.prototype.getCompiled = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes compiled = 2;
 * This is a type-conversion wrapper around `getCompiled()`
 * @return {string}
 */
proto.santiago.web.play.AttachmentData.prototype.getCompiled_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCompiled()));
};


/**
 * optional bytes compiled = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCompiled()`
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AttachmentData.prototype.getCompiled_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCompiled()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.santiago.web.play.AttachmentData} returns this
 */
proto.santiago.web.play.AttachmentData.prototype.setCompiled = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.AttachmentData} returns this
 */
proto.santiago.web.play.AttachmentData.prototype.clearCompiled = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AttachmentData.prototype.hasCompiled = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.TeamComposition.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.TeamComposition.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.TeamComposition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.TeamComposition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.TeamComposition.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamsList: jspb.Message.toObjectList(msg.getTeamsList(),
    proto.santiago.web.play.TeamStructure.toObject, includeInstance),
    internalteamsList: jspb.Message.toObjectList(msg.getInternalteamsList(),
    proto.santiago.web.play.InternalTeamStructure.toObject, includeInstance),
    balancingmethod: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.TeamComposition}
 */
proto.santiago.web.play.TeamComposition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.TeamComposition;
  return proto.santiago.web.play.TeamComposition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.TeamComposition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.TeamComposition}
 */
proto.santiago.web.play.TeamComposition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.TeamStructure;
      reader.readMessage(value,proto.santiago.web.play.TeamStructure.deserializeBinaryFromReader);
      msg.addTeams(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.InternalTeamStructure;
      reader.readMessage(value,proto.santiago.web.play.InternalTeamStructure.deserializeBinaryFromReader);
      msg.addInternalteams(value);
      break;
    case 3:
      var value = /** @type {!proto.santiago.web.play.TeamBalancingMethod} */ (reader.readEnum());
      msg.setBalancingmethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.TeamComposition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.TeamComposition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.TeamComposition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.TeamComposition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.santiago.web.play.TeamStructure.serializeBinaryToWriter
    );
  }
  f = message.getInternalteamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.santiago.web.play.InternalTeamStructure.serializeBinaryToWriter
    );
  }
  f = message.getBalancingmethod();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * repeated TeamStructure teams = 1;
 * @return {!Array<!proto.santiago.web.play.TeamStructure>}
 */
proto.santiago.web.play.TeamComposition.prototype.getTeamsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.TeamStructure>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.TeamStructure, 1));
};


/**
 * @param {!Array<!proto.santiago.web.play.TeamStructure>} value
 * @return {!proto.santiago.web.play.TeamComposition} returns this
*/
proto.santiago.web.play.TeamComposition.prototype.setTeamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.santiago.web.play.TeamStructure=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.TeamStructure}
 */
proto.santiago.web.play.TeamComposition.prototype.addTeams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.santiago.web.play.TeamStructure, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.TeamComposition} returns this
 */
proto.santiago.web.play.TeamComposition.prototype.clearTeamsList = function() {
  return this.setTeamsList([]);
};


/**
 * repeated InternalTeamStructure internalTeams = 2;
 * @return {!Array<!proto.santiago.web.play.InternalTeamStructure>}
 */
proto.santiago.web.play.TeamComposition.prototype.getInternalteamsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.InternalTeamStructure>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.InternalTeamStructure, 2));
};


/**
 * @param {!Array<!proto.santiago.web.play.InternalTeamStructure>} value
 * @return {!proto.santiago.web.play.TeamComposition} returns this
*/
proto.santiago.web.play.TeamComposition.prototype.setInternalteamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.santiago.web.play.InternalTeamStructure=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.InternalTeamStructure}
 */
proto.santiago.web.play.TeamComposition.prototype.addInternalteams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.santiago.web.play.InternalTeamStructure, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.TeamComposition} returns this
 */
proto.santiago.web.play.TeamComposition.prototype.clearInternalteamsList = function() {
  return this.setInternalteamsList([]);
};


/**
 * optional TeamBalancingMethod balancingMethod = 3;
 * @return {!proto.santiago.web.play.TeamBalancingMethod}
 */
proto.santiago.web.play.TeamComposition.prototype.getBalancingmethod = function() {
  return /** @type {!proto.santiago.web.play.TeamBalancingMethod} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.santiago.web.play.TeamBalancingMethod} value
 * @return {!proto.santiago.web.play.TeamComposition} returns this
 */
proto.santiago.web.play.TeamComposition.prototype.setBalancingmethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.TeamStructure.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.TeamStructure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.TeamStructure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.TeamStructure.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    capacity: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.TeamStructure}
 */
proto.santiago.web.play.TeamStructure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.TeamStructure;
  return proto.santiago.web.play.TeamStructure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.TeamStructure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.TeamStructure}
 */
proto.santiago.web.play.TeamStructure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTeamid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCapacity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.TeamStructure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.TeamStructure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.TeamStructure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.TeamStructure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCapacity();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 teamId = 1;
 * @return {number}
 */
proto.santiago.web.play.TeamStructure.prototype.getTeamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.TeamStructure} returns this
 */
proto.santiago.web.play.TeamStructure.prototype.setTeamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 capacity = 2;
 * @return {number}
 */
proto.santiago.web.play.TeamStructure.prototype.getCapacity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.TeamStructure} returns this
 */
proto.santiago.web.play.TeamStructure.prototype.setCapacity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.InternalTeamStructure.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.InternalTeamStructure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.InternalTeamStructure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.InternalTeamStructure.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    capacity: jspb.Message.getFieldWithDefault(msg, 2, 0),
    capacitytype: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.InternalTeamStructure}
 */
proto.santiago.web.play.InternalTeamStructure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.InternalTeamStructure;
  return proto.santiago.web.play.InternalTeamStructure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.InternalTeamStructure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.InternalTeamStructure}
 */
proto.santiago.web.play.InternalTeamStructure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTeamid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCapacity(value);
      break;
    case 3:
      var value = /** @type {!proto.santiago.web.play.InternalCapacityType} */ (reader.readEnum());
      msg.setCapacitytype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.InternalTeamStructure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.InternalTeamStructure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.InternalTeamStructure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.InternalTeamStructure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCapacity();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCapacitytype();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional int32 teamId = 1;
 * @return {number}
 */
proto.santiago.web.play.InternalTeamStructure.prototype.getTeamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.InternalTeamStructure} returns this
 */
proto.santiago.web.play.InternalTeamStructure.prototype.setTeamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 capacity = 2;
 * @return {number}
 */
proto.santiago.web.play.InternalTeamStructure.prototype.getCapacity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.InternalTeamStructure} returns this
 */
proto.santiago.web.play.InternalTeamStructure.prototype.setCapacity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional InternalCapacityType capacityType = 3;
 * @return {!proto.santiago.web.play.InternalCapacityType}
 */
proto.santiago.web.play.InternalTeamStructure.prototype.getCapacitytype = function() {
  return /** @type {!proto.santiago.web.play.InternalCapacityType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.santiago.web.play.InternalCapacityType} value
 * @return {!proto.santiago.web.play.InternalTeamStructure} returns this
 */
proto.santiago.web.play.InternalTeamStructure.prototype.setCapacitytype = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.CompatibleModRules.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.CompatibleModRules.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.CompatibleModRules} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.CompatibleModRules.toObject = function(includeInstance, msg) {
  var f, obj = {
    original: msg.getOriginal_asB64(),
    rulesversion: jspb.Message.getFieldWithDefault(msg, 2, 0),
    compiled: (f = msg.getCompiled()) && proto.santiago.web.play.CompiledRules.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.CompatibleModRules}
 */
proto.santiago.web.play.CompatibleModRules.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.CompatibleModRules;
  return proto.santiago.web.play.CompatibleModRules.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.CompatibleModRules} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.CompatibleModRules}
 */
proto.santiago.web.play.CompatibleModRules.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOriginal(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRulesversion(value);
      break;
    case 3:
      var value = new proto.santiago.web.play.CompiledRules;
      reader.readMessage(value,proto.santiago.web.play.CompiledRules.deserializeBinaryFromReader);
      msg.setCompiled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.CompatibleModRules.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.CompatibleModRules.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.CompatibleModRules} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.CompatibleModRules.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOriginal_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getRulesversion();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCompiled();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.santiago.web.play.CompiledRules.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes original = 1;
 * @return {!(string|Uint8Array)}
 */
proto.santiago.web.play.CompatibleModRules.prototype.getOriginal = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes original = 1;
 * This is a type-conversion wrapper around `getOriginal()`
 * @return {string}
 */
proto.santiago.web.play.CompatibleModRules.prototype.getOriginal_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOriginal()));
};


/**
 * optional bytes original = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOriginal()`
 * @return {!Uint8Array}
 */
proto.santiago.web.play.CompatibleModRules.prototype.getOriginal_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOriginal()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.santiago.web.play.CompatibleModRules} returns this
 */
proto.santiago.web.play.CompatibleModRules.prototype.setOriginal = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int32 rulesVersion = 2;
 * @return {number}
 */
proto.santiago.web.play.CompatibleModRules.prototype.getRulesversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.CompatibleModRules} returns this
 */
proto.santiago.web.play.CompatibleModRules.prototype.setRulesversion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional CompiledRules compiled = 3;
 * @return {?proto.santiago.web.play.CompiledRules}
 */
proto.santiago.web.play.CompatibleModRules.prototype.getCompiled = function() {
  return /** @type{?proto.santiago.web.play.CompiledRules} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.CompiledRules, 3));
};


/**
 * @param {?proto.santiago.web.play.CompiledRules|undefined} value
 * @return {!proto.santiago.web.play.CompatibleModRules} returns this
*/
proto.santiago.web.play.CompatibleModRules.prototype.setCompiled = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.CompatibleModRules} returns this
 */
proto.santiago.web.play.CompatibleModRules.prototype.clearCompiled = function() {
  return this.setCompiled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.CompatibleModRules.prototype.hasCompiled = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.CompiledRules.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.CompiledRules.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.CompiledRules} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.CompiledRules.toObject = function(includeInstance, msg) {
  var f, obj = {
    uncompressed: (f = msg.getUncompressed()) && proto.santiago.web.play.Uncompressed.toObject(includeInstance, f),
    compressed: (f = msg.getCompressed()) && proto.santiago.web.play.Compressed.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.CompiledRules}
 */
proto.santiago.web.play.CompiledRules.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.CompiledRules;
  return proto.santiago.web.play.CompiledRules.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.CompiledRules} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.CompiledRules}
 */
proto.santiago.web.play.CompiledRules.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.Uncompressed;
      reader.readMessage(value,proto.santiago.web.play.Uncompressed.deserializeBinaryFromReader);
      msg.setUncompressed(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.Compressed;
      reader.readMessage(value,proto.santiago.web.play.Compressed.deserializeBinaryFromReader);
      msg.setCompressed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.CompiledRules.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.CompiledRules.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.CompiledRules} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.CompiledRules.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUncompressed();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.santiago.web.play.Uncompressed.serializeBinaryToWriter
    );
  }
  f = message.getCompressed();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.santiago.web.play.Compressed.serializeBinaryToWriter
    );
  }
};


/**
 * optional Uncompressed uncompressed = 1;
 * @return {?proto.santiago.web.play.Uncompressed}
 */
proto.santiago.web.play.CompiledRules.prototype.getUncompressed = function() {
  return /** @type{?proto.santiago.web.play.Uncompressed} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.Uncompressed, 1));
};


/**
 * @param {?proto.santiago.web.play.Uncompressed|undefined} value
 * @return {!proto.santiago.web.play.CompiledRules} returns this
*/
proto.santiago.web.play.CompiledRules.prototype.setUncompressed = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.CompiledRules} returns this
 */
proto.santiago.web.play.CompiledRules.prototype.clearUncompressed = function() {
  return this.setUncompressed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.CompiledRules.prototype.hasUncompressed = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Compressed compressed = 2;
 * @return {?proto.santiago.web.play.Compressed}
 */
proto.santiago.web.play.CompiledRules.prototype.getCompressed = function() {
  return /** @type{?proto.santiago.web.play.Compressed} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.Compressed, 2));
};


/**
 * @param {?proto.santiago.web.play.Compressed|undefined} value
 * @return {!proto.santiago.web.play.CompiledRules} returns this
*/
proto.santiago.web.play.CompiledRules.prototype.setCompressed = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.CompiledRules} returns this
 */
proto.santiago.web.play.CompiledRules.prototype.clearCompressed = function() {
  return this.setCompressed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.CompiledRules.prototype.hasCompressed = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.Uncompressed.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.Uncompressed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.Uncompressed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Uncompressed.toObject = function(includeInstance, msg) {
  var f, obj = {
    compiledmodrules: msg.getCompiledmodrules_asB64(),
    rulesversion: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.Uncompressed}
 */
proto.santiago.web.play.Uncompressed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.Uncompressed;
  return proto.santiago.web.play.Uncompressed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.Uncompressed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.Uncompressed}
 */
proto.santiago.web.play.Uncompressed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCompiledmodrules(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRulesversion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.Uncompressed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.Uncompressed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.Uncompressed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Uncompressed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompiledmodrules_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getRulesversion();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional bytes compiledModRules = 1;
 * @return {!(string|Uint8Array)}
 */
proto.santiago.web.play.Uncompressed.prototype.getCompiledmodrules = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes compiledModRules = 1;
 * This is a type-conversion wrapper around `getCompiledmodrules()`
 * @return {string}
 */
proto.santiago.web.play.Uncompressed.prototype.getCompiledmodrules_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCompiledmodrules()));
};


/**
 * optional bytes compiledModRules = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCompiledmodrules()`
 * @return {!Uint8Array}
 */
proto.santiago.web.play.Uncompressed.prototype.getCompiledmodrules_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCompiledmodrules()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.santiago.web.play.Uncompressed} returns this
 */
proto.santiago.web.play.Uncompressed.prototype.setCompiledmodrules = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int32 rulesVersion = 2;
 * @return {number}
 */
proto.santiago.web.play.Uncompressed.prototype.getRulesversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.Uncompressed} returns this
 */
proto.santiago.web.play.Uncompressed.prototype.setRulesversion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.Compressed.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.Compressed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.Compressed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Compressed.toObject = function(includeInstance, msg) {
  var f, obj = {
    compiledmodrules: msg.getCompiledmodrules_asB64(),
    rulesversion: jspb.Message.getFieldWithDefault(msg, 2, 0),
    inflatedsize: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.Compressed}
 */
proto.santiago.web.play.Compressed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.Compressed;
  return proto.santiago.web.play.Compressed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.Compressed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.Compressed}
 */
proto.santiago.web.play.Compressed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCompiledmodrules(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRulesversion(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInflatedsize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.Compressed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.Compressed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.Compressed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Compressed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompiledmodrules_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getRulesversion();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getInflatedsize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bytes compiledModRules = 1;
 * @return {!(string|Uint8Array)}
 */
proto.santiago.web.play.Compressed.prototype.getCompiledmodrules = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes compiledModRules = 1;
 * This is a type-conversion wrapper around `getCompiledmodrules()`
 * @return {string}
 */
proto.santiago.web.play.Compressed.prototype.getCompiledmodrules_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCompiledmodrules()));
};


/**
 * optional bytes compiledModRules = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCompiledmodrules()`
 * @return {!Uint8Array}
 */
proto.santiago.web.play.Compressed.prototype.getCompiledmodrules_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCompiledmodrules()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.santiago.web.play.Compressed} returns this
 */
proto.santiago.web.play.Compressed.prototype.setCompiledmodrules = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int32 rulesVersion = 2;
 * @return {number}
 */
proto.santiago.web.play.Compressed.prototype.getRulesversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.Compressed} returns this
 */
proto.santiago.web.play.Compressed.prototype.setRulesversion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 inflatedSize = 3;
 * @return {number}
 */
proto.santiago.web.play.Compressed.prototype.getInflatedsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.Compressed} returns this
 */
proto.santiago.web.play.Compressed.prototype.setInflatedsize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.IncompatibleModRules.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.IncompatibleModRules.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.IncompatibleModRules} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.IncompatibleModRules.toObject = function(includeInstance, msg) {
  var f, obj = {
    original: msg.getOriginal_asB64(),
    rulesversion: jspb.Message.getFieldWithDefault(msg, 2, 0),
    blueprintrulesversion: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.IncompatibleModRules}
 */
proto.santiago.web.play.IncompatibleModRules.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.IncompatibleModRules;
  return proto.santiago.web.play.IncompatibleModRules.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.IncompatibleModRules} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.IncompatibleModRules}
 */
proto.santiago.web.play.IncompatibleModRules.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOriginal(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRulesversion(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBlueprintrulesversion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.IncompatibleModRules.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.IncompatibleModRules.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.IncompatibleModRules} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.IncompatibleModRules.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOriginal_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getRulesversion();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getBlueprintrulesversion();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bytes original = 1;
 * @return {!(string|Uint8Array)}
 */
proto.santiago.web.play.IncompatibleModRules.prototype.getOriginal = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes original = 1;
 * This is a type-conversion wrapper around `getOriginal()`
 * @return {string}
 */
proto.santiago.web.play.IncompatibleModRules.prototype.getOriginal_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOriginal()));
};


/**
 * optional bytes original = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOriginal()`
 * @return {!Uint8Array}
 */
proto.santiago.web.play.IncompatibleModRules.prototype.getOriginal_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOriginal()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.santiago.web.play.IncompatibleModRules} returns this
 */
proto.santiago.web.play.IncompatibleModRules.prototype.setOriginal = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int32 rulesVersion = 2;
 * @return {number}
 */
proto.santiago.web.play.IncompatibleModRules.prototype.getRulesversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.IncompatibleModRules} returns this
 */
proto.santiago.web.play.IncompatibleModRules.prototype.setRulesversion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 blueprintRulesVersion = 3;
 * @return {number}
 */
proto.santiago.web.play.IncompatibleModRules.prototype.getBlueprintrulesversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.IncompatibleModRules} returns this
 */
proto.santiago.web.play.IncompatibleModRules.prototype.setBlueprintrulesversion = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.ErrorModRules.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.ErrorModRules.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.ErrorModRules} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ErrorModRules.toObject = function(includeInstance, msg) {
  var f, obj = {
    original: msg.getOriginal_asB64(),
    errormessage: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.ErrorModRules}
 */
proto.santiago.web.play.ErrorModRules.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.ErrorModRules;
  return proto.santiago.web.play.ErrorModRules.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.ErrorModRules} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.ErrorModRules}
 */
proto.santiago.web.play.ErrorModRules.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOriginal(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrormessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.ErrorModRules.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.ErrorModRules.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.ErrorModRules} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.ErrorModRules.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOriginal_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bytes original = 1;
 * @return {!(string|Uint8Array)}
 */
proto.santiago.web.play.ErrorModRules.prototype.getOriginal = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes original = 1;
 * This is a type-conversion wrapper around `getOriginal()`
 * @return {string}
 */
proto.santiago.web.play.ErrorModRules.prototype.getOriginal_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOriginal()));
};


/**
 * optional bytes original = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOriginal()`
 * @return {!Uint8Array}
 */
proto.santiago.web.play.ErrorModRules.prototype.getOriginal_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOriginal()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.santiago.web.play.ErrorModRules} returns this
 */
proto.santiago.web.play.ErrorModRules.prototype.setOriginal = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string errorMessage = 2;
 * @return {string}
 */
proto.santiago.web.play.ErrorModRules.prototype.getErrormessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.ErrorModRules} returns this
 */
proto.santiago.web.play.ErrorModRules.prototype.setErrormessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.santiago.web.play.ErrorModRules} returns this
 */
proto.santiago.web.play.ErrorModRules.prototype.clearErrormessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.ErrorModRules.prototype.hasErrormessage = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.AssetCategory.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.AssetCategory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.AssetCategory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AssetCategory.toObject = function(includeInstance, msg) {
  var f, obj = {
    tagid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pb_boolean: (f = msg.getBoolean()) && proto.santiago.web.play.AssetCategoryBoolean.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.AssetCategory}
 */
proto.santiago.web.play.AssetCategory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.AssetCategory;
  return proto.santiago.web.play.AssetCategory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.AssetCategory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.AssetCategory}
 */
proto.santiago.web.play.AssetCategory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTagid(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.AssetCategoryBoolean;
      reader.readMessage(value,proto.santiago.web.play.AssetCategoryBoolean.deserializeBinaryFromReader);
      msg.setBoolean(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AssetCategory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.AssetCategory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.AssetCategory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AssetCategory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTagid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBoolean();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.santiago.web.play.AssetCategoryBoolean.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tagId = 1;
 * @return {string}
 */
proto.santiago.web.play.AssetCategory.prototype.getTagid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.AssetCategory} returns this
 */
proto.santiago.web.play.AssetCategory.prototype.setTagid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AssetCategoryBoolean boolean = 2;
 * @return {?proto.santiago.web.play.AssetCategoryBoolean}
 */
proto.santiago.web.play.AssetCategory.prototype.getBoolean = function() {
  return /** @type{?proto.santiago.web.play.AssetCategoryBoolean} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AssetCategoryBoolean, 2));
};


/**
 * @param {?proto.santiago.web.play.AssetCategoryBoolean|undefined} value
 * @return {!proto.santiago.web.play.AssetCategory} returns this
*/
proto.santiago.web.play.AssetCategory.prototype.setBoolean = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AssetCategory} returns this
 */
proto.santiago.web.play.AssetCategory.prototype.clearBoolean = function() {
  return this.setBoolean(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AssetCategory.prototype.hasBoolean = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.AssetCategoryBoolean.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.AssetCategoryBoolean.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.AssetCategoryBoolean.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.AssetCategoryBoolean} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AssetCategoryBoolean.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultvalue: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    overrides: (f = msg.getOverrides()) && proto.santiago.web.play.AssetCategoryTagBooleanOverride.toObject(includeInstance, f),
    teamoverridesList: jspb.Message.toObjectList(msg.getTeamoverridesList(),
    proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.AssetCategoryBoolean}
 */
proto.santiago.web.play.AssetCategoryBoolean.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.AssetCategoryBoolean;
  return proto.santiago.web.play.AssetCategoryBoolean.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.AssetCategoryBoolean} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.AssetCategoryBoolean}
 */
proto.santiago.web.play.AssetCategoryBoolean.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefaultvalue(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.AssetCategoryTagBooleanOverride;
      reader.readMessage(value,proto.santiago.web.play.AssetCategoryTagBooleanOverride.deserializeBinaryFromReader);
      msg.setOverrides(value);
      break;
    case 3:
      var value = new proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride;
      reader.readMessage(value,proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.deserializeBinaryFromReader);
      msg.addTeamoverrides(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AssetCategoryBoolean.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.AssetCategoryBoolean.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.AssetCategoryBoolean} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AssetCategoryBoolean.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultvalue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getOverrides();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.santiago.web.play.AssetCategoryTagBooleanOverride.serializeBinaryToWriter
    );
  }
  f = message.getTeamoverridesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool defaultValue = 1;
 * @return {boolean}
 */
proto.santiago.web.play.AssetCategoryBoolean.prototype.getDefaultvalue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.santiago.web.play.AssetCategoryBoolean} returns this
 */
proto.santiago.web.play.AssetCategoryBoolean.prototype.setDefaultvalue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional AssetCategoryTagBooleanOverride overrides = 2;
 * @return {?proto.santiago.web.play.AssetCategoryTagBooleanOverride}
 */
proto.santiago.web.play.AssetCategoryBoolean.prototype.getOverrides = function() {
  return /** @type{?proto.santiago.web.play.AssetCategoryTagBooleanOverride} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.AssetCategoryTagBooleanOverride, 2));
};


/**
 * @param {?proto.santiago.web.play.AssetCategoryTagBooleanOverride|undefined} value
 * @return {!proto.santiago.web.play.AssetCategoryBoolean} returns this
*/
proto.santiago.web.play.AssetCategoryBoolean.prototype.setOverrides = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.AssetCategoryBoolean} returns this
 */
proto.santiago.web.play.AssetCategoryBoolean.prototype.clearOverrides = function() {
  return this.setOverrides(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.AssetCategoryBoolean.prototype.hasOverrides = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated AssetCategoryTagBooleanTeamOverride teamOverrides = 3;
 * @return {!Array<!proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride>}
 */
proto.santiago.web.play.AssetCategoryBoolean.prototype.getTeamoverridesList = function() {
  return /** @type{!Array<!proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride, 3));
};


/**
 * @param {!Array<!proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride>} value
 * @return {!proto.santiago.web.play.AssetCategoryBoolean} returns this
*/
proto.santiago.web.play.AssetCategoryBoolean.prototype.setTeamoverridesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride}
 */
proto.santiago.web.play.AssetCategoryBoolean.prototype.addTeamoverrides = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.AssetCategoryBoolean} returns this
 */
proto.santiago.web.play.AssetCategoryBoolean.prototype.clearTeamoverridesList = function() {
  return this.setTeamoverridesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.AssetCategoryTagBooleanOverride.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.AssetCategoryTagBooleanOverride.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.AssetCategoryTagBooleanOverride.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.AssetCategoryTagBooleanOverride} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AssetCategoryTagBooleanOverride.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetcategorytagsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    value: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.AssetCategoryTagBooleanOverride}
 */
proto.santiago.web.play.AssetCategoryTagBooleanOverride.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.AssetCategoryTagBooleanOverride;
  return proto.santiago.web.play.AssetCategoryTagBooleanOverride.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.AssetCategoryTagBooleanOverride} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.AssetCategoryTagBooleanOverride}
 */
proto.santiago.web.play.AssetCategoryTagBooleanOverride.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAssetcategorytags(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AssetCategoryTagBooleanOverride.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.AssetCategoryTagBooleanOverride.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.AssetCategoryTagBooleanOverride} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AssetCategoryTagBooleanOverride.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetcategorytagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * repeated string assetCategoryTags = 1;
 * @return {!Array<string>}
 */
proto.santiago.web.play.AssetCategoryTagBooleanOverride.prototype.getAssetcategorytagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.santiago.web.play.AssetCategoryTagBooleanOverride} returns this
 */
proto.santiago.web.play.AssetCategoryTagBooleanOverride.prototype.setAssetcategorytagsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.AssetCategoryTagBooleanOverride} returns this
 */
proto.santiago.web.play.AssetCategoryTagBooleanOverride.prototype.addAssetcategorytags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.AssetCategoryTagBooleanOverride} returns this
 */
proto.santiago.web.play.AssetCategoryTagBooleanOverride.prototype.clearAssetcategorytagsList = function() {
  return this.setAssetcategorytagsList([]);
};


/**
 * optional bool value = 2;
 * @return {boolean}
 */
proto.santiago.web.play.AssetCategoryTagBooleanOverride.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.santiago.web.play.AssetCategoryTagBooleanOverride} returns this
 */
proto.santiago.web.play.AssetCategoryTagBooleanOverride.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetcategorytagsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    value: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    teamid: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride}
 */
proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride;
  return proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride}
 */
proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAssetcategorytags(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTeamid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetcategorytagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getTeamid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * repeated string assetCategoryTags = 1;
 * @return {!Array<string>}
 */
proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.prototype.getAssetcategorytagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride} returns this
 */
proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.prototype.setAssetcategorytagsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride} returns this
 */
proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.prototype.addAssetcategorytags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride} returns this
 */
proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.prototype.clearAssetcategorytagsList = function() {
  return this.setAssetcategorytagsList([]);
};


/**
 * optional bool value = 2;
 * @return {boolean}
 */
proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride} returns this
 */
proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int32 teamId = 3;
 * @return {number}
 */
proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.prototype.getTeamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride} returns this
 */
proto.santiago.web.play.AssetCategoryTagBooleanTeamOverride.prototype.setTeamid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.Mutator.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.Mutator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.Mutator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Mutator.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    category: jspb.Message.getFieldWithDefault(msg, 2, ""),
    kind: (f = msg.getKind()) && proto.santiago.web.play.MutatorKind.toObject(includeInstance, f),
    id: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.Mutator}
 */
proto.santiago.web.play.Mutator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.Mutator;
  return proto.santiago.web.play.Mutator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.Mutator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.Mutator}
 */
proto.santiago.web.play.Mutator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.santiago.web.play.MutatorKind;
      reader.readMessage(value,proto.santiago.web.play.MutatorKind.deserializeBinaryFromReader);
      msg.setKind(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.Mutator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.Mutator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.Mutator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.Mutator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKind();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.santiago.web.play.MutatorKind.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.santiago.web.play.Mutator.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.Mutator} returns this
 */
proto.santiago.web.play.Mutator.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.santiago.web.play.Mutator.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.Mutator} returns this
 */
proto.santiago.web.play.Mutator.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional MutatorKind kind = 3;
 * @return {?proto.santiago.web.play.MutatorKind}
 */
proto.santiago.web.play.Mutator.prototype.getKind = function() {
  return /** @type{?proto.santiago.web.play.MutatorKind} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.MutatorKind, 3));
};


/**
 * @param {?proto.santiago.web.play.MutatorKind|undefined} value
 * @return {!proto.santiago.web.play.Mutator} returns this
*/
proto.santiago.web.play.Mutator.prototype.setKind = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.Mutator} returns this
 */
proto.santiago.web.play.Mutator.prototype.clearKind = function() {
  return this.setKind(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.Mutator.prototype.hasKind = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string id = 4;
 * @return {string}
 */
proto.santiago.web.play.Mutator.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.Mutator} returns this
 */
proto.santiago.web.play.Mutator.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.MutatorKind.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.MutatorKind.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.MutatorKind} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorKind.toObject = function(includeInstance, msg) {
  var f, obj = {
    mutatorboolean: (f = msg.getMutatorboolean()) && proto.santiago.web.play.MutatorBoolean.toObject(includeInstance, f),
    mutatorstring: (f = msg.getMutatorstring()) && proto.santiago.web.play.MutatorString.toObject(includeInstance, f),
    mutatorfloat: (f = msg.getMutatorfloat()) && proto.santiago.web.play.MutatorFloat.toObject(includeInstance, f),
    mutatorint: (f = msg.getMutatorint()) && proto.santiago.web.play.MutatorInt.toObject(includeInstance, f),
    mutatorsparseboolean: (f = msg.getMutatorsparseboolean()) && proto.santiago.web.play.MutatorSparseBoolean.toObject(includeInstance, f),
    mutatorsparseint: (f = msg.getMutatorsparseint()) && proto.santiago.web.play.MutatorSparseInt.toObject(includeInstance, f),
    mutatorsparsefloat: (f = msg.getMutatorsparsefloat()) && proto.santiago.web.play.MutatorSparseFloat.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.MutatorKind}
 */
proto.santiago.web.play.MutatorKind.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.MutatorKind;
  return proto.santiago.web.play.MutatorKind.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.MutatorKind} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.MutatorKind}
 */
proto.santiago.web.play.MutatorKind.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.MutatorBoolean;
      reader.readMessage(value,proto.santiago.web.play.MutatorBoolean.deserializeBinaryFromReader);
      msg.setMutatorboolean(value);
      break;
    case 4:
      var value = new proto.santiago.web.play.MutatorString;
      reader.readMessage(value,proto.santiago.web.play.MutatorString.deserializeBinaryFromReader);
      msg.setMutatorstring(value);
      break;
    case 5:
      var value = new proto.santiago.web.play.MutatorFloat;
      reader.readMessage(value,proto.santiago.web.play.MutatorFloat.deserializeBinaryFromReader);
      msg.setMutatorfloat(value);
      break;
    case 6:
      var value = new proto.santiago.web.play.MutatorInt;
      reader.readMessage(value,proto.santiago.web.play.MutatorInt.deserializeBinaryFromReader);
      msg.setMutatorint(value);
      break;
    case 7:
      var value = new proto.santiago.web.play.MutatorSparseBoolean;
      reader.readMessage(value,proto.santiago.web.play.MutatorSparseBoolean.deserializeBinaryFromReader);
      msg.setMutatorsparseboolean(value);
      break;
    case 8:
      var value = new proto.santiago.web.play.MutatorSparseInt;
      reader.readMessage(value,proto.santiago.web.play.MutatorSparseInt.deserializeBinaryFromReader);
      msg.setMutatorsparseint(value);
      break;
    case 9:
      var value = new proto.santiago.web.play.MutatorSparseFloat;
      reader.readMessage(value,proto.santiago.web.play.MutatorSparseFloat.deserializeBinaryFromReader);
      msg.setMutatorsparsefloat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.MutatorKind.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.MutatorKind.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.MutatorKind} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorKind.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMutatorboolean();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.santiago.web.play.MutatorBoolean.serializeBinaryToWriter
    );
  }
  f = message.getMutatorstring();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.santiago.web.play.MutatorString.serializeBinaryToWriter
    );
  }
  f = message.getMutatorfloat();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.santiago.web.play.MutatorFloat.serializeBinaryToWriter
    );
  }
  f = message.getMutatorint();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.santiago.web.play.MutatorInt.serializeBinaryToWriter
    );
  }
  f = message.getMutatorsparseboolean();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.santiago.web.play.MutatorSparseBoolean.serializeBinaryToWriter
    );
  }
  f = message.getMutatorsparseint();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.santiago.web.play.MutatorSparseInt.serializeBinaryToWriter
    );
  }
  f = message.getMutatorsparsefloat();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.santiago.web.play.MutatorSparseFloat.serializeBinaryToWriter
    );
  }
};


/**
 * optional MutatorBoolean mutatorBoolean = 1;
 * @return {?proto.santiago.web.play.MutatorBoolean}
 */
proto.santiago.web.play.MutatorKind.prototype.getMutatorboolean = function() {
  return /** @type{?proto.santiago.web.play.MutatorBoolean} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.MutatorBoolean, 1));
};


/**
 * @param {?proto.santiago.web.play.MutatorBoolean|undefined} value
 * @return {!proto.santiago.web.play.MutatorKind} returns this
*/
proto.santiago.web.play.MutatorKind.prototype.setMutatorboolean = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.MutatorKind} returns this
 */
proto.santiago.web.play.MutatorKind.prototype.clearMutatorboolean = function() {
  return this.setMutatorboolean(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.MutatorKind.prototype.hasMutatorboolean = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MutatorString mutatorString = 4;
 * @return {?proto.santiago.web.play.MutatorString}
 */
proto.santiago.web.play.MutatorKind.prototype.getMutatorstring = function() {
  return /** @type{?proto.santiago.web.play.MutatorString} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.MutatorString, 4));
};


/**
 * @param {?proto.santiago.web.play.MutatorString|undefined} value
 * @return {!proto.santiago.web.play.MutatorKind} returns this
*/
proto.santiago.web.play.MutatorKind.prototype.setMutatorstring = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.MutatorKind} returns this
 */
proto.santiago.web.play.MutatorKind.prototype.clearMutatorstring = function() {
  return this.setMutatorstring(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.MutatorKind.prototype.hasMutatorstring = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MutatorFloat mutatorFloat = 5;
 * @return {?proto.santiago.web.play.MutatorFloat}
 */
proto.santiago.web.play.MutatorKind.prototype.getMutatorfloat = function() {
  return /** @type{?proto.santiago.web.play.MutatorFloat} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.MutatorFloat, 5));
};


/**
 * @param {?proto.santiago.web.play.MutatorFloat|undefined} value
 * @return {!proto.santiago.web.play.MutatorKind} returns this
*/
proto.santiago.web.play.MutatorKind.prototype.setMutatorfloat = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.MutatorKind} returns this
 */
proto.santiago.web.play.MutatorKind.prototype.clearMutatorfloat = function() {
  return this.setMutatorfloat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.MutatorKind.prototype.hasMutatorfloat = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MutatorInt mutatorInt = 6;
 * @return {?proto.santiago.web.play.MutatorInt}
 */
proto.santiago.web.play.MutatorKind.prototype.getMutatorint = function() {
  return /** @type{?proto.santiago.web.play.MutatorInt} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.MutatorInt, 6));
};


/**
 * @param {?proto.santiago.web.play.MutatorInt|undefined} value
 * @return {!proto.santiago.web.play.MutatorKind} returns this
*/
proto.santiago.web.play.MutatorKind.prototype.setMutatorint = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.MutatorKind} returns this
 */
proto.santiago.web.play.MutatorKind.prototype.clearMutatorint = function() {
  return this.setMutatorint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.MutatorKind.prototype.hasMutatorint = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional MutatorSparseBoolean mutatorSparseBoolean = 7;
 * @return {?proto.santiago.web.play.MutatorSparseBoolean}
 */
proto.santiago.web.play.MutatorKind.prototype.getMutatorsparseboolean = function() {
  return /** @type{?proto.santiago.web.play.MutatorSparseBoolean} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.MutatorSparseBoolean, 7));
};


/**
 * @param {?proto.santiago.web.play.MutatorSparseBoolean|undefined} value
 * @return {!proto.santiago.web.play.MutatorKind} returns this
*/
proto.santiago.web.play.MutatorKind.prototype.setMutatorsparseboolean = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.MutatorKind} returns this
 */
proto.santiago.web.play.MutatorKind.prototype.clearMutatorsparseboolean = function() {
  return this.setMutatorsparseboolean(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.MutatorKind.prototype.hasMutatorsparseboolean = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional MutatorSparseInt mutatorSparseInt = 8;
 * @return {?proto.santiago.web.play.MutatorSparseInt}
 */
proto.santiago.web.play.MutatorKind.prototype.getMutatorsparseint = function() {
  return /** @type{?proto.santiago.web.play.MutatorSparseInt} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.MutatorSparseInt, 8));
};


/**
 * @param {?proto.santiago.web.play.MutatorSparseInt|undefined} value
 * @return {!proto.santiago.web.play.MutatorKind} returns this
*/
proto.santiago.web.play.MutatorKind.prototype.setMutatorsparseint = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.MutatorKind} returns this
 */
proto.santiago.web.play.MutatorKind.prototype.clearMutatorsparseint = function() {
  return this.setMutatorsparseint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.MutatorKind.prototype.hasMutatorsparseint = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional MutatorSparseFloat mutatorSparseFloat = 9;
 * @return {?proto.santiago.web.play.MutatorSparseFloat}
 */
proto.santiago.web.play.MutatorKind.prototype.getMutatorsparsefloat = function() {
  return /** @type{?proto.santiago.web.play.MutatorSparseFloat} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.MutatorSparseFloat, 9));
};


/**
 * @param {?proto.santiago.web.play.MutatorSparseFloat|undefined} value
 * @return {!proto.santiago.web.play.MutatorKind} returns this
*/
proto.santiago.web.play.MutatorKind.prototype.setMutatorsparsefloat = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.MutatorKind} returns this
 */
proto.santiago.web.play.MutatorKind.prototype.clearMutatorsparsefloat = function() {
  return this.setMutatorsparsefloat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.MutatorKind.prototype.hasMutatorsparsefloat = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.MutatorBoolean.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.MutatorBoolean.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.MutatorBoolean} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorBoolean.toObject = function(includeInstance, msg) {
  var f, obj = {
    boolvalue: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.MutatorBoolean}
 */
proto.santiago.web.play.MutatorBoolean.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.MutatorBoolean;
  return proto.santiago.web.play.MutatorBoolean.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.MutatorBoolean} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.MutatorBoolean}
 */
proto.santiago.web.play.MutatorBoolean.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.MutatorBoolean.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.MutatorBoolean.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.MutatorBoolean} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorBoolean.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBoolvalue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool boolValue = 1;
 * @return {boolean}
 */
proto.santiago.web.play.MutatorBoolean.prototype.getBoolvalue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.santiago.web.play.MutatorBoolean} returns this
 */
proto.santiago.web.play.MutatorBoolean.prototype.setBoolvalue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.MutatorString.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.MutatorString.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.MutatorString} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorString.toObject = function(includeInstance, msg) {
  var f, obj = {
    stringvalue: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.MutatorString}
 */
proto.santiago.web.play.MutatorString.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.MutatorString;
  return proto.santiago.web.play.MutatorString.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.MutatorString} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.MutatorString}
 */
proto.santiago.web.play.MutatorString.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.MutatorString.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.MutatorString.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.MutatorString} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorString.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStringvalue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string stringValue = 1;
 * @return {string}
 */
proto.santiago.web.play.MutatorString.prototype.getStringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.MutatorString} returns this
 */
proto.santiago.web.play.MutatorString.prototype.setStringvalue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.MutatorFloat.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.MutatorFloat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.MutatorFloat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorFloat.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.MutatorFloat}
 */
proto.santiago.web.play.MutatorFloat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.MutatorFloat;
  return proto.santiago.web.play.MutatorFloat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.MutatorFloat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.MutatorFloat}
 */
proto.santiago.web.play.MutatorFloat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.MutatorFloat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.MutatorFloat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.MutatorFloat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorFloat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
};


/**
 * optional float value = 1;
 * @return {number}
 */
proto.santiago.web.play.MutatorFloat.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.MutatorFloat} returns this
 */
proto.santiago.web.play.MutatorFloat.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.MutatorInt.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.MutatorInt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.MutatorInt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorInt.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.MutatorInt}
 */
proto.santiago.web.play.MutatorInt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.MutatorInt;
  return proto.santiago.web.play.MutatorInt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.MutatorInt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.MutatorInt}
 */
proto.santiago.web.play.MutatorInt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.MutatorInt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.MutatorInt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.MutatorInt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorInt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 value = 1;
 * @return {number}
 */
proto.santiago.web.play.MutatorInt.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.MutatorInt} returns this
 */
proto.santiago.web.play.MutatorInt.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.MutatorSparseBooleanEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.MutatorSparseBooleanEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.MutatorSparseBooleanEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorSparseBooleanEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    value: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.MutatorSparseBooleanEntry}
 */
proto.santiago.web.play.MutatorSparseBooleanEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.MutatorSparseBooleanEntry;
  return proto.santiago.web.play.MutatorSparseBooleanEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.MutatorSparseBooleanEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.MutatorSparseBooleanEntry}
 */
proto.santiago.web.play.MutatorSparseBooleanEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.MutatorSparseBooleanEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.MutatorSparseBooleanEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.MutatorSparseBooleanEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorSparseBooleanEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getValue();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.santiago.web.play.MutatorSparseBooleanEntry.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.MutatorSparseBooleanEntry} returns this
 */
proto.santiago.web.play.MutatorSparseBooleanEntry.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool value = 2;
 * @return {boolean}
 */
proto.santiago.web.play.MutatorSparseBooleanEntry.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.santiago.web.play.MutatorSparseBooleanEntry} returns this
 */
proto.santiago.web.play.MutatorSparseBooleanEntry.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.MutatorSparseBoolean.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.MutatorSparseBoolean.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.MutatorSparseBoolean.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.MutatorSparseBoolean} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorSparseBoolean.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultvalue: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sparsevaluesList: jspb.Message.toObjectList(msg.getSparsevaluesList(),
    proto.santiago.web.play.MutatorSparseBooleanEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.MutatorSparseBoolean}
 */
proto.santiago.web.play.MutatorSparseBoolean.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.MutatorSparseBoolean;
  return proto.santiago.web.play.MutatorSparseBoolean.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.MutatorSparseBoolean} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.MutatorSparseBoolean}
 */
proto.santiago.web.play.MutatorSparseBoolean.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefaultvalue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSize(value);
      break;
    case 3:
      var value = new proto.santiago.web.play.MutatorSparseBooleanEntry;
      reader.readMessage(value,proto.santiago.web.play.MutatorSparseBooleanEntry.deserializeBinaryFromReader);
      msg.addSparsevalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.MutatorSparseBoolean.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.MutatorSparseBoolean.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.MutatorSparseBoolean} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorSparseBoolean.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultvalue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSparsevaluesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.santiago.web.play.MutatorSparseBooleanEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool defaultValue = 1;
 * @return {boolean}
 */
proto.santiago.web.play.MutatorSparseBoolean.prototype.getDefaultvalue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.santiago.web.play.MutatorSparseBoolean} returns this
 */
proto.santiago.web.play.MutatorSparseBoolean.prototype.setDefaultvalue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint32 size = 2;
 * @return {number}
 */
proto.santiago.web.play.MutatorSparseBoolean.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.MutatorSparseBoolean} returns this
 */
proto.santiago.web.play.MutatorSparseBoolean.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated MutatorSparseBooleanEntry sparseValues = 3;
 * @return {!Array<!proto.santiago.web.play.MutatorSparseBooleanEntry>}
 */
proto.santiago.web.play.MutatorSparseBoolean.prototype.getSparsevaluesList = function() {
  return /** @type{!Array<!proto.santiago.web.play.MutatorSparseBooleanEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.MutatorSparseBooleanEntry, 3));
};


/**
 * @param {!Array<!proto.santiago.web.play.MutatorSparseBooleanEntry>} value
 * @return {!proto.santiago.web.play.MutatorSparseBoolean} returns this
*/
proto.santiago.web.play.MutatorSparseBoolean.prototype.setSparsevaluesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.santiago.web.play.MutatorSparseBooleanEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.MutatorSparseBooleanEntry}
 */
proto.santiago.web.play.MutatorSparseBoolean.prototype.addSparsevalues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.santiago.web.play.MutatorSparseBooleanEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.MutatorSparseBoolean} returns this
 */
proto.santiago.web.play.MutatorSparseBoolean.prototype.clearSparsevaluesList = function() {
  return this.setSparsevaluesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.SparseIntEntity.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.SparseIntEntity.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.SparseIntEntity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.SparseIntEntity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.SparseIntEntity.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.SparseIntEntity}
 */
proto.santiago.web.play.SparseIntEntity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.SparseIntEntity;
  return proto.santiago.web.play.SparseIntEntity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.SparseIntEntity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.SparseIntEntity}
 */
proto.santiago.web.play.SparseIntEntity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addValues(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.SparseIntEntity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.SparseIntEntity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.SparseIntEntity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.SparseIntEntity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writePackedInt32(
      1,
      f
    );
  }
};


/**
 * repeated int32 values = 1;
 * @return {!Array<number>}
 */
proto.santiago.web.play.SparseIntEntity.prototype.getValuesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.santiago.web.play.SparseIntEntity} returns this
 */
proto.santiago.web.play.SparseIntEntity.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.SparseIntEntity} returns this
 */
proto.santiago.web.play.SparseIntEntity.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.SparseIntEntity} returns this
 */
proto.santiago.web.play.SparseIntEntity.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.MutatorSparseIntEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.MutatorSparseIntEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.MutatorSparseIntEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorSparseIntEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    value: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.MutatorSparseIntEntry}
 */
proto.santiago.web.play.MutatorSparseIntEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.MutatorSparseIntEntry;
  return proto.santiago.web.play.MutatorSparseIntEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.MutatorSparseIntEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.MutatorSparseIntEntry}
 */
proto.santiago.web.play.MutatorSparseIntEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.MutatorSparseIntEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.MutatorSparseIntEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.MutatorSparseIntEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorSparseIntEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.santiago.web.play.MutatorSparseIntEntry.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.MutatorSparseIntEntry} returns this
 */
proto.santiago.web.play.MutatorSparseIntEntry.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 value = 2;
 * @return {number}
 */
proto.santiago.web.play.MutatorSparseIntEntry.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.MutatorSparseIntEntry} returns this
 */
proto.santiago.web.play.MutatorSparseIntEntry.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.MutatorSparseInt.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.MutatorSparseInt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.MutatorSparseInt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorSparseInt.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultvalue: jspb.Message.getFieldWithDefault(msg, 1, 0),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sparsevalues: (f = msg.getSparsevalues()) && proto.santiago.web.play.MutatorSparseIntEntry.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.MutatorSparseInt}
 */
proto.santiago.web.play.MutatorSparseInt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.MutatorSparseInt;
  return proto.santiago.web.play.MutatorSparseInt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.MutatorSparseInt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.MutatorSparseInt}
 */
proto.santiago.web.play.MutatorSparseInt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDefaultvalue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSize(value);
      break;
    case 3:
      var value = new proto.santiago.web.play.MutatorSparseIntEntry;
      reader.readMessage(value,proto.santiago.web.play.MutatorSparseIntEntry.deserializeBinaryFromReader);
      msg.setSparsevalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.MutatorSparseInt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.MutatorSparseInt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.MutatorSparseInt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorSparseInt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultvalue();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSparsevalues();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.santiago.web.play.MutatorSparseIntEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 defaultValue = 1;
 * @return {number}
 */
proto.santiago.web.play.MutatorSparseInt.prototype.getDefaultvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.MutatorSparseInt} returns this
 */
proto.santiago.web.play.MutatorSparseInt.prototype.setDefaultvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 size = 2;
 * @return {number}
 */
proto.santiago.web.play.MutatorSparseInt.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.MutatorSparseInt} returns this
 */
proto.santiago.web.play.MutatorSparseInt.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional MutatorSparseIntEntry sparseValues = 3;
 * @return {?proto.santiago.web.play.MutatorSparseIntEntry}
 */
proto.santiago.web.play.MutatorSparseInt.prototype.getSparsevalues = function() {
  return /** @type{?proto.santiago.web.play.MutatorSparseIntEntry} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.MutatorSparseIntEntry, 3));
};


/**
 * @param {?proto.santiago.web.play.MutatorSparseIntEntry|undefined} value
 * @return {!proto.santiago.web.play.MutatorSparseInt} returns this
*/
proto.santiago.web.play.MutatorSparseInt.prototype.setSparsevalues = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.MutatorSparseInt} returns this
 */
proto.santiago.web.play.MutatorSparseInt.prototype.clearSparsevalues = function() {
  return this.setSparsevalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.MutatorSparseInt.prototype.hasSparsevalues = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.MutatorSparseFloatEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.MutatorSparseFloatEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.MutatorSparseFloatEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorSparseFloatEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.MutatorSparseFloatEntry}
 */
proto.santiago.web.play.MutatorSparseFloatEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.MutatorSparseFloatEntry;
  return proto.santiago.web.play.MutatorSparseFloatEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.MutatorSparseFloatEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.MutatorSparseFloatEntry}
 */
proto.santiago.web.play.MutatorSparseFloatEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.MutatorSparseFloatEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.MutatorSparseFloatEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.MutatorSparseFloatEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorSparseFloatEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.santiago.web.play.MutatorSparseFloatEntry.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.MutatorSparseFloatEntry} returns this
 */
proto.santiago.web.play.MutatorSparseFloatEntry.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float value = 2;
 * @return {number}
 */
proto.santiago.web.play.MutatorSparseFloatEntry.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.MutatorSparseFloatEntry} returns this
 */
proto.santiago.web.play.MutatorSparseFloatEntry.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.MutatorSparseFloat.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.MutatorSparseFloat.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.MutatorSparseFloat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.MutatorSparseFloat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorSparseFloat.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultvalue: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sparsevaluesList: jspb.Message.toObjectList(msg.getSparsevaluesList(),
    proto.santiago.web.play.MutatorSparseFloatEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.MutatorSparseFloat}
 */
proto.santiago.web.play.MutatorSparseFloat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.MutatorSparseFloat;
  return proto.santiago.web.play.MutatorSparseFloat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.MutatorSparseFloat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.MutatorSparseFloat}
 */
proto.santiago.web.play.MutatorSparseFloat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDefaultvalue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSize(value);
      break;
    case 3:
      var value = new proto.santiago.web.play.MutatorSparseFloatEntry;
      reader.readMessage(value,proto.santiago.web.play.MutatorSparseFloatEntry.deserializeBinaryFromReader);
      msg.addSparsevalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.MutatorSparseFloat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.MutatorSparseFloat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.MutatorSparseFloat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.MutatorSparseFloat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultvalue();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSparsevaluesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.santiago.web.play.MutatorSparseFloatEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional float defaultValue = 1;
 * @return {number}
 */
proto.santiago.web.play.MutatorSparseFloat.prototype.getDefaultvalue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.MutatorSparseFloat} returns this
 */
proto.santiago.web.play.MutatorSparseFloat.prototype.setDefaultvalue = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional uint32 size = 2;
 * @return {number}
 */
proto.santiago.web.play.MutatorSparseFloat.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.santiago.web.play.MutatorSparseFloat} returns this
 */
proto.santiago.web.play.MutatorSparseFloat.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated MutatorSparseFloatEntry sparseValues = 3;
 * @return {!Array<!proto.santiago.web.play.MutatorSparseFloatEntry>}
 */
proto.santiago.web.play.MutatorSparseFloat.prototype.getSparsevaluesList = function() {
  return /** @type{!Array<!proto.santiago.web.play.MutatorSparseFloatEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.MutatorSparseFloatEntry, 3));
};


/**
 * @param {!Array<!proto.santiago.web.play.MutatorSparseFloatEntry>} value
 * @return {!proto.santiago.web.play.MutatorSparseFloat} returns this
*/
proto.santiago.web.play.MutatorSparseFloat.prototype.setSparsevaluesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.santiago.web.play.MutatorSparseFloatEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.MutatorSparseFloatEntry}
 */
proto.santiago.web.play.MutatorSparseFloat.prototype.addSparsevalues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.santiago.web.play.MutatorSparseFloatEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.MutatorSparseFloat} returns this
 */
proto.santiago.web.play.MutatorSparseFloat.prototype.clearSparsevaluesList = function() {
  return this.setSparsevaluesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.GetPlayElementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.GetPlayElementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.GetPlayElementRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetPlayElementRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    includedenied: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.GetPlayElementRequest}
 */
proto.santiago.web.play.GetPlayElementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.GetPlayElementRequest;
  return proto.santiago.web.play.GetPlayElementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.GetPlayElementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.GetPlayElementRequest}
 */
proto.santiago.web.play.GetPlayElementRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludedenied(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.GetPlayElementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.GetPlayElementRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.GetPlayElementRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetPlayElementRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIncludedenied();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.santiago.web.play.GetPlayElementRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.santiago.web.play.GetPlayElementRequest} returns this
 */
proto.santiago.web.play.GetPlayElementRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool includeDenied = 2;
 * @return {boolean}
 */
proto.santiago.web.play.GetPlayElementRequest.prototype.getIncludedenied = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.santiago.web.play.GetPlayElementRequest} returns this
 */
proto.santiago.web.play.GetPlayElementRequest.prototype.setIncludedenied = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.GetOwnedPlayElementsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.GetOwnedPlayElementsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.GetOwnedPlayElementsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.GetOwnedPlayElementsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetOwnedPlayElementsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    playelementsList: jspb.Message.toObjectList(msg.getPlayelementsList(),
    proto.santiago.web.play.PlayElement.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.GetOwnedPlayElementsResponse}
 */
proto.santiago.web.play.GetOwnedPlayElementsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.GetOwnedPlayElementsResponse;
  return proto.santiago.web.play.GetOwnedPlayElementsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.GetOwnedPlayElementsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.GetOwnedPlayElementsResponse}
 */
proto.santiago.web.play.GetOwnedPlayElementsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.PlayElement;
      reader.readMessage(value,proto.santiago.web.play.PlayElement.deserializeBinaryFromReader);
      msg.addPlayelements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.GetOwnedPlayElementsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.GetOwnedPlayElementsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.GetOwnedPlayElementsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetOwnedPlayElementsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayelementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.santiago.web.play.PlayElement.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PlayElement playElements = 1;
 * @return {!Array<!proto.santiago.web.play.PlayElement>}
 */
proto.santiago.web.play.GetOwnedPlayElementsResponse.prototype.getPlayelementsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.PlayElement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.PlayElement, 1));
};


/**
 * @param {!Array<!proto.santiago.web.play.PlayElement>} value
 * @return {!proto.santiago.web.play.GetOwnedPlayElementsResponse} returns this
*/
proto.santiago.web.play.GetOwnedPlayElementsResponse.prototype.setPlayelementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.santiago.web.play.PlayElement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.PlayElement}
 */
proto.santiago.web.play.GetOwnedPlayElementsResponse.prototype.addPlayelements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.santiago.web.play.PlayElement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.GetOwnedPlayElementsResponse} returns this
 */
proto.santiago.web.play.GetOwnedPlayElementsResponse.prototype.clearPlayelementsList = function() {
  return this.setPlayelementsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.GetOwnedPlayElementsResponseV2.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.GetOwnedPlayElementsResponseV2.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.GetOwnedPlayElementsResponseV2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.GetOwnedPlayElementsResponseV2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetOwnedPlayElementsResponseV2.toObject = function(includeInstance, msg) {
  var f, obj = {
    playelementsList: jspb.Message.toObjectList(msg.getPlayelementsList(),
    proto.santiago.web.play.EnrichedPlayElement.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.GetOwnedPlayElementsResponseV2}
 */
proto.santiago.web.play.GetOwnedPlayElementsResponseV2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.GetOwnedPlayElementsResponseV2;
  return proto.santiago.web.play.GetOwnedPlayElementsResponseV2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.GetOwnedPlayElementsResponseV2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.GetOwnedPlayElementsResponseV2}
 */
proto.santiago.web.play.GetOwnedPlayElementsResponseV2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.EnrichedPlayElement;
      reader.readMessage(value,proto.santiago.web.play.EnrichedPlayElement.deserializeBinaryFromReader);
      msg.addPlayelements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.GetOwnedPlayElementsResponseV2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.GetOwnedPlayElementsResponseV2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.GetOwnedPlayElementsResponseV2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetOwnedPlayElementsResponseV2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayelementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.santiago.web.play.EnrichedPlayElement.serializeBinaryToWriter
    );
  }
};


/**
 * repeated EnrichedPlayElement playElements = 1;
 * @return {!Array<!proto.santiago.web.play.EnrichedPlayElement>}
 */
proto.santiago.web.play.GetOwnedPlayElementsResponseV2.prototype.getPlayelementsList = function() {
  return /** @type{!Array<!proto.santiago.web.play.EnrichedPlayElement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santiago.web.play.EnrichedPlayElement, 1));
};


/**
 * @param {!Array<!proto.santiago.web.play.EnrichedPlayElement>} value
 * @return {!proto.santiago.web.play.GetOwnedPlayElementsResponseV2} returns this
*/
proto.santiago.web.play.GetOwnedPlayElementsResponseV2.prototype.setPlayelementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.santiago.web.play.EnrichedPlayElement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.EnrichedPlayElement}
 */
proto.santiago.web.play.GetOwnedPlayElementsResponseV2.prototype.addPlayelements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.santiago.web.play.EnrichedPlayElement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.GetOwnedPlayElementsResponseV2} returns this
 */
proto.santiago.web.play.GetOwnedPlayElementsResponseV2.prototype.clearPlayelementsList = function() {
  return this.setPlayelementsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.EnrichedPlayElement.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.EnrichedPlayElement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.EnrichedPlayElement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.EnrichedPlayElement.toObject = function(includeInstance, msg) {
  var f, obj = {
    playelement: (f = msg.getPlayelement()) && proto.santiago.web.play.PlayElement.toObject(includeInstance, f),
    maprotation: (f = msg.getMaprotation()) && proto.santiago.web.play.MapRotation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.EnrichedPlayElement}
 */
proto.santiago.web.play.EnrichedPlayElement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.EnrichedPlayElement;
  return proto.santiago.web.play.EnrichedPlayElement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.EnrichedPlayElement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.EnrichedPlayElement}
 */
proto.santiago.web.play.EnrichedPlayElement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santiago.web.play.PlayElement;
      reader.readMessage(value,proto.santiago.web.play.PlayElement.deserializeBinaryFromReader);
      msg.setPlayelement(value);
      break;
    case 2:
      var value = new proto.santiago.web.play.MapRotation;
      reader.readMessage(value,proto.santiago.web.play.MapRotation.deserializeBinaryFromReader);
      msg.setMaprotation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.EnrichedPlayElement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.EnrichedPlayElement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.EnrichedPlayElement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.EnrichedPlayElement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayelement();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.santiago.web.play.PlayElement.serializeBinaryToWriter
    );
  }
  f = message.getMaprotation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.santiago.web.play.MapRotation.serializeBinaryToWriter
    );
  }
};


/**
 * optional PlayElement playElement = 1;
 * @return {?proto.santiago.web.play.PlayElement}
 */
proto.santiago.web.play.EnrichedPlayElement.prototype.getPlayelement = function() {
  return /** @type{?proto.santiago.web.play.PlayElement} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.PlayElement, 1));
};


/**
 * @param {?proto.santiago.web.play.PlayElement|undefined} value
 * @return {!proto.santiago.web.play.EnrichedPlayElement} returns this
*/
proto.santiago.web.play.EnrichedPlayElement.prototype.setPlayelement = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.EnrichedPlayElement} returns this
 */
proto.santiago.web.play.EnrichedPlayElement.prototype.clearPlayelement = function() {
  return this.setPlayelement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.EnrichedPlayElement.prototype.hasPlayelement = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MapRotation mapRotation = 2;
 * @return {?proto.santiago.web.play.MapRotation}
 */
proto.santiago.web.play.EnrichedPlayElement.prototype.getMaprotation = function() {
  return /** @type{?proto.santiago.web.play.MapRotation} */ (
    jspb.Message.getWrapperField(this, proto.santiago.web.play.MapRotation, 2));
};


/**
 * @param {?proto.santiago.web.play.MapRotation|undefined} value
 * @return {!proto.santiago.web.play.EnrichedPlayElement} returns this
*/
proto.santiago.web.play.EnrichedPlayElement.prototype.setMaprotation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.santiago.web.play.EnrichedPlayElement} returns this
 */
proto.santiago.web.play.EnrichedPlayElement.prototype.clearMaprotation = function() {
  return this.setMaprotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.santiago.web.play.EnrichedPlayElement.prototype.hasMaprotation = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santiago.web.play.GetOwnedPlayElementsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santiago.web.play.GetOwnedPlayElementsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.santiago.web.play.GetOwnedPlayElementsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santiago.web.play.GetOwnedPlayElementsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetOwnedPlayElementsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    publishstatesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    includedenied: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santiago.web.play.GetOwnedPlayElementsRequest}
 */
proto.santiago.web.play.GetOwnedPlayElementsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santiago.web.play.GetOwnedPlayElementsRequest;
  return proto.santiago.web.play.GetOwnedPlayElementsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santiago.web.play.GetOwnedPlayElementsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santiago.web.play.GetOwnedPlayElementsRequest}
 */
proto.santiago.web.play.GetOwnedPlayElementsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.santiago.web.play.PublishStateType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPublishstates(values[i]);
      }
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludedenied(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santiago.web.play.GetOwnedPlayElementsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santiago.web.play.GetOwnedPlayElementsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santiago.web.play.GetOwnedPlayElementsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santiago.web.play.GetOwnedPlayElementsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublishstatesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = message.getIncludedenied();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * repeated PublishStateType publishStates = 1;
 * @return {!Array<!proto.santiago.web.play.PublishStateType>}
 */
proto.santiago.web.play.GetOwnedPlayElementsRequest.prototype.getPublishstatesList = function() {
  return /** @type {!Array<!proto.santiago.web.play.PublishStateType>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.santiago.web.play.PublishStateType>} value
 * @return {!proto.santiago.web.play.GetOwnedPlayElementsRequest} returns this
 */
proto.santiago.web.play.GetOwnedPlayElementsRequest.prototype.setPublishstatesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.santiago.web.play.PublishStateType} value
 * @param {number=} opt_index
 * @return {!proto.santiago.web.play.GetOwnedPlayElementsRequest} returns this
 */
proto.santiago.web.play.GetOwnedPlayElementsRequest.prototype.addPublishstates = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santiago.web.play.GetOwnedPlayElementsRequest} returns this
 */
proto.santiago.web.play.GetOwnedPlayElementsRequest.prototype.clearPublishstatesList = function() {
  return this.setPublishstatesList([]);
};


/**
 * optional bool includeDenied = 2;
 * @return {boolean}
 */
proto.santiago.web.play.GetOwnedPlayElementsRequest.prototype.getIncludedenied = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.santiago.web.play.GetOwnedPlayElementsRequest} returns this
 */
proto.santiago.web.play.GetOwnedPlayElementsRequest.prototype.setIncludedenied = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.santiago.web.play.ExperienceOrderBy = {
  EXPERIENCE_ORDER_BY_UNSPECIFIED: 0,
  EXPERIENCE_ORDER_BY_UPDATED_ASC: 1,
  EXPERIENCE_ORDER_BY_UPDATED_DESC: 2,
  EXPERIENCE_ORDER_BY_CREATED_ASC: 3,
  EXPERIENCE_ORDER_BY_CREATED_DESC: 4,
  EXPERIENCE_ORDER_BY_POPULARITY_ASC: 5,
  EXPERIENCE_ORDER_BY_POPULARITY_DESC: 6,
  EXPERIENCE_ORDER_BY_LIKES_ASC: 7,
  EXPERIENCE_ORDER_BY_LIKES_DESC: 8
};

/**
 * @enum {number}
 */
proto.santiago.web.play.InternalCapacityType = {
  AI_BACKFILL: 0,
  AI_STATIC: 1
};

/**
 * @enum {number}
 */
proto.santiago.web.play.TeamBalancingMethod = {
  UNSPECIFIED: 0,
  EVEN_NUMBERS: 1,
  EVEN_PERCENTAGE: 2,
  FILL_IN_TEAM_ORDER: 3
};

/**
 * @enum {number}
 */
proto.santiago.web.play.RotationBehavior = {
  ROTATION_BEHAVIOR_LOOP: 0,
  ROTATION_BEHAVIOR_EORMM: 1,
  ROTATION_BEHAVIOR_ONE_MAP: 2
};

/**
 * @enum {number}
 */
proto.santiago.web.play.GameServerJoinabilitySettingValue = {
  GAME_SERVER_JOINABILITY_SETTING_VALUE_UNSPECIFIED: 0,
  GAME_SERVER_JOINABILITY_SETTING_VALUE_ALLOWED: 1,
  GAME_SERVER_JOINABILITY_SETTING_VALUE_DISALLOWED: 2
};

/**
 * @enum {number}
 */
proto.santiago.web.play.BlazeGameSettingValue = {
  BLAZE_GAME_SETTING_VALUE_UNSPECIFIED: 0,
  BLAZE_GAME_SETTING_VALUE_ALLOWED: 1,
  BLAZE_GAME_SETTING_VALUE_DISALLOWED: 2
};

/**
 * @enum {number}
 */
proto.santiago.web.play.ModerationStateType = {
  MODERATION_STATE_TYPE_UNDEFINED: 0,
  MODERATION_STATE_TYPE_IN_REVIEW: 1,
  MODERATION_STATE_TYPE_APPROVED: 2,
  MODERATION_STATE_TYPE_DENIED: 3
};

/**
 * @enum {number}
 */
proto.santiago.web.play.PublishStateType = {
  PUBLISH_STATE_TYPE_INVALID: 0,
  PUBLISH_STATE_TYPE_DRAFT: 1,
  PUBLISH_STATE_TYPE_PUBLISHED: 2,
  PUBLISH_STATE_TYPE_ARCHIVED: 3,
  PUBLISH_STATE_TYPE_ERROR: 4
};

/**
 * @enum {number}
 */
proto.santiago.web.play.ProcessingStatus = {
  PROCESSING_STATUS_UNSPECIFIED: 0,
  PROCESSING_STATUS_PENDING: 1,
  PROCESSING_STATUS_PROCESSED: 2,
  PROCESSING_STATUS_NEEDS_RECOMPILE: 3,
  PROCESSING_STATUS_ERROR: 4
};

/**
 * @enum {number}
 */
proto.santiago.web.play.AttachmentCompileStatus = {
  ATTACHMENT_COMPILE_STATUS_UNSPECIFIED: 0,
  ATTACHMENT_COMPILE_STATUS_OK: 1,
  ATTACHMENT_COMPILE_STATUS_ERROR: 2,
  ATTACHMENT_COMPILE_STATUS_INCOMPATIBLE_VERSION: 3
};

/**
 * @enum {number}
 */
proto.santiago.web.play.AttachmentType = {
  ATTACHMENT_TYPE_UNSPECIFIED: 0,
  ATTACHMENT_TYPE_SPATIAL: 1,
  ATTACHMENT_TYPE_SCRIPT: 2,
  ATTACHMENT_TYPE_SCRIPT_DATA: 3,
  ATTACHMENT_TYPE_STRINGS: 4,
  ATTACHMENT_TYPE_MP_DATA: 5
};

/**
 * @enum {number}
 */
proto.santiago.web.play.Platform = {
  UNKNOWN: 0,
  PC: 1,
  PS4: 2,
  XBOXONE: 3,
  PS5: 4,
  XBSX: 5,
  COMMON: 6,
  STEAM: 7
};

goog.object.extend(exports, proto.santiago.web.play);
