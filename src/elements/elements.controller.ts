import { Controller, Get, Param } from '@nestjs/common';
import { ElementsService } from './elements.service';

@Controller('elements')
export class ElementsController {
  constructor(private readonly elementsService: ElementsService) {}

  @Get()
  findAllElements() {
    return this.elementsService.findAllElements();
  }

  @Get(':id')
  findOneElement(@Param('id') id: string) {
    return this.elementsService.findOneElement(+id);
  }
}
