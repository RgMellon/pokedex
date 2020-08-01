import styled from 'styled-components/native';

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

export const PokemonCard = styled.View`
  height: 115px;
  background: #8bbe8a;
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

export const PokemonType = styled.View`
  padding: 5px;
  width: 65px;
  height: 25px;

  background: #a552cc;
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
  font-size: 26px;
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
