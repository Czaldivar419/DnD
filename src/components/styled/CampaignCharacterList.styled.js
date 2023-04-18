import styled from 'styled-components';

export const CharacterListContainer = styled.div`
  background-color: #111;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CharacterListTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const CharacterListTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
`;

export const CharacterListTableRow = styled.tr`
  border-bottom: 1px solid #444;
`;

export const CharacterListNameData = styled.td`
  padding: 10px;
  font-size: 18px;
  text-align: center;
`;

export const CharacterListClassData = styled.td`
  padding: 10px;
  font-size: 18px;
  text-align: center;
`;

export const CharacterListLevelData = styled.td`
  padding: 10px;
  font-size: 18px;
  text-align: center;
`;

export const CharacterListInventoryData = styled.td`
  padding: 10px;
  font-size: 18px;
  text-align: center;
`;

export const CharacterListHPData = styled.td`
  padding: 10px;
  font-size: 18px;
  text-align: center;
`;

export const CharacterInventoryContainer = styled.div`
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 10px;
`;

export const CharacterInventoryTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CharacterInventoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const CharacterInventoryItem = styled.li`
  margin-bottom: 5px;
`;

export const CharacterSpellsContainer = styled.div`
  margin-top: 20px;
  border: 1px solid black;
  padding: 10px;
`;

export const CharacterSpellsTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CharacterSpellsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CharacterSpellsItem = styled.li`
  margin-bottom: 5px;
`;
