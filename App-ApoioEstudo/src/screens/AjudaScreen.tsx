import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { cores } from '../theme/cores';

const perguntas = [
  'Como acessar o SIGAA?',
  'Como solicitar declaração de matrícula?',
  'Onde consultar minhas notas?',
];

export default function AjudaScreen() {
  function abrirContato() {
    Alert.alert('Fale conosco', 'Entre em contato pelo e-mail suporte@cefetmg.br');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perguntas frequentes</Text>

      {perguntas.map((pergunta) => (
        <View key={pergunta} style={styles.item}>
          <Text style={styles.pergunta}>{pergunta}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.botao} onPress={abrirContato}>
        <Text style={styles.botaoTexto}>Fale conosco</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
    padding: 20,
  },
  titulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: cores.azulInstitucional,
    marginBottom: 16,
  },
  item: {
    backgroundColor: cores.branco,
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: cores.azulInstitucional,
  },
  pergunta: {
    fontSize: 14,
    color: cores.textoEscuro,
  },
  botao: {
    marginTop: 20,
    backgroundColor: cores.laranjaComplementar,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoTexto: {
    color: cores.branco,
    fontSize: 16,
    fontWeight: '600',
  },
});
