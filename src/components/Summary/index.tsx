import React from 'react'
import { View, Text } from 'react-native'

import { Entypo } from '@expo/vector-icons'; 

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function Summary() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Entypo 
                    name="arrow-with-circle-up"
                    color={theme.colors.primary}
                    size={24}
                />

                <Text style={styles.text}>A receber</Text>
                <View style={styles.containerCurrency}>
                    <Text style={styles.currency}>R$</Text><Text style={styles.price}>497,00</Text>
                </View>
            </View>
            <View style={[styles.card, { backgroundColor : theme.colors.on}]}>
                <Entypo 
                    name="arrow-with-circle-down"
                    color={theme.colors.line}
                    size={24}
                    
                />

                <Text style={styles.text}>A pagar</Text>
                <View style={styles.containerCurrency}>
                    <Text style={[styles.currency]}>R$</Text><Text style={[styles.price, {color: theme.colors.line}]}>161,00</Text>
                </View>
            </View>
        </View>
    )
}
