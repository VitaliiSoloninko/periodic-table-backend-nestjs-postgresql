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
  tableName: 'states',
  timestamps: false,
})
export class State extends Model<State> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING(20))
  name: string;

  @HasMany(() => Element)
  elements: Element[];
}
