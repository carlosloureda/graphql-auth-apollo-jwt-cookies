import React, { useState } from "react";
import { navigate } from "@reach/router";

const url = "http://locahost:3000/login";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlenconded; char-set: UTF-8",
      },
      body: `email=${email}&password=${password}`,
    };

    try {
      const reponse = await fetch(url, options);
      if (!response.ok) {
        if (reponse.status === 404) {
          alert("Email not found, please retry");
        }
        if (reponse.status === 401) {
          alert("Email and password do not macth, please retry");
        }
      }
      const data = await reponse.json();
      if (data.success) {
        document.cookie = "token=" + data.token;
        navigate("/private-area");
      }
    } catch (error) {
      console.error("Error while fetching: ", error);
    }
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <p>
          Email:{" "}
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </p>
        <p>
          Password:{" "}
          <input type="text" onChange={(e) => setPassword(e.target.value)} />
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
      </form>
    </div>
  );
};

export default Form;
