import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

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
  @Column(DataType.STRING)
  symbol: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @Column(DataType.DECIMAL(10, 4))
  atomic_mass: number;

  @Column(DataType.STRING)
  state_of_matter: string;

  @Column(DataType.STRING(30))
  category: string;

  @Column(DataType.DECIMAL(10, 2))
  boiling_point: number;

  @Column(DataType.DECIMAL(10, 2))
  melting_point: number;

  @Column(DataType.DECIMAL(4, 2))
  electronegativity: number;

  @Column(DataType.DECIMAL(10, 4))
  density: number;

  @Column(DataType.TEXT)
  discovered_by: string;

  @Column(DataType.STRING)
  oxidation_states: string;
}
