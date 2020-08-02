import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Pokemon } from './index';

const colors = {
  grass: '#62B957',
  fire: '#FD7D24',
  water: '#4A90DA',
  poison: '#A552CC',
  normal: '#9DA0AA',
  bug: '#8CB330',
  flying: '#748FC9',
  eletric: '#F2CB55',
  ground: '#F78551',
};

const backgroundColors = {
  grass: '#8BBE8A',
  fire: '#FFA756',
  water: '#58ABF6',
  poison: '#9F6E97',
  normal: '#B5B9C4',
  bug: '#8BD674',
  flying: '#748FC9',
  eletric: '#F2CB55',
  ground: '#F78551',
};

interface PokemonTypeProps {
  type: string;
}

interface PokemonCardProps {
  type: string;
}

export const Container = styled.View`
  background: #fff;
  padding: 40px;
  flex: 1;
`;

export const Header = styled.ImageBackground`
  width: 100%;
  height: 200px;
  background: #fff;
`;

export const Title = styled.Text`
  color: #17171b;
  font-size: 32px;
  line-height: 38px;

  font-weight: bold;
  margin-top: -70px;
`;

export const PokemonList = styled(FlatList as new () => FlatList<Pokemon>)`
  margin-top: 10px;
`;

export const PokemonCard = styled.View<PokemonCardProps>`
  /* height: 115px; */
  background: ${props => backgroundColors[props.type]};
  border-radius: 10px;
  margin-top: 30px;

  flex-direction: row;
  padding: 20px;
`;

export const LeftSide = styled.View`
  width: 50%;
  /* padding: 15px; */
  position: relative;
`;

export const ContentLeftSide = styled.View`
  padding: 20px;
  flex: 1;
  background: red;
`;

export const ImageCardDetailLeftSide = styled.Image`
  position: absolute;
  width: 74px;
  height: 32px;

  left: 90px;
  top: -10px;
`;

export const PokemonContentType = styled.View`
  flex-direction: row;
`;

export const PokemonType = styled.View<PokemonTypeProps>`
  padding: 5px;
  width: 65px;
  height: 25px;

  background: ${props => colors[props.type]};
  border-radius: 3px;
  margin-left: 5px;
  margin-top: 5px;

  justify-content: center;
  align-items: center;
`;

export const PokemonTypeText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`;

export const RightSide = styled.View`
  justify-content: center;
  align-items: center;
  width: 50%;
  position: relative;
`;

export const PokemonId = styled.Text`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: rgba(23, 23, 27, 0.6);
`;

export const PokemonName = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 31px;
  margin-top: 5px;
  /* identical to box height */

  /* Text / White */

  color: #ffffff;
`;

export const PokemonImage = styled.Image`
  margin-top: -40px;
  width: 130px;
  height: 130px;
  margin-right: -40px;
`;

export const PokeballCardDetail = styled.Image`
  position: absolute;
  right: -20px;
`;
