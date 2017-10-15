import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

// Formatações
const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },

  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }

};


const gerarNovaFrase = () => {

  var numeroAleatorio = Math.floor(Math.random() * 5);

  //frases
  var frases = Array();
  frases[0] = 'Tire o dia para sorrir.';
  frases[1] = 'As noites mais escuras produzem as estrelas mais brilhantes.';
  frases[2] = 'Colecione momentos, não coisas.';
  frases[3] = 'Comece onde você está, use o que você tem e faça o que você pode.';
  frases[4] = 'A vida é como andar de bicicleta. Para ter equilíbrio você tem que se manter em movimento.';

  var fraseEscolhida = frases[numeroAleatorio];

  Alert.alert(fraseEscolhida);
}

 const { principal, botao, textoBotao } = Estilos; // Destructuring Assignment

 class App extends Component {

  render() {
    return (
      <View style={principal}>
        <Image source={ {uri:'https://vignette1.wikia.nocookie.net/crusades/images/3/30/Question.png/revision/latest?cb=20080104180240'} } style={{width:100, height: 100}} />
        <TouchableOpacity
          onPress={gerarNovaFrase}
          style={botao}>
          <Text style={textoBotao}>Nova Frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App

// flex: Preenche todo o espaço do componente se for ele o principal
// margin: 30,
// color: '#FFF',
// fontWeight: '500',
// textAlign: 'center'
// textDecorationLine: 'underline'
// justifyContent: Alinha na vertical
// alignItems: Alinha na horizontal
// flexDirection: Direção da imagem no componente Pai
// TouchableOpacity: Coloca opacidade o no View ou nos componentes

// <Image source={ require('./images/rafael.jpg') } />
// onPress ao clicar no botao fazer uma acao
// Alert para não aparecer o alert normal

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
