import { Controller, Get } from '@nestjs/common';
import { PeriodsService } from './periods.service';

@Controller('periods')
export class PeriodsController {
  constructor(private readonly periodsService: PeriodsService) {}

  @Get()
  findAllPeriods() {
    return this.periodsService.findAllPeriods();
  }
}
