import {StyleSheet, View, useWindowDimensions} from 'react-native';
import React from 'react';

import Playlist from './tabs/Playlist';
import Album from './tabs/Album';

import constant from '../utils/Constant';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

export default function LibraryTabs() {
  const {heightDevice, heightBottomTab, heightStatusBar} = constant();
  console.log(heightBottomTab, heightStatusBar);
  return (
    <View
      style={[
        style.container,
        {
          minHeight: heightDevice - heightBottomTab - heightStatusBar,
        },
      ]}
    >
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#0f0f0f',
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          tabBarActiveTintColor: '#fff',
          tabBarPressOpacity: true,
        }}
      >
        <Tab.Screen name='Playlist' component={Playlist} />
        <Tab.Screen name='Album' component={Album} />
      </Tab.Navigator>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
