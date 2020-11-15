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
import { WebView } from "react-native-webview";

const Stack = createStackNavigator();

const weights = {
  name: "deadlift",
  previousEntries: [
    { weight: 50, date: "10/10/2020" },
    { weight: 55, date: "10/11/2020" },
    { weight: 56, date: "10/12/2020" },
  ],
};

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
  padding: 20px;
  margin-top: -20px;
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
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View>
          <WebView
            source={{
              uri: "https://player.vimeo.com/video/382005368?transparent=0",
            }}
            scrollEnabled={false}
            bounces={false}
            renderError={() => null}
            style={{ height: 220 }}
          />
        </View>
        <Panel>
          <Heading>DeadLift</Heading>
          <Text style={{ lineHeight: 25, marginBottom: 20 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.{" "}
          </Text>
          <Text style={{ lineHeight: 25, marginBottom: 20 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.{" "}
          </Text>
        </Panel>
      </ScrollView>
    </View>
  );
};

export default Index;
