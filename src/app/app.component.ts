import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pokemonName = new FormControl('');
  pokemonData: any = {};
  pokemonImg: any;
  pokemonTypes: any;

  constructor(private _pokemonService: PokemonService) {}

  fetchPokemonData(pokemon: string) {
    this._pokemonService.getPokemon(pokemon).subscribe((pokemonData) => {
      this.pokemonData = pokemonData;
      this.pokemonImg =
        this.pokemonData.sprites.other.dream_world.front_default;
      this.pokemonTypes = this.pokemonData.types.map((type: any) => {
        return type.type.name;
      });
      // console.log(this.pokemonTypes);
    });
  }

  capitalizeString(text: string) {
    let endOfText = text.slice(1);
    return text.charAt(0).toUpperCase() + endOfText;
  }

  // getTypes(array: []) {
  //   let types;
  //   array.forEach((type) => {
  //     console.log(type);
  //   });

  //   return;
  // }
}
