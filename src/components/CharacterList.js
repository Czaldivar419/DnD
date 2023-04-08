import React from "react";
import { CharacterListContainer, CharacterListTitle, CharacterListTable,
CharacterListTableHeader } from "./styled/CharacterList.styled";

const CharacterList = (props) => {
    const { characters } = props;
  
    return (
      <CharacterListContainer>
        <CharacterListTitle>Character List</CharacterListTitle>
        <CharacterListTable>
          <thead>
            <tr>
              <CharacterListTableHeader>Name</CharacterListTableHeader>
              <CharacterListTableHeader>Race</CharacterListTableHeader>
              <CharacterListTableHeader>Class</CharacterListTableHeader>
              <CharacterListTableHeader>Stats</CharacterListTableHeader>
            </tr>
          </thead>
          {/* <tbody>
            {characters.map((character) => (
              <tr key={character.id}>
                <CharacterListTableData>{character.name}</CharacterListTableData>
                <CharacterListTableData>{character.race}</CharacterListTableData>
                <CharacterListTableData>{character.class}</CharacterListTableData>
                <CharacterListTableData>{character.stats}</CharacterListTableData>
              </tr>
            ))}
          </tbody> */}
        </CharacterListTable>
      </CharacterListContainer>
    );
  };
  
  export default CharacterList;