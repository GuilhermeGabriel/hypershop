"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const fs = require("fs");
var path = require('path');
async function bootstrap() {
    const httpsOptions = {
        key: fs.readFileSync(__dirname + '/secrets/private.key'),
        cert: fs.readFileSync(__dirname + '/secrets/certificate.crt'),
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        httpsOptions,
    });
    app.enableCors();
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map