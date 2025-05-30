import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CreatePlaylistModal({visible, onCloseModal}) {
  const handleCloseModal = () => {
    console.log('close');
    onCloseModal();
  };
  return (
    <Modal
      visible={visible}
      animationType='slide'
      onRequestClose={handleCloseModal}
    >
      <View style={style.container}>
        <TouchableOpacity onPress={handleCloseModal}>
          <Text style={style.closeIcon}>X</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    padding: 16,
  },
  closeIcon: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '300',
  },
});
