import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { primary } from '../../utils/colors';

export default function CenteredTitle({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  title: {
    color: primary,
    margin: 20,
    padding: 20,
    textAlign: 'center',
    fontSize: 30
  },
  container: {
    alignItems: 'center'
  }
});