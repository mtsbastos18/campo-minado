/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import params from './src/params'
import Field from './src/components/Field'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o mines</Text>
        <Text>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        <Field />
        <Field opened/>
        <Field opened nearMines={2} />
        <Field opened nearMines={3} />
        <Field opened nearMines={1} />
        <Field mined />
        <Field mined opened exploded/>
        <Field flagged/>
      </View>
    );
  }  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FEFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center'
  }
})