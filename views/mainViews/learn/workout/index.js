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

const part1 = [
  {
    name: "Back Squat",
    reps: 10,
    tempo: { up: 0, down: 0 },
    pause: { top: 0, middle: 0, bottom: 0 },
  },
  {
    name: "Leg Press",
    reps: 10,
    tempo: { up: 0, down: 0 },
    pause: { top: 0, middle: 0, bottom: 0 },
  },
];

const part2 = [
  {
    name: "Leg Extension",
    reps: 10,
    tempo: { up: 0, down: 0 },
    pause: { top: 0, middle: 0, bottom: 0 },
  },
  {
    name: "Ham curls",
    reps: 10,
    tempo: { up: 0, down: 0 },
    pause: { top: 0, middle: 0, bottom: 0 },
  },
];

const part3 = [
  {
    name: "Good Mornings",
    reps: 10,
    tempo: { up: 0, down: 0 },
    pause: { top: 0, middle: 0, bottom: 0 },
  },
  {
    name: "Hip Thrusters",
    reps: 10,
    tempo: { up: 0, down: 0 },
    pause: { top: 0, middle: 0, bottom: 0 },
  },
];

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
  border-radius: 12px;
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
  padding: 10px;
  margin: 20px;
  border-radius: 15px;
  background: #fff;
  margin-bottom: 10px;
`;

const ListItem = styled.View`
  flex-direction: column;
  padding: 20px 0;
  border-bottom-width: 1px;
  border-bottom-color: #f1f1f1;
`;

const ImageCard = styled.View``;

const WorkoutView = () => {
  return (
    <View style={{ backgroundColor: "#ebeff8" }}>
      <ScrollView>
        <Heading style={{ marginLeft: 30 }}>Workout Name</Heading>
        <SubHeading>Arms &amp; Shoulders</SubHeading>
        <Panel>
          <SubHeading>Workout: Part A</SubHeading>
          <Text>5 rounds</Text>
          {part1.map((item) => (
            <ListItem>
              <Text
                style={{
                  flex: 1,
                  color: "#303242",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {item.name}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "#a1aab7",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    marginRight: 10,
                    fontSize: 15,
                  }}
                >
                  Reps: {item.reps}
                </Text>
                <Text
                  style={{
                    color: "#a1aab7",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    marginRight: 10,
                    fontSize: 15,
                  }}
                >
                  Tempo: {item.tempo.up} / {item.tempo.down}
                </Text>
                <Text
                  style={{
                    color: "#a1aab7",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    marginRight: 10,
                    fontSize: 15,
                  }}
                >
                  Pause: {item.pause.top} / {item.pause.middle} /
                  {item.pause.bottom}
                </Text>
              </View>
            </ListItem>
          ))}
        </Panel>
        <Panel>
          <SubHeading>Workout: Part B</SubHeading>
          <Text>5 rounds</Text>
          {part2.map((item) => (
            <ListItem>
              <Text
                style={{
                  flex: 1,
                  color: "#303242",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {item.name}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "#a1aab7",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    marginRight: 10,
                    fontSize: 12,
                  }}
                >
                  Reps: {item.reps}
                </Text>
                <Text
                  style={{
                    color: "#a1aab7",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    marginRight: 10,
                    fontSize: 12,
                  }}
                >
                  Tempo: {item.tempo.up} / {item.tempo.down}
                </Text>
                <Text
                  style={{
                    color: "#a1aab7",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    marginRight: 10,
                    fontSize: 12,
                  }}
                >
                  Pause: {item.pause.top} / {item.pause.middle} /
                  {item.pause.bottom}
                </Text>
              </View>
            </ListItem>
          ))}
        </Panel>
        <Panel>
          <SubHeading>Workout: Part C</SubHeading>
          <Text>5 rounds</Text>
          {part3.map((item) => (
            <ListItem>
              <Text
                style={{
                  flex: 1,
                  color: "#303242",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {item.name}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "#a1aab7",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    marginRight: 10,
                    fontSize: 12,
                  }}
                >
                  Reps: {item.reps}
                </Text>
                <Text
                  style={{
                    color: "#a1aab7",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    marginRight: 10,
                    fontSize: 12,
                  }}
                >
                  Tempo: {item.tempo.up} / {item.tempo.down}
                </Text>
                <Text
                  style={{
                    color: "#a1aab7",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    marginRight: 10,
                    fontSize: 12,
                  }}
                >
                  Pause: {item.pause.top} / {item.pause.middle} /
                  {item.pause.bottom}
                </Text>
              </View>
            </ListItem>
          ))}
        </Panel>
      </ScrollView>
    </View>
  );
};

export default WorkoutView;
