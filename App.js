import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Carousel from './components/carousel/Carousel';
import { useFonts, Poppins_400Regular} from '@expo-google-fonts/poppins'
import  styles  from './App-styles';
// import { AppLoading } from 'expo'
// import LinearGradient from 'react-native-linear-gradient'

export default function App() {

  // const [poppinsLoaded] = useFonts({
  //   Poppins_400Regular
  // })
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if(!fontsLoaded){
    return( 
      <ImageBackground source={require('./assets/fondoazul.png')} style={styles.container}>
        <Text style={styles.textFooter}>Cargando</Text>
      </ImageBackground>
    )
  }

  return (
    <ImageBackground source={require('./assets/fondoazul.png')} style={styles.container}>
      {fontsLoaded && <View style={styles.containerHeader}>
        <Text style={styles.text}>
          Carousel App
        </Text>
      </View> }
      <Carousel/>
      <View style={styles.containerFooter}>
        <Text style={styles.textFooter}>
            Developed by Gonzalo Arancibia
        </Text>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
