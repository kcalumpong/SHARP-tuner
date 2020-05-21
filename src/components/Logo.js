import React from 'react';
import { StyleSheet, Image  } from 'react-native';
import logo from '../../assets/logo.png';


const Logo = () => {
    return (
        <Image source={logo} style={styles.logo} />
    )
}

const styles = StyleSheet.create({
logo: {
    alignSelf: 'center',
    width: 225, 
    height: 225, 
    paddingTop: 35, 
    justifyContent: "center",
    marginVertical: 15
  }
})

export default Logo;