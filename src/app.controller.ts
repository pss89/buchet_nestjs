import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PersonEntity } from './entities/person.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/person')
  getPerson(): Promise<PersonEntity[]> {
    return this.appService.getPerson();
  }
}
