/*
 * @Description: 
 * @Author: luojun1
 * @Date: 2021-12-27 20:16:03
 * @LastEditTime: 2021-12-29 16:53:11
 */
'use strict';
var AccessorReader = require('./AccessorReader');
var numberOfComponentsForType = require('../numberOfComponentsForType');

module.exports = writeAccessor;

/**
 * Writes the contents of dataArray into a glTF accessor.
 *
 * The glTF asset must be initialized for the pipeline.
 *
 * @param {Object} gltf A javascript object containing a glTF asset.
 * @param {Object} accessor The glTF accessor where data should be written.
 * @param {Array} values Values to write into the accessor.
 *
 * @see addPipelineExtras
 * @see loadGltfUris
 */
function writeAccessor(gltf, accessor, values) {
    var accessorReader = new AccessorReader(gltf, accessor);
    var componentType = accessor.componentType;
    var numberOfComponents = numberOfComponentsForType(accessor.type);
    while (!accessorReader.pastEnd()) {
        accessorReader.write(values, componentType, numberOfComponents * accessorReader.index);
        accessorReader.next();
    }
}
