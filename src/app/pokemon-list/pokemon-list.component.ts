import { Component, OnInit } from '@angular/core';
import { PokemonData } from '../models/pokemonData';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemonList: any[] = [];

  inputValue = document.getElementById('inputNombre');

  constructor(private _pokemonService: PokemonService) {}

  ngOnInit(): void {
    this._pokemonService.getAllPokemons().subscribe((data) => {
      // console.log(data);
      this.pokemonList = data.results;
      console.log(this.pokemonList);
      // this.data = data;
      // this.pokemonList = this.data.results;
      // console.log(this.pokemonList);
    });
    console.log(this.inputValue);
  }

  searchPokemon(pokemon: string) {
    this._pokemonService
      .getPokemon(pokemon)
      .subscribe((pokemon) => console.log(pokemon));
  }
}
