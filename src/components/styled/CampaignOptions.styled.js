import styled from "styled-components";

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
`;

export const OptionButton = styled.button`
  background-color: #222;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #444;
  }
`;

export const LeaveButton = styled(OptionButton)`
  margin-right: 10px;
`;

export const CharacterListButton = styled(OptionButton)`
  margin-right: 10px;
`;

export const CreateCharacterButton = styled(OptionButton)`
  margin-right: 0;
`;