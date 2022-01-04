<!--
 * @Description: 
 * @Author: luojun1
 * @Date: 2021-12-27 19:30:51
 * @LastEditTime: 2022-01-04 11:02:23
-->
# glTF Pipeline

[![License](https://img.shields.io/:license-apache-blue.svg)](https://github.com/CesiumGS/gltf-pipeline/blob/main/LICENSE.md)
[![Build Status](https://travis-ci.org/CesiumGS/gltf-pipeline.svg?branch=main)](https://travis-ci.org/CesiumGS/gltf-pipeline)

<p align="center">
<a href="https://www.khronos.org/gltf"><img src="doc/gltf.png" onerror="this.src='gltf.png'"/></a>
</p>

Content pipeline tools for optimizing [glTF](https://www.khronos.org/gltf) assets by [Richard Lee](http://leerichard.net/) and the [Cesium team](https://cesium.com/).

Supports common operations including:

- Converting glTF to glb (and reverse)
- Saving buffers/textures as embedded or separate files
- Converting glTF 1.0 models to glTF 2.0 (using the [KHR_techniques_webgl](https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_techniques_webgl) and [KHR_blend](https://github.com/KhronosGroup/glTF/pull/1302) extensions)
- Applying [Draco](https://github.com/google/draco) mesh compression

`gltf-pipeline` can be used as a command-line tool or Node.js module.

## Getting Started


### Using gltf-pipeline as a command-line tool:

#### generating normals

`node bin/gltf-pipeline.js -i ./nonormal/NewProject.gltf -o ./nonormal/test.gltf`


#### Converting a glTF to glb with generating normals

`node bin/gltf-pipeline.js -i ./nonormal/NewProject.gltf -o ./nonormal/test.glb`



### Using gltf-pipeline as a library:

#### Converting a glTF to glb:

```javascript
const gltfPipeline = require("gltf-pipeline");
const fsExtra = require("fs-extra");
const gltfToGlb = gltfPipeline.gltfToGlb;
const gltf = fsExtra.readJsonSync("model.gltf");
gltfToGlb(gltf).then(function (results) {
  fsExtra.writeFileSync("model.glb", results.glb);
});
```


### Command-Line Flags

| Flag                           | Description                                                                                                                    | Required               |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------- |
| `--help`, `-h`                 | Display help                                                                                                                   | No                     |
| `--input`, `-i`                | Path to the glTF or glb file.                                                                                                  | :white_check_mark: Yes |
| `--output`, `-o`               | Output path of the glTF or glb file. Separate resources will be saved to the same directory.                                   | Yes                     |



## Contributions

Pull requests are appreciated! Please use the same [Contributor License Agreement (CLA)](https://github.com/CesiumGS/cesium/blob/main/CONTRIBUTING.md) and [Coding Guide](https://github.com/CesiumGS/cesium/blob/main/Documentation/Contributors/CodingGuide/README.md) used for [Cesium](https://github.com/CesiumGS/cesium).
