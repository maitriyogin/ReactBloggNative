import React, {Component, PropTypes, View, Text, TextInput, ListView, TouchableOpacity} from 'react-native';
import Button from "react-native-button";
import {Actions} from 'react-native-router-flux';
import {getComments, newComment, pushComment} from '../../state';
import moment from 'moment'
class Comments extends Component {
  constructor(props) {
    console.log(`comments `);
    super(props);
    this.state = {
      editing: false
    };

  }

  componentWillMount() {
    const {postId} = this.props;
    console.log(`comments postId ${postId}`);
    this._initComments();
    Actions.refresh({
      rightTitle: 'Add',
      onRight: ()=> {
        let state = this.state;
        state.comments.unshift(newComment(postId));

        console.log('add ds',state.dataSource);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        state.dataSource = ds.cloneWithRows(state.comments);
        this.setState(state);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(`comments postId ${this.props.postId}`);
    this._initComments();
  }

  _initComments() {
    const comments = getComments(this.props.postId);

    let state = this.state;
    state.comments = comments;
    let ds = state.dataSource;
    if(ds === undefined){
      ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }

    state.dataSource = ds.cloneWithRows(comments);
    this.setState(state);
  }

  _updateText(_id, text) {
    let state = this.state;
    const i = state.comments.findIndex(comment => comment._id === _id);
    state.comments[i].body = text;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    state.dataSource = ds.cloneWithRows(state.comments);
    this.setState(state);
  }

  _doneEditingText(_id) {
    let state = this.state;
    const i = state.comments.findIndex(comment => comment._id === _id);
    delete state.comments[i].isNew;
    this.setState(state);
    // also update the global state ...
    pushComment(state.comments[i]);
  }

  render() {
    const {styles} = this.props;
    const {editing, comments, dataSource} = this.state;

    const renderRow = ({_id, body, isNew, updatedate}) => (
      <View>
        <TouchableOpacity onPress={() => null}>

          {isNew ?
            <View style={styles.row}>
              <TextInput
                style={styles.commentEdit}
                onChangeText={(text) => this._updateText(_id, text)} value={body}
                onSubmitEditing={() => this._doneEditingText(_id)}/>
            </View>
            :
            <View style={styles.row}>
              <Text style={styles.rowText}>
                {body}
              </Text>
              <Text style={styles.rowFooter}>
                {moment(updatedate).fromNow()}
              </Text>
            </View>
          }
        </TouchableOpacity>
        <View style={styles.separator} />
      </View>
    )

    return (
      <View style={styles.listView}>
        <ListView style={styles.list} dataSource={dataSource} renderRow={renderRow} />
      </View>
    );
  }
}

Comments.propTypes = {
  styles: PropTypes.object,
  comments: PropTypes.array,
  postId: PropTypes.number
};
Comments.defaultProps = {
  comments: []
};

export default Comments;