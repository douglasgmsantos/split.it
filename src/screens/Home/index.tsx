import React, { useState } from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { Background } from '../../components/Backoffice'
import { ButtonAdd } from '../../components/ButtonAdd'
import { ListDivider } from '../../components/ListDivider'
import { Profile } from '../../components/Profile'
import { Split } from '../../components/Split'
import { Summary } from '../../components/Summary'
import { theme } from '../../global/styles/theme'

import { styles } from './styles'

export function Home() {
    const [loading, setLoading] = useState(false);

    return (
        <Background colors={[theme.colors.heading, theme.colors.light]}>
            <View style={{
                backgroundColor: theme.colors.primary,
                height: 195
            }}>
            </View>

            <View style={{
                top: -195
            }}>
            
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={() =>{}}/>
            </View>
            <Summary />

            {loading ? <> </>:
            <>
            <FlatList 
                data={[1,2,3,4,5,6,7,8,9,10,11,12, 13, 14].map(item => ({
                    id: item,
                    title : `${item} - Churrasco`,
                    type : item % 2 == 0 ? 'income' : 'outcome',
                    date : '01 de Março de 2021',
                    priceFormatted : 'R$ 1032,09',
                    amount: "2 amigos"
                }))}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Split data={item}  />            
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                contentContainerStyle={{ paddingBottom: 300 }}
                style={styles.matches}
                showsVerticalScrollIndicator={false}
                />
            </>
        }
        </View>
        </Background>
    )
}
