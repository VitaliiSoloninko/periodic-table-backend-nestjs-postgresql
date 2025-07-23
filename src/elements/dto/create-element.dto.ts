export class CreateElementDto {
  readonly atomic_number: number;
  readonly symbol: string;
  readonly name: string;
  readonly period_id: number;
  readonly category_id: number;
  readonly state_id: number;

  readonly atomic_mass: number;
  readonly boiling_point: number;
  readonly melting_point: number;
  readonly electronegativity: number;
  readonly density: number;
  readonly discovered_by: string;
  readonly oxidation_states: string;
  readonly group_id?: number;
}
