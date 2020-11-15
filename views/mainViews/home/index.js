import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components";
import Button from "../../../components/generics/form/button";
const Stack = createStackNavigator();

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
  color: #303242;
`;

const PrimaryCard = styled.View`
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
  padding: 5px 10px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const DetailsText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #303242;
`;

const Pill = styled.View`
  padding: 5px 10px;
  border-radius: 100px;
  align-items: center;
  margin-right: 5px;
  justify-content: center;
  background: #a1aab7;
  margin-bottom: 10px;
`;

const ImageCard = styled.View``;

const Index = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#ebeff8",
      }}
    >
      <Header direction="column" style={{ marginBottom: 30 }}>
        <Heading>Welcome, Jonny</Heading>
        <SubHeading>Thurdsay, 12th Nov</SubHeading>
      </Header>
      <Header direction="column" style={{ marginBottom: 20 }}>
        <SecondaryHeading>Today's Workout</SecondaryHeading>
      </Header>
      <PrimaryCard>
        <PrimaryCardContent style={{ flex: 1 }}>
          <Pill>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>45min</Text>
          </Pill>
          <Pill>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>6:30pm</Text>
          </Pill>
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
          <Button variant="outline">See Workout</Button>
        </PrimaryCardContent>
      </PrimaryCard>
      <Header direction="column" style={{ marginBottom: 10 }}>
        <SecondaryHeading>Latest Videos</SecondaryHeading>
      </Header>
      <ScrollView
        style={{ marginLeft: 20 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {[1, 2, 3, 4].map((item) => (
          <ImageCard style={{ minWidth: 200, margin: 10 }}>
            <Image
              style={{
                width: 199,
                borderRadius: 15,
                height: 130,
              }}
              width={200}
              height={50}
              resizeMode="contain"
              source={require("../../../assets/tempImage.jpg")}
            />
            <Details>
              <DetailsText>Example title</DetailsText>
              <Text style={{ width: 200, color: "#a1aab7" }}>
                Example of the description of the post.
              </Text>
            </Details>
          </ImageCard>
        ))}
      </ScrollView>
      <Header direction="column" style={{ marginBottom: 20 }}>
        <SecondaryHeading>Latest Recipes</SecondaryHeading>
      </Header>
      <ScrollView
        horizontal={true}
        style={{ marginLeft: 20 }}
        showsHorizontalScrollIndicator={false}
      >
        {[1, 2, 3, 4].map((item) => (
          <ImageCard style={{ minWidth: 200, margin: 10 }}>
            <Image
              style={{
                width: 199,
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
                height: 130,
              }}
              width={200}
              height={50}
              resizeMode="contain"
              source={require("../../../assets/tempImage.jpg")}
            />
            <Details>
              <DetailsText>Example title</DetailsText>
              <Text style={{ width: 200, color: "#a1aab7" }}>
                Example of the description of the post.
              </Text>
            </Details>
          </ImageCard>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const ProfileStack = () => (
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
    <Stack.Screen name="Home" component={Index} />
  </Stack.Navigator>
);

export default ProfileStack;
