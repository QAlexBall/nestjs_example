"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORMModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./models/user.entity");
const ORMModule = typeorm_1.TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "zhuderen",
    "database": "nest_blog",
    "entities": [user_entity_1.User],
    "synchronize": true
});
exports.ORMModule = ORMModule;
//# sourceMappingURL=app.typeormmodule.js.map