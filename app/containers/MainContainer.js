import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';

class MainContainer extends Component {
  render(){
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={{}}
          title="Home"
          renderIcon={() => <Icon name={ 'ios-home' } size={30} color={'gray'}/>}
          renderSelectedIcon={() => <Icon name={ 'ios-home' } size={30} color={'#4E78E7'}/>}
          onPress={() => {}}>
          {<View></View>}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={{}}
          title="More"
          renderIcon={() => <Icon name={ 'ios-more' } size={30} color={'gray'}/>}
          renderSelectedIcon={() => <Icon name={ 'ios-more' } size={30} color={'#4E78E7'}/>}
          onPress={() => {}}>
          {<View></View>}
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

// match dispatched actions with props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
  return {}
}, mapDispatchToProps)(MainContainer);
