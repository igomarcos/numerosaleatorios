import React, {useState} from 'react';

import {

    Text, 
    View,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Image,
    Linking,

} from 'react-native';

const Urlgithub = 'https://github.com/igomarcos';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/78884474?s=100&v=4';
const colorFontdarkGit = '#4F565E';

const App = () => {

    const [numero, setNumero] = useState(1000)

    function handleNumero(){

        const novo_numero = Math.floor(Math.random()*1000)

        setNumero(novo_numero)

    }

    const handlePressGotoGithub = async ()=>{
        const res = await Linking.canOpenURL(Urlgithub);
           if (res) {
                await Linking.openURL(Urlgithub);
           };
        };
    

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.salve}>salve, salve!</Text>

      <Text style={styles.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={styles.buttom}>
            <Text style={styles.buttomText}>
                GERAR NÚMERO
            </Text>
      </TouchableOpacity>
       
        <View style={styles.foto}>
          <Image
            source={{uri: imageProfileGithub}}
            accessibilityLabel="foto igo" 
            style={styles.avatar} 
          />

          <TouchableOpacity onPress={ handlePressGotoGithub } style={styles.buttomNovo}>
            
                <Text style = {styles.textButtom} >
                    My Github
                </Text>
          </TouchableOpacity>
        </View>
        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor:'#C7D4EF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    numero:{
        fontSize:60,
        color: '#ED8202',
        fontWeight: 'bold',
        paddingBottom: 20,
    },

    salve: {
        fontSize:20,
        fontWeight: 'bold',
        paddingBottom: 30,
    },
    buttom:{
        backgroundColor: '#505661',
        width: '50%',
        paddingHorizontal: 5,
        paddingVertical:15,
        borderRadius: 50,
        justifyContent:'center',
        alignItems:'center',
    },

    buttomText:{
        color: 'white',
        fontWeight: 'bold',
    },

    avatar:{
        height: 75,
        width: 75,
       borderRadius: 75,
       borderColor: 'white',
       borderWidth: 3,
    },
    
    buttomNovo : {
 
      marginTop: 10,
      backgroundColor: colorFontdarkGit,
      borderRadius: 100,
      padding: 5,
      
    },
            
    textButtom : {
      fontWeight: 'bold',
      fontSize: 24,
      color: 'white',
      padding: 5,
    },

    foto: {
        width: '100%',
        marginTop: 35,
        flexDirection: 'column',
        alignItems:'center',
    },
    

});

export default App;
