import * as React from 'react';
import styled from 'styled-components';

import Title from '@App/components/Title';
import SubTitle from '@App/components/SubTitle';
import Bar from '@App/components/Bar';

interface MonthChart {
    data: [];
    dataMoods: [];
    allMonths: [];
    eachMonth: [];
    month: string;
}

const MonthChartContainer = styled.div`
    border: 1px solid #DDDDDD;
    padding: 10px;
    box-shadow: 3px 3px 3px #DDDDDD;
`;

export const MonthChart: React.FC<MonthChart> = (props) => {
    let monthData = props.data.filter((observation: any) => {
        return props.month === 'April' ? observation.timestamp.includes('2019-04') :
            props.month === 'May' ? observation.timestamp.includes('2019-05') : null;
    });
    let monthAllMoods = monthData.map((observation: any) => observation.mood);

    console.log('monthData:', monthData);
    console.log('MonthModos:', monthAllMoods);

    return (
        <MonthChartContainer>
            <Title>Observed moods for {props.month}</Title>
            <SubTitle>Out of {monthAllMoods.length} observations:</SubTitle>
            {
                props.dataMoods.map(dataMood => {
                    let eachMood = monthAllMoods.filter(allMoods => allMoods === dataMood);
                    return (
                        <div key={dataMood}>
                            <SubTitle>{eachMood.length} observations were {dataMood}</SubTitle>
                            <Bar style={{width: `${eachMood.length * 5}px`}} mood={dataMood} />
                        </div>
                    );
                })
            }
        </MonthChartContainer>
    );
};

export default MonthChart;