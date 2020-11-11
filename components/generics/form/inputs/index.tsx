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

type InputType = {
  onChange?({}): void;
  variant?: string;
  label: string;
  name: string;
  type: string;
  minLength?: number;
  informForm?({}): void;
  hideLabel?: boolean;
  placeholder?: string | undefined;
  defaultValue?: string;
};

const InputField: React.FC<InputType> = styled(TextInput)<{ variant: string }>`
  border-radius: 100px;
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

const validation = (props: any, name: string, value: string) => {
  return Object.keys(props).reduce((end: { [key: string]: {} }, current) => {
    if (rules[current] === undefined) return end;
    end[name] = rules[current](props[current], value);
    return end;
  }, {});
};

const Input: React.FC<InputType> = (props) => {
  const [isValid, setValidity] = useState<boolean | string>("clean");
  const [errors, setErrors] = useState<string[] | []>([]);
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

  const validate = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const value = e.nativeEvent.text;
    const validateObject = validation({ ...props }, name, value);
    const validity: string[] = Object.entries(validateObject).map(
      (item: any) => {
        if (item !== true) return item[1];
      }
    );

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
      {(errors as string[]).map((item: string) => (
        <Text key={item}>{item}</Text>
      ))}
    </>
  );
};

export default Input;
