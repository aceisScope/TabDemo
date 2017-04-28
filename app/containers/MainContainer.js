import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './Home';

class MainContainer extends Component {
  constructor(props) {
      super(props);

      this.state = {
          selectedTab: 'home'
      };
  }

  switchTabs(tab) {
    this.setState({ selectedTab: tab })
    this.props.switchTabs(tab);
  }

  currentTab() {
    return this.props.currentTab;
  }

  render(){
    const { currentTab } = this.props;
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={currentTab === 'home'}
          title="Home"
          renderIcon={() => <Icon name={ 'ios-home' } size={30} color={'gray'}/>}
          renderSelectedIcon={() => <Icon name={ 'ios-home' } size={30} color={'#4E78E7'}/>}
          onPress={() => this.switchTabs('home') }>
          <Home/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={currentTab === 'more'}
          title="More"
          renderIcon={() => <Icon name={ 'ios-more' } size={30} color={'gray'}/>}
          renderSelectedIcon={() => <Icon name={ 'ios-more' } size={30} color={'#4E78E7'}/>}
          onPress={() => this.switchTabs('more')}>
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

// match state with props
function mapStateToProps(state) {
  return {
    currentTab: state.switchTabs
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
