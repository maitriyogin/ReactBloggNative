import React, {PropTypes, View, Text} from 'react-native';

const Login = ({styles, user}) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
}

Login.propTypes = {
  styles: PropTypes.object,
  user: PropTypes.object,
};
Login.defaultProps = {
  user: {username:'stephen'}
};

export default Login;