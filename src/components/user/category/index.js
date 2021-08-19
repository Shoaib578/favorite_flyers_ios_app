import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class category extends Component {
  state = {};
  render() {
    let data = this.props.category_name;
    // Dummy Data
    let src =
      data === 'All'
        ? {
          uri:
            'https://image.flaticon.com/icons/png/512/1042/1042340.png',
        }
        : data === 'Grocery'
          ? {
            uri:
              'https://image.flaticon.com/icons/png/512/1261/1261163.png',
          }
          : data === 'Health'
            ? {
              uri:
                'https://image.flaticon.com/icons/png/512/2966/2966327.png',
            }
            : data === 'Electronics'
              ? {
                uri: 'https://image.flaticon.com/icons/png/512/911/911412.png',
              }
              : data == 'Home' ? {
                uri:
                  'https://image.flaticon.com/icons/png/512/619/619034.png',
              } : data === 'Fashion'
                ? {
                  uri:
                    'https://image.flaticon.com/icons/png/512/3292/3292467.png',
                } : data === 'Active' ? {
                  uri:
                    'https://image.flaticon.com/icons/png/512/2255/2255206.png',
                } : data === 'Children' ? {
                  uri:
                    'https://image.flaticon.com/icons/png/512/3082/3082060.png',
                } : data === 'Pet' ? {
                  uri:
                    'https://image.flaticon.com/icons/png/512/2809/2809814.png',
                } : data === 'Tools' ? {
                  uri:
                    'https://image.flaticon.com/icons/png/512/3014/3014275.png',
                } : {

                };
    let isMap = this.props.map;
    return (
      <View
        style={[
          styles.container,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor: isMap ? '#F5F5F5' : 'white',
            height: isMap ? 90 : 77,
            width: isMap ? 90 : 77,
          },
        ]}>
        <Image source={src} style={styles.image} />
        <Text style={styles.text}>{this.props.category_name}</Text>
      </View>
    );
  }
}

export default category;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 10,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#707070',
    borderRadius: 5,
    margin: 4,
  },

  text: {
    color: '#6E6E6E',
    // fontFamily: 'Roboto-Regular',
    fontSize: 10,
    paddingTop: 4,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
});
