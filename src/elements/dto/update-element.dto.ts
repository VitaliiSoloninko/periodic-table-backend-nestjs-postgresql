import { ApiProperty } from '@nestjs/swagger';

export class UpdateElementDto {
  @ApiProperty({
    example: 1,
    description: 'Ordnungszahl (1-118)',
  })
  readonly atomic_number: number;

  @ApiProperty({
    example: 'H',
    description: 'Chemisches Symbol',
  })
  readonly symbol: string;

  @ApiProperty({
    example: 'Wasserstoff',
    description: 'Name des Elements',
  })
  readonly name: string;

  @ApiProperty({
    example: 1,
    description: 'Perioden-ID im Periodensystem',
  })
  readonly period_id: number;

  @ApiProperty({
    example: 1,
    description: 'Kategorie-ID des Elements',
  })
  readonly category_id: number;

  @ApiProperty({
    example: 1,
    description: 'Aggregatzustand-ID des Elements',
  })
  readonly state_id: number;

  @ApiProperty({
    example: 1.008,
    description: 'Atommasse in u',
  })
  readonly atomic_mass: number;

  @ApiProperty({
    example: -252.87,
    description: 'Siedepunkt in Celsius',
  })
  readonly boiling_point: number;

  @ApiProperty({
    example: -259.14,
    description: 'Schmelzpunkt in Celsius',
  })
  readonly melting_point: number;

  @ApiProperty({
    example: 2.2,
    description: 'Elektronegativität nach Pauling',
  })
  readonly electronegativity: number;

  @ApiProperty({
    example: 0.08988,
    description: 'Dichte in g/cm³',
  })
  readonly density: number;

  @ApiProperty({
    example: 'Henry Cavendish',
    description: 'Entdecker des Elements',
  })
  readonly discovered_by: string;

  @ApiProperty({
    example: '-1, +1',
    description: 'Oxidationsstufen des Elements',
  })
  readonly oxidation_states: string;

  @ApiProperty({
    example: 1,
    description: 'Gruppen-ID im Periodensystem (optional)',
    required: false,
  })
  readonly group_id?: number;
}
