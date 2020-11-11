import React from "react";
import { ScrollView, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Link from "../../../components/links";
import Heading from "../../../components/generics/heading";
import Value from "../../../components/generics/value";
import Panel from "../../../components/generics/panel";
import ListCard from "../../../components/cards/list";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import Button from "../../../components/generics/form/button";
import Arrow from "../../../components/arrow";

const ProfileItem = ({ children, onPress }) => (
  <ListCard
    style={{ alignItems: "center", justifyContent: "center" }}
    onPress={onPress}
  >
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 1, justifyContent: "center" }}>{children}</View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Arrow />
      </View>
    </View>
  </ListCard>
);
const Profile = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, paddingLeft: 16, paddingRight: 16 }}>
      <ProfileItem onPress={() => navigation.navigate("Change Name")}>
        <Heading>Name</Heading>
        <Value>Some Name</Value>
      </ProfileItem>
      <ProfileItem onPress={() => navigation.navigate("Change Address")}>
        <Heading>Address</Heading>
        <Value>51 something street</Value>
        <Value>Made-up road</Value>
        <Value>Faketon</Value>
        <Value>NE1 3LX</Value>
      </ProfileItem>

      <ProfileItem onPress={() => navigation.navigate("ResetPassword")}>
        <Heading>Reset Password</Heading>
      </ProfileItem>
      <Button
        onPress={async () => {
          await AsyncStorage.setItem("authed", "false");
          navigation.navigate("AuthView");
        }}
        style={{ marginTop: 20 }}
      >
        Logout
      </Button>
    </ScrollView>
  );
};

export default Profile;
