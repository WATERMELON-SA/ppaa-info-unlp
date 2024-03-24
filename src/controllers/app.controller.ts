import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({ status: 200, description: 'Returns the hello message' })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
