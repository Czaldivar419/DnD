import React from "react";
import { StatsContainer, StatItem, StatLabel, StatValue } from "./styled/CharacterStats.styled";

const stats = {
  strength: 18,
  dexterity: 14,
  constitution: 16,
  intelligence: 10,
  wisdom: 12,
  charisma: 8,
};

const CharacterStats = ({ strength, dexterity, constitution, intelligence, wisdom, charisma }) => {


  return (
    <StatsContainer>
      <StatItem>
        <StatLabel>Strength:</StatLabel>
        <StatValue>{stats.strength}</StatValue>
      </StatItem>
      <StatItem>
        <StatLabel>Dexterity:</StatLabel>
        <StatValue>{stats.dexterity}</StatValue>
      </StatItem>
      <StatItem>
        <StatLabel>Constitution:</StatLabel>
        <StatValue>{stats.constitution}</StatValue>
      </StatItem>
      <StatItem>
        <StatLabel>Intelligence:</StatLabel>
        <StatValue>{stats.intelligence}</StatValue>
      </StatItem>
      <StatItem>
        <StatLabel>Wisdom:</StatLabel>
        <StatValue>{stats.wisdom}</StatValue>
      </StatItem>
      <StatItem>
        <StatLabel>Charisma:</StatLabel>
        <StatValue>{stats.charisma}</StatValue>
      </StatItem>
      {/* Other relevant information can be added here */}
    </StatsContainer>
  );
};

export default CharacterStats;