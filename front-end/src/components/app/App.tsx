import * as React from 'react';
// import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { requestGetData } from '@App/store/actions/index';

import Title from '@App/components/Title';
import Logo from '@App/components/Logo';
import SubTitle from '@App/components/SubTitle';
import Chart from '@App/components/Chart';

const LogoUrl = require('../../assets/images/logo-birdie.svg');

interface AppProps {

}

interface AppState {

}

type Props = AppProps & PropsFromState & PropsFromDispatch;

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: #F9F9F9;
    > div {
      height: 100%;
    }
  }
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class App extends React.Component<Props, AppState> {
  public constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestGetData();
  }

  public render() {
    console.log('data props in APP: ', this.props.data);
    console.log('dataKeys props in APP: ', this.props.dataKeys);
    console.log('allMoods props in APP: ', this.props.allMoods);
    console.log('dataMoods props in APP: ', this.props.dataMoods);
    return (
      <>
        <GlobalStyle />
        <AppContainer>
          <Logo src={LogoUrl} />
          <Title>Welcome to the birdie test</Title>
          <SubTitle>I have redeux! </SubTitle>
        </AppContainer>
        <Chart />
      </>
    );
  }
}
interface PropsFromState {
  data: any;
  dataKeys: [];
  allMoods: [];
  dataMoods: [];
}

const mapStateToProps = (state: RootState, ownProps: object): PropsFromState => ({
  data: state.data.allData,
  dataKeys: state.data.dataKeys,
  allMoods: state.data.allMoods,
  dataMoods: state.data.dataMoods
});

interface PropsFromDispatch {
  requestGetData: any;
}

const mapDispatchToProps = (dispatch: Dispatch<RootState>): PropsFromDispatch =>
  bindActionCreators({ requestGetData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);