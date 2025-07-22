import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PeriodsController } from './periods.controller';
import { Period } from './periods.model';
import { PeriodsService } from './periods.service';

@Module({
  controllers: [PeriodsController],
  providers: [PeriodsService],
  imports: [SequelizeModule.forFeature([Period])],
})
export class PeriodsModule {}
