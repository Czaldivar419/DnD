import React from "react";

import { 
    HeaderContainer, 
    CharacterName,
    BasicInfoContainer,
    BasicInfoItem,
    BasicInfoLabel
} from "./styled/CharacterHeader.styled";

const character = {
    name: "Gandalf",
    race: "Maia",
    charClass: "Wizard",
    level: 20,
    
  };
  
  const CharacterHeader = ({ name, race, class: charClass, level }) => {
    return (
      <HeaderContainer>
        <CharacterName>{character.name}</CharacterName>
        <BasicInfoContainer>
          <BasicInfoItem>
            <BasicInfoLabel>Race:</BasicInfoLabel>
            <span>{character.race}</span>
          </BasicInfoItem>
          <BasicInfoItem>
            <BasicInfoLabel>Class:</BasicInfoLabel>
            <span>{character.charClass}</span>
          </BasicInfoItem>
          <BasicInfoItem>
            <BasicInfoLabel>Level:</BasicInfoLabel>
            <span>{character.level}</span>
          </BasicInfoItem>
        </BasicInfoContainer>
        {/* Navigation bar can be added here */}
      </HeaderContainer>
    );
  };
  
  export default CharacterHeader;