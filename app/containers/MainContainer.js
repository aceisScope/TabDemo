import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';

class MainContainer extends Component {
  constructor(props) {
      super(props);

      this.state = {
          selectedTab: 'home'
      };
  }

  render(){
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => <Icon name={ 'ios-home' } size={30} color={'gray'}/>}
          renderSelectedIcon={() => <Icon name={ 'ios-home' } size={30} color={'#4E78E7'}/>}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          {<View></View>}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'more'}
          title="More"
          renderIcon={() => <Icon name={ 'ios-more' } size={30} color={'gray'}/>}
          renderSelectedIcon={() => <Icon name={ 'ios-more' } size={30} color={'#4E78E7'}/>}
          onPress={() => this.setState({ selectedTab: 'more' })}>
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
