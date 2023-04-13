import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #222;
  color: #fff;
`;

export const CharacterName = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const BasicInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

export const BasicInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

export const BasicInfoLabel = styled.span`
  margin-right: 5px;
`;