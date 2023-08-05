"use server";

export const submit = async (data: FormData) => {
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
