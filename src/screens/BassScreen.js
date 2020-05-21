import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';
import BassE from '../../assets/bassE.png';
import BassG from '../../assets/bassG.png';
import BassD from '../../assets/bassD.png';
import BassA from '../../assets/bassA.png';
import Bass from '../../assets/bass-logo.png';
import Back from '../../assets/backButton.png';

const BassScreen = ({ navigation }) => {
  return <View style={styles.container}>

    <Logo />

    <View style={styles.back}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image style={styles.backIcon} source={Back} />
      </TouchableOpacity>
    </View>

    <View style={styles.containerTwo}>
      <View style={styles.rowOne}>
        <TouchableOpacity onPress={() => alert("Hey")}>
          <Image style={styles.stringButtons} source={BassG} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert("Hey")}>
          <Image style={styles.stringButtons} source={BassD} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert("Hey")}>
          <Image style={styles.stringButtons} source={BassA} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert("Hey")}>
          <Image style={styles.stringButtons} source={BassE} />
        </TouchableOpacity>
      </View>

      <View style={styles.rowTwo}>
        <Image style={styles.instrument} source={Bass} />
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
  instrument: {
    width: 225,
    height: 225,
  },

});

export default BassScreen;