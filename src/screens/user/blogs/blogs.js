import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Card from './card';
import Skeleton from '../../../components/user/skeleton';

const { width } = Dimensions.get('window');

class deals extends Component {
  state = {
    // Dummy Data
    data: [
      {
        name: "Blog About Flyers",


        flyer_image: 'https://sleepy-gorge-75981.herokuapp.com/assets/img/flyers.webp',

      },
      {
        name: 'Blog About Inserting Blog',
        flyer_image: 'https://sleepy-gorge-75981.herokuapp.com/assets/img/flyer2.webp',





      },
      {
        name: 'Blog About Payment Method ',

        flyer_image: 'https://sleepy-gorge-75981.herokuapp.com/assets/img/flyer3.webp',



      },
      {
        name: "Blog About Coupons",
        flyer_image: 'https://sleepy-gorge-75981.herokuapp.com/assets/img/flyer4.webp',





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
          <Text style={styles.hot_deals_text}>Blogs</Text>
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
                  onPress={() => this.props.navigation.navigate('ViewBlog')}>
                  <Card data={index} />
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
