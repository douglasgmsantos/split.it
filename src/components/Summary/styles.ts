import { theme } from './../../global/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
    },
    card: {
        width: '46%',
        backgroundColor: theme.colors.line,
        borderRadius: 8,
        padding: 25,
    },
    text: {
        fontFamily: theme.fonts.text400,
        fontSize: 15,
        color: theme.colors.heading,
        marginTop: 15
    },
    containerCurrency: {
        flexDirection : 'row',
        marginTop: 5,
        alignItems: 'baseline'
    },
    currency: {
        fontFamily: theme.fonts.title500,
        fontSize: 20,
        color: theme.colors.heading
    },
    price: {
        fontFamily: theme.fonts.title700,
        fontSize: 25,
        marginLeft: 10,
        color: theme.colors.primary
    },
});