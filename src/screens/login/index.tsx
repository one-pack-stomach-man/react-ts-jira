import React from "react";
import { useMount } from "utils/index";

// const url = process.env.API_URL;
const url = "http://localhost:3003";

export const LoginScreen = () => {
  // name: "",
  // personId: "",

  useMount(() => {});

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const eles = evt.currentTarget.elements;
    const name = (eles[0] as HTMLInputElement).value;
    const password = (eles[1] as HTMLInputElement).value;
    const param = {
      name,
      password,
    };
    //   const name = evt.target[0].value;
    fetch(`${url}/login`, {
      body: JSON.stringify(param),
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    }).then(async (response) => {});
  };

  return (
    <form onSubmit={(evt) => handleSubmit(evt)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id={"name"} />
      </div>
      <div>
        <label htmlFor="password">password:</label>
        <input type="password" id={"password"} />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};
