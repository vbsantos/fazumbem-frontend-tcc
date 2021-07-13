import { InputProps, TextareaProps } from "@chakra-ui/react";
import {
  ChangeHandler,
  Control,
  FieldError,
  RefCallBack,
} from "react-hook-form";

export type InputRegister = {
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  ref: RefCallBack;
  name: string;
};

export type InputFieldProps = InputProps & {
  register: InputRegister;
  error?: FieldError;
};

export type InputControlledFieldProps = InputProps & {
  control: Control<any>;
  error?: FieldError;
  name: string;
};

export type TextAreaFieldProps = TextareaProps & {
  register: InputRegister;
  error?: FieldError;
};
