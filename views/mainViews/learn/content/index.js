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
import Panel from "../../../../components/panel";
import Heading from "../../../../components/heading";

const ImageCard = styled.View``;

const Index = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#ebeff8" }}>
      <ScrollView>
        <View style={{ margin: 20, borderRadius: 15, overflow: "hidden" }}>
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
          <Heading style={{ marginBottom: 20 }}>DeadLift</Heading>
          <Text style={{ lineHeight: 25, marginBottom: 20, color: "#a0a6b9" }}>
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
          <Text style={{ lineHeight: 25, marginBottom: 20, color: "#a0a6b9" }}>
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
