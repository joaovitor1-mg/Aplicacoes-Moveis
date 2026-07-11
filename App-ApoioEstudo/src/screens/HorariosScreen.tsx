import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { cores } from '../theme/cores';

const horarios = [
  { dia: 'Segunda', materia: 'Matemática', hora: '08h às 09h40' },
  { dia: 'Terça', materia: 'Física', hora: '10h às 11h40' },
  { dia: 'Quarta', materia: 'Programação', hora: '13h às 14h40' },
  { dia: 'Quinta', materia: 'Banco de Dados', hora: '08h às 09h40' },
  { dia: 'Sexta', materia: 'Inglês Técnico', hora: '10h às 11h40' },
];

export default function HorariosScreen({ route }: any) {
  // nome so existe quando a tela de Inicio manda o parametro pelo navigate
  const nomeEstudante = route.params?.nomeEstudante;

  return (
    <View style={styles.container}>
      {nomeEstudante ? (
        <Text style={styles.titulo}>Olá, {nomeEstudante}! Aqui estão seus horários:</Text>
      ) : (
        <Text style={styles.titulo}>Horários de aula não personalizados.</Text>
      )}

      <ScrollView>
        {horarios.map((item) => (
          <View key={item.dia} style={styles.item}>
            <Text style={styles.dia}>{item.dia}</Text>
            <Text style={styles.detalhe}>
              {item.materia} - {item.hora}
            </Text>
          </View>
        ))}
      </ScrollView>
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
    borderLeftColor: cores.laranjaComplementar,
  },
  dia: {
    fontSize: 14,
    fontWeight: '700',
    color: cores.azulInstitucional,
  },
  detalhe: {
    fontSize: 14,
    color: cores.textoEscuro,
    marginTop: 2,
  },
});
