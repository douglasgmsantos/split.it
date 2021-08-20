import React from 'react';
import { StatusBar, LogBox, View } from 'react-native';
import { Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';


// LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.']);

import { AuthProvider } from './src/hooks/auth';

import { Routes } from './src/routes';

export default function App(){
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
      <View>
        <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </View>
  );
}