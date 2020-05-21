import React from 'react';
import { Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';
import Violin from '../../assets/violin-logo.png';
import Viola from '../../assets/viola-logo.png';
import Cello from '../../assets/cello-logo.png';
import Bass from '../../assets/bass-logo.png';

const HomeScreen = ({ navigation }) => {

  return < View style={styles.container}>
    <Logo />

    <View style={styles.textView}>
      <Text style={styles.text} >SELECT YOUR INSTRUMENT TO BEGIN</Text>
    </View>

    <View style={styles.instrumentView}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Violin')}>
          <Image style={styles.instrument} source={Violin} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Viola')}>
          <Image style={styles.instrument} source={Viola} />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Cello')}>
          <Image style={styles.instrument} source={Cello} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Bass')}>
          <Image style={styles.instrument} source={Bass} />
        </TouchableOpacity>
      </View>
    </View>

  </View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFF98',
  },
  textView: {
    padding: 15,
    backgroundColor: 'rgb(254, 255, 182)',
  },
  text: {
    fontFamily: "AvenirNext-Regular",
    alignSelf: "center",
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
    alignItems: "center",
  },
  instrument: {
    width: 145,
    height: 145,
    padding: 30
  },
  instrumentView: {
    marginTop: 60
  }
});

export default HomeScreen;







