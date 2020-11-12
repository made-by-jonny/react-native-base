import React from "react";
import { TouchableHighlight, Text } from "react-native";
import styled from "styled-components/native";

const ButtonStyle = styled.TouchableHighlight`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.buttons.background || "#000"};
  ${(props) => (props.variant === "grey" ? `background-color:#ccc;` : null)}
  border-radius: ${(props) => props.theme.buttons.borderRadius || "30px"};
  padding: ${(props) => props.theme.buttons.padding || "32px"};
  margin-bottom: 10px;
`;

const ButtonText = styled(Text)`
  color: ${(props) => props.theme.buttons.text.color || "#fff"};
  font-weight: bold;
  ${(props) => (props.variant === "grey" ? `color: #fff;` : null)}
`;

const Button = (props) => {
  const { children, onPress, variant } = props;
  return (
    <ButtonStyle onPress={onPress} variant={variant}>
      <ButtonText variant={variant}>{children}</ButtonText>
    </ButtonStyle>
  );
};

export default Button;
