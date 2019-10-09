var loaderUtils = require('loader-utils');
var sourceNode = require('source-map').SourceNode;
var sourceMapConsumer = require('source-map').sourceMapConsumer;

module.exports = function (content, sourceMap) {
	var useStrictPrefix = '\'use strict\';\n\n';
	if (this.cacheable) {
		this.cacheable();
	}
	console.log(1);//

	var options = loaderUtils.getOptions(this) || {};

	if (options.sourceMap && sourceMap) {
		var currentRequest = loaderUtils.getCurrentRequest(this);
		var node = SourceNode.fromStringWithSourceMap(
			content,
			new sourceMapConsumer(sourceMap)
		);
		node.append(useStrictPrefix);
		var result = node.toStringWithSourceMap({file: currentRequest});
		var callback = this.async();
		callback(null, result.code, result.map.toJSON());
	}
	return useStrictPrefix + content;
};