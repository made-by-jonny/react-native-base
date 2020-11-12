import React, { useEffect } from "react";
import { View } from "react-native";
import Form from "../../../components/generics/form";
import Input from "../../../components/generics/form/inputs";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const ForgotPassView = () => {
  const navigate = useNavigation();
  return (
    <View>
      <View>
        <Form onSubmit={() => navigate.navigate("Enter Password")}>
          <Input name="code" label="Code" type="code" />
        </Form>
      </View>
    </View>
  );
};

export default ForgotPassView;
