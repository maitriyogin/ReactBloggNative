import React, {PropTypes, Text, View} from 'react-native';
import Button from "react-native-button";
import {Actions} from 'react-native-router-flux';
import Posts from './posts'
import Comments from './comments'

const Launch = ({styles}, {drawer}) => {
  return (
    <View style={styles.container}>
      <Text>Launch page</Text>
      <Button onPress={()=>{drawer.close(); Actions.posts();}}>Go to Posts</Button>
      <Button onPress={()=>{drawer.close(); Actions.comments();}}>Go to Comments</Button>
      <Button onPress={() => Actions.login()}>Go to Login</Button>
    </View>
  );
};

Launch.propTypes = {
  styles: PropTypes.object
};

Launch.contextTypes = {
  drawer: React.PropTypes.object
};

export default Launch;