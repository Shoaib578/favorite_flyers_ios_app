import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Icon } from 'native-base';
const { height, width } = Dimensions.get('window');

class Card extends Component {
  state = {
    selected: false,
  };

  handler = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };

  render() {
    let data = this.props.data.code;

    return (
      <View
        style={[
          styles.container,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            width: this.props.width !== undefined ? width / 1.3 : null,
            margin: this.props.width !== undefined ? 10 : 4,
          },
        ]}>
        <Image
          source={{ uri: this.props.data.flyer_image }}
          style={[
            styles.image,
            {
              width:
                this.props.width !== undefined ? width / 1.3 : width / 1.075,
            },
          ]}
        />
        <View style={styles.description}>
          <Text style={styles.heading_text}>
            {/* Domino's Pizza 50% Off */}
            {this.props.data.name}
          </Text>
          <Text style={styles.address}>
            Published By Incl {this.props.data.published_by}
            {/* 3A Texas Building, Street 44 */}
          </Text>
          <View style={styles.row}>
            <Icon style={styles.icon} />

          </View>
          <Icon
            onPress={() => this.handler()}
            name={this.state.selected ? 'ios-heart' : 'ios-heart-outline'}
            style={[
              styles.heart,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                marginLeft:
                  this.props.width !== undefined ? width / 1.5 : width / 1.2,
                marginTop: -height / 12,
                color: this.state.selected ? '#e23737' : '#606060',
              },
            ]}
          />

        </View>
      </View>
    );
  }
}

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8FE',
    elevation: 2,
    height: 230,
    borderColor: '#707070',
    borderRadius: 5,
  },
  heading_text: {
    color: '#505050',
    // fontFamily: 'Roboto-Regular',
    fontSize: 15,
  },
  image: {
    height: 150,

    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  description: {
    padding: 8,
    height: 500
  },
  address: {
    color: '#6e6e6e',
    // fontFamily: 'Roboto-Regular',
    fontSize: 13,
    paddingTop: 2,
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
  },
  deals_text: {
    // fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: 'white',
  },
});
