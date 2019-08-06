import * as React from 'react';
import styled from 'styled-components';

import Title from '@App/components/Title';
import SubTitle from '@App/components/SubTitle';
import Bar from '@App/components/Bar';

interface ChartProps {
    allMoods: [];
    dataMoods: [];
    eachMonth: [];
}

const MoodChartContainer = styled.div`
    border: 1px solid #DDDDDD;
    box-shadow: 3px 3px 3px #DDDDDD;
    padding: 10px;

    &:hover { animation: pulse 5s infinite;}
    
    @keyframes pulse {
        0% { transform: scale(1) }
        50% { transform: scale(1.03) }
        100% { transform: scale(1) }
    }
`;

export const MoodChart: React.FC<ChartProps> = (props) => {
    
    return (
        <MoodChartContainer>
            <Title>Total observed moods</Title>
            <SubTitle>Out of {props.allMoods.length} observations: </SubTitle>
            {props.dataMoods.map(dataMood => {
                let eachMood = props.allMoods.filter(mood => mood === dataMood);
                return (
                    <div key={dataMood}>
                        <SubTitle>{eachMood.length} mood observations were {dataMood}</SubTitle>
                        <Bar style={{ width: `${eachMood.length * 3.5}px` }} mood={dataMood} />
                    </div>
                );
            })}
        </MoodChartContainer>
    );
};

export default MoodChart;