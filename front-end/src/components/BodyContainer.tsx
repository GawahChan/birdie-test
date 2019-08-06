import styled from 'styled-components';

const BodyContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 15px;
    padding-top: 30px;
    padding-bottom: 30px;
`;

export default BodyContainer;