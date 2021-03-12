import * as React from 'react';
import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Atoms, Molecules} from '../../../components';
import {useSetRecoilState} from 'recoil';
import {AuthRecoil} from '../../authentication';

export default function Settings({navigation}) {
  const {colors} = useTheme();
  const insets = useSafeAreaInsets();
  const signOut = useSetRecoilState(AuthRecoil.userTokenSelector);

  return (
    <Container insets={insets}>
      <Molecules.FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor="#eeffcc"
      />
      <Atoms.H3 colors={colors}>This is top text.</Atoms.H3>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Button onPress={() => signOut(null)} title="Log out" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-top: ${(props) => props.insets.top}px;
  padding-bottom: ${(props) => props.insets.bottom}px;
  background-color: #eeffcc;
`;

const Button = styled.Button``;
