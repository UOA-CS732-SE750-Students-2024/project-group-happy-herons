import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import BinScreen from './screens/BinScreen';
import ImgRecogScreen from './screens/ImgRecogScreen';
import MapScreen from './screens/MapScreen';
import EstoreScreen from './screens/EstoreScreen';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import ImgRecogIcon from './components/ImgRecogIcon';


export default function App() {

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#233B29',
        tabBarStyle: { backgroundColor: '#FBF6EE'}
      }}>
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarLabel:'Home',
            tabBarIcon: ({ color, size }) => (<Entypo name="home" size={size} color={color} />)
          }} ></Tab.Screen>
          <Tab.Screen name="RecycleMap" component={MapScreen} options={{
            tabBarLabel:'RecycleMap',
            tabBarIcon: ({ color, size }) => (<FontAwesome5 name="map-marker-alt" size={size} color={color} />),
            headerShown: false
          }}></Tab.Screen>
          
          <Tab.Screen name="Chuck it in the bin" component={ImgRecogScreen} options={{
            tabBarLabel:'',
            tabBarIcon: ({ color, size }) => (<ImgRecogIcon color='white' size={30} />)
          }}></Tab.Screen>
          <Tab.Screen name="RecyclePolicy" component={BinScreen} options={{
            tabBarLabel:'RecyclePolicy',
            tabBarIcon: ({ color, size }) => (<Entypo name="trash" size={size} color={color} />)
          }}></Tab.Screen>
          
          <Tab.Screen name="Service" component={EstoreScreen} options={{
            tabBarLabel:'Service',
            tabBarIcon: ({ color, size }) => (<FontAwesome6 name="store" size={size} color={color} />)
          }}></Tab.Screen>
      </Tab.Navigator>
      </NavigationContainer>
      );
  
}

