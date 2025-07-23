import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateElementDto } from './dto/create-element.dto';
import { ElementsService } from './elements.service';

@ApiTags('Elements')
@Controller('elements')
export class ElementsController {
  constructor(private readonly elementsService: ElementsService) {}

  @ApiOperation({ summary: 'Create element' })
  @ApiResponse({ status: 200, type: CreateElementDto })
  @Post()
  async createElement(@Body() createElementDto: CreateElementDto) {
    return this.elementsService.createElement(createElementDto);
  }

  @ApiOperation({ summary: 'Get all elements' })
  @ApiResponse({ status: 200, type: [CreateElementDto] })
  @Get()
  findAllElements() {
    return this.elementsService.findAllElements();
  }

  @ApiOperation({ summary: 'Get element by ID' })
  @ApiResponse({ status: 200, type: CreateElementDto })
  @Get(':id')
  findOneElement(@Param('id') id: string) {
    return this.elementsService.findOneElement(+id);
  }
}
