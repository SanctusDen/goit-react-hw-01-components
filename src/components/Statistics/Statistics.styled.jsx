import styled from '@emotion/styled';

export const SectionStatistic = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:80px;
    margin-button:80px;

`;

export const TitleStatistics = styled.h2`
    font-size:20px;
    color:gray;

    margin-top: 20px;
    margin-bottom: 20px;
`;

export const ItemStatistics = styled.ul`
    display:flex;
    aligh-items:center;
    width:300px;
   
    flex-basis: calc((100% - 12px) / 4);
`;

export const StatList = styled.li`
    color: white;
    display: flex;
    width:100%;
    flex-direction: column;
    background-color: ${getRandomHexColor};
    border: 1.5px solid #111;
`;

export const LabelStatistics = styled.span`
    justify-content:center;
    display: flex;
`;

export const PercentageStatistics = styled.span`
    color:white;
    justify-content: center;
    display: flex;
    font-size:20px;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}