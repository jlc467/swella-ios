import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { Button, H1 } from 'native-base';
const { width, height } = Dimensions.get('window');
import CloseButton from './CloseButton';
import { parseJSON, checkStatus, buildJSONRequest } from '../utility';
import { SWELLA_API_URL } from '../config';

const styles = { slide: { flex: 1, backgroundColor: 'black' }, image: { width, flex: 1 } };

const renderPagination = (index, total, context) => {
  return (
    <View style={{ width, position: 'absolute', top: 22, alignItems: 'center', zIndex: 9999 }}>
      <Text style={{ color: 'white' }}>
        <Text style={{ color: 'white', fontSize: 20 }}>{index + 1}</Text>/{total}
      </Text>
    </View>
  );
};

const images = [ 0, 1, 2, 3 ];

export default class SelectZoneContainer extends Component {
  constructor() {
    super();
    this.state = { isLoading: false };
  }
  componentDidMount() {
    console.log('got coords', this.props.searchResultDetails.coordinates);
    this.getNearbyZones({
      lat: this.props.searchResultDetails.coordinates.lat,
      long: this.props.searchResultDetails.coordinates.lng
    });
  }
  getNearbyZones = coordinates => {
    this.setState({ isLoading: true, nearyByZones: null }, () => {
      fetch(`${SWELLA_API_URL}/getNearbyZones`, buildJSONRequest('post', { coordinates }))
        .then(checkStatus)
        .then(parseJSON)
        .then(nearyByZones => {
          console.log(nearyByZones);
          this.setState({ nearyByZones, isLoading: false });
        })
        .catch(error => {
          console.log(error);
        });
    });
  };
  renderLoadingScreen = () => {
    return (
      <View
        style={
          {
            width,
            alignItems: 'center',
            zIndex: 9,
            backgroundColor: 'rgba(15, 20, 26, 0.61)',
            position: 'absolute',
            top: 52
          }
        }
      >
        <H1 style={{ color: 'white' }}>Loading Nearby Forecasts...</H1>
      </View>
    );
  };
  render() {
    if (this.state.isLoading) {
      return this.renderLoadingScreen();
    }
    return (
      <View>
        <CloseButton close={this.props.close} top={22} color="white" />
        <View
          style={
            {
              width,
              alignItems: 'center',
              zIndex: 9,
              backgroundColor: 'rgba(15, 20, 26, 0.61)',
              position: 'absolute',
              top: 52
            }
          }
        >
          <H1 style={{ color: 'white' }}>Available Forecasts...</H1>
        </View>
        <Swiper height={height} renderPagination={renderPagination} showsButtons={true} loop={true}>
          {images.map(
              i => (
                <View key={i} style={styles.slide}>
                  <Image style={styles.image} source={{ uri: i.toString(), width, height }} />
                </View>
              )
            )}
        </Swiper>
        <Button
          onPress={this.props.getForecast}
          style={{ bottom: 60, margin: 5, height: 40 }}
          success
          block
        >
          Get Forecast
        </Button>
      </View>
    );
  }
}

