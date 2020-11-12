import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Button from "./button";

const Form = ({
  children,
  onSubmit = (data) => {},
  errorMessage,
  hideSubmit = false,
  ButtonLabel = "submit",
}) => {
  const [items, setItems] = useState({});

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      informForm: (data) => {
        setItems(Object.assign(items, data));
      },
      onChange: (data) => {
        setItems(Object.assign(items, data));
      },
    })
  );

  const submit = () => onSubmit(items);

  return (
    <View style={{ alignSelf: "stretch", padding: 20 }}>
      {childrenWithProps}
      <Text>{errorMessage}</Text>
      {hideSubmit === true ? null : (
        <Button onPress={submit}>{ButtonLabel}</Button>
      )}
    </View>
  );
};

export default Form;
