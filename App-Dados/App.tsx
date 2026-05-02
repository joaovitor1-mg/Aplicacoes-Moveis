import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

// vetor com as imagens do dado
// a posicao 0 representa o dado 1, e assim por diante 
const imagensDoDado = [
  require('./assets/dado1.png'),
  require('./assets/dado2.png'),
  require('./assets/dado3.png'),
  require('./assets/dado4.png'),
  require('./assets/dado5.png'),
  require('./assets/dado6.png'),
];

// funcao simples para escolher a cor de fundo conforme o numero atual
function pegarCorDeFundo(numero: number): string {
  if (numero >= 1 && numero <= 3) {
    return '#E8F6EF';
  }

  return '#FFD8A8';
}

export default function App() {
  
  const [valorAtual, setValorAtual] = useState<number>(1);
  const [valorAnterior, setValorAnterior] = useState<number>(1);

  const { width } = useWindowDimensions();

  function jogarDado() {
    const numeroAnterior = valorAtual;
    setValorAnterior(numeroAnterior);

    let novoNumero = 0;

    // Sorteia ate sair um numero diferente do anterior.
    do {
      novoNumero = Math.floor(Math.random() * 6) + 1;
    } while (novoNumero === numeroAnterior);

    // Atualiza o valor atual do dado.
    setValorAtual(novoNumero);
  }

  const corDeFundo = pegarCorDeFundo(valorAtual);

 
  const tamanhoDoDado = Math.min(width * 0.45, 170);
  const tamanhoDoTitulo = width < 380 ? 26 : 32;
  const tamanhoDoResultado = width < 380 ? 22 : 24;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: corDeFundo }]}>
      <StatusBar style="dark" />

      <View style={styles.conteudo}>
        <Text style={[styles.titulo, { fontSize: tamanhoDoTitulo }]}>Sorte</Text>

        <Text style={styles.subtitulo}>
          Toque no dado para fazer um novo sorteio
        </Text>

        <TouchableOpacity
          style={[
            styles.areaDoDado,
            { width: tamanhoDoDado + 28, height: tamanhoDoDado + 28 },
          ]}
          activeOpacity={0.8}
          onPress={jogarDado}
        >
          <Image
            source={imagensDoDado[valorAtual - 1]}
            style={[
              styles.imagemDado,
              { width: tamanhoDoDado, height: tamanhoDoDado },
            ]}
          />
        </TouchableOpacity>

        <Text style={[styles.resultado, { fontSize: tamanhoDoResultado }]}>
          Você tirou o número {valorAtual}!
        </Text>
      </View>
    </SafeAreaView>
  );
}
//estilização do app
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  conteudo: {
    flex: 1,
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  titulo: {
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 18,
    color: '#374151',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 32,
  },
  areaDoDado: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    elevation: 6,
    shadowColor: '#000000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    marginBottom: 28,
  },
  imagemDado: {
    resizeMode: 'contain',
  },
  resultado: {
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
    lineHeight: 32,
  },
});
