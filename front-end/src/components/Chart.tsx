import * as React from 'react';
import Title from '@App/components/Title';
import SubTitle from '@App/components/SubTitle';

interface ChartProps {

}

interface ChartState {
    data: [];
    dataKeys: string[];
    dataMoods: [];
}

class Chart extends React.Component<ChartProps, ChartState> {
    constructor(props: ChartProps) {
        super(props);
        this.state = {
            data: [],
            dataKeys: [],
            dataMoods: []
        };
    }

    componentWillMount() {
        fetch('http://localhost:8000/moodObservation/events')
        .then(response => response.json())
        .then(data => data.map((fetchedData: any) => JSON.parse(fetchedData.payload)))
        .then(data => {
            let keys = Object.keys(data[0]);
            this.setState({dataKeys: keys});

            let moods = data.map(observations => observations.mood);
            let observedMoods = moods.filter((mood, index) => moods.indexOf(mood) === index);
            this.setState({dataMoods: observedMoods});

            this.setState({data});
        });
    }

    public render () {
        console.log('this is my data: ', this.state.data);
        console.log('this is my keys: ', this.state.dataKeys);
        return (
            <div>
                <Title>Overall Mood Average</Title>
                <SubTitle>(based on each observation)</SubTitle>
                {this.state.dataMoods.map(dataMood => {
                    return (
                        <SubTitle key={dataMood}>{dataMood}</SubTitle>
                    );
                })}
                <hr />
                {this.state.dataKeys.map(dataKey => {
                    return (
                        <SubTitle key={dataKey}>{dataKey}</SubTitle>
                    );
                })}
                <hr />
            </div>
        );
    }
}

export default Chart;