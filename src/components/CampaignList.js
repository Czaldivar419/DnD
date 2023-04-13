import React from 'react';

import { Link } from 'react-router-dom';

import { 
  CampaignListContainer, 
  CampaignListTable, 
  CampaignListTableData, 
  CampaignListTitle,
  CampaignListTile, 
  CampaignListCard, 
  CreateNewButton } from './styled/CampaignList.styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const PlusIcon = () => <FontAwesomeIcon icon={faPlus} className="icon" />;

const campaigns = [
  {
    id: 1,
    name: "Campaign One",
    description: "A fantastical adventure in a magical land",
    dm: "John Doe"
  },
  {
    id: 2,
    name: "Campaign Two",
    description: "A sci-fi journey across the universe",
    dm: "Jane Smith"
  },
  {
    id: 3,
    name: "Campaign Three",
    description: "A horror story set in a haunted house",
    dm: "Bob Johnson"
  }
];

const CampaignList = () => {
  return (
    <CampaignListContainer>
      <CampaignListTitle>Campaigns</CampaignListTitle>
        <Link to="/createcampaign">
          <CreateNewButton>
            <PlusIcon />
            Create New
          </CreateNewButton>
        </Link>
      <CampaignListCard>
        {campaigns.map((campaign) => (
          <Link to={`/campaign/${campaign.id}`} key={campaign.id}>
            <CampaignListTile>
              <CampaignListTable>
                <tbody>
                  <tr>
                    <CampaignListTableData>{campaign.name}</CampaignListTableData>
                  </tr>
                </tbody>
              </CampaignListTable>
            </CampaignListTile>
          </Link>
        ))}
      </CampaignListCard>
    </CampaignListContainer>
  );
};

export default CampaignList;