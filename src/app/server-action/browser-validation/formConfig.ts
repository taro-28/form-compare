type InputValidationProps = Pick<
  JSX.IntrinsicElements["input"],
  "required" | "min" | "max" | "pattern" | "maxLength" | "minLength" | "type"
>;

type InputHandlerProps = Pick<JSX.IntrinsicElements["input"], "onChange">;

type Fields = {
  [key: string]: InputValidationProps & {
    validate?: (value: string) => string | undefined | null | false;
  };
};

type FormConfigProps<T extends Fields> = {
  fields: T;
  defaultValues?: { [K in keyof T]: any };
};
type FormConfigReturnType<T extends Fields> = {
  fieldProps: {
    [K in keyof T]: {
      name: K;
      defaultValue: any;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    } & InputValidationProps &
      InputHandlerProps;
  };
};

export const formConfig = <T extends Fields>({
  fields,
  defaultValues,
}: FormConfigProps<T>): FormConfigReturnType<T> => {
  const fieldProps: FormConfigReturnType<T>["fieldProps"] = Object.entries(
    fields
  ).reduce(
    (acc, [name, { validate, ...props }]) => ({
      ...acc,
      [name]: {
        ...props,
        name,
        defaultValue: defaultValues?.[name],
        onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => {
          if (validate) target.setCustomValidity(validate(target.value) || "");
        },
      },
    }),
    {} as any
  );

  return {
    fieldProps,
  };
};
