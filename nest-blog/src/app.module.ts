import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ORMModule } from './app.typeormmodule';

@Module({
  imports: [ORMModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
