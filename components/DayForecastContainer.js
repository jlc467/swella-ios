import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Image,
  Dimensions
} from 'react-native'
import { Icon, Thumbnail, Text, Button, H3, H2, H1, List, ListItem, Content} from 'native-base'
const { width, height } = Dimensions.get('window')
import CloseButton from './CloseButton'

export default class DayForecastContainer extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <View style={{width, height, alignItems:'center'}}>
      <H1 style={{color: '#2983BF', marginTop: 20,  marginBottom: 5}}>Monday</H1>
      <CloseButton close={this.props.close} />
      <ScrollView style={{width, height}}>
        <View style={{alignItems:'center'}}>
        <List style={{width}}>
          <ListItem>
          <Text>Rain starting in the evening. Southeast winds around 5 knots then becoming northeast early in the afternoon...Then becoming northwest late in the afternoon. Bay and inland waters smooth. Patchy sea fog. A slight chance of showers.</Text>
          </ListItem>
          <ListItem>
              <H3 style={{width: 70}}>Rain</H3>
              <Text>70%</Text>
          </ListItem>
          <ListItem>
              <H3 style={{width: 70}}>Wind</H3>
              <Text>3 Knots NNE</Text>
          </ListItem>
          <ListItem>
              <H3 style={{width: 70}}>Temp</H3>
              <Text>70°</Text>
          </ListItem>
        </List>
        <H2 style={{color: '#2983BF', marginTop: 30}}>By the Hour</H2>
        <List style={{width}}>
        <ListItem>
            <H3 style={{width: 70}}>1AM</H3>
            <Text>70% - 3 Knots NNE - 70°</Text>
        </ListItem>
        <ListItem>
            <H3 style={{width: 70}}>2AM</H3>
            <Text>65% - 2 Knots NNE - 73° </Text>
        </ListItem>
        <ListItem>
            <H3 style={{width: 70}}>3AM</H3>
            <Text>65% - 2 Knots NNE - 73° </Text>
        </ListItem>
        </List>
        <H2 style={{color: '#2983BF', marginTop: 30}}>Night Time</H2>
        <List style={{width}}>
          <ListItem>
          <Text>South winds around 10 knots diminishing to around 5 knots late in the evening...Then becoming southeast after midnight. Bay and inland waters a light chop. Patchy sea fog. A slight chance of showers.</Text>
          </ListItem>
        </List>
      </View>
      </ScrollView>
      </View>

    );
  }
}
