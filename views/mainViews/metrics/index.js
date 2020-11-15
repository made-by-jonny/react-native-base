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
import Button from "../../../components/generics/form/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Form from "../../../components/generics/form";
import Input from "../../../components/generics/form/inputs";
import { FontAwesome } from "@expo/vector-icons";

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

const Heading = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: #303242;
`;

const SubHeading = styled.Text`
  font-size: 20px;
  color: #a1aab7;
`;
const SecondaryHeading = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #5c7778;
`;

const PrimaryCard = styled.View`
  margin: 10px;
  background: #b7dcdd;
  border-radius: 15px;
`;

const Header = styled.View`
  padding: 0 30px;
  justify-content: center;
  flex-direction: ${(props) => props.direction || "row"};
`;
const Footer = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const Details = styled.View`
  padding: 0 10px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const DetailsText = styled.Text`
  font-weight: bold;
  font-size: ${(props) => props.size || "14px"};
  color: #303242;
`;

const Panel = styled.View`
  padding: 10px;
  margin: 20px;
  border-radius: 15px;
  background: #fff;
  margin-bottom: 10px;
`;

const ListItem = styled.View`
  flex-direction: row;
  padding: 20px 0;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #f1f1f1;
`;

const ImageCard = styled.View``;

const Index = () => {
  return (
    <View style={{ backgroundColor: "#ebeff8" }}>
      <ScrollView>
        <Heading style={{ marginLeft: 30 }}>Weights</Heading>
        <Panel>
          {weights.map((item) => (
            <ListItem>
              <Text
                style={{
                  flex: 1,
                  color: "#a1aab7",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {item.name}
              </Text>
              <FontAwesome
                style={{
                  marginLeft: 3,
                }}
                name="chevron-right"
                size={20}
                color="#CECDCE"
              />
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
  </Stack.Navigator>
);

export default ProfileStack;
