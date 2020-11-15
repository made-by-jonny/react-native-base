import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components";
import Button from "../../../components/generics/form/button";
import { CardStyleInterpolators } from "@react-navigation/stack";
import SideScroll from "../../../components/sideScroll";
import Heading from "../../../components/heading";
import TimeCard from "../../../components/cards/timeline";
import Calender from "../../../components/calender";
const Stack = createStackNavigator();

const Header = styled.View`
  padding: 0 20px;
  flex-direction: ${(props) => props.direction || "row"};
`;

const DatePod = styled.View`
  padding: 5px 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const DatePodText = styled.Text`
  ${(props) =>
    props.active
      ? ` background-color: #303242; 
          borderRadius: 100px;
          padding: 5px;
        `
      : ``}
`;

const DatePodRegular = styled.Text``;

const ImageCard = styled.View``;

const Index = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#ebeff8",
      }}
    >
      <Header>
        <Heading style={{ marginTop: 20, marginBottom: 20 }}>November</Heading>
      </Header>
      <Calender />
      {[1, 2, 3, 4].map((item) => (
        <TimeCard />
      ))}
    </ScrollView>
  );
};

const ScheduleStack = () => (
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
    <Stack.Screen
      name="Schedule"
      component={Index}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    />
  </Stack.Navigator>
);

export default ScheduleStack;
