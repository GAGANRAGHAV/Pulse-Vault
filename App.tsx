import { useState } from 'react';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput, Switch, Alert, BackHandler, SafeAreaView, ScrollView, FlatList } from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/Login';

const Stack = createNativeStackNavigator();

export default function App() {


  const [name,setName] = useState("gagan")
  return (

    <NavigationContainer>

      <Stack.Navigator>
      <Stack.Screen name='Login' component={Login}/>

        <Stack.Screen name='Home' component={Home}/>

      </Stack.Navigator>
    </NavigationContainer>

  
  );
}





