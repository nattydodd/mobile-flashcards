import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { highlight } from '../utils/colors';

export default function Answer({ onPress, answer, userAnswer }) {
  return (
    <View style={styles.cardWrapper}>
      <Text style={styles.title}>Correct Answer:</Text>
      <Text style={styles.answer}>{answer}</Text>
      <Text style={[styles.title, { paddingBottom: 30 }]}>Your Answer:</Text>
      <Text style={styles.answer}>{userAnswer}</Text>
      <Text style={styles.title}>Where you Correct?</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableHighlight
          onPress={() => onPress(0)}
          style={{padding: 20}}
        >
          <FontAwesome
            name="times"
            size={25}
            color='red'
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => onPress(1)}
          style={{padding: 20}}
        >
          <FontAwesome
            name="check"
            size={25}
            color='green'
          />
        </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: highlight,
    borderRadius: 10,
    minHeight: 400,
    minWidth: '80%',
    maxWidth: '80%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  answer: {
    fontSize: 18,
    textAlign: 'center',
    paddingBottom: 30
  },
  title: {
    fontSize: 24
  }
});
