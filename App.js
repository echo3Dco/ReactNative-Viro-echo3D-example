/**
 * Copyright (c) 2015-present, Viro Media, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
} from 'react-native';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator,
} from 'react-viro';

var createReactClass = require('create-react-class');

/*
 * TODO: Add your API key below!!
 */
var API_KEY = "<YOUR_API_KEY_HERE>";

var viroApiKey = "5ECFE036-0FFF-47A8-9895-0EB230B58245";

var arScenes = {
  'ARSimpleSample': require('./js/HelloWorldSceneAR.js'),
}

var ViroCodeSamplesSceneNavigator = createReactClass({

  render: function() {

    // Query echoAR
    fetch('https://console.echoar.xyz/query?key=' + API_KEY)
    .then((response) => response.json())
    .then((json) => {
      // Set database
      global.echoDB = json;
    })
    .catch((error) => {
      console.error(error);
    });

    // Initiate AR scene
    return (
      <ViroARSceneNavigator
        initialScene={{
          scene: arScenes['ARSimpleSample'],
        }}
        apiKey={viroApiKey} />
    );
  }
});

// Uncomment the below line to use the ARDrivingCar Demo. Don't forget to set the apiKey variable in ARDrivingCar.js
// ViroCodeSamplesSceneNavigator = require('./js/ARDrivingCarDemo/ARDrivingCar');

module.exports = ViroCodeSamplesSceneNavigator;
