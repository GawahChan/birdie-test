import * as React from 'react';
import Title from '@App/components/Title';
import SubTitle from '@App/components/SubTitle';
import Bar from '@App/components/Bar';
interface ChartProps {

}

interface ChartState {
    data: [];
    dataKeys: string[];
    dataMoods: [];
    allMoods: [];
}

class Chart extends React.Component<ChartProps, ChartState> {
    constructor(props: ChartProps) {
        super(props);
        this.state = {
            data: [],
            dataKeys: [],
            dataMoods: [],
            allMoods: [],
        };
    }

    componentWillMount() {
        fetch('http://localhost:8000/moodObservation/events')
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(data => data.map((fetchedData: any) => JSON.parse(fetchedData.payload)))
            .then(data => {
                let keys = Object.keys(data[0]);
                this.setState({ dataKeys: keys });

                let moods = data.map(observations => observations.mood);
                this.setState({ allMoods: moods });

                let observedMoods = moods
                    .filter((mood, index) => moods.indexOf(mood) === index)
                    .sort();
                this.setState({ dataMoods: observedMoods });

                this.setState({ data });
            
                console.log('this is my data: ', this.state.data);
                console.log('this is my dataKeys: ', this.state.dataKeys);
                console.log('this is my dataMoods :', this.state.dataMoods);
                console.log('this is allMoods :', this.state.allMoods);
            })
            .catch(error => {
                console.log(error);
            });
    }

    public render() {
        return (
            <div>
                <Title>Overall Mood Average</Title>
                <SubTitle>(based on {this.state.allMoods.length} observations)</SubTitle>
                {this.state.dataMoods.map(dataMood => {
                    let eachMood = this.state.allMoods.filter(mood => mood === dataMood);
                    return (
                        <div key={dataMood}>
                            <SubTitle>{eachMood.length} mood observations were {dataMood}</SubTitle>
                            <Bar style={{width: eachMood.length * 10 }} mood={dataMood} />
                        </div>
                    ); 
                })}
                <hr />
                {this.state.dataKeys.map(dataKey => {
                    return (
                        <SubTitle key={dataKey}>{dataKey}</SubTitle>
                    );
                })}
            </div>
        );
    }
}

export default Chart;