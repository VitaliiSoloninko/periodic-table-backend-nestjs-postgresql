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
  tableName: 'groups',
  timestamps: false,
})
export class Group extends Model<Group> {
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
