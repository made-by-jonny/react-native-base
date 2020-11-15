import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components";
import Button from "../../../components/generics/form/button";
import Heading from "../../../components/heading";
import ContentCard from "../../../components/cards/content";
import WorkoutCard from "../../../components/cards/workout";
import SideScroll from "../../../components/sideScroll";
import SubHeading from "../../../components/heading/subHeading";
import SecondaryHeading from "../../../components/heading/secondaryHeading";
const Stack = createStackNavigator();

const Header = styled.View`
  padding: 0 30px;
  justify-content: center;
  flex-direction: ${(props) => props.direction || "row"};
`;

const Index = (props) => {
  const { navigation } = props;
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#ebeff8",
      }}
    >
      <Header direction="column" style={{ marginBottom: 30 }}>
        <Heading>Welcome, Jonny</Heading>
        <SubHeading>Thurdsay, 12th Nov</SubHeading>
      </Header>
      <Header direction="column" style={{ marginBottom: 20 }}>
        <SecondaryHeading>Today's Workout</SecondaryHeading>
      </Header>
      <WorkoutCard />
      <Header direction="column" style={{ marginBottom: 10 }}>
        <SecondaryHeading>Latest Videos</SecondaryHeading>
      </Header>
      <SideScroll>
        {[1, 2, 3, 4].map((item) => (
          <ContentCard onPress={() => navigation.navigate("ContentView")} />
        ))}
      </SideScroll>
      <Header direction="column" style={{ marginBottom: 20 }}>
        <SecondaryHeading>Latest Recipes</SecondaryHeading>
      </Header>
      <SideScroll>
        {[1, 2, 3, 4].map((item) => (
          <ContentCard onPress={() => navigation.navigate("ContentView")} />
        ))}
      </SideScroll>
    </ScrollView>
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
    <Stack.Screen name="Home" component={Index} />
  </Stack.Navigator>
);

export default ProfileStack;
