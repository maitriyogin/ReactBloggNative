import React, {PropTypes, View, Text, ListView, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {state} from '../../state';

const Posts = ({styles, posts}) => {

  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  const dataSource = ds.cloneWithRows(posts);

  const renderRow = ({_id,title}) => (
    <View>
      <TouchableHighlight onPress={() => Actions.post({postId:_id})}>
        <View style={styles.row}>
          <Text style={styles.rowText}>
            {title}
          </Text>
        </View>
      </TouchableHighlight>
      <View style={styles.separator} />
    </View>
  )

  return (
    <View style={styles.listView}>
      <ListView
        style={styles.list}
        dataSource={dataSource}
        renderRow={renderRow}
      />
    </View>
  );
}

Posts.propTypes = {
  styles: PropTypes.object,
  posts: PropTypes.array,
};
Posts.defaultProps = {
  posts: state.posts
};

export default Posts;