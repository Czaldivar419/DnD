import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { 
  CampaignListContainer, 
  CampaignListTable, 
  CampaignListTableData, 
  CampaignListTitle,
  CampaignListTile, 
  CampaignListCard, 
  CreateNewButton } from './styled/CampaignList.styled';
import { QUERY_CAMPAIGNS } from '../utils/queries';

const PlusIcon = () => <FontAwesomeIcon icon={faPlus} className="icon" />;

const CampaignList = () => {
  const { loading, error, data } = useQuery(QUERY_CAMPAIGNS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const campaigns = data.campaigns;
  console.log(campaigns);

  const handleCampaignClick = (campaignId) => {
    sessionStorage.setItem('campaignId', JSON.stringify(campaignId));
    console.log(campaignId);
  };


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
            <CampaignListTile onClick={() => handleCampaignClick(campaign.campaignId)}>
              <CampaignListTable>
                <tbody>
                  <tr>
                    <CampaignListTableData>{campaign.campaignName}</CampaignListTableData>
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