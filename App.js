import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./state/store";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "styled-components";
import * as theme from "./theme";
import AppView from "./views/appView";
import AuthView from "./views/authView";
import ForgotPassEmailView from "./views/authView/forgotPassView";
import ForgotPassCodeView from "./views/authView/forgotPassCodeView";
import ForgotPassPassword from "./views/authView/forgotPassPassword";

const Stack = createStackNavigator();

const App = () => {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setAuth(false);
      } catch (e) {
        setAuth(false);
      }
    })();
  }, []);

  if (isAuth === "loading") {
    return (
      <View style={{ flex: 1 }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            headerMode="none"
            initialRouteName={isAuth === true ? "AppView" : "AuthView"}
          >
            <Stack.Screen name="AppView" component={AppView} />
            <Stack.Screen name="AuthView" component={AuthView} />
            <Stack.Screen
              name="ResetPassword"
              component={ForgotPassEmailView}
            />
            <Stack.Screen name="Enter Code" component={ForgotPassCodeView} />
            <Stack.Screen
              name="Enter Password"
              component={ForgotPassPassword}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
