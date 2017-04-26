import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

class MainContainer extends Component {
  render(){
    return (
      <View>
        <Text>Welcome!</Text>
      </View>
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
