/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ScrollView,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
//var styles = require('./Dashboard.css');
import HomePage from './common/homePage';
import LoginPage from './common/loginPage';
import FreeTopLine from './common/freeTopline';
import SpeechesAll from './common/speechesAll';
import LoginVerify from './common/loginVerify';
import { dailyHeadlinesListStore } from './common/stores/dailyHeadListStore.js';
const styles = {};
import {useStrict} from 'mobx';
import {Provider, inject} from 'mobx-react';
import QuestionDetails from './common/questionDetails';
import StatusPage from './common/statusPage';
useStrict(true);
const dailyHLiStore = new dailyHeadlinesListStore();
class AP extends Component {
  static propTypes = {
  };
  static navigationOptions = {
          header : {
             visible: false
           }
        };
  static contextTypes = {
    //store: PropTypes.object.isRequired
  };
  state = {
    modalVs: false,
    navigatorTest: false
  }
  render() {
    const defaultName = 'mainPage';
    const defaultComponent = HomePage;
    return (
      <Provider
          dailyHLiStore={dailyHLiStore}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          {
            this.state.navigatorTest ?
            <LoginPage/> :
            <HomePage
              navigation={this.props.navigation}
            />
           }
        </View>
      </Provider>
    );
  }
}
export default AP;

const App = StackNavigator({
  Home: { screen: AP},// //StatusPage
  Login: {screen: LoginPage},
  SpeechesAll: {screen: SpeechesAll},
  LoginVerify: {screen: LoginVerify},
  QuestionDetails: {screen: QuestionDetails} 
},{
  //headerMode: 'none',
  mode: 'card',
  //header : {visible: false}
 }
);
AppRegistry.registerComponent('AP', () => App);
