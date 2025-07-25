import { Controller, Get } from '@nestjs/common';
import { StatesService } from './states.service';

@Controller('states')
export class StatesController {
  constructor(private readonly statesService: StatesService) {}

  @Get()
  findAllStates() {
    return this.statesService.findAllStates();
  }
}
