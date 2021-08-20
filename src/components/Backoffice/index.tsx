import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  colors ?: string[];
  children: ReactNode;
}

export function Background({ colors, children }: Props) {
  const { primary, light } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={Boolean(colors) ? colors!! : [primary, light]}
      
    >
      {children}
    </LinearGradient>
  )
}