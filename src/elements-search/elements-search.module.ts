import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Element } from '../elements/elements.model';
import { ElementsSearchController } from './elements-search.controller';
import { ElementsSearchService } from './elements-search.service';

@Module({
  controllers: [ElementsSearchController],
  providers: [ElementsSearchService],
  imports: [SequelizeModule.forFeature([Element])],
})
export class ElementsSearchModule {}
