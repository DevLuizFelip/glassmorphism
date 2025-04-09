
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { CreditCard } from './components/CreditCard/creditCard';

export default function App() {
  return (
    
      <ImageBackground style={styles.container} source={require("./src/assets/bg-1.png")} resizeMode='cover'>
        <CreditCard/>
      </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
});
