import React, { useState, useEffect, useCallback } from 'react';

import { ScrollView } from 'react-native';
import pokeballImage from '../../assets/img/pokeball.png';
import pokeballCard from '../../assets/img/pokeballCard.png';
import dots from '../../assets/img/dots.png';

import api from '../../services/api';

import {
  Header,
  Container,
  Title,
  PokemonList,
  PokemonCard,
  LeftSide,
  RightSide,
  PokemonId,
  PokemonName,
  ImageCardDetailLeftSide,
  PokemonImage,
  PokeballCardDetail,
  PokemonContentType,
  PokemonType,
  PokemonTypeText,
} from './styles';

interface PokemonType {
  type: {
    name: string;
  };
}

export interface Pokemon {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
}

export interface RequestPokemon {
  id: number;
  types: PokemonType[];
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const getPokemonInfo = useCallback(async (url: string): Promise<
    RequestPokemon
  > => {
    const response = await api.get(url);

    const { id, types } = response.data as RequestPokemon;

    return { id, types };
  }, []);

  useEffect(() => {
    async function getPokemons(): Promise<void> {
      const response = await api.get('/pokemon');
      const { results } = response.data;

      const payloadPokemons = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          const { id, types } = await getPokemonInfo(pokemon.url);

          return {
            name: pokemon.name,
            id,
            types,
          };
        }),
      );

      setPokemons(payloadPokemons as Pokemon[]);
    }

    getPokemons();
  }, [getPokemonInfo]);

  return (
    <ScrollView>
      <Header source={pokeballImage} />

      <Container>
        <Title> Pokédex</Title>
        <PokemonList
          // ListHeaderComponent={<Title> Pokédex</Title>}
          data={pokemons}
          keyExtractor={pokemon => pokemon.name}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: pokemon }) => (
            <PokemonCard type={pokemon.types[0].type.name}>
              <LeftSide>
                <PokemonId>#{pokemon.id}</PokemonId>
                <PokemonName>{pokemon.name}</PokemonName>
                <ImageCardDetailLeftSide source={dots} />
                <PokemonContentType>
                  {pokemon.types.map(pokemonType => (
                    <PokemonType key={pokemon.id} type={pokemonType.type.name}>
                      <PokemonTypeText>{pokemonType.type.name}</PokemonTypeText>
                    </PokemonType>
                  ))}
                </PokemonContentType>
              </LeftSide>

              <RightSide>
                <PokeballCardDetail source={pokeballCard} />
                <PokemonImage
                  source={{
                    uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`,
                  }}
                />
              </RightSide>
            </PokemonCard>
          )}
        />
      </Container>
    </ScrollView>
  );
};

export default Home;