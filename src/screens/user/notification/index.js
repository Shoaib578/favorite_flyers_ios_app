import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';
import Notification from '../../../components/user/notification';
import { HeaderBackButton } from 'react-navigation-stack';
import Logo from '../../../assets/splash-icon.png'
class Notif extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Notifications',
      headerTintColor: '#505050',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTitleStyle: {
        // fontFamily: 'Roboto-Medium',
        fontSize: 16,
      },
      headerLeft: () => (
        <HeaderBackButton onPress={() => navigation.navigate('Profile')} />
      ),
      headerShown: true,
    };
  };
  state = {};
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Image source={Logo} style={{ width: 40, height: 40, top: 10, left: 10 }} />
        <Text
          onPress={() => this.props.navigation.navigate('Profile')}
          style={styles.time}>
          Saturday, June 13, 2020
        </Text>



        {/* Mock Data Rendering */}
        <Notification />
        <Notification />
        <Notification />

        {/* Mock Data Rendering */}
      </ScrollView>
    );
  }
}

export default Notif;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  time: {
    // fontFamily: 'Roboto-Bold',
    fontSize: 12,
    color: '#505050',
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 20,
  },
});
