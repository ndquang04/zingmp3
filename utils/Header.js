import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Header({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.search}>
        <Text style={styles.title}>1</Text>
        <Text style={styles.title}>2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
  },
  search: {
    flexDirection: 'row',
  },
});
