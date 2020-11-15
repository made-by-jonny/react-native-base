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
import ContentView from "./content";

const Stack = createStackNavigator();

const Heading = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: #5c7778;
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

const Pill = styled.View`
  padding: 5px 10px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  background: #fff;
  margin-bottom: 10px;
`;

const ImageCard = styled.TouchableHighlight``;

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
        <ScrollView
          style={{ marginLeft: 20 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {[...new Array(5)].map((item) => (
            <ImageCard
              style={{ minWidth: 200, margin: 10 }}
              onPress={() => navigation.navigate("ContentView")}
            >
              <>
                <Image
                  style={{
                    width: 199,
                    borderRadius: 15,
                    height: 130,
                  }}
                  width={200}
                  height={50}
                  resizeMode="contain"
                  source={require("../../../assets/tempImage.jpg")}
                />
                <Details>
                  <DetailsText>Example title</DetailsText>
                  <Text style={{ width: 200, color: "#a1aab7" }}>
                    Example of the description of the post.
                  </Text>
                </Details>
              </>
            </ImageCard>
          ))}
        </ScrollView>
        <SecondaryHeading style={{ marginLeft: 30 }}>
          Latest Recipes
        </SecondaryHeading>
        <ScrollView
          style={{ marginLeft: 20 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {[...new Array(5)].map((item) => (
            <ImageCard
              style={{ minWidth: 200, margin: 10 }}
              onPress={() => navigation.navigate("ContentView")}
            >
              <>
                <Image
                  style={{
                    width: 199,
                    borderRadius: 15,
                    height: 130,
                  }}
                  width={200}
                  height={50}
                  resizeMode="contain"
                  source={require("../../../assets/tempImage.jpg")}
                />
                <Details>
                  <DetailsText>Example title</DetailsText>
                  <Text style={{ width: 200, color: "#a1aab7" }}>
                    Example of the description of the post.
                  </Text>
                </Details>
              </>
            </ImageCard>
          ))}
        </ScrollView>
        <SecondaryHeading style={{ marginLeft: 30 }}>
          Latest Articles
        </SecondaryHeading>
        <ScrollView
          style={{ marginLeft: 20 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {[...new Array(5)].map((item) => (
            <ImageCard
              style={{ minWidth: 200, margin: 10 }}
              onPress={() => navigation.navigate("ContentView")}
            >
              <>
                <Image
                  style={{
                    width: 199,
                    borderRadius: 15,
                    height: 130,
                  }}
                  width={200}
                  height={50}
                  resizeMode="contain"
                  source={require("../../../assets/tempImage.jpg")}
                />
                <Details>
                  <DetailsText>Example title</DetailsText>
                  <Text style={{ width: 200, color: "#a1aab7" }}>
                    Example of the description of the post.
                  </Text>
                </Details>
              </>
            </ImageCard>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const Index2 = () => {
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
          <ImageCard
            style={{
              flexDirection: "row",
              flex: 1,
              padding: 10,
              minWidth: 150,
            }}
            onPress={() => navigation.navigate("ContentView")}
          >
            <>
              <Image
                style={{
                  width: 199,
                  borderRadius: 15,
                  height: 130,
                }}
                width={200}
                height={50}
                resizeMode="contain"
                source={require("../../../assets/tempImage.jpg")}
              />
              <Details style={{ justifyContent: "center" }}>
                <DetailsText size="24px">Example title</DetailsText>
                <Text style={{ width: 200, color: "#a1aab7" }}>
                  Example of the description of the post.
                </Text>
              </Details>
            </>
          </ImageCard>
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
    <Stack.Screen name="ContentView" component={ContentView} />
  </Stack.Navigator>
);

export default ProfileStack;
