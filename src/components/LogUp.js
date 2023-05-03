import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../utils/mutations";
import AuthService from "../utils/auth";

import {
  LandingPageContainer,
  Title,
  Button,
  ButtonContainer,
  FormContainer,
  Input,
  Label,
  FormTitle,
  Form,
  SubmitButton,
} from "./styled/LogUp.styled";

const LogUp = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [createUser, { loading, error: mutationError }] = useMutation(
    CREATE_USER,
    {
      onCompleted({ createUser }) {
        AuthService.login(createUser.token); // call the login function with the token
        sessionStorage.setItem("_id", createUser.user._id);
      },
      onError(error) {
        setError(error.message);
      },
    }
  );

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowSignUpForm(false);
  };

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
    setShowLoginForm(false);
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    AuthService.login(AuthService.signToken({ username, _id: "user-id" }));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    createUser({ variables: { username, password } });
  };
  return (
    <LandingPageContainer>
      <Title>Welcome to MyDND</Title>
      <ButtonContainer>
        <Button onClick={handleLoginClick}>Login</Button>
        <Button onClick={handleSignUpClick}>Sign Up</Button>
      </ButtonContainer>
      {showLoginForm && (
        <FormContainer>
          <FormTitle>Login</FormTitle>
          <Form onSubmit={handleLoginSubmit}>
            <Label htmlFor="username">Username:</Label>
            <Input type="username" id="username" name="username" />

            <Label htmlFor="password">Password:</Label>
            <Input type="password" id="password" name="password" />

            <SubmitButton type="submit">Login</SubmitButton>
          </Form>
        </FormContainer>
      )}
      {showSignUpForm && (
        <FormContainer>
          <FormTitle>Sign Up</FormTitle>
          <Form onSubmit={handleSignUpSubmit}>
            <Label htmlFor="username">Username:</Label>
            <Input
              type="username"
              id="username"
              name="username"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            />

            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              id="password"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />

            <Label htmlFor="confirmPassword">Confirm Password:</Label>
            <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={(event) => setConfirmPassword(event.target.value)}
            value={confirmPassword}
          />

    <SubmitButton type="submit">Sign Up</SubmitButton>
    </Form>
   </FormContainer>
    )}
  </LandingPageContainer>
  );
  };

export default LogUp;