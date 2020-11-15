import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components";
import Button from "../../../components/generics/form/button";
import { CardStyleInterpolators } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Heading = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: #303242;
`;

const PodHeading = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #303242;
`;

const SubHeading = styled.Text`
  font-size: 20px;
  color: #303242;
`;

const SecondaryHeading = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #303242;
`;

const TimeCard = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #a1aab7;
  border-radius: 15px;
`;

const Pod = styled.TouchableHighlight`
  flex: 1;
  padding: 20px;
  border-radius: 15px;
  background: #fff;
`;

const Header = styled.View`
  padding: 0 20px;
  flex-direction: ${(props) => props.direction || "row"};
`;
const Footer = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const Details = styled.View`
  padding: 10px 20px;
  background: #fff;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const DatePod = styled.View`
  padding: 5px 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const DatePodText = styled.Text`
  ${(props) =>
    props.active
      ? ` background-color: #303242; 
          borderRadius: 100px;
          padding: 5px;
        `
      : ``}
`;

const DatePodRegular = styled.Text``;

const ImageCard = styled.View``;

const Index = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#ebeff8",
      }}
    >
      <Header>
        <Heading style={{ marginTop: 20, marginBottom: 20 }}>November</Heading>
      </Header>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 10, marginLeft: 20 }}
        horizontal={true}
      >
        {["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"].map(
          (item, index) => (
            <DatePod
              style={{ height: 80, width: 70 }}
              active={index === 0 ? true : null}
            >
              <DatePodText
                style={{
                  color: "#a1aab7",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                {item}
              </DatePodText>
              <DatePodText
                active={index === 0 ? true : null}
                style={{
                  fontWeight: "bold",
                  color: index === 0 ? "#fff" : "#303242",
                  marginTop: 10,
                }}
              >
                {index + 1}th
              </DatePodText>
            </DatePod>
          )
        )}
      </ScrollView>
      {[1, 2, 3, 4].map((item) => (
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
              <PodHeading>Arm &amp; Shoulders</PodHeading>

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
      ))}
    </ScrollView>
  );
};

const ScheduleStack = () => (
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
    <Stack.Screen
      name="Schedule"
      component={Index}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    />
  </Stack.Navigator>
);

export default ScheduleStack;
