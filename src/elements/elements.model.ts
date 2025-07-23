import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Category } from 'src/categories/categories.model';
import { Group } from 'src/groups/groups.model';
import { Period } from 'src/periods/periods.model';
import { State } from 'src/states/states.model';

@Table({
  tableName: 'elements',
})
export class Element extends Model<Element> {
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Column(DataType.INTEGER)
  id: number;

  @Unique
  @AllowNull(false)
  @Column(DataType.INTEGER)
  atomic_number: number;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING(3))
  symbol: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @Column(DataType.DECIMAL(10, 4))
  atomic_mass: number;

  @Column(DataType.DECIMAL(10, 2))
  boiling_point: number;

  @Column(DataType.DECIMAL(10, 2))
  melting_point: number;

  @Column(DataType.DECIMAL(4, 2))
  electronegativity: number;

  @Column(DataType.DECIMAL(10, 4))
  density: number;

  @Column(DataType.STRING)
  discovered_by: string;

  @Column(DataType.STRING)
  oxidation_states: string;

  @BelongsTo(() => State, {
    foreignKey: 'state_id',
  })
  state: State;

  @BelongsTo(() => Category, {
    foreignKey: 'category_id',
  })
  category: Category;

  @BelongsTo(() => Group, {
    foreignKey: 'group_id',
  })
  group: Group;

  @BelongsTo(() => Period, {
    foreignKey: 'period_id',
  })
  period: Period;
}
