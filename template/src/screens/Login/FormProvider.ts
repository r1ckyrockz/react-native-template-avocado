import { makeFormContext } from '../../context/FormContext';

export type LoginFormValues = {
  username: string;
  password: string;
};

export const [FormLoginProvider, useLoginForm] = makeFormContext<LoginFormValues>();
