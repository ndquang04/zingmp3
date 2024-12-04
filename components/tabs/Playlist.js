import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const data = [
  {
    id: 1,
    name: 'Quang',
    author: 'Duy Quang',
    image: '',
  },
];

export default function Playlist() {
  return (
    <View style={style.container}>
      <Text>Playlist</Text>
      <Text>Playlist</Text>
      <Text>Playlist</Text>
      <Text>Playlist</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {},
});
