"use client";

import { Input } from "@/components/Input";
import { formConfig } from "@/app/server-action/browser-validation/formConfig";
import { submit } from "./submit";

export const Form = () => {
  const { fieldProps } = formConfig({
    fields: {
      name: { required: true },
      age: {
        min: 0,
        max: 100,
        type: "number",
        validate: (value) => Number(value) === 30 && "30 is not allowed",
      },
      email: { type: "email" },
      id: { pattern: "^taro-id-.+" },
    },
    defaultValues: { name: "John", age: 20, email: "", id: "" },
  });

  return (
    <form className="mt-2 space-y-4" action={submit}>
      <div>
        <label>
          name
          <Input {...fieldProps.name} />
        </label>
      </div>
      <div>
        <label>
          age
          <Input {...fieldProps.age} />
        </label>
      </div>
      <div>
        <label>
          email
          <Input {...fieldProps.email} />
        </label>
      </div>
      <div>
        <label>
          id
          <Input {...fieldProps.id} />
        </label>
      </div>

      <button className="border rounded-md border-gray-300 px-4 py-2 font-bold">
        Submit
      </button>
    </form>
  );
};
