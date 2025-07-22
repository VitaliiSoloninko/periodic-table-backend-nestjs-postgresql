import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ElementsController } from './elements.controller';
import { Element } from './elements.model';
import { ElementsService } from './elements.service';

@Module({
  controllers: [ElementsController],
  providers: [ElementsService],
  imports: [SequelizeModule.forFeature([Element])],
})
export class ElementsModule {}
