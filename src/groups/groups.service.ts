import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Group } from './groups.model';

@Injectable()
export class GroupsService {
  constructor(@InjectModel(Group) private groupRepository: typeof Group) {}

  async findAllGroups(): Promise<Group[]> {
    return this.groupRepository.findAll<Group>({
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
