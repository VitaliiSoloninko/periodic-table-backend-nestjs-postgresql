import { Test, TestingModule } from '@nestjs/testing';
import { ElementsSearchService } from './elements-search.service';

describe('ElementsSearchService', () => {
  let service: ElementsSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElementsSearchService],
    }).compile();

    service = module.get<ElementsSearchService>(ElementsSearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
