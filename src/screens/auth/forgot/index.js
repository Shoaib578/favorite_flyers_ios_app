import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Icon} from 'native-base';

const {height, width} = Dimensions.get('window');

class Forgot extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    email: '',
    success: false,
    error: false,
  };
  authHandler = () => {
    this.setState({
      authenticating: true,
    });
    setTimeout(() => {
      if (this.state.email.includes('@') && this.state.email.length > 8) {
        this.setState({
          success: true,
          authenticating: false,
        });
      } else {
        this.setState({
          error: true,
          authenticating: false,
        });
      }
    }, 2000);
  };

  render() {
    console.log(this.state.email);
    return (
      <ScrollView
        contentContainerStyle={styles.mainView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.background}>
          <View style={styles.iconView}>
            <View style={styles.flex}>
              <Icon
                onPress={() => this.props.navigation.goBack(null)}
                name="ios-arrow-back"
                style={styles.icon}
              />
              <View>
                <Text style={styles.stackTitle}>Forgot Password</Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <TextInput
            onChangeText={text =>
              this.setState({
                email: text,
              })
            }
            keyboardType="email-address"
            placeholderTextColor="#A1A1A1"
            placeholder="Enter your email"
            style={styles.input}
          />
        </View>
        <Text style={styles.info}>
          {this.state.success
            ? ' An Email has been sent to your registered id.'
            : this.state.error
            ? 'An error occurred while sending reset link'
            : 'An Email will be sent on your given id'}
        </Text>
        <TouchableOpacity
          onPress={() => {
            this.authHandler();
          }}
          style={styles.login}>
          {this.state.authenticating ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.socialBoxText}>Reset Password</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default Forgot;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    flex: 1,
    marginTop:50

  },
  stackTitle: {
    color: '#505050',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
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
  socialBoxText: {color: 'white', fontFamily: 'Roboto-Bold'},
  input: {
    borderColor: '#C6C6C6',
    borderRadius: 5,
    borderWidth: 0.5,
    margin: 10,
    padding: 10,
    fontFamily: 'Roboto-Regular',
  },
  login: {
    padding: 15,
    backgroundColor: '#26BE8D',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: height / 45,
  },
  forgotText: {
    color: '#26BE8D',
    fontFamily: 'Roboto-Medium',
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
  background: {
    backgroundColor: '#F5F5F5',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  seperator: {
    backgroundColor: '#C6C6C6',
    // borderWidth: 1,
    width: width / 2.8,
    height: 1,
    margin: height / 60,
  },
  createAccountText: {color: '#A1A1A1', fontFamily: 'Roboto-Regular'},
  bottom: {
    paddingTop: height / 25,
  },
  orText: {
    color: '#A1A1A1',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  loginText: {
    color: '#A1A1A1',
    fontFamily: 'Roboto-Regular',
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
    fontFamily: 'Roboto-Bold',
    paddingBottom: 20,
  },
  info: {
    color: '#505050',
    fontFamily: 'Roboto-Bold',
    padding: 20,
    paddingTop: 10,
    paddingBottom: 0,
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  flex: {
    flexDirection: 'row',
  },
  icon: {
    paddingRight: 20,
  },
});
