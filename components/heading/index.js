import React from "react";
import styled from "styled-components/native";

const Heading = styled.Text`
  font-weight: bold;
  font-size: ${(props) => props.size || "30px"};
  color: #303242;
`;

export default Heading;
