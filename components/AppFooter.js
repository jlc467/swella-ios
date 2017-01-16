import React, { Component } from 'react';
import {
  Dimensions
} from 'react-native'
import { Footer, FooterTab, Button, Icon } from 'native-base';

const { width } = Dimensions.get('window')

export default class AppFooter extends Component {
  render() {
    return (
      <Footer style={{width, position: 'absolute', zIndex: 999999, bottom: 0}}>
        <FooterTab>
          <Button>
            Saved Locations
            <Icon name='ios-star' />
          </Button>
          <Button active>
            Search New Location
            <Icon name='ios-search' />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}