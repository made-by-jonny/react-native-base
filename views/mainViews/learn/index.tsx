import React from "react";
import { ScrollView, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Index = () => {
  return <View style={{ flex: 1, paddingLeft: 16, paddingRight: 16 }}></View>;
};

const LearnStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: "#46b04a",
      headerStyle: {
        backgroundColor: "#fff",
        borderBottomWidth: 0,
        elevation: 0,
      },
    }}
  >
    <Stack.Screen name="Learn" component={Index} />
  </Stack.Navigator>
);

export default LearnStack;
