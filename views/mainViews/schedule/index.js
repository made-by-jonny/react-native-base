import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components";
import Button from "../../../components/generics/form/button";
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
  padding: 10px 20px;
  background: #fff;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const Pill = styled.View`
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.active ? `background-color: #b7dcdd;` : ` background-color: #fff;`}

  margin-bottom: 10px;
`;

const ImageCard = styled.View``;

const Index = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        marginTop: 50,
        backgroundColor: "#f4f6f3",
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      <Heading style={{ marginTop: 20, marginBottom: 20 }}>November</Heading>
      <ScrollView style={{ marginBottom: 10 }} horizontal={true}>
        {["mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"].map(
          (item, index) => (
            <Pill
              style={{ height: 80, width: 70 }}
              active={index === 0 ? true : null}
            >
              <Text>{item}</Text>
              <Text>{index + 1}th</Text>
            </Pill>
          )
        )}
      </ScrollView>

      <PrimaryCard>
        <Header>
          <View style={{ flex: 3 }}>
            <Heading>Semi Private</Heading>
            <Text style={{ fontWeight: "bold", color: "#729191" }}>
              Coach by: Kev Myers
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#729191",
              }}
            >
              Arm &amp; Shoulders
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Pill>
              <Text style={{ fontWeight: "bold", color: "#93c1c6" }}>
                45min
              </Text>
            </Pill>
            <Pill>
              <Text style={{ fontWeight: "bold", color: "#93c1c6" }}>
                6:30pm
              </Text>
            </Pill>
          </View>
        </Header>
        <Footer>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "bold", color: "#729191" }}>
              Attending 6/8
            </Text>
          </View>
          <Button variant="outline">See Workout</Button>
        </Footer>
      </PrimaryCard>

      <PrimaryCard>
        <Header>
          <View style={{ flex: 3 }}>
            <Heading>Semi Private</Heading>
            <Text style={{ fontWeight: "bold", color: "#729191" }}>
              Coach by: Kev Myers
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#729191",
              }}
            >
              Arm &amp; Shoulders
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Pill>
              <Text style={{ fontWeight: "bold", color: "#93c1c6" }}>
                45min
              </Text>
            </Pill>
            <Pill>
              <Text style={{ fontWeight: "bold", color: "#93c1c6" }}>
                6:30pm
              </Text>
            </Pill>
          </View>
        </Header>
        <Footer>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "bold", color: "#729191" }}>
              Attending 6/8
            </Text>
          </View>
          <Button variant="outline">See Workout</Button>
        </Footer>
      </PrimaryCard>

      <PrimaryCard>
        <Header>
          <View style={{ flex: 3 }}>
            <Heading>Semi Private</Heading>
            <Text style={{ fontWeight: "bold", color: "#729191" }}>
              Coach by: Kev Myers
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#729191",
              }}
            >
              Arm &amp; Shoulders
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Pill>
              <Text style={{ fontWeight: "bold", color: "#93c1c6" }}>
                45min
              </Text>
            </Pill>
            <Pill>
              <Text style={{ fontWeight: "bold", color: "#93c1c6" }}>
                6:30pm
              </Text>
            </Pill>
          </View>
        </Header>
        <Footer>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "bold", color: "#729191" }}>
              Attending 6/8
            </Text>
          </View>
          <Button variant="outline">See Workout</Button>
        </Footer>
      </PrimaryCard>

      <PrimaryCard>
        <Header>
          <View style={{ flex: 3 }}>
            <Heading>Semi Private</Heading>
            <Text style={{ fontWeight: "bold", color: "#729191" }}>
              Coach by: Kev Myers
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#729191",
              }}
            >
              Arm &amp; Shoulders
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Pill>
              <Text style={{ fontWeight: "bold", color: "#93c1c6" }}>
                45min
              </Text>
            </Pill>
            <Pill>
              <Text style={{ fontWeight: "bold", color: "#93c1c6" }}>
                6:30pm
              </Text>
            </Pill>
          </View>
        </Header>
        <Footer>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "bold", color: "#729191" }}>
              Attending 6/8
            </Text>
          </View>
          <Button variant="outline">See Workout</Button>
        </Footer>
      </PrimaryCard>

      <PrimaryCard>
        <Header>
          <View style={{ flex: 3 }}>
            <Heading>Semi Private</Heading>
            <Text style={{ fontWeight: "bold", color: "#729191" }}>
              Coach by: Kev Myers
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#729191",
              }}
            >
              Arm &amp; Shoulders
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Pill>
              <Text style={{ fontWeight: "bold", color: "#93c1c6" }}>
                45min
              </Text>
            </Pill>
            <Pill>
              <Text style={{ fontWeight: "bold", color: "#93c1c6" }}>
                6:30pm
              </Text>
            </Pill>
          </View>
        </Header>
        <Footer>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "bold", color: "#729191" }}>
              Attending 6/8
            </Text>
          </View>
          <Button variant="outline">See Workout</Button>
        </Footer>
      </PrimaryCard>
    </ScrollView>
  );
};

const ScheduleStack = () => (
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

export default ScheduleStack;
