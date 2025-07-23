import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Element } from '../elements/elements.model';

@Injectable()
export class ElementsSearchService {
  constructor(
    @InjectModel(Element) private elementRepository: typeof Element,
  ) {}

  findByName(name: string): Promise<Element[]> {
    return this.elementRepository.findAll({
      where: {
        name: { [Op.iLike]: `%${name}%` },
      },
      include: { all: true },
      order: [['atomic_number', 'ASC']],
    });
  }

  findBySymbol(symbol: string): Promise<Element[]> {
    return this.elementRepository.findAll({
      where: { symbol: symbol.toUpperCase() },
      include: { all: true },
      order: [['atomic_number', 'ASC']],
    });
  }
}
