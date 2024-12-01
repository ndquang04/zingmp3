import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from 'react-native';
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
];

export default function Banner() {
  const width = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={{...styles.card, width: width - 32}}>
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
        pagingEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    marginBottom: 20,
    marginHorizontal: 8,
  },
  card: {
    borderWidth: 1,
    borderColor: '#3b3b3b',
    borderRadius: 10,
    backgroundColor: '#242424',
    paddingHorizontal: 16,
    marginHorizontal: 8,
  },
  text: {
    color: '#fff',
    marginTop: 5,
  },
});
