import React from "react";
import { TouchableHighlight, Text } from "react-native";
import styled from "styled-components/native";

type LinkType = {
  theme?: any;
  variant?: string;
  onPress(): void;
  children: any;
};

type LinkTextType = {
  variant?: string;
  theme?: any;
};

const LinkStyle: React.FC<LinkType> = styled(TouchableHighlight)<LinkType>``;

const LinkText: React.FC<LinkTextType> = styled(Text)<{ variant: string }>`
  color: #666;
  font-weight: bold;
`;

const Link: React.FC<LinkType> = (props) => {
  const { children, onPress, variant } = props;
  return (
    <LinkStyle onPress={onPress} variant={variant}>
      <LinkText variant={variant}>{children}</LinkText>
    </LinkStyle>
  );
};

export default Link;
