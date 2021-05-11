import React, {
  createContext,
  Dispatch,
  ReactNode,
  ReactNodeArray,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { SubmitHandler, useForm as useRhfForm, UseFormReturn } from 'react-hook-form';

import { DismissKeyBoard } from '../../components/DismissKeyboard';

export type FormContextProviderProps<TFieldValues> = {
  onSubmit: SubmitHandler<TFieldValues>;
  useFormProps?: Record<string, never>;

  isFormDisabled?: boolean;
  isFormLoading?: boolean;
  fieldsDisabled?: (keyof TFieldValues)[];

  children: JSX.Element | ReactNode | ReactNodeArray;
};

export type FormContextProps<TFieldValues> = UseFormReturn<TFieldValues> & {
  isFormDisabled: FormContextProviderProps<TFieldValues>['isFormDisabled'];
  isFormLoading: FormContextProviderProps<TFieldValues>['isFormLoading'];
  disabledFields: FormContextProviderProps<TFieldValues>['fieldsDisabled'];

  isFormFieldDisabled: (name: string) => boolean;
  setDisabledFields: Dispatch<SetStateAction<(keyof TFieldValues)[]>>;
  removeDisabledField: (fields: keyof TFieldValues | (keyof TFieldValues)[]) => void;
  clearAllDisabledFields: () => void;
  onSubmit: SubmitHandler<TFieldValues>;
};

export type MakeFormContextReturnType<TFieldValues> = [
  (props: FormContextProviderProps<TFieldValues>) => JSX.Element,
  () => FormContextProps<TFieldValues>,
];

export function makeFormContext<TFieldValues>(): MakeFormContextReturnType<TFieldValues> {
  const FormContext = createContext<FormContextProps<TFieldValues> | null>(null);

  function FormProvider({
    useFormProps,
    onSubmit,
    isFormDisabled = false,
    isFormLoading = false,
    fieldsDisabled = [],
    children,
  }: FormContextProviderProps<TFieldValues>) {
    const methods = useRhfForm<TFieldValues>(useFormProps);
    const [disabledFields, setDisabledFields] = useState<(keyof TFieldValues)[]>(fieldsDisabled);

    const isFormFieldDisabled = useCallback(
      (name: string) => disabledFields.some(key => key === name),
      [disabledFields],
    );
    const removeDisabledField = (fields: keyof TFieldValues | (keyof TFieldValues)[]) => {
      const fieldList = Array.isArray(fields) ? fields : [fields];
      setDisabledFields(allFields => allFields.filter(key => !fieldList.includes(key)));
    };
    const clearAllDisabledFields = () => {
      setDisabledFields([]);
    };

    const getValues = useMemo(
      (): FormContextProps<TFieldValues> => ({
        ...methods,
        disabledFields,
        setDisabledFields,
        isFormDisabled,
        isFormLoading,
        isFormFieldDisabled,
        removeDisabledField,
        clearAllDisabledFields,
        onSubmit,
      }),
      [onSubmit, disabledFields, isFormDisabled, isFormFieldDisabled, isFormLoading, methods],
    );

    return (
      <FormContext.Provider value={getValues}>
        <DismissKeyBoard>{children}</DismissKeyBoard>
      </FormContext.Provider>
    );
  }

  const useForm = () => {
    const context = useContext(FormContext);

    if (!context) {
      throw new Error('[ERROR]: `useForm()` can only be called in a <FormContextProvider />');
    }

    return context;
  };

  return [FormProvider, useForm];
}
