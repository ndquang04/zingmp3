import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CreatePlaylistModal from '../../modals/CreatePlaylistModal';

const data = [
  {
    id: 1,
    name: 'Quang',
    author: 'Duy Quang',
    image: '',
  },
  {
    id: 2,
    name: 'Trào Lưu Nhạc Hot',
    author: 'Zing MP3',
    image: '',
  },
  {
    id: 3,
    name: 'EDM Drive',
    author: 'Zing MP3',
    image: '',
  },
  {
    id: 4,
    name: 'Quang',
    author: 'Duy Quang',
    image: '',
  },
  {
    id: 5,
    name: 'Trào Lưu Nhạc Hot',
    author: 'Zing MP3',
    image: '',
  },
  {
    id: 6,
    name: 'EDM Drive',
    author: 'Zing MP3',
    image: '',
  },
  {
    id: 7,
    name: 'Trào Lưu Nhạc Hot',
    author: 'Zing MP3',
    image: '',
  },
  {
    id: 8,
    name: 'EDM Drive',
    author: 'Zing MP3',
    image: '',
  },
  {
    id: 9,
    name: 'Trào Lưu Nhạc Hot',
    author: 'Zing MP3',
    image: '',
  },
  {
    id: 10,
    name: 'EDM Drive',
    author: 'Zing MP3',
    image: '',
  },
];

export default function Playlist() {
  const [visibleModal, setVisibleModal] = useState(false);
  const handleCloseModal = () => {
    setVisibleModal(false);
  };
  return (
    <View style={style.container}>
      <ScrollView stickyHeaderIndices={[0]}>
        <TouchableOpacity onPress={() => setVisibleModal(true)}>
          <View style={style.createPlaylistContent}>
            <View style={style.createPlaylist}>
              <Text style={style.plus}>+</Text>
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={style.cartName}>Tạo playlist</Text>
            </View>
          </View>
        </TouchableOpacity>
        {data.map((item) => (
          <TouchableOpacity key={item.id}>
            <View style={style.cardContent}>
              <Image
                source={require('../../assets/recently/r2.jpg')}
                style={{width: 70, height: 70, borderRadius: 5}}
              />
              <View style={{marginLeft: 10}}>
                <Text style={style.cartName}>{item.name}</Text>
                <Text style={style.cartAuthor}>{item.author}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <CreatePlaylistModal
        visible={visibleModal}
        onCloseModal={handleCloseModal}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    paddingHorizontal: 16,
  },
  createPlaylistContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    // backgroundColor: '#242424',
    borderRadius: 5,
  },
  createPlaylist: {
    width: 70,
    height: 70,
    backgroundColor: '#242424',
    borderRadius: 5,
  },
  plus: {
    color: 'gray',
    fontSize: 50,
    fontWeight: '200',
    flex: 1,
    textAlign: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    // backgroundColor: '#242424',
    borderRadius: 5,
  },
  cartName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
  cartAuthor: {
    color: 'gray',
  },
});
