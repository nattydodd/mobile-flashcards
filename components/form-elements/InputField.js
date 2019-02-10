import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import { white } from '../../utils/colors';

export default function InputField(props) {
  const { label } = props;
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    height: 55,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    backgroundColor: white,
    minWidth: '100%'
  },
  container: {
    margin: 20,
  },
  label: {
    paddingBottom: 10
  }
});


