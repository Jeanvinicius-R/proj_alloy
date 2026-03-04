import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { makeStyles, darkTheme, lightTheme } from './styles';


export default function App() {
  
  const [ocorrencia, setOcorrencia] = useState('')
  const [pin, setPin] = useState('')
  const [pesoCromo, setPesoCromo] = useState('')
  const [pesoNiquel, setPesoNiquel] = useState('')
  const [pesoTotal, setPesoTotal] = useState('')

  const [isDark, setIsDark] = useState(true);
  const T = isDark ? darkTheme : lightTheme;
  const styles = makeStyles(T);

  function calculaMetais() {
    const cromo = parseFloat(pesoCromo.replace(',', '.'))
    const niquel = parseFloat(pesoNiquel.replace(',', '.'))
    var total = cromo + niquel
    setPesoTotal(total)
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: T.bg }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >

        {/* Botão de tema — canto superior direito */}
        <TouchableOpacity
          onPress={() => setIsDark(p => !p)}
          style={{
            position: 'absolute',
            top: 48,
            right: 20,
            width: 40,
            height: 40,
            borderRadius: 10,
            backgroundColor: T.card,
            borderWidth: 1,
            borderColor: T.border,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 20 }}>{isDark ? '☀️' : '🌙'}</Text>
        </TouchableOpacity>

        <Text style={styles.app_title}>TechAlloy - Controle de Produção</Text>
        <View style={styles.titleBar} />

        <Text style={styles.label}>Relatório de Ocorrências:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite a ocorrência aqui'
          placeholderTextColor={T.muted}
          value={ocorrencia}
          onChangeText={setOcorrencia}
        />

        <Text style={styles.label}>PIN de Segurança (Oculto):</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite seu PIN aqui'
          placeholderTextColor={T.muted}
          value={pin}
          onChangeText={setPin}
          secureTextEntry={true}
        />

        <Button title="ENVIA A OCORRÊNCIA!" color={T.danger} />

        <Text style={styles.label}>Carga de Cromo (kg):</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite a carga em kg aqui'
          placeholderTextColor={T.muted}
          value={pesoCromo}
          onChangeText={setPesoCromo}
          keyboardType='numeric'
        />

        <Text style={styles.label}>Carga de Níquel (kg):</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite a carga em kg aqui'
          placeholderTextColor={T.muted}
          value={pesoNiquel}
          onChangeText={setPesoNiquel}
          keyboardType='numeric'
        />

        <Button title="ENVIA O PESO DA CARGA!" onPress={calculaMetais} color={T.cyan} />

        <Text style={styles.resultado}>Peso Total da Carga: {pesoTotal}</Text>

        <StatusBar style={isDark ? 'light' : 'dark'} />

      </ScrollView>
    </KeyboardAvoidingView>
  );
}