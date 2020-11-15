import React from "react";
import {
  ScrollView,
  Dimensions,
  FlatList,
  View,
  Text,
  Image,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components";
import Input from "../../../../components/generics/form/inputs";
import { FontAwesome } from "@expo/vector-icons";
import Panel from "../../../../components/panel";
import ListItem from "../../../../components/listItem";
import SubHeading from "../../../../components/heading/subHeading";
const Stack = createStackNavigator();

const options = [
  { name: "Payment Methods" },
  { name: "Subscriptions" },
  { name: "Settings" },
];

const Index = (props) => {
  const { navigation } = props;
  return (
    <View style={{ backgroundColor: "#ebeff8" }}>
      <ScrollView>
        <Panel>
          {options.map((item) => (
            <ListItem onPress={() => navigation.navigate("ProfileEditView")}>
              <Text
                style={{
                  flex: 1,
                  color: "#454758",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                {item.name}
              </Text>
            </ListItem>
          ))}
        </Panel>
        <Panel>
          <ListItem onPress={() => navigation.navigate("AuthView")}>
            <Text
              style={{
                flex: 1,
                color: "#454758",
                textTransform: "capitalize",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Logout
            </Text>
          </ListItem>
        </Panel>
      </ScrollView>
    </View>
  );
};

const ProfileStack = () => (
  <Stack.Navigator
    headerMode="none"
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
    <Stack.Screen name="Tracking" component={Index} />
  </Stack.Navigator>
);

export default ProfileStack;
