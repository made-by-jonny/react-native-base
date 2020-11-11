type Validations = {
  [key: string]: (rule: string, value: string) => boolean | string;
};

export const minLength = (rule: string, value: string) => {
  const isValid = value.toString().length >= parseInt(rule) ? true : false;
  if (!isValid) {
    return `Please enter a value larger than ${rule}`;
  }
  return true;
};

export const maxLength = (rule: string, value: string) => {
  const isValid = value.toString().length <= parseInt(rule) ? true : false;
  if (!isValid) {
    return `Please enter a value smaller than ${rule}`;
  }
  return true;
};

export const email = (rule: string, value: string) => {
  const isValid = value.match("@");
  if (!isValid) {
    return `Please enter a valid email`;
  }
  return true;
};

export const required = (rule: string, value: string) => {
  const isValid = value.toString().length < 0;
  if (!isValid) {
    return `This input is required`;
  }
  return true;
};

const validations: Validations = {
  required,
  email,
  maxLength,
  minLength,
};

export default validations;
