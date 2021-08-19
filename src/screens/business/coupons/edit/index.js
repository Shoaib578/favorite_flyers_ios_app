import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  Switch,
} from 'react-native';
import {Icon} from 'native-base';

import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Avatar',
  // customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const {height} = Dimensions.get('window');

class EditCoupon extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    date: new Date(), // initial value of date
    mode: 'date', // date picker mode
    show: false, // Boolean value to check whether to show date picker or not
    dateSelected: false, // Boolean value to check whether date is selected or not
    status: false, // Publish Coupon Status
    title: '',
    description:
      'Buy any medium size pizza and get 50% flat off. This offer is valid only the first time users.',
    amount: '',
    radio_props1: [
      {label: 'Discount', value: 0},
      {label: 'Offer', value: 1},
    ],
    radio_props2: [
      {label: 'Yes', value: 0},
      {label: 'No', value: 1},
    ],
    enabled: !this.props.disabled,
  };

  switchHanlder = () => {
    this.setState({
      enabled: !this.state.enabled,
    });
  };
  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({
      show: Platform.OS === 'ios',
    });
    this.setState({
      date: currentDate,
      dateSelected: true,
    });
  };

  showMode = currentMode => {
    this.setState({
      show: true,
    });
    this.setState({mode: currentMode});
  };

  showDatepicker = () => {
    console.log('called');
    this.setState({
      mode: 'date',
      show: true,
    });
  };

  showTimepicker = () => {
    this.setState({
      mode: 'time',
    });
  };

  publish = () => {
    this.setState({
      publishing: true,
    });
    setTimeout(() => {
      this.setState({
        publishing: false,
        status: true,
      });
    }, 5000);
  };

  showImagePicker = () => {
    return ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  };

  render() {
    console.log(this.state);
    return (
      <ScrollView
        contentContainerStyle={styles.mainView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.containerView}>
          <View style={styles.iconView}>
            <View style={styles.rowStyle}>
              <Icon
                onPress={() => this.props.navigation.goBack(null)}
                name="ios-arrow-back"
                style={styles.paddingView}
              />
              <View>
                <Text style={styles.heading}>Edit Coupon</Text>
              </View>
            </View>
            <Icon
              onPress={() => this.props.navigation.navigate('AddCoupon')}
              name="md-battery-dead"
              style={styles.iconStyle}
            />
          </View>
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.showImagePicker()}
            style={styles.uploadView}>
            <Text style={styles.couponText}>
              Upload Coupon
              {'\n'}
              Image
            </Text>
          </TouchableOpacity>

          <View style={styles.couponView}>
            <View>
              <Text style={styles.label}>Coupon is active</Text>
              <Text style={styles.smallText}>
                You can deactivate the coupon
              </Text>
            </View>
            <Switch
              trackColor="#D2FFEF"
              ios_backgroundColor="#D2FFEF"
              value={this.state.enabled}
              onValueChange={() => this.switchHanlder()}
              thumbColor={this.props.disabled ? '#F2F2F2' : '#26BE8D'}
            />
          </View>

          <View style={styles.rowView}>
            <View>
              <Text style={styles.label}>Title</Text>
              <TextInput
                style={styles.subheading}
                placeholder="Get 50% off on Pizza"
              />
            </View>
          </View>

          <View style={styles.rowView}>
            <View>
              <Text style={styles.label}>Description</Text>
              <Text style={styles.smallText}>{this.state.description}</Text>
            </View>
          </View>

          <View style={styles.rowView}>
            <View>
              <Text style={styles.label}>Type</Text>
              <Text style={styles.smallText}>{this.state.type}</Text>
            </View>
          </View>

          <View style={styles.rowView}>
            <View>
              <Text style={styles.label}>Closing Date</Text>
              <Text style={styles.smallText}>
                {JSON.stringify(this.state.date).substring(1, 11)}
              </Text>
            </View>
          </View>

          <View style={styles.rowView}>
            <View>
              <Text style={styles.label}>Amount</Text>
              <Text style={styles.smallText}>{this.state.amount}</Text>
            </View>
          </View>
          <View style={styles.rowView}>
            <View>
              <Text style={styles.label}>Alcohol Related</Text>
              <Text style={styles.smallText}>{this.state.alcohol}</Text>
            </View>
          </View>

          <TouchableOpacity
            disabled={this.state.status}
            onPress={() => this.publish()}
            style={styles.publish}>
            {this.state.publishing ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.publishText}>
                {this.state.status ? 'Published' : 'Publish Coupon'}
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default EditCoupon;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
  },
  container: {
    margin: 15,
    marginTop: 20,
  },
  heading: {
    color: '#505050',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  input: {
    borderBottomWidth: 0.5,
    borderColor: '#C6C6C6',
    padding: -5,
    paddingTop: 5,
  },
  label: {
    fontFamily: 'Roboto-Bold',
    color: '#505050',
  },
  inputView: {
    margin: 20,
    marginLeft: 5,
    marginTop: 0,
  },
  imageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
  chooseText: {
    fontSize: 12,
    color: '#A1A1A1',
    padding: 5,
    fontFamily: 'Roboto-Regular',
  },
  icon: {color: '#A1A1A1', fontSize: 22},
  radioLabel: {
    fontSize: 13,
    color: '#505050',
    fontFamily: 'Roboto-Regular',
  },
  publish: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26BE8D',
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
  },
  publishText: {
    color: 'white',
    fontFamily: 'Roboto-Regular',
  },
  subheading: {
    color: '#A1A1A1',
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    margin: -5,
    marginTop: -10,
  },
  rowView: {
    margin: 20,
    marginLeft: 5,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  couponView: {
    margin: 20,
    marginLeft: 5,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallText: {
    color: '#A1A1A1',
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  couponText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
  containerView: {
    backgroundColor: '#F5F5F5',
  },
  uploadView: {
    backgroundColor: '#C6C6C6',
    padding: height / 21,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  iconStyle: {
    color: '#FF7676',
    fontSize: 25,
  },
  rowStyle: {
    flexDirection: 'row',
  },
  paddingView: {
    paddingRight: 20,
  },
});
