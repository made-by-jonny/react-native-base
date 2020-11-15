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
import Heading from "../../../components/heading";
import Panel from "../../../components/panel";
import ListItem from "../../../components/listItem";

import Breakdown from "./metricPage";
const Stack = createStackNavigator();

const weights = [
  { name: "deadlift" },
  { name: "bench press" },
  { name: "military press" },
  { name: "back squat" },
  { name: "front squat" },
  { name: "overhead squat" },
  { name: "snatch" },
  { name: "clean" },
  { name: "jerk" },
];

const Index = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#ebeff8" }}>
      <ScrollView>
        <Heading style={{ marginLeft: 30 }} size="20">
          Weights
        </Heading>
        <Panel>
          {weights.map((item) => (
            <ListItem onPress={() => navigation.push("Breakdown")}>
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
      </ScrollView>
    </View>
  );
};

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
    <Stack.Screen name="Tracking" component={Index} />
    <Stack.Screen name="Breakdown" component={Breakdown} />
  </Stack.Navigator>
);

export default ProfileStack;
