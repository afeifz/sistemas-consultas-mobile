import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Especialidade } from "./src/types/especialidade";
import { Paciente } from "./src/types/paciente";
import { Medico } from "./src/interfaces/medico";
import { Consulta } from "./src/interfaces/consulta";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Open up ppo start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#814141',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize:50,
    color: '#ffffff',
    fontWeight: 'bold'
  }

});
