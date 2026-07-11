import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { cores } from '../theme/cores';

const noticias = [
  {
    id: '1',
    titulo: 'Matrículas abertas para o 2º semestre',
    resumo: 'Confira prazos e documentos necessários no site do CEFET-MG.',
  },
  {
    id: '2',
    titulo: 'Semana de Ciência e Tecnologia 2026',
    resumo: 'Inscrições abertas para oficinas e palestras gratuitas.',
  },
  {
    id: '3',
    titulo: 'Biblioteca com horário estendido',
    resumo: 'Atendimento até as 22h durante o período de provas.',
  },
];

const nomeEstudante = 'Bruno Couto';

export default function InicioScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.saudacao}>Olá, {nomeEstudante}!</Text>
      <Text style={styles.subtitulo}>Bem-vindo ao Meu CEFET-MG</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Horarios', { nomeEstudante })}
      >
        <Text style={styles.botaoTexto}>Ver meus horários</Text>
      </TouchableOpacity>

      <Text style={styles.secaoTitulo}>Notícias</Text>
      {noticias.map((noticia) => (
        <TouchableOpacity
          key={noticia.id}
          style={styles.card}
          onPress={() => Linking.openURL('https://www.cefetmg.br')}
        >
          <Text style={styles.cardTitulo}>{noticia.titulo}</Text>
          <Text style={styles.cardResumo}>{noticia.resumo}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  saudacao: {
    fontSize: 26,
    fontWeight: 'bold',
    color: cores.azulInstitucional,
  },
  subtitulo: {
    fontSize: 16,
    color: cores.textoEscuro,
    marginTop: 4,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: cores.laranjaComplementar,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 28,
  },
  botaoTexto: {
    color: cores.branco,
    fontSize: 16,
    fontWeight: '600',
  },
  secaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: cores.azulInstitucional,
    marginBottom: 12,
  },
  card: {
    backgroundColor: cores.branco,
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: cores.azulInstitucional,
  },
  cardTitulo: {
    fontSize: 15,
    fontWeight: '600',
    color: cores.textoEscuro,
  },
  cardResumo: {
    fontSize: 13,
    color: '#555',
    marginTop: 4,
  },
});
