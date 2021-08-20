import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';


import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
  title: string;
  iconName: string;
}

export function ButtonSign({ title, iconName, ...rest } : Props){

  return(
    <RectButton 
      style={styles.container} 
      {...rest }
    >
      <View style={styles.iconWrapper}>
        <Fontisto name={iconName as 'email'} size={24} color={theme.colors.line} />
      </View>

      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}