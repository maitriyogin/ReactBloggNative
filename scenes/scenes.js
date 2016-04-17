import React, {Component, Navigator, Text, View} from 'react-native';

import {Scene, Reducer, Router} from 'react-native-router-flux'
import styles from './styles';
import {Launch} from './components';

const reducerCreate = params=>{
  const defaultReducer = Reducer(params);
  return (state, action)=>{
    console.log("ACTION:", action);
    return defaultReducer(state, action);
  }
};



export default class Scenes extends Component {
  render() {
    return (
      <Router createReducer={reducerCreate} sceneStyle={styles.sceneStyle}>
        <Scene key="welcome" component={Launch} title={'Welcome'} styles={styles} initial/>
      </Router>
      )
  }
}