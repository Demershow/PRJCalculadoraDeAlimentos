import { React, useState } from 'react';
import { StyleSheet, Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import CalculaRefri from './components/CalculoRefrigerante';
import CalculaAgua from './components/CalculoAgua';
import CalculaBolo from './components/CalculoBolo';
import CalculaDoces from './components/CalculoDoce';
import CalculaSalgados from './components/CalculoSalgado';


export default function App() {
  const[qtConvidados, setQtConvidados] = useState();
  function mostraTudo() {
    return(
      <View style={styles.containerresultados}>
          <CalculaRefri qtConvidados={qtConvidados}/>
          <CalculaAgua qtConvidados={qtConvidados}/>
          <CalculaBolo qtConvidados={qtConvidados}/>
          <CalculaDoces qtConvidados={qtConvidados}/>
          <CalculaSalgados qtConvidados={qtConvidados}/>
        </View>   
    );
        
  }
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>DMR</Text>
      <br></br>
      <Text style={styles.titulo}>Calculalimentos</Text>
      <Text style={styles.textos}>Insira o número de convidados que estarão presentes na festa no campo abaixo:</Text>

      <Button
        onPress={mostraTudo()}
        style={styles.textos}
        title="Calcular"
        color="#841584"
        >
      </Button>
      
      <br></br>
      <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={qtConvidados}
            onChangeText={(texto)=>setQtConvidados(texto)}
          />
  


        
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center'
  },
  nome:{
    fontSize: 30,
    color: '#000',
    backgroundColor:'#F59995',
    width: '100%',
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    fontFamily: 'fantasy',
    marginBottom: 20
  },
  titulo:{
    fontSize: 35,
    color: '#000',
    backgroundColor:'#fff',
    width: '100%',
    textAlign: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 20,
    fontFamily: 'fantasy'
  },
  textos:{
    fontSize: 25,
    margin: 20,
    fontFamily: 'fantasy'
  },
  input:{
    borderColor:'#EB4A42',
    borderRadius: 30,
    borderWidth:2,
    fontSize:30,
    width:'80%'
  },
  containerresultados:{
    color: '#EB4A42',
    backgroundColor: '#EB4A42',
    margin: 20,
    borderRadius: 30,
  }
});