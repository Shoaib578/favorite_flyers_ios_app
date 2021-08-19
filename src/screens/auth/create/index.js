import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Toast from 'react-native-simple-toast';

const { height, width } = Dimensions.get('window');

class Create extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    name: '',
    password: '',
    mobile: '',
    email: '',
    confirmPassword: '',
    created: false,
  };
  authHandler = () => {
    this.setState({
      authenticating: true,
    });
    setTimeout(() => {
      if (
        this.state.password.toLowerCase() !==
        this.state.confirmPassword.toLowerCase()
      ) {
        Toast.showWithGravity(
          "Both Password Doesn't Match",
          Toast.LONG,
          Toast.BOTTOM,
        );
      } else {
        this.props.navigation.navigate('Home');
      }
    }, 2000);
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.heading}>Create Account</Text>
        <View>
          <TextInput
            onChangeText={text =>
              this.setState({
                name: text,
              })
            }
            placeholderTextColor="#A1A1A1"
            placeholder="Name"
            style={styles.input}
          />
          <TextInput
            onChangeText={text =>
              this.setState({
                email: text,
              })
            }
            placeholderTextColor="#A1A1A1"
            keyboardType="email-address"
            placeholder="Email"
            style={styles.input}
          />
          <TextInput
            onChangeText={text =>
              this.setState({
                password: text,
              })
            }
            placeholderTextColor="#A1A1A1"
            keyboardType="number-pad"
            placeholder="Mobile Number"
            style={styles.input}
          />
          <TextInput
            onChangeText={text =>
              this.setState({
                password: text,
              })
            }
            placeholderTextColor="#A1A1A1"
            secureTextEntry
            placeholder="Password"
            style={styles.input}
          />
          <TextInput
            onChangeText={text =>
              this.setState({
                confirmPassword: text,
              })
            }
            placeholderTextColor="#A1A1A1"
            secureTextEntry
            placeholder="Confirm Password"
            style={styles.input}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            this.authHandler();
          }}
          style={styles.login}>
          {this.state.authenticating ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.socialBoxText}>Create Account</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 50,
    width: 50,
  },
  socialBoxText: { color: 'white', fontFamily: 'bold' },
  input: {
    borderColor: '#C6C6C6',
    borderRadius: 5,
    borderWidth: 0.5,
    width: width / 1.2,
    margin: 10,
    padding: 10,
    // fontFamily: 'Roboto-Regular',
  },
  login: {
    padding: 15,
    width: width / 1.2,
    backgroundColor: '#26BE8D',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: height / 25,
  },
  forgotText: {
    color: '#26BE8D',
    // fontFamily: 'Roboto-Medium',
  },
  forgot: {
    marginLeft: width / 1.8,
  },
  social: {
    padding: 15,
    paddingLeft: 55,
    paddingRight: 55,
    borderRadius: 30,
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  seperator: {
    backgroundColor: '#C6C6C6',
    width: width / 2.8,
    height: 1,
    margin: height / 60,
  },
  createAccountText: { color: '#A1A1A1', },
  bottom: {
    paddingTop: height / 25,
  },
  orText: {
    color: '#A1A1A1',
    // fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  loginText: {
    color: '#A1A1A1',
    // fontFamily: 'Roboto-Regular',
    marginBottom: height / 25,
    marginTop: 10,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // flex:1
  },
  heading: {
    fontSize: 35,
    paddingTop: 20,
    color: '#505050',
    // fontFamily: 'Roboto-Bold',
    paddingBottom: 20,
  },
});
