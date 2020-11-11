import React from "react";
import { ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Link from "../../../../components/generics/links";

const Profile = (props) => {
  const { login, navigation } = props;
  const navigate = useNavigation();
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
