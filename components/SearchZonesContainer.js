import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import { H3, H1 } from 'native-base'
const { width, height } = Dimensions.get('window')
import PlacesSearchBox from './PlacesSearchBox'

export default class SearchZonesContainer extends Component {
  render () {
    return (
      <View style={{width, height}}>
        <View style={{zIndex: -1, width, alignItems:'center', position: 'absolute'}}>
          <H1 style={{color: '#2983BF', marginTop: 30}}>Swella</H1>
          <Text style={{color: 'black'}}>Marine Weather</Text>
        </View>
        <View style={{zIndex: -1, height: height - 75, width, alignItems:'center', justifyContent: 'center', position: 'absolute'}}>
          <H3 style={{color: 'black'}}>Where will you be boating out of?</H3>
        </View>
        <PlacesSearchBox placeSelected={this.props.placeSelected}/>
      </View>
    )
  }
}

