import { Controller, Get, Query } from '@nestjs/common';
import { ElementsSearchService } from './elements-search.service';

@Controller('elements-search')
export class ElementsSearchController {
  constructor(private readonly elementsSearchService: ElementsSearchService) {}

  @Get('name')
  findByName(@Query('q') name: string) {
    return this.elementsSearchService.findByName(name);
  }

  @Get('symbol')
  findBySymbol(@Query('q') symbol: string) {
    return this.elementsSearchService.findBySymbol(symbol);
  }
}
