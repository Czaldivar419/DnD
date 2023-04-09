import styled from 'styled-components';

export const PlayerListContainer = styled.div`
  background-color: #111;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PlayerListTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const PlayerListTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
`;

export const PlayerListTableRow = styled.tr`
  border-bottom: 1px solid #444;
`;

export const PlayerListNameData = styled.td`
  padding: 10px;
  font-size: 18px;
  text-align: center;
`;

export const PlayerListLinkData = styled.td`
  padding: 10px;
  text-align: center;

  a {
    color: #fff;
    text-decoration: none;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 16px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #fff;
      color: #111;
    }
  }
`;