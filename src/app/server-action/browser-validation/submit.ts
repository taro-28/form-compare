"use server";

export const submit = async (data: FormData) => {
  if (data.get("age") === "30") throw new Error("Invalid input.");
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
