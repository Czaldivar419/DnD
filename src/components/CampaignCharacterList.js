import React, { useState } from "react";
import {
  CharacterListContainer,
  CharacterListTitle,
  CharacterListTable,
  CharacterListTableRow,
  CharacterListNameData,
  CharacterListClassData,
  CharacterListLevelData,
  CharacterListHPData,
  CharacterInventoryContainer,
  CharacterInventoryTitle,
  CharacterInventoryList,
  CharacterInventoryItem,
  CharacterSpellsContainer,
  CharacterSpellsTitle,
  CharacterSpellsList,
  CharacterSpellsItem,
} from "./styled/CampaignCharacterList.styled";

const characters = [
  {
    id: 1,
    name: "Bicepius",
    class: "Barbarian",
    level: 12,
    inventory: ["Greatsword", "Javelins", "Chainmail Armor"],
    spells: ["Lol", "test", "Testing"],
    hp: 180,
  },
  {
    id: 2,
    name: "SS",
    class: "Druid",
    level: 11,
    inventory: ["Quarterstaff", "Sickle", "Leather Armor"],
    spells: ["Lol", "test", "Testing"],
    hp: 110,
  },
  {
    id: 3,
    name: "Shit Goblin",
    class: "Ranger",
    level: 12,
    inventory: ["Longbow", "Shortsword", "Studded Leather Armor"],
    spells: ["Lol", "test", "Testing"],
    hp: 130,
  },
];


const CampaignCharacterList = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (id) => {
    setSelectedCharacter(id === selectedCharacter ? null : id);
  };

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
            <CharacterListTableRow
              key={character.id}
              onClick={() => handleCharacterClick(character.id)}
              selected={character.id === selectedCharacter}
            >
              <CharacterListNameData>{character.name}</CharacterListNameData>
              <CharacterListClassData>{character.class}</CharacterListClassData>
              <CharacterListLevelData>{character.level}</CharacterListLevelData>
              <CharacterListHPData>{character.hp}</CharacterListHPData>
            </CharacterListTableRow>
          ))}
        </tbody>
      </CharacterListTable>
      {selectedCharacter && (
        <>
          <CharacterInventoryContainer>
            <CharacterInventoryTitle>
              {characters.find((c) => c.id === selectedCharacter).name}'s Inventory
            </CharacterInventoryTitle>
            <CharacterInventoryList>
              {characters
                .find((c) => c.id === selectedCharacter)
                .inventory.map((item) => (
                  <CharacterInventoryItem key={item}>{item}</CharacterInventoryItem>
                ))}
            </CharacterInventoryList>
          </CharacterInventoryContainer>
          <CharacterSpellsContainer>
            <CharacterSpellsTitle>
              {characters.find((c) => c.id === selectedCharacter).name}'s Spells
            </CharacterSpellsTitle>
            <CharacterSpellsList>
              {characters
                .find((c) => c.id === selectedCharacter)
                .spells.map((spell) => (
                  <CharacterSpellsItem key={spell}>{spell}</CharacterSpellsItem>
                ))}
            </CharacterSpellsList>
          </CharacterSpellsContainer>
        </>
      )}
    </CharacterListContainer>
  );
};

export default CampaignCharacterList;