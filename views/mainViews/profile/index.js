import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./profileView";

const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleStyle: { alignSelf: "center" },
      headerTintColor: "#bfc9d7",
      headerStyle: {
        backgroundColor: "#ebeff8",
        borderBottomWidth: 0,
        elevation: 0,
      },
    }}
  >
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
);

export default ProfileStack;
