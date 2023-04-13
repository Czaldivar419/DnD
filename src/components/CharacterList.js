import React from "react";

import { Link } from "react-router-dom";

import { 
  CharacterListContainer, 
  CharacterListTable, 
  CharacterListTableData, 
  CharacterListTitle,
  CharacterListTile, 
  CharacterListCard, 
  CreateNewButton } from './styled/CharacterList.styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const PlusIcon = () => <FontAwesomeIcon icon={faPlus} className="icon" />;

const characters = [
  {
    id: 1,
    name: "Gandalf",
    race: "Maia",
    class: "Wizard",
    stats: {
      strength: 10,
      dexterity: 12,
      constitution: 8,
      intelligence: 18,
      wisdom: 20,
      charisma: 16
    }
  },
  {
    id: 2,
    name: "Aragorn",
    race: "Human",
    class: "Ranger",
    stats: {
      strength: 18,
      dexterity: 14,
      constitution: 16,
      intelligence: 12,
      wisdom: 14,
      charisma: 16
    }
  },
  {
    id: 3,
    name: "Legolas",
    race: "Elf",
    class: "Ranger",
    stats: {
      strength: 14,
      dexterity: 20,
      constitution: 12,
      intelligence: 10,
      wisdom: 16,
      charisma: 14
    }
  }
];

const CharacterList = () => {
  return (
    <CharacterListContainer>
      <CharacterListTitle>Characters</CharacterListTitle>
      <Link to="/CreateCharacter">
        <CreateNewButton>
          <PlusIcon />
          Create New
        </CreateNewButton>
      </Link>
      <CharacterListCard>
        {characters.map((character) => (
          <Link to={`/character/${character.id}`} key={character.id}>
            <CharacterListTile>
              <CharacterListTable>
                <tbody>
                  <tr>
                    <CharacterListTableData>{character.name}</CharacterListTableData>
                  </tr>
                </tbody>
              </CharacterListTable>
            </CharacterListTile>
          </Link>
        ))}
      </CharacterListCard>
    </CharacterListContainer>
  );
};
  
export default CharacterList;