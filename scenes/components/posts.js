import React, {PropTypes, View, Text} from 'react-native';

const Posts = ({styles, posts}, {drawer}) => {
  return (
    <View style={styles.container}>
      <Text>Posts</Text>
    </View>
  );
}

Posts.propTypes = {
  styles: PropTypes.object,
  posts: PropTypes.object,
};
Posts.defaultProps = {
  posts: {}
};

Posts.contextTypes = {
  drawer: React.PropTypes.object
};

export default Posts;