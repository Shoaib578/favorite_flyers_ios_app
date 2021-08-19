import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Icon } from 'native-base';
const { height, width } = Dimensions.get('window');

class deals extends Component {
  state = {};
  render() {
    let data = this.props.data.code;
    // Dummy Data
    let src =
      data === 'Dominos'
        ? {
          uri:
            'https://sleepy-gorge-75981.herokuapp.com/assets/img/flyers.webp',
        }
        : data === 'Burger'
          ? {
            uri:
              'https://sleepy-gorge-75981.herokuapp.com/assets/img/flyers2.webp',
          }
          : {
            uri:
              'https://sleepy-gorge-75981.herokuapp.com/assets/img/flyers.webp',
          };
    return (
      <View style={styles.container}>
        <Image source={src} style={styles.image} />
        <View style={styles.description}>
          <Text>{this.props.data.name}</Text>
          <Text>Published By {this.props.data.published_by}</Text>

          <Icon name="ios-heart" style={styles.heart} />

        </View>
      </View>
    );
  }
}

export default deals;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8FE',

    elevation: 2,
    height: 300,

    borderColor: '#707070',
    borderRadius: 5,
    margin: 4,
    width: width / 1.08,
  },
  heading_text: {
    color: '#505050',
    fontFamily: 'Arial',

    padding: 15,
    fontSize: 15,
  },
  image: {
    height: 150,
    width: width / 1.075,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  description: {
    padding: 18,
    height: 80,
  },
  address: {
    color: '#6e6e6e',
    // fontFamily: 'Roboto-Regular',
    fontSize: 13,
    paddingTop: 12,
    margin: 12
  },
  value_text: {
    color: '#6e6e6e',
    // fontFamily: 'Roboto-Regular',
    fontSize: 11,
    paddingTop: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 15,
    color: '#606060',
    padding: 5,
    paddingLeft: 0,
  },
  heart: {
    marginLeft: width / 1.2,
    marginTop: -height / 8,
    fontSize: 21,
    color: '#606060',
  },
  deals_button: {
    backgroundColor: '#26BE8D',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    padding: 5,
    borderRadius: 5,
    marginLeft: width / 1.5,
    marginTop: height / 45,
  },
  deals_text: {
    // fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: 'white',
  },
});
