import styled from "styled-components";

export const LandingPageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222;
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: #fff;
  margin-bottom: 4rem;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #444;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 2rem;
  margin: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #666;
  }
`;


export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333333;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  width: 50%;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  margin-bottom: 1rem;
  width: 100%;
  background-color: #444444;
  color: #fff;

  &:focus {
    outline: none;
    box-shadow: 0 0 0.5rem #555555;
  }
`;

export const Label = styled.label`
  color: #fff;
  margin-bottom: 0.5rem;
`;

export const FormTitle = styled.h2`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SubmitButton = styled.button`
  background-color: #555555;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #666666;
  }
`;