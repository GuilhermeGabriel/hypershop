"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const user_module_1 = require("./users/user.module");
const lesson_module_1 = require("./lesson/lesson.module");
const typeorm_1 = require("@nestjs/typeorm");
const lesson_entity_1 = require("./lesson/lesson.entity");
const user_entity_1 = require("./users/user.entity");
const product_entity_1 = require("./product/product.entity");
const product_module_1 = require("./product/product.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mongodb',
                url: 'mongodb://localhost/hyperstore',
                synchronize: true,
                useUnifiedTopology: true,
                entities: [
                    lesson_entity_1.Lesson,
                    user_entity_1.User,
                    product_entity_1.Product
                ],
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: true,
                cors: {
                    origin: true,
                    credentials: true,
                },
                playground: false
            }),
            lesson_module_1.LessonModule,
            user_module_1.UserModule,
            product_module_1.ProductModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map