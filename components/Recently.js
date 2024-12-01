import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  {
    id: 1,
    title: 'V-Pop Tháng 11/2024',
    image: require('../assets/recently/r1.jpg'),
    isCircle: false,
    isViewAll: false,
  },
  {
    id: 2,
    title: 'Mất kết nối',
    image: require('../assets/recently/r2.jpg'),
    isCircle: false,
    isViewAll: false,
  },
  {
    id: 3,
    title: 'Những bài hát hay nhất của Thanh Hưng',
    image: require('../assets/recently/r3.jpg'),
    isCircle: false,
    isViewAll: false,
  },
  {
    id: 4,
    title: 'Hão huyền',
    image: require('../assets/recently/r4.jpg'),
    isCircle: false,
    isViewAll: false,
  },
  {
    id: 5,
    title: 'Thanh Hưng',
    image: require('../assets/recently/r5.jpg'),
    isCircle: true,
    isViewAll: false,
  },
  {
    id: 6,
    title: 'Xem tất cả',
    image: null,
    isCircle: false,
    isViewAll: true,
  },
];

export default function Recently() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Nghe gần đây</Text>
          <AntDesign name='right' size={20} color='#fff' />
        </View>
      </TouchableOpacity>
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={item.isViewAll ? styles.cardViewAll : styles.card}>
                {!item.isCircle && !item.isViewAll && (
                  <MaterialCommunityIcons
                    name='play-circle'
                    size={30}
                    color='#fff'
                    style={styles.icon}
                  />
                )}
                {item.image && (
                  <Image
                    source={item.image}
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: item.isCircle ? 45 : 5,
                    }}
                  />
                )}
                {item.isViewAll && (
                  <View style={styles.isViewAll}>
                    <AntDesign name='arrowright' size={26} color='#fff' />
                  </View>
                )}

                <Text
                  style={item.isCircle ? styles.isCircle : styles.text}
                  numberOfLines={2}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={({id}) => id}
          horizontal
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginTop: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 8,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 600,
    marginRight: 5,
  },
  list: {
    marginTop: 5,
    flexDirection: 'row',
  },
  card: {
    width: 90,
    borderRadius: 5,
    marginHorizontal: 8,
    position: 'relative',
  },
  cardViewAll: {
    width: 90,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  isViewAll: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#242424',
  },
  icon: {
    position: 'absolute',
    zIndex: 2,
    top: 50,
    right: 5,
  },
  text: {
    color: '#fff',
    marginTop: 5,
  },
  isCircle: {
    color: '#fff',
    marginTop: 5,
    alignSelf: 'center',
  },
});
