import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  Switch,
  Alert,
  BackHandler,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import { Avatar } from "react-native-paper";
import { TextInput, Text } from "react-native-paper";

export default function Preview(props) {
  return (
    <View style={styles.box}>
      <Text variant="displaySmall">PULSEVAULT</Text>

      <View style={styles.butt}>
        <Button
          title="Continue as Patient"

          onPress={() => props.navigation.navigate("Login")}
        >

        </Button>
      </View>
      <Button title="Continue as Admin"


      
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  butt: {
    marginBottom: 10,
  },
});
