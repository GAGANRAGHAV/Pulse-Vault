import { useState } from "react";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
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
import { TextInput } from "react-native-paper";

export default function Login(props) {
  const [name, setName] = useState("");
  const age = 29;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Login Screen</Text>
      <Avatar.Image size={48} source={require("../assets/avatar.jpg")} />

      <TextInput
        onChangeText={(text) => setName(text)}
        label="type name"
      />
      <Button
        title="navigate"
        onPress={() => props.navigation.navigate("Home", { name, age })}
      ></Button>
    </View>
  );
}
