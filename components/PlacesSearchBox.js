import React, { Component } from 'react';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const choices = [
  'Tampa',
  'Miami',
  'Austin',
  'Fort Lauderdale',
  'Long Island',
  'Seattle',
  'San Francisco',
  'Key West'
];

export default class PlacesSearchBox extends Component {
  constructor() {
    super();
    this.state = { placeholder: choices[0], placeholderIndex: 0 };
  }
  generateNewPlaceHolder = () => {
    const placeholderIndex = this.state.placeholderIndex + 1 === choices.length - 1
      ? 0
      : this.state.placeholderIndex + 1;
    this.setState({ placeholder: choices[placeholderIndex], placeholderIndex });
  };
  componentDidMount() {
    this.placeholderInterval = setInterval(this.generateNewPlaceHolder, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.placeholderInterval);
  }
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder={`e.g. ${this.state.placeholder}`}
        minLength={2}
        autoFocus={true}
        fetchDetails
        onPress={(data, details) => {
            console.log(data, details);
            const detailsToKeep = { name: details.name, coordinates: details.geometry.location };
            this.props.placeSelected(detailsToKeep);
          }}
        query={{
            types: '(cities)',
            // default: 'geocode'
            key: 'AIzaSyDqN_tdPaIEdMIltxdvdL3ScCTdbmUg3lQ',
            // language of the results
            language: 'en'
          }}
        enablePoweredByContainer={false}
        styles={
          {
            container: {
              paddingTop: 30,
              marginLeft: 10,
              marginRight: 10,
              justifyContent: 'center',
              zIndex: 9
            },
            listView: { backgroundColor: 'white' },
            textInputContainer: {
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 1,
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderTopColor: 'black',
              borderBottomColor: 'black'
            }
          }
        }
        nearbyPlacesAPI={'GooglePlacesSearch'}
        filterReverseGeocodingByTypes={[ 'locality', 'administrative_area_level_3' ]}
      />
    );
  }
}

