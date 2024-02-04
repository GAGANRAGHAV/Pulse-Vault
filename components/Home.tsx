import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput, Switch, Alert, BackHandler, SafeAreaView, ScrollView, FlatList } from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';








export default function Home(props){
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:30}}>home Screen</Text>
        <Text style={{fontSize:10}}>Name:{props.route.params.name}</Text>
        <Text style={{fontSize:10}}>Name:{props.route.params.age}</Text>


      </View>
    )
  }