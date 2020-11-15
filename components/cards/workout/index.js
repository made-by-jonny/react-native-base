import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import Pill from "../../pill";
import Heading from "../../heading";
import Button from "../..//generics/form/button";

const PrimaryCard = styled.TouchableHighlight`
  padding: 20px;
  margin: 0 30px 30px;
  background: #fff;
  border-radius: 15px;
`;

const PrimaryCardContent = styled.View`
  padding: 5px 0;
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "flex-start"};
  flex-direction: ${(props) => props.direction || "row"};
`;

const WorkoutCard = (props) => {
  const { title, description, onPress } = props;
  return (
    <PrimaryCard onPress={onPress}>
      <>
        <PrimaryCardContent style={{ flex: 1 }}>
          <Pill>45min</Pill>
          <Pill>6:30pm</Pill>
        </PrimaryCardContent>
        <PrimaryCardContent
          style={{ flex: 3 }}
          direction="column"
          align="flex-start"
        >
          <Heading>Semi Private</Heading>
          <Text style={{ fontWeight: "bold", color: "#a1aab7" }}>
            Coach by: Kev Myers
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#a1aab7",
            }}
          >
            Arm &amp; Shoulders
          </Text>
        </PrimaryCardContent>

        <PrimaryCardContent>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "bold", color: "#729191" }}>
              Attending 6/8
            </Text>
          </View>
          <Button onPress={onPress} variant="outline">
            See Workout
          </Button>
        </PrimaryCardContent>
      </>
    </PrimaryCard>
  );
};

export default WorkoutCard;
