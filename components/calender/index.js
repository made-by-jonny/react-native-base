import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components";
import SideScroll from "../sideScroll";

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

const Index = ({ navigation }) => {
  return (
    <SideScroll>
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
    </SideScroll>
  );
};

export default Index;
