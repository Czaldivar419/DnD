import React from "react";

import { InventoryStatsContainer, InventoryTitle, StatsTitle,
InventoryList, InventoryItem, StatsTable, StatsTableHeader,
StatsTableRow, StatsTableData } from "./styled/CharacterStats.styled";

const CharacterStats = ({ inventory, stats }) => {
    return (
      <InventoryStatsContainer>
        <InventoryTitle>Inventory</InventoryTitle>
        {/* <InventoryList>
          {inventory.map((item) => (
            <InventoryItem key={item.id}>{item.name}</InventoryItem>
          ))}
        </InventoryList> */}
        <StatsTitle>Stats</StatsTitle>
        <StatsTable>
          <thead>
            <tr>
              <StatsTableHeader>Stat</StatsTableHeader>
              <StatsTableHeader>Value</StatsTableHeader>
            </tr>
          </thead>
          <tbody>
            <StatsTableRow>
              {/* <StatsTableData>Strength</StatsTableData>
              <StatsTableData>{stats.strength}</StatsTableData>
            </StatsTableRow>
            <StatsTableRow>
              <StatsTableData>Dexterity</StatsTableData>
              <StatsTableData>{stats.dexterity}</StatsTableData>
            </StatsTableRow>
            <StatsTableRow>
              <StatsTableData>Constitution</StatsTableData>
              <StatsTableData>{stats.constitution}</StatsTableData>
            </StatsTableRow>
            <StatsTableRow>
              <StatsTableData>Intelligence</StatsTableData>
              <StatsTableData>{stats.intelligence}</StatsTableData>
            </StatsTableRow>
            <StatsTableRow>
              <StatsTableData>Wisdom</StatsTableData>
              <StatsTableData>{stats.wisdom}</StatsTableData>
            </StatsTableRow>
            <StatsTableRow>
              <StatsTableData>Charisma</StatsTableData>
              <StatsTableData>{stats.charisma}</StatsTableData> */}
            </StatsTableRow>
          </tbody>
        </StatsTable>
      </InventoryStatsContainer>
    );
  };
  
  export default CharacterStats;