import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { primary, white } from '../../utils/colors';

export default function TextButton({ children, onPress, disabled }) {
  return (
    <TouchableOpacity disabled={disabled} style={styles.button} onPress={onPress}>
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: primary,
    margin: 20,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: white,
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 20
  }
});