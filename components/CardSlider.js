import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  {
    id: 1,
    title: 'Yêu thích',
    iconName: 'cards-heart-outline',
    color: '#03d6f5',
    count: 45,
  },
  {
    id: 2,
    title: 'Đã tải',
    color: '#9654fb',
    iconName: 'download-circle-outline',
    count: 155,
  },
  {
    id: 3,
    title: 'Upload',
    color: '#f0c02e',
    iconName: 'cloud-upload-outline',
    count: 0,
  },
  {
    id: 4,
    title: 'MV',
    iconName: 'youtube',
    color: '#9654fb',
    count: 0,
  },
  {
    id: 5,
    title: 'Nghệ sĩ',
    color: '#da6e08',
    iconName: 'account-music-outline',
    count: 7,
  },
];

export default function CardSlider() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.card}>
            <MaterialCommunityIcons
              name={item.iconName}
              size={30}
              color={item.color}
            />
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>{item.count > 0 && item.count}</Text>
          </View>
        )}
        horizontal
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 110,
    flexDirection: 'row',
    marginHorizontal: 8,
  },
  card: {
    minWidth: 90,
    borderWidth: 1,
    borderColor: '#3b3b3b',
    borderRadius: 10,
    backgroundColor: '#242424',
    padding: 16,
    marginHorizontal: 8,
  },
  text: {
    color: '#fff',
    marginTop: 5,
  },
});
