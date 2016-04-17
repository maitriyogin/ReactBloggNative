import React, {PropTypes, View, Text} from 'react-native';

const Comments = ({styles, comments}) => {
  return (
    <View style={styles.container}>
      <Text>Comments</Text>
    </View>
  );
}

Comments.propTypes = {
  styles: PropTypes.object,
  comments: PropTypes.object,
};
Comments.defaultProps = {
  comments: {}
};

export default Comments;