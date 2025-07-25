import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './categories.model';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category) private categoryRepository: typeof Category,
  ) {}
  async findAllCategories(): Promise<Category[]> {
    const categories = await this.categoryRepository.findAll<Category>({
      include: [
        {
          association: 'elements',
          attributes: ['id', 'atomic_number', 'symbol', 'name'],
        },
      ],
      order: [['id', 'ASC']],
    });
    return categories;
  }
}
