import { formConfig } from "@/functions/formConfig";
import { Input } from "./Input";

const submit = async (data: FormData) => {
    "use server";
    const name = data.get("name");
    const age = data.get("age");
    const email = data.get("email");
    const id = data.get("id");
    console.log({
        name,
        age,
        email,
        id,
    });
};

const withValidate = (action: any) => {
    return async (data: any) => {
        "use server";
        if (data.get("age") === "30") throw new Error("Invalid input.");
        return action(data);
    };
};

export default function Home() {
    const { fieldProps } = formConfig({
        fields: {
            name: { required: true },
            age: { required: true, min: 0, max: 100, type: "number" },
            email: { required: true, type: "email", pattern: "^taro-id-.+" },
            id: { required: true },
        },
        defaultValues: { name: "John", age: 20, email: "", id: "" },
    });

    return (
        <main className="">
            <h1 className="text-2xl font-bold">Server Action</h1>
            <form action={withValidate(submit)} className="mt-2 space-y-4">
                <div>
                    <label>
                        name
                        <input
                            className="border border-gray-300 ml-2"
                            {...fieldProps.name}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        age
                        <input
                            className="border border-gray-300 ml-2"
                            {...fieldProps.age}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        email
                        <input
                            className="border border-gray-300 ml-2"
                            {...fieldProps.email}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        id
                        <Input
                            className="border border-gray-300 ml-2"
                            {...fieldProps.id}
                        />
                    </label>
                </div>

                <button className="border rounded-md border-gray-300 px-4 py-2 font-bold">
                    Submit
                </button>
            </form>
        </main>
    );
}
