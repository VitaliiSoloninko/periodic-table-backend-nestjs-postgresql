import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { State } from './states.model';

@Injectable()
export class StatesService {
  constructor(@InjectModel(State) private stateRepository: typeof State) {}

  async findAllStates(): Promise<State[]> {
    return this.stateRepository.findAll<State>({
      include: [
        {
          association: 'elements',
          attributes: ['id', 'atomic_number', 'symbol', 'name'],
        },
      ],
      order: [['id', 'ASC']],
    });
  }
}
