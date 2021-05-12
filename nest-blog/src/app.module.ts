import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ORMModule } from './app.typeormmodule';
import { UsersModule } from './models/users.module';

@Module({
  imports: [ORMModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
