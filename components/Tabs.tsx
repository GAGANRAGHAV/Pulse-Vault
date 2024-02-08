import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Login from "./Login";
import Preview from "./Preview";
import Home from "./Home";

const Tab = createMaterialBottomTabNavigator();

export default function Tabs(Props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#808080"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Preview" component={Preview} />
    </Tab.Navigator>
  );
}