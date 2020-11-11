import React, { useEffect } from "react";
import { View } from "react-native";
import Form from "../../../components/generics/form";
import Input from "../../../components/generics/form/inputs";
import { useNavigation } from "@react-navigation/native";

const ForgotPassCodeView = () => {
  const navigate = useNavigation();
  return (
    <View>
      <Form onSubmit={() => navigate.navigate("Enter Code")}>
        <Input name="email" label="Email" type="string" />
      </Form>
    </View>
  );
};

export default ForgotPassCodeView;
