import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTinte } from './context/TinteContext';

export default function ColorDeseado() {
    const { colorDeseado, setColorDeseado } = useTinte();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Elige el color que deseas
      </Text>
      <Picker
  selectedValue={colorDeseado}
  onValueChange={(itemValue) => setColorDeseado(itemValue)}
  style={{
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 30,
  }}
>
  <Picker.Item label="Selecciona un color" value="" />

  <Picker.Item label="Rubio Miel" value="rubioMiel" />
  <Picker.Item label="Rubio Cenizo" value="rubioCenizo" />
  <Picker.Item label="Chocolate" value="chocolate" />
  <Picker.Item label="Cobrizo" value="cobrizo" />
  <Picker.Item label="Rojo Intenso" value="rojoIntenso" />
  <Picker.Item label="Rosa Pastel" value="rosaPastel" />
</Picker>
<TouchableOpacity
  style={styles.boton}
  onPress={() => router.push('/resultado')}
>
  <Text style={styles.textoBoton}>
    Ver resultado
  </Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#FFF0F5',
  padding: 20,
  justifyContent: 'center',
},

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#A020F0',
    textAlign: 'center',
  },

boton: {
  marginTop: 20,
  backgroundColor: '#A020F0',
  paddingVertical: 15,
  borderRadius: 15,
  alignItems: 'center',
},

textoBoton: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
},  
});