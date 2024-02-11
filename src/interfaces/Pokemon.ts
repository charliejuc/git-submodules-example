export enum PokemonType {
  normal = "Normal",
  fire = "Fire",
  water = "Water",
  grass = "Grass",
  electric = "Electric",
}

export interface Pokemon {
  id: string;
  name: string;
  type: PokemonType;
  attack: number;
  defense: number;
  createdAt: Date;
  updatedAt: Date;
}
