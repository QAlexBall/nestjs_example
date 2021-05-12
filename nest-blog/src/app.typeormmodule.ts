import {TypeOrmModule} from '@nestjs/typeorm'
import { User } from './models/user.entity'
import { UsersModule } from './models/users.module'

const ORMModule = TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "zhuderen",
    "database": "nest_blog",
    "entities": [User],
    "synchronize": true
})

export { ORMModule }