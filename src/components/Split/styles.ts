import { theme } from './../../global/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: theme.colors.heading,
        paddingVertical: 20,
        borderRadius : 8,
        width: '100%'
    },
    content: {
        flex: 1,
        marginLeft : 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
    },
    divisor: {
        flexDirection:'column',

    },
    title: {
        fontFamily: theme.fonts.text500,
        fontSize: 17
    },
    date: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight
    },
    price: {
        fontFamily: theme.fonts.title700,
        fontSize: 17
    },
    amout: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight
    },
});