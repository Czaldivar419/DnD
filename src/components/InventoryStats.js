import React from "react";

import { 
  InventorySection,
  InventoryTitle,
  InventoryList,
  InventoryListItem
} from "./styled/InventoryStats.styled";

const inventory = [
    { id: 1, name: 'Sword', quantity: 1 },
    { id: 2, name: 'Shield', quantity: 1 },
    { id: 3, name: 'Potion', quantity: 5 },
    { id: 4, name: 'Rope', quantity: 2 },
    { id: 5, name: 'Grappling hook', quantity: 1 },
  ];

const InventoryStats= ({ id, name, quantity }) => {
  return (
    <InventorySection>
      <InventoryTitle>Inventory</InventoryTitle>
      <InventoryList>
        {inventory.map((item) => (
          <InventoryListItem key={item.id}>
            {item.name} ({item.quantity})
          </InventoryListItem>
        ))}
      </InventoryList>
    </InventorySection>
  );
};

export default InventoryStats;