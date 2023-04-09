import React from "react";
import {
  PlayerListContainer,
  PlayerListTitle,
  PlayerListTable,
  PlayerListTableRow,
  PlayerListNameData,
  PlayerListLinkData,
} from "./styled/PlayerList.styled";

const PlayerList = ({ players }) => {
  return (
    <PlayerListContainer>
      <PlayerListTitle>Player List</PlayerListTitle>
      <PlayerListTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Inventory</th>
            <th>Stats</th>
          </tr>
        </thead>
        {/* <tbody>
          {players.map((player) => (
            <PlayerListTableRow key={player.id}>
              <PlayerListNameData>{player.name}</PlayerListNameData>
              <PlayerListLinkData>
                <a href={`/inventory/${player.id}`}>View Inventory</a>
              </PlayerListLinkData>
              <PlayerListLinkData>
                <a href={`/stats/${player.id}`}>View Stats</a>
              </PlayerListLinkData>
            </PlayerListTableRow>
          ))}
        </tbody> */}
      </PlayerListTable>
    </PlayerListContainer>
  );
};

export default PlayerList;