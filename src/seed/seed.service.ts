import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async savePokemon({ name, id }) {
    const pokemon = await this.pokemonModel.create({ name, no: id });
    return pokemon;
  }

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=2',
    );

    data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/');
      const id = +segments[segments.length - 2];

      const pokemon = await this.savePokemon({ name, id });
      console.log(pokemon);
    });
  }
}
