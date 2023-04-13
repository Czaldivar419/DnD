import styled from 'styled-components';



export const CharacterListContainer = styled.div`
  background-color: #111;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const CharacterListTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const CharacterListCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
`;

export const CharacterListTile = styled.div`
  background-color: #222;
  border-radius: 10px;
  width: 33vw;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: calc(33.33% - 10px);
    height: 300px;
  }
`;

export const CharacterListTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const CharacterListTableHeader = styled.th`
  background-color: #222;
  border-bottom: 2px solid #fff;
`;

export const CharacterListTableData = styled.td`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #555;

  &:last-child {
    border-bottom: none;
  }
`;

export const CreateNewButton = styled.button`
  background-color: #fff;
  color: #111;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #eee;
  }

  .icon {
    margin-right: 5px;
  }
`;





