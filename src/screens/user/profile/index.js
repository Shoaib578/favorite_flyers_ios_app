/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'native-base';
import Option from '../../../components/user/option';
import Logo from '../../../assets/splash-icon.png'

const { height, width } = Dimensions.get('window');

class Home extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {};
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.block}>
          <Image source={Logo} style={{ width: 70, height: 70, top: 15, position: 'absolute' }} />

          {/* Top Row */}
          <View style={styles.topRow}>

            <Text style={styles.profileText}>Profile</Text>

          </View>
          {/* Top Row */}

          {/* Profile Card */}
          <View style={styles.profileCard}>
            <View style={styles.imageBox}>
              <Image
                source={require('../../../assets/dominos.jpg')}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.row}>
              <View style={styles.nameView}>
                <Text style={styles.name}>DevLab Works</Text>

              </View>

            </View>
          </View>
          {/* Profile Card */}
        </View>

        <ScrollView>
          <View style={styles.optionView}>

            <View style={styles.optionContainer}>
              <Option
                icon="ios-alarm"

                {...this.props}
                label="My Coupons"
              />
            </View>


            <View style={styles.optionContainer}>
              <Option
                icon="ios-browsers"
                // routeName="History"
                {...this.props}
                label="My Flyers"
              />
            </View>




            <View style={styles.optionContainer}>
              <Option
                icon="ios-reader"

                {...this.props}
                label="Publish Flyer"
              />
            </View>



            <View style={styles.optionContainer}>
              <Option


                icon="ios-layers"

                {...this.props}
                label="Publish Coupon"
              />
            </View>

            <View style={styles.optionContainer}>
              <Option


                icon="ios-cash"

                {...this.props}
                label="Manage Payment Method"
              />
            </View>

          </View>



          <View style={styles.optionContainer}>
            <Option
              {...this.props}
              routeName="Auth"
              icon="ios-log-out"
              label="Sign Out"
            />
          </View>

          <View style={styles.optionContainer}>
            <Option
              {...this.props}
              routeName=""
              icon="ios-apps"
              label="Version 1.0"
            />
          </View>




        </ScrollView>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  block: {
    backgroundColor: '#26BE8D',
    height: height / 4,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    // paddingLeft: width / 2.4,
  },
  icon: {
    color: 'white',
    fontSize: 22,
    paddingRight: 20,
  },
  profileText: {
    color: 'white',
    // fontFamily: 'Roboto-Bold',
    fontSize: 15,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 70,
  },
  imageBox: {
    height: 78,
    width: 78,
    borderRadius: 78,
    marginTop: -height / 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  profileCard: {
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: height / 11,
    backgroundColor: 'white',
    margin: 20,
    elevation: 5,
    height: height / 6.5,
    borderRadius: 5,
    // borderBottomRightRadius: 5,
  },
  points: {
    backgroundColor: '#26BE8D',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 3,
  },
  pointsText: {
    color: '#fff',
    // fontFamily: 'Roboto-Regular',
  },
  name: {
    // fontFamily: 'Roboto-Bold',
    fontSize: 18,
    color: '#505050',
    textAlign: 'center'
  },
  email: {
    color: '#A1A1A1',
    // fontFamily: 'Roboto-Regular',
    fontSize: 13,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },

  optionView: {
    marginTop: height / 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 0,
  },
  first: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    color: '#6e6e6e',
    // fontFamily: 'Roboto-Medium',
    fontSize: 15,
    paddingLeft: 15,
  },
  optionIcon: {
    color: '#6e6e6e',
    fontSize: 22,
  },
  seperator: {
    backgroundColor: 'gray',
    // width: 10,
    height: 0.1,
    // opacity: 0.2,
    margin: 20,
    marginBottom: 0,
    flex: 1,
  },
  optionContainer: {
    margin: 5,
  },
});
