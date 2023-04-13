import React from "react";

import { 
  SpellsContainer,
  Title,
  SpellList,
  Spell,
  SpellName,
  SpellDetails
 } from "./styled/SpellsSection.styled";

const spells = [  { id: 1, name: "Fireball", level: 3, slots: 3, dc: 15 },  { id: 2, name: "Magic Missile", level: 1, slots: 2, dc: 12 },  { id: 3, name: "Cure Wounds", level: 1, slots: 3, dc: 12 }];

const SpellsSection = ({ id, name, level, slots, dc }) => {
  return (
    <SpellsContainer>
      <Title>Spells</Title>
      <SpellList>
        {spells.map((spell) => (
          <Spell key={spell.id}>
            <SpellName>{spell.name}</SpellName>
            <SpellDetails>
              <p>Level {spell.level}</p>
              <p>Slots {spell.slots}</p>
              <p>DC {spell.dc}</p>
            </SpellDetails>
          </Spell>
        ))}
      </SpellList>
    </SpellsContainer>
  );
};

export default SpellsSection;