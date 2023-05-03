import React from "react";
import { Link } from "react-router-dom";


import {
  OptionsContainer,
  LeaveButton,
  CharacterListButton
} from "./styled/CampaignOptions.styled";

import { CreateNewButton } from "./styled/CampaignList.styled";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const PlusIcon = () => <FontAwesomeIcon icon={faPlus} className="icon" />;

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
      <Link to="/createcharacter">
          <CreateNewButton>
            <PlusIcon />
            Create New
          </CreateNewButton>
        </Link>
    </OptionsContainer>
  );
};

export default CampaignOptions;