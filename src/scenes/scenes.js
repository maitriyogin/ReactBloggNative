import React, {Component, Navigator, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {Scene, Reducer, Router, Modal} from 'react-native-router-flux'
import styles from './styles';
import {Launch, scenes, Sidedraw } from './components';
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
        <Scene key="modal" component={Modal}>
          <Scene key="root" hideNavBar={true}>
            <Scene key="login" component={scenes.Login} title={'Login'} styles={styles} />

            <Scene key="sidedraw" component={Sidedraw} styles={styles} initial={true}>
              <Scene key="main">
                <Scene key="posts" component={scenes.Posts} title={'Posts'} styles={styles}>
                </Scene>
                <Scene key="post" title={'Post'}  component={scenes.Post} styles={styles} />
                <Scene key="comments"
                       component={scenes.Comments}
                       title={'Comments'}
                       styles={styles}
                       panHandlers={null} duration={1}/>
              </Scene>
            </Scene>
          </Scene>
        </Scene>
      </Router>
    )
  }
}