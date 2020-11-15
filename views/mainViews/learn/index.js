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
import SideScroll from "../../../components/sideScroll";
import ContentCard from "../../../components/cards/content";
import SecondaryHeading from "../../../components/heading/secondaryHeading";

const Stack = createStackNavigator();

const Index = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#ebeff8" }}>
      <ScrollView>
        <Form hideSubmit={true}>
          <Input
            hideLabel={true}
            placeholder="search content..."
            label="search"
            name="search"
          />
        </Form>
        <SecondaryHeading style={{ marginLeft: 30 }}>
          Latest Videos
        </SecondaryHeading>
        <SideScroll>
          {[...new Array(5)].map((item) => (
            <ContentCard onPress={() => navigation.navigate("ContentView")} />
          ))}
        </SideScroll>
        <SecondaryHeading style={{ marginLeft: 30 }}>
          Latest Recipes
        </SecondaryHeading>
        <SideScroll
          style={{ marginLeft: 20 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {[...new Array(5)].map((item) => (
            <ContentCard onPress={() => navigation.navigate("ContentView")} />
          ))}
        </SideScroll>
        <SecondaryHeading style={{ marginLeft: 30 }}>
          Latest Articles
        </SecondaryHeading>
        <SideScroll>
          {[...new Array(5)].map((item) => (
            <ContentCard onPress={() => navigation.navigate("ContentView")} />
          ))}
        </SideScroll>
      </ScrollView>
    </View>
  );
};

const Index2 = (props) => {
  const { navigation } = props;
  return (
    <View style={{ backgroundColor: "#ebeff8" }}>
      <ScrollView>
        <Form hideSubmit={true}>
          <Input
            hideLabel={true}
            placeholder="search content..."
            label="search"
            name="search"
          />
        </Form>
        {[...new Array(5)].map((item) => (
          <ContentCard
            style={{
              flexDirection: "row",
              flex: 1,
              padding: 10,
              minWidth: 150,
            }}
            titleSize="20px"
            onPress={() => navigation.navigate("ContentView")}
          />
        ))}
      </ScrollView>
    </View>
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
        activeTintColor: "#303242",
        indicatorStyle: {
          backgroundColor: "#303242",
        },
        labelStyle: {
          fontWeight: "bold",
        },
        style: {
          backgroundColor: "#ebeff8",
        },
      }}
    >
      <Tab.Screen name="Recent" component={Index} />
      <Tab.Screen name="Workouts" component={Index2} />
      <Tab.Screen name="Videos" component={Index2} />

      <Tab.Screen name="Recipes" component={Index2} />
      <Tab.Screen name="Article" component={Index2} />
    </Tab.Navigator>
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
    <Stack.Screen name="Learn" component={MyTabs} />
  </Stack.Navigator>
);

export default ProfileStack;
