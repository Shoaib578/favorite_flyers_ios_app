import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Menu from '../../../components/business/menu';
import Stats from '../../../components/business/stats';
import Visit from '../../../components/business/visits';

class Home extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {};
  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.mainView}
        showsVerticalScrollIndicator={false}>
        {/* Header Start*/}
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <View style={styles.row}>
            <Text style={styles.name}>DevLab Works</Text>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.props.navigation.navigate('MyBusiness')}>
              <Image
                source={require('../../../assets/shopping.png')}
                style={styles.profileDP}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.storeName}>Toronto Donuts</Text>
        </View>
        {/* Header End*/}
        {/* Stats Start */}
        <View style={styles.statsRow}>
          <Stats value={12} label="Active Coupons" backgroundColor="#26BE8D" />
          <Stats value={23} label="Used Coupons" backgroundColor="#76B2FF" />
        </View>
        {/* Stats End  */}
        {/* Menu Start */}
        <View style={styles.menuRow}>
          <Menu
            {...this.props}
            routeName="Coupons"
            label="Coupons"
            image={require('../../../assets/coupon.png')}
          />
          <Menu
            {...this.props}
            routeName="MyBusiness"
            label="My Business"
            image={require('../../../assets/building.png')}
          />
          <Menu
            {...this.props}
            routeName="Messages"
            label="Messages"
            image={require('../../../assets/email.png')}
          />
        </View>
        <View style={styles.menuRow}>
          <Menu
            {...this.props}
            label="Punch Card"
            image={require('../../../assets/card.png')}
          />
          <Menu
            {...this.props}
            routeName="Location"
            label="Location"
            image={require('../../../assets/pin.png')}
          />
          <Menu
            {...this.props}
            routeName="Settings"
            label="Settings"
            image={require('../../../assets/tools.png')}
          />
        </View>
        {/* Menu End */}
        <View style={styles.latestView}>
          <View style={styles.latestRow}>
            <Text style={styles.latestText}>Latest Visits</Text>
            <Text
              onPress={() => {
                this.props.navigation.navigate('Visits');
              }}
              style={styles.viewText}>
              View All
            </Text>
          </View>
          <Text style={styles.dateText}>3rd May</Text>
        </View>
        {/* Visit Card Start*/}
        <Visit
          offerName="Get 50% Off on Pizza"
          userName="Mike Ross"
          time="3:12PM"
        />
        <Visit
          offerName="Buy 1 Get 1 Free"
          userName="Harvey Spectre"
          time="5:22PM"
        />
        <Visit
          offerName="Get 50% Off on Pizza"
          userName="Mike Ross"
          time="3:12PM"
        />
        <Visit
          offerName="Buy 1 Get 1 Free"
          userName="Harvey Spectre"
          time="5:22PM"
        />
        <Visit
          offerName="Get 50% Off on Pizza"
          userName="Mike Ross"
          time="3:12PM"
        />
        <Visit
          offerName="Buy 1 Get 1 Free"
          userName="Harvey Spectre"
          time="5:22PM"
        />
        <Visit
          offerName="Get 50% Off on Pizza"
          userName="Mike Ross"
          time="3:12PM"
        />
        <Visit
          offerName="Buy 1 Get 1 Free"
          userName="Harvey Spectre"
          time="5:22PM"
        />
        {/* Visit Card End */}
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    paddingTop:50
  },
  container: {
    flex: 1,
    margin: 15,
    marginTop: 20,
    backgroundColor: 'white',
  },
  welcomeText: {
    color: '#A1A1A1',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  storeName: {
    color: '#6E6E6E',
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Roboto-Bold',
    fontSize: 28,
    color: '#505050',
  },
  profileDP: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginRight: 10,
  },
  menuRow: {
    flexDirection: 'row',
    margin: 5,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    marginBottom: 20,
  },
  dateText: {
    color: '#A1A1A1',
    fontFamily: 'Roboto-Bold',
    paddingTop: 5,
  },
  latestRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  latestText: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: '#505050',
  },
  viewText: {
    color: '#26BE8D',
    fontFamily: 'Roboto-Regular',
  },
  latestView: {
    padding: 10,
    marginTop: 10,
    margin: 5,
  },
});
