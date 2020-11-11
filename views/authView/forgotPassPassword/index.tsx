import React, { useEffect } from "react";
import { View } from "react-native";
import Form from "../../../components/generics/form";
import Input from "../../../components/generics/form/inputs";
import { useNavigation } from "@react-navigation/native";

const ForgotPassView: React.FC = () => {
  const navigate = useNavigation();
  return (
    <View>
      <Form onSubmit={() => navigate.navigate("AuthView")}>
        <Input name="new_password" label=" New Password" type="password" />
        <Input
          name="confirm_new_password"
          label="Confirm New Password"
          type="password"
        />
      </Form>
    </View>
  );
};

export default ForgotPassView;
