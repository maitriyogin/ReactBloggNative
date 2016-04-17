import React, {Component, PropTypes, View, Text} from 'react-native';
import Drawer from "react-native-drawer"
import Posts from './posts'
import {DefaultRenderer} from "react-native-router-flux";

class PostsSidebar extends Component {
  render() {
    const {styles, content, children} = this.props;
    return (
      <Drawer
        ref="navigation"
        type="displace"
        content={content}
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan={true}
        tweenHandler={(ratio) => ({
                 main: { opacity:Math.max(0.54,1-ratio) }
            })}
        >
        <DefaultRenderer navigationState={children[0]} />
      </Drawer>
    );
  }
}

PostsSidebar.propTypes = {
  styles: PropTypes.object,
  content: PropTypes.object,
  children: PropTypes.array
};

export default PostsSidebar;