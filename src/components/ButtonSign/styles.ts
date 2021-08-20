import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.light,
    borderRadius: 8,
    borderColor: theme.colors.line,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18
  },
  title: {
    flex: 1,
    color: theme.colors.line,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    textAlign: 'center',    
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderColor: theme.colors.line,
    color: theme.colors.line
  },
  icon: {
    width: 24,
    height: 18
  }
});