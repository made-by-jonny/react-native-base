import React from "react";
import { ScrollView } from "react-native";

const SideScroll = (props) => {
  const { children } = props;
  return (
    <ScrollView
      horizontal={true}
      style={{ marginLeft: 20 }}
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
};

export default SideScroll;
