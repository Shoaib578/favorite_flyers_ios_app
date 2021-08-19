import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Coupons from '../../../components/user/coupons';
import { Icon } from 'native-base';

const { width } = Dimensions.get('window');

class History extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {};
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <LinearGradient
            colors={['#26BE8D', '#14BB6D', '#14BB6D', '#14BB6D']}
            style={styles.linearGradient}>
            <View style={styles.row}>
              <Icon
                name="md-arrow-back"
                style={styles.icon}
                onPress={() => this.props.navigation.goBack()}
              />
              <Text style={styles.historyText}>History</Text>
            </View>
            <View>
              <Text style={styles.value}>55,455</Text>
              <Text style={styles.pointsText}>Points Spent</Text>
            </View>
          </LinearGradient>

          <Coupons
            source={require('../../../assets/coupon3.jpg')}
            description="Get 10% off on adidas shoes from any store."
          />
          <Coupons
            source={require('../../../assets/dominos-logo.png')}
            description="Domino's Pizza Outlet, East Texas"
          />
          <Coupons
            source={require('../../../assets/coupon3.jpg')}
            description="Cafe Coffee Day Outlet, lake front"
          />
          <Coupons
            source={require('../../../assets/bking.png')}
            description="Get 10% off on adidas shoes from any store."
          />
          <Coupons
            source={require('../../../assets/dominos-logo.png')}
            description="Domino's Pizza Outlet, East Texas"
          />
          <Coupons
            source={require('../../../assets/coupon3.jpg')}
            description="Cafe Coffee Day Outlet, lake front"
          />
        </View>
      </ScrollView>
    );
  }
}

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  value: {
    // fontFamily: 'Roboto-Bold',
    fontSize: 30,
    color: 'white',
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    paddingBottom: 20,
  },
  pointsText: {
    // fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: 'white',
  },
  icon: {
    color: 'white',
    fontSize: 20,
  },
  historyText: {
    color: 'white',
    // fontFamily: 'Roboto-Regular',
    padding: 10,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -width / 1.45,
    marginTop: -20,
  },
});
