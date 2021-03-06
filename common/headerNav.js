import React, {Component, propTypes} from 'react';
import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
import {
  View, Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import SecondPage from './secondPage';
import LoginPage from './loginPage';
import {navigation} from 'react-navigation';
const url = 'https://audios.zaih.com/90000035329955439970-1489661501599.mp3?sign=e78f4b5bd9f0329feba381d83768a4b6&t=58ca7850';
//ReactNativeAudioStreaming.pause();
//ReactNativeAudioStreaming.resume();
ReactNativeAudioStreaming.play(url, {showIniOSMediaCenter: true, showInAndroidNotifications: true});
//ReactNativeAudioStreaming.stop();
const styles = StyleSheet.create({
  borderSet: {
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid'
  },  
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#e5e5e5',
    backgroundColor: '#fff',
  },
  'header-nav': {
    width: 266,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
  },
  'nav-active': {
     height: 46,
     borderBottomWidth: 1,
     borderColor: 'red',
     borderStyle: 'solid'
  }
});
class HeaderNav extends Component {
  static navigationOptions = {
      header : {
        visible: false
      }
    };
  static propTypes = {}
  static contextTypes = {}
  componentWillMount() {
    fetch('https://apis-fd.zaih.com/v1/topline?type=selected&offset=0&limit=20',//http://fd.zaih.com/topline_api/v1/headlines/digest
     {
      method: 'get'
     })
      .then((res) => {
         return res.json();
       })
      .then((response) => {
        if (response) {
          this.setState({dailyHeadlinesList: response});
          this.forceUpdate();
        }
       })
      .catch((error)=>{
         console.log('error', error);
      });
  }
  render() {
    const { navigate} = this.props.navigation;
    //console.info('navigate navigate', navigate);
    return (
      <View
        style={styles.header}
      >
        <View
         style={styles['header-nav']}
        >
          <View
            style={styles['nav-active']}
            onClick={()=>{
              //console.log('555555');
            }}
          >
            <Text
              style={{
                fontSize: 15,
                lineHeight: 36,
              }}
              onPress={() => {
                //console.log('11111111111111');
              }}
            >
              收听
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigate('Home')
              }}
            >

              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 36,
                  height: 46,
                }}
              >
                小讲
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                height: 46,
                lineHeight: 36,
              }}
            >
              奇葩
            </Text>
          </View>
        </View>
      </View>
     )
  }
}
export default HeaderNav;

