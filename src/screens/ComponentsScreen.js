import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {

    const greeting = 'Kristina'

    return <View>
    < Text style={styles.textStyle}>Getting started with React</Text>
    < Text style={styles.text}>My name is {greeting}</Text>
    </View>
};

const styles = StyleSheet.create ({
    textStyle : {
        fontSize: 45
    },
    text : {
        fontSize: 20
    }
});

export default ComponentScreen;