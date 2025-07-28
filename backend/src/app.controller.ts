/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/await-thenable */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './auth/decorator/user.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@User() user: any): Promise<string> {
    return await this.appService.getHello(user.id);
  }
}
