import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonData } from '../models/pokemonData';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  _pokemonUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getAllPokemons() {
    return this.http.get<PokemonData>(this._pokemonUrl);
  }

  getPokemon(pokemon: string) {
    return this.http.get(`${this._pokemonUrl}/${pokemon}`);
  }
}
