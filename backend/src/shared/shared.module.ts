import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { SharedController } from './shared.controller';

@Module({
  controllers: [SharedController],
  providers: [SharedService],
})
export class SharedModule {}
