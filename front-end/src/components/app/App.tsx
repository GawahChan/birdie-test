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
    console.log('app props in APP: ', this.props.data);
    return (
      <>
        <GlobalStyle />
        <AppContainer>
          <Logo src={LogoUrl} />
          <Title>Welcome to the birdie test</Title>
          <SubTitle>hello I have redux</SubTitle>
        </AppContainer>
        <Chart />
      </>
    );
  }
}
interface PropsFromState {
  data: any;
}

const mapStateToProps = (state: RootState, ownProps: object): PropsFromState => ({
  data: state.dataState.appData
});

interface PropsFromDispatch {
  requestGetData: any;
}

const mapDispatchToProps = (dispatch: Dispatch<RootState>): PropsFromDispatch =>
  bindActionCreators({ requestGetData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);