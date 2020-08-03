import styled from 'styled-components/native';

import * as Progress from 'react-native-progress';

import backgroundColor from '../../config/backgroundColor.json';
import colorType from '../../config/color.json';

interface TypeProps {
  type: string;
}

export const LoadingScreen = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Header = styled.View<TypeProps>`
  background: ${props => backgroundColor[props.type]};
  height: 340px;
  padding: 20px;

  flex-direction: row;
  align-items: center;

  position: relative;
`;

export const ContentImage = styled.View`
  position: relative;
`;

export const CircleImage = styled.Image`
  width: 125px;
  height: 125px;
  position: absolute;
`;

export const PokemonImage = styled.Image`
  width: 125px;
  height: 125px;
`;

export const Content = styled.View`
  margin-left: 40px;
`;

export const DotsImage = styled.Image`
  width: 85px;

  position: absolute;
  right: -20px;
  top: 220px;
`;

export const PokemonId = styled.Text`
  font-size: 16px;
  line-height: 19px;
  font-style: normal;
  font-weight: bold;
  color: rgba(23, 23, 27, 0.6);
`;

export const PokemonName = styled.Text`
  text-transform: capitalize;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;

  color: #ffffff;
`;

export const PokemonTypeContainer = styled.View`
  flex-direction: row;
  /* margin-top: 50px; */
`;

export const PokemonType = styled.View<TypeProps>`
  width: 61px;
  height: 25px;

  /* Type / Grass */

  background: ${props => colorType[props.type]};
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  margin-top: 10px;
`;

export const PokemonTypeText = styled.Text`
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #fafafa;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  margin-top: -40px;
`;

export const Title = styled.Text<TypeProps>`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  padding: 20px;
  /* identical to box height */

  /* Type / Grass */

  color: ${props => backgroundColor[props.type]};
`;

export const StatusBar = styled.View`
  width: 100%;
  padding: 10px 20px;
  /* background: red; */
  /* height: 20px; */

  flex-direction: row;
  align-items: center;
`;

export const Attributes = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  width: 110px;
  text-transform: capitalize;

  /* Text / Black */

  color: #17171b;
`;
export const AttributesNumber = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: right;

  /* Text / Gray */

  color: #747476;
  margin-left: 20px;
`;

export const ContentBar = styled.View`
  margin-left: 20px;
`;

export const Ability = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  padding: 10px 20px;
  text-transform: capitalize;
  /* identical to box height */

  /* Text / Gray */

  color: #747476;
`;

export const ProgressBar = styled(Progress.Bar).attrs({})<TypeProps>``;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 70;
  left: 40px;
`;
