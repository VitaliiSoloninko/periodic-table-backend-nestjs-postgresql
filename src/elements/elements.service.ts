import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Element } from './elements.model';

@Injectable()
export class ElementsService {
  constructor(
    @InjectModel(Element) private elementRepository: typeof Element,
  ) {}

  async findAllElements(): Promise<Element[]> {
    const elements = await this.elementRepository.findAll<Element>({
      include: [
        { association: 'group' },
        { association: 'period' },
        { association: 'category' },
        { association: 'state' },
      ],
    });
    return elements;
  }

  async findOneElement(id: number): Promise<Element | null> {
    const element = await this.elementRepository.findOne<Element>({
      where: { id },
      include: [
        { association: 'group' },
        { association: 'period' },
        { association: 'category' },
        { association: 'state' },
      ],
    });

    if (!element) {
      throw new NotFoundException(`Element with ID ${id} not found`);
    }
    return element;
  }
}
