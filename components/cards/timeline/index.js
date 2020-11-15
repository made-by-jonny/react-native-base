import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components";
import Heading from "../../heading";
import Pod from "../../pod";
const TimeCard = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #a1aab7;
  border-radius: 15px;
`;

const ContentCard = (props) => {
  const { title, description, image, onPress } = props;
  return (
    <TimeCard>
      <View style={{ paddingRight: 20 }}>
        <Text
          style={{
            color: "#a1aab7",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 12,
          }}
        >
          6:30pm
        </Text>
      </View>
      <Pod
        onPress={() => {
          navigation.push("Workout");
        }}
      >
        <View style={{ flex: 3 }}>
          <Text style={{ fontWeight: "bold", color: "#a1aab7" }}>
            SemiPrivate
          </Text>
          <Heading size="20px">Arm &amp; Shoulders</Heading>

          <Text
            style={{
              fontWeight: "bold",
              color: "#a1aab7",
            }}
          >
            Coach by: Kev Myers
          </Text>
        </View>
      </Pod>
    </TimeCard>
  );
};

export default ContentCard;
