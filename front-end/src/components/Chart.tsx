import * as React from 'react';

interface ChartProps {

}

interface ChartState {
    data: [];
    dataKeys: string[];
}

class Chart extends React.Component<ChartProps, ChartState> {
    constructor(props: ChartProps) {
        super(props);
        this.state = {
            data: [],
            dataKeys: [],
        };
    }

    componentWillMount() {
        fetch('http://localhost:8000/moodObservation/events')
        .then(response => response.json())
        .then(data => data.map((fetchedData: any) => JSON.parse(fetchedData.payload)))
        .then(data => {
            let keys = Object.keys(data[0]);
            this.setState({dataKeys: keys});
            this.setState({data});
        });
    }

    public render () {
        console.log('this is my data: ', this.state.data);
        console.log('this is my keys: ', this.state.dataKeys);
        return (
            <div>
                <h1>This is DATA Component</h1>
                <hr />
                <p>{this.state.dataKeys}</p>
            </div>
        );
    }
}

export default Chart;