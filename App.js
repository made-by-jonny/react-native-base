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
import WorkoutView from "./views/mainViews/learn/workout";

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
            screenOptions={{
              headerTitleStyle: { alignSelf: "center" },
              headerTintColor: "#bfc9d7",
              headerStyle: {
                backgroundColor: "#ebeff8",
                borderBottomWidth: 0,
                elevation: 0,
              },
            }}
            initialRouteName={isAuth === true ? "AppView" : "AuthView"}
          >
            <Stack.Screen
              name="AppView"
              options={{
                headerShown: false, // change this to `false`
              }}
              component={AppView}
            />
            <Stack.Screen name="Workout" component={WorkoutView} />
            <Stack.Screen
              name="AuthView"
              options={{
                headerShown: false, // change this to `false`
              }}
              component={AuthView}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ForgotPassEmailView}
            />
            <Stack.Screen
              name="Enter Code"
              headerMode="none"
              component={ForgotPassCodeView}
            />
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
