import styled from 'styled-components';

interface BarProps {
    mood: any;
}

const Bar = styled.div<BarProps>`
    background-color: ${props => (
        props.mood === 'happy' ?  '#2ECC40' :
        props.mood === 'okay' ? '#FFDC00' : '#FF4136'
    )
    };
    box-shadow: 3px 3px 3px grey;
    font-family: sans-serif;
    font-size: 1rem;
    height: 3rem;
    width: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1px;
`;

export default Bar;