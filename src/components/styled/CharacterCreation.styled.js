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