import styled from 'styled-components';

interface BarProps {
    mood: any;
}

const Bar = styled.div<BarProps>`
    background-color: ${props => (
        props.mood === 'happy' ? 'green' :
        props.mood === 'okay' ? 'yellow' : 'red'
    )
    };
    font-family: sans-serif;
    font-size: 1rem
    height: 3rem;
    width: 0;
`;

export default Bar;