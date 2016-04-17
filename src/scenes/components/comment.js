import React, {PropTypes, View, Text} from 'react-native';

const Comment = ({styles, comment}) => {
  return (
    <View style={styles.container}>
      <Text>Comment</Text>
    </View>
  );
}

Comment.propTypes = {
  styles: PropTypes.object,
  comment: PropTypes.object,
};
Comment.defaultProps = {
  comment: {}
};

export default Comment;