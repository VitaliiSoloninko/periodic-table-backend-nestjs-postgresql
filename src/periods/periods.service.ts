import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Period } from './periods.model';

@Injectable()
export class PeriodsService {
  constructor(@InjectModel(Period) private periodRepository: typeof Period) {}

  async findAllPeriods(): Promise<Period[]> {
    return this.periodRepository.findAll<Period>({
      include: [
        {
          association: 'elements',
          attributes: ['id', 'atomic_number', 'symbol', 'name'],
        },
      ],
      order: [['number', 'ASC']],
    });
  }
}
