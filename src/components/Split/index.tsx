import React from 'react'
import { View, Text } from 'react-native'

import { Entypo } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'
import { styles } from './styles'

interface ISplit {
    data : {
        type : string;
        title : string;
        date : string;
        priceFormatted : string;
        amount : string

    }
}

export function Split({
    data : {
        type,
        title,
        date,
        priceFormatted,
        amount
    }
} : ISplit) {
    return (
        <View style={styles.container}>
            <Entypo 
                name={type == 'income' ? 'arrow-with-circle-up' : 'arrow-with-circle-down'}
                color={type == 'income' ? theme.colors.primary : theme.colors.on }
                size={24}
            />
            <View style={styles.content}>
                <View style={styles.divisor}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
                <View style={styles.divisor}>
                    <Text style={styles.price} >{priceFormatted}</Text>
                    <Text style={styles.amout} >{amount}</Text>
                </View>
            </View>
        </View>
    )
}
