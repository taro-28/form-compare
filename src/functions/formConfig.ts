type InputValidationProps = Pick<
    JSX.IntrinsicElements["input"],
    "required" | "min" | "max" | "pattern" | "maxLength" | "minLength" | 'type'
>;

type FormConfigProps<T extends { [key: string]: InputValidationProps }> = {
    fields: T;
    defaultValues?: {[K in keyof T]: any};
};

export const formConfig = <T extends { [key: string]: InputValidationProps }>({
    fields,
    defaultValues,
}: FormConfigProps<T>): {
    fieldProps: {
        [K in keyof T]: {
            name: K;
            defaultValue: any;
        } & InputValidationProps;
    };
} => {
    const fieldProps = Object.entries(fields).reduce(
        (acc, [name, props]) => ({
            ...acc,
            [name]: {
                name,
                defaultValue: defaultValues?.[name],
                ...props,
            },
        }),
        {} as any
    );

    return {
        fieldProps,
    };
};