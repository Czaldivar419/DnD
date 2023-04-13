import styled from "styled-components";

export const SpellsContainer = styled.section`
  background-color: #222;
  color: #fff;
  padding: 20px;
`;

export const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const SpellList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Spell = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const SpellName = styled.p`
  font-size: 20px;
  margin-right: 12px;
`;

export const SpellDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  text-align: right;

  p {
    margin: 0;
    margin-bottom: 4px;
  }
`;