import { React, useState } from "react";

import { Link } from "react-router-dom";

import { 
  Form, 
  CreateNewButton, 
  Input, 
  Label, 
  FormTitle, 
  FormContainer, 
  Button } from "./styled/CharacterCreation.styled";

const CharacterCreation = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [race, setRace] = useState('');
    const [classType, setClassType] = useState('');
    const [strength, setStrength] = useState('');
    const [dexterity, setDexterity] = useState('');
    const [constitution, setConstitution] = useState('');
    const [intelligence, setIntelligence] = useState('');
    const [wisdom, setWisdom] = useState('');
    const [charisma, setCharisma] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit({
        name,
        race,
        classType,
        stats: {
          strength,
          dexterity,
          constitution,
          intelligence,
          wisdom,
          charisma,
        },
      });
    };
  
    return (
    <FormContainer>
      <FormTitle>Create a new character</FormTitle>
        <Link to="/home">
          <CreateNewButton>
            Back
          </CreateNewButton>
        </Link>

      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
  
        <Label htmlFor="race">Race:</Label>
        <Input
          type="text"
          id="race"
          name="race"
          value={race}
          onChange={(event) => setRace(event.target.value)}
        />
  
        <Label htmlFor="classType">Class:</Label>
        <Input
          type="text"
          id="classType"
          name="classType"
          value={classType}
          onChange={(event) => setClassType(event.target.value)}
        />
  
        <Label htmlFor="strength">Strength:</Label>
        <Input
          type="number"
          id="strength"
          name="strength"
          value={strength}
          onChange={(event) => setStrength(event.target.value)}
        />
  
        <Label htmlFor="dexterity">Dexterity:</Label>
        <Input
          type="number"
          id="dexterity"
          name="dexterity"
          value={dexterity}
          onChange={(event) => setDexterity(event.target.value)}
        />
  
        <Label htmlFor="constitution">Constitution:</Label>
        <Input
          type="number"
          id="constitution"
          name="constitution"
          value={constitution}
          onChange={(event) => setConstitution(event.target.value)}
        />
  
        <Label htmlFor="intelligence">Intelligence:</Label>
        <Input
          type="number"
          id="intelligence"
          name="intelligence"
          value={intelligence}
          onChange={(event) => setIntelligence(event.target.value)}
          />
          <Label htmlFor="wisdom">Wisdom:</Label>
        <Input
            type="number"
            id="wisdom"
            name="wisdom"
            value={wisdom}
            onChange={(event) => setWisdom(event.target.value)}
        />

        <Label htmlFor="charisma">Charisma:</Label>
        <Input
            type="number"
            id="charisma"
            name="charisma"
            value={charisma}
            onChange={(event) => setCharisma(event.target.value)}
        />

  <Button type="submit">Create Character</Button>
</Form>
</FormContainer>
);
};

export default CharacterCreation;