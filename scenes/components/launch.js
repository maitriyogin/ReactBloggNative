import React, {PropTypes, Text, View} from 'react-native';
import Button from "react-native-button";
import {Actions} from 'react-native-router-flux'
import Posts from './posts'
import Comments from './comments'

const Launch = ({styles}) => {
  return (
    <View style={styles.container}>
      <Text>Launch page</Text>
      <Button onPress={()=>Actions.sidebar({data:"Custom data", title:"Custom Posts", content:<Posts styles={styles}/>})}>Go to Posts</Button>
      <Button onPress={() => Actions.post()}>Go to Post</Button>
      <Button onPress={()=>Actions.sidebar({data:"Custom data", title:"Custom Posts", content:<Comments styles={styles}/>})}>Go to Comments</Button>
      <Button onPress={() => Actions.comment()}>Got to Comment</Button>
      <Button onPress={() => Actions.launch()}>Back to launch</Button>
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