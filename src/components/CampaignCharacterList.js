import React from "react";
import {
  CharacterListContainer,
  CharacterListTitle,
  CharacterListTable,
  CharacterListTableRow,
  CharacterListNameData,
  CharacterListClassData,
  CharacterListLevelData,
  CharacterListHPData,
} from "./styled/CampaignCharacterList.styled";

const characters = [
  {
    id: 1,
    name: "Bicepius",
    class: "Barbarian",
    level: 12,
    inventory: "Greatsword, Javelins, Chainmail Armor",
    hp: 180,
  },
  {
    id: 2,
    name: "SS",
    class: "Druid",
    level: 11,
    inventory: "Quarterstaff, Sickle, Leather Armor",
    hp: 110,
  },
  {
    id: 3,
    name: "Shit Goblin",
    class: "Ranger",
    level: 12,
    inventory: "Longbow, Shortsword, Studded Leather Armor",
    hp: 130,
  },
];

const CampaignCharacterList = () => {
  return (
    <CharacterListContainer>
      <CharacterListTitle>Character List</CharacterListTitle>
      <CharacterListTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Level</th>
            <th>HP</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            <CharacterListTableRow key={character.id}>
              <CharacterListNameData>{character.name}</CharacterListNameData>
              <CharacterListClassData>{character.class}</CharacterListClassData>
              <CharacterListLevelData>{character.level}</CharacterListLevelData>
              <CharacterListHPData>{character.hp}</CharacterListHPData>
            </CharacterListTableRow>
          ))}
        </tbody>
      </CharacterListTable>
    </CharacterListContainer>
  );
};

export default CampaignCharacterList;