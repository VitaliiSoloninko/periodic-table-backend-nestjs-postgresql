import { Test, TestingModule } from '@nestjs/testing';
import { ElementsSearchController } from './elements-search.controller';
import { ElementsSearchService } from './elements-search.service';

describe('ElementsSearchController', () => {
  let controller: ElementsSearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElementsSearchController],
      providers: [ElementsSearchService],
    }).compile();

    controller = module.get<ElementsSearchController>(ElementsSearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
