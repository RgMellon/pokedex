import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import backgroundColor from '../../config/backgroundColor.json';

import {
  LoadingScreen,
  Container,
  Header,
  PokemonImage,
  CircleImage,
  Content,
  DotsImage,
  PokemonId,
  PokemonName,
  PokemonTypeContainer,
  PokemonType,
  PokemonTypeText,
  ContentImage,
  Title,
  StatusBar,
  Attributes,
  AttributesNumber,
  ContentBar,
  Ability,
  ProgressBar,
  BackButton,
} from './styles';

import circle from '../../assets/img/circle.png';
import dots from './img/dots.png';

interface IAttributes {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface IAbilitys {
  ability: {
    name: string;
  };
}

interface ITypes {
  type: {
    name: string;
  };
}

interface IPokemon {
  id: number;
  name: string;
  stats: IAttributes[];
  abilities: IAbilitys[];
  types: ITypes[];
  color: string;
}

interface RouteParams {
  pokemonId: number;
}

const About: React.FC = () => {
  const route = useRoute();
  const { pokemonId } = route.params as RouteParams;
  const { goBack } = useNavigation();

  const [pokemon, setPokemon] = useState({} as IPokemon);
  const [load, setLoad] = useState<boolean>(true);

  useEffect(() => {
    async function getPokemon(): Promise<void> {
      const response = await api.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`,
      );

      const { stats, abilities, id, name, types } = response.data;

      const color = backgroundColor[types[0].type.name];

      setPokemon({
        stats,
        abilities,
        id,
        name,
        types,
        color,
      });

      setLoad(false);
    }

    getPokemon();
  }, [pokemonId]);

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return load ? (
    <LoadingScreen>
      <ActivityIndicator size="large" color="#d6d6d6" />
    </LoadingScreen>
  ) : (
    <ScrollView style={{ flex: 1 }}>
      <Header type={pokemon.types[0].type.name}>
        <BackButton onPress={navigateBack}>
          <FeatherIcon name="chevron-left" size={24} color="#fff" />
        </BackButton>

        <ContentImage>
          <CircleImage source={circle} />
          <PokemonImage
            source={{
              uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`,
            }}
          />
        </ContentImage>

        <Content>
          <PokemonId>#{pokemon.id}</PokemonId>
          <PokemonName>{pokemon.name}</PokemonName>
          <PokemonTypeContainer>
            {pokemon.types.map(({ type }) => (
              <PokemonType type={type.name}>
                <PokemonTypeText>{type.name}</PokemonTypeText>
              </PokemonType>
            ))}
          </PokemonTypeContainer>
        </Content>
        <DotsImage source={dots} />
      </Header>
      <Container>
        <Title type={pokemon.types[0].type.name}> Base States </Title>
        {pokemon.stats.map(attribute => (
          <StatusBar key={attribute.stat.name}>
            <Attributes>{attribute.stat.name}</Attributes>
            <AttributesNumber>{attribute.base_stat}</AttributesNumber>
            <ContentBar>
              {/* {console.log(pokemon.color)} */}
              <ProgressBar
                type={pokemon.types[0].type.name}
                borderWidth={0}
                progress={100}
                width={attribute.base_stat}
                color={pokemon.color}
              />
            </ContentBar>
          </StatusBar>
        ))}

        <Title type={pokemon.types[0].type.name}> Abilities </Title>
        {pokemon.abilities.map(abilityItem => (
          <Ability>{abilityItem.ability.name}</Ability>
        ))}
      </Container>
    </ScrollView>
  );
};

export default About;
