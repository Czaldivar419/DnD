import React, { useState } from "react";
import {
  DMControlContainer,
  DMControlTitle,
  DMControlForm,
  DMControlLabel,
  DMControlInput,
  DMControlButton,
} from "./styled/DmControl.styled";

const DmControl = ({ characters, updateCharacter }) => {
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [itemToAdd, setItemToAdd] = useState("");
  const [statToChange, setStatToChange] = useState("");
  const [newStatValue, setNewStatValue] = useState("");

  const handleSelectChange = (e) => {
    setSelectedCharacter(e.target.value);
  };

  const handleItemToAddChange = (e) => {
    setItemToAdd(e.target.value);
  };

  const handleStatToChangeChange = (e) => {
    setStatToChange(e.target.value);
  };

  const handleNewStatValueChange = (e) => {
    setNewStatValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedChar = characters.find((char) => char.id === selectedCharacter);

    if (selectedChar) {
      if (itemToAdd) {
        const newItem = { id: Date.now(), name: itemToAdd };
        const updatedInventory = [...selectedChar.inventory, newItem];
        updateCharacter(selectedCharacter, { inventory: updatedInventory });
      }

      if (statToChange && newStatValue) {
        updateCharacter(selectedCharacter, { [statToChange]: newStatValue });
      }
    }

    setSelectedCharacter("");
    setItemToAdd("");
    setStatToChange("");
    setNewStatValue("");
  };

  return (
    <DMControlContainer>
      <DMControlTitle>DM Control Panel</DMControlTitle>
      <DMControlForm onSubmit={handleSubmit}>
        <DMControlLabel>
          Select a character:
          <select value={selectedCharacter} onChange={handleSelectChange}>
            {/* <option value="">Choose a character</option>
            {characters.map((char) => (
              <option key={char.id} value={char.id}>
                {char.name}
              </option>
            ))} */}
          </select>
        </DMControlLabel>
        <DMControlLabel>
          Add an item to inventory:
          <DMControlInput
            type="text"
            placeholder="Item Name"
            value={itemToAdd}
            onChange={handleItemToAddChange}
          />
        </DMControlLabel>
        <DMControlLabel>
          Change a stat:
          <select value={statToChange} onChange={handleStatToChangeChange}>
            <option value="">Choose a stat</option>
            <option value="strength">Strength</option>
            <option value="dexterity">Dexterity</option>
            <option value="constitution">Constitution</option>
            <option value="intelligence">Intelligence</option>
            <option value="wisdom">Wisdom</option>
            <option value="charisma">Charisma</option>
          </select>
          <DMControlInput
            type="number"
            placeholder="New Value"
            value={newStatValue}
            onChange={handleNewStatValueChange}
          />
        </DMControlLabel>
        <DMControlButton type="submit">Submit</DMControlButton>
      </DMControlForm>
    </DMControlContainer>
  );
};

export default DmControl;