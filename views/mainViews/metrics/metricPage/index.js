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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

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
  padding: 10px;
  margin: 20px;
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
    <View style={{ backgroundColor: "#ebeff8" }}>
      <ScrollView>
        <Heading style={{ marginLeft: 30 }}>DeadLift</Heading>
        <View>
          <Text>Bezier Line Chart</Text>
          <LineChart
            data={{
              labels: weights.previousEntries.map((item) => item.date),
              datasets: [
                {
                  data: weights.previousEntries.map((item) => item.weight),
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
        <Panel>
          {weights.previousEntries.map((item) => (
            <ListItem>
              <Text
                style={{
                  flex: 1,
                  color: "#a1aab7",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {item.weight}kg
              </Text>
              <Text
                style={{
                  flex: 1,
                  color: "#a1aab7",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {item.date}
              </Text>
            </ListItem>
          ))}
        </Panel>
      </ScrollView>
    </View>
  );
};

export default Index;
