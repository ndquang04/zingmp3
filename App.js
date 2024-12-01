import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screen
import LibraryScreen from './screens/LibraryScreen';
import DiscoveryScreen from './screens/DiscoveryScreen';
import ZingChartScreen from './screens/ZingChartScreen';
import RadioScreen from './screens/RadioScreen';
import PersonalScreen from './screens/PersonalScreen';

// Icon
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
const mainColor = '#935cfc';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: {
                backgroundColor: '#0f0f0f',
                height: 60,
              },
              tabBarLabelStyle: {
                fontSize: 12,
              },
              tabBarActiveTintColor: mainColor,
              // tabBarPosition: 'left',
            }}
          >
            <Tab.Screen
              name='Thư viện'
              component={LibraryScreen}
              options={{
                headerShown: false,
                tabBarIcon: ({focus, color}) => (
                  <MaterialCommunityIcons
                    name='music-box-multiple-outline'
                    size={25}
                    color={focus ? mainColor : color}
                  />
                ),
                tabBarButton: (props) => <TouchableOpacity {...props} />,
              }}
            />
            <Tab.Screen
              name='Khám phá'
              component={DiscoveryScreen}
              options={{
                tabBarIcon: ({focus, color}) => (
                  <MaterialCommunityIcons
                    name='record-circle-outline'
                    size={25}
                    color={focus ? mainColor : color}
                  />
                ),
                tabBarButton: (props) => <TouchableOpacity {...props} />,
              }}
            />
            <Tab.Screen
              name='#zingchart'
              component={ZingChartScreen}
              options={{
                tabBarIcon: ({focus, color}) => (
                  <MaterialCommunityIcons
                    name='chart-multiline'
                    size={25}
                    color={focus ? mainColor : color}
                  />
                ),
                tabBarButton: (props) => <TouchableOpacity {...props} />,
              }}
            />
            <Tab.Screen
              name='Radio'
              component={RadioScreen}
              options={{
                tabBarIcon: ({focus, color}) => (
                  <Feather
                    name='radio'
                    size={25}
                    color={focus ? mainColor : color}
                  />
                ),
                tabBarButton: (props) => <TouchableOpacity {...props} />,
              }}
            />
            <Tab.Screen
              name='Cá nhân'
              component={PersonalScreen}
              options={{
                tabBarIcon: ({focus, color}) => (
                  <MaterialCommunityIcons
                    name='account-outline'
                    size={25}
                    color={focus ? mainColor : color}
                  />
                ),
                tabBarButton: (props) => <TouchableOpacity {...props} />,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
