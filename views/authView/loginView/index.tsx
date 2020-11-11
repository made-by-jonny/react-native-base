import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Image } from "react-native";
import Form from "../../components/generics/form";
import Input from "../../components/generics/form/inputs";
import styled from "styled-components/native";
import Heading from "../../components/generics/heading";
import Container from "../../components/container";
import { login } from "../../state/reducers/authentication";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Link from "../../components/links";
import Panel from "../../components/generics/panel";
import { LinearGradient } from "expo-linear-gradient";
import { bindActionCreators } from "redux";

const DarkBackground = styled.View`
  flex: 1;
  display: flex;
  ${(props) => console.log(props)}
  background: ${({ theme }) => theme.colours.secondary || "black"}
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
`;

const Login = (props) => {
  const { login, navigation } = props;
  const navigate = useNavigation();
  return (
    <DarkBackground>
      <Image
        style={{ marginBottom: 0 }}
        source={require("../../assets/vertlogo.png")}
      />
      <Image
        style={{ position: "absolute", bottom: -20 }}
        source={require("../../assets/backgroundImage.png")}
      />

      <Container>
        <Heading style={{ marginBottom: 20 }} variant="light">
          Sign In
        </Heading>
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
        <Link
          style={{ marginTop: 30 }}
          onPress={() => navigate.push("ResetPassword")}
        >
          Forgot Password?
        </Link>
        <Link
          style={{ marginTop: 30 }}
          onPress={async () => {
            navigate.push("Register");
          }}
        >
          Don't have an account? Register
        </Link>
      </Container>
    </DarkBackground>
  );
};

export default connect(
  (state) => ({}),
  (dispatch) => bindActionCreators({ login }, dispatch)
)(Login);
