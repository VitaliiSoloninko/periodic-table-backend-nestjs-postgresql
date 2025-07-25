import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Element } from 'src/elements/elements.model';

@Table({
  tableName: 'periods',
  timestamps: false,
})
export class Period extends Model<Period> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Unique
  @AllowNull(false)
  @Column(DataType.INTEGER)
  number: number;

  @HasMany(() => Element)
  elements: Element[];
}
