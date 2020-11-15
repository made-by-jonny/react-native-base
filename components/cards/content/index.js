import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components";

const Details = styled.View`
  width: 100%;
  overflow: hidden;
  padding: 5px 10px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const DetailsText = styled.Text`
  font-weight: ${(props) => props.weight || "normal"};
  width: 100%;
  font-size: ${(props) => props.size || "14px"};
  color: ${(props) => props.color || "#303242"};
`;

const ImageCardImage = styled.Image`
  width: 100%;
  border-radius: 15px;
  height: 130px;
`;

const ImageCard = styled.TouchableHighlight`
  width: 199px;
`;

const ContentCard = (props) => {
  const { title, description, image, onPress, style, titleSize } = props;
  return (
    <ImageCard
      onPress={onPress}
      style={{ ...style, minWidth: 200, margin: 10 }}
    >
      <>
        <ImageCardImage source={require("../../../assets/tempImage.jpg")} />
        <Details>
          <DetailsText weight="bold" size={titleSize}>
            Example title
          </DetailsText>
          <DetailsText color="#a1aab7">
            Example of the description of the post.
          </DetailsText>
        </Details>
      </>
    </ImageCard>
  );
};

export default ContentCard;
