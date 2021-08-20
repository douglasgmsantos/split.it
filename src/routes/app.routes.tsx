import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return(
    <NavigationContainer>
      <Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: theme.colors.secondary100
          }
        }}
      >     
        <Screen 
          name="Home"
          component={Home}
        />
      </Navigator>
    </NavigationContainer>
  )
}