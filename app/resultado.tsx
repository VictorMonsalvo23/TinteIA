import { router } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTinte } from './context/TinteContext';
import { reglasColor } from './data/reglasColor';

export default function Resultado() {
  const {
  colorBase,
  colorDeseado,
  foto
} = useTinte();

const nombresColores = {
    
  castanoMuyOscuro: 'Castaño Muy Oscuro',
castanoMedio: 'Castaño Medio',

rubioOscuro: 'Rubio Oscuro',
rubioMedio: 'Rubio Medio',
rubioClaro: 'Rubio Claro',
rubioExtraClaro: 'Rubio Extra Claro',

moca: 'Moca',
avellana: 'Avellana',
caramelo: 'Caramelo',

rubioPerla: 'Rubio Perla',
rubioPlatinado: 'Rubio Platinado',

vino: 'Vino',
morado: 'Morado',
azul: 'Azul',  
  negro: 'Negro',
  castanoOscuro: 'Castaño Oscuro',
  castanoClaro: 'Castaño Claro',
  rubio: 'Rubio',
  decolorado: 'Decolorado',

  rubioMiel: 'Rubio Miel',
  rubioCenizo: 'Rubio Cenizo',
  chocolate: 'Chocolate',
  cobrizo: 'Cobrizo',
  rojoIntenso: 'Rojo Intenso',
  rosaPastel: 'Rosa Pastel',
};
const coloresVisuales = {
  negro: '#000000',

  castanoOscuro: '#4A2C2A',
  castanoClaro: '#8B5A2B',

  rubio: '#DDBB5A',

  decolorado: '#F5F5DC',

  rubioMiel: '#E6B85C',
  rubioCenizo: '#C0C0C0',

  chocolate: '#7B3F00',

  cobrizo: '#B87333',

  rojoIntenso: '#B22222',

  rosaPastel: '#FFB6C1',

  castanoMuyOscuro: '#2B1B17',
castanoMedio: '#6F4E37',

rubioOscuro: '#B8860B',
rubioMedio: '#D4AF37',
rubioClaro: '#F4E2A0',
rubioExtraClaro: '#FFF4C2',

moca: '#6F4E37',
avellana: '#A47149',
caramelo: '#C68E17',

rubioPerla: '#E8E6E0',
rubioPlatinado: '#F8F8FF',

vino: '#722F37',
morado: '#800080',
azul: '#1E3A8A',
};

console.log("FOTO:", foto);

const resultado =
  (reglasColor as any)?.[colorBase]?.[colorDeseado];
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.titulo}>
        Resultado estimado
      </Text>
    {foto ? (
  <Image
    source={{ uri: foto }}
    style={styles.foto}
  />
) : null}

<View style={styles.infoColores}>

  <Text style={styles.etiqueta}>
    Color actual
  </Text>

  <View style={styles.filaColor}>
  <View
    style={[
      styles.bolitaColor,
      {
        backgroundColor:
          coloresVisuales[colorBase as keyof typeof coloresVisuales] || '#999',
      },
    ]}
  />

  <Text style={styles.valor}>
    {nombresColores[colorBase as keyof typeof nombresColores]}
  </Text>
</View>

  <Text style={styles.etiqueta}>
    Color deseado
  </Text>

  <View style={styles.filaColor}>
  <View
    style={[
      styles.bolitaColor,
      {
        backgroundColor:
          coloresVisuales[colorDeseado as keyof typeof coloresVisuales] || '#999',
      },
    ]}
  />

  <Text style={styles.valor}>
    {nombresColores[colorDeseado as keyof typeof nombresColores]}
  </Text>
</View>

</View>
      
      <View style={styles.card}>
        <Text style={styles.subtitulo}>
          Sin decoloración
        </Text>

        <Text style={styles.texto}>
  {resultado?.sin || 'Sin información disponible'}
</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitulo}>
          Con decoloración
        </Text>

        <Text style={styles.texto}>
  {resultado?.con || 'Sin información disponible'}
</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitulo}>
          Recomendación
        </Text>

        <Text style={styles.texto}>
  {resultado?.recomendacion || 'No hay recomendación disponible'}
</Text>
      </View>

      <TouchableOpacity
  style={styles.botonNuevo}
  onPress={() => router.replace('/')}
>
  <Text style={styles.textoBotonNuevo}>
    🔄 Nueva simulación
  </Text>
</TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
    padding: 20,
  },

  contenido: {
  paddingBottom: 40,
},

  titulo: {
  marginTop: 50,
  marginBottom: 20,
  fontSize: 32,
  fontWeight: 'bold',
  color: '#A020F0',
  textAlign: 'center',
},

  card: {
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 20,
    borderRadius: 15,
    elevation: 4,
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A020F0',
  },

  texto: {
    marginTop: 10,
    fontSize: 16,
    color: '#444',
  },

  foto: {
  width: '100%',
  height: 250,
  borderRadius: 15,
  marginTop: 20,
},

infoColores: {
  backgroundColor: '#fff',
  padding: 20,
  borderRadius: 20,
  marginTop: 15,

  elevation: 4,
},

infoTexto: {
  fontSize: 16,
  fontWeight: '600',
  color: '#444',
  marginVertical: 3,
},

botonNuevo: {
  backgroundColor: '#A020F0',
  marginTop: 20,
  marginBottom: 30,
  paddingVertical: 16,
  borderRadius: 20,
  alignItems: 'center',

  elevation: 5,
},

textoBotonNuevo: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
},

etiqueta: {
  fontSize: 14,
  color: '#888',
  marginTop: 5,
},

valor: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 10,
},

filaColor: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10,
},

bolitaColor: {
  width: 22,
  height: 22,
  borderRadius: 11,
  marginRight: 10,
  borderWidth: 1,
  borderColor: '#ddd',
},
});