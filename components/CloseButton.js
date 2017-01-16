import React, { Component } from 'react';
import { Button, Icon } from 'native-base';

export default CloseButton = ({ close, top, left, zIndex, color }) =>
  <Button onPress={close} style={{zIndex: zIndex || 999, position: 'absolute', top: top || 25, left: left || 5}} transparent>
    <Icon style={{fontSize: 35, color: color || 'black'}} name='ios-close' />
  </Button>