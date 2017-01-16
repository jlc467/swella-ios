import React, { Component } from 'react';
import { AppRegistry, View, Dimensions } from 'react-native';

import SelectZoneContainer from './components/SelectZoneContainer';
import SearchZonesContainer from './components/SearchZonesContainer';
import AppFooter from './components/AppFooter';
import DayForecastContainer from './components/DayForecastContainer';
const { width, height } = Dimensions.get('window');

export default class swella extends Component {
  constructor() {
    super();
    this.state = { currentRoute: 'searchZones' };
  }
  renderCurrentRoute = () => {
    const { currentRoute } = this.state;
    if (currentRoute === 'searchZones') {
      return (
        <View style={{ width, height }}>
          <SearchZonesContainer
            placeSelected={
              searchResultDetails =>
                this.setState({ searchResultDetails, currentRoute: 'selectZone' })
            }
          />
          <AppFooter />
        </View>
      );
    }
    if (currentRoute === 'dayForecast') {
      return <DayForecastContainer close={() => this.setState({ currentRoute: 'selectZone' })} />;
    }
    if (currentRoute === 'selectZone') {
      return (
        <SelectZoneContainer
          searchResultDetails={this.state.searchResultDetails}
          close={() => this.setState({ currentRoute: 'searchZones' })}
          getForecast={() => this.setState({ currentRoute: 'dayForecast' })}
        />
      );
    }
  };
  render() {
    return this.renderCurrentRoute();
  }
}

AppRegistry.registerComponent('swella', () => swella);

