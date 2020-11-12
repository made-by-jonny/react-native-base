import React from "react";
import { TouchableHighlight, Text } from "react-native";
import styled from "styled-components/native";

const LinkStyle = styled(TouchableHighlight)``;

const LinkText = styled(Text)`
  color: #666;
  font-weight: bold;
`;

const Link = (props) => {
  const { children, onPress, variant } = props;
  return (
    <LinkStyle onPress={onPress} variant={variant}>
      <LinkText variant={variant}>{children}</LinkText>
    </LinkStyle>
  );
};

export default Link;
