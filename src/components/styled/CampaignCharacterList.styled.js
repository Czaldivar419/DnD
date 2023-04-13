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
