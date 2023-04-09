import styled from "styled-components";

export const InventoryStatsContainer = styled.div`
  background-color: #111;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const InventoryTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const StatsTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const InventoryList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const InventoryItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const StatsTable = styled.table`
  border-collapse: collapse;
  margin-top: 20px;
`;

export const StatsTableHeader = styled.th`
  font-size: 18px;
  text-align: left;
  padding: 10px;
  background-color: #333;
  color: #fff;
`;

export const StatsTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #333;
  }
`;

export const StatsTableData = styled.td`
  font-size: 16px;
  padding: 10px;
`;