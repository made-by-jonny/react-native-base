import React, { useEffect } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import Form from "../../../components/generics/form";
import Input from "../../../components/generics/form/inputs";
import { login } from "../../../state/reducers/authentication";
import { useNavigation } from "@react-navigation/native";
import { bindActionCreators } from "redux";

const Login = (props) => {
  const { login, navigation } = props;
  const navigate = useNavigation();
  return (
    <View>
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
    </View>
  );
};

export default connect(
  (state) => ({}),
  (dispatch) => bindActionCreators({ login }, dispatch)
)(Login);
