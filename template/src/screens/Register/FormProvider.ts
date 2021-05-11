import { makeFormContext } from '../../context/FormContext';

export type RegisterFormValues = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export const [FormRegisterProvider, useRegisterForm] = makeFormContext<RegisterFormValues>();
