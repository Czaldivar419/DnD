
import styled from 'styled-components';

export const CampaignListContainer = styled.div`
  background-color: #111;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const CampaignListTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const CampaignListTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const CampaignListTableHeader = styled.th`
  background-color: #222;
  border-bottom: 2px solid #fff;
`;

export const CampaignListTableData = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #555;

  &:last-child {
    border-bottom: none;
  }
`;