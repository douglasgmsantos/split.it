import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  urlImage: string;
}

export function Avatar({ urlImage }: Props) {
  const { primary, light } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[primary, light]}
    >
      <Image 
        source={{ uri: urlImage }}
        style={styles.avatar}
      />
    </LinearGradient>
  )

}