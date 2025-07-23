import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateElementDto } from './dto/create-element.dto';
import { Element } from './elements.model';

@Injectable()
export class ElementsService {
  constructor(
    @InjectModel(Element) private elementRepository: typeof Element,
  ) {}

  async createElement(createElementDto: CreateElementDto): Promise<Element> {
    const element = await this.elementRepository.create(
      createElementDto as any,
    );
    return element;
  }

  async findAllElements(): Promise<Element[]> {
    const elements = await this.elementRepository.findAll<Element>({
      include: { all: true },
    });
    return elements;
  }

  async findOneElement(id: number): Promise<Element | null> {
    const element = await this.elementRepository.findOne<Element>({
      where: { id },
      include: { all: true },
    });

    if (!element) {
      throw new NotFoundException(`Element with ID ${id} not found`);
    }
    return element;
  }
}
