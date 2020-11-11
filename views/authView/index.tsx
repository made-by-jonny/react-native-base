import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../loginView";
import Register from "../registerView";

const AuthStack = createStackNavigator();

const AuthView = () => {
  return (
    <AuthStack.Navigator
      headerMode="none"
      screenOptions={{ animationEnabled: false }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthView;
