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

const ImageCard = styled.View`
  flex-direction: row;
`;

const Index = () => {
  return (
    <SafeAreaView>
      <Heading>Latest Videos</Heading>
      <ScrollView>
        {[...new Array(24)].map((item) => (
          <ImageCard style={{ flex: 1, padding: 10, minWidth: 150 }}>
            <Image
              style={{
                borderRadius: 15,
                flex: 1,
                width: 100,
                height: 150,
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

const ProfileStack = () => (
  <Stack.Navigator
    headerMode="none"
    screenOptions={{
      headerTintColor: "#fff",

      headerStyle: {
        backgroundColor: "#b7dcdd",
        borderBottomWidth: 0,
        elevation: 0,
      },
    }}
  >
    <Stack.Screen name="Home" component={Index} />
  </Stack.Navigator>
);

export default ProfileStack;
