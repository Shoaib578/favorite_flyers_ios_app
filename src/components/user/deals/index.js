import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Deals from '../card';
import Skeleton from '../../../components/user/skeleton';

const { width } = Dimensions.get('window');

class deals extends Component {
  state = {
    // Dummy Data
    data: [
      {
        name: "Domino's Pizza 50% Off",
        published_by: 'Texas ',

        flyer_image: 'https://sleepy-gorge-75981.herokuapp.com/assets/img/flyers.webp',
        code: 'Dominos',
      },
      {
        name: 'Get 35% off on any burger',
        flyer_image: 'https://sleepy-gorge-75981.herokuapp.com/assets/img/flyer2.webp',

        published_by: 'Baby',


        code: 'Burger',
      },
      {
        name: 'The Texas Super mall Discount',
        published_by: 'Global ',
        flyer_image: 'https://sleepy-gorge-75981.herokuapp.com/assets/img/flyer3.webp',


        code: 'Mall',
      },
      {
        name: "Domino's Pizza 50% Off",
        flyer_image: 'https://sleepy-gorge-75981.herokuapp.com/assets/img/flyer4.webp',

        published_by: 'Soffa',


        code: 'Dominos',
      },
    ],
    loading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 3000);
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.favourites !== undefined ? null : (
          <Text style={styles.hot_deals_text}>Hot Deals</Text>
        )}
        <View style={styles.scrollview}>
          {this.state.loading ? (
            <View>
              <Skeleton marginBottom={5} height={230} width={width / 1.05} />

              <Skeleton marginBottom={5} height={230} width={width / 1.05} />

              <Skeleton marginBottom={5} height={230} width={width / 1.05} />
            </View>
          ) : (
            this.state.data.map((index, key) => {
              return (
                <TouchableOpacity
                  key={key}
                  activeOpacity={1}
                  onPress={() => this.props.navigation.navigate('Merchant')}>
                  <Deals data={index} />
                </TouchableOpacity>
              );
            })
          )}
        </View>
      </View>
    );
  }
}

export default deals;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 10,
    elevation: 1,
    borderColor: '#707070',
    padding: 5,
  },
  hot_deals_text: {
    color: '#505050',
    // fontFamily: 'Roboto-Bold',
    fontSize: 18,
    padding: 10,
  },
  image: {
    height: 40,
    width: 40,
  },
  scrollview: {
    padding: 5,
  },
});
