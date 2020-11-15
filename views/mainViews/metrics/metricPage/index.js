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
import Panel from "../../../../components/panel";
import Heading from "../../../../components/heading";
import ListItem from "../../../../components/listItem";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import Button from "../../../../components/generics/form/button";

const Stack = createStackNavigator();

const weights = {
  name: "deadlift",
  previousEntries: [
    { weight: 50, date: "10/09/2020" },
    { weight: 55, date: "10/08/2020" },
    { weight: 56, date: "10/07/2020" },
    { weight: 56, date: "10/07/2020" },
    { weight: 56, date: "10/07/2020" },
    { weight: 56, date: "10/07/2020" },
  ],
};

const ImageCard = styled.View``;

const Index = () => {
  return (
    <View style={{ backgroundColor: "#ebeff8", flex: 1 }}>
      <ScrollView>
        <Heading style={{ marginLeft: 30, marginBottom: 20 }}>DeadLift</Heading>
        <View style={{ marginLeft: 20, marginRight: 30 }}>
          <LineChart
            data={{
              labels: weights.previousEntries
                .slice(0, 5)
                .map((item) => item.date),
              datasets: [
                {
                  data: weights.previousEntries
                    .slice(0, 5)
                    .map((item) => item.weight),
                },
              ],
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisLabel=""
            yAxisSuffix="kg"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#ebeff8",
              backgroundGradientTo: "#ebeff8",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "2",
                strokeWidth: "2",
                stroke: "black",
              },
            }}
          />
        </View>
        <Panel style={{ marginBottom: 100 }}>
          {weights.previousEntries.map((item) => (
            <ListItem arrow={false}>
              <View style={{ flexDirection: "column", flex: 1 }}>
                <Text
                  style={{
                    flex: 1,
                    color: "#a1aab7",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                >
                  Weight
                </Text>
                <Text
                  style={{
                    justifySelf: "flex-end",
                    flex: 1,
                    color: "#303242",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 25,
                  }}
                >
                  {item.weight}kg
                </Text>
              </View>
              <View style={{ flexDirection: "column", flex: 1 }}>
                <Text
                  style={{
                    textAlign: "right",
                    flex: 1,
                    color: "#a1aab7",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                >
                  Date
                </Text>
                <Text
                  style={{
                    flex: 1,
                    textAlign: "right",
                    color: "#303242",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                >
                  {dayjs(item.date).from()}
                </Text>
              </View>
            </ListItem>
          ))}
        </Panel>
      </ScrollView>
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 10,
        }}
      >
        <Button
          style={{
            marginLeft: 50,
            marginRight: 50,
          }}
        >
          Update Weight
        </Button>
      </View>
    </View>
  );
};

export default Index;
