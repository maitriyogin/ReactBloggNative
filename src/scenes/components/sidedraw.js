import React, {Component, PropTypes, View, Text} from 'react-native';
import Drawer from "react-native-drawer"
import Launch from './launch'
import {DefaultRenderer} from "react-native-router-flux";

class Sidedraw extends Component {
  render() {
    const {styles, content, children} = this.props;
    return (
      <Drawer
        ref="navigation"
        type="displace"
        content={<Launch styles={styles}/>}
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

Sidedraw.propTypes = {
  styles: PropTypes.object,
  content: PropTypes.object,
  children: PropTypes.array
};

export default Sidedraw;