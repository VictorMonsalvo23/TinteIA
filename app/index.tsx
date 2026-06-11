import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TinteIA</Text>

      <Text style={styles.subtitulo}>
        Descubre cómo realmente quedaría tu próximo color
      </Text>

      <TouchableOpacity style={styles.boton} onPress={() => router.push('/seleccionar-foto')}>
        <Text style={styles.textoBoton}>Comenzar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF0F5',
  },

  logo: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#A020F0',
  },

  subtitulo: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 18,
    color: '#555',
  },

  boton: {
    marginTop: 30,
    backgroundColor: '#A020F0',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
  },

  textoBoton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});