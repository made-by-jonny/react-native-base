import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Form from "../../../components/generics/form";
import Input from "../../../components/generics/form/inputs";
import { login } from "../../../state/reducers/authentication";
import { useNavigation } from "@react-navigation/native";
import { bindActionCreators } from "redux";
import Link from "../../../components/generics/links";

const Login = (props) => {
  const { login, navigation } = props;
  const navigate = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form
        onSubmit={async (data) => {
          try {
            navigation.reset({
              index: 0,
              routes: [{ name: "AppView" }],
            });
          } catch (e) {
            console.log(e.message);
          }
        }}
      >
        <Input name="identifier" email="true" label="Email" required={true} />
        <Input
          name="password"
          type="password"
          label="Password"
          required={true}
          secureTextEntry={true}
          minLength={8}
        />
      </Form>
      <View>
        <Link
          onPress={async () => {
            navigate.push("Register");
          }}
        >
          Don't Have an account? Register Here
        </Link>
      </View>
    </View>
  );
};

export default connect(
  (state) => ({}),
  (dispatch) => bindActionCreators({ login }, dispatch)
)(Login);
