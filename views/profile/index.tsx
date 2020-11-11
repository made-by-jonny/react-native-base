import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./profileView";
import ChangeName from "./editNameView";
import changeAddress from "./editAddressView";

const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#333366",
        borderBottomWidth: 0,
        elevation: 0,
      },
    }}
  >
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Change Name" component={ChangeName} />
    <Stack.Screen name="Change Address" component={changeAddress} />
  </Stack.Navigator>
);

export default ProfileStack;
