/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';
import Coupons from '../../../components/business/coupons';

const {height, width} = Dimensions.get('window');

class Coupon extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    tab: 'Active',
    data: [
      {
        offer: '50% Off on Pizza',
        description:
          'Buy any medium size pizza from Dominos and get 50% flat off. This offer is valid only the first time users.',
        usedTimes: 400,
      },
      {
        offer: '10% Off on Burger',
        description:
          'Buy any medium size pizza from Dominos and get 50% flat off. This offer is valid only the first time users.',
        usedTimes: 650,
      },
      {
        offer: '50% Off on Membership',
        description:
          'Buy any medium size pizza from Dominos and get 50% flat off. This offer is valid only the first time users.',
        usedTimes: 401,
      },
      {
        offer: '60% Off on Weekends',
        description:
          'Buy any medium size pizza from Dominos and get 50% flat off. This offer is valid only the first time users.',
        usedTimes: 236,
      },
      {
        offer: 'Free Deals on Premium Package',
        description:
          'Buy any medium size pizza from Dominos and get 50% flat off. This offer is valid only the first time users.',
        usedTimes: 240,
      },
      {
        offer: 'Buy 1 Get 2 Free',
        description:
          'Buy any medium size pizza from Dominos and get 50% flat off. This offer is valid only the first time users.',
        usedTimes: 123,
      },
    ],
    keyword: '',
  };

  tabHandler = tab => {
    this.setState({
      tab: tab,
    });
  };
  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.mainView}
        showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: '#F5F5F5'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                onPress={() => this.props.navigation.goBack(null)}
                name="ios-arrow-back"
                style={{paddingRight: 20}}
              />
              <View>
                <Text style={styles.heading}>Toronto Donuts</Text>
                <Text>
                  {this.state.tab === 'Disabled' ? '7 disabled' : '12 active'}
                </Text>
              </View>
            </View>
            <Icon
              onPress={() => this.props.navigation.navigate('AddCoupon')}
              name="ios-add"
              style={{color: '#26BE8D', fontSize: 35}}
            />
          </View>
          <View style={styles.searchbar}>
            <View style={{paddingRight: 10}}>
              <Icon
                name="ios-search"
                style={{color: '#A1A1A1', fontSize: 20}}
                fontSize={18}
              />
            </View>
            <View
              style={{
                width: width / 2,
              }}>
              <TextInput
                // autoFocus={this.props.focus}
                keyboardAppearance={'dark'}
                // autoFocus={this.state.loaded}
                // autoFocus
                onChangeText={text => {
                  this.setState({
                    keyword: text,
                  });
                }}
                // value="Search"
                style={{
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                  width: width / 2,
                  // borderRadius:
                }}
                placeholder="Search Coupon"
              />
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
              alignItems: 'center',
            }}>
            <Text
              onPress={() => this.tabHandler('Active')}
              style={{
                color: this.state.tab === 'Active' ? '#26BE8D' : '#C6C6C6',
                fontFamily: 'Roboto-Medium',
                fontSize: 16,
                borderBottomWidth: 2,
                borderColor: this.state.tab === 'Active' ? '#26BE8D' : '#FFF',
              }}>
              Active
            </Text>
            <Text
              onPress={() => this.tabHandler('Popular')}
              style={{
                color: this.state.tab === 'Popular' ? '#26BE8D' : '#C6C6C6',
                fontFamily: 'Roboto-Medium',
                fontSize: 16,
                borderBottomWidth: 2,
                borderColor: this.state.tab === 'Popular' ? '#26BE8D' : '#FFF',
              }}>
              Popular
            </Text>
            <Text
              onPress={() => this.tabHandler('Disabled')}
              style={{
                color: this.state.tab === 'Disabled' ? '#26BE8D' : '#C6C6C6',
                fontFamily: 'Roboto-Medium',
                fontSize: 16,
                borderBottomWidth: 2,
                borderColor: this.state.tab === 'Disabled' ? '#26BE8D' : '#FFF',
              }}>
              Disabled
            </Text>
          </View>
          {this.state.data.map((index, key) => {
            return index.offer
              .toLowerCase()
              .includes(this.state.keyword.toLowerCase()) ? (
              <TouchableOpacity
                key={key}
                activeOpacity={1}
                onPress={() => this.props.navigation.navigate('EditCoupon')}>
                <Coupons
                  key={key}
                  offer={index.offer}
                  description={index.description}
                  disabled={
                    this.state.tab === 'Active' || this.state.tab === 'Popular'
                      ? false
                      : true
                  }
                />
              </TouchableOpacity>
            ) : null;
          })}
        </View>
      </ScrollView>
    );
  }
}

export default Coupon;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    // flex: 1,
    paddingBottom: 10,
    marginTop:50
  },
  container: {
    flex: 1,
    margin: 15,
    marginTop: 20,
    backgroundColor: 'white',
  },
  heading: {
    color: '#505050',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  searchbar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // borderColor: 'black',
    //   borderWidth: 2,
    margin: 40,
    marginTop: 15,
    paddingLeft: 20,
    // elevation: 2,
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 5,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: width / 1.1,
    marginLeft: 20,
    marginBottom: 10,
    borderColor: '#C6C6C6',
    // borderWidth: 0.5,
  },
});
