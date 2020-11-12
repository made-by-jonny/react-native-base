import React, { useState, useEffect } from "react";
import {
  TextInput,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import rules from "../helpers/validations";
import styled from "styled-components/native";
import Label from "../label";

const InputField = styled.TextInput`
  border-radius: 10px;
  overflow: hidden;
  color: #222;
  padding: 10px;
  border: 1px solid #cecdce;
  background: ${(props) => {
    switch (props.variant) {
      case "contrast":
        return "#f4f4f4";
      default:
        return "#fff";
    }
  }};
`;

const validation = (props, name, value) => {
  return Object.keys(props).reduce((end, current) => {
    if (rules[current] === undefined) return end;
    end[name] = rules[current](props[current], value);
    return end;
  }, {});
};

const Input = (props) => {
  const [isValid, setValidity] = useState("clean");
  const [errors, setErrors] = useState([]);
  const {
    onChange,
    variant,
    label,
    name,
    type,
    minLength,
    informForm,
    hideLabel,
    placeholder,
    defaultValue = "",
  } = props;

  const validate = (e) => {
    const value = e.nativeEvent.text;
    const validateObject = validation({ ...props }, name, value);
    const validity = Object.entries(validateObject).map((item) => {
      if (item !== true) return item[1];
    });

    setErrors(validity);
    setValidity(validity.length === 0 ? true : false);

    if (typeof onChange === "function") {
      onChange({
        [name]: {
          value,
          isValid,
        },
      });
    }
  };

  useEffect(() => {
    if (informForm) {
      informForm({
        [name]: {
          value: defaultValue,
          isValid,
        },
      });
    }
  }, []);

  return (
    <>
      {hideLabel ? null : <Label>{label}</Label>}

      <InputField
        {...props}
        placeholder={placeholder}
        variant={variant}
        onChange={validate}
        defaultValue={defaultValue}
      />
      {errors.map((item) => (
        <Text key={item}>{item}</Text>
      ))}
    </>
  );
};

export default Input;
