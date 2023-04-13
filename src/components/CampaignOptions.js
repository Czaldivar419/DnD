import React from "react";

import {
  OptionsContainer,
  LeaveButton,
  CharacterListButton,
  CreateCharacterButton,
} from "./styled/CampaignOptions.styled";

const CampaignOptions = ({ onLeave, onViewCharacters, onCreateCharacter }) => {
  return (
    <OptionsContainer>
      <LeaveButton onClick={onLeave}>Leave Campaign</LeaveButton>
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