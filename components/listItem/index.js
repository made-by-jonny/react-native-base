import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

const ListItemBase = styled.TouchableHighlight`
  flex-direction: row;
  padding: 15px 0;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #f1f1f1;
`;

const ListItem = (props) => {
  const { onPress, children, arrow = true } = props;
  return (
    <ListItemBase onPress={onPress}>
      <>
        {children}
        {arrow ? (
          <FontAwesome
            style={{
              marginLeft: 3,
            }}
            name="chevron-right"
            size={20}
            color="#CECDCE"
          />
        ) : null}
      </>
    </ListItemBase>
  );
};

export default ListItem;
