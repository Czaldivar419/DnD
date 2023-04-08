import React, { useState } from 'react';

import { FormContainer, FormTitle, FormLabel, FormInput, 
FormTextarea, FormButton } from './styled/CampaignCreation.styled';

const CampaignCreation = (props) => {
    const [campaignName, setCampaignName] = useState('');
    const [campaignDescription, setCampaignDescription] = useState('');
    const [dmName, setDMName] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Do something with the campaign data, such as send it to the server or update the state of the parent component.
      const campaignData = {
        campaignName,
        campaignDescription,
        dmName
      };
  
      console.log(campaignData);
    };
  
    return (
      <FormContainer>
        <FormTitle>Create a new campaign</FormTitle>
        <form onSubmit={handleSubmit}>
          <FormLabel htmlFor="campaignName">Campaign Name</FormLabel>
          <FormInput
            type="text"
            id="campaignName"
            name="campaignName"
            value={campaignName}
            onChange={(event) => setCampaignName(event.target.value)}
            required
          />
  
          <FormLabel htmlFor="campaignDescription">Campaign Description</FormLabel>
          <FormTextarea
            id="campaignDescription"
            name="campaignDescription"
            value={campaignDescription}
            onChange={(event) => setCampaignDescription(event.target.value)}
            required
          />
  
          <FormLabel htmlFor="dmName">DM Name</FormLabel>
          <FormInput
            type="text"
            id="dmName"
            name="dmName"
            value={dmName}
            onChange={(event) => setDMName(event.target.value)}
            required
          />
  
          <FormButton type="submit">Create Campaign</FormButton>
        </form>
      </FormContainer>
    );
  };
  
  export default CampaignCreation;