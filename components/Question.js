import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextButton from './form-elements/TextButton';
import InputField from './form-elements/InputField';
import { secondary } from '../utils/colors';

export default function Question({ updateAnswer, inputValue, onSubmit, question }) {
  return (
    <View style={styles.cardWrapper}>
      <Text style={styles.title}>
        Question:
      </Text>
      <Text style={[styles.question, { paddingBottom: 30 }]}>
        {question}
      </Text>
      <Text style={styles.title}>Your Answer:</Text>
      <InputField
        onChangeText={updateAnswer}
        value={inputValue}
      />
      <TextButton
        onPress={onSubmit}
      >
        Submit
      </TextButton>
    </View>
  )
}


const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: secondary,
    borderRadius: 10,
    minHeight: 400,
    minWidth: '80%',
    maxWidth: '80%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  question: {
    fontSize: 18,
    textAlign: 'center',
    paddingBottom: 30
  },
  title: {
    fontSize: 24
  }
});

