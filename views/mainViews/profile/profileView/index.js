import React from "react";
import { ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Link from "../../../../components/generics/links";
import { RootStackParamList } from "../index";
import { StackNavigationProp } from "@react-navigation/stack";

const Profile = (props) => {
  const { navigation } = props;
  return (
    <ScrollView style={{ flex: 1, paddingLeft: 16, paddingRight: 16 }}>
      <Link
        onPress={async () => {
          navigation.navigate("AuthView");
        }}
        style={{ marginTop: 20 }}
      >
        Logout
      </Link>
    </ScrollView>
  );
};

export default Profile;
