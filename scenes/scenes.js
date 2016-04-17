import React, {Component, Navigator, Text, View} from 'react-native';

import {Scene, Reducer, Router, Modal} from 'react-native-router-flux'
import styles from './styles';
import {Launch, scenes, PostsSidebar } from './components';
const reducerCreate = params=> {
  const defaultReducer = Reducer(params);
  return (state, action)=> {
    console.log("ACTION:", action);
    return defaultReducer(state, action);
  }
};

export default class Scenes extends Component {
  render() {
    return (
      <Router createReducer={reducerCreate} sceneStyle={styles.sceneStyle}>
        <Scene key="root" hideNavBar={true}>
          <Scene key="launch" component={Launch} title={'Components launch pad'} styles={styles} initial={true} />
          <Scene key="sidebar" component={PostsSidebar} styles={styles}>
            <Scene key="main">
              <Scene key="launchSidebar" component={Launch} styles={styles} initial={true} />
              <Scene key="post" component={scenes.Post} title={'Post'} styles={styles} />
              <Scene key="comments" component={scenes.Comments} title={'Comments'} styles={styles} />
              <Scene key="comment" component={scenes.Comment} title={'Comment'} styles={styles} />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    )
  }
}