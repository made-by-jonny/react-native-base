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
import Pill from "../../../../components/pill";
import ListItem from "../../../../components/listItem";
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

const Panel = styled.View`
  padding: 10px;
  margin: 20px;
  border-radius: 15px;
  background: #fff;
  margin-bottom: 10px;
`;

const WorkoutView = (props) => {
  const { navigation } = props;
  return (
    <View style={{ backgroundColor: "#ebeff8" }}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Heading>Arms &amp; Shoulders</Heading>
          <SubHeading>Giant Sets</SubHeading>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Pill>6:30pm</Pill>
          <Pill>45 min</Pill>
        </View>
        <Panel>
          <SubHeading>Workout: Part A</SubHeading>
          <Text>5 rounds</Text>
          {part1.map((item) => (
            <ListItem onPress={() => navigation.navigate("Breakdown")}>
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    color: "#303242",
                    fontWeight: "bold",
                    fontSize: 20,
                    marginBottom: 2,
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
                    Pause: {item.pause.top} / {item.pause.middle} /{" "}
                    {item.pause.bottom}
                  </Text>
                </View>
              </View>
            </ListItem>
          ))}
        </Panel>
        <Panel>
          <SubHeading>Workout: Part B</SubHeading>
          <Text>5 rounds</Text>
          {part2.map((item) => (
            <ListItem onPress={() => navigation.navigate("Breakdown")}>
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    color: "#303242",
                    fontWeight: "bold",
                    fontSize: 20,
                    marginBottom: 2,
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
                    Pause: {item.pause.top} / {item.pause.middle} /{" "}
                    {item.pause.bottom}
                  </Text>
                </View>
              </View>
            </ListItem>
          ))}
        </Panel>
        <Panel>
          <SubHeading>Workout: Part C</SubHeading>
          <Text>5 rounds</Text>
          {part3.map((item) => (
            <ListItem
              onPress={() =>
                navigation.navigate("AppView", {
                  screen: "Metrics",
                  params: {
                    screen: "Breakdown",
                  },
                })
              }
            >
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    color: "#303242",
                    fontWeight: "bold",
                    fontSize: 20,
                    marginBottom: 2,
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
                    Pause: {item.pause.top} / {item.pause.middle} /{" "}
                    {item.pause.bottom}
                  </Text>
                </View>
              </View>
            </ListItem>
          ))}
        </Panel>
      </ScrollView>
    </View>
  );
};

export default WorkoutView;
