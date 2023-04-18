import React from "react";
import { Link } from "react-router-dom";

import {
  OptionsContainer,
  LeaveButton,
  CharacterListButton,
  CreateCharacterButton,
} from "./styled/CampaignOptions.styled";

const CampaignOptions = ({ onLeave, onViewCharacters, onCreateCharacter }) => {
  return (
    <OptionsContainer>
      <Link to ="/home">
      <LeaveButton>
            Back
          </LeaveButton>
        </Link>
      <CharacterListButton onClick={onViewCharacters}>
        View Character List
      </CharacterListButton>
      <CreateCharacterButton onClick={onCreateCharacter}>
        Create New Character
      </CreateCharacterButton>
    </OptionsContainer>
  );
};

export default CampaignOptions;