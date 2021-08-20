import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%'
  },
  containerLoading: {
    display: 'flex',
    justifyContent:'center',
    height: '100%'
  },
  contentMessage: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  image:{
    top: 60,
    left: -30,
    position: 'absolute'
  },
  message: {
    paddingLeft: 30,
    top: 70,
    width: '40%',
    marginBottom: 15,
    fontFamily: theme.fonts.text500,
    fontSize: 30,
    color: theme.colors.line
  },
  subMessage: {
    paddingLeft: 30,
    top: 70,
    width: '26%',
    fontFamily: theme.fonts.text400,
    fontSize: 15,
    color: theme.colors.line
  },
  icon: {
    marginTop: 30,
    paddingLeft: 30,
    top: 100,
    fontFamily: theme.fonts.text400,
    fontSize: 30,
    color: theme.colors.line
  },
  signIn: {
    flex: 1,
    backgroundColor: theme.colors.heading,
    paddingHorizontal: 30,
    paddingVertical: 30

  },
  containerTitle: {
    paddingBottom: 30
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 30,
    color: theme.colors.line,
  },
  subtitle: {
    fontFamily: theme.fonts.text400,
    fontSize: 18,
    color: theme.colors.line,
  },
  containerButtons: {},
  
});