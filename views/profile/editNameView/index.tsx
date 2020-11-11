import React from "react";
import { ScrollView } from "react-native";
import ListCard from "../../../components/cards/list";
import { LinearGradient } from "expo-linear-gradient";

import Input from "../../../components/generics/form/inputs";
import Form from "../../../components/generics/form";

const Profile = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, paddingLeft: 16, paddingRight: 16 }}>
      <ListCard>
        <>
          <Form>
            <Input label="Change Name" name="name" />
          </Form>
        </>
      </ListCard>
    </ScrollView>
  );
};

export default Profile;
