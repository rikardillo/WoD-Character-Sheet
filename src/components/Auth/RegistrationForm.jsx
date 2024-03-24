import React, { useState } from "react";
import styled from "styled-components";
import {
  container,
  hoverHighlight,
  inputStyles,
  mixinFlex,
} from "../../mixins/mixins";
import { Link } from "react-router-dom";

const StyledForm = styled.form`
  ${mixinFlex("column", "center", "center")}
  ${container}
  gap: .4rem;

  a {
    color: #82bded;
    text-decoration: none;
  }
`;

const StyledInput = styled.div`
  ${mixinFlex("column")}
  width: 100%;

  input {
    ${mixinFlex("", "center", "center")}
    ${hoverHighlight}
    ${inputStyles}
    padding: .6rem;
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 1.8rem;
  color: white;
  background-color: #373737;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #575757;
  }
`;

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Handle registration logic here
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Register new Account</h2>
      <StyledInput>
        <label for="username">Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </StyledInput>
      <StyledInput>
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </StyledInput>
      <StyledInput>
        <label for="password">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </StyledInput>
      <StyledButton type="submit">Register</StyledButton>
      <p>
        Already have an account? <a href="">Login</a> instead.
      </p>
    </StyledForm>
  );
}

export default RegistrationForm;
