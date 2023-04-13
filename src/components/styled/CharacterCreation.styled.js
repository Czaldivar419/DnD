import styled from 'styled-components';

export const Form = styled.form`
  background-color: #111;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div`
  background-color: #111;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
  background-color: #333;
  color: #fff;
`;

export const Label = styled.label`
  display: block;
  font-size: 18px;
  margin-bottom: 10px;
  color: #fff;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;

export const CreateNewButton = styled.button`
  background-color: #fff;
  color: #111;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #eee;
  }
  `;