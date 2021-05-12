import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  _pokemonUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemon(pokemon: string) {
    return this.http.get(`${this._pokemonUrl}/${pokemon}`);
  }
}
