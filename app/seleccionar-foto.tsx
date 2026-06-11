import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTinte } from './context/TinteContext';

export default function SeleccionarFoto() {
  const [imagen, setImagen] = useState<string | null>(null);
  const {
  colorBase,
  setColorBase,
  foto,
  setFoto
} = useTinte();

  const abrirGaleria = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!resultado.canceled) {
  const uriFoto = resultado.assets[0].uri;

  setImagen(uriFoto);
  setFoto(uriFoto);

  console.log("FOTO GUARDADA:", uriFoto);
}
  };

  return (
  <ScrollView
    style={styles.container}
    contentContainerStyle={{
      alignItems: 'center',
      paddingBottom: 40,
    }}
  >
      <Text style={styles.titulo}>Selecciona una foto</Text>

      <TouchableOpacity style={styles.boton} onPress={abrirGaleria}>
        <Text style={styles.textoBoton}>🖼️ Elegir de galería</Text>
      </TouchableOpacity>

      {imagen && (
        <Image
          source={{ uri: imagen }}
          style={styles.imagen}
        />
      )}

      <Picker
  selectedValue={colorBase}
  onValueChange={(itemValue) => setColorBase(itemValue)}
  style={{
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 20,
  }}
>
  <Picker.Item label="Selecciona tu color actual" value="" />
  <Picker.Item label="Negro" value="negro" />
  <Picker.Item label="Castaño Oscuro" value="castanoOscuro" />
  <Picker.Item label="Castaño Claro" value="castanoClaro" />
  <Picker.Item label="Rubio" value="rubio" />
  <Picker.Item label="Decolorado" value="decolorado" />
</Picker>

<TouchableOpacity
  style={styles.botonDetectar}
  onPress={() => {
    setColorBase('castanoOscuro');
  }}
>
  <Text style={styles.textoBoton}>
    🤖 Detectar automáticamente
  </Text>
</TouchableOpacity>

{colorBase !== '' && (
  <View
    style={{
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 15,
      marginTop: 10,
      width: '100%',
      alignItems: 'center',
    }}
  >
    <Text
      style={{
        fontSize: 16,
        color: '#666',
      }}
    >
      🤖 Detectamos
    </Text>

    <Text
      style={{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
      }}
    >
      Castaño Oscuro
    </Text>

    <Text
      style={{
        color: '#888',
        marginTop: 5,
      }}
    >
      Confianza: 82%
    </Text>
  </View>
)}

<TouchableOpacity
  style={styles.botonContinuar}
  onPress={() => {

  if (!foto) {
    alert('Selecciona una foto primero');
    return;
  }

  if (!colorBase) {
    alert('Selecciona un color o usa la detección automática');
    return;
  }

  router.push('/color-deseado');

}}
>
  <Text style={styles.textoBoton}>
    Continuar
  </Text>
</TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 20,
  backgroundColor: '#FFF0F5',
},

  titulo: {
    marginTop: 40,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#A020F0',
  },

  boton: {
    marginTop: 30,
    backgroundColor: '#A020F0',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
  },

  

  textoBoton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  imagen: {
    width: 300,
    height: 400,
    marginTop: 30,
    borderRadius: 15,
  },
botonContinuar: {
  marginTop: 20,
  backgroundColor: '#A020F0',
  paddingVertical: 15,
  paddingHorizontal: 30,
  borderRadius: 15,
},

botonDetectar: {
  marginTop: 10,
  backgroundColor: '#6A0DAD',
  paddingVertical: 15,
  paddingHorizontal: 30,
  borderRadius: 15,
},
  
});