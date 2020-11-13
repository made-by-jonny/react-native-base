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

const Stack = createStackNavigator();

const Heading = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: #5c7778;
`;

const SubHeading = styled.Text`
  font-size: 20px;
  color: #a6a8a3;
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
  padding: 20px 20px 0;
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
  flex: 1;
  padding: 10px 20px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const Pill = styled.View`
  padding: 5px 10px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  background: #fff;
  margin-bottom: 10px;
`;

const ImageCard = styled.View``;

const Index = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Heading style={{ textAlign: "center" }}>Browse</Heading>
        <Form hideSubmit={true}>
          <Input
            hideLabel={true}
            placeholder="search content..."
            label="search"
            name="search"
          />
        </Form>
        <SecondaryHeading style={{ marginLeft: 20 }}>
          Latest Videos
        </SecondaryHeading>
        <ScrollView style={{ marginLeft: 20 }} horizontal={true}>
          {[...new Array(24)].map((item) => (
            <ImageCard
              style={{ flex: 1, width: 200, padding: 10, minWidth: 150 }}
            >
              <Image
                style={{
                  borderRadius: 10,
                  flex: 1,
                  maxWidth: 180,
                  height: 100,
                }}
                resizeMode="cover"
                source={require("../../../assets/tempImage.jpg")}
              />
              <Details>
                <Text>Hello</Text>
              </Details>
            </ImageCard>
          ))}
        </ScrollView>
        <SecondaryHeading style={{ marginLeft: 20 }}>
          Latest Recipes
        </SecondaryHeading>
        <ScrollView style={{ marginLeft: 20 }} horizontal={true}>
          {[...new Array(24)].map((item) => (
            <ImageCard
              style={{ flex: 1, width: 200, padding: 10, minWidth: 150 }}
            >
              <Image
                style={{
                  borderRadius: 10,
                  flex: 1,
                  maxWidth: 180,
                  height: 100,
                }}
                resizeMode="cover"
                source={require("../../../assets/tempImage.jpg")}
              />
              <Details>
                <Text>Hello</Text>
              </Details>
            </ImageCard>
          ))}
        </ScrollView>
        <SecondaryHeading style={{ marginLeft: 20 }}>
          Latest Articles
        </SecondaryHeading>
        <ScrollView style={{ marginLeft: 20 }} horizontal={true}>
          {[...new Array(24)].map((item) => (
            <ImageCard
              style={{ flex: 1, width: 200, padding: 10, minWidth: 150 }}
            >
              <Image
                style={{
                  borderRadius: 10,
                  flex: 1,
                  maxWidth: 180,
                  height: 100,
                }}
                resizeMode="cover"
                source={require("../../../assets/tempImage.jpg")}
              />
              <Details>
                <Text>Hello</Text>
              </Details>
            </ImageCard>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const Index2 = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Heading style={{ textAlign: "center" }}>Browse</Heading>
        <Form hideSubmit={true}>
          <Input
            hideLabel={true}
            placeholder="search content..."
            label="search"
            name="search"
          />
        </Form>
        {[...new Array(24)].map((item) => (
          <ImageCard
            style={{
              flexDirection: "row",
              flex: 1,
              padding: 10,
              minWidth: 150,
            }}
          >
            <Image
              style={{
                borderRadius: 10,
                flex: 1,
                maxWidth: 180,
                height: 100,
              }}
              resizeMode="cover"
              source={require("../../../assets/tempImage.jpg")}
            />
            <Details>
              <Text>Hello</Text>
            </Details>
          </ImageCard>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      headerTitle="Learn"
      swipeEnabled={false}
      tabBarOptions={{
        scrollEnabled: true,
        activeTintColor: "#5c7778",
        indicatorStyle: {
          backgroundColor: "transparent",
        },
        labelStyle: {
          fontWeight: "bold",
          fontSize: 24,
        },
        style: {
          backgroundColor: "transprent",
        },
      }}
    >
      <Tab.Screen name="Recent" component={Index} />
      <Tab.Screen name="Videos" component={Index2} />
      <Tab.Screen name="Recipes" component={Index2} />
      <Tab.Screen name="Articles" component={Index2} />
    </Tab.Navigator>
  );
};

const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: "#5c7778",

      headerStyle: {
        backgroundColor: "transparent",
        borderBottomWidth: 0,
        elevation: 0,
      },
    }}
  >
    <Stack.Screen name="Learning" component={MyTabs} />
  </Stack.Navigator>
);

export default ProfileStack;
