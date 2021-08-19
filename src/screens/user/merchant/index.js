import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,

  Dimensions,

} from 'react-native';
import Slider from '../../../components/user/slider';
import Description from '../../../components/user/description';

import Info from '../../../components/user/info';


const { height } = Dimensions.get('window');

class Merchant extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    copied: false,
    showMenu: false,
  };

  renderNumberCopy = () => {
    this.RBSheetCopy.open();
  };

  renderCopiedMessage = () => {
    return (
      <View style={styles.copied}>
        <Text style={styles.copiedText}>Copied to Clipboard</Text>
      </View>
    );
  };







  showMenu = () => {
    console.log('triggered showmneu');
    this.setState({ showMenu: true });
  };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Slider {...this.props} />
        <Description status={this.handleStatus} />
        <View style={styles.business}>
          <Text style={styles.businessText}>Category</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Info
              triggerFunction={() => this.showMenu()}
              icon="ios-restaurant"
              label="Menu"
            />


          </ScrollView>
        </View>













      </ScrollView>
    );
  }
}

export default Merchant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  business: {
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  businessText: {
    // fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: '#505050',
    padding: 5,
    paddingBottom: 10,
  },
  bottomsheetRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  copyIcon: {
    color: '#A1A1A1',
    fontSize: 20,
    padding: 10,
  },
  phoneNumber: {
    color: '#505050',
    // fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
  bottomsheetRow2: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  callIcon: {
    fontSize: 20,
    paddingRight: 20,
  },
  callText: {
    color: '#26BE8D',
    // fontFamily: 'Roboto-Medium',
    fontSize: 13,
  },
  phoneNumberRow: {
    flexDirection: 'row',
  },
  phoneNumberText: {
    color: '#a1a1a1',
    // fontFamily: 'Roboto-Medium',
    fontSize: 18,
  },
  copied: {
    backgroundColor: '#26BE8D',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    paddingRight: 10,
    paddingLeft: 10,
  },
  copiedText: {
    color: '#fff',
    // fontFamily: 'Roboto-Medium',
    fontSize: 12,
  },
  experience: { padding: 15, marginTop: 10, backgroundColor: 'white' },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  add: {
    padding: 15,
    marginTop: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  addView: {
    width: 10,
    backgroundColor: '#26BE8D',
    margin: -20,
    marginRight: 20,
  },
  shareText: {
    color: '#707070',
    // fontFamily: 'Roboto-Regular',
    fontSize: 13,
  },
  addText: {
    color: '#26BE8D',
    // fontFamily: 'Roboto-Bold',
    fontSize: 14,
  },
  video: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  arrowIcon: {
    fontSize: 20,
  },
  addIcon: {
    color: '#26BE8D',
  },
});
