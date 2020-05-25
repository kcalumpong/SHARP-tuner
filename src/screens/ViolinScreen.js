import React, { useState } from 'react';
import { StyleSheet, Image, Switch, View, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';
import ViolinG from '../../assets/violinG.png';
import ViolinD from '../../assets/violinD.png';
import ViolinA from '../../assets/violinA.png';
import ViolinE from '../../assets/violinE.png';
import Violin from '../../assets/violin-logo.png';
import Back from '../../assets/backButton.png';
import { Audio } from 'expo-av';



const ViolinScreen = ({ navigation }) => { 
  
  
  const [EString, setEString] = useState(false);
  console.log(EString)

  toggleSwitch = () => setEString(previousState => !previousState); {
   if (EString) {
     playMusic()
   }if (!EString) {
     stopMusic()
   }
 }


async function playMusic() {
  const soundObject = new Audio.Sound();
  console.log("Being hit")

  try {
    await soundObject.loadAsync(require('../../assets/violin/E-0.mp3'));
    await soundObject.playAsync();
  } catch (error) {
    alert("Error" + error.message)
  }
}

async function stopMusic() {
   console.log("Not Being hit")
  const soundObject = new Audio.Sound();

  try {
    await soundObject.loadAsync(require('../../assets/violin/E-0.mp3'));
    await soundObject.stopAsync();
  } catch (error) {
    alert("Error" + error.message)
  }
}

  return <View style={styles.container}>

    <Logo />

    <View style={styles.back}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>

        <Image style={styles.backIcon} source={Back} />
      </TouchableOpacity>
    </View>

    <View style={styles.containerTwo}>
      <View style={styles.rowOne}>

        <TouchableOpacity
          onPress={ toggleSwitch } 
        >
        <Image style={styles.stringButtons} source={ViolinG} />  
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert("Hey")}>
          <Image style={styles.stringButtons} source={ViolinD} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert("Hey")}>
          <Image style={styles.stringButtons} source={ViolinA} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert("Hey")}>
          <Image style={styles.stringButtons} source={ViolinE} />
        </TouchableOpacity>
      </View>

      <View style={styles.rowTwo}>
        <Image style={styles.instrument} source={Violin} />
      </View>

    </View>
  </View>
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDFF98',
    flex: 1,
  },
  containerTwo: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    backgroundColor: '#FDFF98',
  },
  rowOne: {
    flexDirection: "column",
    flex: 1
  },
  rowTwo: {
    flexDirection: "column",
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 70
  },
  back: {
    padding: 6,
    backgroundColor: 'rgb(254, 255, 182)',
  },
  backIcon: {
    width: 25,
    height: 25,
    marginLeft: 15
  },
  stringButtons: {
    width: 80,
    height: 80,
    marginTop: 35,
    marginLeft: 25
  },
  colorButton: {
    width: 500
  },
  instrument: {
    width: 225,
    height: 225,
  }
});

export default ViolinScreen;

