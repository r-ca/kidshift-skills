"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pjson_1 = require("pjson");
const packageJson = {
    name: pjson_1.name,
    description: pjson_1.description,
    version: pjson_1.version,
    main: pjson_1.main,
    license: pjson_1.license,
    dependencies: pjson_1.dependencies,
};
console.log(JSON.stringify(packageJson));
//# sourceMappingURL=gen-package-json.js.map