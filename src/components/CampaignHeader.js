import React from "react";

import { HeaderContainer, HeaderTitle, HeaderDescription, HeaderDM } from "./styled/CampaignHeader.styled"; 

const campaign = {
    name: "The Quest for the Lost City",
    description: "Join us in an epic adventure to find the lost city of Atlantis.",
    dm: "John Smith"
  };

const CampaignHeader = ({ name, description, dm }) => {
    return (
      <HeaderContainer>
        <HeaderTitle>{campaign.name}</HeaderTitle>
        <HeaderDescription>{campaign.description}</HeaderDescription>
        <HeaderDM>DM: {campaign.dm}</HeaderDM>
      </HeaderContainer>
    );
  };
  
  export default CampaignHeader;
  