import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { requestGetData } from '@App/store/actions/index';

import HeaderContainer from '@App/components/HeaderContainer';
import BodyContainer from '@App/components/BodyContainer';

import Title from '@App/components/Title';
import Logo from '@App/components/Logo';
import SubTitle from '@App/components/SubTitle';
import { MoodChart } from '@App/components/MoodChart';
import { MonthChart } from '../MonthChart';

const LogoUrl = require('../../assets/images/logo-birdie.svg');

interface AppProps { }

interface AppState { }

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
`;

class App extends React.Component<Props, AppState> {
  public constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestGetData();
  }

  public render() {
    // console.log('data props in APP: ', this.props.data);
    // console.log('dataKeys props in APP: ', this.props.dataKeys);
    // console.log('allMoods props in APP: ', this.props.allMoods);
    console.log('dataMoods props in APP: ', this.props.dataMoods);
    // console.log('timeStamp props in APP: ', this.props.timeStamp);
    // console.log('allMonths props in APP: ', this.props.allMonths);
    // console.log('eachMonth props in APP: ', this.props.eachMonth);
    let months = this.props.eachMonth.join(' and ');
    return (
      <>
        <GlobalStyle />
        <AppContainer>
          <HeaderContainer>
            <Logo src={LogoUrl} />
            <Title>Welcome to birdie!</Title>
            <SubTitle>Here are some mood observation statistics!</SubTitle>
            <SubTitle>(based on {this.props.allMoods.length} observations between {months} in 2019)</SubTitle>
          </HeaderContainer>
            <BodyContainer>
              <MoodChart {...this.props} />
              <MonthChart {...this.props} month="April" />
              <MonthChart {...this.props} month="May" />
            </BodyContainer>
        </AppContainer>
      </>
    );
  }
}
interface PropsFromState {
  data: any;
  dataKeys: [];
  allMoods: [];
  dataMoods: [];
  timeStamp: [];
  allMonths: [];
  eachMonth: [];
}

const mapStateToProps = (state: RootState, ownProps: object): PropsFromState => ({
  data: state.data.allData,
  dataKeys: state.data.dataKeys,
  allMoods: state.data.allMoods,
  dataMoods: state.data.dataMoods,
  timeStamp: state.data.timeStamp,
  allMonths: state.data.allMonths,
  eachMonth: state.data.eachMonth,
});

interface PropsFromDispatch {
  requestGetData: any;
}

const mapDispatchToProps = (dispatch: Dispatch<RootState>): PropsFromDispatch =>
  bindActionCreators({ requestGetData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);