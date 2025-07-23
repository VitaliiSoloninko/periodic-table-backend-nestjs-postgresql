import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateElementDto } from './dto/create-element.dto';
import { ElementsService } from './elements.service';

@Controller('elements')
export class ElementsController {
  constructor(private readonly elementsService: ElementsService) {}

  @Post()
  async createElement(@Body() createElementDto: CreateElementDto) {
    return this.elementsService.createElement(createElementDto);
  }

  @Get()
  findAllElements() {
    return this.elementsService.findAllElements();
  }

  @Get(':id')
  findOneElement(@Param('id') id: string) {
    return this.elementsService.findOneElement(+id);
  }
}
