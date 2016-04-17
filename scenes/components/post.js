import React, {PropTypes, View, Text} from 'react-native';

const Post = ({styles, post}) => {
  return (
    <View style={styles.container}>
      <Text>Post</Text>
    </View>
  );
}

Post.propTypes = {
  styles: PropTypes.object,
  post: PropTypes.object,
};
Post.defaultProps = {
  posts: {}
};

export default Post;