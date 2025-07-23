import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StatesController } from './states.controller';
import { State } from './states.model';
import { StatesService } from './states.service';

@Module({
  controllers: [StatesController],
  providers: [StatesService],
  imports: [SequelizeModule.forFeature([State])],
})
export class StatesModule {}
