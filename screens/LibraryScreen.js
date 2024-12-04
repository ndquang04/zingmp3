import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import CardSlider from '../components/CardSlider';
import Banner from '../components/Banner';
import Header from '../utils/Header';
import Recently from '../components/Recently';
import LibraryTabs from '../components/LibraryTabs';

export default function LibraryScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header title='Thư viện' />
      <Banner />
      <CardSlider />
      <Recently />
      <LibraryTabs />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
});
