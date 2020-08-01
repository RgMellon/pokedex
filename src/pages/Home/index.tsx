import React from 'react';

import pokeballImage from '../../assets/img/pokeball.png';
import pokeballCard from '../../assets/img/pokeballCard.png';
import dots from '../../assets/img/dots.png';

import {
  Header,
  Container,
  Title,
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

const Home: React.FC = () => {
  return (
    <>
      <Header source={pokeballImage} />
      <Container>
        <Title> Pokédex</Title>

        <PokemonCard>
          <LeftSide>
            <PokemonId> #001 </PokemonId>
            <PokemonName> Bulbasaur </PokemonName>
            <ImageCardDetailLeftSide source={dots} />
            <PokemonContentType>
              <PokemonType>
                <PokemonTypeText> Grass </PokemonTypeText>
              </PokemonType>
              <PokemonType>
                <PokemonTypeText> Poison </PokemonTypeText>
              </PokemonType>
            </PokemonContentType>
          </LeftSide>

          <RightSide>
            <PokeballCardDetail source={pokeballCard} />
            <PokemonImage
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/1602/6709/801774675169a8fc7e67d627e657fab4?Expires=1597017600&Signature=F9iffnzYxzvv-HMq6-3CNLZWN0KxHMuBDXRHA7jQxaM8rRFhSfqPg88EisWBeipiN1Mugid3BSsdZ2guqdxxEeGZ2v8Es7m9IxbBeQrwlIWDUXJIj5OKf1zGj5vpPOOKBVnxN6UJWYR3X8ezoysgblAYdbpAafIIaJZemO-GatIJMXIA2GoQ0lRM8bqFpnXiXFhlwk0lgkFmY70hh8gdo5uSaK0WcRHj3BEQTpHD-iJdsHjUJKMfJzMqjFD65ifgsNX-8ukSBhBOzf3de1i2YZ4iKcaxOi3Jd2JD8lBCS8BbRRrQIOaqBwOXwmdUbXccY83ee23cowlxz6yODi37vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              }}
            />
          </RightSide>
        </PokemonCard>
      </Container>
    </>
  );
};

export default Home;
