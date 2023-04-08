import React from 'react';
import { CampaignListContainer, CampaignListTable, CampaignListTableData, 
CampaignListTitle, CampaignListTableHeader} from './styled/CampaignList.styled';

const CampaignList = (props) => {
    const { campaigns } = props;
  
    return (
      <CampaignListContainer>
        <CampaignListTitle>Campaign List</CampaignListTitle>
        <CampaignListTable>
          <thead>
            <tr>
              <CampaignListTableHeader>Name</CampaignListTableHeader>
              <CampaignListTableHeader>Description</CampaignListTableHeader>
              <CampaignListTableHeader>DM</CampaignListTableHeader>
            </tr>
          </thead>
          {/* <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.id}>
                <CampaignListTableData>{campaign.name}</CampaignListTableData>
                <CampaignListTableData>{campaign.description}</CampaignListTableData>
                <CampaignListTableData>{campaign.dm}</CampaignListTableData>
              </tr>
            ))}
          </tbody> */}
        </CampaignListTable>
      </CampaignListContainer>
    );
  };
  
  export default CampaignList;