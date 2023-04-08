import styled from 'styled-components';

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

export const FormLabel = styled.label`
  display: block;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
`;

export const FormTextarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;