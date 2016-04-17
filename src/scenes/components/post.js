import React, {Component, PropTypes, View, Text, TextInput, TouchableOpacity} from 'react-native';
import Button from "react-native-button";
import {Actions} from 'react-native-router-flux';
import {getPost} from '../../state';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  componentWillMount() {
    const post = getPost(this.props.postId);
    let state = this.state;
    state.post = post;
    this.setState(state);
  }

  componentWillReceiveProps(nextProps) {
    const post = getPost(nextProps.postId);
    let state = this.state;
    state.post = post;
    this.setState(state);
  }

  _toggleEdit() {
    this.setState({editing: !this.state.editing});
    if(this.state.editing){
      Actions.refresh({
        rightTitle:'Done',
        onRight: ()=>{
          this.setState({editing: false});
          Actions.refresh({rightTitle:null, onRight:null});
        }
      });
    } else {
      Actions.refresh({rightTitle:null, onRight:null});
    }
  }

  _updateText(text){
    let state = this.state;
    state.post.body = text;
    this.setState(state);
  }

  render() {
    const {styles, postId} = this.props;
    const {editing, post} = this.state;

    return (
      <View style={styles.navContainer}>

        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{post.title}</Text>
          <TouchableOpacity style={styles.textTouch} onPress={() => this._toggleEdit()}>
            { editing ?
              <TextInput
                style={styles.textEdit}
                onChangeText={(text) => this._updateText(text)}
                value={post.body}
                multiline={true}
                keyboardType='default'
              />
              :
              <Text style={styles.text}>{post.body}</Text>}
          </TouchableOpacity>
          <View style={styles.textFooter}>
          <Button
            onPress={()=>{
              Actions.comments({postId});
              }
            }
          >Comments</Button>
            </View>
        </View>

      </View>
    );
  }
}

Post.propTypes = {
  styles: PropTypes.object,
  postId: PropTypes.number
};
Post.defaultProps = {
  post: {}
};

export default Post;