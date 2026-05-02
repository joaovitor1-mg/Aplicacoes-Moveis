import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// funcao para aceitar valores com virgula ou ponto
function formatarValor(valor: string): string {
  return valor.replace(/,/g, '.').trim();
}

export default function App() {
  const [gasolina, setGasolina] = useState('');
  const [alcool, setAlcool] = useState('');
  const [resultado, setResultado] = useState(
    'Digite os valores acima e toque em Calcular.',
  );

  function calcularMelhorOpcao() {
    const gasolinaFormatada = formatarValor(gasolina);
    const alcoolFormatado = formatarValor(alcool);

    if (gasolinaFormatada === '' || alcoolFormatado === '') {
      Alert.alert('Atenção', 'Preencha os dois campos antes de calcular.');
      return;
    }

    const precoGasolina = parseFloat(gasolinaFormatada);
    const precoAlcool = parseFloat(alcoolFormatado);

    // valida campos vazios, valores invalidos e menores ou iguais a zero
    if (
      Number.isNaN(precoGasolina) ||
      Number.isNaN(precoAlcool) ||
      precoGasolina <= 0 ||
      precoAlcool <= 0
    ) {
      Alert.alert(
        'Valor inválido',
        'Digite valores numéricos maiores que zero.',
      );
      return;
    }

    const relacao = precoAlcool / precoGasolina;

    // se a relacao for menor que 0.7, o alcool compensa mais
    if (relacao < 0.7) {
      setResultado(
        `Compensa usar Álcool.\nRelação calculada: ${relacao.toFixed(2)}`,
      );
      return;
    }

    setResultado(
      `Compensa usar Gasolina.\nRelação calculada: ${relacao.toFixed(2)}`,
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3202/3202926.png',
          }}
          style={styles.logo}
        />

        <Text style={styles.titulo}>Gasolina ou Álcool?</Text>

        <Text style={styles.subtitulo}>
          Informe os preços para descobrir qual combustível vale mais a pena.
        </Text>

        <Text style={styles.label}>Preço da gasolina</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 5,89"
          placeholderTextColor="#8a94a6"
          keyboardType="decimal-pad"
          value={gasolina}
          onChangeText={setGasolina}
        />

        <Text style={styles.label}>Preço do álcool</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 3,99"
          placeholderTextColor="#8a94a6"
          keyboardType="decimal-pad"
          value={alcool}
          onChangeText={setAlcool}
        />

        <TouchableOpacity style={styles.botao} onPress={calcularMelhorOpcao}>
          <Text style={styles.textoBotao}>Calcular</Text>
        </TouchableOpacity>

        <Text style={styles.resultado}>{resultado}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef4f1',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 8,
  },
  logo: {
    width: 96,
    height: 96,
    alignSelf: 'center',
    marginBottom: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1f2937',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 15,
    color: '#5b6472',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 24,
    lineHeight: 22,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#344054',
    marginBottom: 8,
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#cfd8e3',
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1f2937',
    backgroundColor: '#f8fafc',
    marginBottom: 18,
  },
  botao: {
    backgroundColor: '#1f8a4c',
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '700',
  },
  resultado: {
    marginTop: 24,
    padding: 16,
    borderRadius: 14,
    backgroundColor: '#f3f8f5',
    textAlign: 'center',
    fontSize: 17,
    color: '#1f2937',
    lineHeight: 24,
  },
});
